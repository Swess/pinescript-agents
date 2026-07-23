---
id: bullish-bat
name: Bullish bat
aliases: []
category: harmonic
type: reversal
direction: bullish
bars: {min: 20, typical: 80}
confirmation: recommended
rank: {value: 1, of: 5}
stats:
  break_even_failure_rate: 0.10
  avg_move: 0.44
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.91
  frequency_rank: null
source: https://thepatternsite.com/BatBull.html
accessed: 2026-07-16
---

# Bullish bat

## Overview

A very rare five-point (X, A, B, C, D) Fibonacci pattern resembling a big "M" whose turns are
set by Fibonacci ratios. Once price reaches the bottom at point D, it reverses upward 91% of
the time, with a strong average rise of 44%.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Peaks/valleys | Turns need not be consecutive (observation) |
| XAB | X = valley; rises to peak A, retraces to valley B. AB/AX retrace = 38.2% or 50% |
| ABC | CB/AB retrace ∈ {38.2%, 50%, 61.8%, 70.7%, 78.6%, 88.6%} |
| BCD | Extension CD/CB ∈ {161.8%, 200%, 224%, 261.8%} |
| XAD | Retrace AD/AX = 88.6% (allowed ±3 pts → 85.6%–91.6%) |
| Note | Very rare; requires recognition software |

## Detection Rules (computable)

Pivots ordered X<A<B<C<D: `X`, `B`, `D` = valleys; `A`, `C` = peaks.

- **R1 [B]** AB/AX retrace: `(high_A - low_B) / (high_A - low_X)` within tolerance of {0.382, 0.5}.
- **R2 [B]** CB/AB retrace: `(high_C - low_B) / (high_A - low_B)` ∈ {0.382, 0.5, 0.618, 0.707, 0.786, 0.886}.
- **R3 [B]** CD/CB extension: `(high_C - low_D) / (high_C - low_B)` ∈ {1.618, 2.0, 2.24, 2.618}.
- **R4 [B]** AD/AX retrace: `(high_A - low_D) / (high_A - low_X)` ≈ 0.886, tolerance ±0.03 (3 pts).
- **R5 [D]** Default tolerance 1% for R1–R3; scan latest qualifying quintet within lookback (default 150 bars).

## Confirmation & Breakout

Thesis is a reversal *up* at D (91% do). No classic breakout — wait for a bullish close above
D or a reversal bar to confirm.

## Targets & Stops

- Locate D via the AD/AX = 88.6% retrace of the AX leg, cross-checked with CD/CB extension.
- Upside targets after D: reaches C 64%, B 86%, A 58% of the time.
- Stop: a close below D.

## Performance

| Metric | Bull market |
|---|---|
| Rank (up moves, vs 5 Fibonacci patterns) | 1 (best) of 5 |
| Break-even failure rate | 10% |
| Average rise | 44% |
| % reversing at D | 91% |

Based on 259 perfect trades. Among the best-performing Fibonacci patterns (high turn rate,
low failure, large rise).

## Trading Tactics

- Buy on a confirmed turn up at D.
- Targets: B (86% hit) then A.
- Stop below D.
- Favor setups where underlying support aligns with the X/D valleys.

## Pine Notes

- Feasibility: **hard**. Five alternating pivots + four Fibonacci-ratio matches; pivots lag
  by `len` bars, so D confirms late. Very rare — expect few signals.
- Suggested inputs: pivot length, ratio tolerance (default 1%), AD/AX tolerance (default 3
  pts), lookback window.
- Store pivots in `var` arrays/UDTs; evaluate on each confirmed D valley; alert only on the
  confirmed up-turn.
