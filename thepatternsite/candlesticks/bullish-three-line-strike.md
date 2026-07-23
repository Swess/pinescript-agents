---
id: bullish-three-line-strike
name: Bullish three line strike
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 4, typical: 4}
confirmation: recommended
rank: {value: 2, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.50
  reversal_rate: 0.65
  frequency_rank: 95
source: https://thepatternsite.com/ThreeLineStrikeBull.html
accessed: 2026-07-16
---

# Bullish three line strike

## Overview

A four-candle pattern in an uptrend: three white candles each with a higher close followed
by a tall black candle that opens higher but closes below the open of the first candle.
Theory calls it a bullish continuation, but Bulkowski's tests (only 69 samples) show it
acts as a **bearish reversal 65% of the time**, ranking 2nd overall — a rank inflated by
the low sample count.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Four |
| Price trend | Upward leading into the pattern |
| First three candles | Three white candles, each with a higher close |
| Fourth candle | Tall black candle that opens higher but closes below the open of the first candle |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** First three candles white: `close[3] > open[3] and close[2] > open[2] and close[1] > open[1]`.
- **R3 [B]** Higher closes across the three white candles: `close[2] > close[3] and close[1] > close[2]`.
- **R4 [B]** Fourth candle black: `close < open`.
- **R5 [B]** Fourth candle opens higher: `open > close[1]`.
- **R6 [B]** Fourth candle closes below first day's open: `close < open[3]`.
- **R7 [D]** Fourth candle tall: `(open - close) > ta.sma(high - low, 20)`.

## Confirmation & Breakout

Closing price sits near the pattern's bottom, so a downward breakout (bearish reversal)
is easy: `close < lowest(low, 4)`. Upward breakout = close above the pattern high.
The bearish-reversal reading dominates because the bottom is close by.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low` over the 4 candles; down target =
  breakout price − height. Price meets target only ~50% of the time (bear market, down
  breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 65% bearish |
| Overall performance rank | 2 of 103 (1 = best) |
| Frequency rank | 95 (very rare — 69 samples) |
| Best % meeting target | 50% (bear market, down breakout) |
| Best average move in 10 days | 16.91% (bear market, up breakout) |
| Best 10-day performance rank | 1 (bear market, up breakout) |

The 16.91% figure derives from just two patterns; do not expect that return. Rank 2 is
largely an artifact of the low sample count.

## Trading Tactics

- Trade tall patterns in a bear market for the best performance.
- After a downward breakout in an uptrend, wait 3 days before selling.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on four bars; no pivots, no repainting.
- Signal fires on close of the fourth candle.
- Suggested inputs: trend-lookback (R1), tall-fourth-candle multiplier (R7).
- Rarity means few live signals; useful mainly as a screener trigger.
