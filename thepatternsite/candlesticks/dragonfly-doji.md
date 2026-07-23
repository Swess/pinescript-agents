---
id: dragonfly-doji
name: Dragonfly doji
aliases: []
category: candlestick
type: reversal
direction: either
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 98, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0502
  throwback_rate: null
  pct_meeting_target: 0.80
  reversal_rate: 0.50
  frequency_rank: 44
source: https://thepatternsite.com/Dragonfly.html
accessed: 2026-07-16
---

# Dragonfly doji

## Overview

A single-candle doji with a long lower shadow and little or no upper shadow, open and
close within pennies of each other near the high. Theory calls it a bullish reversal
during a decline; Bulkowski's tests show it acts as a reversal only 50% of the time —
pure indecision. Upward breakouts predominate but post-breakout trend is weak (rank 98).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | None required |
| Configuration | Long lower shadow with a small body (open and close within pennies); little or no upper shadow |

## Detection Rules (computable)

- **R1 [B]** Doji body: `abs(close - open) <= 0.1 * (high - low)` (default 10% body-to-range [D]).
- **R2 [B]** Long lower shadow: `(min(open, close) - low) >= 0.66 * (high - low)` (lower shadow ≥ ~2/3 of range [D]).
- **R3 [B]** Little or no upper shadow: `(high - max(open, close)) <= 0.1 * (high - low)` (default 10% [D]).

## Confirmation & Breakout

Bulkowski measures the breakout including shadows: upward = `close > high`; downward =
`close < low` of the candle. Upward breakouts predominate (close pegged near the high).

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout in the breakout
  direction. Best % meeting target 80% (bear market, down breakout).
- Stop: opposite side of the candle [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Reversal 50% of the time (indecision) |
| Overall performance rank | 98 of 103 (1 = best) |
| Frequency rank | 44 |
| Best % meeting target | 80% (bear market, down breakout) |
| Best avg 10-day move | −5.02% (bear market, down breakout) |
| Best 10-day performance rank | 17 (bull market, down breakout) |

Near the bottom of the performance list — do not expect price to trend far after it.
Breaks out upward most often.

## Trading Tactics

- Best when it appears within a third of the yearly low.
- Breaks out upward most often.
- When open and close differ: white bodies perform best after upward breakouts, black
  bodies after downward breakouts.

## Pine Notes

- Feasibility: **easy**. Single-bar shadow/body ratios; no pivots, no repainting.
- Highly threshold-sensitive: expose body-to-range, lower-shadow, and upper-shadow ratios
  as inputs. Distinct from the gravestone doji (which has the tall *upper* shadow).
- No trend precondition, so it fires often; pair with a breakout filter to reduce noise.
