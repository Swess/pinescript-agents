---
id: ascending-triangles
name: Ascending triangles
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 16, of: 39}
stats:
  break_even_failure_rate: 0.17
  avg_move: 0.43
  throwback_rate: 0.64
  pct_meeting_target: 0.70
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/at.html
accessed: 2026-07-16
---

# Ascending Triangles

## Overview

Price bounces between two converging trendlines — a horizontal top and an up-sloping
bottom — forming a triangle that price fills from side to side. The leading trend can be
any direction; the breakout is upward 63% of the time and typically occurs about 64% of
the way to the apex. A decent performer after upward breakouts but poor after downward
ones.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be any direction leading to the pattern |
| Shape | Triangular; prices move between two converging trendlines |
| Trendlines | Top trendline horizontal; bottom trendline slopes upward |
| Crossing | Price must cross the pattern side to side, filling the triangle with movement, not white space |
| Touches | Price touches one trendline at least three times, the other at least twice, forming distinct valleys and peaks |
| Volume | Trends downward at least 78% of the time |
| Breakout | Upward 63% of the time; occurs about 64% of the way to the apex (both directions) |

## Detection Rules (computable)

Definitions: peaks `P1..Pn` via `ta.pivothigh(l, r)`, valleys `V1..Vn` via
`ta.pivotlow(l, r)`; `topline` = horizontal level through peak highs, `botline` = rising
line through valley lows; `apex` = bar where the extended lines converge.

- **R1 [B]** Top horizontal: peak highs within a band — `(max(peak_highs) - min(peak_highs)) / min(peak_highs) <= 0.01` (flatness tolerance 1% [D]).
- **R2 [B]** Bottom slopes upward: each successive valley low above the prior — `low_V(k) > low_V(k-1)`; fitted botline slope `> 0`.
- **R3 [B]** Touch count: `>= 3` touches on one trendline, `>= 2` on the other, as distinct pivots; touch = pivot within `0.5%` of the line (tolerance [D]).
- **R4 [B]** Crossing/white space: each swing traverses most of the triangle — no swing terminates more than `25%` of the local pattern height from the far trendline (quantified default [D]).
- **R5 [B]** Optional volume filter: volume trends downward across the pattern (true ≥ 78% of the time; regression slope of volume `< 0`).
- **R6 [B]** Breakout position: expect breakout near `0.64 * (apex_bar - start_bar)` from the start; discard patterns where price reaches the apex without breaking out (flag as low quality [D]).

## Confirmation & Breakout

Upward breakout: a close above the horizontal top trendline (`close > topline`), 63% of
cases. Downward breakout: a close below the rising lower trendline. Breakouts occur on
average 64% of the way to the apex; expect the market to turn when price reaches the apex
(triangle apexes often mark turning points).

## Targets & Stops

- Height: `height = topline - lowest_valley_low` (top trendline price minus the lowest valley in the pattern).
- Upward target: `target = breakout_price + 0.70 * height` (70% meet the full-height target).
- Downward target: `target = breakout_price - 0.44 * height` (44% meet the full-height target).
- Stops: place on the side opposite the breakout unless too far away — for upward breakouts a stop at one of the minor lows along the rising trendline; for downward breakouts use the horizontal trendline price as the stop.

## Performance

Bull market results (based on more than 1,400 perfect trades):

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank (1 = best) | 16 of 39 | 30 of 36 |
| Break-even failure rate | 17% | 38% |
| Average rise/decline | 43% | 13% |
| Throwback/pullback rate | 64% | 63% |
| % meeting price target | 70% | 44% |

Notable: patterns with an intermediate-term (3–6 month) rise leading into the triangle
average a 49% rise after upward breakouts. Throwbacks and pullbacks hurt post-breakout
performance. 46% of downward breakouts bust (reverse and move higher), rising an average
of 36%; 67% of busts are single busts.

## Trading Tactics

- Measure rule: height (horizontal line minus lowest valley) times the %-meeting-target figure, added to (up) or subtracted from (down) the breakout price.
- Stop placement: opposite side of the breakout — minor lows for longs, the horizontal line for shorts.
- Prefer triangles following a 3–6 month rise (49% average post-breakout rise).
- Consider buying busted downward breakouts — nearly half of downward breakouts bust and rally strongly.
- Beware multi-peak chart contexts: bullish breakouts often fail without rising far.
- Expect a turn if price drifts to the apex without breaking out.

## Pine Notes

- Feasibility: **moderate**. Flat-top detection is a simple horizontal-level test on pivot
  highs; the rising lower trendline needs a fit across pivot lows. Pivot confirmation lag
  (`ta.pivothigh/low`) delays recognition — signal only on the confirmed breakout close.
- Suggested inputs: pivot length, top flatness tolerance % (R1), touch tolerance % (R3),
  min touches per side, apex-position cutoff (R6), target multipliers (0.70 up / 0.44 down),
  optional volume-trend filter (R5).
- Compute the apex from the two fitted lines to enforce R6 and to expire stale patterns.
- Busted-breakout logic (close below lower line, then close above pattern top within a
  bar budget) is a worthwhile optional second signal given the 46% bust rate.
- The white-space rule (R4) is the most subjective; ship as an optional filter.
