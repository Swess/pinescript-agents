---
id: complex-head-and-shoulders-tops
name: Complex head-and-shoulders tops
aliases: [CHST]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 20, typical: 60}
confirmation: required
rank: {value: 7, of: 36}
stats:
  break_even_failure_rate: 0.18
  avg_move: 0.17
  throwback_rate: 0.66
  pct_meeting_target: 0.47
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/chst.html
accessed: 2026-07-16
---

# Complex head-and-shoulders tops

## Overview

A head-and-shoulders top with multiple shoulders or multiple heads (rarely both),
appearing after an uptrend. It is a bearish reversal (rank 7 of 36) that is only valid
once price confirms by closing below the neckline or right armpit.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the pattern |
| Shape | A head-and-shoulders top with multiple shoulders or multiple heads, but rarely both |
| Symmetry | Shoulders peak near the same price, nearly the same distance from the head, and look similar (both wide or both narrow) compared to their mirror opposite |
| Volume | Usually higher on the left side of the pattern |
| Neckline | Joins the lowest armpits; often nearly horizontal, rarely steep |
| Confirmation | Price closes below an up-sloping neckline, or below the right armpit when the neckline slopes downward |

## Detection Rules (computable)

Definitions: swing highs via `ta.pivothigh(l, r)` — `head` = highest pivot high(s);
`shoulders` = pivot highs flanking the head(s) on both sides (≥2 shoulders per side or
≥2 heads for "complex"); `armpits` = swing lows between adjacent highs; `neckline` = line
joining the lowest armpit left of the head to the lowest armpit right of the head.

- **R1 [B]** Prior trend up: `close` at pattern start above the close `N` bars earlier (default `N = 40` [D]).
- **R2 [B]** Complexity: at least 2 head highs within tolerance of each other, or ≥2 shoulder highs per side (≥5 total pivot highs), but not usually both.
- **R3 [B]** Head(s) higher than all shoulders: `head_high > max(all shoulder highs)` by at least `1%` (margin default [D]).
- **R4 [B]** Shoulder symmetry (price): left/right shoulder highs near the same price — `abs(ls_high - rs_high) / min(ls_high, rs_high) <= 0.05` (default 5% [D]).
- **R5 [B]** Shoulder symmetry (time): outermost shoulders roughly equidistant from the head — `abs((bar_head - bar_ls) - (bar_rs - bar_head)) <= 0.4 * max(bar_head - bar_ls, bar_rs - bar_head)` (default 40% tolerance [D]).
- **R6 [D]** Volume higher on the left side: average volume of the left half > average volume of the right half (optional filter).
- **R7 [B]** Confirmation required: no signal until the neckline / right-armpit break (see below).

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger:
- Neckline slopes **up**: `close` crosses below the up-sloping neckline joining the lowest armpits.
- Neckline slopes **down**: use `close < right_armpit_low` instead (avoids a delayed or
  unreachable crossing; the page's example shows the armpit method triggers at a higher,
  earlier price than a down-sloping neckline cross).

No breakout-direction split is given (the pattern is defined by its downward breakout).

## Targets & Stops

- Target (measure rule): `height = highest_head_high - neckline_below_head`;
  `target = breakout_price - 0.47 * height`. Breakout price = where price crosses an
  up-sloping neckline, or the right-shoulder armpit low for a down-sloping neckline.
  Full-height target met only 47% of the time, so the 47% multiplier is the reliable form.
- Stop: above the right shoulder high or the head (e.g. `rs_high * (1 + 0.005)` [D]).
  Not explicitly stated on the page [D].

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 7 of 36 (1 = best) |
| Break-even failure rate | 18% |
| Average decline | 17% |
| Pullback rate | 66% |
| % meeting price target | 47% |

Based on more than 650 perfect trades (statistics updated 8/26/2020). Notable: a
short-term rise leading to the pattern gives the best post-breakout performance; a
high-velocity rise into the pattern often produces a larger decline; near-horizontal
necklines perform best; patterns in the lowest third of the yearly price range perform
best; pullbacks hurt performance; an extended right shoulder performs marginally better.
After a fast run-up, the decline often retraces back to the launch point.

## Trading Tactics

- Wait for confirmation (neckline / right-armpit break) before trading.
- Compute the target with the measure rule scaled by 47% — the full height is met less than half the time.
- If the rise leading to the pattern is small, expect a small decline.
- If an inner (simple) head-and-shoulders top appears within the complex one, trade it for an earlier entry.
- Prefer near-horizontal necklines and patterns in the lowest third of the yearly range.
- Expect pullbacks 66% of the time; they hurt post-breakout performance.

## Pine Notes

- Feasibility: **hard**. Mirror of the complex bottom: arrays of confirmed
  `ta.pivothigh`/`ta.pivotlow` points, cluster highs into head vs shoulders by height,
  fit the neckline through the two lowest armpits.
- Pivot confirmation lags by the pivot length; signal only on the confirmation bar
  (neckline cross or right-armpit break), never at the head, to avoid repainting.
- Branch the trigger on neckline slope sign (up-slope → line cross; down-slope →
  right-armpit low break).
- Suggested inputs: pivot length, shoulder price tolerance (R4), time-symmetry tolerance
  (R5), head margin (R3), trend lookback (R1), target multiplier (0.47), optional
  left-side-volume filter (R6).
- "Both wide or both narrow" shoulder-shape similarity is subjective — omit or ship as an
  optional width-ratio filter.
