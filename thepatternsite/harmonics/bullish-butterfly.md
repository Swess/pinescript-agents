---
id: bullish-butterfly
name: Bullish butterfly
aliases: []
category: harmonic
type: reversal
direction: bullish
bars: {min: 20, typical: 80}
confirmation: recommended
rank: {value: 2, of: 5}
stats:
  break_even_failure_rate: 0.11
  avg_move: 0.40
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.91
  frequency_rank: null
source: https://thepatternsite.com/ButterflyBull.html
accessed: 2026-07-16
---

# Bullish butterfly

## Overview

A five-point (X, A, B, C, D) Fibonacci pattern whose defining feature is a 127% AX extension
to point D. Price is expected to reverse up at D and does so 91% of the time, with a strong
average rise of 40%.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| XAB | Price rises X→A, retraces 78.6% to B |
| ABC | Retrace from B up to C; CB/AB ∈ Fibonacci range 38.2%–88.6% |
| BCD | Extension CD/CB over the Fibonacci ratios (161.8% principal) |
| AD/AX | Final leg drops C→D; AD = 127% of AX |
| Note | Requires pattern-finding software |

## Detection Rules (computable)

Pivots ordered X<A<B<C<D: `X`, `B`, `D` = valleys; `A`, `C` = peaks.

- **R1 [B]** AB/AX retrace: `(high_A - low_B) / (high_A - low_X)` ≈ 0.786 (tolerance 1% [D]).
- **R2 [B]** CB/AB retrace: `(high_C - low_B) / (high_A - low_B)` ∈ {0.382, 0.5, 0.618, 0.707, 0.786, 0.886}.
- **R3 [B]** CD/CB extension: `(high_C - low_D) / (high_C - low_B)` ∈ {1.618, 2.0, 2.24, 2.618} (161.8% principal).
- **R4 [B]** AD/AX extension: `(high_A - low_D) / (high_A - low_X)` ≈ 1.27, tolerance ±0.03 (3 pts).
- **R5 [D]** Allow the high/low bar range to satisfy a ratio; scan latest quintet within lookback (default 150 bars).

## Confirmation & Breakout

Thesis is a reversal *up* at D (91% do; price continues below D only 9% of the time). No
breakout — wait for a bullish close above D.

## Targets & Stops

- Locate D as 1.27 × AX extension from A: `D ≈ high_A - 1.27 * (high_A - low_X)`.
- Upside targets after D: reaches A 39%, B 79%, C 49% of the time.
- Stop: a close below D.

## Performance

| Metric | Bull market |
|---|---|
| Rank (up moves, vs 5 Fibonacci patterns) | 2 of 5 (1 best) |
| Break-even failure rate | 11% |
| Average rise | 40% |
| % turning at D | 91% |

Based on ~700 perfect trades. One of the stronger Fibonacci patterns.

## Trading Tactics

- Use AX length to project D (AD = 1.27 × AX).
- Buy once price turns at D; exit on a close below D.
- Targets: B (79% hit), then C.

## Pine Notes

- Feasibility: **hard**. Five alternating pivots + four Fibonacci matches, anchored by the
  1.27 AX extension. Pivots lag `len` bars.
- Suggested inputs: pivot length, ratio tolerance (default 1%), AD/AX tolerance (3 pts),
  lookback, option to test full high/low bar range against ratios.
- Store pivots in `var` arrays/UDTs; alert only on the confirmed up-turn at D.
