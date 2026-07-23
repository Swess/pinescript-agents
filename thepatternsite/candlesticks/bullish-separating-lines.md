---
id: bullish-separating-lines
name: Bullish separating lines
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 36, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.63
  reversal_rate: null
  frequency_rank: 76
source: https://thepatternsite.com/SeparateLinesBull.html
accessed: 2026-07-16
---

# Bullish separating lines

## Overview

A two-candle bullish continuation in an uptrend: a tall black candle followed by a tall
white candle that shares (nearly) the same opening price. Acts as a bullish continuation
72% of the time (ranks 6th of 103 for reversal/continuation reliability). Rare (frequency
rank 76); overall rank 36.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Upward leading into the pattern |
| First candle | Tall black candle in the uptrend |
| Second candle | Tall white candle sharing a common opening price with the first |

## Detection Rules (computable)

- **R1 [B]** Uptrend into pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** First candle tall and black: `close[1] < open[1]` and body[1] >= 1.3 * avg body [D].
- **R3 [B]** Second candle tall and white: `close > open` and body >= 1.3 * avg body [D].
- **R4 [B]** Shared opening price: `abs(open - open[1]) <= 0.1 * (high[1] - low[1])` (within a few pennies; default [D]).

## Confirmation & Breakout

Upward breakout = price closes above the top of the two-candle pattern
(`close > max(high, high[1])`). Breakout is upward most often, continuing the uptrend.
Note the paradox: strongest post-breakout moves come after *downward* breakouts in a
bear (or even bull) market; upward breakouts are the weaker performers.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`; up target =
  breakout price + height. Target met ~63% (best: bull market, up breakout).
- Stop: below `min(low, low[1])` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 72% bullish (ranks 6th of 103) |
| Overall rank | 36 of 103 (1 = best) |
| Frequency rank | 76 (rare) |
| Best % meeting target | 63% (bull market, up breakout) |
| Best avg move 10 days | -8.05% (bear market, down breakout) |
| Best 10-day performance rank | 4 (bear market, down breakout) |

Only 2,842 examples found out of 4.7 million candle lines. Best move is a -8.05% drop
(bear market, down breakout, rank 4) — downward breakouts are the muscle group, upward
breakouts the weaklings, despite the bullish label.

## Trading Tactics

- Breakout is upward most often.
- Select tall candles for best performance (except for downward breakouts in bear markets).
- Candles within a third of the yearly high tend to act as continuations.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC with a shared-open test; no pivots.
- Suggested inputs: open-match tolerance (R4), tall-body multiplier (R2/R3), trend lookback (R1).
- "Separating" refers to the shared open with opposite-color, oppositely-directed bodies —
  contrast with meeting lines (shared close).
- Signal fires on the second candle's close; breakout confirmation fires later.
