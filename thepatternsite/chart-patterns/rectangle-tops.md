---
id: rectangle-tops
name: Rectangle tops
aliases: [horizontal channel]
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 4, of: 39}
stats:
  break_even_failure_rate: 0.15
  avg_move: 0.51
  throwback_rate: 0.66
  pct_meeting_target: 0.78
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/recttops.html
accessed: 2026-07-16
---

# Rectangle tops

## Overview

A rectangle top (or horizontal channel) is a trading range that price enters from the bottom
(after an uptrend), bouncing between two near-horizontal parallel trendlines. The breakout can
be either direction (upward 63% of the time). Upward breakouts are exceptional performers;
downward breakouts perform terribly.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading into the pattern |
| Shape | Flat tops and flat bottoms; price crosses side to side between two parallel trendlines |
| Trendlines | Two near-horizontal trendlines bound the price action |
| Touches | At least 3 touches of one trendline and 2 of the other, using distinct peaks and valleys (be flexible) |
| Volume trend | Trends downward 70% of the time |
| Breakout | Upward 63% of the time |

## Detection Rules (computable)

Definitions: `top` = resistance level (avg of the range highs); `bot` = support level (avg of
the range lows) over a window of `W` bars; a "touch" = a bar high within tolerance of `top`
or a bar low within tolerance of `bot`.

- **R1 [B]** Prior trend up: `close > close[W + N]` into the pattern (default `N = 20` [D]).
- **R2 [D]** Flat top: range highs cluster — `stdev(high, W) / top <= 0.02` (default; near-horizontal).
- **R3 [D]** Flat bottom: range lows cluster — `stdev(low, W) / bot <= 0.02` (default; near-horizontal).
- **R4 [B]** At least 5 trendline touches: `top_touches >= 3 and bot_touches >= 2` (or vice-versa), touch tolerance `<= 1%` of price [D].
- **R5 [D]** Parallel/near-horizontal: `abs(top_slope)` and `abs(bot_slope)` ≈ 0 over `W` (default: slope within ±0.1% per bar).
- **R6 [B]** Breakout: `close > top` (upward) or `close < bot` (downward) — validates the pattern and its direction.

## Confirmation & Breakout

Breakout can be **either direction**; wait for a close outside a trendline before trading.
Upward breakouts occur 63% of the time. A partial rise predicts a downward breakout 75% of
the time; a partial decline predicts an upward breakout 79% of the time. Beware tall-bar/gap
breakouts (profit-taking can bust them) and delayed breakouts (proceed cautiously).

## Targets & Stops

- Measure rule: `height = top - bot`. Upward: `target = top + 0.78 * height`. Downward:
  `target = bot - 0.54 * height` (using the up/down percentage-meeting-target figures).
- Intrapattern: if tall enough, buy at the bottom trendline / sell at the top, then reverse.
- Throwbacks hurt post-breakout performance. Downward breakouts often produce a swift decline;
  price frequently finds footing at the launch price.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 4 of 39 | 32 of 36 |
| Break-even failure rate | 15% | 34% |
| Average move | 51% rise | 13% decline |
| Throwback / pullback rate | 66% | 64% |
| % meeting price target | 78% | 54% |

Statistics based on more than 1,000 perfect trades (bull market). Upward breakouts are
exceptional; downward breakouts perform terribly (rank 32 of 36). Tall patterns beat short
ones. Breakouts within a third of the yearly low perform best regardless of direction.

## Trading Tactics

- Wait for a close outside a trendline before taking a position (either direction possible).
- Strongly favor upward breakouts; treat downward breakouts with caution.
- Watch partial rises/declines — they forecast the opposite-direction breakout.
- On a tall-bar or gap breakout, verify the catalyst (e.g. earnings) — profit-taking can bust it.
- If the breakout is delayed while price sits at the top, proceed cautiously.
- Favor breakouts near the yearly low.

## Pine Notes

- Feasibility: **moderate**. Same trendline-fitting and touch-counting as rectangle bottoms;
  the breakout close (R6) is non-repainting once `top`/`bot` are fixed.
- Suggested inputs: window `W`, flatness tolerance % (R2/R3), touch tolerance %, min touch
  counts (R4), trend lookback `N`, target multipliers (0.78 up / 0.54 down).
- Distinct-peak/valley touch counting (R4) is the subjective part — require pivots separated
  by a minimum bar gap so noise bars don't inflate the count.
- Track support/resistance with rolling `ta.highest`/`ta.lowest` over `W`.
