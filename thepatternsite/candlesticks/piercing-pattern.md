---
id: piercing-pattern
name: Piercing pattern
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 13, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.67
  reversal_rate: 0.64
  frequency_rank: 40
source: https://thepatternsite.com/Piercing.html
accessed: 2026-07-16
---

# Piercing pattern

## Overview

A two-candle bullish reversal in a downtrend: a black candle followed by a white candle
that opens below the black candle's low and closes between the midpoint of the black body
and its open. Acts as a bullish reversal 64% of the time and ranks a strong 13th of 103
for overall performance.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Black (close < open) |
| Second candle | White; opens below the black candle's low and closes between the midpoint of the black body and its open |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [B]** Second candle white: `close > open`.
- **R4 [B]** Second opens below prior low: `open < low[1]`.
- **R5 [B]** Second closes above midpoint of prior body: `close > (open[1] + close[1]) / 2`.
- **R6 [B]** Second closes below prior open: `close < open[1]`.

## Confirmation & Breakout

Upward breakout = price closes above the top of the two-candle pattern
(`close > max(high, high[1])`). Confirmation is required — Bulkowski's example waits for a
close above the pattern high. Best performance is in a bear market after a downward breakout.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`; up target =
  breakout price + height. Target met ~67% (best: bull market, up breakout).
- Stop: below `min(low, low[1])` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 64% bullish |
| Overall rank | 13 of 103 (1 = best) |
| Frequency rank | 40 |
| Best % meeting target | 67% (bull market, up breakout) |
| Best avg move 10 days | -6.57% (bear market, down breakout) |
| Best 10-day performance rank | 13 (bear market, down breakout) |

Best case is bear market, downward breakout: -6.57% over 10 days (rank 13) — a good move.
Upward breakouts in a bull market are the weakest of the four combinations.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Select tall candles for best performance.
- Avoid trading piercing patterns when the primary trend is downward.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC with an open-below-low and midpoint-close test; no pivots.
- Suggested inputs: trend lookback (R1), require-open-below-low toggle (R4), midpoint
  strictness (R5/R6).
- Distinguish from the thrusting candle (closes below the midpoint) — R5 requires above midpoint.
- Signal fires on the second candle's close; breakout confirmation fires later.
