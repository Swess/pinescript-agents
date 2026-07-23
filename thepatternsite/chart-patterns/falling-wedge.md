---
id: falling-wedge
name: Falling Wedge
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 30}
confirmation: required
rank: {value: 31, of: 39}
stats:
  break_even_failure_rate: 0.26
  avg_move: 0.38
  throwback_rate: 0.62
  pct_meeting_target: 0.62
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/fallwedge.html
accessed: 2026-07-16
---

# Falling Wedge

## Overview

Price follows two down-sloping, converging trendlines. It can appear after any trend and
breaks out upward 68% of the time. Bulkowski rates it a poor performer overall — high
break-even failure and modest average rise — with only the bear-market downward-breakout
variation working reasonably.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be any direction leading in |
| Shape | Two down-sloping and converging trendlines |
| Touches | At least five trendline touches (3 on one line, 2 on the other) for a good pattern |
| Duration | 3 weeks minimum, otherwise it is a pennant |
| Volume trend | Downward 72%–75% of the time until breakout |
| Breakout | Any direction; upward 68% of the time |
| Confirmation | Price closes outside one of the trendlines |

## Detection Rules (computable)

Definitions: fit an upper trendline through swing highs and a lower trendline through swing
lows via `ta.pivothigh/low`.

- **R1 [B]** Both trendlines slope down: upper-line slope `< 0` and lower-line slope `< 0`.
- **R2 [B]** Trendlines converge: the vertical gap `upper - lower` narrows over the pattern (later gap < earlier gap).
- **R3 [B]** At least 5 total touches: `>= 3` on one line and `>= 2` on the other.
- **R4 [B]** Duration `>= 15` bars (~3 weeks of daily bars; minimum to avoid a pennant).
- **R5 [D]** Volume trends down: `ta.linreg(volume, patternLen, 0)` slope `< 0` (Bulkowski 72–75%; optional filter).
- **R6 [B]** Confirmation: `close` outside one of the two trendlines (see below).

## Confirmation & Breakout

The pattern confirms when `close` moves outside one of the converging trendlines. Direction
is **upward 68%** of the time. Wait for the confirming close before taking a position.

## Targets & Stops

- Conservative (up breakout): target = highest peak in the pattern (`A`).
- Measure rule: `H = highest_peak_high (A) - lowest_valley_low (B)`;
  `target_up = breakout_price + 0.62 * H` (62% met), `target_down = breakout_price - 0.29 * H` (29% met).
- Breakout typically occurs ~61%–62% of the way to the apex.
- Stop: beyond the opposite trendline.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 31 of 39 | 27 of 36 |
| Break-even failure rate | 26% | 29% |
| Average move | 38% rise | 14% decline |
| Throwback / pullback rate | 62% | 74% |
| % meeting price target | 62% | 29% |

Based on over 800 perfect trades (bull market). Notable: tall patterns beat short ones; an
upward breakout gap and heavy breakout-day volume improve upward-breakout performance.
After a downward breakout, price sometimes curls around the wedge front and soars (busted
pattern) — a long opportunity.

## Trading Tactics

- Wait for a close outside a trendline before entering.
- Prefer tall patterns and upward breakouts with a gap and heavy breakout-day volume.
- Watch for busted downward breakouts that reverse and soar (long opportunity).
- Expect frequent throwbacks/pullbacks that hurt performance.

## Pine Notes

- Feasibility: **moderate**. Trendline fitting through pivots is the core work; converging
  down-sloping lines (R1–R2) and the 5-touch rule (R3) are approximable but sensitive to
  pivot length.
- Pivot detection (`ta.pivothigh/low(len, len)`) lags by `len` bars; anchor signals only to
  the confirming close (R6) to avoid repaint.
- Suggested inputs: pivot length, min touches (R3), min duration bars (R4), volume-slope
  toggle (R5), target multipliers (0.62 / 0.29).
- Distinguishing a falling wedge from a pennant hinges on duration (R4) and touch count.
