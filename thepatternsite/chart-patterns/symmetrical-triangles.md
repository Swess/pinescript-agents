---
id: symmetrical-triangles
name: Symmetrical triangles
aliases: [coils]
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 36, of: 39}
stats:
  break_even_failure_rate: 0.25
  avg_move: 0.34
  throwback_rate: 0.62
  pct_meeting_target: 0.58
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/st.html
accessed: 2026-07-16
---

# Symmetrical Triangles

## Overview

Price coils between two converging trendlines — a down-sloping top and an up-sloping
bottom — filling the triangle with side-to-side movement as volume recedes. Sometimes
called coils, they appear often on historical charts, but Bulkowski calls the performance
"awful" (rank 36 of 39 for upward breakouts). The breakout is upward 60% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be any direction leading to the pattern |
| Shape | Triangular; prices move between two converging trendlines |
| Trendlines | Bottom trendline slopes up; top trendline slopes down |
| Crossing | Price must cross the pattern side to side, filling the triangle with movement, not white space |
| Touches | Price touches one trendline at least three times, the other at least twice, forming distinct valleys and peaks |
| Volume | Trends downward 84% to 86% of the time |
| Breakout | Upward 60% of the time; occurs about 74% of the way to the apex (both directions) |

## Detection Rules (computable)

Definitions: peaks `P1..Pn` via `ta.pivothigh(l, r)`, valleys `V1..Vn` via
`ta.pivotlow(l, r)`; `topline` = falling line through peak highs, `botline` = rising line
through valley lows; `apex` = bar where the extended lines converge.

- **R1 [B]** Top slopes downward: each successive peak high below the prior — `high_P(k) < high_P(k-1)`; fitted topline slope `< 0`.
- **R2 [B]** Bottom slopes upward: each successive valley low above the prior — `low_V(k) > low_V(k-1)`; fitted botline slope `> 0`.
- **R3 [B]** Touch count: `>= 3` touches on one trendline, `>= 2` on the other, as distinct pivots; touch = pivot within `0.5%` of the line (tolerance [D]).
- **R4 [B]** Crossing/white space: each swing traverses most of the triangle — no swing terminates more than `25%` of the local pattern height from the far trendline (quantified default [D]).
- **R5 [B]** Optional volume filter: volume trends downward across the pattern (true 84–86% of the time; regression slope of volume `< 0`).
- **R6 [B]** Breakout position: expect breakout near `0.74 * (apex_bar - start_bar)` from the start; expire/flag patterns that reach the apex without breaking out [D].

## Confirmation & Breakout

Breakout occurs when price pierces a trendline: `close > topline` (upward, 60% of cases)
or `close < botline` (downward), typically about 74% of the way to the apex. Expect the
market to turn when price reaches the apex (price turns at the apex 60% of the time).
Busted breakouts often lead to strong moves in the new direction, but symmetrical
triangles have a tendency to **double bust** — the final direction ends up matching the
original breakout.

## Targets & Stops

- Height: `height = highest_peak_high - lowest_valley_low` (highest peak to lowest valley in the pattern).
- Upward target: `target = breakout_price + 0.58 * height` (58% meet the full-height target).
- Downward target: `target = breakout_price - 0.36 * height` (36% meet the full-height target).
- Stops: not explicitly specified on this page; place beyond the opposite trendline / pattern extreme (e.g. below `lowest_valley_low` for longs) [D].

## Performance

Bull market results (based on over 3,000 perfect trades):

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank (1 = best) | 36 of 39 | 34 of 36 |
| Break-even failure rate | 25% | 37% |
| Average rise/decline | 34% | 12% |
| Throwback/pullback rate | 62% | 65% |
| % meeting price target | 58% | 36% |

Notable: heavy breakout volume (above the 30-day average) improves performance; downward
breakouts within a third of the yearly low perform best; triangles at the start of a
trend perform best post-breakout; throwbacks and pullbacks hurt performance; watch for
double busts after an initial busted breakout.

## Trading Tactics

- Measure rule: height (highest peak minus lowest valley) times the %-meeting-target figure, added to (up) or subtracted from (down) the breakout price.
- Prefer breakouts on heavy volume (above the 30-day average).
- Prefer triangles near the start of a trend; those far along an uptrend tend to fail.
- Busted breakouts can yield strong moves, but beware the double-bust tendency.
- Check for overhead resistance (prior peaks, sideways congestion) before taking upward breakouts — it repeatedly caused failed trades in Bulkowski's lessons.
- Half-staff behavior: triangles sometimes form midway through a trend, so the move after can match the move before (no reliable way to predict this).
- Avoid stocks with recent bad-news gaps — more bad news often follows.

## Pine Notes

- Feasibility: **moderate-hard**. Both trendlines slope, so both need pivot-based fits and
  convergence checking (topline slope < 0 < botline slope, lines intersect ahead of the
  last bar). Pivot confirmation lag delays recognition — signal only on the confirmed
  breakout close.
- Suggested inputs: pivot length, touch tolerance % (R3), min touches per side,
  apex-position cutoff (R6), target multipliers (0.58 up / 0.36 down), optional
  volume-trend (R5) and breakout-volume (vs 30-day SMA) filters.
- Compute the apex bar to expire stale patterns and to flag the apex turning-point zone.
- Consider a breakout-volume boolean (`volume > ta.sma(volume, 30)`) as a quality tag on
  the alert — Bulkowski singles it out for this pattern.
- The white-space rule (R4) is the most subjective; ship as an optional filter.
