---
id: deliberation
name: Deliberation
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 93, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.36
  reversal_rate: null
  frequency_rank: 48
source: https://thepatternsite.com/Deliberation.html
accessed: 2026-07-16
---

# Deliberation

## Overview

A three-candle pattern in an uptrend: two tall white candles followed by a small-bodied
white candle that opens near the second day's close, with each candle opening and closing
higher. Theory calls it a bearish reversal, but Bulkowski's tests show it acts as a
*bullish continuation* 77% of the time — the last candle leaves price near the top, so
upward breakouts are far more likely. Overall performance is poor (93 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend leading to pattern | Upward |
| Candles 1–2 | Two tall white bodies |
| Candle 3 | Small white body, opens near candle 2's close |
| Progression | Each candle opens and closes higher than the previous one |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (prior-trend default [D]).
- **R2 [B]** Candles 1–2 tall white: `close[2] > open[2] and close[1] > open[1]` and both bodies `> ta.sma(high-low,20)` (tall default [D]).
- **R3 [B]** Candle 3 small white body: `close > open` and `(close - open) < 0.5 * (close[1] - open[1])` (small-body default [D]).
- **R4 [B]** Candle 3 opens near candle 2's close: `abs(open - close[1]) <= 0.1 * (close[1] - open[1])` (near-open default [D]).
- **R5 [B]** Rising opens and closes: `open > open[1] and open[1] > open[2] and close > close[1] and close[1] > close[2]`.

## Confirmation & Breakout

Breakout direction defines behavior: upward breakout (continuation) = `close > ` highest
high of the three candles; downward breakout (reversal) = `close < ` lowest low. Because
the last candle leaves price near the top, upward breakouts dominate (77% continuation).

## Targets & Stops

- Pattern-height target: `height = highest(high,3) - lowest(low,3)`; project from the
  breakout price in the breakout direction. Best percentage meeting target only 36%
  (bull market, up breakout).
- Stop: below the lowest low of the three candles for longs [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 77% bullish (theory says bearish reversal) |
| Frequency rank | 48 |
| Overall performance rank | 93 of 103 (1 = best) |
| Best % meeting target | 36% (bull market, up breakout) |
| Best 10-day move | −6.72% (bear market, down breakout) |
| Best 10-day performance rank | 6 (bull market, down breakout) |

The low % meeting target (36%) and poor overall rank reflect short post-breakout trends,
yet the best 10-day *rank* (6, bull-market down breakout) is strong when a reversal does
occur.

## Trading Tactics

- Prefer deliberation candles within a third of the yearly low for best performance.
- Select tall candles.
- Deliberations within a third of the yearly high act as continuations most often.

## Pine Notes

- Feasibility: **easy-moderate**. Three-bar OHLC comparisons; "small body", "tall", and
  "opens near prior close" are quantified with defaults — no pivots or repainting.
- Signal fires on candle 3's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: prior-trend lookback (R1), tall-body multiplier (R2), small-body ratio
  (R3), near-open tolerance (R4). The theory-vs-tested contradiction is worth surfacing in
  UI text.
