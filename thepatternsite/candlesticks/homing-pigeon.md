---
id: homing-pigeon
name: Homing Pigeon
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 21, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.68
  reversal_rate: 0.44
  frequency_rank: 34
source: https://thepatternsite.com/HomingPigeon.html
accessed: 2026-07-16
---

# Homing Pigeon

## Overview

A two-line pattern in a downtrend: a tall black candle followed by a small black candle
whose body fits inside the first body — essentially a same-color inside day. Theory says
bullish reversal, but tests show a bearish continuation 56% of the time ("near random").
Despite the poor reversal rate, overall performance is good at rank 21 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Tall black body |
| Second candle | Small black body that fits inside the body of the prior day |
| Shadows | Not mentioned — bodies only (so some are not true inside days) |

## Detection Rules (computable)

- **R1 [D]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend into the first line).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [D]** First candle tall: `(high[1]-low[1]) > ta.sma(high-low, 20)[1]`.
- **R4 [B]** Second candle black: `close < open`.
- **R5 [B]** Second body inside first body: `open <= open[1] and close >= close[1]`.
- **R6 [D]** Second body smaller than first: `(open-close) < (open[1]-close[1])`.

## Confirmation & Breakout

Upward breakout (confirms the bullish reversal) = `close > max(high, high[1])`; downward
breakout = `close < min(low, low[1])`. Downward breakouts (continuation) occur 56% of the
time. Wait for the breakout — direction is near random.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`;
  up target = breakout price + height (met ~68% best config: bull market, up breakout).
- Stop: below `min(low, low[1])` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 56% (reversal 44%) |
| Overall rank | 21 of 103 (1 = best) |
| Frequency rank | 34 |
| Best % meeting target | 68% (bull market, up breakout) |
| Best avg 10-day move | +4.76% (bear market, up breakout) |
| Best 10-day rank | 33 (bear market, up breakout) |

## Trading Tactics

- Homing pigeons within a third of the yearly low perform best.
- Select tall (first) candles.
- Reversals often occur on the right side of an inverted-and-ascending scallop.

## Pine Notes

- Feasibility: **easy**. Both candles black, bodies-only inside test; no pivots.
- Differs from bullish harami in that the second candle is black (same color), not white.
- Suggested inputs: trend-lookback (R1), tall-body multiplier (R3), yearly-low filter.
