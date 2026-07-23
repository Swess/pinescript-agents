---
id: bullish-abcd
name: Bullish AB=CD
aliases: [AB=CD]
category: harmonic
type: reversal
direction: bullish
bars: {min: 15, typical: 60}
confirmation: recommended
rank: {value: 4, of: 5}
stats:
  break_even_failure_rate: 0.12
  avg_move: 0.38
  throwback_rate: null
  pct_meeting_target: 1.00
  reversal_rate: 0.38
  frequency_rank: null
source: https://thepatternsite.com/ABCDBull.html
accessed: 2026-07-16
---

# Bullish AB=CD

## Overview

A four-point (A, B, C, D) Fibonacci pattern that is a measured-move-down whose turns are
located by Fibonacci ratios. Price drops from peak A to valley B, retraces up to C, then
extends down to valley D where it is supposed to reverse upward. Price reaches or exceeds
the computed D 100% of the time, but only turns up there 38% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Peaks/valleys | Turns need not be consecutive (observation, not a rule) |
| ABC | Price drops A→B, retraces to C; CB/AB retrace ∈ {38.2%, 50%, 61.8%, 70.7%, 78.6%, 88.6%} |
| BCD | Extension CD/CB ∈ {113%, 127%, 141%, 161.8%, 200%, 224%, 261.8%, 314%} |
| "Close" tolerance | A turn qualifies if within 1% of a listed Fibonacci ratio |
| Direction | Bullish reversal expected at D (measured-move-down completing) |

## Detection Rules (computable)

Pivots: `A`, `C` = peaks via `ta.pivothigh`; `B`, `D` = valleys via `ta.pivotlow`, ordered A<B<C<D in time.

- **R1 [B]** A→B is down: `low_B < high_A`, B a confirmed pivot low after A.
- **R2 [B]** CB retrace of AB: `cb_ratio = (high_C - low_B) / (high_A - low_B)`; qualifies if within 1% of one of {0.382, 0.5, 0.618, 0.707, 0.786, 0.886}.
- **R3 [B]** CD extension of CB: `cd_ratio = (high_C - low_D) / (high_C - low_B)`; qualifies if within 1% of one of {1.13, 1.27, 1.41, 1.618, 2.0, 2.24, 2.618, 3.14}.
- **R4 [B]** Match tolerance is 1% of the ratio value.
- **R5 [D]** Scan most recent qualifying A/B/C/D within a lookback window (default 120 bars).

## Confirmation & Breakout

No classic breakout: the thesis is a reversal *up* at D. Price reaches the predicted D 100%
of the time but reverses there only 38% of the time. Wait for a confirming up-close above D
(or a bullish reversal bar) before buying.

## Targets & Stops

- Point D (measure rule, simple): `D = high_C - (high_A - low_B)` (CD leg equals AB leg).
- Point D (Fibonacci method): `D = high_C - reciprocal(retrace) * (high_C - low_B)`.
- Upside targets after D reverses: reaches A 40%, B 83%, C 47% of the time.
- Stop: a close below D.

## Performance

| Metric | Bull market |
|---|---|
| Rank (up moves, vs 5 Fibonacci patterns) | 4 of 5 (1 best) |
| Break-even failure rate | 12% |
| Average rise (from D) | 38% |
| % meeting predicted point D | 100% |
| % actually reversing up at D | 38% |

Based on ≥1,741 perfect trades. Reliably projects where price stalls (D) but is a weak
reversal signal on its own.

## Trading Tactics

- Use the AB leg length (or Fibonacci reciprocal of the CB retrace) to project D.
- Do not go long on the pattern alone — price often keeps dropping past D.
- Buy only after price confirms a turn up at D; target C, then B.
- Stop below D.

## Pine Notes

- Feasibility: **hard**. Four alternating pivots + two Fibonacci-ratio matches within
  tolerance; pivots confirm `len` bars late so D is only known after it forms.
- Suggested inputs: pivot length, ratio tolerance (default 1%), retrace set, extension set,
  scan lookback window.
- Store pivots in `var` arrays/UDTs; evaluate on each confirmed D pivot; fire alert only on
  the confirmed up-turn.
- Ratio-matching is objective; pivot selection is the subjective part — cap lookback, take
  the most recent valid quartet.
