---
id: white-spinning-top
name: White spinning top
aliases: []
category: candlestick
type: either
direction: either
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 69, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.83
  reversal_rate: 0.50
  frequency_rank: 2
source: https://thepatternsite.com/SpinTopWhite.html
accessed: 2026-07-16
---

# White spinning top

## Overview

A single candle with a small white (up) body and tall shadows, signaling indecision. It
acts randomly — the breakout can be with or against the prevailing trend equally (reversal
50%). Very common (frequency rank 2) with weak post-breakout performance (rank 69).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | None required |
| Body | Small and white (close > open) |
| Shadows | Both tall (taller than the body) |

## Detection Rules (computable)

- **R1 [B]** White body: `close > open`.
- **R2 [B]** Small body: `body <= 0.3 * range` (small-body default 30% of range [D]).
- **R3 [B]** Upper shadow taller than body: `(high - close) > body`.
- **R4 [B]** Lower shadow taller than body: `(open - low) > body`.

Where `body = close - open` (white) and `range = high - low`. No prior trend required.

## Confirmation & Breakout

Breakout = close above the top or below the bottom of the candle. Direction is near-random
(50%); wait for the breakout before acting.

## Targets & Stops

- Candle-height measure rule: `height = high - low` added to (up) / subtracted from (down)
  the breakout price. Best % meeting target 83% (bull market, up breakout).
- Stop: opposite side of the candle from the breakout [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Reversal 50% of the time (indecision) |
| Overall rank | 69 of 103 (1 = best) |
| Frequency rank | 2 (very common) |
| Best % meeting target | 83% (bull market, up breakout) |
| Best avg move 10 days | −3.63% (bear market, down breakout) |
| Best 10-day performance rank | 58 (bear market, down breakout) |

Best move of 3.63% falls well short of the 6% "good" benchmark.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Spinning tops with shadows taller than the median outperform.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Single-bar geometry; no pivots, no trend requirement.
- Signal fires on the confirmed candle close.
- Suggested inputs: small-body threshold (R2, fraction of range). Differs from a short
  white candle by shadow length (tops need tall shadows) — tune the shadow-multiple.
