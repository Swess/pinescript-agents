---
id: southern-doji
name: Southern doji
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 78, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0351
  throwback_rate: null
  pct_meeting_target: 0.90
  reversal_rate: 0.52
  frequency_rank: 8
source: https://thepatternsite.com/SouthernDoji.html
accessed: 2026-07-16
---

# Southern doji

## Overview

A single doji (open and close within a few pennies) appearing in a downtrend, theorized as
a bullish reversal. Bulkowski found it reverses only 52% of the time ("near random"). Very
common (frequency rank 8) but poor post-breakout performance (rank 78) — not worth hunting
for.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | Downward leading into the pattern |
| Body | Doji — opening and closing prices a few pennies apart |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the candle: `close < close[5]` (5-bar downtrend default [D]).
- **R2 [B]** Doji body: `body <= 0.1 * range` (open ≈ close; default 10% of range [D]).

Where `body = abs(close - open)` and `range = high - low`. Bulkowski does not restrict the
shadows of a southern doji (distinguishing it from gravestone/dragonfly variants).

## Confirmation & Breakout

Upward breakout = close above the top of the doji (confirms the bullish reversal); downward
= close below the bottom. Bulkowski waits for the upward breakout given the near-random rate.

## Targets & Stops

- Candle-height measure rule: `height = high - low`; up target = doji top + height.
  Met 90% of the time (bull market, up breakout).
- Stop: below the doji low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bullish reversal 52% of the time |
| Overall rank | 78 of 103 (1 = best) |
| Frequency rank | 8 (very common) |
| Best % meeting target | 90% (bull market, up breakout) |
| Best avg move 10 days | 3.51% (bear market, up breakout) — ranks 50 |

Common but weak: best rise of 3.51% is well below the 6% "good" benchmark.

## Trading Tactics

- Southern doji within a third of the yearly low perform best.
- Doji with shadows taller than the median outperform.
- Southern doji within a third of the yearly high tend to act as reversals.

## Pine Notes

- Feasibility: **easy**. Single-bar doji test plus a downtrend filter; no pivots.
- Signal fires on the confirmed candle close.
- Suggested inputs: trend-lookback (R1), doji body-fraction threshold (R2). "A few pennies"
  is absolute on the site; use a relative fraction of range so it scales across symbols
  (relevant for NQ/ES vs equities).
