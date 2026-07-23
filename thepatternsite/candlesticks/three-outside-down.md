---
id: three-outside-down
name: Three outside down
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 39, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.55
  reversal_rate: 0.69
  frequency_rank: 21
source: https://thepatternsite.com/ThreeOutsideDown.html
accessed: 2026-07-16
---

# Three outside down

## Overview

A three-candle bearish reversal in an uptrend: a white candle, then a black candle that
engulfs the prior body (bearish engulfing — opens higher and closes lower than the white
body), then a third candle with a lower close. Bulkowski's tests show it reverses the
uptrend 69% of the time; frequency rank 21 makes it easy to find.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| First candle | White candle (close > open) in an uptrend |
| Second candle | Black candle that opens higher and closes lower than the first candle's body (engulfs it) |
| Third candle | Candle with a lower close |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[2] > close[7]` (5-bar uptrend default [D]).
- **R2 [B]** First candle white: `close[2] > open[2]`.
- **R3 [B]** Second candle black: `close[1] < open[1]`.
- **R4 [B]** Second body engulfs first body: `open[1] > close[2] and close[1] < open[2]`.
- **R5 [B]** Third candle closes lower: `close < close[1]`.
- **R6 [D]** Candles tall (best performance): `(open[1] - close[1]) > ta.sma(high - low, 20)`.

## Confirmation & Breakout

Downward breakout (bearish reversal) occurs when price closes below the bottom of the
pattern: `close < lowest(low, 3)`. Upward breakout = close above the pattern top.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low`; down target = breakout price −
  height. Price meets target ~55% of the time (best case, bull market, up breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 69% bearish |
| Overall performance rank | 39 of 103 (1 = best) |
| Frequency rank | 21 |
| Best % meeting target | 55% (bull market, up breakout) |
| Best average move in 10 days | +6.30% (bear market, up breakout) |
| Best 10-day performance rank | 13 (bull market, up breakout) |

Give the pattern room to run — 10-day moves after a downward breakout are weak (a few
percent); upward breakouts do 2–3x better. Worst configuration: downward breakout in a
bull market (avoid).

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Select tall candles for best performance.
- Best setup: an upward retracement of a primary downtrend, entering on the downward
  breakout that rejoins the downtrend.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on three bars; no pivots, no repainting.
- Signal fires on close of the third candle.
- Suggested inputs: trend-lookback (R1), tall-candle multiplier (R6), yearly-low filter.
- R4 is a bearish-engulfing body test on candles 1→2.
