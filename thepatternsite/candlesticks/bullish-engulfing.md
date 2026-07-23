---
id: bullish-engulfing
name: Bullish Engulfing
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 84, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.67
  reversal_rate: 0.63
  frequency_rank: 12
source: https://thepatternsite.com/BullEngulfing.html
accessed: 2026-07-16
---

# Bullish Engulfing

## Overview

A two-candle pattern in a downtrend: a black (down) candle followed by a taller white (up)
candle whose body engulfs the prior body. Theory says bullish reversal; Bulkowski's stats
show it acts as a reversal 63% of the time but post-breakout performance is mediocre.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Black (close < open) |
| Second candle | White, taller than the first; its body engulfs/overlaps the black body — "a close above the prior open and an open below the prior close" |
| Shadows | Ignored — only bodies matter |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [B]** Second candle white: `close > open`.
- **R4 [B]** Body engulfs prior body: `open < close[1] and close > open[1]`.
- **R5 [D]** Second body taller: `(close - open) > (open[1] - close[1])` (implied by "taller"; strict-inequality default).

## Confirmation & Breakout

The candle pattern itself needs a breakout to define performance: upward breakout =
`close > max(high, high[1])`; downward = `close < min(low, low[1])`. Bulkowski recommends
waiting for the breakout direction rather than assuming the bullish theory.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`;
  up target = breakout price + height (met ~67% in the best configuration).
- Stop: below `min(low, low[1])` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 63% bullish |
| Overall rank | 84 of 103 (1 = best) |
| Frequency rank | 12 (very common) |
| Best 10-day move | −6.31% (bear market, DOWN breakout) |
| % meeting target | 67% (bear market, down breakout) |

Notable paradox: after an **upward** breakout the best average 10-day move is a *drop* of
1.18% — downward breakouts in bear markets perform best. The bullish theory underperforms
the statistics.

## Trading Tactics

- Use when price is within one-third of the yearly low.
- Select tall candles — they outperform short ones.
- Avoid in downward primary trends; best used in an upward primary trend during a
  downward retracement.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on two bars; no pivots, no repainting.
- Signal fires on the close of the second candle (`barstate.isconfirmed` for alerts).
- Suggested inputs: trend-lookback for R1, require-taller-body toggle (R5), optional
  "within one-third of yearly low" filter (`close < ta.lowest(low, 252) * 4/3`).
- Note `ta.` built-ins: Pine's `ta.crossover`-style engulfing snippets often include
  shadows — this spec is bodies-only per Bulkowski.
