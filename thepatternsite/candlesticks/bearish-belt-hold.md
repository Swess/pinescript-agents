---
id: bearish-belt-hold
name: Bearish Belt Hold
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 63, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0458
  throwback_rate: null
  pct_meeting_target: 0.75
  reversal_rate: 0.68
  frequency_rank: 19
source: https://thepatternsite.com/BeltHoldBear.html
accessed: 2026-07-16
---

# Bearish Belt Hold

## Overview

A single-candle bearish reversal: an opening black marubozu in an uptrend — price opens at
the day's high and closes near the low, forming a tall black candle often with a small
lower shadow. It reverses the uptrend 68% of the time and is plentiful (frequency rank 19),
though the post-breakout move is modest (overall rank 63).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | Upward leading into the pattern |
| Configuration | Opens at the high, closes near the low — a tall black candle, often with a small lower shadow (opening black marubozu) |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** Black candle: `close < open`.
- **R3 [B]** Opens at the high (no/negligible upper shadow): `open >= high - 0.05 * (high - low)` [D].
- **R4 [B]** Closes near the low (small lower shadow): `close - low <= 0.10 * (high - low)` [D].
- **R5 [D]** Tall body: `(open - close) > ta.sma(abs(close - open), 20)`.

## Confirmation & Breakout

Up breakout = close above the top of the candle; down breakout = close below its low. As a
reversal it needs a downward breakout, though its best-performing configuration is actually
an upward breakout (continuation).

## Targets & Stops

- Candle height: `height = high - low`.
- Down target = low − height; up target = high + height [D].
- Price met target 75% (bull market, up breakout).
- Stop [D]: above the candle high for shorts.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bearish reversal 68% of the time |
| Frequency rank | 19 (plentiful) |
| Overall performance rank | 63 of 103 (1 = best) |
| Best % meeting price target | 75% (bull market, up breakout) |
| Best average move in 10 days | +4.58% (bear market, up breakout) |
| Best 10-day performance rank | 33 (bull market, up breakout) |

Reverses often but the move rarely amounts to much (best ~4.6%). Paradoxically the best
performance comes from upward breakouts — i.e. belt holds acting as continuations.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Within a third of the yearly low, frequently act as reversals.
- Breakouts below the 50-day EMA tend to outperform.
- Best setup: candle at the top of an upward retrace against a downward primary trend.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC test; no pivots, no repainting.
- The marubozu tolerances (open-at-high, close-near-low) need explicit shadow thresholds —
  exact marubozus are rare intraday, so make them adjustable inputs.
- Suggested inputs: trend lookback, upper/lower-shadow tolerance, tall-body threshold,
  optional 50-day EMA filter.
- Signal fires on the candle's own close; wait for the breakout close for direction.
