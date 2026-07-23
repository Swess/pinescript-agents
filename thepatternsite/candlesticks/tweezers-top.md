---
id: tweezers-top
name: Tweezers top
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 81, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.65
  reversal_rate: 0.44
  frequency_rank: 35
source: https://thepatternsite.com/TweezersTop.html
accessed: 2026-07-16
---

# Tweezers top

## Overview

A two-candle pattern in an uptrend consisting of two adjacent candles sharing the same (or
nearly the same) high price. Theory calls it a bearish reversal marking overhead
resistance, but Bulkowski's ~20,000-sample study shows price closes above the pattern 56%
of the time (bullish continuation) — so it acts as a reversal only 44% of the time. The
resistance is weak.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Upward leading into the pattern |
| Configuration | Two adjacent candles with the same (or nearly the same) high price |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** Two candles share the same high: `abs(high - high[1]) / high[1] <= 0.001` (within 0.1% default [D]; "same or nearly the same high").
- **R3 [D]** Tall upper and lower shadows tend to do well: shadows longer than average.

## Confirmation & Breakout

Downward breakout (bearish reversal) = close below the bottom of the pair:
`close < min(low, low[1])`. Upward breakout = close above the shared high (the more common
case, 56%). Breakout direction is near random — do not predict it.

## Targets & Stops

- Height target: `height = max(high, high[1]) - min(low, low[1])`; projected up from the
  pattern top on an up breakout. Price meets target only ~65% of the time (best case) —
  the weak hit rate (a strong candle exceeds 90%) signals a weak post-breakout trend.
- Stop: above the shared high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 44% (acts as bullish continuation 56% — near random) |
| Overall performance rank | 81 of 103 (1 = best) |
| Frequency rank | 35 |
| Best % meeting target | 65% (bull market, up breakout) |
| Best average move in 10 days | −3.21% (bear market, down breakout) |
| Best 10-day performance rank | 42 (bull market, down breakout) |

Weak performer: the best 10-day move is only 3.21%, and the pattern often appears midway
through an uptrend rather than at its end.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Patterns with tall upper and lower shadows tend to do well.
- Trade in the direction of the prevailing price trend.

## Pine Notes

- Feasibility: **easy**. OHLC comparison on two bars; no pivots, no repainting.
- Signal fires on close of the second candle.
- Suggested inputs: trend-lookback (R1), equal-high tolerance (R2), shadow-length filter
  (R3).
- "Same high" needs a tolerance since exact tick equality is rare — expose R2's fraction
  as an input. Mirror of the tweezers bottom.
