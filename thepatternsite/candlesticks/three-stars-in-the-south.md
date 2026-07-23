---
id: three-stars-in-the-south
name: Three stars in the south
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 103, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.50
  reversal_rate: 0.86
  frequency_rank: 99
source: https://thepatternsite.com/ThreeStarsSouth.html
accessed: 2026-07-16
---

# Three stars in the south

## Overview

A rare three-candle bullish reversal in a downtrend: a tall black candle with a long lower
shadow, then a smaller similar black candle with a higher low, then a black marubozu that
fits inside the prior day's range. Bulkowski found only 9 samples — its 86% reversal rate
is the highest of all 103 candles, but its overall performance ranks dead last (103rd):
price reverses, then goes almost nowhere.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle with a long lower shadow |
| Second candle | Similar to the first but smaller, with a higher low |
| Third candle | Black marubozu that squeezes inside the high-low range of the prior (second) day |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[2] < close[7]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[2] < open[2]`.
- **R3 [D]** First candle tall: `(open[2] - close[2]) > ta.sma(high - low, 20)`.
- **R4 [B]** First candle has a long lower shadow: `(min(open[2], close[2]) - low[2]) > (open[2] - close[2]) * 0.5` (shadow > half body [D]).
- **R5 [B]** Second candle black: `close[1] < open[1]`.
- **R6 [B]** Second candle smaller than first: `(open[1] - close[1]) < (open[2] - close[2])`.
- **R7 [B]** Second candle has a higher low: `low[1] > low[2]`.
- **R8 [B]** Third candle black marubozu: `close < open and (high - open) <= range * 0.05 and (close - low) <= range * 0.05` (negligible shadows [D]).
- **R9 [B]** Third candle inside second day's range: `high <= high[1] and low >= low[1]`.

## Confirmation & Breakout

Downward breakout occurs when price closes below the bottom of the pattern; upward
breakout (the bullish-reversal case) when price closes above the top:
`close > highest(high, 3)`. With only 9 samples any conclusion is unreliable.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low`; up target = breakout price +
  height. Price meets target ~50% of the time (best case, bear market, up breakout).
- Stop: below the pattern low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 86% bullish (best of all 103, but only 9 samples) |
| Overall performance rank | 103 of 103 (worst) |
| Frequency rank | 99 (extremely rare) |
| Best % meeting target | 50% (bear market, up breakout) |
| Best average move in 10 days | −3.64% (bull market, down breakout) |
| Best 10-day performance rank | 23 (bull market, down breakout) |

The near-perfect reversal rate is a statistical artifact of the tiny sample. Even the best
10-day move (3.64%) is roughly half of what Bulkowski considers "good" (6%).

## Trading Tactics

Not stated by Bulkowski (no trading-tidbits section on the page).

## Pine Notes

- Feasibility: **moderate**. OHLC comparisons on three bars, but the marubozu (R8) and
  long-lower-shadow (R4) shape tests need tunable thresholds; no pivots or repainting.
- Signal fires on close of the third candle.
- Suggested inputs: trend-lookback (R1), tall-first-candle multiplier (R3), shadow-ratio
  (R4), marubozu shadow tolerance (R8).
- Extremely rare — will fire almost never on real data; treat as a completeness entry.
