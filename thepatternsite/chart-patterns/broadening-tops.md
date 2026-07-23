---
id: broadening-tops
name: Broadening tops
aliases: [megaphone top, reverse symmetrical triangle]
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 22, of: 39}
stats:
  break_even_failure_rate: 0.18
  avg_move: 0.42
  throwback_rate: 0.67
  pct_meeting_target: 0.66
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/bt.html
accessed: 2026-07-16
---

# Broadening Tops

## Overview

A megaphone-shaped pattern that forms after an upward price trend: higher peaks and lower
valleys bounded by an up-sloping top trendline and a down-sloping bottom trendline. The
breakout can occur in either direction (upward 60% of the time). Bulkowski calls it a poor
performer — above-average failure rate and below-average post-breakout move.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the pattern (trend start is below the pattern's start) |
| Shape | Higher peaks and lower valleys — a megaphone shape |
| Trendlines | Top trendline slopes upward, bottom slopes downward, highlighting the broadening |
| Touches | At least five touches total: three peaks or three valleys touching one trendline, two or more touching the other; ideally the second of three touches actually touches (not just comes close) |
| White space | Price should cross the pattern from side to side, filling the area with movement |
| Breakout | Any direction (upward 60%); occurs when price pierces a trendline or moves above/below the end of the pattern |

## Detection Rules (computable)

Definitions: peaks `P1..Pn` via `ta.pivothigh(l, r)`, valleys `V1..Vn` via
`ta.pivotlow(l, r)`; `topline` = least-squares/two-point line through the peaks,
`botline` = line through the valleys.

- **R1 [B]** Prior trend up: `close` at pattern start above the close `N` bars earlier (default `N = 20` [D]).
- **R2 [B]** Higher peaks: each successive peak high exceeds the prior one: `high_P(k) > high_P(k-1)`.
- **R3 [B]** Lower valleys: each successive valley low is below the prior one: `low_V(k) < low_V(k-1)`.
- **R4 [B]** Trendline slopes diverge: slope of `topline > 0` and slope of `botline < 0`.
- **R5 [B]** Touch count: `>= 3` pivots on one trendline and `>= 2` on the other (total `>= 5`); a pivot "touches" if within `0.5%` of the line (tolerance [D]).
- **R6 [B]** White space: price crosses from one trendline to the other on each swing — no swing terminates more than `25%` of pattern height away from the far trendline (quantified default [D]).
- **R7 [D]** Pattern length between first and last touch: `15 <= bars <= 90` (defaults; length not specified by Bulkowski).

## Confirmation & Breakout

Breakout in **either direction** — upward 60% of the time. Trigger: price pierces a
trendline, or closes above the highest peak (`close > highest_peak_high`) / below the
lowest valley (`close < lowest_valley_low`) at the pattern's end. A partial decline
(price leaves the top trendline, heads down but does not touch the bottom line, then
reverses) predicts an immediate upward breakout 72% of the time; a partial rise predicts
a downward breakout 52% of the time.

## Targets & Stops

- Height: `height = highest_peak_high - lowest_valley_low`.
- Upward target: `target = highest_peak_high + height` (works 66% of the time), or the
  conservative form `highest_peak_high + 0.66 * height`.
- Downward target: `target = lowest_valley_low - height` (works 42% of the time), or
  `lowest_valley_low - 0.42 * height`.
- Stops: for slide-based tactics Bulkowski uses a stop a penny below the pattern's low
  (long trades); generically place stops just beyond the opposite trendline touch [D].

## Performance

Bull market results (1,215 perfect up-breakout trades, 804 down):

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank (1 = best) | 22 of 39 | 28 of 36 |
| Break-even failure rate | 18% | 27% |
| Average rise/decline | 42% | 13% |
| Throwback/pullback rate | 67% | 67% |
| % meeting price target | 66% | 42% |

Average bull-market move by decade: up breakouts 40% (1990s), 49% (2000s), 36% (2010s);
down breakouts 16%, 12%, 13%. Notable: throwbacks and pullbacks both hurt post-breakout
performance; downward breakouts near the yearly low perform best, upward breakouts prefer
the middle of the yearly range; best upward breakouts follow an intermediate-term
(3–6 month) rise into the pattern.

## Trading Tactics

- Measure rule: add the pattern height to the top (up breakouts) or subtract from the bottom (down breakouts); scale by the %-meeting-target figure for a conservative target.
- Intraformation trade: buy the rebound off the lower trendline, short the reversal at the top trendline.
- Buy at the third touch of the bottom trendline as price turns up (high-risk entry).
- Partial declines (72% reliable) let you enter long ahead of the upward breakout; partial rises (52%) hint at a downward breakout.
- Avoid: patterns after a long-term uptrend, a fast rise into the pattern, unusually tall patterns, multi-peak developments, and overhead resistance above the breakout.
- Win setups: busted downward breakouts (rare but strong), broadening top forming the right rim of a cup with handle.

## Pine Notes

- Feasibility: **hard**. Needs multi-pivot collection and trendline fitting on both sides,
  plus touch-tolerance logic; `ta.pivothigh/low` confirmation lag means the pattern is
  recognized well after the last touch — anchor signals to the breakout bar only.
- Suggested inputs: pivot length, touch tolerance % (R5), min touches per side, trend
  lookback N (R1), max pattern length (R7), target multipliers (0.66 up / 0.42 down).
- Store pivots in `var` arrays; fit trendlines from the first two touches per side and
  verify later touches against them, or refit and accept mild repaint of the drawn lines
  (keep alerts non-repainting by firing only on confirmed breakout closes).
- The "white space" rule (R6) is the most subjective; ship it as an optional filter.
- Partial rise/decline detection is valuable but tricky: it requires knowing the pattern
  is complete before the breakout — treat as a separate optional signal.
