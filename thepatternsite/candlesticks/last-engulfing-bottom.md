---
id: last-engulfing-bottom
name: Last engulfing bottom
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 48, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.70
  reversal_rate: null
  frequency_rank: 13
source: https://thepatternsite.com/LastEngulfBottom.html
accessed: 2026-07-16
---

# Last engulfing bottom

## Overview

A two-candle pattern in a downtrend: a white candle followed by a black candle whose body
engulfs (is above the top and below the bottom of) the white body — an outside day ignoring
shadows. Theory calls it a bullish reversal, but tests show it acts as a bearish
continuation 65% of the time, because price ends near the bottom of the pattern.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward |
| First candle | White (close > open) |
| Second candle | Black candle whose body is above the top and below the bottom of the white body (engulfs it) |
| Shadows | Ignored — only bodies matter |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle white: `close[1] > open[1]`.
- **R3 [B]** Second candle black: `close < open`.
- **R4 [B]** Black body engulfs white body: `open > close[1] and close < open[1]`.
- **R5 [D]** Second body taller: `(open - close) > (close[1] - open[1])` (implied by "engulfs").

## Confirmation & Breakout

Breakout = close beyond the two-bar extreme. Downward (continuation, most common) =
`close < min(low, low[1])`; upward (reversal) = `close > max(high, high[1])`. Bulkowski
notes the prior price trend helps predict breakout direction.

## Targets & Stops

- Height target: `height = max(high,high[1]) - min(low,low[1])`; down target = downward
  breakout price − height (met ~70% best configuration) [B].
- Stop: for a reversal long, below `min(low, low[1])` [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 65% of the time |
| Overall performance rank | 48 of 103 (1 = best) |
| Frequency rank | 13 (common) |
| Best % meeting target | 70% (bull market, up breakout) |
| Best avg 10-day move | +4.85% (bear market, up breakout) |
| Best 10-day performance rank | 31 (bear market, up breakout) |

Weakest after a downward breakout in a bull market (−0.91% over 10 days). Continuations
dominate across all thirds of the yearly price range (58%–72%). Post-breakout trend is
mediocre.

## Trading Tactics

- Best performance when the candle appears within a third of the yearly low.
- Trade as part of a downward retracement of an upward price trend.
- Use the price trend leading into the pattern to help predict breakout direction.

## Pine Notes

- Feasibility: **easy**. Two-bar body comparison; bodies only, no pivots.
- Note the theory/reality inversion: labelled a "bottom"/bullish, but it usually continues
  downward — do not assume a long on formation.
- Suggested inputs: trend-lookback (R1), require-taller-body toggle (R5), yearly-low filter
  (`close < ta.lowest(low, 252) * 4/3`).
- Signal on close of the black candle; recommend awaiting breakout direction.
