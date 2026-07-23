---
id: bearish-engulfing
name: Bearish Engulfing
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 91, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0592
  throwback_rate: null
  pct_meeting_target: 0.76
  reversal_rate: 0.79
  frequency_rank: 11
source: https://thepatternsite.com/BearEngulfing.html
accessed: 2026-07-16
---

# Bearish Engulfing

## Overview

A popular two-candle bearish reversal in an uptrend: a white candle followed by a taller
black candle whose body engulfs the prior white body. It reverses 79% of the time (rank 5
for reversals) and is common (frequency rank 11), but the post-breakout trend is short-
lived (overall rank 91).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Upward leading into the pattern |
| First candle | White (`close > open`) |
| Second candle | Black; body taller than and overlapping the white body — open above prior close, close below prior open |
| Shadows | Unimportant — only bodies matter |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** First candle white: `close[1] > open[1]`.
- **R3 [B]** Second candle black: `close < open`.
- **R4 [B]** Black body engulfs prior body: `open > close[1] and close < open[1]`.
- **R5 [B]** Second body taller: `(open - close) > (close[1] - open[1])`.

## Confirmation & Breakout

Down breakout = close below the bottom of the two-candle pattern (`close < min(low, low[1])`);
up breakout = close above the top. It serves as a bearish reversal on a downward breakout.

## Targets & Stops

- Candle height: `height = max(high, high[1]) - min(low, low[1])`.
- Down target = down-breakout price − height (met ~76% in the best configuration).
- Stop [D]: above `max(high, high[1])` for shorts.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bearish reversal 79% of the time |
| Frequency rank | 11 (very common) |
| Overall performance rank | 91 of 103 (1 = best) |
| Best % meeting price target | 76% (bear market, down breakout) |
| Best average move in 10 days | −5.92% (bear market, down breakout) |
| Best 10-day performance rank | 21 (bear market, down breakout) |

Performs best after a **downward** breakout and poorly after an upward one (upward-breakout
ranks are 103 bull / 100 bear). Frequent reversal, but not a lasting one.

## Trading Tactics

- Use when price is within a third of the yearly low.
- Select tall candles.
- Trade upward retracements in a downward price trend.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on two bars; no pivots, no repainting.
- Signal fires on the close of the second candle; wait for the breakout close for direction.
- Suggested inputs: trend lookback (R1), require-taller-body toggle (R5), optional
  "within one-third of yearly low" filter.
- Note: many library engulfing snippets include shadows — this spec is bodies-only per Bulkowski.
