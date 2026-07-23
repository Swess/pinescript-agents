---
id: last-engulfing-top
name: Last engulfing top
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 79, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.67
  reversal_rate: null
  frequency_rank: 14
source: https://thepatternsite.com/LastEngulfTop.html
accessed: 2026-07-16
---

# Last engulfing top

## Overview

A two-candle pattern in an uptrend: a black candle followed by a taller white candle whose
body is above the top and below the bottom of the black body (engulfs it) — an outside day
ignoring shadows. Theory calls it a bearish reversal, but tests show it acts as a bullish
continuation 68% of the time because price ends near the top of the pattern.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Upward |
| First candle | Black (close < open) |
| Second candle | White candle whose body is above the top and below the bottom of the black body (engulfs it) |
| Shadows | Ignored — only bodies matter |

## Detection Rules (computable)

- **R1 [B]** Uptrend into pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [B]** Second candle white: `close > open`.
- **R4 [B]** White body engulfs black body: `open < close[1] and close > open[1]`.
- **R5 [D]** Second body taller: `(close - open) > (open[1] - close[1])` (implied by "towers over").

## Confirmation & Breakout

Breakout = close beyond the two-bar extreme. Upward (continuation, most common) =
`close > max(high, high[1])`; downward (reversal) = `close < min(low, low[1])`. Breaks out
upward most often, but the best performance comes from downward (reversal) breakouts.

## Targets & Stops

- Height target: `height = max(high,high[1]) - min(low,low[1])`; up target = upward breakout
  price + height (met ~67% best configuration) [B].
- Stop: for a reversal short, above `max(high, high[1])` [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish continuation 68% of the time |
| Overall performance rank | 79 of 103 (1 = best) |
| Frequency rank | 14 (common) |
| Best % meeting target | 67% (bull market, up breakout) |
| Best avg 10-day move | −4.42% (bear market, down breakout) |
| Best 10-day performance rank | 38 (bull market, down breakout) |

Post-breakout trend is brief (overall rank 79). Best performance comes from downward
breakouts, i.e. reversals outperform continuations here.

## Trading Tactics

- Best performance when the candle appears within a third of the yearly low.
- Best traded in an upward retracement of a downward price trend.
- Breaks out upward most often.

## Pine Notes

- Feasibility: **easy**. Two-bar body comparison; bodies only, no pivots.
- Note the theory/reality inversion: labelled a bearish "top", but it usually continues up.
- Suggested inputs: trend-lookback (R1), require-taller-body toggle (R5), yearly-low filter.
- Signal on close of the white candle; recommend awaiting breakout direction.
