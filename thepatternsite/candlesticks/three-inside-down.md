---
id: three-inside-down
name: Three inside down
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 56, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.58
  reversal_rate: 0.60
  frequency_rank: 33
source: https://thepatternsite.com/ThreeInsideDown.html
accessed: 2026-07-16
---

# Three inside down

## Overview

A three-candle bearish reversal in an uptrend — essentially a bearish harami with a
confirming third candle: a tall white candle, then a small black candle inside its body,
then a lower close (any color). Acts as a reversal 60% of the time with mid-list
performance (rank 56).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| First candle | Tall white (close > open) |
| Second candle | Small black; open and close within the first day's body (a harami) — tops or bottoms of the two bodies may match, but not both |
| Third candle | Closes lower than the second; any color |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[2] > close[7]` (5-bar uptrend default [D]).
- **R2 [B]** First candle tall white: `close[2] > open[2]` and `(close[2]-open[2]) >= ta.sma(range, 20)` (tall default [D]).
- **R3 [B]** Second candle black: `close[1] < open[1]`.
- **R4 [B]** Second body inside first body: `open[1] <= close[2] and close[1] >= open[2]`.
- **R5 [D]** Not both edges equal (a true harami, not identical bodies): `not (max(open[1],close[1]) == close[2] and min(open[1],close[1]) == open[2])`.
- **R6 [B]** Third candle closes lower (confirmation): `close < close[1]`.

Where `range = high - low`.

## Confirmation & Breakout

The third candle **is** the confirmation: a lower close confirms the bearish reversal.
Downward breakout = close below the bottom of the pattern (rejoins/starts the downtrend).

## Targets & Stops

- Candle-height measure rule: `height = pattern_high - pattern_low`; down target =
  breakout price − height. Best % meeting target 58% (bull market, up breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bearish reversal 60% of the time |
| Overall rank | 56 of 103 (1 = best) |
| Frequency rank | 33 |
| Best % meeting target | 58% (bull market, up breakout) |
| Best avg move 10 days | 4.93% (bear market, up breakout) — ranks 30 |
| Best 10-day performance rank | 30 (bear market, down breakout) |

A 60% reversal rate is only modestly above random; post-breakout trend is unremarkable.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Select tall candles for best performance.
- Best used as an upward retracement in a downward price trend (top of the retrace signals the end of the uptrend).

## Pine Notes

- Feasibility: **easy**. Three-bar harami-plus-confirmation geometry; no pivots.
- Signal fires on the confirmed third candle close (confirmation is built in — hence
  `confirmation: required`).
- Suggested inputs: trend-lookback (R1), tall-first-body threshold (R2). This is the
  bearish counterpart of three inside up; reuse the same harami-detection logic with
  colors flipped.
