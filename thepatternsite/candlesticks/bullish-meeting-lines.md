---
id: bullish-meeting-lines
name: Bullish meeting lines
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 18, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.66
  reversal_rate: 0.56
  frequency_rank: 72
source: https://thepatternsite.com/MeetingLinesBull.html
accessed: 2026-07-16
---

# Bullish meeting lines

## Overview

A two-candle pattern in a downtrend: a tall black candle followed by a tall white candle
whose close is near the black candle's close (the closes "meet"). Acts as a bullish reversal
56% of the time (near random), matching theory. Once an upward breakout occurs price trends
well — overall performance rank 18.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward |
| First candle | Tall black candle |
| Second candle | Tall white candle |
| Closes | The two closes should be near one another |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle tall black: `close[1] < open[1]` and `(open[1]-close[1]) >= 1.3*avgBody` (tallness default [D]).
- **R3 [B]** Second candle tall white: `close > open` and `(close-open) >= 1.3*avgBody` [D].
- **R4 [B]** Closes meet: `abs(close - close[1]) <= 0.3% * close[1]` ("near"; 0.3% tolerance default [D]).

## Confirmation & Breakout

Breakout direction is near random, so a breakout is essential. Upward (bullish) =
`close > max(high, high[1])`; downward = `close < min(low, low[1])`.

## Targets & Stops

- Height target: `height = max(high,high[1]) - min(low,low[1])`; up target = upward breakout
  price + height (met ~66% best configuration) [B]. Bulkowski advises modest targeting.
- Stop: below `min(low, low[1])` for reversal longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish reversal 56% (near random) |
| Overall performance rank | 18 of 103 (1 = best) |
| Frequency rank | 72 (somewhat rare) |
| Best % meeting target | 66% (bull market, up breakout) |
| Best avg 10-day move | +5.08% (bear market, up breakout) |
| Best 10-day performance rank | 27 (bull market, up breakout) |

Best move (+5.08%) is a bit short of the 6% "good" threshold; be modest with targets since
only 66% reach the projected height.

## Trading Tactics

- Best performance when the candle appears within a third of the yearly low.
- Reversals occur most often within a third of the yearly high in a bull market.
- Trade in the direction of the breakout when it agrees with the primary trend.

## Pine Notes

- Feasibility: **easy**. Two-bar tall-body comparison plus a close-match test.
- Note: earlier versions of the source page had a Configuration typo (uptrend vs downtrend);
  the pattern forms in a **downtrend** — corrected 2/12/25 per Bulkowski.
- Close-match tolerance (default 0.3%) captures "near one another" (subjective).
- Suggested inputs: downtrend lookback, tall-body multiplier, close-match tolerance,
  breakout confirmation (required given near-random direction).
