---
id: tweezers-bottom
name: Tweezers Bottom
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 44, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.71
  reversal_rate: 0.48
  frequency_rank: 39
source: https://thepatternsite.com/TweezersBottom.html
accessed: 2026-07-16
---

# Tweezers Bottom

## Overview

A two-candle pattern in a downtrend consisting of two adjacent candles sharing the same
low price. Theory calls it a bullish reversal, but Bulkowski's tests show it acts as a
bearish continuation 52% of the time (near random) — so it acts as a reversal only 48% of
the time. The twin low is meant to mark support.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Downward leading into the pattern |
| Configuration | Two candles sharing the same low price (any color, any size) |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** Two candles share the same low: `abs(low - low[1]) / low[1] <= 0.001` (within 0.1% default [D]; site says "same low price", any color/size).
- **R3 [D]** Candles tall (best performance): `(high[1]-low[1]) > ta.sma(high - low, 20)`.

## Confirmation & Breakout

Upward breakout (bullish reversal) = close above the top of the pair:
`close > max(high, high[1])`. Downward breakout = close below the shared low. The 52%
continuation rate means breakout direction is near random — do not predict it.

## Targets & Stops

- Height target: `height = max(high, high[1]) - min(low, low[1])`; up target = breakout
  price + height. Price meets target ~71% of the time (best case, bull market, up breakout).
- Stop: below the shared low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 48% (acts as bearish continuation 52% — near random) |
| Overall performance rank | 44 of 103 (1 = best) |
| Frequency rank | 39 |
| Best % meeting target | 71% (bull market, up breakout) |
| Best average move in 10 days | +4.95% (bear market, up breakout) |
| Best 10-day performance rank | 29 (bear market, up breakout) |

The best 10-day move (4.95%) falls short of the 6% Bulkowski considers "good." Similar to
the matching-low candle.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Select tall candles for best performance.
- Patterns within a third of the yearly high tend to act as reversals most often.

## Pine Notes

- Feasibility: **easy**. OHLC comparison on two bars; no pivots, no repainting.
- Signal fires on close of the second candle.
- Suggested inputs: trend-lookback (R1), equal-low tolerance (R2), tall-candle multiplier
  (R3).
- "Same low" needs a tolerance since exact tick equality is rare — expose R2's fraction as
  an input. Distinct from the matching-low candle (which uses equal closes).
