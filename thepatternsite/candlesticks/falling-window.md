---
id: falling-window
name: Falling window
aliases: [Down gap]
category: candlestick
type: continuation
direction: bearish
bars: {min: 2, typical: 2}
confirmation: none
rank: {value: 7, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.33
  frequency_rank: 23
source: https://thepatternsite.com/FallingWindow.html
accessed: 2026-07-16
---

# Falling window

## Overview

A two-candle pattern that is simply a price gap in a downtrend: yesterday's low is above
today's high, leaving a hole on the chart. Acts as a bearish continuation 67% of the time.
Common (frequency rank 23) and a high overall performer (rank 7), though that rank reflects
the surrounding trend more than the window itself.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward |
| Configuration | Yesterday's low is above today's high (a gap down with no overlap) |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** Gap down — prior low above current high: `low[1] > high`.

## Confirmation & Breakout

No breakout needed to define the pattern — the gap itself is the signal and it acts as a
bearish continuation 67% of the time. "Stopped in gap" 25% of the time: a minor high
formed within the gap (overhead resistance) before the gap closed.

## Targets & Stops

- The gap acts as support/resistance. Watch for the gap to be "closed" — price retracing
  up to fill the gap (back to `low[1]`).
- No candle-height measure rule stated; the page reports gap-close timing instead.
- Stop: above the gap top (`low[1]`) for a short [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 67% of the time |
| Stopped in gap | 25% (minor high in the gap before it closed) |
| Overall performance rank | 7 of 103 (1 = best) |
| Frequency rank | 23 (common) |
| Average time to gap closed | 55 days |
| Median time to gap closed | 9 days |

The gap type matters: exhaustion gaps (near the end of a trend) close soon; breakaway gaps
signal a fresh trend. The large average-vs-median gap-close gap (55 vs 9 days) reflects a
few very long-lived gaps pulling the average up.

## Trading Tactics

- Determine the gap type (breakaway / exhaustion / common/area) to anticipate whether the
  trend will continue or the gap will close quickly.
- In a downtrend a falling window is often an exhaustion gap rather than an area gap.

## Pine Notes

- Feasibility: **easy**. Single condition `low[1] > high` plus a trend filter; no pivots.
- Gaps are rare on 24h/continuous futures (NQ/ES) where sessions run continuously — most
  useful on daily equity or on the session-open bar of a futures RTH window.
- Suggested inputs: trend-lookback, minimum gap size (as % or ticks) to filter noise,
  optional gap-fill tracking (has price retraced to `low[1]`?).
