---
id: white-candle
name: White candle
aliases: []
category: candlestick
type: either
direction: either
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 68, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: -0.0482
  throwback_rate: null
  pct_meeting_target: 0.81
  reversal_rate: null
  frequency_rank: 4
source: https://thepatternsite.com/WhiteCandle.html
accessed: 2026-07-16
---

# White candle

## Overview

A single average-height white (up) candle with shadows shorter than the body. Signals
indecision — acts as a continuation just 51% of the time (random). Extremely common
(frequency rank 4) but mediocre 10-day performance (rank 68).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | None required |
| Configuration | An average-height candle with a white body and shadows shorter than the body |

## Detection Rules (computable)

- **R1 [B]** Candle white: `close > open`.
- **R2 [B]** Average height: `(close - open) between 0.8 and 1.2 * ta.sma(abs(close-open), 20)` (average-body band default [D]).
- **R3 [B]** Upper shadow shorter than the body: `(high - close) < (close - open)`.
- **R4 [B]** Lower shadow shorter than the body: `(open - low) < (close - open)`.

## Confirmation & Breakout

Upward breakout = `close > high` on a later bar (or close above the candle high); downward
= `close < low`. The measure-rule target is met 81% of the time. Because it is a random
indecision candle, wait for the breakout direction.

## Targets & Stops

- Candle-height target: `height = high - low`; add to the top for up breakouts, subtract
  from the bottom for down breakouts. Met ~81% of the time (bull market, up breakout).
- Stop: opposite side of the candle from the breakout [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Reversal or continuation (indecision) |
| Tested continuation rate | 51% (random) |
| Overall performance rank | 68 of 103 (1 = best) |
| Frequency rank | 4 (very common) |
| Best % meeting target | 81% (bull market, up breakout) |
| Best 10-day move | -4.82% (bear market, down breakout) |
| Best 10-day performance rank | 35 (bear market, down breakout) |

## Trading Tactics

- Best when the candle appears within a third of the yearly low.
- White candles with tall shadows (taller than the median height) outperform.
- Breakouts below the 50-day moving average tend to perform best.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC test; no pivots.
- Signal fires on the candle's close.
- "Average height" (R2) and "shadows shorter than the body" are quantified with a band
  around the 20-bar average body; expose the band as inputs.
- Very common — best used as a filter/component rather than a standalone signal; recommend
  breakout confirmation given the random behavior.
