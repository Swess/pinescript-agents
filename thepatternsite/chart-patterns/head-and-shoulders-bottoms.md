---
id: head-and-shoulders-bottoms
name: Head-and-shoulders bottoms
aliases: [HSB, inverse head-and-shoulders]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 15, typical: 45}
confirmation: required
rank: {value: 13, of: 39}
stats:
  break_even_failure_rate: 0.11
  avg_move: 0.45
  throwback_rate: 0.65
  pct_meeting_target: 0.71
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/hsb.html
accessed: 2026-07-16
---

# Head-and-shoulders bottoms

## Overview

A three-valley pattern after a downtrend in which the middle valley (head) bottoms below
the two flanking valleys (shoulders), resembling an inverted person's head and shoulders.
It is a reliable bullish reversal with a low failure rate (11%) and good average rise
(45%), but is not valid until price confirms by closing above the neckline.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading to the pattern |
| Shape | A 3-valley pattern with the middle valley below the others; proportional, not lopsided |
| Symmetry | The two shoulders bottom near the same price, nearly the same distance from the head, and look similar (both wide or both narrow) |
| Volume | Highest on the left shoulder or head, diminished on the right shoulder; trends downward 65% of the time |
| Neckline | Joins the two armpits |
| Confirmation | Price closes above a down-sloping neckline, or above the right armpit when the neckline slopes upward |

## Detection Rules (computable)

Definitions: three consecutive swing lows via `ta.pivotlow(l, r)` — `ls_low` (left
shoulder), `head_low`, `rs_low` (right shoulder); `armpit1`/`armpit2` = swing highs
between LS–head and head–RS; `neckline` = line joining the two armpits.

- **R1 [B]** Prior trend down: `close` at pattern start below the close `N` bars earlier (default `N = 40` [D]).
- **R2 [B]** Head below both shoulders: `head_low < min(ls_low, rs_low)` by at least `1%` (margin default [D]).
- **R3 [B]** Shoulder symmetry (price): `abs(ls_low - rs_low) / min(ls_low, rs_low) <= 0.05` (default 5% [D]).
- **R4 [B]** Shoulder symmetry (time): `abs((bar_head - bar_ls) - (bar_rs - bar_head)) <= 0.4 * max(bar_head - bar_ls, bar_rs - bar_head)` (default 40% tolerance [D]).
- **R5 [D]** Volume signature: right-shoulder volume below left-shoulder/head volume — `avg vol at RS < avg vol at LS` (Bulkowski: trends downward 65% of the time; optional filter).
- **R6 [B]** Confirmation required: no signal until the neckline break (see below).

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger:
- Neckline slopes **down**: `close` crosses above the down-sloping neckline joining the two armpits (point C in Bulkowski's figure).
- Neckline slopes **up**: use `close > right_armpit_high` instead.

No breakout-direction split is given (the pattern is defined by its upward breakout).
Note from trading lessons: if price never closes above the neckline, there is no pattern
— the stock can tumble instead.

## Targets & Stops

- Target (measure rule): `height = neckline_above_head - head_low`;
  `target = breakout_price + 0.71 * height`. Breakout price = where price crosses a
  down-sloping neckline, or the right-armpit peak for an up-sloping neckline.
  Full-height target met 71% of the time.
- Stop: below the right-shoulder low (e.g. `rs_low * (1 - 0.005)` [D]); head low for a
  wider stop. Not explicitly stated on the page [D].

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 13 of 39 (1 = best) |
| Break-even failure rate | 11% |
| Average rise | 45% |
| Throwback rate | 65% |
| % meeting price target | 71% |

Based on 3,197 perfect trades. Notable: a short-term drop (0–3 months) leading to the
pattern gives the best post-breakout performance; down-sloping necklines perform
marginally better; a higher left-shoulder valley (vs the right) results in worse
performance; throwbacks hurt performance. Trading lessons: multi-peak patterns preceding
the H&S reduce odds; straight-line runs into the pattern beat loose, wandering trends;
tall one-day breakout bars often retrace; overhead resistance can prevent the breakout
entirely.

## Trading Tactics

- Wait for confirmation (close above the neckline / right armpit) before entering long.
- Compute the target with the measure rule scaled by 71%.
- If the decline leading to the pattern is small, expect a small rise.
- Prefer a short-term (0–3 month) decline into the pattern and down-sloping necklines.
- Avoid entries when the right shoulder valley is well below the left (higher left shoulder = worse performance).
- Expect throwbacks 65% of the time; they hurt post-breakout performance.
- Be wary of tall one-bar breakouts, loose/wandering trends into the pattern, multi-peak
  formations preceding it, and overhead resistance above the neckline.

## Pine Notes

- Feasibility: **moderate**. The classic 3-pivot structure: track the last three
  confirmed `ta.pivotlow` points plus the two intervening `ta.pivothigh` armpits in
  arrays/UDTs.
- Pivot confirmation lags by the pivot length — the right shoulder is only known `len`
  bars after it bottoms; fire the signal on the neckline-cross bar to avoid repainting.
- Neckline: fit a line through the two armpit highs, evaluate per bar; branch the trigger
  on slope sign (down → line cross, up → right-armpit break).
- Suggested inputs: pivot length, head-depth margin (R2), shoulder price tolerance (R3),
  time-symmetry tolerance (R4), trend lookback (R1), target multiplier (0.71), optional
  volume filter (R5).
- "Proportional, not lopsided" is subjective — R3/R4 tolerances are the codable proxy;
  expose both as inputs.
