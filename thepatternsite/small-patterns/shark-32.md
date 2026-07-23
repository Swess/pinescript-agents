---
id: shark-32
name: Shark-32
aliases: [Shark, Shark 32]
category: small-pattern
type: continuation
direction: either
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 18, of: 23}
stats:
  break_even_failure_rate: 0.32
  avg_move: 0.11
  throwback_rate: 0.64
  pct_meeting_target: 0.72
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/Shark32.html
accessed: 2026-07-16
---

# Shark-32

## Overview

A three-bar pattern of two consecutive inside days: each of the last two bars has a lower high
AND a higher low than the bar before it, forming a contracting "shark fin." No inbound trend is
required. It acts as a continuation 60% of the time, so expect a breakout in the inbound-trend
direction. Headline stats are for upward breakouts in a bull market (rank 18 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | No trend requirement (trend is up 52% of the time) |
| Length | Three bars |
| Shape | Two consecutively lower highs AND higher lows — two consecutive inside days |
| Last bar | Cannot be a four-price doji (open = high = low = close) |
| Symmetry | More symmetric patterns perform better |
| Half-staff | Often forms midway in a trend, like a flag or pennant |

## Detection Rules (computable)

Bars indexed `bar1 = [2]` (oldest), `bar2 = [1]`, `bar3 = [0]` (current).

- **R1 [B]** First inside day: `high[1] < high[2] and low[1] > low[2]`.
- **R2 [B]** Second inside day: `high[0] < high[1] and low[0] > low[1]`.
- **R3 [B]** Last bar has a real range: `high[0] != low[0]` (excludes four-price doji).

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the three-bar
pattern (top/bottom taken from the first/widest bar). Acts as a continuation 60% of the time —
trade with the inbound trend at the next open.

## Targets & Stops

- Height: `height = high[2] - low[2]` (the first, widest bar defines the pattern range).
- Up target: `top + height`; down target: `bottom - height`. Met **72%** (bull, up breakout).
- Stop: beyond the opposite side of the pattern, or a fixed % stop [D].

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 32% | +11% | 72% |
| Bull, down | 38% | -9% | 64% |
| Bear, up | 29% | +10% | 66% |
| Bear, down | 21% | -16% | 71% |

Throwback rate 64%. Measure rule works best when the breakout agrees with the market trend
(71-72%) vs contra-trend (64-66%). Performance has decayed over time: avg up-breakout gain 13%
(1990s) → 10% (2000s) → 9% (2010s). Only appears in the first edition of the Encyclopedia.

## Trading Tactics

- Trade in the breakout direction, favouring continuation of the inbound trend.
- Go long in bull markets, short in bear markets — contra-trend weakens the measure rule.
- Prefer symmetric shark patterns; they perform better.
- Expect frequent throwbacks (64%) before the main move.

## Pine Notes

- Feasibility: **easy**. Two stacked inside-day tests over three bars, no pivots, no trend
  requirement. Fire on the confirming breakout close.
- Suggested inputs: target multiplier, stop mode, optional trend-context filter for
  continuation-only trades, optional symmetry filter.
- Exclude four-price dojis on the last bar (R3). Symmetry (comparable contraction each side) is
  the one subjective criterion — ship it as an optional filter.
