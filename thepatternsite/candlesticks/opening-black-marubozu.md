---
id: opening-black-marubozu
name: Opening Black marubozu
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 58, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.75
  reversal_rate: null
  frequency_rank: 5
source: https://thepatternsite.com/OpenBlkMaru.html
accessed: 2026-07-16
---

# Opening Black marubozu

## Overview

A single tall black candle with no upper shadow but a lower shadow present. No prior trend
is required (otherwise it would be a belt hold). Acts as a continuation 52% of the time —
essentially random — but very common (frequency rank 5). Mid-range performer (overall
rank 58); Bulkowski considers it "just another line on the price chart."

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | None required |
| Configuration | Tall black candle with no upper shadow but a lower shadow present |

## Detection Rules (computable)

- **R1 [B]** Black candle: `close < open`.
- **R2 [B]** No upper shadow: `high <= open + 0.05 * (high - low)` (open at/near the high; small tolerance [D]).
- **R3 [B]** Lower shadow present: `low < close` by a meaningful amount, e.g. `(close - low) >= 0.05 * (high - low)` [D].
- **R4 [B]** Tall body: `body >= 1.3 * avg body` (default [D]).

## Confirmation & Breakout

Breakout is a close above the top of the candle (upward) or below the bottom (downward):
`close > high` or `close < low` on a later bar. Continuation direction is near random
(52%), so breakout confirmation is recommended.

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout price in the
  breakout direction. Target met ~75% (best: bull market, up breakout).
- Stop: opposite side of the candle relative to the breakout [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 52% (near random) |
| Overall rank | 58 of 103 (1 = best) |
| Frequency rank | 5 (very common) |
| Best % meeting target | 75% (bull market, up breakout) |
| Best avg move 10 days | +4.63% (bear market, up breakout) |
| Best 10-day performance rank | 37 (bear market, up breakout) |

Best case is bear market, upward breakout: +4.63% over 10 days (rank 37) — well behind a
6%–9% "outstanding" move. Breakouts below the 50-day EMA tend to outperform.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Candles within a third of the yearly low frequently act as continuations.
- Breakouts below the 50-day EMA tend to outperform.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC test for a black opening marubozu; no pivots.
- Suggested inputs: upper-shadow tolerance (R2), tall-body multiplier (R4), optional
  50-day EMA breakout filter.
- No trend requirement; distinguish from belt hold (which requires a trend).
- Given near-random behavior, best used as context, not a standalone signal.
