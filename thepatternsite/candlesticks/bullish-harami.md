---
id: bullish-harami
name: Bullish Harami
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 38, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.69
  reversal_rate: 0.53
  frequency_rank: 25
source: https://thepatternsite.com/HaramiBull.html
accessed: 2026-07-16
---

# Bullish Harami

## Overview

A two-line pattern in a downtrend: a tall black candle followed by a small white candle
whose body nestles inside the black body. It acts as a bullish reversal as theorized, but
only 53% of the time ("near random"). Overall performance is decent at rank 38 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle |
| Second candle | White candle nestled within the body of the prior candle |
| Shadows | Ignored — bodies only |
| Distinctness | Tops or bottoms of the bodies can match, but not both |

## Detection Rules (computable)

- **R1 [D]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend into the first line).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [D]** First candle tall: `(high[1]-low[1]) > ta.sma(high-low, 20)[1]`.
- **R4 [B]** Second candle white: `close > open`.
- **R5 [B]** Second body inside first body: `close <= open[1] and open >= close[1]`.
- **R6 [B]** Bodies not identical: `open != close[1] or close != open[1]`.
- **R7 [D]** Second body smaller than first: `abs(close-open) < (open[1]-close[1])`.

## Confirmation & Breakout

Upward breakout (confirms the bullish reversal) = `close > max(high, high[1])`; downward
breakout = `close < min(low, low[1])`. Best setup: a bullish harami as a downward reversal
within an uptrend. Wait for the breakout — direction is near random.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`;
  up target = breakout price + height (met ~69% best config: bull market, up breakout).
- Stop: below `min(low, low[1])` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish reversal 53% (continuation 47%) |
| Overall rank | 38 of 103 (1 = best) |
| Frequency rank | 25 (common) |
| Best % meeting target | 69% (bull market, up breakout) |
| Best avg 10-day move | +4.05% (bear market, up breakout) |
| Best 10-day rank | 45 (bear market, up breakout) |

## Trading Tactics

- Bullish haramis within a third of the yearly low perform best.
- Select tall (first) candles.
- Trade as part of a downward reversal within an uptrend.

## Pine Notes

- Feasibility: **easy**. Bodies-only comparisons over two bars; no pivots.
- Signal fires on the second candle's close; confirm on breakout for alerts.
- Suggested inputs: trend-lookback (R1), tall-body multiplier (R3), "bodies not identical"
  toggle (R6), yearly-low filter. Shadows are ignored per Bulkowski.
