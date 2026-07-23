---
id: short-black-candle
name: Short black candle
aliases: []
category: candlestick
type: either
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 66, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.95
  reversal_rate: 0.52
  frequency_rank: 50
source: https://thepatternsite.com/BlkCandleShort.html
accessed: 2026-07-16
---

# Short black candle

## Overview

A single short black (down) candle whose upper and lower shadows are each shorter than the
(short) body. In theory it can act as either a reversal or continuation; Bulkowski's tests
show reversal 52% of the time — near-random. Because the candle is short, price rarely
travels far, so the height-based target is met almost always (95%).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend leading to pattern | None required |
| Configuration | Short black candle with upper and lower shadows shorter than the body height |

## Detection Rules (computable)

- **R1 [B]** Black candle: `close < open`.
- **R2 [B]** Upper shadow shorter than body: `(high - open) < (open - close)`.
- **R3 [B]** Lower shadow shorter than body: `(close - low) < (open - close)`.
- **R4 [D]** Short body: `(open - close) < ta.sma(high - low, 20)` (default: body shorter than 20-bar average range, adjustable).

## Confirmation & Breakout

Breakout direction defines performance: upward breakout = `close > high` (candle high);
downward = `close < low` (candle low). Bulkowski notes price breaks out downward most
often. With a 52% reversal rate, the standalone candle is near-directionless — wait for the
breakout.

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout price in the
  breakout direction. Because the candle is short, the target is met ~95% of the time
  (up breakout).
- Stop: opposite side of the candle from the trade direction [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 52% (near-random) |
| Frequency rank | 50 |
| Overall performance rank | 66 of 103 (1 = best) |
| Best % meeting target | 95% (up breakout) |
| Best 10-day move | +3.61% (bear market, up breakout) |
| Best 10-day performance rank | 49 (bear market, up breakout) |
| Sample size | 5,593 (rarer than expected) |

Post-breakout moves are small (best 10-day move only 3.61%, well below the 6–9% of top
candles), so the measure-rule target is easy to hit but the profit is modest.

## Trading Tactics

- Short black candles taller than the median move price almost twice as far after the
  breakout as shorter ones.
- Candles with shadows longer than the median tend to outperform after the breakout.
- Price breaks out downward from the candle most often.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC comparisons; no pivots, no repainting.
- Signal fires on the candle's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: short-body multiplier (R4), require-longer-shadows toggle, optional
  yearly-low filter.
- "Short" is quantified relative to the 20-bar average range as a default — expose as an
  input. Distinguish from the average-size black candle and the shadowless black marubozu.
