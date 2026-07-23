---
id: opening-white-marubozu
name: Opening white marubozu
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 75, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.71
  reversal_rate: null
  frequency_rank: 7
source: https://thepatternsite.com/OpenWhiteMarubozu.html
accessed: 2026-07-16
---

# Opening white marubozu

## Overview

A single tall white candle with an upper shadow but no lower shadow. No prior trend is
required. Acts as a continuation 54% of the time — near random — and is extremely common
(frequency rank 7). Overall performance is a distant 75th of 103; investment implications
are marginal at best.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | None required |
| Configuration | Tall white candle with an upper shadow but no lower shadow |

## Detection Rules (computable)

- **R1 [B]** White candle: `close > open`.
- **R2 [B]** No lower shadow: `low >= open - 0.05 * (high - low)` (open at/near the low; small tolerance [D]).
- **R3 [B]** Upper shadow present: `(high - close) >= 0.05 * (high - low)` [D].
- **R4 [B]** Tall body: `body >= 1.3 * avg body` (default [D]).

## Confirmation & Breakout

Breakout is a close above the top of the candle (upward) or below the bottom (downward):
`close > high` or `close < low` on a later bar. Continuation direction is near random
(54%), so breakout confirmation is recommended.

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout price in the
  breakout direction. Target met ~71% (best: bear market, down breakout).
- Stop: opposite side of the candle relative to the breakout [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 54% (near random) |
| Overall rank | 75 of 103 (1 = best) |
| Frequency rank | 7 (very common) |
| Best % meeting target | 71% (bear market, down breakout) |
| Best avg move 10 days | -4.37% (bear market, down breakout) |
| Best 10-day performance rank | 37 (bull market, down breakout) |

Best case is bear market, downward breakout: -4.37% over 10 days (rank 37) — short of a
6%+ "good" move. Traditional theory promises a long run; Bulkowski's research disagrees.
Note his study: a minor high/low occurs within a day (±) of a tall candle 67%–72% of the time.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Candles within a third of the yearly high frequently act as continuations.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC test for a white opening marubozu; no pivots.
- Suggested inputs: lower-shadow tolerance (R2), tall-body multiplier (R4).
- "Tall" is relative — compare body/range to recent candles.
- Given near-random behavior, best used as context, not a standalone signal.
