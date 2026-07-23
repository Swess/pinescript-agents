---
id: rising-3-methods
name: Rising 3 methods
aliases: [Rising three methods]
category: candlestick
type: continuation
direction: bullish
bars: {min: 5, typical: 5}
confirmation: required
rank: {value: 94, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.60
  reversal_rate: null
  frequency_rank: 88
source: https://thepatternsite.com/Rising3Methods.html
accessed: 2026-07-16
---

# Rising 3 methods

## Overview

A five-candle bullish continuation resembling a miniature measured-move-up: a tall white
candle in an uptrend, three small candles that drift lower but stay within the first
candle's high-low range, then a tall white candle closing above the first candle's close.
Acts as a continuation 74% of the time but is rare (rank 88) and a poor post-breakout
performer (overall rank 94).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Five |
| Price trend | Upward leading into the pattern |
| First candle | Tall white candle |
| Candles 2–4 | Three small candles trending lower but closing within the first candle's high-low range; candles 2 and 4 black, candle 3 any color |
| Fifth candle | Tall white candle closing above the first candle's close |

## Detection Rules (computable)

- **R1 [B]** Uptrend into pattern: `close[5] > close[10]` (5-bar uptrend default [D]).
- **R2 [B]** First candle tall and white: `close[4] > open[4]` and body[4] >= 1.3 * avg body [D].
- **R3 [B]** Candles 2 and 4 black: `close[3] < open[3]` and `close[1] < open[1]`.
- **R4 [D]** Candles 2–4 small: each body <= 0.5 * body[4] (small default).
- **R5 [B]** Candles 2–4 stay within first candle's range: `low[3],low[2],low[1] >= low[4]` and `high[3],high[2],high[1] <= high[4]`.
- **R6 [D]** Candles 2–4 trend lower: `close[1] < close[3]` (net drift down).
- **R7 [B]** Fifth candle tall and white: `close > open` and body >= 1.3 * avg body [D].
- **R8 [B]** Fifth closes above first close: `close > close[4]`.

## Confirmation & Breakout

Upward breakout = price closes above the top of the five-candle pattern; the fifth candle
closing above the first candle's close (R8) is itself the resumption signal. Trade only
when the primary trend is up.

## Targets & Stops

- Candle-height target: `height = highest(high, 5) - lowest(low, 5)`; up target =
  breakout price + height. Target met ~60% (best: bull market, up breakout).
- Stop: below `lowest(low, 5)` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 74% bullish (only 102 examples found) |
| Overall rank | 94 of 103 (1 = best) |
| Frequency rank | 88 (rare) |
| Best % meeting target | 60% (bull market, up breakout) |
| Best avg move 10 days | -5.10% (bull market, down breakout) |
| Best 10-day performance rank | 7 (bull market, down breakout) |

Only 102 examples out of 4.7 million candle lines, so statistics may shift dramatically.
Post-breakout performance is poor overall despite the reliable continuation direction.

## Trading Tactics

- Trade only when the primary trend is up.
- Candles with tall shadows on the last candle tend to outperform.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **moderate**. Five-bar OHLC with range-containment and color rules; no pivots
  but many conjunctive conditions raise false-negative risk.
- Suggested inputs: tall-body multiplier (R2/R7), small-body ratio (R4), trend lookback (R1),
  strictness of range containment (R5).
- Candle 3 may be any color; only 1, 2, 4, 5 have fixed colors. Compare with the mat hold.
- Signal fires on the fifth candle's close.
