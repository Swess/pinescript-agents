import * as cheerio from "cheerio";
import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, "../../docs");
const BASE_URL = "https://www.tradingview.com/pine-script-docs";

const SITEMAP_URL = "https://www.tradingview.com/pine-script-docs/sitemap-0.xml";

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) PineScriptDocsScraper/1.0",
    },
  });
  if (!res.ok) throw new Error(`${res.status} fetching ${url}`);
  return res.text();
}

async function discoverPages(): Promise<string[]> {
  try {
    const xml = await fetchText(SITEMAP_URL);
    const $ = cheerio.load(xml, { xml: true });
    const urls: string[] = [];
    $("url > loc").each((_, el) => {
      const loc = $(el).text().trim();
      if (loc.includes("/pine-script-docs")) {
        urls.push(loc);
      }
    });
    if (urls.length > 0) {
      console.log(`Found ${urls.length} pages from sitemap`);
      return urls;
    }
  } catch (e) {
    console.log("Sitemap not available, trying HTML discovery...");
  }

  // Fallback: discover from sidebar links on main page
  const html = await fetchText(BASE_URL);
  const $ = cheerio.load(html);
  const urls = new Set<string>();
  urls.add(BASE_URL);

  $('a[href*="/pine-script-docs"]').each((_, el) => {
    const href = $(el).attr("href");
    if (href) {
      const full = href.startsWith("http")
        ? href
        : `https://www.tradingview.com${href}`;
      if (
        full.includes("/pine-script-docs") &&
        !full.includes("#") &&
        !full.includes("?")
      ) {
        urls.add(full.replace(/\/$/, ""));
      }
    }
  });

  console.log(`Discovered ${urls.size} pages from HTML`);
  return Array.from(urls);
}

function htmlToMarkdown($: cheerio.CheerioAPI, el: cheerio.Cheerio): string {
  let md = "";

  el.contents().each((_, node) => {
    if (node.type === "text") {
      md += $(node).text();
      return;
    }

    const $node = $(node);
    const tag = (node as cheerio.Element).tagName?.toLowerCase();

    if (!tag) return;

    if (tag.match(/^h[1-6]$/)) {
      const level = parseInt(tag[1]);
      const prefix = "#".repeat(level);
      md += `\n\n${prefix} ${$node.text().trim()}\n\n`;
    } else if (tag === "p") {
      md += `\n\n${htmlToMarkdown($, $node).trim()}\n`;
    } else if (tag === "pre" || tag === "code") {
      if (tag === "pre") {
        const code = $node.find("code").length
          ? $node.find("code").text()
          : $node.text();
        md += `\n\n\`\`\`pinescript\n${code.trim()}\n\`\`\`\n`;
      } else if (!$node.parent("pre").length) {
        md += `\`${$node.text()}\``;
      }
    } else if (tag === "ul" || tag === "ol") {
      md += "\n";
      $node.children("li").each((i, li) => {
        const prefix = tag === "ol" ? `${i + 1}. ` : "- ";
        md += `${prefix}${htmlToMarkdown($, $(li)).trim()}\n`;
      });
    } else if (tag === "table") {
      const rows: string[][] = [];
      $node.find("tr").each((_, tr) => {
        const cells: string[] = [];
        $(tr)
          .find("th, td")
          .each((_, cell) => {
            cells.push($(cell).text().trim());
          });
        rows.push(cells);
      });
      if (rows.length > 0) {
        const colCount = Math.max(...rows.map((r) => r.length));
        md += "\n\n";
        md += `| ${rows[0].join(" | ")} |\n`;
        md += `| ${Array(colCount).fill("---").join(" | ")} |\n`;
        for (let i = 1; i < rows.length; i++) {
          md += `| ${rows[i].join(" | ")} |\n`;
        }
      }
    } else if (tag === "a") {
      const href = $node.attr("href") || "";
      const text = $node.text().trim();
      if (href && text) {
        md += `[${text}](${href})`;
      } else {
        md += text;
      }
    } else if (tag === "strong" || tag === "b") {
      md += `**${$node.text().trim()}**`;
    } else if (tag === "em" || tag === "i") {
      md += `*${$node.text().trim()}*`;
    } else if (tag === "br") {
      md += "\n";
    } else if (tag === "div" || tag === "section" || tag === "article") {
      md += htmlToMarkdown($, $node);
    } else {
      md += $node.text();
    }
  });

  return md;
}

// Pine Script code line detection
const PINE_START_PATTERNS = [
  /^\/\/@version=\d/,
  /^indicator\s*\(/,
  /^strategy\s*\(/,
  /^library\s*\(/,
  /^\/\/@(function|variable|description|param|returns)/,
];

const PINE_CONTINUATION_PATTERNS = [
  /^\/\//,                          // comments
  /^\s/,                            // indented lines
  /^(float|int|bool|string|color|var|varip)\s/,
  /^(if|else|for|while|switch|import|export|method|type)\b/,
  /^[a-zA-Z_][a-zA-Z0-9_.]*\s*[=(]/,  // assignment or function call
  /^[a-zA-Z_][a-zA-Z0-9_.]*\s*:=/,     // reassignment
  /^\s*$/,                          // blank lines within code
  /^plot[a-z]*\s*\(/,
  /^label\.|^line\.|^box\.|^table\./,
  /^strategy\.|^ta\.|^math\.|^str\.|^array\.|^map\./,
  /^\[/,                            // tuple destructuring
  /^=>$/,                           // arrow functions
];

function cleanGuideMarkdown(content: string): string {
  let lines = content.split("\n");

  // Strip breadcrumb lines (e.g., "User Manual    / Language / ...")
  lines = lines.filter(
    (line) => !/^User Manual\s+\//.test(line.trim())
  );

  // Strip trailing nav artifacts
  const navIdx = lines.findIndex((line) =>
    /^Previous\s+.*\s+Next\s+/.test(line.trim())
  );
  if (navIdx !== -1) {
    lines = lines.slice(0, navIdx);
  }

  // Also strip "On this page" TOC at the end
  const tocIdx = lines.findLastIndex((line) =>
    /^On this page$/.test(line.trim())
  );
  if (tocIdx !== -1 && tocIdx > lines.length * 0.7) {
    lines = lines.slice(0, tocIdx);
  }

  // Fix admonitions: "NoteThis" -> "\n**Note:** This"
  lines = lines.map((line) =>
    line
      .replace(/^(Note)(This|The|A |An |In |If |When |For |Pine|Scripts?|User)/g, "**Note:** $2")
      .replace(/^(Warning)(This|The|A |An |In |If |When |For |Pine|Scripts?)/g, "**Warning:** $2")
      .replace(/^(Tip)(This|The|A |An |In |If |When |For |Pine|Scripts?)/g, "**Tip:** $2")
  );

  // Detect and fence code blocks
  const result: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check if this line starts a Pine Script code block
    if (
      PINE_START_PATTERNS.some((p) => p.test(trimmed)) &&
      !isInsideCodeFence(result)
    ) {
      result.push("```pinescript");
      result.push(line);
      i++;

      // Consume continuation lines
      while (i < lines.length) {
        const nextTrimmed = lines[i].trim();
        // A non-empty line that doesn't match code patterns = end of code
        if (
          nextTrimmed !== "" &&
          !PINE_CONTINUATION_PATTERNS.some((p) => p.test(nextTrimmed)) &&
          !PINE_START_PATTERNS.some((p) => p.test(nextTrimmed))
        ) {
          break;
        }
        // Two consecutive blank lines = end of code
        if (
          nextTrimmed === "" &&
          i + 1 < lines.length &&
          lines[i + 1].trim() === "" &&
          i + 2 < lines.length &&
          /^[A-Z]/.test(lines[i + 2].trim())
        ) {
          break;
        }
        result.push(lines[i]);
        i++;
      }

      // Trim trailing blank lines from code block
      while (result.length > 0 && result[result.length - 1].trim() === "") {
        result.pop();
      }
      result.push("```");
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function isInsideCodeFence(lines: string[]): boolean {
  let fenceCount = 0;
  for (const line of lines) {
    if (line.trim().startsWith("```")) fenceCount++;
  }
  return fenceCount % 2 === 1;
}

function urlToFilePath(url: string): string {
  let path = url
    .replace("https://www.tradingview.com/pine-script-docs", "")
    .replace(/^\//, "")
    .replace(/\/$/, "");

  if (!path) path = "index";

  return path.replace(/\//g, "/") + ".md";
}

async function scrapePage(
  url: string
): Promise<{ path: string; content: string } | null> {
  try {
    const html = await fetchText(url);
    const $ = cheerio.load(html);

    // Try common content selectors
    let mainContent =
      $("main").first() ||
      $('[class*="content"]').first() ||
      $("article").first();

    if (!mainContent.length) {
      mainContent = $("body");
    }

    // Remove nav, sidebar, footer
    mainContent
      .find("nav, footer, [class*='sidebar'], [class*='nav'], script, style")
      .remove();

    const title =
      $("h1").first().text().trim() ||
      $("title").text().trim().replace(" | TradingView", "");
    const markdown = htmlToMarkdown($, mainContent);
    const cleaned = markdown.replace(/\n{3,}/g, "\n\n").trim();

    if (cleaned.length < 50) return null;

    const filePath = urlToFilePath(url);
    const content = cleanGuideMarkdown(`# ${title}\n\n${cleaned}`);

    return { path: filePath, content };
  } catch (e) {
    console.error(`Failed to scrape ${url}: ${e}`);
    return null;
  }
}

async function main() {
  console.log("Scraping Pine Script user guide...");

  const pages = await discoverPages();

  const indexEntries: string[] = [];
  let scraped = 0;

  // Process in batches of 5
  for (let i = 0; i < pages.length; i += 5) {
    const batch = pages.slice(i, i + 5);
    const results = await Promise.all(batch.map(scrapePage));

    for (const result of results) {
      if (!result) continue;

      const fullPath = join(DOCS_DIR, result.path);
      await mkdir(dirname(fullPath), { recursive: true });
      await writeFile(fullPath, result.content, "utf-8");
      indexEntries.push(
        `- [${result.path.replace(".md", "")}](${result.path})`
      );
      scraped++;
    }

    if (i % 20 === 0 && i > 0) {
      console.log(`  Scraped ${scraped}/${pages.length} pages...`);
    }
  }

  // Write index
  const indexContent = `# Pine Script User Guide Index\n\n${indexEntries.sort().join("\n")}\n`;
  await writeFile(join(DOCS_DIR, "INDEX.md"), indexContent, "utf-8");

  console.log(`\nDone! Scraped ${scraped} pages to ${DOCS_DIR}`);
}

main().catch(console.error);
