---
id: v-bottoms
name: V-Bottoms
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 15, typical: 30}
confirmation: required
rank: {value: 24, of: 39}
stats:
  break_even_failure_rate: 0.19
  avg_move: 0.40
  throwback_rate: 0.55
  pct_meeting_target: 0.52
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/vBottoms.html
accessed: 2026-07-16
---

# V-Bottoms

## Overview

A V-bottom is a straight-line downward run that reverses sharply into a straight-line rise,
forming a V. It is a bullish reversal; the breakout is defined as price retracing 38.2% of
the left-side drop. Computer-detected (to avoid selection bias), so its guidelines reflect
that automation.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Downtrend | Straight-line run down with few/no pauses, often within a channel |
| Width | At least 3 weeks to 3 months |
| Reversal | Bottom forms a one-day reversal, island reversal, or tail, usually on heavy volume, perhaps gapping up |
| Trendline | After the reversal, price pierces a down-sloping trendline along the tops |
| Retrace | Right side must retrace at least 38.2% of the left-side drop |
| Breakout | The 38.2% retrace point is the breakout |
| No pause | No pause between the V and the breakout (else it is an extended V-bottom) |
| No spike | V-bottoms with a single long price bar as the bottom are excluded |
| Angle | Right-side rise often mirrors the left-side drop angle |

## Detection Rules (computable)

Definitions: `A` = left-side high (trend start / pattern top), `B` = the V low.

- **R1 [B]** Straight-line drop into `B`: mostly down-closes from `A` to `B` (default `>= 70%` down-closes [D]).
- **R2 [B]** Width from `A` to `B` is `>= 15` bars (3 weeks) and `<= 65` bars (3 months) [B/D].
- **R3 [B]** No long spike at the low: `B` bar range `<= 2 * ta.atr(14)` (default; excludes single-bar spikes [D]).
- **R4 [B]** Right side retraces at least 38.2% of the drop: `close >= B + 0.382 * (A - B)`.
- **R5 [D]** No pause on the rise before the 38.2% retrace: mostly up-closes from `B` to the retrace point (else it is an extended V-bottom).
- **R6 [B]** Breakout = the bar where R4 first becomes true.

## Confirmation & Breakout

Breakout is **upward** and is defined as price closing at or above the 38.2% retrace of the
left-side drop: `close >= B + 0.382 * (A - B)`. Bulkowski suggests also waiting 2–3 days
for a down-trendline pierce to confirm the trend change.

## Targets & Stops

- Target: `A`, the high price at the start of the pattern (met 52% of the time).
- Full measure-rule height `H = A - B`; conservative target `A` is the published rule.
- Stop: below the V low `B`.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 24 of 39 |
| Break-even failure rate | 19% |
| Average rise | 40% |
| Throwback rate | 55% |
| % meeting price target (target = A) | 52% |

Based on 1,997 perfect trades. Notable: tall patterns (height/breakout > 34.7%)
substantially outperform short ones; breakouts within a third of the yearly low perform
best; a rising volume trend helps; throwbacks hurt; inbound trend direction barely matters.

## Trading Tactics

- Entry: the 38.2% retrace of the left-side drop (arbitrary but used for the stats).
- Best to wait 2–3 days for a down-trendline pierce to confirm the reversal.
- Prefer tall patterns and breakouts near the yearly low.
- Check other stocks in the same industry — reversals often move as a group.
- Place the stop below the V low.

## Pine Notes

- Feasibility: **moderate**. The V low (`B`) requires pivot-low detection
  (`ta.pivotlow(len, len)`), which lags by `len` bars; the left-high `A` is the prior swing
  high or trend start.
- The 38.2% retrace breakout (R4) is a clean, non-repainting trigger once `A` and `B` are
  fixed — fire the alert there.
- Suggested inputs: pivot length, min/max width (R2), down-close ratio (R1), retrace %
  (default 0.382, R4), tall-pattern filter (34.7%).
- "Straight-line / no-pause / mirror-angle" tests are the subjective parts; approximate
  with close-direction ratios and ship as optional filters.
