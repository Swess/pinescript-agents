---
id: broadening-wedge-descending
name: Descending Broadening Wedge
aliases: [DBW]
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 60}
confirmation: required
rank: {value: 27, of: 39}
stats:
  break_even_failure_rate: 0.18
  avg_move: 0.39
  throwback_rate: 0.62
  pct_meeting_target: 0.83
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/dbw.html
accessed: 2026-07-16
---

# Descending Broadening Wedge

## Overview

A megaphone tilted downward: two down-sloping trendlines that diverge. Performance ranks
near the bottom of the list. Most often it appears in a bull market and breaks out
**upward 72% of the time**; downward breakouts are rare. Frontmatter stats are for the
upward-breakout case; both directions are detailed under Performance.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be up or down leading into the pattern |
| Shape | A megaphone tilted down |
| Trendlines | Both slope downward |
| Touches | At least five trendline touches total (three+ on one line, two+ on the other) at minor highs/lows; price cutting through a line does not count |
| Volume | Trends upward |
| Breakout | Upward 72% of the time |

## Detection Rules (computable)

Definitions: fit an upper trendline through swing highs and a lower trendline through swing
lows using `ta.pivothigh`/`ta.pivotlow`.

- **R1 [B]** Both trendlines slope down: `slope_upper < 0` and `slope_lower < 0`.
- **R2 [B]** Lines diverge: distance between trendlines at the right edge > distance at the left edge.
- **R3 [B]** At least 5 touches total: `peak_touches + valley_touches >= 5`, with `>=3` on one line and `>=2` on the other.
- **R4 [D]** Touch tolerance: a pivot "touches" if within `0.5%` of the trendline; a bar that pierces the line does not count (default, adjustable).
- **R5 [B]** Pattern valid only on breakout close outside a trendline (see below).

## Confirmation & Breakout

Breakout occurs on a close outside a trendline. Breakout is **upward 72%** of the time.
Partial declines predict an upward breakout and work **79%** of the time; partial rises
work only **36%** of the time (unreliable).

## Targets & Stops

- Upward breakout: use the highest peak (A) in the pattern as the target.
- Downward breakout: `target = valley_low - 0.32 * (peak_high - valley_low)` — height
  (highest peak A to lowest valley B) times the 32% percentage-meeting-target, subtracted
  from the lowest valley (B).
- Stop / intraformation: short at the top trendline as price heads down, cover at the
  lower trendline; buy on the third touch of the lower trendline as price rises.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 27 of 39 | 29 of 36 |
| Break-even failure rate | 18% | 35% |
| Average move | 39% rise | 13% decline |
| Throwback / pullback rate | 62% | 64% |
| % meeting price target | 83% | 32% |

Based on 757 perfect trades. Notable: up breakouts do best after a long-term (>6 month)
rise into the pattern. Both directions perform best when the breakout is within a third of
the yearly low. Downward breakouts favor a rising volume trend; upward breakouts do better
when volume trends down through the pattern. Pullbacks hurt performance; throwbacks show no
performance difference.

## Trading Tactics

- Favor the long side — 72% of breakouts are upward.
- Use partial declines (work 79%) as an upward-breakout signal; ignore partial rises (36%).
- Intraformation: short at the top trendline heading down, cover at the bottom; or buy the third lower-trendline touch as price rises.
- For up breakouts, prefer a long prior uptrend and a breakout near the yearly low.
- Consider that patterns after a long uptrend may be nearer the trend's end than its start.

## Pine Notes

- Feasibility: **hard**. Requires fitting two down-sloping trendlines and counting valid
  touches (excluding pierces). Trendline fits and breakout both lag by the pivot length
  (`ta.pivothigh/low(len, len)`).
- Suggested inputs: pivot length, touch tolerance % (R4), min touches (R3), down-breakout
  target multiplier (0.32), breakout confirmation mode.
- The "pierce doesn't count as a touch" rule (R4) and slope tests are the sensitive
  parameters; expose tolerances.
- Direction is ambiguous until breakout (though upward is 72% likely) — model both outcomes
  and fire on the bar of the first close outside a trendline.
