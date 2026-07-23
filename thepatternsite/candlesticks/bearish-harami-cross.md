---
id: bearish-harami-cross
name: Bearish Harami Cross
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 80, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.69
  reversal_rate: 0.43
  frequency_rank: 45
source: https://thepatternsite.com/HaramiCrossBear.html
accessed: 2026-07-16
---

# Bearish Harami Cross

## Overview

A variant of the bearish harami: a tall white candle in an uptrend followed by a doji whose
entire range (including shadows) fits inside the white candle's high-low range. Theory says
bearish reversal, but it acts as a bullish continuation 57% of the time. Overall performance
is poor, ranking 80 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Upward leading into the pattern |
| First candle | Tall white candle |
| Second candle | Doji whose range (incl. shadows) is inside the first candle's high-low range |

## Detection Rules (computable)

- **R1 [D]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend into the first line).
- **R2 [B]** First candle white: `close[1] > open[1]`.
- **R3 [D]** First candle tall: `(high[1]-low[1]) > ta.sma(high-low, 20)[1]`.
- **R4 [B]** Second candle is a doji: `abs(close-open) <= 0.1*(high-low)` (body ≤ 10% of range [D]).
- **R5 [B]** Doji range inside the white candle's range (inside day): `high <= high[1] and low >= low[1]`.

## Confirmation & Breakout

Upward breakout = `close > high[1]` (top of the white candle); downward breakout =
`close < low[1]`. Upward breakouts (continuation) occur 57% of the time. Best reversal
setup is an upward retrace within a downward primary trend. Wait for the breakout.

## Targets & Stops

- Candle-height target: `height = high[1] - low[1]`; down target = breakout price − height
  (best % meeting target 69% in bull market, up breakout).
- Stop: above `high[1]` for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish continuation 57% (reversal 43%) |
| Overall rank | 80 of 103 (1 = best) |
| Frequency rank | 45 |
| Best % meeting target | 69% (bull market, up breakout) |
| Best avg 10-day move | −3.13% (bear market, down breakout) |
| Best 10-day rank | 41 (bull market, down breakout) |

Best moves come from countertrend breakouts (up in bear markets, down in bull markets),
which Bulkowski attributes to snapback rallies/drops from overbought/oversold conditions.

## Trading Tactics

- Bearish harami crosses within a third of the yearly low perform best.
- Select tall (first) candles.
- Best reversal performance follows an upward retracement of a downward price trend.

## Pine Notes

- Feasibility: **easy**. Doji test + inside-range test over two bars; no pivots.
- The second line is a full inside day (shadows included) — stricter than the plain harami.
- Suggested inputs: trend-lookback (R1), tall-body multiplier (R3), doji-body threshold (R4).
