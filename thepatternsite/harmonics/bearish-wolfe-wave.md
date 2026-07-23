---
id: bearish-wolfe-wave
name: Bearish Wolfe wave
aliases: []
category: harmonic
type: reversal
direction: bearish
bars: {min: 15, typical: 50}
confirmation: recommended
rank: {value: 35, of: 36}
stats:
  break_even_failure_rate: 0.30
  avg_move: 0.12
  throwback_rate: null
  pct_meeting_target: 0.37
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/WolfeWaveBear.html
accessed: 2026-07-16
---

# Bearish Wolfe wave

## Overview

A five-point (1–5) rising-wedge pattern developed by Bill Wolfe, using converging trendlines
plus projected target lines rather than Fibonacci ratios. When point 5 forms in the "sweet
spot" above line 1-3, the trader shorts, targeting the EPA (Estimated Price at Arrival) line.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Point 2 | Any minor-low valley |
| Point 3 | Top of the hill begun by point 2 |
| Point 1 | The peak prior to point 2 that point 3 has surpassed (point 1 top below point 3 top) |
| Point 4 | Bottom of the hill begun by point 3; must be above the price of point 2 |
| Point 5 | Top of the hill begun by point 4; need not touch line 1-3 |
| Converging lines | Lines 1-3 and 2-4, extended, must converge (else no Wolfe wave) |
| Other | No higher peak / lower valley between the turns (no valley below 4 between 3–5; no peak above 3 between 2–4) |

## Detection Rules (computable)

Turns 1–5 in time order; `1,3,5` = peaks, `2,4` = valleys (rising wedge).

- **R1 [B]** `low_2` is a pivot low; `high_3 > high_1` (3 surpasses 1); `high_1 < high_3`.
- **R2 [B]** `low_4 > low_2` (so lines 2-4 and 1-3 converge upward).
- **R3 [B]** Lines 1-3 and 2-4 extended converge in the future (both slopes up, line 2-4 steeper): converging-wedge check.
- **R4 [B]** No lower low than 4 between 3 and 5, and no higher high than 3 between 2 and 4.
- **R5 [B]** Point 5 lies in the sweet spot: above line 1-3 extended (and below the line parallel to 2-4 drawn from point 3).
- **R6 [D]** Pivots found with a 3-bar-each-side window (`ta.pivothigh/low(3,3)`, per Bulkowski's methodology).

## Confirmation & Breakout

Entry (short) when point 5 forms inside the sweet spot (price at/above line 1-3). Target is
the EPA line — line 1-4 extended into the future; cover when price touches it. The ETA
(apex date of lines 1-3 and 2-4) predicts *when*, but rarely works.

## Targets & Stops

- Target: the EPA line (line 1-4 projected). % reaching EPA before being stopped: see below.
- Downside waypoints: price drops to point 2 25% of the time, to point 4 48%.
- Stop: a rise above the high at point 5.
- Average drop to EPA line 10%; average drop to ultimate low 12%.

## Performance

| Metric | Value |
|---|---|
| Overall rank (vs all patterns) | 35 of 36 |
| Break-even failure rate | 30% |
| Average drop | 12% |
| Pullback rate | Not studied |
| % meeting price target (EPA) | 37% |
| 5% failure rate | 30% |
| Avg time to EPA line | 14 days |
| Avg time to ultimate low | 24 days |

Behavior of 7,086 patterns: reached ultimate low 26%; touched EPA then stopped out 16%;
stopped out (rose above point 5) 57%; out of data 1%. Bare-bones setup — Bulkowski did not
filter by volume, slope, or prior trend.

## Trading Tactics

- Short only when point 5 forms in the sweet spot.
- Cover at the EPA line (holding for more is risky — only 26% reach the ultimate low).
- Stop above the point-5 high.
- The pattern has a high failure rate; treat as a swing setup, not a position trade.

## Pine Notes

- Feasibility: **hard**. Needs five pivots, two extended trendlines, a convergence test, and
  a sweet-spot/EPA line geometry — all with line math, not just price levels. Pivots use a
  3-bar window (lag 3 bars).
- Suggested inputs: pivot window (default 3), lookback for the five turns, EPA-touch tolerance.
- Draw lines 1-3, 2-4, and 1-4 (EPA) with `line.new` using `xloc.bar_index`; project via slope.
- Store turns in a `var` UDT (bar_index + price); alert when point 5 confirms in the sweet
  spot; a second alert when price touches the EPA line.

## Anomaly

Important Results lists "% meeting the EPA target" as 37%, while Table 2 ("Number reaching
the EPA line") lists 35% — recorded 0.37 in frontmatter (headline figure), both noted here.
