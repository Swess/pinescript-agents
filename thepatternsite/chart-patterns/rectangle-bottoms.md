---
id: rectangle-bottoms
name: Rectangle bottoms
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 8, of: 39}
stats:
  break_even_failure_rate: 0.15
  avg_move: 0.48
  throwback_rate: 0.64
  pct_meeting_target: 0.79
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/rectbots.html
accessed: 2026-07-16
---

# Rectangle bottoms

## Overview

A rectangle bottom is a horizontal trading range that price enters from the top (after a
downtrend), bouncing between two near-horizontal parallel trendlines. The breakout can be
either direction (upward 59% of the time) and only the confirming close outside a trendline
validates the direction. Upward breakouts are good performers.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading into the pattern |
| Shape | Flat tops and flat bottoms; price crosses side to side between two parallel trendlines |
| Trendlines | Two near-horizontal trendlines bound the price action |
| Touches | At least 3 touches of one trendline and 2 of the other (5-touch minimum), using distinct peaks and valleys |
| Volume trend | Trends downward at least 71% of the time |
| Breakout | Upward 59% of the time |

## Detection Rules (computable)

Definitions: `top` = resistance level (avg of the range highs); `bot` = support level (avg of
the range lows) over a window of `W` bars; a "touch" = a bar high within tolerance of `top`
or a bar low within tolerance of `bot`.

- **R1 [B]** Prior trend down: `close < close[W + N]` into the pattern (default `N = 20` [D]).
- **R2 [D]** Flat top: range highs cluster — `stdev(high, W) / top <= 0.02` (default; near-horizontal).
- **R3 [D]** Flat bottom: range lows cluster — `stdev(low, W) / bot <= 0.02` (default; near-horizontal).
- **R4 [B]** At least 5 trendline touches: `top_touches >= 3 and bot_touches >= 2` (or vice-versa), touch tolerance `<= 1%` of price [D].
- **R5 [D]** Parallel/near-horizontal: `abs(top_slope)` and `abs(bot_slope)` ≈ 0 over `W` (default: slope within ±0.1% per bar).
- **R6 [B]** Breakout: `close > top` (upward) or `close < bot` (downward) — validates the pattern and its direction.

## Confirmation & Breakout

Breakout can be **either direction**; wait for a close outside a trendline before trading.
Upward breakouts occur 59% of the time. A partial rise (price leaves the bottom trendline,
turns before reaching the top) predicts a downward breakout 75% of the time; a partial
decline predicts an upward breakout 77% of the time.

## Targets & Stops

- Measure rule: `height = top - bot`. Upward: `target = top + 0.79 * height`. Downward:
  `target = bot - 0.55 * height` (using the up/down percentage-meeting-target figures).
- Intrapattern: if tall enough, buy at the bottom trendline / sell at the top, then reverse.
- Throwbacks/pullbacks hurt post-breakout performance; avoid trendline resistance overhead.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 8 of 39 | 14 of 36 |
| Break-even failure rate | 15% | 24% |
| Average move | 48% rise | 16% decline |
| Throwback / pullback rate | 64% | 66% |
| % meeting price target | 79% | 55% |

Statistics based on more than 900 perfect trades (bull market). Tall patterns with upward
breakouts substantially outperform short ones. Rectangles with a rising volume trend
outperform regardless of direction. Breakouts within a third of the yearly low perform best.
Busted rectangle bottoms work well.

## Trading Tactics

- Wait for a close outside a trendline before taking a position (either direction possible).
- Prefer tall rectangles with upward breakouts and a rising volume trend.
- Watch partial rises/declines — they forecast the opposite-direction breakout.
- Avoid trades where overhead down-sloping trendline resistance could cap the move.
- Favor breakouts near the yearly low.

## Pine Notes

- Feasibility: **moderate**. Requires fitting two horizontal trendlines and counting distinct
  touches over a window; the breakout close (R6) is straightforward and non-repainting.
- Suggested inputs: window `W`, flatness tolerance % (R2/R3), touch tolerance %, min touch
  counts (R4), trend lookback `N`, target multipliers (0.79 up / 0.55 down).
- Distinct-peak/valley touch counting (R4) is the subjective part — require pivots separated
  by a minimum bar gap so noise bars don't inflate the count.
- The support/resistance levels can be tracked with rolling `ta.highest`/`ta.lowest` over `W`.
