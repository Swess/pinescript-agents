---
id: 3-peaks-and-domed-house
name: 3 peaks and domed house
aliases: [Three peaks and domed house, Lindsay pattern, domed house and three peaks (mirror)]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 250, typical: 450}
confirmation: none
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/3peaksdome.html
accessed: 2026-07-16
---

# 3 peaks and domed house

## Overview

A very long, complex George Lindsay formation (published 1971) seen in the Dow Jones
Industrial Average: three similar peaks, a two-wave "separating decline," then a
"domed house" — a two-story advance capped by a rounded dome — that finally collapses
back to the separating-decline low. Bulkowski could not find enough samples to include it
in his Encyclopedia and warns the more complicated the pattern, the rarer it is and the
less often it works; he suggests trading it as a triple top plus a rounded top /
head-and-shoulders top instead. A mirror version (domed house and three peaks) also exists.

## Identification Guidelines

Lindsay's guidelines, keyed to his numbered figure (points 1–28):

| Characteristic | Guideline |
|---|---|
| Points 3, 5, 7 | Three peaks rising from the base at points 1–2 in a sharp uptrend to peak 3 |
| Point 3 | The first peak usually looks somewhat flat on top |
| Point 4 | Price retraces the rise from 2 farther than expected |
| Points 4, 6, 8 | Price drops to the valleys between the peaks |
| Points 5, 7 | Peaks appear similar in shape and top out near the same price as peak 3; symmetry usually obvious |
| Points 3–7 | The three peaks take about 8 months to form, give or take |
| Points 8, 9, 10 | A severe two-wave drop (7→8, 9→10) — the "separating decline" — separates the three peaks from the rest |
| Point 10 | Always lower than point 4 or 6 (often both); otherwise it is not a separating decline |
| Points 10–14 | Base leading to the dome: price rises from 10, then forms two more lows at 12 and 14 |
| Points 14–15 | Swift advance to peak 15 — the "wall of the first story" |
| Points 15–20 | "Roof of the first story": five reversals (16 through 20), horizontal choppy movement |
| Points 20–21 | Rise resumes — "wall of the second story" — to 21 |
| Points 21–25 | Choppy dome/roof on the second story |
| Points 14–23 | The move takes 7 months and 8–10 days |
| Points 25–28 | Price tumbles to 26, retraces to 27 (often near the level of 15), then falls to 28, completing the pattern |
| Point 28 | Price bottoms near point 10; the decline may not be straight-line "but it always happens" |
| Symmetry | Rise 14→15 balances decline 27→28; rise 20→21 balances decline 25→26 |

## Detection Rules (computable)

Definitions: peaks/valleys via `ta.pivothigh/ta.pivotlow`; `p3, p5, p7` = the three
peaks; `v4, v6` = valleys between them; `v10` = separating-decline low; `p15, p21, p25` =
domed-house peaks; `v26, p27, v28` per Lindsay's figure. Daily timeframe assumed.

- **R1 [B]** Sharp uptrend into peak 3: `close` at `p3` above the close 60 bars earlier by ≥ 20% (lookback/threshold are defaults [D]).
- **R2 [B]** Three peaks near the same price: `max(high_p3, high_p5, high_p7) - min(...) <= 0.05 * min(...)` (5% tolerance [D]; Lindsay says "near the same price").
- **R3 [B]** Three-peak duration ≈ 8 months: `120 <= (bar_p7 - bar_p3) <= 210` daily bars (defaults [D] around Lindsay's "8 months, give or take").
- **R4 [B]** Separating decline: after `p7`, price falls in two waves to `v10`, with `low_v10 < min(low_v4, low_v6)` (Lindsay: lower than 4 or 6, often both; strict "both" as default [D]).
- **R5 [B]** Base of the dome: after `v10`, two higher lows `v12`, `v14` form: `low_v10 < low_v12` and `low_v10 < low_v14` (relative ordering of 12 vs 14 not stated; default `low_v12 <= low_v14` [D]).
- **R6 [B]** First-story wall: swift advance `v14 → p15`: rise ≥ 10% within ≤ 25 bars (defaults [D]).
- **R7 [B]** First-story roof: 5 alternating pivot reversals between `p15` and `p20` staying within a horizontal band (band height ≤ 8% of price [D]).
- **R8 [B]** Second story: advance `p20 → p21`, then choppy dome `p21 → p25` (highest high of pattern in this zone).
- **R9 [B]** Dome duration: `130 <= (bar_p23 - bar_v14) <= 170` daily bars (≈ 7 months [D] bounds).
- **R10 [D]** Completion/entry trigger (Bulkowski states none): close below `low_v26` after the retrace to `p27`, targeting `v28 ≈ v10`.

## Confirmation & Breakout

Bulkowski/Lindsay state no confirmation trigger; the pattern "completes" at point 28
after the 25→26 drop and 26→27 retrace. Practical default [D]: treat a close below the
point-26 low (after the failed retrace to 27) as the bearish trigger. Lindsay's claim:
the post-dome decline to the vicinity of point 10 "always happens," though not
necessarily in a straight line.

## Targets & Stops

- Target [B-derived]: the level of point 10 (the separating-decline low) — point 28
  bottoms near point 10. `target = low_v10`.
- Symmetry cross-checks [B]: decline 27→28 ≈ rise 14→15; decline 25→26 ≈ rise 20→21.
- Stop [D]: above point 27 (the retrace high), e.g. `high_p27 * (1 + 0.005)`.

## Performance

Not stated by Bulkowski. No statistics exist: he searched extensively but could not find
enough samples to include the pattern in the Encyclopedia of Chart Patterns. Lindsay's
documented examples are all in the Dow averages, spanning 1890–1969 (e.g. Oct 1946–Nov
1948, Sep 1964–May 1966, Oct 1966–Jan 1969; mirror example Apr 1938–Jun 1940).

## Trading Tactics

- Bulkowski's advice: it may be easier to treat this as two separate patterns — a triple
  top followed by a rounded top or head-and-shoulders top — and trade those individually.
- Expect rarity: it was documented only in the Dow averages, roughly once a decade.
- If trading it, the edge is the expected decline from the dome (point 25) back to the
  separating-decline low (point 10); use the 14→15 vs 27→28 symmetry as a sanity check.
- Complicated patterns appear less often and work less often than simple ones — size
  positions accordingly.

## Pine Notes

- Feasibility: **hard**. Requires ~28 sequenced pivot points over 1–2 years of daily
  data, wave-counting for the separating decline, and band/chop detection for the roofs —
  the most complex pattern in this collection.
- Practical approach: implement as two chained detectors (triple top → confirmed, then
  rounded-top/dome breakdown), per Bulkowski's own suggestion, rather than a literal
  28-point state machine.
- Durations (R3, R9) exceed intraday lookback budgets; run on daily/weekly. Use
  `xloc.bar_time` for drawings — 8-month + 7-month spans can approach bar-index limits on
  intraday charts.
- Nearly every tolerance here is a [D] default (peak equality %, wave counts, roof band,
  durations); expose all as inputs and expect heavy tuning.
- Pivot confirmation lag compounds across the many required pivots; signals will be very
  late by design. Do not anchor alerts to pivot bars (repaint).
