---
id: complex-head-and-shoulders-bottoms
name: Complex head-and-shoulders bottoms
aliases: [CHSB]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 20, typical: 60}
confirmation: required
rank: {value: 9, of: 39}
stats:
  break_even_failure_rate: 0.07
  avg_move: 0.47
  throwback_rate: 0.66
  pct_meeting_target: 0.71
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/chsb.html
accessed: 2026-07-16
---

# Complex head-and-shoulders bottoms

## Overview

An inverted head-and-shoulders with multiple heads, multiple shoulders, or (rarely) both,
appearing after a downtrend. It is a bullish reversal with a low break-even failure rate
(7%) and good performance (rank 9 of 39), valid only once price confirms by breaking the
neckline.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading to the pattern |
| Shape | A head-and-shoulders bottom with multiple shoulders or multiple heads, but rarely both |
| Symmetry | Shoulders bottom near the same price, nearly the same distance from the head, and look similar to their mirror opposite |
| Volume trend | Usually higher on the left side; trends downward 65% of the time |
| Neckline | Joins the highest armpits |
| Confirmation | Price closes above a down-sloping neckline, or above the right armpit when the neckline slopes upward |

## Detection Rules (computable)

Definitions: swing lows via `ta.pivotlow(l, r)` — `head` = lowest pivot low(s) in the
formation; `shoulders` = pivot lows flanking the head(s) on both sides (≥2 shoulders or
≥2 heads for "complex"); `armpits` = swing highs between adjacent lows; `neckline` = line
joining the two highest armpits.

- **R1 [B]** Prior trend down: `close` at pattern start below the close `N` bars earlier (default `N = 40` [D]).
- **R2 [B]** Complexity: at least 2 head lows within tolerance of each other, or ≥2 shoulder lows per side (i.e. ≥5 total pivot lows), but not usually both.
- **R3 [B]** Head(s) lower than all shoulders: `head_low < min(all shoulder lows)` by at least `1%` (margin default [D]).
- **R4 [B]** Shoulder symmetry (price): left/right shoulder lows near the same price — `abs(ls_low - rs_low) / min(ls_low, rs_low) <= 0.05` (default 5% [D]).
- **R5 [B]** Shoulder symmetry (time): outermost shoulders roughly equidistant from the head — `abs((bar_head - bar_ls) - (bar_rs - bar_head)) <= 0.4 * max(bar_head - bar_ls, bar_rs - bar_head)` (default 40% tolerance [D]).
- **R6 [D]** Volume trend downward through the pattern: linear-regression slope of volume < 0 (Bulkowski: 65% of the time; optional filter).
- **R7 [B]** Confirmation required: no signal until the neckline break (see below).

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger:
- Neckline slopes **down**: `close` crosses above the down-sloping neckline joining the highest armpits.
- Neckline slopes **up**: use `close > right_armpit_high` instead (an up-sloping neckline delays or prevents the crossing).

No breakout-direction split is given (the pattern is defined by its upward breakout).

## Targets & Stops

- Target (measure rule): `height = neckline_at_head - head_low` (head low A to the
  neckline B directly above); `target = breakout_price + 0.71 * height`. Breakout price =
  where price crosses a down-sloping neckline, or the right-armpit peak for an up-sloping
  neckline. Full-height target met 71% of the time.
- Stop: below the right shoulder low or the head low (e.g. `rs_low * (1 - 0.005)` [D];
  head low for more room). Not explicitly stated on the page [D].

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 9 of 39 (1 = best) |
| Break-even failure rate | 7% |
| Average rise | 47% |
| Throwback rate | 66% |
| % meeting price target | 71% |

Based on 933 perfect trades. Notable findings: down-sloping necklines perform better;
breakouts in the middle third of the yearly price range perform best; an upward volume
trend suggests better post-breakout performance; throwbacks hurt performance; symmetrical
patterns perform best. Trading lessons: multi-peak patterns preceding the CHSB reduce
odds of success; overhead resistance spells failure; nearly horizontal necklines are
preferred.

## Trading Tactics

- Wait for confirmation (neckline break / close above right armpit) before trading.
- Compute the target with the measure rule scaled by 71%.
- If the decline leading to the pattern is small, expect a small rise.
- Prefer down-sloping (or nearly flat) necklines and symmetrical shoulders.
- Prefer breakouts in the middle third of the yearly price range.
- Favor an upward volume trend; expect throwbacks 66% of the time (they hurt performance).
- Avoid patterns forming under solid overhead resistance or after multi-peak formations.

## Pine Notes

- Feasibility: **hard**. Variable pivot count (2+ heads or 2+ shoulders per side) makes
  this the most structurally complex H&S variant — need arrays of confirmed
  `ta.pivotlow`/`ta.pivothigh` points and a classifier that groups lows into
  head-cluster vs shoulder-cluster by depth.
- Pivot detection lags by the pivot length; fire signals only on the confirmation bar
  (neckline cross), never retroactively at the head.
- Neckline geometry: fit a line through the two highest armpits and evaluate its value
  per bar; branch the trigger on neckline slope sign (down-slope → line cross, up-slope →
  right-armpit break).
- Suggested inputs: pivot length, shoulder price tolerance (R4), time-symmetry tolerance
  (R5), min head depth margin (R3), trend lookback (R1), target multiplier (0.71),
  optional volume-trend filter toggle (R6).
- Symmetry / "looks like its mirror opposite" is inherently subjective — expose R4/R5 as
  adjustable and consider a preview label before confirmation.
