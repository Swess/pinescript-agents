---
id: bullish-belt-hold
name: Bullish belt hold
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 62, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.74
  reversal_rate: 0.71
  frequency_rank: 22
source: https://thepatternsite.com/BeltHoldBull.html
accessed: 2026-07-16
---

# Bullish belt hold

## Overview

A single white (up) candle with no lower shadow that closes near its high, appearing after
a downward price trend. Theory calls it a bullish reversal, and Bulkowski's tests agree: it
acts as a bullish reversal 71% of the time, ranking 11 of 103 as a reversal signal, though
overall 10-day performance is mid-pack (62 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend leading to pattern | Downward |
| Configuration | White candle with no lower shadow, closing near the high |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the candle: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** White candle: `close > open`.
- **R3 [B]** No lower shadow (open is the low): `open - low <= 0.05 * (high - low)` (default: lower shadow ≤5% of range [D]).
- **R4 [B]** Closes near the high: `high - close <= 0.10 * (high - low)` (default: close within top 10% of range [D]).
- **R5 [D]** Tall candle preferred: `(high - low) > ta.sma(high - low, 20)` (belt holds taller than the median outperform).

## Confirmation & Breakout

Breakout direction defines performance: upward breakout = `close > high` (candle high),
downward = `close < low` (candle low). Bulkowski recommends waiting for the upward
breakout to confirm the bullish reversal rather than acting on the candle alone.

## Targets & Stops

- Candle-height target: `height = high - low`; up target = breakout price + height.
  The measure rule is met ~74% of the time (bull market, up breakout).
- Stop: below the candle low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 71% bullish |
| Frequency rank | 22 |
| Overall performance rank | 62 of 103 (1 = best) |
| Reversal-signal rank | 11 of 103 |
| Best % meeting target | 74% (bull market, up breakout) |
| Best 10-day move | −5.2% (bear market, down breakout) |
| Best 10-day performance rank | 28 (bear market, down breakout) |

Overall performance is held back by lousy 10-day returns relative to other candles. Best
percentage meeting target comes from bull-market up breakouts; best raw 10-day move comes
from bear-market down breakouts.

## Trading Tactics

- Prefer belt holds within a third of the yearly low — they perform best.
- Select candles taller than the median for significantly better post-breakout performance.
- Belt holds with comparatively tall upper shadows outperform.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC comparisons; no pivots, no repainting.
- Signal fires on the candle's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: trend-lookback for R1, lower-shadow tolerance (R3), close-near-high
  tolerance (R4), require-tall toggle (R5), optional "within one-third of yearly low"
  filter (`close < ta.lowest(low, 252) * 4/3`).
- "No lower shadow" and "closes near the high" are quantified with default tolerances;
  expose them as inputs for stricter/looser matching.
