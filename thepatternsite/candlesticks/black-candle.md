---
id: black-candle
name: Black candle
aliases: []
category: candlestick
type: either
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 82, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.84
  reversal_rate: null
  frequency_rank: 3
source: https://thepatternsite.com/BlkCandle.html
accessed: 2026-07-16
---

# Black candle

## Overview

A single average-size black (down) candle whose upper and lower shadows are each shorter
than the body. In theory it can act as either a reversal or a continuation; Bulkowski's
tests show continuation 52% of the time — essentially random. It is one of the most common
candles (frequency rank 3) but among the worst 10-day performers (rank 82 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend leading to pattern | None required |
| Configuration | Black candle of average size with shadows shorter than the body height |

## Detection Rules (computable)

- **R1 [B]** Black candle: `close < open`.
- **R2 [B]** Upper shadow shorter than body: `(high - open) < (open - close)`.
- **R3 [B]** Lower shadow shorter than body: `(close - low) < (open - close)`.
- **R4 [D]** Average-size body: `(open - close)` between 0.5× and 2× `ta.sma(high - low, 20)` (default band for "average size", adjustable).

## Confirmation & Breakout

Breakout direction defines performance: upward breakout = `close > high` (candle high);
downward = `close < low` (candle low). With a near-random 52% continuation rate, Bulkowski
treats the standalone black candle as directionless — wait for the breakout.

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout price in the
  breakout direction. Met ~84% of the time (bear market, down breakout).
- Stop: opposite side of the candle from the trade direction [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 52% (near-random) |
| Frequency rank | 3 (extremely common) |
| Overall performance rank | 82 of 103 (1 = best) |
| Best % meeting target | 84% (bear market, down breakout) |
| Best 10-day move | −6% (bear market, down breakout) |
| Best 10-day performance rank | 19 (bear market, down breakout) |

Strength is concentrated in bear-market down breakouts. Bulkowski considers a standalone
black candle "meaningless" for direction — just another price bar unless part of a larger
pattern.

## Trading Tactics

- Prefer black candles within a third of the yearly low.
- Candles taller than the median move price almost twice as far after the breakout.
- High volume on the breakout day predicts a larger price move than light breakout volume.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC comparisons; no pivots, no repainting.
- Signal fires on the candle's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: average-size band (R4), require-tall toggle, breakout-volume filter,
  optional "within one-third of yearly low" filter.
- "Average size" is subjective; the R4 band around the 20-bar average range is a default —
  expose bounds as inputs. Distinguish from the short black candle (shadows shorter than a
  *short* body) and black marubozu (no shadows).
