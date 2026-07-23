---
id: gravestone-doji
name: Gravestone doji
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 77, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0509
  throwback_rate: null
  pct_meeting_target: 0.79
  reversal_rate: 0.51
  frequency_rank: 42
source: https://thepatternsite.com/Gravestone.html
accessed: 2026-07-16
---

# Gravestone doji

## Overview

A single doji candle with a tall upper shadow and little or no lower shadow, open and close
within pennies near the low. Theory ranges from indecision to a bearish reversal in
uptrends; Bulkowski's tests show a near-random bearish reversal 51% of the time. Weak
post-breakout trend (rank 77) but meets the target 79% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | None required |
| Configuration | Tall upper shadow, little or no lower shadow; open and close within pennies |

## Detection Rules (computable)

- **R1 [B]** Doji body: `abs(close - open) <= 0.1 * (high - low)` (default 10% body-to-range [D]).
- **R2 [B]** Long upper shadow: `(high - max(open, close)) >= 0.66 * (high - low)` (upper shadow ≥ ~2/3 of range [D]).
- **R3 [B]** Little or no lower shadow: `(min(open, close) - low) <= 0.1 * (high - low)` (default 10% [D]).

## Confirmation & Breakout

Breakout measured from a close above the candle top (up) or below the candle bottom (down).
Price closes near the low, so downward breakouts predominate (~51%).

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout in the breakout
  direction. Best % meeting target 79% (bear market, up breakout).
- Stop: above the candle high for a short [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish reversal 51% of the time (indecision/random) |
| Overall performance rank | 77 of 103 (1 = best) |
| Frequency rank | 42 |
| Best % meeting target | 79% (bear market, up breakout) |
| Best avg 10-day move | 5.09% (bear market, up breakout) |
| Best 10-day performance rank | 27 (bear market, up breakout) |

Rare in bear markets (bull:bear sightings ~15:1). Price does not trend far after a
breakout, but after an up breakout in a bear market the 5.09% climb is respectable.

## Trading Tactics

- Best within a third of the yearly low.
- Candles taller than the median move about 50% farther after the breakout than shorter ones.
- Ignore gravestone doji that appear in congestion areas.

## Pine Notes

- Feasibility: **easy**. Single-bar shadow/body ratios; no pivots, no repainting.
- Mirror of the dragonfly doji (tall *upper* shadow instead of lower). Threshold-sensitive:
  expose body-to-range, upper-shadow, and lower-shadow ratios as inputs.
- No trend precondition, so it fires often; add a breakout filter and/or a
  congestion-area exclusion to cut noise.
