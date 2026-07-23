---
id: bullish-crab
name: Bullish crab
aliases: []
category: harmonic
type: reversal
direction: bullish
bars: {min: 20, typical: 80}
confirmation: recommended
rank: {value: 3, of: 5}
stats:
  break_even_failure_rate: 0.07
  avg_move: 0.39
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.92
  frequency_rank: null
source: https://thepatternsite.com/CrabBull.html
accessed: 2026-07-16
---

# Bullish crab

## Overview

A very rare five-point (X, A, B, C, D) Fibonacci pattern that can resemble a double top, with
turns set by Fibonacci ratios and a defining 161.8% AD/AX extension to point D. Price
reverses up at D 92% of the time, with the lowest failure rate of the Fibonacci family (7%).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Peaks/valleys | Turns need not be consecutive (observation) |
| XAB | X = valley; rises to peak A, retraces to valley B (retrace shown in figure) |
| ABC | CB/AB retrace = one of the listed Fibonacci ratios {38.2%, 50%, 61.8%, 70.7%, 78.6%, 88.6%} |
| BCD | Extension CD/CB = one of three ratios (e.g. 224%, 261.8%, 314%) |
| XAD | Retrace AD/AX = 161.8% (allowed ±3 pts) |
| Note | Very rare (~550 found); requires software |

## Detection Rules (computable)

Pivots ordered X<A<B<C<D: `X`, `B`, `D` = valleys; `A`, `C` = peaks.

- **R1 [B]** AB/AX retrace: `(high_A - low_B) / (high_A - low_X)` within tolerance of the retrace set {0.382, 0.5, 0.618, 0.707} [D set].
- **R2 [B]** CB/AB retrace: `(high_C - low_B) / (high_A - low_B)` ∈ {0.382, 0.5, 0.618, 0.707, 0.786, 0.886}.
- **R3 [B]** CD/CB extension: `(high_C - low_D) / (high_C - low_B)` ∈ {2.24, 2.618, 3.14} [D set].
- **R4 [B]** AD/AX extension: `(high_A - low_D) / (high_A - low_X)` ≈ 1.618, tolerance ±0.03 (3 pts).
- **R5 [D]** Default tolerance 1% for R1–R3; scan latest quintet within lookback (default 150 bars).

## Confirmation & Breakout

Thesis is a reversal *up* at D (92% do). No breakout — wait for a bullish close above D.

## Targets & Stops

- Locate D via the AD/AX = 161.8% extension of the AX leg.
- Upside targets after D: reaches X 65%, A 33%, B 48%, C 36% of the time.
- Stop: a close below D.

## Performance

| Metric | Bull market |
|---|---|
| Rank (up moves, vs 5 Fibonacci patterns) | 3 of 5 (1 best) |
| Break-even failure rate | 7% |
| Average rise | 39% |
| % reversing at D | 92% |

Based on >550 perfect trades since 1990. Lowest failure rate of the Fibonacci family.

## Trading Tactics

- Use the 161.8% AX extension to project D.
- Buy on a confirmed turn at D; target X (65% hit).
- Stop below D.
- Favor setups with underlying support near the X/D valleys.

## Pine Notes

- Feasibility: **hard**. Five alternating pivots + four Fibonacci matches, anchored by the
  1.618 AX extension (deep). Pivots lag `len` bars. Very rare — few signals.
- Suggested inputs: pivot length, ratio tolerance (default 1%), AD/AX tolerance (3 pts),
  retrace/extension sets, lookback.
- The exact XAB retrace and CD/CB sets are given only descriptively on the page; numeric
  members here are [D] best-fits from the crab family and the worked example — expose as
  editable inputs.
- Store pivots in `var` arrays/UDTs; alert only on the confirmed up-turn at D.
