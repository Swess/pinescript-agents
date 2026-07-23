---
id: descending-scallops
name: Descending scallops
aliases: [backward J pattern]
category: chart-pattern
type: continuation
direction: bearish
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 12, of: 36}
stats:
  break_even_failure_rate: 0.18
  avg_move: 0.16
  throwback_rate: 0.65
  pct_meeting_target: 0.34
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/descscallops.html
accessed: 2026-07-16
---

# Descending scallops

## Overview

A backward-J-shaped pattern occurring most often in downtrends (also in retraces of an
uptrend): two peaks with a rounded valley in between, the left peak higher than the
right. It breaks out downward 78% of the time; frontmatter stats are the down-breakout
figures (up-breakout split below).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Usually downward leading to the pattern; also seen in retraces of an uptrend |
| Shape | Backward letter J: two peaks with a rounded valley in between, left peak higher than the right |
| Breakout / confirmation | Close above the top of the pattern (upward) or below the lowest valley (downward) confirms the pattern; it breaks out downward 78% of the time |

## Detection Rules (computable)

Definitions: `peak1` = left peak (swing high), `valley` = rounded low between peaks
(swing low), `peak2` = right peak, with `high_p1 > high_p2`.

- **R1 [B]** Prior trend usually down: `close` at `peak1` below the close `N` bars earlier (default `N = 20` [D]); allow uptrend-retrace context as an option.
- **R2 [B]** Lower right peak: `high_p2 < high_p1`.
- **R3 [D]** Rounded valley: valley spans ≥ 3 bars within 1% of its low; not a single-bar V-spike (default; subjective criterion).
- **R4 [D]** Valley depth meaningful: `(high_p1 - low_V) / high_p1 >= 0.05` (default).
- **R5 [D]** Pattern width: `10 <= (bar_p2 - bar_p1) <= 60` bars (not stated; defaults).
- **R6 [B]** Pattern valid only on confirmation (see below).

## Confirmation & Breakout

Downward breakout (78% of the time): `close < low_V` (close below the lowest valley).
Upward breakout: `close > high_p1` (close above the top of the pattern — Bulkowski
notes it used to be measured from the right lip).

## Targets & Stops

- Height: `H = high_p1 - low_V` (highest peak to lowest valley).
- Downward target: `target = low_V - 0.34 * H` (34% percentage-meeting-target).
- Upward target: `target = high_p2 + 0.52 * H` (52%), added to the right peak.
- Stops: for upward breakouts, below the lowest valley (if not too far away); for
  downward breakouts, above the right peak.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 29 of 39 | 12 of 36 |
| Break-even failure rate | 14% | 18% |
| Average rise/decline | 39% | 16% |
| Throwback/pullback rate | 67% | 65% |
| % meeting price target | 52% | 34% |

Bull-market numbers based on over 2,000 perfect trades. Notable: descending scallops
acting as *reversals* of the downtrend (upward breakout after a downtrend) do best;
upward breakouts on heavy volume outperform; breakout-day gaps help; tall patterns do
better with downward breakouts, short patterns with upward breakouts.

## Trading Tactics

- Measure rule: height × 34% below the valley (down breakouts) or × 52% above the
  right peak (up breakouts).
- Trade tall patterns with downward breakouts, short patterns with upward breakouts.
- Prefer heavy volume on upward breakouts and breakout-day gaps.
- The best trades are downtrend reversals — an upward breakout after a downtrend.
- Stops: below the valley (up breakouts), above the right peak (down breakouts).

## Pine Notes

- Feasibility: **moderate-hard**, same machinery as the ascending scallop: pivots for
  the two peaks and the rounded valley, with the rounded quality (R3) subjective —
  ship as bars-near-low width with an optional toggle.
- Pivots confirm `len` bars late; anchor entries to the breakout close, never pivot
  bars.
- The pattern trades in *both* directions — implement both breakout triggers and let
  the user enable long/short sides independently; use per-side target multipliers
  (0.52 up / 0.34 down).
- Suggested inputs: pivot length, min valley depth (R4), max pattern width (R5),
  trend-lookback N (R1), pattern-height filter (tall vs short median split for the
  height tactic).
