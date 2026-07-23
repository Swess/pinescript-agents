---
id: measured-move-up
name: Measured move up
aliases: [MMU]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 15, typical: 98}
confirmation: recommended
rank: {value: null, of: null}
stats:
  break_even_failure_rate: null
  avg_move: 0.31
  throwback_rate: null
  pct_meeting_target: 0.60
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/mmu.html
accessed: 2026-07-16
---

# Measured move up

## Overview

A measured move up is a staircase advance in three parts: a first leg up, a corrective
phase that retraces part of that advance, and a second leg up. The premise is that the
second leg roughly equals the first leg in price and time. It appears after a downward
price trend and behaves as a bullish reversal/continuation of the up move.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Trend | Downward price trend leading into the pattern (MMU is a reversal), for best performance |
| First leg | Any minor low leading up to a minor high (bottom of leg 1 → start of corrective phase) |
| Corrective phase | Downward retrace of the first leg; algorithm looks for retraces of at least 70% (best measure-rule performance) |
| Second leg | Price resumes up and ends the pattern at a minor high |
| Structure | Three consecutive turns: minor low, minor high, minor low, then the final minor high |

## Detection Rules (computable)

Definitions: `A` = starting minor low (bottom of leg 1) via `ta.pivotlow`; `B` = minor high
ending leg 1 / start of corrective phase via `ta.pivothigh`; `C` = minor low ending the
corrective phase; `D` = minor high ending leg 2.

- **R1 [B]** Prior trend down into `A`: `close[at A] < close[at A + N]` looking back (default `N = 20` [D]).
- **R2 [B]** First leg up: `B` is a minor high above `A` (`high_B > low_A`), with `A` a confirmed pivot low and `B` a confirmed pivot high.
- **R3 [B]** Corrective retrace ≥ 70% of first leg: `(high_B - low_C) / (high_B - low_A) >= 0.70` (Bulkowski's algorithm threshold; best performance).
- **R4 [D]** Corrective low `C` stays above leg-1 bottom: `low_C > low_A` (retrace, not a new low; default filter).
- **R5 [B]** Second leg up: price rises to a new minor high `D` with `high_D > high_B`.
- **R6 [D]** Legs comparable in size (ideal): `abs((high_D - low_C) - (high_B - low_A)) / (high_B - low_A) <= 0.5` — soft symmetry check, off by default.

## Confirmation & Breakout

No classic breakout. The actionable trigger is the start of the second leg at `C`: enter
long once price turns up from the corrective-phase low. Invalidate if price drops below the
corrective-phase low (`close < low_C`).

## Targets & Stops

- Measure rule: `first_leg = high_B - low_A`; `target = low_C + 0.60 * first_leg`
  (multiply the first-leg length by the 60% "percentage meeting price target," then add to
  the corrective-phase low `C`).
- Larger corrective retraces improve the odds of reaching the target.
- Stop: below the corrective-phase low `low_C`; close if price nears the target or reaches
  overhead resistance. A down-sloping trendline from prior action can mark where price reverses.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | Not ranked (pattern behavior does not fit the ranking method) |
| Average first-leg rise | 36% in 38 days |
| Average corrective retrace | 48% in 27 days |
| Average second-leg rise | 31% in 33 days |
| % meeting price target | 60% |

Statistics based on over 1,000 perfect trades. Measured moves can nest (e.g. sequence CDAB
forms another measured move up). Larger corrective retraces improve target odds.

## Trading Tactics

- Buy once the second leg begins (price turns up from the corrective low `C`).
- Close the trade if price drops below the corrective-phase low.
- Take profits as price nears the target, especially near overhead resistance.
- Watch for a down-sloping trendline intersecting the projected target — expect a reversal there.
- Favor patterns with large (≥ 70%) corrective retraces for better measure-rule accuracy.

## Pine Notes

- Feasibility: **moderate**. Requires three confirmed pivots (`ta.pivotlow`/`ta.pivothigh`)
  in sequence (low `A`, high `B`, low `C`), which lag by the pivot lookback and can repaint
  if signals are anchored to the pivot bar rather than its confirmation bar.
- Suggested inputs: pivot length, trend lookback `N` (R1), minimum corrective retrace %
  (R3, default 0.70), target multiplier (0.60), optional leg-symmetry tolerance (R6).
- The second leg's end (`D`) is only known after the fact; trade the second-leg entry at
  `C` and project the target rather than waiting for `D`.
- Subjective element: what counts as a "minor" high/low depends on the pivot length chosen.
