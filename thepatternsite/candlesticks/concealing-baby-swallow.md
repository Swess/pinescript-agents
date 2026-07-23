---
id: concealing-baby-swallow
name: Concealing baby swallow
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 4, typical: 4}
confirmation: required
rank: {value: 101, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.67
  reversal_rate: null
  frequency_rank: 103
source: https://thepatternsite.com/ConcealBaby.html
accessed: 2026-07-16
---

# Concealing baby swallow

## Overview

A very rare four-black-candle pattern in a downtrend. Theory calls it a bullish reversal,
but Bulkowski's tests (only 4 samples) show it acts as a *bearish continuation* 75% of the
time. Frequency rank is dead last (103) and overall performance nearly so (101 of 103),
inflated downward by missing bull/bear categories.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Four |
| Price trend leading to pattern | Downward |
| Candles 1–2 | Two long black marubozu candles |
| Candle 3 | Black with a tall upper shadow; gaps open downward but trades up into the prior day's body |
| Candle 4 | Black; engulfs the prior day including shadows (higher high and lower low than candle 3) |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[4] < close[9]` (prior-trend default [D]).
- **R2 [B]** Candle 1 black marubozu: `close[3] < open[3]` and shadows ≤5% of range on both ends (marubozu default [D]).
- **R3 [B]** Candle 2 black marubozu: `close[2] < open[2]` and shadows ≤5% of range on both ends [D].
- **R4 [B]** Candle 3 black with tall upper shadow, gaps down then trades into prior body: `close[1] < open[1] and open[1] < close[2] and high[1] > close[2]` (opens below prior close, rallies into body; tall upper shadow `high[1]-open[1] > body[1]` [D]).
- **R5 [B]** Candle 4 black, engulfs candle 3 including shadows: `close < open and high > high[1] and low < low[1]`.

## Confirmation & Breakout

The reversal/continuation is defined by the breakout: downward breakout (continuation) =
`close < ` lowest low of the four candles; upward breakout (reversal) = `close > ` highest
high. Because the trend leading in is down and the last candle closes low, downward
breakouts (continuation) dominate. Confirmation is required.

## Targets & Stops

- Pattern-height target: `height = highest(high,4) - lowest(low,4)`; down target =
  breakout price − height. Best percentage meeting target 67% (bull market, down breakout).
- Stop: above the highest high of the four candles for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 75% bearish (theory says bullish reversal) |
| Frequency rank | 103 (rarest) |
| Overall performance rank | 101 of 103 (1 = best) |
| Best % meeting target | 67% (bull market, down breakout) |
| Best 10-day move | −7.10% (bull market, down breakout) |
| Best 10-day performance rank | 3 (bull market, down breakout) |
| Sample size | 4 (statistics unreliable) |

Despite the poor overall rank, the best 10-day move (−7.10%) and its rank (3) are strong,
but based on a tiny sample. Bulkowski found the candle in only two of four market/breakout
categories; zeros in the others dragged the overall rank down.

## Trading Tactics

- The nominal bullish-reversal theory is contradicted by the data — treat it as a bearish
  continuation and wait for the downward breakout.
- Statistics are extremely sample-limited; do not rely on them.

## Pine Notes

- Feasibility: **moderate**. Four-bar OHLC comparisons; marubozu tolerances and the "trades
  into prior body" plus full-engulf rules need care, but no pivots or repainting.
- Signal fires on candle 4's close; require `close` below the 4-bar lowest low for the
  confirmed continuation.
- Suggested inputs: prior-trend lookback (R1), marubozu shadow tolerance (R2/R3), tall-
  upper-shadow multiplier (R4). Expect essentially no matches at strict settings.
