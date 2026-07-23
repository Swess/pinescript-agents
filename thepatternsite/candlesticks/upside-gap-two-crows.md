---
id: upside-gap-two-crows
name: Upside gap two crows
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 74, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: -0.055
  throwback_rate: null
  pct_meeting_target: 0.45
  reversal_rate: null
  frequency_rank: 75
source: https://thepatternsite.com/UpGapTwoCrows.html
accessed: 2026-07-16
---

# Upside gap two crows

## Overview

A three-candle pattern in an uptrend: a tall white candle, a black candle whose body gaps
above it, then a second black candle that engulfs the middle body while closing above the
first candle's close. Theorized as a bearish reversal but testing shows a weak bullish
continuation 60% of the time. Poor overall performance (rank 74 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| First candle | Tall white candle |
| Second candle | Black, its body gaps above the prior (white) candle's body |
| Third candle | Black, engulfs the second day's body, closing above the first candle's close |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** First candle white and tall: `close[2] > open[2]` and body `(close[2]-open[2]) > ta.sma(abs(close-open), 20)` (tall default [D]).
- **R3 [B]** Second candle black: `close[1] < open[1]`.
- **R4 [B]** Second body gaps above the first body: `close[1] > close[2]` (bottom of the black body above the white body top) [D interpretation of "gaps above the prior body"].
- **R5 [B]** Third candle black: `close < open`.
- **R6 [B]** Third body engulfs the second body: `open > open[1] and close < close[1]`.
- **R7 [B]** Third closes above the first candle's close: `close > close[2]`.

## Confirmation & Breakout

Breakout is downward (the theorized reversal) when price closes below the pattern's lowest
low: `close < min(low[2], low[1], low)`; upward breakout (`close > max(high[2],high[1],high)`)
delivers the tested bullish continuation. Best setups have the breakout joining the primary
trend.

## Targets & Stops

- Candle-height target: `height = max(high[2],high[1],high) - min(low[2],low[1],low)`;
  project from the breakout price. ~45% meet target (bear market, down breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Bearish reversal |
| Tested | Bullish continuation 60% |
| Overall performance rank | 74 of 103 (1 = best) |
| Frequency rank | 75 |
| Best % meeting target | 45% (bear market, down breakout) |
| Best 10-day move | -5.50% (bear market, down breakout) |
| Best 10-day performance rank | 22 (bull market, down breakout) |

Poor performer; best setups have the breakout joining the primary trend.

## Trading Tactics

- Tends to act as a continuation most often when appearing within a third of the yearly high.
- Select tall candles for the best performance.
- Prefer setups whose breakout joins the primary trend.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons across three bars.
- Signal fires on the close of the third candle.
- Theory (reversal) vs tested (continuation) conflict — recommend breakout confirmation.
- "Gaps above the prior body" (R4) is interpreted as body-to-body; expose a strict-gap
  toggle. Suggested inputs: trend-lookback, tall-candle body multiplier.
