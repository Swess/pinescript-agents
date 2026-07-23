---
id: dark-cloud-cover
name: Dark cloud cover
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 22, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.62
  reversal_rate: 0.60
  frequency_rank: 46
source: https://thepatternsite.com/DarkCloudCover.html
accessed: 2026-07-16
---

# Dark cloud cover

## Overview

A two-candle bearish reversal in an uptrend: a tall white candle followed by a black candle
that opens above the prior high but closes below the midpoint of the white body. Bulkowski's
tests show a bearish reversal 60% of the time, with strong overall performance (22 of 103) —
price tends to trend after the breakout.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend leading to pattern | Upward |
| First candle | Tall white candle |
| Second candle | Black; opens above the prior high, closes below the midpoint of the white body |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** First candle white: `close[1] > open[1]`.
- **R3 [D]** First candle tall: `(close[1] - open[1]) > ta.sma(high - low, 20)[1]` (default: taller than 20-bar average range).
- **R4 [B]** Second candle black: `close < open`.
- **R5 [B]** Second candle opens above prior high: `open > high[1]`.
- **R6 [B]** Second candle closes below the white body midpoint: `close < (open[1] + close[1]) / 2` (and `close > open[1]`, i.e. not fully below the white body — implied by "cover" [D]).

## Confirmation & Breakout

Breakout direction defines performance: downward breakout (reversal) = `close < min(low, low[1])`
(lowest low of the two candles); upward breakout = `close > max(high, high[1])`. Bulkowski
notes it breaks out downward most often; waiting for the downward breakout is recommended.

## Targets & Stops

- Pattern-height target: `height = max(high, high[1]) - min(low, low[1])`; down target =
  breakout price − height. Best percentage meeting target 62% (bear market, down breakout).
- Stop: above the higher of the two candle highs for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 60% bearish |
| Frequency rank | 46 |
| Overall performance rank | 22 of 103 (1 = best) |
| Best % meeting target | 62% (bear market, down breakout) |
| Best 10-day move | +5.36% (bear market, up breakout) |
| Best 10-day performance rank | 19 (bull market, up breakout) |

One of the better-performing reversal candles overall despite only a 60% reversal rate.
Reversals occur most often within a third of the yearly low.

## Trading Tactics

- Prefer dark cloud cover within a third of the yearly low — best performance and most
  frequent reversals.
- Best setup: a downtrend, an upward retrace, then dark cloud cover signalling resumption
  of the downtrend on a downward breakout.
- It breaks out downward most often.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC comparisons; no pivots, no repainting.
- Signal fires on the second candle's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: trend lookback (R1), tall-first-candle multiplier (R3), penetration
  depth (default midpoint in R6 — some definitions use deeper/shallower thresholds),
  optional yearly-low filter.
- Contrast with bearish engulfing (which fully covers the white body); dark cloud cover
  penetrates only past the midpoint.
