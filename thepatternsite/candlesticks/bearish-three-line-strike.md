---
id: bearish-three-line-strike
name: Bearish three line strike
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 4, typical: 4}
confirmation: recommended
rank: {value: 1, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.80
  reversal_rate: 0.84
  frequency_rank: 94
source: https://thepatternsite.com/ThreeLineStrikeBear.html
accessed: 2026-07-16
---

# Bearish three line strike

## Overview

A four-candle pattern in a downtrend: three black candles making lower lows followed by a
tall white candle that engulfs the prior three days. Theory calls it a bearish
continuation, but Bulkowski's tests (only 85 samples of 4.7M lines) show it acts as a
**bullish reversal 84% of the time**, ranking 1st overall — though the tiny sample makes
the top-tier stats unreliable.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Four |
| Price trend | Downward leading into the pattern |
| First three candles | Three black candles forming lower lows |
| Fourth candle | Tall white candle that opens below the prior close and closes above the first day's open — it spans most of the prior three days' price action |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[3] < close[8]` (5-bar downtrend default [D]).
- **R2 [B]** First three candles black: `close[3] < open[3] and close[2] < open[2] and close[1] < open[1]`.
- **R3 [B]** Lower lows across the three black candles: `low[2] < low[3] and low[1] < low[2]`.
- **R4 [B]** Fourth candle white: `close > open`.
- **R5 [B]** Fourth candle opens below prior close: `open < close[1]`.
- **R6 [B]** Fourth candle closes above first day's open: `close > open[3]`.
- **R7 [D]** Fourth candle tall: `(close - open) > ta.sma(high - low, 20)` (spans most of prior action).

## Confirmation & Breakout

Closing price sits near the pattern's top, so an upward breakout (bullish reversal)
is easy: `close > highest(high, 4)`. Downward breakout = close below the pattern low.
The bullish-reversal reading dominates because the top is close by.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low` over the 4 candles; up target =
  breakout price + height. Price meets the target ~80% of the time (bull market, down
  breakout). Tall patterns meet targets less often than short ones.
- Stop: below the pattern low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 84% bullish |
| Overall performance rank | 1 of 103 (1 = best) |
| Frequency rank | 94 (rare — 85 samples) |
| Best % meeting target | 80% (bull market, down breakout) |
| Best average move in 10 days | −8.81% (bull market, down breakout) |
| Best 10-day performance rank | 1 (bull market, down breakout) |

Bulkowski cautions the elite ranks stem from the small sample; the candle does not perform
as well as the numbers suggest.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Trade during a downward retracement of an upward price trend.
- Patterns act as reversals most often within a third of the yearly high.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on four bars; no pivots, no repainting.
- Signal fires on close of the fourth candle.
- Suggested inputs: trend-lookback (R1), tall-fourth-candle multiplier (R7), yearly-low
  filter.
- Rarity means few live signals; useful mainly as a screener trigger.
