---
id: inverted-roof
name: Inverted Roof
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 37, of: 39}
stats:
  break_even_failure_rate: 0.23
  avg_move: 0.34
  throwback_rate: 0.58
  pct_meeting_target: 0.65
source: https://thepatternsite.com/iroof.html
accessed: 2026-07-16
---

# Inverted Roof

## Overview

A pattern with a horizontal (or near-horizontal) top and a V-shaped bottom — the bottom half
of a diamond. Discovered by Bulkowski in early 2005 and named as the complement of the roof
pattern. The breakout can be upward or downward, so the pattern is not tradable until price
closes outside a trendline boundary. Frontmatter stats are for **upward** breakouts; the
down-breakout split is in Performance.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be any direction leading to the pattern |
| Shape | Horizontal or near-horizontal top with a V-shaped bottom — the bottom half of a diamond |
| Uptrend | Best performers appear after a sharp rise (as sometimes seen before diamond tops) |
| Symmetry | The two halves should appear symmetrical; most look like a V with price touching the horizontal top often |
| Not a H&S bottom | Exclude head-and-shoulders bottoms (simple or complex) — though inverted roofs can be a subset when the neckline is horizontal |
| Confirmation | Valid when price closes outside the pattern's trendline boundary |

## Detection Rules (computable)

Definitions: pattern spans `bar_start..bar_end`; `top` = horizontal line through the pattern
highs; `v_low` = lowest low (the V bottom, point A); `pattern_high` (B) = value of `top`.

- **R1 [B]** Flat top: pattern swing highs lie near one level — every pivot high within `1%` of `pattern_high` (tolerance default [D]), with ≥ 3 touches of the top line (default [D]).
- **R2 [B]** V-shaped bottom: `v_low` is the unique deep low near the pattern's center — lows decline into `v_low` then rise, with no second low within `2%` of `v_low` more than 3 bars away (defaults [D]).
- **R3 [B]** Symmetry: `v_low` bar sits near the middle — `0.30 <= (bar_v - bar_start) / (bar_end - bar_start) <= 0.70` (default [D]).
- **R4 [D]** Depth is meaningful: `(pattern_high - v_low) / v_low >= 0.05` (default 5%, adjustable).
- **R5 [B]** Optional context filter (best performance): sharp rise into the pattern — `close at bar_start > close[20] * 1.15` (default 15%/20 bars [D]).
- **R6 [B]** Confirmation required: no signal until a close outside the boundary (see below).

## Confirmation & Breakout

Wait for confirmation: a **close outside the pattern's trendline boundary** — above the
horizontal top (`close > pattern_high`) for an upward breakout, or below the rising lower
boundary of the V for a downward one. Breakout direction is not predictable in advance;
about 15% of the time price overshoots the top during formation.

## Targets & Stops

- Measure rule: `height = pattern_high - v_low` (B minus A).
  Up breakout: `target = breakout_price + 0.65 * height`.
  Down breakout: `target = breakout_price - 0.47 * height`.
  Multipliers are the percentages meeting the full-height target.
- Context: after a sharp uptrend into the pattern, a strong downtrend usually returns price
  back to (or slightly above) the launch point — a natural down-breakout objective.
- Stop: opposite side of the pattern — below `v_low` for longs, above `pattern_high` for shorts [D].

## Performance

Bull market, more than 450 perfect trades:

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 37 of 39 | 26 of 36 |
| Break-even failure rate | 23% | 25% |
| Average rise/decline | 34% | 14% |
| Throwback/pullback rate | 58% | 64% |
| % meeting price target | 65% | 47% |

Notable: throwbacks and pullbacks hurt performance. Up-breakout rank is near the bottom
(37 of 39). After a sharp rise into the pattern, expect the down move to retrace to the
launch point.

## Trading Tactics

- Wait for a close outside the boundary — the breakout direction is genuinely two-sided.
- After a sharp rise into the pattern, favor the scenario of a full give-back to the launch price.
- Use the measure rule with 0.65 (up) / 0.47 (down) multipliers.
- Expect throwbacks/pullbacks (58%/64%) and know they hurt performance.
- Verify the pattern is not a head-and-shoulders bottom before trading it as an inverted roof.

## Pine Notes

- Feasibility: **hard**. Needs pivot detection plus a flat-top test and a V-shape/symmetry
  test; the "not a H&S bottom" exclusion is inherently judgment-based.
- Approach: collect pivot highs/lows via `ta.pivothigh/low`; require pivot highs clustered at
  one level (R1) and a single dominant pivot low near the window center (R2, R3).
- The lower "boundary" for down-breakout confirmation is the line from `v_low` rising to the
  pattern end; fit it from `v_low` to the last pivot low and freeze it at detection to avoid repaint.
- Suggested inputs: window length range, top tolerance % and min touches (R1), V uniqueness
  tolerance (R2), symmetry band (R3), min depth (R4), sharp-rise filter toggle (R5), target
  multipliers (0.65/0.47).
- Subjective criteria: symmetry and the H&S exclusion — ship both as optional filters and
  document that visual review is advisable before trading detections.
