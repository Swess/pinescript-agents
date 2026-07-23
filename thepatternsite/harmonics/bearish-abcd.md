---
id: bearish-abcd
name: Bearish AB=CD
aliases: [AB=CD]
category: harmonic
type: reversal
direction: bearish
bars: {min: 15, typical: 60}
confirmation: recommended
rank: {value: 5, of: 5}
stats:
  break_even_failure_rate: 0.26
  avg_move: 0.13
  throwback_rate: null
  pct_meeting_target: 0.95
  reversal_rate: 0.32
  frequency_rank: null
source: https://thepatternsite.com/ABCDBear.html
accessed: 2026-07-16
---

# Bearish AB=CD

## Overview

A four-point (A, B, C, D) Fibonacci pattern that is a measured-move-up whose turns are
located by Fibonacci ratios. Price climbs from valley A to peak B, retraces to valley C,
then extends up to peak D where it is supposed to reverse downward. Price reaches the
computed D 95% of the time, but only turns down there 32% of the time (it keeps rising 68%).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Peaks/valleys | Turns need not be consecutive (observation, not a rule) |
| ABC | Price climbs A→B, retraces to C; BC/BA retrace ∈ {38.2%, 50%, 61.8%, 70.7%, 78.6%, 88.6%} |
| BCD | Extension DC/BC ∈ {113%, 127%, 141%, 161.8%, 200%, 224%, 261.8%, 314%} |
| "Close" tolerance | A turn qualifies if within 1% of a listed Fibonacci ratio |
| Direction | Bearish reversal expected at D (measured-move-up completing) |

## Detection Rules (computable)

Pivots: `A`, `C` = valleys via `ta.pivotlow`; `B`, `D` = peaks via `ta.pivothigh`, ordered A<B<C<D in time.

- **R1 [B]** A→B is up: `high_B > low_A`, and B is a confirmed pivot high after A.
- **R2 [B]** BC retrace of BA: `bc_ratio = (high_B - low_C) / (high_B - low_A)`; qualifies if within 1% of one of {0.382, 0.5, 0.618, 0.707, 0.786, 0.886}.
- **R3 [B]** CD extension of BC: `cd_ratio = (high_D - low_C) / (high_B - low_C)`; qualifies if within 1% of one of {1.13, 1.27, 1.41, 1.618, 2.0, 2.24, 2.618, 3.14}.
- **R4 [B]** Match tolerance is 1% of the ratio value (Bulkowski's window).
- **R5 [D]** Turns need not be adjacent bars; scan the most recent qualifying A/B/C/D within a lookback window (default 120 bars).

## Confirmation & Breakout

No classic breakout: the trade thesis is a reversal *down* at D. Price reaches the
predicted D 95% of the time but reverses there only 32% of the time. Wait for a
confirming down-close below D (or a bearish reversal bar) before acting, since price
continues rising 68% of the time.

## Targets & Stops

- Point D (measure rule, simple): `D = low_C + (high_B - low_A)` (CD leg equals AB leg).
- Point D (Fibonacci method): `D = low_C + reciprocal(retrace) * (high_B - low_C)`,
  e.g. a 61.8% retrace uses `1/0.618 = 1.618`.
- Downside targets after D reverses: reaches A 24%, B 76%, C 35% of the time.
- Stop: a close above D.

## Performance

| Metric | Bull market |
|---|---|
| Rank (down moves, vs 5 Fibonacci patterns) | 5 (worst) of 5 |
| Break-even failure rate | 26% |
| Average decline (from D) | 13% |
| % meeting predicted point D | 95% |
| % actually reversing down at D | 32% |

Based on 2,649 perfect trades. The pattern reliably *predicts* where price stalls (D) but
is a poor reversal signal on its own.

## Trading Tactics

- Use the AB leg length (or Fibonacci reciprocal of the BC retrace) to project D.
- Do not short on the pattern alone — 68% of the time price keeps rising past D.
- Only short after price confirms a turn at D; target C, then B.
- Stop above D.

## Pine Notes

- Feasibility: **hard**. Requires detecting four alternating pivots and matching two
  Fibonacci ratios within tolerance; pivots confirm `len` bars late (`ta.pivothigh/low`),
  so signals lag and D is only known after it forms.
- Suggested inputs: pivot length, ratio tolerance (default 1%), retrace set, extension set,
  scan lookback window.
- Store pivots in `var` arrays/UDTs (time + price); evaluate ratios when a new D pivot
  confirms, fire alert only on the confirmed down-turn.
- The ratio-matching is objective; choosing which pivots form the pattern is the subjective
  part — cap lookback and take the most recent valid A/B/C/D.
