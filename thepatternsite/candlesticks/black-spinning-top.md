---
id: black-spinning-top
name: Black spinning top
aliases: []
category: candlestick
type: either
direction: either
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 73, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.83
  reversal_rate: 0.51
  frequency_rank: 1
source: https://thepatternsite.com/SpinTopBlack.html
accessed: 2026-07-16
---

# Black spinning top

## Overview

A single candle with a small black (down) body and shadows taller than the body, signaling
indecision. Price breaks out in either direction almost equally (reversal 51% of the time).
The most common candle of all (frequency rank 1) but weak post-breakout performance
(rank 73).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | None required |
| Body | Small and black (close < open) |
| Shadows | Both taller than the body |

## Detection Rules (computable)

- **R1 [B]** Black body: `close < open`.
- **R2 [B]** Small body: `body <= 0.3 * range` (small-body default 30% of range [D]).
- **R3 [B]** Upper shadow taller than body: `(high - open) > body`.
- **R4 [B]** Lower shadow taller than body: `(close - low) > body`.

Where `body = open - close` (black) and `range = high - low`. No prior trend required.

## Confirmation & Breakout

Breakout = close above the top or below the bottom of the candle. Direction is near-random;
wait for the breakout before acting.

## Targets & Stops

- Candle-height measure rule: `height = high - low` added to (up) / subtracted from (down)
  the breakout price. Best % meeting target 83% (bull market, up breakout).
- Stop: opposite side of the candle from the breakout [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Reversal 51% of the time (indecision) |
| Overall rank | 73 of 103 (1 = best) |
| Frequency rank | 1 (most common candle) |
| Best % meeting target | 83% (bull market, up breakout) |
| Best avg move 10 days | −3.36% (bear market, down breakout) |
| Best 10-day performance rank | 58 (bull market, up breakout) |

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Candles with shadows taller than the median outperform.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Single-bar geometry; no pivots, no trend requirement.
- Signal fires on the confirmed candle close.
- Suggested inputs: small-body threshold (R2, fraction of range). Distinguish from a short
  black candle (shadow length) and a rickshaw man / high-wave candle (doji body / very tall
  shadows) via the body-size and shadow-multiple parameters.
