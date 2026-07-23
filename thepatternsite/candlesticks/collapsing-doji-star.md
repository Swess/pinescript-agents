---
id: collapsing-doji-star
name: Collapsing doji star
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 97, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.60
  reversal_rate: 0.63
  frequency_rank: 101
source: https://thepatternsite.com/CollapseDojiStar.html
accessed: 2026-07-16
---

# Collapsing doji star

## Overview

A very rare three-candle bearish reversal in an uptrend: a white candle, then a doji that
gaps below the prior low, then a black candle that gaps below the doji — the doji "floats"
between two gaps with no shadow overlap. Bulkowski found only 16 samples, so stats are
unreliable; it acts as a bearish reversal 63% of the time but overall performance is near
the bottom (97 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend leading to pattern | Upward |
| Candle 1 | White candle in an uptrend |
| Candle 2 | Doji that gaps below candle 1's low |
| Candle 3 | Black candle that gaps below the doji |
| Gaps | None of the three candles' shadows overlap — gaps surround the doji |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (prior-trend default [D]).
- **R2 [B]** Candle 1 white: `close[2] > open[2]`.
- **R3 [B]** Candle 2 is a doji: `abs(close[1] - open[1]) <= 0.05 * (high[1] - low[1])` (doji body ≤5% of range default [D]).
- **R4 [B]** Doji gaps entirely below candle 1's low (no shadow overlap): `high[1] < low[2]`.
- **R5 [B]** Candle 3 black: `close < open`.
- **R6 [B]** Candle 3 gaps entirely below the doji (no shadow overlap): `high < low[1]`.

## Confirmation & Breakout

The reversal is defined by a downward breakout = `close < ` the lowest low of the three-
candle pattern. Upward breakout = `close > ` highest high of the pattern. Confirmation
(close below the pattern bottom) is required.

## Targets & Stops

- Pattern-height target: `height = highest(high,3) - lowest(low,3)`; down target =
  breakout price − height. Best percentage meeting target 60% (bull market, down breakout).
- Stop: above the highest high of the three candles for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 63% bearish |
| Frequency rank | 101 (extremely rare) |
| Overall performance rank | 97 of 103 (1 = best) |
| Best % meeting target | 60% (bull market, down breakout) |
| Best 10-day move | +7.32% (bull market, up breakout) |
| Best 10-day performance rank | 24 (bull market, up breakout) |
| Sample size | 16 (statistics unreliable) |

No bear-market samples were found, which hurt overall performance. On the one-minute scale
the pattern appears roughly once every 3.3 years. Treat all statistics as provisional.

## Trading Tactics

- Wait for the downward breakout (close below the pattern bottom) to confirm the reversal.
- Given the tiny sample and extreme rarity, do not rely on the statistics.

## Pine Notes

- Feasibility: **moderate**. Three-bar OHLC comparisons; the two no-overlap gap rules
  (R4, R6) are strict and will rarely fire, but need no pivot detection or repainting.
- Signal fires on candle 3's close; require `close` below the 3-bar lowest low for the
  confirmed reversal.
- Suggested inputs: prior-trend lookback (R1), doji-body tolerance (R3), toggle to relax
  the strict "no shadow overlap" gap requirement. Expect almost no matches at strict
  settings; relaxing the gap rule increases frequency at the cost of fidelity.
