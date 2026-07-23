---
id: inverted-cup-with-handle
name: Inverted cup with handle
aliases: [ICWH]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 30, typical: 120}
confirmation: required
rank: {value: 6, of: 36}
stats:
  break_even_failure_rate: 0.18
  avg_move: 0.17
  throwback_rate: 0.67
  pct_meeting_target: 0.62
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/icup.html
accessed: 2026-07-16
---

# Inverted cup with handle

## Overview

A smooth, rounded turn shaped like an upside-down cup, followed by a handle on the right
that retraces part-way down the cup's height. Price then breaks down below the right cup
lip, making this a bearish pattern with a strong rank (6 of 36) and 17% average decline.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Rounded turn | A smooth, rounded-looking turn (an inverted cup); allow exceptions |
| Cup rims | The two cup rims should bottom near the same price |
| Cup handle | A handle to the right of the cup |
| Cup retrace | Handle must not rise above the cup top; often retraces 30% to 60% up the height of the cup |
| Confirmation | Pattern confirms when price closes below the right cup lip |

## Detection Rules (computable)

Definitions: `left_rim` / `right_rim` = swing lows bounding the inverted cup (via
`ta.pivotlow`); `cup_top` = highest high between the rims; `handle_high` = highest high
after `right_rim` and before breakdown; `cup_height = cup_top - right_rim_low`.

- **R1 [D]** Prior trend up into the cup: `close` at `left_rim` above the close `N` bars earlier (default `N = 20`; not stated on the page — the pattern tops out a rise).
- **R2 [B]** Rims bottom near the same price: `abs(left_rim_low - right_rim_low) / min(left_rim_low, right_rim_low) <= 0.05` (tolerance default 5% [D]; even rims also perform better).
- **R3 [B]** Rounded (inverted-U) top, not a spike: ≥ 5 bars with highs within `5%` of `cup_top`, or time from `left_rim` to `cup_top` and `cup_top` to `right_rim` each ≥ 25% of cup width (proxy defaults [D]; Bulkowski allows exceptions).
- **R4 [B]** Handle exists to the right of the cup: after `right_rim`, price pauses/retraces upward for ≥ 5 bars (duration default [D]).
- **R5 [B]** Handle stays below the cup top: `handle_high < cup_top`; typical retrace `0.30 <= (handle_high - right_rim_low) / cup_height <= 0.60` (use as a soft preference, not a hard reject [D]).
- **R6 [B]** Confirmation required: no signal until `close < right_rim_low`.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < right_rim_low` (a close below
the right cup lip). Short on that close. Cover signal: draw a down-sloping trendline
along the handle tops — a later close above that trendline is the exit.

## Targets & Stops

- Target (measure rule): `handle_height = handle_high - right_rim_low`;
  `target = right_rim_low - handle_height` (handle height subtracted from the right rim
  low — note this uses the **handle** height, not the cup height). Target met 62% of the
  time.
- Alternative: if the handle is the corrective phase of a measured move down, use the
  MMD measure rule for a target.
- Stop: above the handle high (e.g. `handle_high * (1 + 0.005)` [D]); exit shorts on a
  close above the handle-tops trendline.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 6 of 36 (1 = best) |
| Break-even failure rate | 18% |
| Average decline | 17% |
| Pullback rate | 67% |
| % meeting price target | 62% |

Based on 556 perfect trades in a bull market. Notable: performs best when the breakout
is near the yearly low; even cup rims outperform uneven rims; pullbacks hurt
post-breakout performance.

## Trading Tactics

- Short when price closes below the right rim low.
- Target via the measure rule (handle height below the right rim low); or the measured-move-down rule if the handle is an MMD corrective phase.
- Cover the short when price closes above a down-sloping trendline drawn along the handle tops.
- If another handle forms to the left of the cup, consider it a head-and-shoulders top with a fat head (shoulders = the two handles).
- Prefer breakouts near the yearly low and cups with even rims.
- Expect pullbacks 67% of the time; they hurt performance.

## Pine Notes

- Feasibility: **moderate–hard**. Mirror of the cup with handle: rims are `ta.pivotlow`
  points; the rounded inverted-U test (R3) needs a proxy (bar-count near the top or a
  curvature test) and should default loose.
- Signal only on the confirmation bar (`close < right_rim_low`); pivot lag means the
  right rim confirms late — never backdate.
- Track rim/top/handle levels in `var` state as pivots confirm; long cups on daily bars
  can strain the 500-bar lookback — weekly timeframe is friendlier.
- Suggested inputs: pivot length, rim tolerance % (R2), roundness strictness (R3), min
  handle bars (R4), handle-retrace band toggle (R5), stop offset.
- Note the unusual measure rule (handle height, not cup height) — implement exactly, and
  optionally offer the MMD target as an alternative input.
