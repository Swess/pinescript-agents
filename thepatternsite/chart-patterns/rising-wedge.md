---
id: rising-wedge
name: Rising Wedge
aliases: []
category: chart-pattern
type: either
direction: bearish
bars: {min: 15, typical: 35}
confirmation: required
rank: {value: 36, of: 36}
stats:
  break_even_failure_rate: 0.51
  avg_move: 0.09
  throwback_rate: 0.72
  pct_meeting_target: 0.32
source: https://thepatternsite.com/risewedge.html
accessed: 2026-07-16
---

# Rising Wedge

## Overview

A narrowing, rising triangle: price bounces between two up-sloping, converging trendlines
for at least three weeks. The breakout can go either way but is downward 60% of the time,
and Bulkowski calls it one of the worst performing chart patterns — downward breakouts have
unacceptably high failure rates and small post-breakout declines.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be any direction leading to the pattern |
| Shape | A narrowing and rising triangle shape |
| Trendlines | Price bounces between two up-sloping and converging trendlines |
| Touches | Price should touch each trendline at least five times total (3 touches of one trendline, 2 of the other) at minor highs/lows |
| Duration | 3 weeks minimum, otherwise it's a pennant |
| Volume trend | Trends downward 79% of the time until the breakout |
| Breakout | Any direction; downward 60% of the time |
| Confirmation | Valid when price closes outside one of the trendlines |

## Detection Rules (computable)

Definitions: `peaks[]` = swing highs via `ta.pivothigh(l, r)`, `valleys[]` = swing lows via
`ta.pivotlow(l, r)` inside the candidate window; `upper` = line fit through the peaks,
`lower` = line fit through the valleys; `slope(x)` = price change per bar of line `x`.

- **R1 [B]** Both trendlines slope upward: `slope(upper) > 0 and slope(lower) > 0`.
- **R2 [B]** Trendlines converge (narrowing): `slope(lower) > slope(upper)`, so channel width shrinks; require width at pattern end ≤ 60% of width at start (default 60% [D]).
- **R3 [B]** Touch count: ≥ 5 total trendline touches with ≥ 3 on one line and ≥ 2 on the other; a touch = pivot within `0.5%` of the line (tolerance default [D]).
- **R4 [B]** Duration ≥ 3 weeks: `(bar_end - bar_start) >= 15` bars (daily chart); max duration default 90 bars [D].
- **R5 [B]** Volume trends downward: slope of linear regression of `volume` over the pattern < 0 (true 79% of the time; ship as optional filter).
- **R6 [B]** Pattern valid only on confirmation: a close outside either trendline (see below).

## Confirmation & Breakout

Trigger: price **closes outside one of the trendlines** — `close < lower_line_value` (downward
breakout, 60% probability) or `close > upper_line_value` (upward breakout, 40%). The average
distance to an upward breakout is 67% of the way from pattern start to the trendline apex.

## Targets & Stops

- Down breakout target (measure rule): the lowest valley in the pattern —
  `target = lowest_low_in_pattern`. Alternative: `target = breakout_price - 0.32 * (highest_high - lowest_low)`
  (full height hit only 32% of the time).
- Up breakout target: `target = breakout_price + 0.63 * (highest_high - lowest_low)` (63% meet the full-height target).
- Stop: opposite side of the wedge — for shorts, above the most recent minor high inside the wedge [D].

## Performance

Bull market, more than 1,400 perfect trades:

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall performance rank | 32 of 39 | 36 of 36 (last) |
| Break-even failure rate | 19% | 51% |
| Average rise/decline | 38% | 9% |
| Throwback/pullback rate | 72% | 72% |
| % meeting price target | 63% | 32% |

Notable: downward breakouts fail more than half the time to drop even 5% (51% break-even
failure rate). Throwbacks and pullbacks hurt performance. Wide patterns perform better than
narrow ones (upward breakouts only). Upward breakouts may show weakness two weeks after the
breakout.

## Trading Tactics

- Wait for a close outside a trendline before taking a position — never anticipate.
- Downward breakouts: target the lowest valley in the pattern; expect a shallow decline (9% average).
- Expect a throwback/pullback 72% of the time — it hurts performance; consider waiting for it to complete.
- Prefer wide patterns over narrow ones for upward breakouts.
- Given the last-place down-breakout rank, treat short setups from this pattern with skepticism.

## Pine Notes

- Feasibility: **hard**. Requires fitting two converging trendlines to sequences of pivots
  and counting touches — the classic wedge-detection problem.
- Use `ta.pivothigh/low(len, len)`; pivots confirm `len` bars late, so trendline slopes are
  only known with lag. Confirm the pattern (and alert) only on the bar where `close` first
  crosses outside a line; anchoring to pivot bars repaints.
- Line fitting: simplest robust approach is connecting first/last qualifying pivots per side,
  then validating remaining pivots stay within touch tolerance (R3).
- Suggested inputs: pivot length, touch tolerance % (R3), min/max duration (R4), convergence
  ratio (R2), volume-filter on/off (R5), target multipliers (0.32 down / 0.63 up).
- Subjective criteria: "looks like a narrowing rising triangle" — R1+R2 approximate it; the
  touch count (R3) is the strongest objective filter.
