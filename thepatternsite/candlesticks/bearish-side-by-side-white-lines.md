---
id: bearish-side-by-side-white-lines
name: Bearish side by side white lines
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 29, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0786
  throwback_rate: null
  pct_meeting_target: 0.71
  reversal_rate: null
  frequency_rank: 86
source: https://thepatternsite.com/SidebySideWhiteLinesBear.html
accessed: 2026-07-16
---

# Bearish side by side white lines

## Overview

A three-candle bearish continuation pattern in a downtrend: a black candle followed by two
white candles of similar body size with similar opening prices, both closing below the body
of the black candle. Acts as a continuation only 56% of the time ("near random") but has a
strong post-breakout performance rank (29) — though it is rare (frequency rank 86) and the
sample is small.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Black (close < open) |
| Second & third candles | White, bodies about the same size, similar opening prices |
| Closes | Both white closes remain below the body of the black candle |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[2] < close[7]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[2] < open[2]`.
- **R3 [B]** Second and third candles white: `close[1] > open[1] and close > open`.
- **R4 [B]** Two white bodies similar size: `abs((close[1]-open[1]) - (close-open)) <= 0.3 * max(close[1]-open[1], close-open)` (default 30% tolerance [D]).
- **R5 [B]** Similar opening prices: `abs(open[1] - open) <= 0.3 * (close[1]-open[1])` (default 30% of body [D]).
- **R6 [B]** Both white closes below the black body: `close[1] < min(open[2], close[2]) and close < min(open[2], close[2])`.

## Confirmation & Breakout

Downward breakout = close below the bottom of the three-candle pattern (continuation of the
downtrend). Bulkowski notes it breaks out downward slightly more often than upward.

## Targets & Stops

- Candle-height measure rule: `height = pattern_high - pattern_low`; down target = breakout
  price − height. Best % meeting target 71% (bear market, down breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bearish continuation 56% of the time |
| Overall rank | 29 of 103 (1 = best) |
| Frequency rank | 86 (rare) |
| Best % meeting target | 71% (bear market, down breakout) |
| Best avg move 10 days | 7.86% (bear market, up breakout) — ranks 7 |

Strong post-breakout trend (rank 29, best move 7.86% beats the 6% "good" benchmark) but
hard to find; small sample limits confidence.

## Trading Tactics

- Candles with tall upper shadows perform best.
- Select tall candles for best performance.
- Patterns within a third of the yearly low act as continuations most often.

## Pine Notes

- Feasibility: **easy**. Three-bar OHLC geometry; no pivots.
- Signal fires on the confirmed third candle close.
- Suggested inputs: trend-lookback (R1), body-similarity tolerance (R4), open-similarity
  tolerance (R5). The "similar size/open" tolerances are our quantifications of Bulkowski's
  "about the same" — expose as adjustable defaults.
