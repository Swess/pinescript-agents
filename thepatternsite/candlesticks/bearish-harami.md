---
id: bearish-harami
name: Bearish Harami
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 72, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.64
  reversal_rate: 0.47
  frequency_rank: 26
source: https://thepatternsite.com/HaramiBear.html
accessed: 2026-07-16
---

# Bearish Harami

## Overview

A two-line pattern in an uptrend: a tall white candle followed by a small black candle
whose body nestles inside the white body. Theory says bearish reversal, but tests show a
bullish continuation 53% of the time ("near random"). Post-breakout performance is weak,
ranking 72 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Upward leading into the pattern |
| First candle | Tall white candle |
| Second candle | Small black candle; open and close within the first candle's body |
| Shadows | Ignored — bodies only |
| Distinctness | Tops or bottoms of the two bodies (or both) must differ in price |

## Detection Rules (computable)

- **R1 [D]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend into the first line).
- **R2 [B]** First candle white: `close[1] > open[1]`.
- **R3 [D]** First candle tall: `(high[1]-low[1]) > ta.sma(high-low, 20)[1]`.
- **R4 [B]** Second candle black: `close < open`.
- **R5 [B]** Second body inside first body: `open <= close[1] and close >= open[1]`.
- **R6 [B]** Bodies not identical: `open != close[1] or close != open[1]` (a top or bottom must differ).
- **R7 [D]** Second body smaller than first: `abs(close-open) < (close[1]-open[1])`.

## Confirmation & Breakout

Upward breakout = `close > max(high, high[1])`; downward breakout = `close < min(low, low[1])`.
An uptrend into the pattern tends to produce an upward breakout (continuation). Best
reversal setup: a bearish harami at the top of an upward retrace within a downward primary
trend. Wait for the breakout.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`;
  down target = breakout price − height (met ~64% best config: bull market, down breakout).
- Stop: above `max(high, high[1])` for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish continuation 53% (reversal 47%) |
| Overall rank | 72 of 103 (1 = best) |
| Frequency rank | 26 (common) |
| Best % meeting target | 64% (bull market, down breakout) |
| Best avg 10-day move | −4.01% (bear market, down breakout) |
| Best 10-day rank | 50 (bear market, down breakout) |

## Trading Tactics

- If the harami appears near the top of a trend channel, a downward breakout is more likely.
- Select tall (first) candles.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Bodies-only comparisons over two bars; no pivots.
- Signal fires on the second candle's close; confirm on breakout for alerts.
- Suggested inputs: trend-lookback (R1), tall-body multiplier (R3), toggle for the
  "bodies not identical" rule (R6). Shadows are ignored per Bulkowski.
