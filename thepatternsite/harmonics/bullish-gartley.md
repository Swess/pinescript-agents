---
id: bullish-gartley
name: Bullish Gartley
aliases: [Gartley 222]
category: harmonic
type: reversal
direction: bullish
bars: {min: 20, typical: 80}
confirmation: recommended
rank: {value: 5, of: 5}
stats:
  break_even_failure_rate: 0.14
  avg_move: 0.36
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.90
  frequency_rank: null
source: https://thepatternsite.com/GartleyBull.html
accessed: 2026-07-16
---

# Bullish Gartley

## Overview

A five-point (X, A, B, C, D) Fibonacci pattern (the "Gartley 222", from page 222 of Gartley's
1935 book) that is a variation of a measured-move-down; the A and C tops resemble an ugly
double top. Price is expected to reverse up at D and does so 90% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| XA | Price rises X→A (large move to accommodate later retraces) |
| AB | Price retraces A→B ≈ 61.8% of the XA move |
| BC | Price climbs B→C, retracing 61.8%–78.6% of the AB drop |
| CD | Price drops C→D, 127%–161.8% of the BC move |
| Invalid | If price drops below X before D forms, ignore the pattern |

## Detection Rules (computable)

Pivots ordered X<A<B<C<D: `X`, `B`, `D` = valleys; `A`, `C` = peaks.

- **R1 [B]** AB retrace of XA: `(high_A - low_B) / (high_A - low_X)` ≈ 0.618 (tolerance 1% [D]).
- **R2 [B]** BC retrace of AB: `(high_C - low_B) / (high_A - low_B)` ∈ range [0.618, 0.786].
- **R3 [B]** CD extension of BC: `(high_C - low_D) / (high_C - low_B)` ∈ range [1.27, 1.618].
- **R4 [B]** Invalidation: pattern void if any low between A and D drops below `low_X`.
- **R5 [D]** Scan latest qualifying quintet within lookback (default 150 bars).

## Confirmation & Breakout

Thesis is a reversal *up* at D (90% do). No breakout — wait for a bullish close above D.
Bulkowski notes the hard part is confirming the turn at D; the CD = 127%–162% of BC estimate
rarely holds precisely, so be flexible.

## Targets & Stops

- Estimate D from the BC move: `D ≈ high_C - [1.27..1.618] * (high_C - low_B)`.
- Upside targets after D: reaches A 45%, B 98%, C 59% of the time.
- Stop: a close below X (tighten to a close below D once the turn is in place).

## Performance

| Metric | Bull market |
|---|---|
| Rank (up moves, vs 5 Fibonacci patterns) | 5 (worst) of 5 |
| Break-even failure rate | 14% |
| Average rise | 36% |
| % reversing at D | 90% |

Based on >1,900 perfect trades.

## Trading Tactics

- Buy once price turns at D; the near-certain first target is B (98% hit).
- Stop below X initially, tighten to below D after the turn.
- Expect a choppy formation over a long span.

## Pine Notes

- Feasibility: **hard**. Five alternating pivots + ranged Fibonacci retraces/extensions plus
  an X-invalidation check. Pivots lag `len` bars.
- Suggested inputs: pivot length, AB tolerance (default 1%), BC range [0.618, 0.786], CD range
  [1.27, 1.618], lookback.
- Track a running `low` between A and D to enforce R4 invalidation.
- Store pivots in `var` arrays/UDTs; alert only on the confirmed up-turn at D.
