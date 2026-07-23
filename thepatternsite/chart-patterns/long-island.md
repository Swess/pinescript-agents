---
id: long-island
name: Long Island
aliases: []
category: chart-pattern
type: continuation
direction: either
bars: {min: 2, typical: 20}
confirmation: none
rank: {value: 43, of: 56}
stats:
  break_even_failure_rate: 0.21
  avg_move: 0.33
  throwback_rate: 0.53
  pct_meeting_target: 0.71
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/longisland.html
accessed: 2026-07-16
---

# Long Island

## Overview

A long island is a price island set off from the mainland by two gaps that do **not** align
in price (if they aligned, it would be an island reversal). It is a continuation pattern
that performs best in bear markets. Note: as of 9/11/2020 Bulkowski no longer considers the
long island a valid chart pattern, though the statistics remain published.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Any direction leading to the island |
| Shape | Non-aligned gaps separate a price island from the mainland |
| Gaps | The two gaps do **not** share the same price (shared price = island reversal) |
| Wide gaps | Gaps at least $1 wide (arbitrary) |
| Length | Islands shorter than 4 months (arbitrary limit) |
| Sequence | Islands tend to get shorter later in a trend; may signal a trend change |
| Breakout | The day after the second gap is the breakout day |

## Detection Rules (computable)

Definitions: `gap1` = gap into the island, `gap2` = gap out of it.

- **R1 [B]** Two gaps bound the island: an entry gap and an exit gap (both true gaps between adjacent bars).
- **R2 [B]** Gaps do NOT overlap in price: entry-gap zone and exit-gap zone are disjoint (distinguishes from island reversal).
- **R3 [B]** Each gap is wide: `gap_size >= tickValue` proxy for "$1 wide" — default `gap_size / close >= 0.01` [D] (site's $1 is arbitrary).
- **R4 [B]** Island length `< 4 months` (~ `< 85` daily bars [D]).
- **R5 [B]** Continuation: breakout direction equals the entry direction (price exits the same way it entered).
- **R6 [B]** Breakout day is the bar after the second gap.

## Confirmation & Breakout

No separate confirmation — the second (exit) gap defines the breakout, and the day after
the second gap is the breakout day. Direction continues the prior trend (continuation).

## Targets & Stops

- Measure rule uses **half** the island's height:
  `H = highest_peak_high (A) - lowest_valley_low in island (B)`.
- Target (up): `target = close_before_2nd_gap + 0.71 * (H / 2)`.
- Target (down): `target = close_before_2nd_gap - 0.55 * (H / 2)`.
- Stop: on the opposite side of the island.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 43 of 56 | 34 of 53 |
| Break-even failure rate | 21% | 27% |
| Average move | 33% rise | 14% decline |
| Throwback / pullback rate | 53% | 52% |
| % meeting price target | 71% | 55% |

Based on over a thousand perfect trades (bull market). Measure rule uses half the island
height. Notable: tall (and tall-and-wide) islands perform best; avoid short islands late in
a trend (possible trend change) and upward-breakout islands in the middle of the yearly
range (worst performers).

## Trading Tactics

- Trade in the continuation (entry) direction after the second gap.
- Prefer tall and wide islands.
- Avoid short islands appearing well into a trend (trend-change risk).
- Avoid upward-breakout long islands in the middle of the yearly price range.

## Pine Notes

- Feasibility: **easy–moderate**. Gap detection is simple; the defining test is that the
  two gaps do NOT share price (R2) — the inverse of an island reversal.
- Gaps are non-repainting after the gap bar closes; the breakout day (bar after second gap)
  can trigger the signal directly.
- Suggested inputs: min gap size % (R3), max island length (R4), trend/continuation check.
- Bulkowski deprecated this pattern (9/11/2020); expose it but note the caveat. Futures
  session-open gaps can produce false positives — validate on the intended timeframe.
