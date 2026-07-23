---
id: three-outside-up
name: Three outside up
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 34, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.47
  reversal_rate: 0.75
  frequency_rank: 24
source: https://thepatternsite.com/ThreeOutsideUp.html
accessed: 2026-07-16
---

# Three outside up

## Overview

A three-candle bullish reversal in a downtrend: a black candle, then a white candle that
engulfs the prior body (bullish engulfing — opens below and closes above the black body),
then a third candle with a higher close. Bulkowski's tests show it reverses 75% of the
time; frequency rank 24 makes it common.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Black candle (close < open) in a downtrend |
| Second candle | White candle that opens below the prior body and closes above it (engulfs it) |
| Third candle | Candle with a higher close (per Morris) |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[2] < close[7]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[2] < open[2]`.
- **R3 [B]** Second candle white: `close[1] > open[1]`.
- **R4 [B]** Second body engulfs first body: `open[1] < close[2] and close[1] > open[2]`.
- **R5 [B]** Third candle closes higher: `close > close[1]`.
- **R6 [D]** Candles tall (best performance): `(close[1] - open[1]) > ta.sma(high - low, 20)`.

## Confirmation & Breakout

Upward breakout (bullish reversal) occurs when price closes above the top of the pattern:
`close > highest(high, 3)`. Downward breakout = close below the pattern bottom.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low`; up target = breakout price +
  height. Price meets target only ~47% of the time (best case) — expect minor highs/lows
  along the way, not a straight-line run.
- Stop: below the pattern low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 75% bullish |
| Overall performance rank | 34 of 103 (1 = best) |
| Frequency rank | 24 |
| Best % meeting target | 47% (bull market, up breakout) |
| Best average move in 10 days | −7.14% (bear market, down breakout) |
| Best 10-day performance rank | 7 (bear market, down breakout) |

Avoid short-term (10-day) holds after upward breakouts — they do particularly poorly. For
longer holds, avoid bull-market patterns after a downward breakout.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Select tall candles for best performance.
- Best setup: a downward retracement of a primary uptrend, entering on the upward
  breakout that rejoins the uptrend.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on three bars; no pivots, no repainting.
- Signal fires on close of the third candle.
- Suggested inputs: trend-lookback (R1), tall-candle multiplier (R6), yearly-low filter.
- R4 is a bullish-engulfing body test on candles 1→2.
