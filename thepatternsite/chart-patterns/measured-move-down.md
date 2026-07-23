---
id: measured-move-down
name: Measured move down
aliases: [MMD]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 15, typical: 74}
confirmation: recommended
rank: {value: null, of: null}
stats:
  break_even_failure_rate: null
  avg_move: 0.21
  throwback_rate: null
  pct_meeting_target: 0.43
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/mmd.html
accessed: 2026-07-16
---

# Measured move down

## Overview

A measured move down is a staircase decline in three parts: a first leg down, a
corrective phase that retraces part of that decline, and a second leg down. The idea is
that the second leg roughly equals the first leg in both price and time. It appears after
an upward price trend and behaves as a bearish reversal/continuation of the down move.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Trend | Upward price trend leading into the pattern (MMD is a reversal) |
| First leg | Any minor high leading down to a minor low (top of leg 1 → start of corrective phase) |
| Corrective phase | Upward retrace of the first leg; algorithm looks for retraces of at least 70% (best measure-rule performance) |
| Second leg | Price resumes down and ends the pattern at a minor low |
| Structure | Three consecutive turns: minor high, minor low, minor high, then the final minor low |

## Detection Rules (computable)

Definitions: `A` = starting minor high (top of leg 1) via `ta.pivothigh`; `B` = minor low
ending leg 1 / start of corrective phase via `ta.pivotlow`; `C` = minor high ending the
corrective phase; `D` = minor low ending leg 2.

- **R1 [B]** Prior trend up into `A`: `close[at A] > close[at A + N]` looking back (default `N = 20` [D]).
- **R2 [B]** First leg down: `B` is a minor low below `A` (`low_B < high_A`), with `A` a confirmed pivot high and `B` a confirmed pivot low.
- **R3 [B]** Corrective retrace ≥ 70% of first leg: `(high_C - low_B) / (high_A - low_B) >= 0.70` (Bulkowski's algorithm threshold; best performance).
- **R4 [D]** Corrective high `C` stays below leg-1 top: `high_C < high_A` (retrace, not a new high; default filter).
- **R5 [B]** Second leg down: price falls to a new minor low `D` with `low_D < low_B`.
- **R6 [D]** Legs comparable in size (ideal): `abs((low_C_ref - low_D) - (high_A - low_B)) / (high_A - low_B) <= 0.5` — soft symmetry check, off by default.

## Confirmation & Breakout

No classic breakout. The actionable trigger is the start of the second leg at `C`: enter
short once price turns down from the corrective-phase high. Invalidate if price rises above
the corrective-phase high (`close > high_C`).

## Targets & Stops

- Measure rule: `first_leg = high_A - low_B`; `target = high_C - 0.43 * first_leg`
  (multiply the first-leg length by the 43% "percentage meeting price target," then subtract
  from the corrective-phase peak `C`).
- Larger corrective retraces improve the odds of reaching the target.
- Stop: above the corrective-phase high `high_C`; close the short if price nears the target
  or reaches support.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | Not ranked (pattern behavior does not fit the ranking method) |
| Average first-leg decline | 20% in 26 days |
| Average corrective retrace | 48% in 21 days |
| Average last-leg decline | 21% in 27 days |
| % meeting price target | 43% |

Statistics based on more than 950 perfect trades. The larger the corrective-phase retrace,
the better the chance of meeting the price target.

## Trading Tactics

- Short once the second leg begins (price turns down from the corrective high `C`).
- Close the short if price rises above the corrective-phase high.
- Take profits as price nears the target, especially if support clusters there.
- Favor patterns with large (≥ 70%) corrective retraces for better measure-rule accuracy.

## Pine Notes

- Feasibility: **moderate**. Requires three confirmed pivots (`ta.pivothigh`/`ta.pivotlow`)
  in sequence (high `A`, low `B`, high `C`), which lag by the pivot lookback and can repaint
  if signals are anchored to the pivot bar rather than its confirmation bar.
- Suggested inputs: pivot length, trend lookback `N` (R1), minimum corrective retrace %
  (R3, default 0.70), target multiplier (0.43), optional leg-symmetry tolerance (R6).
- The second leg's end (`D`) is only known after the fact; trade the second-leg entry at
  `C` and project the target rather than waiting for `D`.
- Subjective element: what counts as a "minor" high/low depends on the pivot length chosen.
