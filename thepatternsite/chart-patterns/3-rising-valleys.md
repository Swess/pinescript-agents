---
id: 3-rising-valleys
name: 3 rising valleys
aliases: [Three rising valleys, 3RV]
category: chart-pattern
type: either
direction: bullish
bars: {min: 15, typical: 50}
confirmation: required
rank: {value: 6, of: 39}
stats:
  break_even_failure_rate: 0.10
  avg_move: 0.48
  throwback_rate: 0.66
  pct_meeting_target: 0.57
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/3rv.html
accessed: 2026-07-16
---

# 3 rising valleys

## Overview

Three valleys, each bottom above the prior one, appearing frequently in stocks and other
markets on daily or weekly charts. A very good bull-market performer that confirms only
when price closes above the highest peak in the pattern; because every down-to-up trend
change must post higher lows, it can flag a trend change early — though by confirmation
price may already be far off the bottom.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Chart | Appears on either the daily or weekly chart |
| Price trend | Usually upward leading to the pattern |
| Shape | Three valleys; the bottom of each valley must be above the prior one |
| Proportional | Each valley should look similar — all narrow or all wide, all short or all tall; don't mix |
| Volume | Trends downward 64% of the time |
| Confirmation | Price closes above the highest peak in the pattern |

## Detection Rules (computable)

Definitions: `valley1`, `valley2`, `valley3` = consecutive swing lows via
`ta.pivotlow(l, r)`; `highest_peak` = highest high between `valley1` and `valley3`.

- **R1 [B]** Valleys strictly rising: `low_v1 < low_v2 < low_v3`.
- **R2 [D]** Valleys are distinct swings: each pivot confirmed with left/right strength ≥ 3 bars (default, adjustable).
- **R3 [D]** Valley similarity (proportional): valley widths (bars within 1% of the pivot low) within a factor of 3 of each other; optional filter.
- **R4 [D]** Pattern span: `10 <= (bar_v3 - bar_v1) <= 100` (defaults; Bulkowski states no bounds).
- **R5 [B]** Optional volume filter: volume slope over the pattern is downward (`ta.linreg` slope of volume < 0); true 64% of the time, so keep optional.
- **R6 [B]** Pattern valid only on confirmation: `close > highest_peak` after `valley3`.

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: a close above the highest peak in the
pattern (`close > highest_peak`). Early-entry variant [B]: if the highest peak lies
between the first two valleys, draw a down-sloping trendline connecting the two highest
peaks in the pattern — a close above that trendline signals a buy before full
confirmation.

## Targets & Stops

- Target (measure rule): `target = highest_peak + 0.57 * (highest_peak - low_v1)` —
  height from highest peak to lowest valley, scaled by the 57% percentage-meeting-target.
- Stop: slightly below the last minor low (valley 3), e.g. `low_v3 * (1 - 0.005)` [D].

## Performance

Bull-market results (3,061 perfect trades):

| Metric | Value |
|---|---|
| Overall performance rank | 6 of 39 (1 = best) |
| Break-even failure rate | 10% |
| Average rise | 48% |
| Throwback rate | 66% |
| % meeting price target | 57% |

Notable: in a bear market the rise is just over half the bull-market figure. Patterns
breaking out within a third of the yearly high perform best; continuations beat
reversals; below-average breakout volume suggests better performance; and the farther up
the prevailing trend the pattern appears, the smaller the potential gain.

## Trading Tactics

- Buy on a close above the highest peak; or use the early-entry trendline buy when the
  highest peak sits between valleys 1 and 2.
- Stop slightly below valley 3.
- Prefer patterns breaking out within a third of the yearly high and acting as
  continuations of an existing uptrend.
- Below-average breakout volume is a plus, not a minus, for this pattern.
- Beware late entries: patterns far up a trend offer smaller gains, and throwbacks occur
  66% of the time.

## Pine Notes

- Feasibility: **moderate**. Three consecutive `ta.pivotlow` detections plus the highest
  high across the span; pivots confirm `len` bars late — signal only on the
  confirmation-close bar to avoid repainting.
- The proportional-valleys criterion (R3) is the most subjective; ship as an optional
  filter. R1 + R6 carry the pattern.
- Suggested inputs: pivot length, max pattern span (R4), volume-filter toggle (R5),
  early-entry trendline toggle, target multiplier (default 0.57).
- The early-entry trendline needs two peak pivots and a line projection — compute the
  line value per bar (`slope * (bar_index - bar_p1) + high_p1`) rather than using
  drawing objects for logic.
- Track valleys/peaks in `var` UDTs with `time` and `bar_index`; invalidate the sequence
  if price closes below `valley1` before confirmation.
