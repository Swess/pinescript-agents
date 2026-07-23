---
id: rickshaw-man
name: Rickshaw man
aliases: []
category: candlestick
type: continuation
direction: either
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 35, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.71
  reversal_rate: null
  frequency_rank: 55
source: https://thepatternsite.com/RickshawMan.html
accessed: 2026-07-16
---

# Rickshaw man

## Overview

A single doji (open and close within pennies) with unusually tall upper and lower shadows
and the body near the middle of the candle — a long-legged doji whose body is centered.
Theory calls it indecision; testing shows continuation 51% of the time (near random).
No prior trend required. Overall rank 35 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | None required |
| Configuration | Opening and closing prices within pennies of each other (doji), unusually tall upper and lower shadows, body near the middle of the candle |

## Detection Rules (computable)

- **R1 [B]** Doji body: `abs(close - open) <= 0.1 * (high - low)` (open/close within pennies; 10% default [D]).
- **R2 [B]** Tall range: `(high - low) >= 1.3 * avg range` (unusually tall shadows; default [D]).
- **R3 [B]** Body near the middle: `abs((open + close)/2 - (high + low)/2) <= 0.15 * (high - low)` (centered; default [D]).

## Confirmation & Breakout

Breakout is a close above the top of the candle (upward) or below the bottom (downward):
`close > high` or `close < low` on a later bar. Direction is near random; use the trend
leading into the candle to help predict breakout direction.

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout price in the
  breakout direction. Target met ~71% (best: bull market, up breakout).
- Stop: opposite side of the candle relative to the breakout [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 51% (near random) |
| Overall rank | 35 of 103 (1 = best) |
| Frequency rank | 55 |
| Best % meeting target | 71% (bull market, up breakout) |
| Best avg move 10 days | +4.22% (bear market, up breakout) |
| Best 10-day performance rank | 43 (bear market, up breakout) |

Best case is bear market, upward breakout: +4.22% over 10 days (rank 43) — short of a
6%+ "good" move. Single-line candles typically work poorly, and the rickshaw man is no
exception.

## Trading Tactics

- Candles within a third of the yearly low usually perform best.
- Use the price trend leading to the candle to help predict breakout direction.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Single-bar doji test plus centered-body and tall-range checks; no pivots.
- Suggested inputs: doji-body ratio (R1), tall-range multiplier (R2), body-centering
  tolerance (R3).
- Key distinction from a long-legged doji: the body must be near the middle (R3) — every
  rickshaw man is a long-legged doji, but not vice versa.
- Given near-random behavior, best used as context, not a standalone signal.
