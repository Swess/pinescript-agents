---
id: roof
name: Roof
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 16, of: 36}
stats:
  break_even_failure_rate: 0.22
  avg_move: 0.15
  throwback_rate: 0.66
  pct_meeting_target: 0.63
source: https://thepatternsite.com/roof.html
accessed: 2026-07-16
---

# Roof

## Overview

A pattern with a horizontal (or near-horizontal) bottom and an inverted-V top — an
up-sloping first half followed by a down-sloping second half, like the top half of a
diamond. Discovered by Bulkowski in early 2005; it is rare and its performance is not good.
The breakout can go either way but is downward 58% of the time. Frontmatter stats are for
**downward** breakouts (the predominant direction); the up-breakout split is in Performance.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Chart | Bulkowski used the daily chart; may appear on other timeframes |
| Price trend | Usually upward leading to the pattern |
| Shape | Horizontal or near-horizontal bottom; up-sloping trend in the first part, down-sloping in the last part |
| Uptrend | Best performers appear after a sharp rise (as sometimes seen before diamonds) |
| Symmetry | The two halves should appear symmetrical; most look like an inverted V with price touching the horizontal bottom at minor lows at least three times |
| Not a H&S top | Exclude head-and-shoulders tops (simple or complex) |
| Confirmation | Valid when price closes outside the trendline boundary; breakout can be any direction |

## Detection Rules (computable)

Definitions: pattern spans `bar_start..bar_end`; `bot` = horizontal line through pattern
lows (B); `peak_high` (A) = highest high (the inverted-V apex); `height = peak_high - bot`.

- **R1 [B]** Prior trend up: `close at bar_start > close[N]` with default `N = 20` bars [D].
- **R2 [B]** Flat bottom: pattern pivot lows lie near one level — each within `1%` of `bot` (tolerance default [D]) — with at least 3 minor-low touches of the horizontal bottom.
- **R3 [B]** Inverted-V top: `peak_high` is the unique dominant high near the pattern center — highs rise into it then fall, with no second high within `2%` of `peak_high` more than 3 bars away (defaults [D]).
- **R4 [B]** Symmetry: peak bar near the middle — `0.30 <= (bar_peak - bar_start) / (bar_end - bar_start) <= 0.70` (default [D]).
- **R5 [B]** Tall-pattern filter (optional, improves performance): `height / bot > 0.087` (down breakouts; use 0.092 for upward ones).
- **R6 [B]** Confirmation required: no signal until a close outside a boundary (see below).

## Confirmation & Breakout

Wait for confirmation: a close outside the trendline boundary — below the horizontal bottom
(`close < bot`) for a downward breakout, or above the down-sloping second-half trendline for
an upward one. **Downward predominates at 58%.**

## Targets & Stops

- Measure rule (down breakout): `height = peak_high - bot`;
  `target = bot - 0.63 * height` (subtract from the lowest low; 63% meet the full-height target).
- Up breakout: `target = breakout_price + 0.62 * height` (62% meet target) [construction
  mirrors the down rule; page states the up multiplier in the results list].
- Stop: opposite side — above `peak_high` for shorts, below `bot` for longs [D].

## Performance

Bull market, over 300 perfect trades:

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall performance rank | 35 of 39 | 16 of 36 |
| Break-even failure rate | 26% | 22% |
| Average rise/decline | 34% | 15% |
| Throwback/pullback rate | 60% | 66% |
| % meeting price target | 62% | 63% |

Notable: pullbacks hurt performance. Tall patterns outperform short ones — height divided by
the horizontal-bottom (breakout) price above 8.7% (down) / 9.2% (up) counts as tall. The
best performing roofs appear in downtrends, but those are rare.

## Trading Tactics

- Wait for a close outside a boundary before trading; direction is two-sided (down 58%).
- Prefer tall patterns (height/breakout price > 8.7% down, 9.2% up).
- Pullbacks (66%) hurt performance — factor them into entries.
- Roofs in downtrends perform best but are rare.
- Verify the pattern is not a head-and-shoulders top before trading it as a roof.

## Pine Notes

- Feasibility: **hard**. Mirror image of the inverted roof: flat-bottom clustering test on
  pivot lows plus a single dominant central pivot high.
- Collect pivots with `ta.pivothigh/low`; require ≥ 3 pivot lows within tolerance of one
  level (R2) and a unique central peak (R3, R4).
- Down-breakout trigger is a simple frozen level (`bot`); the up-breakout trigger needs the
  down-sloping line from `peak_high` to the last pivot high — fit and freeze it at detection
  to avoid repaint.
- Suggested inputs: window length range, bottom tolerance % and min touches (R2), peak
  uniqueness tolerance (R3), symmetry band (R4), tall filter toggle + thresholds (R5),
  target multipliers (0.63/0.62).
- Subjective criteria: symmetry and the H&S-top exclusion — ship as optional filters; flag
  detections for visual review.
