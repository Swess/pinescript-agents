---
id: right-angled-and-descending-broadening-formations
name: Right-angled and descending broadening formations
aliases: [RABFD]
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 19, of: 39}
stats:
  break_even_failure_rate: 0.21
  avg_move: 0.43
  throwback_rate: 0.64
  pct_meeting_target: 0.65
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/rabfd.html
accessed: 2026-07-16
---

# Right-Angled and Descending Broadening Formations

## Overview

A megaphone tilted downward: a horizontal top trendline with a down-sloping bottom
trendline, so valleys fall while peaks hold a flat resistance level. The leading price
trend can be up or down and the breakout can go either way (upward 64% of the time).
Bulkowski notes it roughly ties the ascending variety's 43% average bull-market rise, but
its 21% break-even failure rate is slightly above average.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be up or down leading to the pattern |
| Shape | A megaphone tilted down with the top horizontal |
| Trendlines | Top trendline horizontal; bottom trendline slopes downward |
| Touches | At least five touches total: three peaks or three valleys touching the associated trendline, two or more on the other; ideally the second of three touches actually touches |
| Breakout | Upward 64% of the time |

## Detection Rules (computable)

Definitions: peaks `P1..Pn` via `ta.pivothigh(l, r)`, valleys `V1..Vn` via
`ta.pivotlow(l, r)`; `topline` = horizontal line through peak highs, `botline` = line
through valley lows.

- **R1 [B]** Top horizontal: all peak highs within a band — `(max(peak_highs) - min(peak_highs)) / min(peak_highs) <= 0.01` (flatness tolerance 1% [D]).
- **R2 [B]** Bottom slopes downward: each successive valley low below the prior — `low_V(k) < low_V(k-1)`; fitted botline slope `< 0`.
- **R3 [B]** Touch count: `>= 3` pivots on one trendline and `>= 2` on the other (total `>= 5`); touch = pivot within `0.5%` of the line (tolerance [D]).
- **R4 [D]** Pattern length between first and last touch: `15 <= bars <= 90` (defaults; not specified by Bulkowski).
- **R5 [D]** No prior-trend requirement (Bulkowski: can be up or down); an optional trend-direction input can tag the pattern as reversal or continuation.

## Confirmation & Breakout

Breakout is upward 64% of the time. Trigger: a close above the horizontal top trendline
(`close > topline`) for upward breakouts, or a close below the down-sloping bottom
trendline for downward breakouts (the exact breakout point on the extended lower line is
often obvious only after the fact). A partial decline predicts an immediate upward
breakout 75% of the time; a partial rise predicts a downward breakout only 47% of the
time.

## Targets & Stops

- Height: `height = topline - lowest_valley_low`.
- Upward target: `target = topline + 0.65 * height` (65% of patterns meet the full-height target).
- Downward target: `target = lowest_valley_low - 0.51 * height` (51% meet the full-height target).
- Stops: for long trades place the stop just below the bottom of the pattern (Bulkowski's lesson trades stop out below the pattern low); `lowest_valley_low * (1 - 0.005)` [D].

## Performance

Bull market results (601 perfect up-breakout trades, 335 down):

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank (1 = best) | 19 of 39 | 18 of 36 |
| Break-even failure rate | 21% | 23% |
| Average rise/decline | 43% | 15% |
| Throwback/pullback rate | 64% | 69% |
| % meeting price target | 65% | 51% |

Average bull-market move by decade: up breakouts 35% (1990s), 53% (2000s), 35% (2010s);
down breakouts 16%, 13%, 17%. Notable: a rising volume trend gives the best post-breakout
performance; downward breakouts do best in the lowest third of the yearly range, upward
breakouts in the middle third; best patterns follow an intermediate-term (3–6 month)
trend into the pattern; fast rises into or within the pattern frequently precede failure.

## Trading Tactics

- Measure rule: height from the horizontal top trendline to the lowest valley, multiplied by the %-meeting-target figure; add to the horizontal line (up) or subtract from the lowest valley (down).
- Intraformation trade: buy at the bottom trendline as price turns up; sell/short at the horizontal trendline turn.
- Buy at the third touch of the bottom trendline as price begins rising.
- Partial decline (75% reliable) gives an early long entry; partial rise is unreliable here (47%).
- Watch for busted downward breakouts — price dropping out then soaring back above the top can precede strong rallies, but check overhead resistance first.
- Avoid: fast rises before or within the pattern, entries after long uptrends, stocks with a recent dead-cat bounce (avoid ~6 months), overhead resistance above the breakout.

## Pine Notes

- Feasibility: **moderate-hard**. The flat top is easy (test peak highs against a
  horizontal level); the down-sloping bottom needs trendline fitting across pivot lows.
  `ta.pivothigh/low` lag delays recognition — anchor entries/alerts to breakout closes.
- Suggested inputs: pivot length, top flatness tolerance % (R1), touch tolerance % (R3),
  min touches per side, max pattern length (R4), target multipliers (0.65 up / 0.51 down).
- Down breakout detection against the extended lower trendline is ambiguous in real time
  (Bulkowski notes it's often clear only in hindsight); a practical proxy is
  `close < lowest_valley_low` [D].
- Partial rise/decline alerts need the pattern complete (≥ 5 touches) before evaluating a
  swing that fails to reach the far trendline; ship as optional signals.
