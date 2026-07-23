---
id: below-the-stomach
name: Below the Stomach
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 59, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0481
  throwback_rate: null
  pct_meeting_target: 0.60
  reversal_rate: 0.60
  frequency_rank: 38
source: https://thepatternsite.com/BelowStomach.html
accessed: 2026-07-16
---

# Below the Stomach

## Overview

The inverted cousin of Above the Stomach: a two-candle bearish reversal in an uptrend — a
tall white candle followed by a candle whose body sits below the midpoint of the white
body. It reverses 60% of the time and ranks 59 of 103 overall (mid-list), though it appears
fairly often (frequency rank 38).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Upward leading into the pattern |
| First candle | Tall white candle |
| Second candle | Body below the middle of the white candle (usually black, but color not a stated requirement) |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[2] < close[1]` and broader rise [D] `close[1] > close[6]`.
- **R2 [B]** First candle white: `close[1] > open[1]`.
- **R3 [D]** First candle tall: `(close[1] - open[1]) > ta.sma(abs(close - open), 20)` (taller than average body).
- **R4 [B]** Second body below midpoint of white body: `open <= mid1 and close <= mid1` where `mid1 = (open[1] + close[1]) / 2`.

## Confirmation & Breakout

Up breakout = close above the top of the two-candle pattern; down breakout = close below
its lowest low. Best treated as an upward retracement in a downward price trend, so a
downward breakout rejoins the primary trend.

## Targets & Stops

- Pattern height: `height = max(high, high[1]) - min(low, low[1])`.
- Target = breakout price ± height [D]. Price met target 60% (bull market, up breakout).
- Stop [D]: above `max(high, high[1])` for shorts.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bearish reversal 60% of the time |
| Frequency rank | 38 |
| Overall performance rank | 59 of 103 (1 = best) |
| Best % meeting price target | 60% (bull market, up breakout) |
| Best average move in 10 days | +4.81% (bear market, up breakout) |
| Best 10-day performance rank | 32 (bear market, up breakout) |

Weaker than its sister Above the Stomach; the trend after breakout does not last long.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Channels can help predict turning points.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC comparison against the prior body midpoint; no pivots.
- The second candle's color is not required — test the body position, not black/white.
- Signal fires on the close of the second candle; wait for the breakout close for direction.
- Suggested inputs: trend lookback, tall-candle threshold (R3), midpoint-test strictness.
