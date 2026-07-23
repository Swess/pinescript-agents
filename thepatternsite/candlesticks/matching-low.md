---
id: matching-low
name: Matching low
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 8, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.69
  reversal_rate: null
  frequency_rank: 58
source: https://thepatternsite.com/MatchingLow.html
accessed: 2026-07-16
---

# Matching low

## Overview

A two-candle pattern in a downtrend: a tall black candle followed by another black candle
whose close matches the prior close (the closes, not the lows, match — forming a support
zone). Theory calls it a bullish reversal, but tests show it acts as a bearish continuation
61% of the time. Notable for its excellent overall performance rank of 8.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward |
| First candle | Black candle with a tall body |
| Second candle | Black candle whose close (not low) matches the first candle's close |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black and tall: `close[1] < open[1]` and `(open[1]-close[1]) >= 1.3*avgBody` (tallness default [D]).
- **R3 [B]** Second candle black: `close < open`.
- **R4 [B]** Closes match: `abs(close - close[1]) <= 0.1% * close[1]` (closes "match"; 0.1% tolerance default [D]).

## Confirmation & Breakout

The two matching closes form a support zone. Breakout = close beyond the two-bar extreme.
Upward (reversal, best performance) = `close > max(high, high[1])`; downward (continuation,
most common) = `close < min(low, low[1])`.

## Targets & Stops

- Height target: `height = max(high,high[1]) - min(low,low[1])`; target = breakout price ±
  height (met ~69% best configuration) [B].
- Stop: for a reversal long, below the matching-close support (`min(close, close[1])`) [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 61% of the time |
| Overall performance rank | 8 of 103 (1 = best) |
| Frequency rank | 58 (mid-list) |
| Best % meeting target | 69% (bull market, up breakout) |
| Best avg 10-day move | +7.15% (bear market, up breakout) |
| Best 10-day performance rank | 13 (bear market, up breakout) |

Excellent overall rank (8). Best performance comes after an upward breakout — i.e. when the
candle acts as a reversal, not a continuation.

## Trading Tactics

- Best performance when the candle appears within a third of the yearly low.
- Within a third of the yearly low it acts as a continuation most often.
- Best traded as part of a downward retracement in an upward price trend (trade with trend).

## Pine Notes

- Feasibility: **easy**. Two-bar comparison; the key test is matching closes (not lows).
- Close-match tolerance is the critical tunable (default 0.1% of price); too tight and it
  never triggers, too loose and it over-triggers.
- Suggested inputs: downtrend lookback, tall-body multiplier, close-match tolerance,
  breakout toggle.
- Signal on close of the second candle; recommend awaiting breakout direction.
