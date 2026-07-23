---
id: bearish-butterfly
name: Bearish butterfly
aliases: []
category: harmonic
type: reversal
direction: bearish
bars: {min: 20, typical: 80}
confirmation: recommended
rank: {value: 4, of: 5}
stats:
  break_even_failure_rate: 0.27
  avg_move: 0.13
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.86
  frequency_rank: null
source: https://thepatternsite.com/ButterflyBear.html
accessed: 2026-07-16
---

# Bearish butterfly

## Overview

A five-point (X, A, B, C, D) Fibonacci pattern whose defining feature is a 127% XA extension
to point D. Price is expected to reverse down at D and does so 86% of the time, though the
pattern has a high failure rate and the average decline is only 13%.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| XAB | Price drops X→A, retraces up to B; BA retrace of XA = 78.6% |
| ABC | BC retrace of BA ∈ Fibonacci range 38.2%–88.6% |
| BCD | Extension DC/BC from 161.8% to 224% |
| XAD | Extension AD/XA = 127% (allowed ±3 pts → 124%–130%) |
| Note | Requires pattern-finding software |

## Detection Rules (computable)

Pivots ordered X<A<B<C<D: `X`, `B`, `D` = peaks; `A`, `C` = valleys.

- **R1 [B]** BA/XA retrace: `(high_B - low_A) / (high_X - low_A)` ≈ 0.786 (tolerance 1% [D]).
- **R2 [B]** BC/BA retrace: `(high_B - low_C) / (high_B - low_A)` ∈ {0.382, 0.5, 0.618, 0.707, 0.786, 0.886}.
- **R3 [B]** DC/BC extension: `(high_D - low_C) / (high_B - low_C)` ∈ {1.618, 2.0, 2.24}.
- **R4 [B]** AD/XA extension: `(high_D - low_A) / (high_X - low_A)` ≈ 1.27, tolerance ±0.03 (3 pts).
- **R5 [D]** Allow high/low bar range to satisfy a ratio (Bulkowski uses the price bar's full range); scan latest quintet within lookback (default 150 bars).

## Confirmation & Breakout

Thesis is a reversal *down* at D (86% do). No breakout — wait for a bearish close below D.

## Targets & Stops

- Locate D as 1.27 × XA extension from A: `D ≈ low_A + 1.27 * (high_X - low_A)`.
- Downside targets after D: reaches A 24%, B 76%, C 38% of the time.
- Stop: a close above D.

## Performance

| Metric | Bull market |
|---|---|
| Rank (down moves, vs 5 Fibonacci patterns) | 4 of 5 (1 best) |
| Break-even failure rate | 27% |
| Average drop | 13% |
| % reversing at D | 86% |

Based on >1,000 perfect trades. High failure rate — Bulkowski warns against shorting on the
pattern alone.

## Trading Tactics

- Use XA length to project D (AD = 1.27 × XA).
- Because of the high failure rate, require independent reasons to expect a decline.
- Short once price turns at D; stop on a close above D.
- Targets: B (76% hit), then C.

## Pine Notes

- Feasibility: **hard**. Five alternating pivots + four Fibonacci matches, the anchor being
  the 1.27 XA extension. Pivots lag `len` bars.
- Suggested inputs: pivot length, ratio tolerance (default 1%), AD/XA tolerance (3 pts),
  lookback, option to test the full high/low bar range against ratios.
- Store pivots in `var` arrays/UDTs; alert only on the confirmed down-turn at D.
