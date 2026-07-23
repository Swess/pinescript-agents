---
id: evening-star
name: Evening star
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 4, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0877
  throwback_rate: null
  pct_meeting_target: 0.50
  reversal_rate: 0.72
  frequency_rank: 71
source: https://thepatternsite.com/EveningStar.html
accessed: 2026-07-16
---

# Evening star

## Overview

A three-candle bearish reversal at the top of an uptrend: a tall white candle, a small
body of any color gapping above both neighbors, then a tall black candle that opens below
the middle candle and closes at least midway down the first candle's body. Excellent
overall performer (rank 4) with a 72% reversal rate.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Three |
| Price trend | Upward |
| Candle 1 | Tall white candle |
| Candle 2 | Small body of any color that gaps above the two adjacent bodies (ignore shadows) |
| Candle 3 | Tall black candle that opens below the prior candle and closes at least midway down candle 1's body |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** First candle tall white: `close[2] > open[2]` and `(close[2] - open[2]) > ta.sma(high - low, 20)[2]`.
- **R3 [B]** Second candle small body: `abs(close[1] - open[1]) < 0.5 * (close[2] - open[2])` (small relative to candle 1 [D]).
- **R4 [B]** Middle body gaps above candle 1 body: `min(open[1], close[1]) > close[2]`.
- **R5 [B]** Third candle tall black: `close < open`.
- **R6 [B]** Third opens below middle body: `open < min(open[1], close[1])`.
- **R7 [B]** Third closes at least midway down candle 1: `close <= (open[2] + close[2]) / 2`.

## Confirmation & Breakout

Downward breakout = `close < ` three-candle low; upward = `close > ` three-candle high.
Downward (bearish reversal) occurs 72% of the time.

## Targets & Stops

- Candle-height target: `height = highest(high, 3) - lowest(low, 3)`; project down from the
  breakout. Best % meeting target 50% (bull market, up breakout).
- Stop: above the three-candle high [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish reversal 72% of the time |
| Overall performance rank | 4 of 103 (1 = best) — top notch |
| Frequency rank | 71 (rare) |
| Best % meeting target | 50% (bull market, up breakout) |
| Best avg 10-day move | 8.77% (bear market, up breakout, rank 4) |
| Best 10-day performance rank | 4 (bear market, up breakout) |

Once the trend begins it tends to persist. The 8.77% best move rests on just 63 samples
and may fall with more data. Avoid trading after a downward breakout in a bull market.

## Trading Tactics

- Best within a third of the yearly low in a bull market.
- A prime setup: an evening star in an upward retracement of a primary downtrend.
- Breaks out downward most often.

## Pine Notes

- Feasibility: **easy/moderate**. Three-bar OHLC logic; body-gap of the middle candle is
  the key test. The middle body's color is irrelevant (unlike the doji variant).
- Suggested inputs: trend-lookback, small-body ratio (R3), tall-body multiplier,
  midpoint-penetration depth (R7).
