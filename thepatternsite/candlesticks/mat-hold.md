---
id: mat-hold
name: Mat hold
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 5, typical: 5}
confirmation: recommended
rank: {value: 86, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.67
  reversal_rate: null
  frequency_rank: 93
source: https://thepatternsite.com/MatHold.html
accessed: 2026-07-16
---

# Mat hold

## Overview

A rare five-candle bullish continuation in an uptrend: a tall white candle, three small
candles that drift down but stay above the first candle's low, then a tall white candle that
closes above the high of the prior four. Acts as a bullish continuation 78% of the time.
Very rare (only 52 found in 4.7M candles), so statistics are provisional.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Five |
| Price trend | Upward |
| Day 1 | Tall white candle |
| Day 2 | Small black candle with a higher close (than day 1's close) |
| Day 3 | Small candle of any color |
| Day 4 | Small black candle |
| Days 2–4 | Trend downward but bodies stay above the low of day 1 |
| Day 5 | Tall white candle closing above the high of the prior four candles |

## Detection Rules (computable)

- **R1 [B]** Uptrend into pattern: `close[5] > close[10]` (5-bar uptrend default [D]).
- **R2 [B]** Day 1 tall white: `close[4] > open[4]` and `(close[4]-open[4]) >= 1.3*avgBody` (tallness default [D]).
- **R3 [B]** Day 2 small black with higher close: `close[3] < open[3]` and `close[3] > close[4]`.
- **R4 [D]** Days 2–4 small bodies: each body `< 0.5 *` day-1 body.
- **R5 [B]** Day 4 small black: `close[1] < open[1]`.
- **R6 [B]** Days 2–4 drift down: `close[1] < close[3]` (later small candles lower).
- **R7 [B]** Small candles stay above day-1 low: `min(low[3], low[2], low[1]) > low[4]`.
- **R8 [B]** Day 5 tall white breakout: `close > open` and `close > highest(high[1], 4)`.

## Confirmation & Breakout

The pattern completes with day 5's close above the high of the prior four candles (upward
breakout, `close > highest(high[1],4)`). Bulkowski warns that a price reversal often follows
completion, and downward breakouts (`close < lowest(low,5)`) occur too.

## Targets & Stops

- Height target: `height = highest(high,5) - lowest(low,5)`; up target = breakout price +
  height (met ~67% best configuration) [B].
- Stop: below `lowest(low, 5)` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish continuation 78% of the time |
| Overall performance rank | 86 of 103 (1 = best) |
| Frequency rank | 93 (very rare — 52 found in 4.7M candles) |
| Best % meeting target | 67% (bull market, down breakout) |
| Best avg 10-day move | −7.21% (bull market, down breakout) |
| Best 10-day performance rank | 2 (bull market, down breakout) |

Statistics are provisional given only 52 samples. Despite the bullish-continuation label,
the strongest move (rank 2) is a −7.21% drop after a downward breakout in a bull market.
Expect a price reversal after completion.

## Trading Tactics

- Expect a price reversal after the mat hold completes.
- Taller-than-median mat holds move farther after the breakout.
- Expect an upward breakout most often.

## Pine Notes

- Feasibility: **moderate**. Five-bar sequence with several body-size and containment tests;
  no pivots, but the "small bodies above day-1 low" containment is exacting.
- Small-body threshold (R4) and tall-body threshold (R2/R8) are the key tunables.
- Suggested inputs: uptrend lookback, tall-body multiplier, small-body fraction, breakout
  lookback (4).
- Extremely rare — will seldom trigger; treat stats as low-confidence.
