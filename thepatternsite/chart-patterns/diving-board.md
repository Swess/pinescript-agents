---
id: diving-board
name: Diving Board
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 20, typical: 41}
confirmation: required
rank: {value: 1, of: 3}
stats:
  break_even_failure_rate: 0.04
  avg_move: 0.73
  throwback_rate: 0.71
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/DivingBoard.html
accessed: 2026-07-16
---

# Diving Board

## Overview

A Bulkowski-discovered pattern (studied on the weekly scale): price forms a flat base (the
"diving board"), then makes a straight-line plunge down (diving into the water), then
recovers in a straight-line run back up and above the base. It is a bullish setup — buy on
a close above the top of the pattern.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Scale | Weekly price chart (studied there; daily works but performance varies) |
| Price trend | Flat or upward trend leading in (downtrends removed) |
| Diving board | Flat bottom base — price lows line up horizontally with few outliers; the top can be any shape |
| Plunge | A straight-line (or nearly) drop down; median drop from board bottom to plunge low ~14% |
| 2nd plunge | Avoid patterns making a second, lower plunge |
| Recovery | After the drop, price recovers, often in a straight-line run upward |
| Width | Median width (board start to plunge low) ~204 days (~7 months) |

## Detection Rules (computable)

Definitions: `board` = a flat congestion region; `plunge_low` = lowest low after the board;
`board_bottom` = min low of the base; `board_top` = max high of the base.

- **R1 [B]** Prior trend not down: `close >= close[N]` at board start (default `N = 20` [D]).
- **R2 [B]** Flat base: lows over the board window vary little — `(max(low) - min(low)) / min(low) <= 0.05` across `>= boardLen` bars (default 5% [D]; median board is wide).
- **R3 [B]** Plunge: a straight-line drop from `board_bottom` to `plunge_low` of at least 14% — `(board_bottom - plunge_low) / board_bottom >= 0.14`.
- **R4 [D]** Plunge is steep/monotone: few up-bars during the drop (default: `>= 70%` down-closes over the plunge span).
- **R5 [B]** No second lower plunge before recovery: `plunge_low` is the single lowest point.
- **R6 [D]** Height filter (best performers): `(board_top - plunge_low) / board_top > 0.27`.
- **R7 [B]** Confirmation: `close > board_top` (see below).

## Confirmation & Breakout

Breakout is **upward** by definition. Buy signal: `close > board_top` (a close above the
top of the pattern). Gain from there to the ultimate high averages 73%. Entering earlier —
on the recovery from the plunge low — is higher risk.

## Targets & Stops

- No published measure-rule multiplier. Bulkowski reports the average rise from the
  breakout (close above pattern top) to the ultimate high is 73%.
- Reference target: `target = board_top * 1.73` as a rough average-move projection [D].
- Ride-back tendency: price returns to the diving-board bottom 71% of the time — a
  reasonable stop reference is below `board_bottom`.
- Hold as long as the uptrend continues (Bulkowski uses a 20% trend-change threshold).

## Performance

| Metric | Value (weekly, bull market) |
|---|---|
| Overall rank | 1 of 3 (best) |
| Break-even failure rate | 4% |
| Average rise | 73% |
| Ride-back to board bottom | 71% |

Based on 760 perfect trades with upward breakouts (weekly scale, 1990–2019). Notable:
wider boards (>204 days) averaged 80% gains vs 67% for narrower; taller patterns
(height/top > 27%) perform best. The plunge often forms a descending or symmetrical
triangle.

## Trading Tactics

- Preferred (lower risk): wait for a close above the pattern top, then buy and hold for a
  year or two while the uptrend holds.
- Prefer wider and taller patterns.
- Avoid patterns with a second, lower plunge.
- Early entry on the recovery (e.g. break of a down-sloping plunge trendline) is possible
  but high risk.

## Pine Notes

- Feasibility: **moderate**. The flat base (R2) and plunge (R3–R4) are measurable; the
  "straight-line" quality is the subjective part — approximate with a down-close ratio.
- Best on the weekly timeframe; expose a timeframe caveat since stats are weekly-only.
- Confirmation (`close > board_top`) is unambiguous and non-repainting; fire the alert
  there. Detecting the board top requires scanning the base window (`ta.highest` over the
  base span).
- Suggested inputs: board window length, flat-base tolerance % (R2), min plunge % (R3),
  down-close ratio (R4), height filter % (R6), trend-lookback `N` (R1).
