---
id: bearish-gartley
name: Bearish Gartley
aliases: [Gartley 222]
category: harmonic
type: reversal
direction: bearish
bars: {min: 20, typical: 80}
confirmation: recommended
rank: {value: 3, of: 5}
stats:
  break_even_failure_rate: 0.22
  avg_move: 0.14
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.87
  frequency_rank: null
source: https://thepatternsite.com/GartleyBear.html
accessed: 2026-07-16
---

# Bearish Gartley

## Overview

A five-point (X, A, B, C, D) Fibonacci pattern (the "Gartley 222", from page 222 of Gartley's
1935 book) that is a variation of a measured-move-up; the A and C valleys resemble an ugly
double bottom. Price is expected to reverse down at D and does so 87% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| XA | Price drops X→A (large move to accommodate later retraces) |
| AB | Price retraces A→B ≈ 61.8% of the XA move |
| BC | Price drops B→C, retracing 61.8%–78.6% of the AB rise |
| CD | Price rises C→D, 127%–161.8% of the BC move |
| Invalid | If price rises above X before D forms, ignore the pattern |

## Detection Rules (computable)

Pivots ordered X<A<B<C<D: `X`, `B`, `D` = peaks; `A`, `C` = valleys.

- **R1 [B]** AB retrace of XA: `(high_B - low_A) / (high_X - low_A)` ≈ 0.618 (tolerance 1% [D]).
- **R2 [B]** BC retrace of AB: `(high_B - low_C) / (high_B - low_A)` ∈ range [0.618, 0.786].
- **R3 [B]** CD extension of BC: `(high_D - low_C) / (high_B - low_C)` ∈ range [1.27, 1.618].
- **R4 [B]** Invalidation: pattern void if any high between A and D exceeds `high_X`.
- **R5 [D]** Scan latest qualifying quintet within lookback (default 150 bars).

## Confirmation & Breakout

Thesis is a reversal *down* at D (87% do). No breakout — wait for a bearish close below D.
Bulkowski notes the hard part is knowing the turn at D is complete; the CD = 127%–162% of BC
estimate rarely holds precisely, so be flexible.

## Targets & Stops

- Estimate D from the BC move: `D ≈ low_C + [1.27..1.618] * (high_B - low_C)`.
- Downside targets after D: reaches A 34%, B 99%, C 51% of the time.
- Stop: a close above X (tighten to a close above D once the turn is in place).
- Note: most patterns stall in the BC "corrective phase" congestion region.

## Performance

| Metric | Bull market |
|---|---|
| Rank (down moves, vs 5 Fibonacci patterns) | 3 of 5 (1 best) |
| Break-even failure rate | 22% |
| Average decline | 14% |
| % reversing at D | 87% |

Based on >2,400 perfect trades.

## Trading Tactics

- Short once price turns at D; the near-certain first target is B (99% hit).
- Stop above X initially, tighten to above D after the turn.
- Expect price to stall in the BC congestion band.

## Pine Notes

- Feasibility: **hard**. Five alternating pivots + ranged Fibonacci retraces/extensions plus
  an X-invalidation check. Pivots lag `len` bars.
- Suggested inputs: pivot length, AB tolerance (default 1%), BC range [0.618, 0.786], CD range
  [1.27, 1.618], lookback.
- Track a running `high` between A and D to enforce R4 invalidation.
- Store pivots in `var` arrays/UDTs; alert only on the confirmed down-turn at D.
