---
id: falling-3-methods
name: Falling 3 methods
aliases: [Falling three methods]
category: candlestick
type: continuation
direction: bearish
bars: {min: 5, typical: 5}
confirmation: recommended
rank: {value: 89, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0458
  throwback_rate: null
  pct_meeting_target: 0.40
  reversal_rate: 0.29
  frequency_rank: 91
source: https://thepatternsite.com/Falling3Methods.html
accessed: 2026-07-16
---

# Falling 3 methods

## Overview

A five-candle bearish continuation resembling a miniature measured-move-down: a tall black
candle, three small up-trending candles that stay within the first candle's high-low
range, then a tall black candle closing below the first candle's close. Behaves as theory
predicts (bearish continuation 71%) but is extremely rare (frequency rank 91).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Five |
| Price trend | Downward |
| Candle 1 | Tall black candle |
| Candles 2-4 | Three small candles trending upward (middle one may be black or white); stay within candle 1's high-low range |
| Candle 5 | Tall black candle closing below candle 1's close |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[5] < close[10]` (5-bar downtrend default [D]).
- **R2 [B]** First candle tall black: `close[4] < open[4]` and `(open[4] - close[4]) > ta.sma(high - low, 20)[4]`.
- **R3 [B]** Middle three small and up-trending: `close[3] < close[1]` (rising) with small bodies vs candle 1 [D].
- **R4 [B]** Middle three stay within candle 1 range: `highest(high, 3)[1] <= high[4] and lowest(low, 3)[1] >= low[4]`.
- **R5 [B]** Last candle tall black: `close < open` and tall body [D].
- **R6 [B]** Last closes below candle 1's close: `close < close[4]`.

## Confirmation & Breakout

Downward breakout = `close < ` five-candle low; upward = `close > ` five-candle high.
Continues the downtrend (bearish) 71% of the time.

## Targets & Stops

- Candle-height target: `height = highest(high, 5) - lowest(low, 5)`; project from the
  breakout in the breakout direction. Best % meeting target 40% (bull market, down breakout).
- Stop: above the five-candle high [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 71% of the time (reversal rank 7) |
| Overall performance rank | 89 of 103 (1 = best) |
| Frequency rank | 91 (very rare) |
| Best % meeting target | 40% (bull market, down breakout) |
| Best avg 10-day move | 4.58% (bull market, up breakout, rank 20) |
| Best 10-day performance rank | 20 (bull market, up breakout) |

Only 64 samples appeared in 4.7M candle lines studied — statistics are thin and the low
overall rank is likely driven by the small sample.

## Trading Tactics

- Not stated by Bulkowski (page has no Three Trading Tidbits section for this pattern).

## Pine Notes

- Feasibility: **moderate**. Five-bar window with body-size and containment checks; the
  "three small up-trending candles inside candle 1's range" is the fuzzy part.
- The strict containment (R4) rarely holds because middle-candle shadows often poke
  outside candle 1's range — consider a body-only containment variant as an input toggle.
- Suggested inputs: trend-lookback, tall-body multiplier, small-body ratio, containment
  mode (bodies vs full range).
