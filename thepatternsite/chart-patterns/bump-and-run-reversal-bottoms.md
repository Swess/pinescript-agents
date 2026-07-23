---
id: bump-and-run-reversal-bottoms
name: Bump-and-run reversal bottoms
aliases: [BARR bottom]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 30, typical: 60}
confirmation: required
rank: {value: 1, of: 39}
stats:
  break_even_failure_rate: 0.09
  avg_move: 0.55
  throwback_rate: 0.61
  pct_meeting_target: 0.76
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/barrb.html
accessed: 2026-07-16
---

# Bump-and-Run Reversal Bottoms

## Overview

A "frying pan tilted down, handle on the left": price declines along a shallow (0–45
degree) trendline in a lead-in phase, then the decline steepens to 60 degrees or more in
a bump phase, rounds out, and price runs back uphill, confirming when it closes above the
original down-sloping trendline. Discovered by Bulkowski in 1999, it ranks **1st of 39**
in bull markets (2nd best in bear markets) with a low 9% break-even failure rate and 55%
average rise.

## Identification Guidelines

The numbers are guidance, not firm rules (a lead-in trendline steeper than 45 degrees can
be fine).

| Characteristic | Guideline |
|---|---|
| Arithmetic scale | Use arithmetic (not semi-log) charts — vertical distances are measured |
| Shape | A frying pan tilted down, handle on the left |
| Trendline | Early on, price follows a down-sloping trendline of 0 to 45 degrees (rarely more) |
| Lead-in phase | The handle portion, leading into the bump |
| Lead-in height | Widest vertical distance between the trendline (across the highs) and the lows in the first quarter of the pattern |
| Lead-in duration | At least a month (average 35 days), varies widely |
| Bump phase | Trendline steepens to 60 degrees or more; price drops rapidly, levels out, and forms a rounded turn; may pause at the 0–45 degree trendline before moving higher |
| Bump height | Trendline to lowest low, vertically; at least twice the lead-in height (allow variation) |
| Uphill run | After the bump, price begins an uphill run |
| Volume | High at the pattern start, the bump start, and the upward breakout |
| Confirmation | Price closes above the down-sloping trendline; reject patterns without this close |

## Detection Rules (computable)

Definitions: `trendline` = line fit across the declining highs of the lead-in phase;
`leadin_height` = max vertical distance from trendline to low during the first quarter of
the pattern; `bump_low` = lowest low of the bump phase; `bump_height` = vertical distance
from trendline to `bump_low`.

- **R1 [B]** Lead-in trendline slopes down at 0–45 degrees: normalize slope as `%/bar` and require `0 < decline_rate <= slope45` where `slope45` maps 45 degrees on the chosen scale (default `decline_rate <= 0.4%/bar` [D]; angle depends on chart scaling — treat as adjustable).
- **R2 [B]** Lead-in duration `>= 21` bars (at least a month; average 35 days).
- **R3 [B]** Bump decline is much steeper than the lead-in: bump-phase decline rate `>= 2x` the lead-in decline rate (proxy for "60 degrees or more" [D]).
- **R4 [B]** Bump height `>= 2 * leadin_height`: `(trendline_at(bump_low_bar) - bump_low) >= 2 * leadin_height` (allow variation via an input multiplier, default 2.0).
- **R5 [B]** Rounded turn at the bump low: after `bump_low`, lows rise for `>= 5` consecutive swings/bars (quantified default [D]).
- **R6 [B]** Confirmation mandatory: `close > trendline_value` after the bump — no signal before this close.
- **R7 [B]** Optional volume filter: volume elevated (above its 30-bar average [D]) near pattern start, bump start, and breakout.

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > trendline_value` — a close above
the down-sloping 0–45 degree lead-in trendline. Bulkowski is explicit: do NOT accept any
pattern that lacks this confirming close. An alternative early entry: draw parallel lines
one lead-in-height apart below the top trendline; buy when price stops closing below the
next lower line and rises above the adjacent higher one. A second downward bump (dual
bump) occurs 12% of the time before the final breakout.

## Targets & Stops

- Target (measure rule): the **highest high in the pattern** (the old high where the pattern begins): `target = pattern_start_high`; met 76% of the time.
- Consider selling at the old high if the stock shows weakness.
- Stop: not explicitly specified on this page; place below the bump low (`bump_low * (1 - 0.005)`) [D].

## Performance

Bull market results (1,099 perfect trades):

| Metric | Value |
|---|---|
| Overall rank | 1 of 39 (best) |
| Break-even failure rate | 9% |
| Average rise | 55% |
| Throwback rate | 61% |
| % meeting price target (pattern top) | 76% |

Notable: also ranks second best in bear markets. Throwbacks (61%) hurt performance. Dual
bumps occur 12% of the time.

## Trading Tactics

- Buy the close above the down-sloping trendline (mandatory confirmation).
- Alternative early entry: parallel trendlines spaced one lead-in height apart; buy when price holds above one and crosses the next higher line.
- Target the old high at the pattern's start; take profits there if price shows weakness.
- Expect throwbacks (61%) — they hurt performance, so don't add on the dip blindly.
- Watch for a dual bump (12%): a second rounded dip that rejoins the trendline before the real breakout.
- Use arithmetic scale for all height measurements.

## Pine Notes

- Feasibility: **hard**. Angle-based criteria (0–45 and 60 degrees) don't translate
  directly to price charts — encode them as decline rates (%/bar) with adjustable inputs;
  document that Bulkowski's angles assume a particular visual scaling.
- Suggested inputs: lead-in min bars (R2), lead-in/bump decline-rate ratio (R3), bump
  height multiplier (R4, default 2.0), rounded-turn bars (R5), volume filter toggle (R7).
- Implementation sketch: fit the lead-in trendline from pivot highs; track the running
  max vertical gap in the first quarter for `leadin_height`; detect bump onset when the
  bar-to-bar decline rate exceeds the R3 threshold; then wait for `close >` the extended
  trendline — the natural, non-repainting alert bar.
- The rounded-turn requirement (R5) and "frying pan" shape are subjective; ship them as
  optional filters and rely on R1–R4 + confirmation for the core signal.
- The dual-bump case means a pattern can look failed then still confirm — keep candidates
  alive until price closes above the trendline or a timeout (e.g. 2x pattern length [D]).
