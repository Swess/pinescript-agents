---
id: bearish-bat
name: Bearish bat
aliases: []
category: harmonic
type: reversal
direction: bearish
bars: {min: 20, typical: 80}
confirmation: recommended
rank: {value: 1, of: 5}
stats:
  break_even_failure_rate: 0.18
  avg_move: 0.14
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.86
  frequency_rank: null
source: https://thepatternsite.com/BatBear.html
accessed: 2026-07-16
---

# Bearish bat

## Overview

A rare five-point (X, A, B, C, D) Fibonacci pattern resembling a big "W" whose turns are set
by Fibonacci ratios. Once point D forms, price is expected to turn lower there — and does so
86% of the time, though the resulting decline is usually modest (14% average).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Peaks/valleys | Turns need not be consecutive (observation) |
| XAB | X = peak; drops to valley A, rises to peak B. BA/XA retrace = 38.2% or 50% |
| ABC | BC/BA retrace ∈ {38.2%, 50%, 61.8%, 70.7%, 78.6%, 88.6%} |
| BCD | Extension DC/BC ∈ {161.8%, 200%, 224%, 261.8%} |
| DAX | Retrace DA/XA = 88.6% (allowed ±3 pts → 85.6%–91.6%) |
| Note | Rare (537 found); requires software |

## Detection Rules (computable)

Pivots ordered X<A<B<C<D: `X`, `B`, `D` = peaks; `A`, `C` = valleys.

- **R1 [B]** BA/XA retrace: `(high_B - low_A) / (high_X - low_A)` within tolerance of {0.382, 0.5}.
- **R2 [B]** BC/BA retrace: `(high_B - low_C) / (high_B - low_A)` ∈ {0.382, 0.5, 0.618, 0.707, 0.786, 0.886}.
- **R3 [B]** DC/BC extension: `(high_D - low_C) / (high_B - low_C)` ∈ {1.618, 2.0, 2.24, 2.618}.
- **R4 [B]** DA/XA retrace: `(high_D - low_A) / (high_X - low_A)` ≈ 0.886, tolerance ±0.03 (3 pts).
- **R5 [D]** Default tolerance 1% for R1–R3; scan latest qualifying quintet within lookback (default 150 bars).

## Confirmation & Breakout

Thesis is a reversal *down* at D (86% do). No classic breakout — wait for a bearish close
below D or a reversal bar to confirm the turn.

## Targets & Stops

- Locate D via the DA/XA = 88.6% retrace of the XA leg, cross-checked with the DC/BC extension.
- Downside targets after D: reaches A 35%, B 81%, C 48% of the time.
- Stop: a close above D.
- Note: 18% of patterns decline no more than 5% below D — size for a modest swing.

## Performance

| Metric | Bull market |
|---|---|
| Rank (down moves, vs 5 Fibonacci patterns) | 1 (best) of 5 |
| Break-even failure rate | 18% |
| Average decline | 14% |
| % reversing at D | 86% |

Based on >500 perfect trades (537 patterns found). Better trades occur when overhead
resistance sits near the X–D peaks.

## Trading Tactics

- Trade only when other evidence supports a decline; the pattern alone yields a small move.
- Favor setups where overhead resistance aligns with the X/D peaks (a ceiling).
- Short on a confirmed turn at D; target B (81% hit), then C.
- Stop above D.

## Pine Notes

- Feasibility: **hard**. Five alternating pivots + four Fibonacci-ratio matches; pivots lag
  by `len` bars, so D confirms late. Rare, so expect few signals.
- Suggested inputs: pivot length, ratio tolerance (default 1%), DA/XA tolerance (default 3
  pts), lookback window.
- Store pivots in `var` arrays/UDTs; evaluate on each confirmed D peak; alert only on the
  confirmed down-turn.
