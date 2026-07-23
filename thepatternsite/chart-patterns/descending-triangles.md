---
id: descending-triangles
name: Descending triangles
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 33, of: 39}
stats:
  break_even_failure_rate: 0.22
  avg_move: 0.38
  throwback_rate: 0.60
  pct_meeting_target: 0.64
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/dt.html
accessed: 2026-07-16
---

# Descending Triangles

## Overview

Price bounces between a horizontal bottom trendline and a down-sloping top trendline,
converging toward an apex. The leading trend can be any direction and the breakout can go
either way (upward 53% of the time). The pattern confirms only when price closes outside
one of the trendlines. Bulkowski notes performance has dropped substantially over the
decades (almost in half since the 1990s).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be any direction leading to the pattern |
| Shape | Bounded by two trendlines: bottom horizontal, top sloping downward |
| Touches | Price touches one trendline at least three times, the other at least twice, as distinct peaks or valleys |
| Crossing | Important: price must cross from trendline to trendline, nearly filling the space; avoid triangles with abundant white space |
| Volume | Recedes 78% of the time and gets quite low just before the breakout |
| Breakout | Any direction, upward 53% of the time |
| Confirmation | Pattern confirms when price closes outside one of the trendlines |

## Detection Rules (computable)

Definitions: peaks `P1..Pn` via `ta.pivothigh(l, r)`, valleys `V1..Vn` via
`ta.pivotlow(l, r)`; `botline` = horizontal level through valley lows, `topline` =
falling line through peak highs; `apex` = bar where the extended lines converge.

- **R1 [B]** Bottom horizontal: valley lows within a band — `(max(valley_lows) - min(valley_lows)) / min(valley_lows) <= 0.01` (flatness tolerance 1% [D]).
- **R2 [B]** Top slopes downward: each successive peak high below the prior — `high_P(k) < high_P(k-1)`; fitted topline slope `< 0`.
- **R3 [B]** Touch count: `>= 3` touches on one trendline, `>= 2` on the other, as distinct pivots; touch = pivot within `0.5%` of the line (tolerance [D]).
- **R4 [B]** Crossing/white space: each swing traverses most of the triangle — no swing terminates more than `25%` of the local pattern height from the far trendline (quantified default [D]).
- **R5 [B]** Optional volume filter: volume recedes across the pattern (true 78% of the time; regression slope of volume `< 0`).
- **R6 [B]** Breakout position: median breakout occurs 61–65% of the way to the apex; expire/flag patterns where price reaches the apex without a breakout [D].

## Confirmation & Breakout

The pattern is valid only when price **closes outside a trendline**: `close > topline`
(upward, 53% of cases) or `close < botline` (downward). Median distance to the breakout
is 61–65% of the way to the apex. After the breakout, research shows the market tends to
turn when it reaches the triangle apex (price turns at the apex 60% of the time). If
price rises into the pattern, it breaks out upward 63% of the time.

## Targets & Stops

- Height: `height = highest_peak_high - botline` (highest peak to the horizontal trendline).
- Upward target: `target = breakout_price + 0.64 * height` (64% meet the full-height target).
- Downward target: `target = breakout_price - 0.50 * height` (50% meet the full-height target).
- Stop: for longs, a stop a penny below the horizontal bottom trendline exits before downward momentum builds [B]; for shorts, above the down-sloping top line [D].

## Performance

Bull market results (based on more than 1,300 perfect trades):

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank (1 = best) | 33 of 39 | 15 of 36 |
| Break-even failure rate | 22% | 23% |
| Average rise/decline | 38% | 15% |
| Throwback/pullback rate | 60% | 58% |
| % meeting price target | 64% | 50% |

Notable: an upward volume slope improves median performance dramatically; downward
breakouts within a third of the yearly low do well; upward breakouts do best within a
third of the yearly high or low (avoid the middle third); throwbacks and pullbacks hurt
performance; triangles far up a rising trend flame out quicker.

## Trading Tactics

- Measure rule: height (highest peak minus horizontal line) times the %-meeting-target figure, added to (up) or subtracted from (down) the breakout price.
- Trade busted breakouts: a breakout that reverses and breaks out the other side often produces a powerful move in the new direction.
- Prefer triangles with upward breakouts near the start of an uptrend; those far up a rising trend flame out quicker.
- Prefer patterns with a rising volume trend (dramatically better median performance).
- Use a stop-loss just beyond the far trendline; do not trade without one.
- Look for underlying support beneath the triangle (winning setup) and avoid overhead resistance from prior sideways moves or multi-peak patterns above the breakout.

## Pine Notes

- Feasibility: **moderate**. Mirror image of the ascending triangle: the flat bottom is a
  horizontal-level test on pivot lows; the falling top needs a trendline fit across pivot
  highs. Pivot confirmation lag means recognition trails the touches — signal only on a
  confirmed close outside a trendline (this matches Bulkowski's confirmation rule).
- Suggested inputs: pivot length, bottom flatness tolerance % (R1), touch tolerance %
  (R3), min touches per side, apex-position cutoff (R6), target multipliers
  (0.64 up / 0.50 down), optional volume-trend filter (R5).
- Compute the apex bar from the fitted lines to expire stale patterns and to warn of the
  apex turning-point effect after breakouts.
- Busted-breakout reversal (close outside one line, then close outside the opposite side)
  is explicitly recommended by Bulkowski — worth a dedicated optional alert.
- The white-space rule (R4) is the most subjective; ship as an optional filter.
