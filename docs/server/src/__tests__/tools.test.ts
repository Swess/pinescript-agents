import { describe, it, expect, beforeAll } from "vitest";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { loadDocs } from "../loader.js";
import { buildIndex } from "../indexer.js";
import { loadJsonReference } from "../reference-loader.js";
import { handleSearch } from "../tools/search.js";
import { handleReference } from "../tools/reference.js";
import { handleGuide } from "../tools/guide.js";
import { handleExamples } from "../tools/examples.js";
import { handleCategories } from "../tools/categories.js";
import type { Index } from "../types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANUAL_PATH = resolve(__dirname, "../../../manual");
const DOCS_PATH = resolve(__dirname, "../../../docs");

let index: Index;

beforeAll(async () => {
  const jsonEntries = await loadJsonReference();
  const chunks = await loadDocs(MANUAL_PATH, DOCS_PATH);
  index = buildIndex(chunks, jsonEntries);
}, 10000);

describe("pine_search", () => {
  it("finds results for 'vwap'", () => {
    const result = handleSearch(index, {
      query: "vwap",
      source: "all",
      limit: 5,
    });
    expect(result).toContain("vwap");
    expect(result).not.toContain("No results");
  });

  it("does not return README content", () => {
    const result = handleSearch(index, {
      query: "how to use repo cursor windsurf",
      source: "all",
      limit: 5,
    });
    expect(result).not.toContain("README.md");
  });

  it("deduplicates v5 vs v6 results", () => {
    const result = handleSearch(index, {
      query: "repainting",
      source: "all",
      limit: 5,
    });
    // Should not have v5 results
    expect(result).not.toContain("v5/");
  });
});

describe("pine_reference", () => {
  it("looks up ta.rsi with signature and typed params", () => {
    const result = handleReference(index, { name: "ta.rsi" });
    expect(result).toContain("ta.rsi");
    expect(result).toContain("series float");
    expect(result).toContain("source");
    expect(result).toContain("length");
  });

  it("looks up strategy.entry with all params", () => {
    const result = handleReference(index, { name: "strategy.entry" });
    expect(result).toContain("strategy.entry");
    expect(result).toContain("series string");
    expect(result).toContain("direction");
    expect(result).toContain("void");
  });

  it("looks up variable 'close' with type", () => {
    const result = handleReference(index, { name: "close" });
    expect(result).toContain("close");
    expect(result).toContain("series float");
  });

  it("resolves synonym 'sma' to ta.sma", () => {
    const result = handleReference(index, { name: "sma" });
    expect(result).toContain("ta.sma");
  });

  it("includes code examples from markdown", () => {
    const result = handleReference(index, { name: "ta.sma" });
    expect(result).toContain("```pine");
    expect(result).toContain("plot(ta.sma(close");
  });

  it("includes examples for large functions (cross-chunk merge)", () => {
    const result = handleReference(index, { name: "strategy.exit" });
    expect(result).toContain("## Example");
    expect(result).toContain("```pine");
  });

  it("looks up plot with full signature", () => {
    const result = handleReference(index, { name: "plot" });
    expect(result).toContain("series");
    expect(result).toContain("linewidth");
    expect(result).toContain("→ plot");
  });

  it("looks up var keyword", () => {
    const result = handleReference(index, { name: "var" });
    expect(result).toContain("one-time initializing");
  });

  it("includes seeAlso cross-references", () => {
    const result = handleReference(index, { name: "ta.ema" });
    expect(result).toContain("See Also");
    expect(result).toContain("ta.sma");
  });

  it("handles unknown function gracefully", () => {
    const result = handleReference(index, { name: "nonexistent.func" });
    expect(result).toMatch(/No .* found|Closest/);
  });
});

describe("pine_guide", () => {
  it("finds execution model topic", () => {
    const result = handleGuide(index, { topic: "execution model" });
    expect(result.toLowerCase()).toContain("execution");
  });

  it("finds strategies topic with code blocks", () => {
    const result = handleGuide(index, { topic: "strategies" });
    expect(result).toContain("strategy");
    expect(result).toContain("```pinescript");
  });

  it("guide content has no breadcrumb artifacts", () => {
    const result = handleGuide(index, { topic: "execution model" });
    expect(result).not.toContain("User Manual    /");
  });

  it("lists topics when none match", () => {
    const result = handleGuide(index, { topic: "xyznonexistent" });
    expect(result).toContain("Available topics");
  });
});

describe("pine_examples", () => {
  it("finds code examples for strategy", () => {
    const result = handleExamples(index, { query: "strategy entry", limit: 3 });
    expect(result).toContain("```");
  });
});

describe("pine_categories", () => {
  it("lists all categories without singletons", () => {
    const result = handleCategories(index, {});
    expect(result).toContain("ta");
    expect(result).toContain("strategy");
    // Should not have singleton keyword entries like "for (1 entries)"
    expect(result).not.toMatch(/\(1 entries?\)/);
  });

  it("lists items in ta category", () => {
    const result = handleCategories(index, { category: "ta" });
    expect(result).toContain("ta.");
  });

  it("guide topics don't include v3/v4/v5", () => {
    const result = handleCategories(index, {});
    expect(result).not.toMatch(/^- v[345]/m);
  });
});
