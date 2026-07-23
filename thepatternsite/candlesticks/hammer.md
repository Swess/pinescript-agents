---
id: hammer
name: Hammer
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 65, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0412
  throwback_rate: null
  pct_meeting_target: 0.88
  reversal_rate: 0.60
  frequency_rank: 36
source: https://thepatternsite.com/Hammer.html
accessed: 2026-07-16
---

# Hammer

## Overview

A single candle in a downtrend with a long lower shadow (at least two to three times the
body height) and little or no upper shadow. Signals a bullish reversal 60% of the time —
better than random but unexciting post-breakout (rank 65). Appears often (frequency
rank 36) and meets the measure-rule target 88% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | Downward |
| Configuration | Long lower shadow at least 2-3x the body height, with little or no upper shadow |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** Long lower shadow ≥ 2x body: `(min(open, close) - low) >= 2 * abs(close - open)` (Bulkowski: "two or three times"; 2x default).
- **R3 [B]** Little or no upper shadow: `(high - max(open, close)) <= 0.1 * (high - low)` (default 10% of range [D]).
- **R4 [D]** Small real body: `abs(close - open) <= 0.33 * (high - low)` (keeps the body small relative to the shadow).

## Confirmation & Breakout

Breakout measured from a close above the candle top (up) or below the candle bottom (down).
Bulkowski counts an upward close the next day as confirmation. Reverses upward 60% of the
time.

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout in the breakout
  direction. Best % meeting target 88% (bull market, up breakout).
- Stop: below the candle low (`low`) for a long [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish reversal 60% of the time |
| Overall performance rank | 65 of 103 (1 = best) |
| Frequency rank | 36 (common) |
| Best % meeting target | 88% (bull market, up breakout) |
| Best avg 10-day move | −4.12% (bear market, down breakout, rank 48) |
| Best 10-day performance rank | 48 (bear market, down breakout) |

Reversal rate (60%) is not far above random. Post-breakout move is mid-range. A white-bodied
hammer that nests inside the prior candle's body also qualifies as a bullish harami.

## Trading Tactics

- Best within a third of the yearly low.
- Hammers within a third of the yearly high frequently act as reversals.
- Trade white-bodied hammers for the best performance.

## Pine Notes

- Feasibility: **easy**. Single-bar shadow/body ratios plus a downtrend filter; no pivots,
  no repainting.
- Threshold-sensitive: expose the lower-shadow-to-body multiplier (2 vs 3), max upper
  shadow, and max body-to-range as inputs.
- Confirmation (next-bar close above the hammer top) is one bar of lag — worth a toggle for
  alert reliability.
