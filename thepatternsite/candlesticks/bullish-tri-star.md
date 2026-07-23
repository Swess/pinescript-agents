---
id: bullish-tri-star
name: Bullish tri-star
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 28, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.77
  reversal_rate: 0.60
  frequency_rank: 79
source: https://thepatternsite.com/TriStarBull.html
accessed: 2026-07-16
---

# Bullish tri-star

## Overview

A three-candle bullish reversal in a downtrend built from three doji candles, the middle
doji sitting below the other two. Bulkowski's tests confirm bullish reversal but only 60%
of the time (close to random). Overall performance ranks a high 28th.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| Configuration | Three doji after a downtrend; the middle doji has a body positioned below the other two |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[3] < close[8]` (5-bar downtrend default [D]).
- **R2 [B]** All three candles are doji: `abs(close[2]-open[2]) <= range[2]*0.05 and abs(close[1]-open[1]) <= range[1]*0.05 and abs(close-open) <= range*0.05` (body <= 5% of range [D]).
- **R3 [B]** Middle doji sits below the outer two: `max(open[1], close[1]) < min(open[2], close[2]) and max(open[1], close[1]) < min(open, close)`.
- **R4 [D]** Candles tall (best performance): shadows longer than average range.

## Confirmation & Breakout

Upward breakout (bullish reversal) = close above the top of the pattern:
`close > highest(high, 3)`. Downward breakout = close below the bottom. With a 60%
reversal rate, breakout direction is only mildly predictable.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low`; up target = breakout price +
  height. Price meets target ~77% of the time (best case, bear market, up breakout).
- Stop: below the pattern low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 60% bullish (near random) |
| Overall performance rank | 28 of 103 (1 = best) |
| Frequency rank | 79 |
| Best % meeting target | 77% (bear market, up breakout) |
| Best average move in 10 days | +5.11% (bear market, up breakout) |
| Best 10-day performance rank | 26 (bear market, up breakout) |

Performs slightly better after upward breakouts than downward ones. The best 10-day move
(5.11%) falls just short of the 6% Bulkowski considers "good."

## Trading Tactics

- Patterns within a third of the yearly high tend to act as reversals most often.
- Select tall candles for best performance.
- Best setup: a downward retracement of a primary uptrend, entering on the upward breakout
  that rejoins the uptrend.

## Pine Notes

- Feasibility: **moderate**. Doji detection (R2) and the middle-below-outer geometry (R3)
  need tunable thresholds; no pivots or repainting.
- Signal fires on close of the third candle.
- Suggested inputs: trend-lookback (R1), doji body/range tolerance (R2).
- Mirror image of the bearish tri-star (middle doji below instead of above).
