---
id: gapping-up-doji
name: Gapping up doji
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 92, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0235
  throwback_rate: null
  pct_meeting_target: 0.93
  reversal_rate: 0.57
  frequency_rank: 49
source: https://thepatternsite.com/GappingUpDoji.html
accessed: 2026-07-16
---

# Gapping up doji

## Overview

A single doji candle that gaps above the prior candle in an uptrend. Theory calls it a
bullish continuation; Bulkowski's tests show a near-random bearish reversal 57% of the
time. Weak post-breakout trend (rank 92), but it meets the measure-rule target 93% of the
time after a down breakout in a bull market.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | Upward |
| Configuration | Price gaps higher (including shadows) and forms a doji (open and close within pennies) |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** Gap higher: `low > high[1]` (gap including shadows, per Bulkowski's breakout definition [D]).
- **R3 [B]** Doji body: `abs(close - open) <= 0.1 * (high - low)` (default 10% body-to-range [D]).

## Confirmation & Breakout

Breakout measured including shadows: upward = `close > high`; downward = `close < low`.
Breaks out downward (bearish reversal) most often (~57%).

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout in the breakout
  direction. Best % meeting target 93% (bull market, down breakout).
- Stop: opposite side of the candle [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish reversal 57% of the time (near random) |
| Overall performance rank | 92 of 103 (1 = best) |
| Frequency rank | 49 |
| Best % meeting target | 93% (bull market, down breakout) |
| Best avg 10-day move | 2.35% (bull market, up breakout) |
| Best 10-day performance rank | 72 (bear market, up breakout) |

Occurs frequently but the following trend is short. A key setup: an upward retrace in a
downtrend accompanied by this reversal candle, with price then resuming the primary
downtrend.

## Trading Tactics

- Best within a third of the yearly low.
- Candles with upper shadows taller than the median perform well.
- Breaks out downward most often.

## Pine Notes

- Feasibility: **easy**. Single-bar doji test plus a gap-up condition; no pivots.
- Gap-up (`low > high[1]`) is rare on 24h/continuous futures — better on daily equities.
- Suggested inputs: trend-lookback, doji body-to-range threshold, minimum gap size,
  optional tall-upper-shadow filter.
