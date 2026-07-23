---
id: black-marubozu
name: Black marubozu
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 57, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.78
  reversal_rate: null
  frequency_rank: 30
source: https://thepatternsite.com/BlackMarubozu.html
accessed: 2026-07-16
---

# Black marubozu

## Overview

A single tall black (down) candle with no upper or lower shadows — open at the high, close
at the low. Theory calls it a continuation candle, and Bulkowski's tests agree only weakly:
it continues the prevailing trend 53% of the time, which he considers near-random. Overall
10-day performance ranks 57 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend leading to pattern | None required |
| Configuration | A tall black candle with no shadows |

## Detection Rules (computable)

- **R1 [B]** Black candle: `close < open`.
- **R2 [B]** No upper shadow (open is the high): `high - open <= 0.05 * (high - low)` (default: upper shadow ≤5% of range [D]).
- **R3 [B]** No lower shadow (close is the low): `close - low <= 0.05 * (high - low)` (default: lower shadow ≤5% of range [D]).
- **R4 [B]** Tall body: `(open - close) > ta.sma(high - low, 20)` (default: body taller than 20-bar average range [D]).

## Confirmation & Breakout

Breakout direction defines performance: downward breakout (continuation) = `close < low`
(candle low); upward breakout (reversal) = `close > high` (candle high). Since the candle
closes at its low, downward breakouts are expected, but upward breakouts occur ~34% of the
time. Bulkowski suggests using the trend leading into the candle to predict breakout
direction.

## Targets & Stops

- Candle-height target: `height = high - low`; project up or down from the breakout price
  depending on breakout direction. Met ~78% of the time (bull market, up breakout).
- Stop: opposite side of the candle from the trade direction [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 53% (near-random) |
| Frequency rank | 30 |
| Overall performance rank | 57 of 103 (1 = best) |
| Best % meeting target | 78% (bull market, up breakout) |
| Best 10-day move | +5.33% (bear market, up breakout) |
| Best 10-day performance rank | 24 (bull market, up breakout) |
| Upward-breakout frequency | ~34% (of 19,993 samples) |

Bulkowski notes the best moves come from *upward* breakouts despite the candle closing at
its low — possibly upward momentum after a downtrend reversal. He considers the candle over-
weighted by candlestick followers relative to its tested value.

## Trading Tactics

- Prefer black marubozu candles within a third of the yearly low.
- Use the price trend leading into the candle to predict likely breakout direction; best
  performance comes when the trend leading in is downward.
- A black marubozu inside an identical three crows pattern is a notable setup.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC comparisons; no pivots, no repainting.
- Signal fires on the candle's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: upper/lower shadow tolerances (R2/R3), tall-body multiplier (R4),
  optional trend-direction filter, optional "within one-third of yearly low" filter.
- "No shadows" is quantified with a default 5%-of-range tolerance; a strict marubozu
  requires `open == high and close == low`.
