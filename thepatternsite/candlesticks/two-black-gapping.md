---
id: two-black-gapping
name: Two black gapping
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 10, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0645
  throwback_rate: null
  pct_meeting_target: 0.61
  reversal_rate: null
  frequency_rank: 29
source: https://thepatternsite.com/TwoBlackGapping.html
accessed: 2026-07-16
---

# Two black gapping

## Overview

A two-candle bearish continuation pattern in a downtrend: price gaps down, then two black
candles follow with the second candle having a lower high than the first. Acts as a
bearish continuation 68% of the time and carries a strong overall performance rank (10 of
103) because its upward breakouts perform well enough to lift the average.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Downward leading into the pattern |
| Configuration | A price gap down precedes two black candles; the second black candle's high is below the prior candle's high |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[2] < close[7]` (5-bar downtrend default [D]).
- **R2 [B]** Gap down ahead of the two candles: `high[1] < low[2]` (gap between the candle before the pattern and the first black candle) [D interpretation of "price gap"].
- **R3 [B]** First candle black: `close[1] < open[1]`.
- **R4 [B]** Second candle black: `close < open`.
- **R5 [B]** Second candle has a lower high: `high < high[1]`.

## Confirmation & Breakout

Breakout is downward when price closes below the lowest low in the pattern:
`close < min(low[1], low)`. Because the trend enters and exits downward, the pattern
confirms as a continuation. Bulkowski notes upward breakouts actually perform best on
average, so waiting for the breakout direction is worthwhile.

## Targets & Stops

- Candle-height target: `height = max(high[1], high) - min(low[1], low)`; project from the
  breakout price. ~61% meet target (bull market, up breakout).
- Stop: above the pattern high `max(high[1], high)` for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Bearish continuation |
| Tested continuation rate | 68% |
| Overall performance rank | 10 of 103 (1 = best) |
| Frequency rank | 29 |
| Best % meeting target | 61% (bull market, up breakout) |
| Best 10-day move | +6.45% (bear market, up breakout) |
| Best 10-day performance rank | 14 (bull market, up breakout) |

Upward breakouts do well enough that downward breakouts do not drag the overall score down.

## Trading Tactics

- Best when the pattern appears within a third of the yearly low.
- Select tall candles for the best performance.
- Trade when the primary trend is downward.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on two bars plus a gap check on the prior bar.
- Signal fires on the close of the second candle (`barstate.isconfirmed` for alerts).
- The "price gap" is subjective — R2 treats it as a gap between the pre-pattern bar and the
  first black candle; expose a toggle in case only body/high-low gaps are desired.
- Suggested inputs: trend-lookback for R1, require-tall-candles filter, "within one-third
  of yearly low" filter (`close < ta.lowest(low, 252) * 4/3`).
