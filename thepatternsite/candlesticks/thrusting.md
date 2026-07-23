---
id: thrusting
name: Thrusting
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 15, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.65
  reversal_rate: 0.57
  frequency_rank: 56
source: https://thepatternsite.com/Thrusting.html
accessed: 2026-07-16
---

# Thrusting

## Overview

A two-candle pattern in a downtrend: a black candle followed by a white candle that opens
below the prior low but closes near — yet below — the midpoint of the black candle's body.
Theory calls it a bearish continuation, but Bulkowski's tests show it acts as a bullish
reversal 57% of the time (near random). Overall performance ranks a high 15th.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Black candle (close < open) in a downtrend |
| Second candle | White candle that opens below the prior low and closes near but below the midpoint of the black candle's body |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [B]** Second candle white: `close > open`.
- **R4 [B]** Second candle opens below the prior low: `open < low[1]`.
- **R5 [B]** Second candle closes near but below the black body's midpoint: `close < (open[1] + close[1]) / 2` and `close >= close[1]` (in the lower half of the body, above the black close [D]).
- **R6 [D]** Candles tall (best performance): `(open[1] - close[1]) > ta.sma(high - low, 20)`.

## Confirmation & Breakout

Upward breakout (reversal) = close above the top of the pattern: `close > max(high, high[1])`.
Downward breakout = close below the bottom: `close < min(low, low[1])`.

## Targets & Stops

- Height target: `height = max(high, high[1]) - min(low, low[1])`; up target = breakout
  price + height. Price meets target ~65% of the time (best case, bull market, up breakout).
- Stop: below the pattern low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 57% bullish (near random) |
| Overall performance rank | 15 of 103 (1 = best) |
| Frequency rank | 56 |
| Best % meeting target | 65% (bull market, up breakout) |
| Best average move in 10 days | −5.92% (bear market, down breakout) |
| Best 10-day performance rank | 20 (bear market, down breakout) |

The 57% reversal rate means breakout direction is essentially a coin flip — do not
anticipate it. Similar to the meeting-lines and piercing patterns (piercing has more
overlap).

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Select tall candles for best performance.
- Avoid trading the thrusting candle as part of a reversal of the primary downtrend.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on two bars; no pivots, no repainting.
- Signal fires on close of the second candle.
- Suggested inputs: trend-lookback (R1), midpoint-zone bounds (R5), tall-candle multiplier
  (R6).
- R5's "near but below the midpoint" is fuzzy — default to the lower half of the black
  body, above the black close; expose as inputs. Contrast with piercing (closes above the
  midpoint) and meeting lines.
