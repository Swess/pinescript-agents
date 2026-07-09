import { describe, it, expect } from "vitest";
import { buildIndex, search } from "../indexer.js";
import type { DocChunk } from "../types.js";

function makeChunk(
  overrides: Partial<DocChunk> & { content: string }
): DocChunk {
  const content = overrides.content;
  const tokens = content
    .toLowerCase()
    .replace(/[^a-z0-9_.]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
  return {
    id: overrides.id || "test#0",
    source: overrides.source || "manual",
    filePath: overrides.filePath || "reference/functions/ta.md",
    heading: overrides.heading || "Test",
    content,
    tokens,
  };
}

describe("buildIndex", () => {
  it("builds inverted index from chunks", () => {
    const chunks = [
      makeChunk({ content: "## ta.sma\nSimple moving average" }),
      makeChunk({ content: "## ta.ema\nExponential moving average" }),
    ];
    const index = buildIndex(chunks);
    expect(index.invertedIndex.has("moving")).toBe(true);
    expect(index.invertedIndex.get("moving")!.size).toBe(2);
    expect(index.invertedIndex.get("simple")!.size).toBe(1);
  });

  it("builds function lookup from reference chunks", () => {
    const chunks = [
      makeChunk({
        content:
          "## ta.sma\n\nSimple moving average.\n\n```pinescript\nta.sma(source, length)\n```",
        filePath: "reference/functions/ta.md",
      }),
    ];
    const index = buildIndex(chunks);
    expect(index.functionLookup.has("ta.sma")).toBe(true);
    expect(index.functionLookup.has("sma")).toBe(true);
    expect(index.functionLookup.get("ta.sma")!.name).toBe("ta.sma");
  });

  it("adds synonym mappings", () => {
    const chunks = [
      makeChunk({
        content: "## ta.rsi\n\nRelative strength index.",
        filePath: "reference/functions/ta.md",
      }),
    ];
    const index = buildIndex(chunks);
    expect(index.functionLookup.has("rsi")).toBe(true);
  });
});

describe("search", () => {
  it("returns matching chunks sorted by score", () => {
    const chunks = [
      makeChunk({
        id: "a",
        content: "## ta.sma\nSimple moving average calculation",
      }),
      makeChunk({
        id: "b",
        content: "## ta.ema\nExponential moving average for smoothing",
      }),
      makeChunk({
        id: "c",
        content: "## Strategy entry\nHow to enter trades",
      }),
    ];
    const index = buildIndex(chunks);
    const results = search(index, "moving average");
    expect(results.length).toBeGreaterThanOrEqual(2);
    expect(results[0].chunk.id).toMatch(/^[ab]/);
  });

  it("filters by source", () => {
    const chunks = [
      makeChunk({
        id: "manual",
        source: "manual",
        content: "## ta.sma\nMoving average",
      }),
      makeChunk({
        id: "docs",
        source: "docs",
        content: "## Moving Averages\nMoving average guide",
      }),
    ];
    const index = buildIndex(chunks);
    const results = search(index, "moving average", "docs");
    expect(results.every((r) => r.chunk.source === "docs")).toBe(true);
  });

  it("returns empty for no matches", () => {
    const index = buildIndex([]);
    expect(search(index, "nonexistent")).toEqual([]);
  });
});
