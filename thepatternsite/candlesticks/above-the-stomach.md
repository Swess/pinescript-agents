---
id: above-the-stomach
name: Above the Stomach
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 31, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0486
  throwback_rate: null
  pct_meeting_target: 0.61
  reversal_rate: 0.66
  frequency_rank: 32
source: https://thepatternsite.com/AboveStomach.html
accessed: 2026-07-16
---

# Above the Stomach

## Overview

A simple two-candle bullish reversal in a downtrend: a black candle followed by a white
candle whose body opens and closes at or above the midpoint of the first candle's body. It
reverses the downtrend 66% of the time (rank 31 overall) and is fairly common (frequency
rank 32).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Black (`close < open`) |
| Second candle | White; opens and closes at or above the midpoint of the black body |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[2] > close[1]` and broader decline [D] `close[1] < close[6]`.
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [B]** Second candle white: `close > open`.
- **R4 [B]** Second body at/above midpoint of first body: `open >= mid1 and close >= mid1` where `mid1 = (open[1] + close[1]) / 2`.

## Confirmation & Breakout

Up breakout = close above the top of the two-candle pattern; down breakout = close below
its bottom. Best treated as a reversal within a downward retracement of an uptrend.

## Targets & Stops

- Pattern height: `height = max(high, high[1]) - min(low, low[1])`.
- Target = breakout price ± height [D]. Price met target 61% (bull market, up breakout).
- Stop [D]: below `min(low, low[1])` for longs.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bullish reversal |
| Tested performance | Bullish reversal 66% of the time |
| Frequency rank | 32 |
| Overall performance rank | 31 of 103 (1 = best) |
| Best % meeting price target | 61% (bull market, up breakout) |
| Best average move in 10 days | −4.86% (bear market, down breakout) |
| Best 10-day performance rank | 33 (bear market, down breakout) |

A decent showing for a simple two-line pattern; reversals often prove temporary when the
primary trend is still down.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Within a third of the yearly high, frequently act as reversals.
- Works best as part of a downward retracement in an upward price trend.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC comparison against the prior body midpoint; no pivots.
- Signal fires on the close of the second candle; wait for the breakout close for direction.
- Suggested inputs: trend lookback, optional "within one-third of yearly low" filter,
  strictness of the midpoint test (>= vs >).
