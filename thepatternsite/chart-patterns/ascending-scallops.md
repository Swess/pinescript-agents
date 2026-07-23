---
id: ascending-scallops
name: Ascending scallops
aliases: [J pattern]
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 20, of: 39}
stats:
  break_even_failure_rate: 0.11
  avg_move: 0.42
  throwback_rate: 0.68
  pct_meeting_target: 0.62
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/ascscallop.html
accessed: 2026-07-16
---

# Ascending scallops

## Overview

A J-shaped pattern in an uptrend: two peaks with a rounded valley between them and a
higher right peak. Bulkowski calls ascending scallops arguably the most common chart
pattern, but mid-list performers. The pattern confirms only on breakout — a close above
the highest peak (upward) or below the pattern's low (downward).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the chart pattern |
| Shape | Looks like the letter J: two peaks with a rounded valley in between and a higher right peak |
| Narrowing | Scallops tend to be wider near the start of a price trend than near the end |
| Breakout / confirmation | Close above the highest peak = upward breakout; close below the pattern's low = downward breakout; the breakout confirms the scallop |

## Detection Rules (computable)

Definitions: `peak1` = left peak (swing high), `valley` = rounded low between peaks
(swing low, point B in Bulkowski's measure figure uses A = highest peak; here label
`low_V`), `peak2` = right peak, with `high_p2 > high_p1`.

- **R1 [B]** Prior trend up: `close` at `peak1` above the close `N` bars earlier (default `N = 20` [D]).
- **R2 [B]** Higher right peak: `high_p2 > high_p1`.
- **R3 [D]** Rounded valley: valley spans ≥ 3 bars within 1% of its low and is not a single-bar V-spike (default; subjective criterion).
- **R4 [D]** Valley depth meaningful but not full retrace: `0.20 <= (high_p1 - low_V) / (high_p1 - low_start) <= 1.0` where `low_start` is the low starting the up leg; simpler default: `(high_p1 - low_V) / high_p1 >= 0.05`.
- **R5 [D]** Pattern width: `10 <= (bar_p2 - bar_p1) <= 60` bars (not stated; defaults).
- **R6 [B]** Pattern valid only on confirmation (see below).

## Confirmation & Breakout

Upward breakout: `close > max(high_p1, high_p2)` (close above the highest peak).
Downward breakout: `close < low_V` (close below the pattern's low). In a bull market
ascending scallops break out upward 83% of the time.

## Targets & Stops

- Height: `H = highest_peak - lowest_valley`.
- Upward target: `target = highest_peak + 0.62 * H` (62% percentage-meeting-target).
- Downward target: `target = lowest_valley - 0.29 * H` (29%); ignore targets below zero.
- Stop: below the lowest valley if not too far away; if a handle forms on the right,
  a few cents below the handle low; alternatively a few cents below the left rim (pick
  an odd price level, not a round number where everyone else puts stops). Raise the
  stop as price rises.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 20 of 39 | 22 of 36 |
| Break-even failure rate | 11% | 23% |
| Average rise/decline | 42% | 15% |
| Throwback/pullback rate | 68% | 64% |
| % meeting price target | 62% | 29% |

Bull-market numbers based on more than 1,600 perfect trades. Notable: upward breakouts
occur 83% of the time (bull market); heavy breakout volume outperforms; upward
breakouts from the *middle* third of the yearly price range do best; throwbacks hurt
post-breakout performance.

## Trading Tactics

- Measure rule: height (highest peak to lowest valley) × 62%, added to the highest
  peak (up) or × 29% subtracted from the valley (down).
- Handle: after the right peak, price often retraces into a handle or another scallop
  — buy when that bottoms.
- Prefer heavy breakout volume and breakouts from the middle third of the yearly range.
- Throwbacks (68%) hurt performance.
- Series behavior: successive scallops in a rising trend get shorter and narrower as
  the trend end approaches — shrinking scallops warn the trend is aging.

## Pine Notes

- Feasibility: **moderate-hard**. The J-shape needs `ta.pivothigh`/`ta.pivotlow` for
  the two peaks and rounded valley; the "rounded" quality (R3) is subjective — code it
  as bars-near-low width and ship as an optional filter.
- Pivots confirm `len` bars late; anchor entries to the breakout close, never pivot
  bars, to avoid repainting.
- Suggested inputs: pivot length, min valley depth (R4), max pattern width (R5),
  trend-lookback N (R1), up/down target multipliers (0.62 / 0.29).
- Optional series feature: track consecutive scallop widths/heights in a `var` array
  and flag when they contract (trend-end warning).
