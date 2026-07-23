---
id: pothole
name: Pothole
aliases: []
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 10, typical: 26}
confirmation: required
rank: {value: 4, of: 40}
stats:
  break_even_failure_rate: 0.09
  avg_move: 0.51
  throwback_rate: 0.66
  pct_meeting_target: 0.86
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/Pothole.html
accessed: 2026-07-16
---

# Pothole

## Overview

A pothole appears in an uptrend as a flat sideways "road" resting on support, followed by a
sharp dip (the pothole) that looks like a downward breakout but quickly recovers. Price then
shoots out the top of the pattern and continues higher. Rare but effective, it is a daily-chart
version of the diving-board pattern (which appears on weekly/monthly scales).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Scale | Daily charts or shorter time frames (use diving board for weekly/monthly) |
| Price trend | Upward leading into the pattern; ignore potholes in a downtrend (unless part of a downward retrace within an uptrend) |
| Shape | A flat road (horizontal move) followed by a dip, then a rise out the top |
| Flat base | Prices along the base are horizontal or nearly so, resting on support with lots of overlap ("tight," not loose) |
| Pothole | A drop below the flat base — can be a one-day plunge or last a few weeks |
| Breakout / confirmation | Price closes above the top of the pattern (upward breakout confirms; a downward breakout means no valid pattern) |

## Detection Rules (computable)

Definitions: `road` = a run of `W` bars of tight, overlapping price on support; `base_low`
= lowest low of the road; `pattern_top` = highest high of the whole pattern (peak `A`);
`pothole_low` = lowest low `B` of the dip after the road.

- **R1 [B]** Prior trend up into the road: `close[road_start] > close[road_start + N]` (default `N = 20` [D]).
- **R2 [D]** Flat road: over the last `W` bars (default `W = 26`, the median width [B]), the base is horizontal — `(max(low) - min(low)) / min(low) <= 0.03` across the road (default 3%).
- **R3 [D]** Road rests on support: at least 2 lows touch within `0.5%` of `base_low` (default overlap check).
- **R4 [B]** Pothole dip: after the road, `low` drops below the road base (`pothole_low < base_low`); the plunge may last one bar or several weeks.
- **R5 [B]** Recovery/breakout: price closes above the pattern top (`close > pattern_top`) — this confirms the pattern.
- **R6 [D]** Pattern height ≥ 8% of breakout price for best performance: `(pattern_top - pothole_low) / breakout_price >= 0.08` (median height [B]; use as a quality filter).

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > pattern_top` (a close above the
highest peak `A` in the pattern). Bulkowski suggests a buy stop a penny above the pattern
top. A downward breakout invalidates the pattern. Break-even failure rate is only 9%.

## Targets & Stops

- Measure rule: `height = pattern_top(A) - pothole_low(B)`; `target = pattern_top + height`
  (full height added to the top). Target is met 86% of the time.
- Stop: the bottom of the flat base (roadway) serves as a good stop location.

## Performance

| Metric | Value (bull market, up breakout) |
|---|---|
| Overall rank | Not formally ranked; would be 4 of 40 (1 = best) |
| Break-even failure rate | 9% |
| Average rise | 51% |
| Throwback rate | 66% |
| % meeting price target | 86% |

Statistics based on 755 perfect trades. Best-performing potholes: act as a retrace within an
uptrend; appear early in the trend (trend start-to-pattern shorter than the 142-day median);
break out within the lowest third of the yearly price range (bottom-fishing beats momentum);
are taller than the 8% median height; and are wider than the 26-day median. The depth of the
plunge and the time-to-breakout are NOT significant to performance.

## Trading Tactics

- Only trade potholes in an uptrend; skip them in downtrends.
- Enter on a buy stop a penny above the pattern top (or on the confirming close above it).
- Place the stop at the bottom of the flat base.
- Prefer tall (>8%), wide (>26 day) potholes that appear early in the trend and near the yearly low.
- Potholes acting as an ABC-style retrace within an uptrend can lead to big gains.

## Pine Notes

- Feasibility: **moderate**. The flat-road detection (R2/R3) and pothole dip (R4) are the
  tricky parts; the confirming close above the pattern top (R5) is straightforward and
  non-repainting once `pattern_top` is fixed at the road's end.
- Suggested inputs: road width `W` (default 26), road flatness tolerance %, trend lookback
  `N`, minimum height % (R6, default 0.08), support-touch tolerance.
- Fix `pattern_top` as the highest high of the road once the dip begins; fire the alert on
  the first bar closing above it. Avoid re-deriving the top after breakout (would repaint).
- Subjective element: deciding where the "road" starts/ends and whether the dip qualifies as
  a pothole vs. normal noise — expose width and flatness as inputs.
