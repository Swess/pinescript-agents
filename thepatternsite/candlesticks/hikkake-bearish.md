---
id: hikkake-bearish
name: Hikkake, bearish
aliases: [hikkake]
category: candlestick
type: either
direction: bearish
bars: {min: 4, typical: 5}
confirmation: required
rank: {value: 83, of: 105}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.58
  reversal_rate: 0.50
  frequency_rank: 18
source: https://thepatternsite.com/HikkakeBear.html
accessed: 2026-07-16
---

# Hikkake, bearish

## Overview

A three-bar pattern (discovered by Dan Chesler) resembling a three-inside-up but without
the trend or color constraints: an inside day followed by a bar with a higher high and
higher low, then a false-move reversal. It is theoretically bearish when confirmed, but
tests it as a bearish continuation only 50% of the time (random). Confirmation is part of
the definition. Overall performance ranks 83 of 105.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Three (plus confirmation) |
| Price trend | None required |
| Configuration | Inside day (lower high, higher low vs prior day) followed by a higher high and higher low |
| Candle color | Not important |
| Confirmation | Price drops below the low of the inside day within three days after the pattern ends |

## Detection Rules (computable)

Index the 3-bar core so bar1=[n+2], inside-day=[n+1], bar3=[n], where the confirmation
occurs on the current bar (0) up to 3 bars after bar3.

- **R1 [B]** Inside day: `high[n+1] < high[n+2] and low[n+1] > low[n+2]`.
- **R2 [B]** Third bar has higher high and higher low than the inside day: `high[n] > high[n+1] and low[n] > low[n+1]`.
- **R3 [B]** Confirmation within 3 bars of bar3 end: current `low < low[n+1]` (drops below the inside day's low), with `n` in 0..2 (search window of 3 bars).
- **R4 [D]** No candle-color constraint — do not gate on body direction.

## Confirmation & Breakout

Confirmation = price closes/trades below the inside day's low (`low < inside_day_low`) within
three days. Bulkowski measured performance from a breakout defined as a close below the
lowest low or above the highest high of the 3-bar candle; downward breakouts are ~2× as
common as upward ones.

## Targets & Stops

- Height target: `height = highest(high, 3-bar) - lowest(low, 3-bar)`; down target =
  breakout price − height (met ~58% best config: bear market, down breakout).
- Entry: sell/short stop below the lowest low in the pattern (or below the inside day's low).
- Stop (Chesler): opposite end of the pattern — for a down breakout, a penny above the
  highest high in the 3-bar pattern.

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 50% (random) |
| Overall rank | 83 of 105 (1 = best) |
| Frequency rank | 18 (common) |
| Best % meeting target | 58% (bear market, down breakout) |
| Best avg 10-day move | −5.65% (bear market, down breakout) |
| Best 10-day rank | 15 (bear market, down breakout) |

Tall hikkakes (taller than ~5.23% of breakout price ÷ pattern height) far outperform short
ones (−11.83% vs −7.56% in bear markets). Breakouts below a 50-bar EMA do better in bear
markets after down breakouts (10.54% vs 8.11%).

## Trading Tactics

- Once the three bars form, place a sell stop below the lowest low (or below the inside
  day's low) to enter on confirmation.
- Prefer tall patterns — they outperform in every market/breakout combination.
- Chesler: stop at the opposite end of the pattern (highest high for down breakouts).

## Pine Notes

- Feasibility: **moderate**. The 3-bar geometry is pure OHLC, but the "within 3 days"
  confirmation needs a small rolling search window (`n` in 0..2) — implement as a state flag
  set when the 3-bar core forms and cleared after 3 bars or on confirmation.
- No pivots or repaint issues; signal fires on the confirmation bar (`barstate.isconfirmed`).
- Suggested inputs: confirmation window (default 3 bars), tall-pattern threshold, 50-EMA
  filter. Color and trend are intentionally unconstrained.
