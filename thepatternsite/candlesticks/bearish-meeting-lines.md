---
id: bearish-meeting-lines
name: Bearish meeting lines
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 16, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.60
  reversal_rate: null
  frequency_rank: 63
source: https://thepatternsite.com/MeetingLinesBear.html
accessed: 2026-07-16
---

# Bearish meeting lines

## Overview

A two-candle pattern in an uptrend: a tall white candle followed by a tall black candle
whose close is near the white candle's close (the closes "meet"). Theory calls it a bearish
reversal, but tests show it acts as a bullish continuation 51% of the time (random
direction). Once a breakout occurs price trends well — overall performance rank 16.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Upward |
| First candle | Tall white candle |
| Second candle | Tall black candle |
| Closes | The two closes should be near one another |

## Detection Rules (computable)

- **R1 [B]** Uptrend into pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** First candle tall white: `close[1] > open[1]` and `(close[1]-open[1]) >= 1.3*avgBody` (tallness default [D]).
- **R3 [B]** Second candle tall black: `close < open` and `(open-close) >= 1.3*avgBody` [D].
- **R4 [B]** Closes meet: `abs(close - close[1]) <= 0.3% * close[1]` ("near"; 0.3% tolerance default [D]).

## Confirmation & Breakout

Breakout direction is random, so a breakout is essential. Upward = `close > max(high, high[1])`;
downward (bearish) = `close < min(low, low[1])`. A lower close the day after completion
suggests a reversal 67%–70% of the time.

## Targets & Stops

- Height target: `height = max(high,high[1]) - min(low,low[1])`; target = breakout price ±
  height (met ~60% best configuration) [B].
- Stop: opposite side of the pattern from the trade direction [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish continuation 51% (random) |
| Overall performance rank | 16 of 103 (1 = best) |
| Frequency rank | 63 (somewhat rare) |
| Best % meeting target | 60% (bull market, up breakout) |
| Best avg 10-day move | +7.16% (bear market, up breakout) |
| Best 10-day performance rank | 12 (bear market, up breakout) |

Strong trend once a breakout establishes (best +7.16%, rank 12). For this candle
continuations outperform reversals (unlike candlesticks generally, where reversals beat
continuations 59% to 41%).

## Trading Tactics

- Best performance when the candle appears within a third of the yearly low.
- A lower close the day after completion suggests a reversal 67%–70% of the time.
- In a bear market within a third of the yearly high it acts as a continuation most often.
- Wait for the breakout and trade with the trend.

## Pine Notes

- Feasibility: **easy**. Two-bar tall-body comparison plus a close-match test.
- Close-match tolerance (default 0.3%) is looser than matching-low; Bulkowski's own "near
  one another, whatever that means" flags the subjectivity.
- Suggested inputs: uptrend lookback, tall-body multiplier, close-match tolerance, breakout
  confirmation (required given random direction).
