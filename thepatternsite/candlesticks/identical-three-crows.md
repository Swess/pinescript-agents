---
id: identical-three-crows
name: Identical Three Crows
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 24, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.63
  reversal_rate: 0.79
  frequency_rank: 83
source: https://thepatternsite.com/Identical3Crows.html
accessed: 2026-07-16
---

# Identical Three Crows

## Overview

A three-line bearish reversal in an uptrend: three tall black candles descending in a
cascade, with each of the last two opening near the prior candle's close. It acts as a
bearish reversal 79% of the time and ranks a strong 24 of 103 overall — though it is very
rare (only 921 samples), so the numbers are suspect.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Three |
| Price trend | Upward leading into the pattern |
| Configuration | Three tall black candles; the last two open near the prior candle's close |
| Body size | Some sources require similar-size candles; Bulkowski drops that (too rare otherwise) |

## Detection Rules (computable)

Index the three bars as bar1=[2], bar2=[1], bar3=[0] (current).

- **R1 [D]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend into bar1).
- **R2 [B]** All three candles black: `close[2] < open[2] and close[1] < open[1] and close < open`.
- **R3 [D]** All three candles tall: each `(high-low) > ta.sma(high-low, 20)` (taller-than-average default).
- **R4 [B]** Descending closes: `close[1] < close[2] and close < close[1]`.
- **R5 [B]** Bar2 opens near bar1's close: `abs(open[1] - close[2]) <= 0.1*(high[2]-low[2])` (within 10% [D]).
- **R6 [B]** Bar3 opens near bar2's close: `abs(open - close[1]) <= 0.1*(high[1]-low[1])` (within 10% [D]).

## Confirmation & Breakout

Downward breakout (confirms the bearish reversal) = `close < low` (below the bottom of the
pattern); upward breakout = `close > high[2]` (above the top of the first candle, including
its upper shadow). Downward breakouts dominate because price must climb above the whole
first candle to break out upward.

## Targets & Stops

- Height target: `height = high[2] - low`; down target = breakout price − height
  (best % meeting target 63%: bear market, up breakout).
- Stop: above `high[2]` (top of the first candle) for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish reversal 79% |
| Overall rank | 24 of 103 (1 = best) |
| Frequency rank | 83 (rare) |
| Best % meeting target | 63% (bear market, up breakout) |
| Best avg 10-day move | +10.03% (bear market, up breakout) |
| Best 10-day rank | 3 (bear market, up breakout) |

The exceptional +10.03% best move (upward breakout in a bear market) is based on only 921
samples, so treat it cautiously.

## Trading Tactics

- After an uptrend into the pattern, expect a downward breakout but a quick recovery.
- Volume gives performance clues.
- Breakouts below the 50-day moving average lead to the best performance in most conditions.

## Pine Notes

- Feasibility: **easy**. Three-bar OHLC comparisons; no pivots. The candles are effectively
  opening black marubozu (little/no upper shadow) forming a cascade.
- Signal fires on the third candle's close; confirm on breakout for alerts.
- Suggested inputs: trend-lookback (R1), tall-body multiplier (R3), open-near-prior-close
  tolerance (R5/R6), optional similar-size constraint, 50-MA filter.
