# thepatternsite — Formalized Pattern Rules Repository

A repository of formalized, machine-translatable trading pattern specifications derived from
Thomas Bulkowski's research published at [thepatternsite.com](https://thepatternsite.com/).

## Purpose

Each file in this repository is a **crystal-clear rule spec** for one pattern: identification
criteria expressed as computable conditions, confirmation/breakout triggers, measure-rule
targets, stop placement, and Bulkowski's performance statistics. The specs are written so that
an agent (or human) can translate any pattern directly into a TradingView Pine Script v6
indicator or strategy **without re-reading the source site**.

## Structure

| Path | Contents |
|------|----------|
| `SCHEMA.md` | The pattern-file spec: frontmatter fields, section order, rule notation |
| `INDEX.md` | Master table of all patterns (generated from frontmatter) |
| `_manifest.yaml` | Canonical source-URL → file mapping with extraction status |
| `chart-patterns/` | Multi-bar formations: double tops/bottoms, H&S, triangles, flags, wedges… |
| `candlesticks/` | 1–5 bar candle formations: engulfing, doji family, stars, marubozu… |
| `small-patterns/` | Bulkowski's short-term patterns: key reversals, NR4/NR7, inside days, Gap2H… |
| `harmonics/` | Fibonacci-ratio patterns: Gartley, Bat, Butterfly, Crab, AB=CD, Wolfe Wave |

## Rule notation

Detection rules are numbered `R1…Rn`. Each rule is tagged with its provenance:

- **`[B]`** — stated directly by Bulkowski on the source page.
- **`[D]`** — our default quantification of a qualitative criterion (e.g. "valleys look
  similar" → "valley lows within 3%"). Defaults are starting points; expose them as script
  inputs when translating to Pine.

## Using a spec to build a Pine Script

1. Pick a pattern from `INDEX.md` (sorted by Bulkowski's performance rank).
2. Read its spec file: the **Detection Rules** section maps to detection logic, **Confirmation
   & Breakout** to the signal trigger, **Targets & Stops** to strategy exits.
3. Check the **Pine Notes** section for translation gotchas (pivot-lookback repainting,
   subjective criteria, lookback limits).
4. Follow this repo's root `CLAUDE.md` conventions (`//@version=6`, alert annotation, etc.).

## Scope notes

Included: chart patterns, candlestick patterns, small patterns, harmonics.
Deliberately excluded: event patterns (earnings, FDA, same-store sales — require external
data), Elliott Wave pages, busted-pattern variants, and article/study pages (setups, trading
tips, market-timing essays). Busted patterns are a candidate follow-up category.

## Attribution & sourcing

All pattern research, identification guidelines, and statistics originate from
**Thomas N. Bulkowski, thepatternsite.com** (© Thomas Bulkowski). This repository contains
paraphrased formalizations for **private research use** — not verbatim reproductions and not
for redistribution. Every spec cites its source URL and access date in frontmatter.
Statistics reflect Bulkowski's historical studies (mostly US stocks, daily bars) as of the
access date; they are descriptive research context, not guarantees of future performance.
