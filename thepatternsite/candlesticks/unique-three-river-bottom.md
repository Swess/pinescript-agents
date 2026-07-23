---
id: unique-three-river-bottom
name: Unique three river bottom
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 60, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: -0.056
  throwback_rate: null
  pct_meeting_target: 0.52
  reversal_rate: null
  frequency_rank: 89
source: https://thepatternsite.com/Unique3RiverBottom.html
accessed: 2026-07-16
---

# Unique three river bottom

## Overview

A three-candle pattern in a downtrend theorized as a bullish reversal but which testing
shows acts as a bearish continuation 60% of the time. A tall black candle, then a second
black candle whose body is inside the first but with a lower low, then a short white candle
that stays below the second body. Rare (frequency rank 89) with mediocre performance.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Tall-bodied black candle |
| Second candle | Black body inside the first candle's body, but its (lower shadow) low is below the prior day's low |
| Third candle | Short-bodied white candle that stays below the body of the second candle |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[3] < close[8]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black and tall: `close[2] < open[2]` and body `(open[2]-close[2]) > ta.sma(abs(close-open), 20)` (tall default [D]).
- **R3 [B]** Second candle black: `close[1] < open[1]`.
- **R4 [B]** Second body inside the first body: `open[1] < open[2] and close[1] > close[2]`.
- **R5 [B]** Second candle has a lower low: `low[1] < low[2]`.
- **R6 [B]** Third candle white and short-bodied: `close > open` and `(close-open) < (open[2]-close[2])`.
- **R7 [B]** Third body stays below the second body: `close < close[1]` (remains below the prior candle's body) [D interpretation].

## Confirmation & Breakout

Breakout is downward when price closes below the pattern's lowest low:
`close < min(low[2], low[1], low)`, confirming the bearish continuation. Upward breakout
(`close > max(high[2], high[1], high)`) would deliver the theorized bullish reversal.

## Targets & Stops

- Candle-height target: `height = max(high[2],high[1],high) - min(low[2],low[1],low)`;
  project from the breakout price. ~52% meet target (bull market, up breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Bullish reversal |
| Tested | Bearish continuation 60% |
| Overall performance rank | 60 of 103 (1 = best) |
| Frequency rank | 89 (rare) |
| Best % meeting target | 52% (bull market, up breakout) |
| Best 10-day move | -5.60% (bear market, down breakout) |
| Best 10-day performance rank | 25 (bear market, down breakout) |

Does best in a bear market regardless of breakout direction, but the sample is very small
(13 or fewer; only 80 found in 4.7M candle lines).

## Trading Tactics

- Best (as a continuation) when the pattern appears within a third of the yearly low.
- Select tall candles for the best performance.
- Trade a downward breakout in a downward primary trend.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons across three bars.
- Signal fires on the close of the third candle.
- Theory vs tested behavior conflict — recommend breakout confirmation before trading.
- "Tall"/"short body" (R2, R6) quantified via average-body comparison; expose multipliers.
- Very rare pattern; expect few signals. Suggested inputs: trend-lookback, body multipliers.
