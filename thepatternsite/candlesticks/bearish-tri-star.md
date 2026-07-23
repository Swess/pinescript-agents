---
id: bearish-tri-star
name: Bearish tri-star
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 76, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.72
  reversal_rate: 0.52
  frequency_rank: 77
source: https://thepatternsite.com/TriStarBear.html
accessed: 2026-07-16
---

# Bearish tri-star

## Overview

A three-candle bearish reversal in an uptrend built from three doji candles, the middle
doji sitting above the other two. Bulkowski's tests show it reverses only 52% of the time
(essentially random), and overall performance ranks a weak 76th — price rarely trends
after the breakout.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| Configuration | Three doji candles; the middle doji has a body positioned above the other two |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** All three candles are doji: `abs(close[2]-open[2]) <= range[2]*0.05 and abs(close[1]-open[1]) <= range[1]*0.05 and abs(close-open) <= range*0.05` (body <= 5% of range [D]; "within a few pennies").
- **R3 [B]** Middle doji sits above the outer two: `min(open[1], close[1]) > max(open[2], close[2]) and min(open[1], close[1]) > max(open, close)`.
- **R4 [D]** Candles tall (best performance): shadows longer than average range.

## Confirmation & Breakout

Downward breakout (bearish reversal) = close below the bottom of the pattern:
`close < lowest(low, 3)`. Upward breakout = close above the top. With a 52% reversal rate,
do not anticipate the direction.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low`; down target = breakout price −
  height. Price meets target ~72% of the time (best case, bear market, down breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 52% bearish (near random) |
| Overall performance rank | 76 of 103 (1 = best) |
| Frequency rank | 77 |
| Best % meeting target | 72% (bear market, down breakout) |
| Best average move in 10 days | −4.29% (bear market, down breakout) |
| Best 10-day performance rank | 41 (bull market, up breakout) |

The best 10-day move (4.29%) falls well short of the 6% Bulkowski considers "good."

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Select tall candles for best performance.
- Best setup: trade the bearish tri-star in an upward retrace of a primary downtrend.

## Pine Notes

- Feasibility: **moderate**. Doji detection (R2) and the middle-above-outer geometry (R3)
  need tunable thresholds; no pivots or repainting.
- Signal fires on close of the third candle.
- Suggested inputs: trend-lookback (R1), doji body/range tolerance (R2).
- Three consecutive doji is uncommon — expect few live signals. A doji = open and close
  within a few cents of each other.
