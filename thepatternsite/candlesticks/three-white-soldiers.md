---
id: three-white-soldiers
name: Three white soldiers
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 32, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.34
  reversal_rate: 0.82
  frequency_rank: 67
source: https://thepatternsite.com/ThreeWhiteSoldiers.html
accessed: 2026-07-16
---

# Three white soldiers

## Overview

A three-candle bullish reversal in a downtrend: three tall white candles, each closing
near its high with a higher close, and each opening within the prior candle's body.
Bulkowski's tests show it breaks out upward 82% of the time (only 593 of 3,333 samples
broke downward), but post-breakout trending is mediocre (overall rank 32).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| Configuration | Three tall white candles, each closing near its high, each with a higher close, and bodies that overlap (each opens within the prior candle's body) |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[3] < close[8]` (5-bar downtrend default [D]).
- **R2 [B]** All three candles white: `close[2] > open[2] and close[1] > open[1] and close > open`.
- **R3 [B]** Higher closes: `close[1] > close[2] and close > close[1]`.
- **R4 [B]** Each opens within the prior body: `open[1] > open[2] and open[1] < close[2] and open > open[1] and open < close[1]`.
- **R5 [B]** Each closes near its high (short upper shadow): `(high[2]-close[2]) <= (high[2]-low[2])*0.2 and (high[1]-close[1]) <= (high[1]-low[1])*0.2 and (high-close) <= range*0.2` (20% default [D]).
- **R6 [D]** Candles tall: `(close - open) > ta.sma(high - low, 20)` on each body.

## Confirmation & Breakout

Breakout is a close above the highest high or below the lowest low of the three candles.
Upward breakout (bullish reversal) = `close > highest(high, 3)`; the far more common case.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low`; up target = breakout price +
  height. Price meets target only ~34% of the time (best case).
- Stop: below the pattern low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 82% bullish (upward breakout) |
| Overall performance rank | 32 of 103 (1 = best) |
| Frequency rank | 67 |
| Best % meeting target | 34% (all market/breakout combinations) |
| Best average move in 10 days | −7.66% (bear market, down breakout; 56 samples) |
| Best 10-day performance rank | 4 (bull market, down breakout; 537 samples) |

A short move after an upward breakout is typical — the uptrend often reverses quickly.
Frequently appears as an upward retrace within a primary downtrend.

## Trading Tactics

- Look for the pattern as an upward retrace in a downtrend, and expect the downtrend to
  resume.
- Patterns within a third of the yearly high frequently act as reversals.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on three bars; no pivots, no repainting.
- Signal fires on close of the third candle.
- Suggested inputs: trend-lookback (R1), close-near-high tolerance (R5), tall-candle
  multiplier (R6).
- R5's "near the high" is subjective — expose the shadow-fraction as an input.
