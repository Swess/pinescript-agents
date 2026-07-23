---
id: upside-gap-three-methods
name: Upside gap three methods
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 27, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0492
  throwback_rate: null
  pct_meeting_target: 0.39
  reversal_rate: 0.59
  frequency_rank: 85
source: https://thepatternsite.com/UpGap3Methods.html
accessed: 2026-07-16
---

# Upside gap three methods

## Overview

A three-candle pattern in an uptrend: two tall white candles with a gap between them
(shadows included), followed by a black candle that fills the gap. Theorized as a bullish
continuation but testing shows it acts as a bearish reversal 59% of the time (near random).
Rare (frequency rank 85) yet a strong overall performance rank (27).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| First two candles | Two tall white candles with a gap between them, including between the shadows |
| Third candle | Black candle that fills the gap created by the first two days |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** First candle white and tall: `close[2] > open[2]` and body `(close[2]-open[2]) > ta.sma(abs(close-open), 20)` (tall default [D]).
- **R3 [B]** Second candle white and tall: `close[1] > open[1]` and body `(close[1]-open[1]) > ta.sma(abs(close-open), 20)` (tall default [D]).
- **R4 [B]** Gap between the two candles including shadows: `low[1] > high[2]`.
- **R5 [B]** Third candle black: `close < open`.
- **R6 [B]** Third candle fills the gap: `open > low[1] and low < high[2]` (opens above the lower shadow of day 2 and has a low below the upper shadow of day 1).

## Confirmation & Breakout

Breakout is downward (the tested reversal) when price closes below the pattern's lowest
low: `close < min(low[2], low[1], low)`. Bulkowski advises expecting a downward breakout,
though the reversal rate is near random.

## Targets & Stops

- Candle-height target: `height = max(high[2],high[1],high) - min(low[2],low[1],low)`;
  project from the breakout price. ~39% meet target (bull market, up breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Bullish continuation |
| Tested | Bearish reversal 59% (near random) |
| Overall performance rank | 27 of 103 (1 = best) |
| Frequency rank | 85 (rare) |
| Best % meeting target | 39% (bull market, up breakout) |
| Best 10-day move | +4.92% (bull market, up breakout) |
| Best 10-day performance rank | 12 (bull market, up breakout) |

Small sample; take numbers with skepticism.

## Trading Tactics

- Acts as a reversal most often when appearing within a third of the yearly low.
- Select tall candles for the best performance.
- Expect a downward breakout.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons across three bars including a shadow gap check.
- Signal fires on the close of the third candle.
- Theory (continuation) vs tested (reversal) conflict and near-random breakout — recommend
  breakout confirmation before trading.
- Suggested inputs: trend-lookback, tall-candle body multiplier, gap-inclusive-of-shadows toggle.
