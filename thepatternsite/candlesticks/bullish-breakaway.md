---
id: bullish-breakaway
name: Bullish breakaway
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 5, typical: 5}
confirmation: required
rank: {value: 45, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.75
  reversal_rate: 0.59
  frequency_rank: 97
source: https://thepatternsite.com/BullBreakaway.html
accessed: 2026-07-16
---

# Bullish breakaway

## Overview

A rare five-candle bullish reversal in a downtrend. It opens with two black candles that
gap down (a gap between their bodies), followed by two more lower-closing candles, then a
tall white candle that rallies back to close within the original body gap. Bulkowski's
tests (only 41 samples) show a bullish reversal 59% of the time — near-random — with mid-
list overall performance (45 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Five |
| Price trend leading to pattern | Downward |
| Candle 1 | Tall black candle |
| Candle 2 | Black; opens lower, leaving a gap between the two bodies (shadows may overlap) |
| Candle 3 | Any color; lower close |
| Candle 4 | Black; lower close |
| Candle 5 | Tall white candle that closes within the body gap of candles 1 and 2 |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[5] < close[10]` (prior-trend default [D]).
- **R2 [B]** Candle 1 tall black: `close[4] < open[4]` and `(open[4]-close[4]) > ta.sma(high-low,20)[4]` (tall default [D]).
- **R3 [B]** Candle 2 black, opens lower with body gap below candle 1: `close[3] < open[3] and open[3] < close[4]` (bodies gap: `high[3]` region below `close[4]`; shadow overlap allowed).
- **R4 [B]** Candle 3 lower close: `close[2] < close[3]` (any color).
- **R5 [B]** Candle 4 black, lower close: `close[1] < open[1] and close[1] < close[2]`.
- **R6 [B]** Candle 5 tall white closing inside the body gap of candles 1–2: `close > open and close > close[4] and close < open[4]` (closes between the two gapped bodies; body gap = `close[4]` down to `open[3]`).

## Confirmation & Breakout

Bulkowski defines the reversal by the breakout: upward breakout = `close > ` highest high
of the 5-candle pattern (validates the bullish reversal); downward breakout = `close < `
lowest low of the pattern. Confirmation (close above the pattern top) is required.

## Targets & Stops

- Pattern-height target: `height = highest(high,5) - lowest(low,5)`; up target =
  breakout price + height. Best percentage meeting target 75% (bear market, down breakout).
- Stop: below the lowest low of the five candles for longs [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 59% bullish (near-random) |
| Frequency rank | 97 (rare) |
| Overall performance rank | 45 of 103 (1 = best) |
| Best % meeting target | 75% (bear market, down breakout) |
| Best 10-day move | −5.79% (bear market, down breakout) |
| Best 10-day performance rank | 12 (bear market, up breakout) |
| Sample size | 41 (statistics limited) |

Stringent identification rules make the pattern rare; Bulkowski did not publish full stats
in his book. Best 10-day performance rank (12) is strong but sample-limited.

## Trading Tactics

- Wait for the upward breakout (close above the pattern top) to confirm the reversal.
- Treat statistics cautiously given the tiny sample; the pattern is highly selective.

## Pine Notes

- Feasibility: **moderate**. Five-bar OHLC comparisons; the "body gap" between candles 1
  and 2 and the "closes within the gap" rule need careful body-boundary logic, but no
  pivot detection or repainting.
- Signal fires on candle 5's close; require `close` above the 5-bar highest high for the
  confirmed reversal.
- Suggested inputs: prior-trend lookback (R1), tall-candle multiplier (R2), toggle to
  allow/forbid shadow overlap on the gap. "Tall" and the exact body-gap tolerance are
  defaults — expose them; expect very few matches.
