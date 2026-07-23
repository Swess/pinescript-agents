---
id: white-marubozu
name: White marubozu
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 71, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: -0.0479
  throwback_rate: null
  pct_meeting_target: 0.79
  reversal_rate: null
  frequency_rank: 27
source: https://thepatternsite.com/WhiteMarubozu.html
accessed: 2026-07-16
---

# White marubozu

## Overview

A single tall white candle with no upper or lower shadows — open equals the low and close
equals the high. Suggests continuation of the existing trend but only 56% of the time (near
random). Common (frequency rank 27) with poor overall performance (rank 71).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | None required |
| Configuration | A tall white candlestick with no upper or lower shadows |

## Detection Rules (computable)

- **R1 [B]** Candle white: `close > open`.
- **R2 [B]** Tall body: `(close - open) > ta.sma(abs(close-open), 20)` (taller-than-average default [D]).
- **R3 [B]** No upper shadow: `high == close` (tolerance `high - close <= 0.05 * (high-low)` default [D]).
- **R4 [B]** No lower shadow: `low == open` (tolerance `open - low <= 0.05 * (high-low)` default [D]).

## Confirmation & Breakout

Upward breakout (the continuation) = `close > high` on the next bar (close above the
marubozu high); downward = `close < low`. Continuation happens only 56% of the time, so be
prepared for a reversal before or soon after the breakout.

## Targets & Stops

- Candle-height target: `height = high - low`; add to the top for up breakouts, subtract
  from the bottom for down breakouts. Met ~79% of the time (bear market, down breakout).
- Stop: below the candle low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Continuation |
| Tested continuation rate | 56% (near random) |
| Overall performance rank | 71 of 103 (1 = best) |
| Frequency rank | 27 |
| Best % meeting target | 79% (bear market, down breakout) |
| Best 10-day move | -4.79% (bear market, down breakout) |
| Best 10-day performance rank | 26 (bull market, down breakout) |

Single candle lines rarely produce large post-breakout moves.

## Trading Tactics

- Best when the candle appears within a third of the yearly low.
- Patterns within a third of the yearly high act as continuations most often.
- Breakouts below the 50-day moving average tend to work best.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC test; no pivots.
- Signal fires on the candle's close.
- Zero-shadow test (R3/R4) needs a small tolerance for real data — exact equality rarely
  holds; expose the tolerance and the tall-body multiplier as inputs.
- Near-random continuation — recommend breakout confirmation before trading.
