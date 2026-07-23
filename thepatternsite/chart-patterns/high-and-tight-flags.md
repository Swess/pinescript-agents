---
id: high-and-tight-flags
name: High and Tight Flag
aliases: [HTF]
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 5, typical: 15}
confirmation: required
rank: {value: 30, of: 39}
stats:
  break_even_failure_rate: 0.15
  avg_move: 0.39
  throwback_rate: 0.67
  pct_meeting_target: 0.82
source: https://thepatternsite.com/htf.html
accessed: 2026-07-16
---

# High and Tight Flag

## Overview

A consolidation that forms after price roughly doubles (rises at least 90%) in two months or
less. It usually does not look like a textbook flag or pennant — just a pause in a powerful
rise. It is a bullish continuation pattern that confirms only when price closes above the
highest peak in the pattern (usually the flagpole top).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the flag; price must rise at least 90% ("shoot for a double") in 2 months or less |
| Shape | A consolidation after the doubling; often just a pause, not a classic flag/pennant |
| Volume | Recedes for best performance |
| Confirmation | Valid when price closes above the highest peak in the pattern, usually the flagpole top |

## Detection Rules (computable)

Definitions: `pole_start` (A) = swing low starting the run, `pole_top` (B) = highest high of
the run (flagpole top); flag = consolidation bars after `pole_top`; `flag_low` (C) = lowest
low of the consolidation.

- **R1 [B]** Flagpole rise ≥ 90% in ≤ 2 months: `(pole_top_high - pole_start_low) / pole_start_low >= 0.90` within `<= 42` trading bars.
- **R2 [D]** Consolidation exists: at least 5 bars after `pole_top` without a new high (default 5, adjustable).
- **R3 [D]** Consolidation is shallow ("tight"): `(pole_top_high - flag_low) / pole_top_high <= 0.25` retracement of price (default 25%, adjustable) and closes stay inside the flag's trendline boundaries.
- **R4 [B]** Volume recedes during the flag (best performance): regression slope of `volume` over flag bars < 0 (optional filter).
- **R5 [B]** Confirmation required: no signal until `close > pole_top_high` (the highest peak in the whole pattern, flagpole included).

## Confirmation & Breakout

Buy **only** when price closes above the highest peak in the chart pattern including the
flagpole (point B). Bulkowski's newer research: flag-trendline breaks fail too often — use a
buy stop above the highest high of the pattern instead. Buying earlier risks the pattern
never confirming (price drops or drifts sideways for months).

## Targets & Stops

- Measure rule (half-height): `height = pole_top_high - pole_start_low`; `target = flag_low + 0.5 * height`
  (added to the bottom of the flag, C). This half-height target is met 82% of the time.
- Stop: for steep trends use a volatility stop; alternatively a trendline drawn beneath price —
  consider selling on a close below it. Placement below `flag_low` is a reasonable default [D].

## Performance

Bull market, based on 1,028 perfect trades:

| Metric | Value |
|---|---|
| Overall performance rank | 30 of 39 (1 = best) |
| Break-even failure rate | 15% |
| Average rise | 39% |
| Throwback rate | 67% |
| % meeting price target | 82% (half-height target) |

Notable: flagpoles rising at roughly 45 degrees lead to better post-breakout gains than
near-vertical ones. Flags with a down-sloping top trendline tend to outperform. Tight flags
beat loose ones (meandering, jagged price poking outside the boundaries).

## Trading Tactics

- Wait for a close above the pattern's highest high (flagpole top) — do not buy the trendline break.
- Place a buy stop above the highest high in the pattern.
- Trade tight flags only; skip loose, jagged consolidations.
- Prefer ~45-degree flagpole slopes over vertical spikes.
- Prefer a down-sloping upper flag trendline.
- Use the half-height measure rule for the target; manage steep trends with a volatility stop or under-price trendline.

## Pine Notes

- Feasibility: **easy-moderate**. R1 is a simple rate-of-change scan (`low` 42 bars back vs
  current high); the consolidation window and breakout level are straightforward `ta.highest`
  logic — no trendline fitting required since confirmation uses the pattern high, not a line.
- Track `pole_start_low` via `ta.lowest(low, 42)` at the time the +90% condition first fires;
  freeze `pole_top_high` with a `var` once consolidation begins.
- Fire the signal only on the first `close > pole_top_high` after ≥ R2 consolidation bars —
  non-repainting by construction.
- Suggested inputs: min rise % (0.90), max pole bars (42), min flag bars (R2), max retracement %
  (R3), volume-filter toggle (R4), target fraction (0.5).
- Subjective criteria: "tight vs loose" — approximate with the retracement cap; the 45-degree
  slope preference depends on chart scaling and is best left as a note, not a rule.
