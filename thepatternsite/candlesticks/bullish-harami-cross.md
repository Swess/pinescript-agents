---
id: bullish-harami-cross
name: Bullish Harami Cross
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 50, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.74
  reversal_rate: 0.45
  frequency_rank: 47
source: https://thepatternsite.com/HaramiCrossBull.html
accessed: 2026-07-16
---

# Bullish Harami Cross

## Overview

A variant of the bullish harami: a tall black candle in a downtrend followed by a doji that
fits within the first candle's high-low range. Theory says bullish reversal, but price
continues falling (bearish continuation) 55% of the time ("near random"). Overall
performance is mid-list at rank 50 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle |
| Second candle | Doji fitting within the high-low price range of the prior day |

## Detection Rules (computable)

- **R1 [D]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend into the first line).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [D]** First candle tall: `(high[1]-low[1]) > ta.sma(high-low, 20)[1]`.
- **R4 [B]** Second candle is a doji: `abs(close-open) <= 0.1*(high-low)` (body ≤ 10% of range [D]).
- **R5 [B]** Doji inside the first candle's range (inside day): `high <= high[1] and low >= low[1]`.

## Confirmation & Breakout

Upward breakout (confirms the bullish reversal) = `close > high[1]`; downward breakout =
`close < low[1]`. Downward breakouts (continuation) occur 55% of the time. Wait for the
breakout — direction is near random.

## Targets & Stops

- Candle-height target: `height = high[1] - low[1]`; up target = breakout price + height
  (met ~74% best config: bull market, up breakout).
- Stop: below `low[1]` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 55% (reversal 45%) |
| Overall rank | 50 of 103 (1 = best) |
| Frequency rank | 47 |
| Best % meeting target | 74% (bull market, up breakout) |
| Best avg 10-day move | +4.52% (bear market, up breakout) |
| Best 10-day rank | 36 (bull market, up breakout) |

## Trading Tactics

- Bullish harami crosses within a third of the yearly low perform best.
- Select tall (first) candles.
- Those within a third of the yearly low tend to act as continuations.

## Pine Notes

- Feasibility: **easy**. Doji test + inside-range test over two bars; no pivots.
- Suggested inputs: trend-lookback (R1), tall-body multiplier (R3), doji-body threshold (R4),
  yearly-low filter. Second line is an inside day (shadows included).
