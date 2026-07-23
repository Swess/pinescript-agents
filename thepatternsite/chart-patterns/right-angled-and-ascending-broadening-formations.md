---
id: right-angled-and-ascending-broadening-formations
name: Right-angled and ascending broadening formations
aliases: [RABFA]
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 18, of: 39}
stats:
  break_even_failure_rate: 0.15
  avg_move: 0.43
  throwback_rate: 0.68
  pct_meeting_target: 0.67
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/rabfa.html
accessed: 2026-07-16
---

# Right-Angled and Ascending Broadening Formations

## Overview

A megaphone tilted upward: a horizontal bottom trendline with an up-sloping top trendline,
so peaks rise while valleys hold a flat support level. Usually forms in a rising price
trend and can break out in either direction (upward 55% of the time). Bulkowski rates it
a mid-list bull-market performer, with downward breakouts slightly worse than upward.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be up leading to the pattern (74% have a rising price trend) |
| Shape | A megaphone tilted up with the bottom horizontal |
| Trendlines | Bottom trendline horizontal; top trendline slopes upward |
| Touches | At least five touches total: three peaks or three valleys touching the associated trendline, two or more on the other; ideally the second of three touches actually touches |
| Volume | Trends upward 62% to 63% of the time |
| Breakout | Upward 55% of the time |

## Detection Rules (computable)

Definitions: peaks `P1..Pn` via `ta.pivothigh(l, r)`, valleys `V1..Vn` via
`ta.pivotlow(l, r)`; `botline` = horizontal line through valley lows, `topline` = line
through peak highs.

- **R1 [B]** Prior trend up (74% of cases): `close` at pattern start above the close `N` bars earlier (default `N = 20` [D]); ship as an optional filter since 26% form in other trends.
- **R2 [B]** Bottom horizontal: all valley lows within a band — `(max(valley_lows) - min(valley_lows)) / min(valley_lows) <= 0.01` (flatness tolerance 1% [D]).
- **R3 [B]** Top slopes upward: each successive peak high above the prior — `high_P(k) > high_P(k-1)`; fitted topline slope `> 0`.
- **R4 [B]** Touch count: `>= 3` pivots on one trendline and `>= 2` on the other (total `>= 5`); touch = pivot within `0.5%` of the line (tolerance [D]).
- **R5 [D]** Pattern length between first and last touch: `15 <= bars <= 90` (defaults; not specified by Bulkowski).
- **R6 [B]** Optional volume filter: volume trend upward across the pattern (rises 62–63% of the time; regression slope of volume `> 0`).

## Confirmation & Breakout

Breakout is upward 55% of the time. Trigger: a close above the top trendline / above the
pattern's highest peak (`close > highest_peak_high`) for upward breakouts, or a close
below the horizontal bottom trendline (`close < botline`) for downward breakouts. A
partial decline predicts an immediate upward breakout 80% of the time; a partial rise
predicts a downward breakout 61% of the time.

## Targets & Stops

- Height: `height = highest_peak_high - botline`.
- Upward target: `target = highest_peak_high + 0.67 * height` (67% of patterns meet the full-height target).
- Downward target: `target = botline - 0.40 * height` (40% meet the full-height target).
- Stops: Bulkowski's lesson trades use a stop-loss a penny below the bottom of the pattern for longs; generically `botline * (1 - 0.005)` [D].

## Performance

Bull market results (551 up-breakout samples, 455 down):

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank (1 = best) | 18 of 39 | 25 of 36 |
| Break-even failure rate | 15% | 28% |
| Average rise/decline | 43% | 14% |
| Throwback/pullback rate | 68% | 63% |
| % meeting price target | 67% | 40% |

Average bull-market move by decade: up breakouts 41% (1990s), 50% (2000s), 36% (2010s);
down breakouts 16%, 13%, 14%. Notable: tall patterns beat short ones; wide patterns
perform well in both directions; a downward volume trend gives the best post-breakout
performance; breakouts within a third of the yearly low perform best in both directions;
throwbacks and pullbacks hurt performance; best patterns follow a short-term (< 3 month)
rise into the pattern.

## Trading Tactics

- Measure rule: height from highest peak to the horizontal trendline, multiplied by the %-meeting-target figure; add to the highest peak (up) or subtract from the horizontal line (down).
- Intraformation trade: buy at the horizontal trendline as price turns up; sell/short at the top trendline turn.
- Buy at the third touch of the horizontal trendline as price begins rising.
- Partial decline (80% reliable) is a strong early long entry; partial rise (61%) hints at a downward breakout.
- Prefer: breakouts near the yearly low, tall and wide patterns, downward volume trend, short-term rise into the pattern.
- Avoid: overhead resistance above the breakout, fast rises into the pattern, long uptrends preceding the pattern, multi-peak resistance.
- Watch for busted downward breakouts — they can precede strong rallies.

## Pine Notes

- Feasibility: **moderate-hard**. The flat bottom simplifies one side (test valley lows
  against a horizontal level) but the up-sloping top still needs trendline fitting across
  pivots; `ta.pivothigh/low` lag means recognition trails the last touch — fire alerts
  only on confirmed breakout closes.
- Suggested inputs: pivot length, bottom flatness tolerance % (R2), touch tolerance % (R4),
  min touches per side, max pattern length (R5), target multipliers (0.67 up / 0.40 down),
  optional volume-trend and prior-trend filters.
- Track valley lows in a `var` array; define `botline` as their average and validate each
  new valley against the band. Topline from first two peaks, verify later peaks.
- Partial rise/decline signals require the pattern to be established (≥ 5 touches) before
  the swing that fails to reach the far trendline — implement as a separate optional alert.
