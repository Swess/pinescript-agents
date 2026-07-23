---
id: bullish-wolfe-wave
name: Bullish Wolfe wave
aliases: []
category: harmonic
type: reversal
direction: bullish
bars: {min: 15, typical: 50}
confirmation: recommended
rank: {value: 34, of: 39}
stats:
  break_even_failure_rate: 0.15
  avg_move: 0.35
  throwback_rate: null
  pct_meeting_target: 0.47
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/WolfeWaveBull.html
accessed: 2026-07-16
---

# Bullish Wolfe wave

## Overview

A five-point (1–5) falling-wedge pattern developed by Bill Wolfe, using converging trendlines
plus projected target lines rather than Fibonacci ratios. When point 5 forms in the "sweet
spot" below line 1-3, the trader buys, targeting the EPA (Estimated Price at Arrival) line.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Point 2 | Any minor-high peak |
| Point 3 | Bottom of the hill formed by point 2 |
| Point 1 | The valley prior to point 2 that point 3 has surpassed (best if point 1 is a minor low) |
| Point 4 | Top of the hill formed after point 3; must be below the price of point 2 |
| Point 5 | Bottom of the hill formed by point 4; need not touch line 1-3 |
| Converging lines | Lines 1-3 and 2-4, extended, must converge (else no Wolfe wave) |
| Other | No higher peak / lower valley between the turns (no peak above 4 between 3–5; no valley below 3 between 2–4) |

## Detection Rules (computable)

Turns 1–5 in time order; `1,3,5` = valleys, `2,4` = peaks (falling wedge).

- **R1 [B]** `high_2` is a pivot high; `low_3 < low_1` (3 surpasses 1); point 1 a minor low.
- **R2 [B]** `high_4 < high_2` (so lines 2-4 and 1-3 converge downward).
- **R3 [B]** Lines 1-3 and 2-4 extended converge in the future: converging-wedge check.
- **R4 [B]** No higher high than 4 between 3 and 5, and no lower low than 3 between 2 and 4.
- **R5 [B]** Point 5 lies in the sweet spot: below line 1-3 extended (and above the line parallel to 2-4 drawn from point 3).
- **R6 [D]** Pivots found with a 3-bar-each-side window (`ta.pivothigh/low(3,3)`, per Bulkowski's methodology).

## Confirmation & Breakout

Entry (buy) when point 5 forms inside the sweet spot (price at/below line 1-3). Target is the
EPA line — line 1-4 extended into the future; sell when price touches it. The ETA (apex date
of lines 1-3 and 2-4) predicts *when*, but rarely works.

## Targets & Stops

- Target: the EPA line (line 1-4 projected).
- Upside waypoints: price climbs to point 2 36% of the time, to point 4 56%.
- Stop: a fall below the low at point 5.
- Average rise to EPA line 12%; average gain to ultimate high 23%.

## Performance

| Metric | Value |
|---|---|
| Overall rank (vs all patterns) | 34 of 39 |
| Break-even failure rate | 15% |
| Average rise | 35% |
| Throwback rate | Not studied |
| % meeting price target (EPA) | 47% |
| 5% failure rate | 16% |
| Avg time to EPA line | 14 days |
| Avg time to ultimate high | 81 days |

Behavior of 6,269 patterns: reached ultimate high 35%; touched EPA then stopped out 15%;
stopped out (fell below point 5) 49%; out of data 2%. Bare-bones setup — no filtering by
volume, slope, or prior trend. Bulkowski found point 1 as a minor low works slightly better.

## Trading Tactics

- Buy only when point 5 forms in the sweet spot.
- Sell at the EPA line (only 35% reach the ultimate high, so don't overstay).
- Stop below the point-5 low.

## Pine Notes

- Feasibility: **hard**. Five pivots, two extended trendlines, a convergence test, and a
  sweet-spot/EPA geometry — line math, not just price levels. Pivots use a 3-bar window.
- Suggested inputs: pivot window (default 3), lookback for the five turns, EPA-touch tolerance.
- Draw lines 1-3, 2-4, and 1-4 (EPA) with `line.new` using `xloc.bar_index`; project via slope.
- Store turns in a `var` UDT (bar_index + price); alert when point 5 confirms in the sweet
  spot; a second alert when price touches the EPA line.

## Anomaly

Important Results lists "% meeting the EPA target" as 47%, while Table 2 ("Number reaching
the EPA line") lists 41% — recorded 0.47 in frontmatter (headline figure), both noted here.
