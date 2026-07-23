---
id: ascending-broadening-wedge
name: Ascending Broadening Wedge
aliases: [ABW, BWA]
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 60}
confirmation: required
rank: {value: 23, of: 39}
stats:
  break_even_failure_rate: 0.15
  avg_move: 0.41
  throwback_rate: 0.68
  pct_meeting_target: 0.61
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/abw.html
accessed: 2026-07-16
---

# Ascending Broadening Wedge

## Overview

A megaphone tilted upward: two up-sloping trendlines that diverge, with the top line
sloping more steeply than the bottom. It tends to disappear in bear markets; most often it
appears in a bull market and breaks out **downward 52% of the time**. Frontmatter stats
are for the upward-breakout case; both directions are detailed under Performance.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be up or down leading into the pattern |
| Shape | A megaphone tilted up |
| Trendlines | Both slope upward; the top line slopes more steeply than the bottom |
| Touches | At least three peaks and three valleys touch their respective trendline |
| Volume | Irregular but trends upward 66%-67% of the time |
| Breakout | Downward 52% of the time |

## Detection Rules (computable)

Definitions: fit an upper trendline through swing highs and a lower trendline through swing
lows using `ta.pivothigh`/`ta.pivotlow`.

- **R1 [B]** Both trendlines slope up: `slope_upper > 0` and `slope_lower > 0`.
- **R2 [B]** Top steeper than bottom: `slope_upper > slope_lower` (lines diverge upward).
- **R3 [B]** At least 3 touches each: `peak_touches >= 3` and `valley_touches >= 3`.
- **R4 [D]** Touch tolerance: a pivot "touches" if within `0.5%` of the trendline (default, adjustable).
- **R5 [D]** Widening confirmed: distance between trendlines at the right edge > distance at the left edge (megaphone opening).
- **R6 [B]** Pattern valid only on breakout close outside a trendline (see below).

## Confirmation & Breakout

Breakout occurs on a close outside a trendline (below the lower for a downward breakout,
above the upper for an upward breakout). Breakout is **downward 52%** of the time. A buy
stop a penny above the pattern high captures upward breakouts. Partial rises predict a
downward breakout (work 60% of the time); partial declines predict an upward breakout
(work 65% of the time).

## Targets & Stops

- Upward breakout: `target = peak_high + 0.61 * (peak_high - valley_low)` — height (highest
  peak A to lowest valley B) times 61%, added to the breakout price (A).
- Downward breakout: use the lowest valley in the pattern as the target.
- Stop: a penny below the lowest price bar in the pattern.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 23 of 39 | 33 of 36 |
| Break-even failure rate | 15% | 31% |
| Average move | 41% rise | 12% decline |
| Throwback / pullback rate | 68% | 62% |
| % meeting price target | 61% | 71% |

Based on 690 perfect trades. Notable: for upward breakouts, 81% act as continuations
(continuations average 42% vs 35% for reversals). For downward breakouts, 81% act as
reversals (continuations 13% vs reversals 12%). Upward-breakout failure rate is about half
the downward rate — Bulkowski recommends trading only the long side on an upward breakout.
Best performance: intermediate-term (3-6 month) move into the pattern for up breakouts;
short-term (<3 month) for down breakouts. Breakouts within a third of the yearly high (up)
or yearly low (down) do best. Throwbacks/pullbacks hurt.

## Trading Tactics

- Trade the long side and wait for an upward breakout (close above the top, or buy stop a penny above the high).
- Place the stop a penny below the lowest bar in the pattern.
- Do not short at the top trendline (the bottom slopes up) — instead go long when price bounces off the lower trendline (intraformation).
- Aggressive: buy on the third touch of the lower trendline as price begins rising.
- Look for busted downward breakouts that reverse and break out upward.
- Avoid patterns within a multi-peak cluster or late in a long trend.

## Pine Notes

- Feasibility: **hard**. Requires fitting two sloping trendlines to alternating pivots and
  counting touches — the most involved of the broadening family. Trendline fits update as
  new pivots confirm (`ta.pivothigh/low(len, len)`), so both detection and breakout lag by `len` bars.
- Suggested inputs: pivot length, touch tolerance % (R4), min touches (R3), target
  multiplier (0.61), breakout confirmation mode (close vs buy-stop).
- Trendline slope/steepness comparison (R2) and the megaphone-widening test (R5) are the
  sensitive parameters; expose slope tolerances.
- Direction is genuinely ambiguous until breakout — model both outcomes and fire on the
  bar of the first close outside a trendline.
