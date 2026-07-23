---
id: head-and-shoulders-tops
name: Head-and-shoulders tops
aliases: [HST]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 15, typical: 45}
confirmation: required
rank: {value: 9, of: 36}
stats:
  break_even_failure_rate: 0.19
  avg_move: 0.16
  throwback_rate: 0.68
  pct_meeting_target: 0.51
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/hst.html
accessed: 2026-07-16
---

# Head-and-shoulders tops

## Overview

A three-peak pattern after an uptrend in which the middle peak (head) tops above the two
flanking peaks (shoulders), looking like a person's head perched atop two shoulders. It
is a bearish reversal (rank 9 of 36) that becomes valid only when price confirms by
closing below the neckline.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the pattern |
| Shape | A three-peak pattern with the middle peak above the others; proportional, not lopsided |
| Symmetry | The two shoulders peak near the same price, nearly the same distance from the head, and look similar (both wide or both narrow) |
| Volume | Highest on the left shoulder followed by the head; trends downward 61% of the time |
| Neckline | Joins the two armpits |
| Confirmation | Price closes below an up-sloping neckline, or below the right armpit when the neckline slopes downward |

## Detection Rules (computable)

Definitions: three consecutive swing highs via `ta.pivothigh(l, r)` — `ls_high` (left
shoulder), `head_high`, `rs_high` (right shoulder); `armpit1`/`armpit2` = swing lows
between LS–head and head–RS; `neckline` = line joining the two armpits.

- **R1 [B]** Prior trend up: `close` at pattern start above the close `N` bars earlier (default `N = 40` [D]).
- **R2 [B]** Head above both shoulders: `head_high > max(ls_high, rs_high)` by at least `1%` (margin default [D]).
- **R3 [B]** Shoulder symmetry (price): `abs(ls_high - rs_high) / min(ls_high, rs_high) <= 0.05` (default 5% [D]).
- **R4 [B]** Shoulder symmetry (time): `abs((bar_head - bar_ls) - (bar_rs - bar_head)) <= 0.4 * max(bar_head - bar_ls, bar_rs - bar_head)` (default 40% tolerance [D]).
- **R5 [D]** Volume signature: highest on the left shoulder, then the head, lower on the right shoulder — `avg vol at LS > avg vol at RS` (Bulkowski: volume trends downward 61% of the time; optional filter).
- **R6 [B]** Confirmation required: no signal until the neckline break (see below).

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger:
- Neckline slopes **up**: `close` crosses below the up-sloping neckline joining the two armpits.
- Neckline slopes **down**: use `close < right_armpit_low` instead.

No breakout-direction split is given (the pattern is defined by its downward breakout).

## Targets & Stops

- Target (measure rule): `height = head_high - neckline_below_head`;
  `target = breakout_price - 0.51 * height`. Breakout price = where price crosses an
  up-sloping neckline, or the right-shoulder armpit for a down-sloping neckline.
  Full-height target met only 51% of the time, so scale by 0.51.
- Stop: above the right-shoulder high (e.g. `rs_high * (1 + 0.005)` [D]). Not explicitly
  stated on the page [D].

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 9 of 36 (1 = best) |
| Break-even failure rate | 19% |
| Average decline | 16% |
| Pullback rate | 68% |
| % meeting price target | 51% |

Based on more than 2,800 perfect trades (statistics updated 8/26/2020). Notable: a
short- to intermediate-term rise into the pattern gives the best post-breakout
performance; a high-velocity rise often produces a larger decline; patterns within a
third of the yearly high perform worst (differences slight); pullbacks hurt performance.

## Trading Tactics

- Wait for confirmation (close below the neckline / right armpit) before entering short.
- Compute the target with the measure rule scaled by 51% — the full height is met only about half the time.
- If the rise leading to the pattern is small, expect a small decline.
- Prefer a short- to intermediate-term rise into the pattern; high-velocity rises often yield larger declines.
- Expect pullbacks 68% of the time; they hurt post-breakout performance.

## Pine Notes

- Feasibility: **moderate**. Mirror of the H&S bottom: track the last three confirmed
  `ta.pivothigh` points plus the two intervening `ta.pivotlow` armpits.
- Pivot confirmation lags by the pivot length — the right shoulder is known only `len`
  bars after it peaks; fire the signal on the neckline-cross bar to avoid repainting.
- Neckline: fit a line through the two armpit lows, evaluate per bar; branch the trigger
  on slope sign (up → line cross, down → right-armpit break).
- Suggested inputs: pivot length, head margin (R2), shoulder price tolerance (R3),
  time-symmetry tolerance (R4), trend lookback (R1), target multiplier (0.51), optional
  volume filter (R5).
- "Proportional, not lopsided" is subjective — the R3/R4 tolerances are the codable
  proxy; expose them as inputs.
