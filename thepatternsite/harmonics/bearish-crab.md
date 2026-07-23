---
id: bearish-crab
name: Bearish crab
aliases: []
category: harmonic
type: reversal
direction: bearish
bars: {min: 20, typical: 80}
confirmation: recommended
rank: {value: 1, of: 5}
stats:
  break_even_failure_rate: 0.20
  avg_move: 0.14
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: 0.87
  frequency_rank: null
source: https://thepatternsite.com/CrabBear.html
accessed: 2026-07-16
---

# Bearish crab

## Overview

A five-point (X, A, B, C, D) Fibonacci pattern that loosely resembles a double bottom, with
turns set by Fibonacci ratios and a defining 161.8% DA/XA extension to point D. Price
reverses down at D 87% of the time, with a modest 14% average decline.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Peaks/valleys | Turns need not be consecutive (observation) |
| XAB | X = peak; drops to valley A, rises to peak B. BA/XA retrace = one of three listed ratios (e.g. 38.2%/50%/61.8%) |
| ABC | BC/BA retrace = one of six Fibonacci ratios {38.2%, 50%, 61.8%, 70.7%, 78.6%, 88.6%} |
| BCD | Extension DC/BC = one of three ratios (e.g. 224%, 261.8%, 314%) |
| DAX | Retrace DA/XA = 161.8% (allowed ±3 pts → 158.8%–164.8%) |
| Note | Somewhat rare (1,357 found); requires software |

## Detection Rules (computable)

Pivots ordered X<A<B<C<D: `X`, `B`, `D` = peaks; `A`, `C` = valleys.

- **R1 [B]** BA/XA retrace: `(high_B - low_A) / (high_X - low_A)` within tolerance of the listed set {0.382, 0.5, 0.618} [D set].
- **R2 [B]** BC/BA retrace: `(high_B - low_C) / (high_B - low_A)` ∈ {0.382, 0.5, 0.618, 0.707, 0.786, 0.886}.
- **R3 [B]** DC/BC extension: `(high_D - low_C) / (high_B - low_C)` ∈ {2.24, 2.618, 3.14} [D set; 314% confirmed in example].
- **R4 [B]** DA/XA extension: `(high_D - low_A) / (high_X - low_A)` ≈ 1.618, tolerance ±0.03 (3 pts).
- **R5 [D]** Default tolerance 1% for R1–R3; scan latest quintet within lookback (default 150 bars).

## Confirmation & Breakout

Thesis is a reversal *down* at D (87% do). No breakout — wait for a bearish close below D.

## Targets & Stops

- Locate D via the DA/XA = 161.8% extension of the XA leg.
- Downside targets after D: reaches X 59%, A 18%, B 37%, C 23% of the time.
- Stop: a close above D.
- Note: 20% of patterns decline less than 5% below D — size for a modest swing.

## Performance

| Metric | Bull market |
|---|---|
| Rank (down moves, vs 5 Fibonacci patterns) | 1 (best) of 5 |
| Break-even failure rate | 20% |
| Average decline | 14% |
| % reversing at D | 87% |

Based on >1,350 perfect trades (1,357 found). Better trades when overhead resistance sits
near the X–D peaks.

## Trading Tactics

- Use the 161.8% XA extension to project D.
- Short on a confirmed turn at D; target X (59% hit).
- Stop above D.
- Favor setups with overhead resistance near X/D.

## Pine Notes

- Feasibility: **hard**. Five alternating pivots + four Fibonacci matches, anchored by the
  1.618 XA extension (deep). Pivots lag `len` bars.
- Suggested inputs: pivot length, ratio tolerance (default 1%), DA/XA tolerance (3 pts),
  retrace/extension sets, lookback.
- The exact BA/XA and DC/BC sets are given only as counts on the page ("three ratios"); the
  numeric members here are [D] best-fits from the crab family and the worked example — expose
  them as editable inputs.
- Store pivots in `var` arrays/UDTs; alert only on the confirmed down-turn at D.
