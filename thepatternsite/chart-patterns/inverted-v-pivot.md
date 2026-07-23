---
id: inverted-v-pivot
name: Inverted V Pivot
aliases: []
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: required
rank: null
stats:
  break_even_failure_rate: 0.11
  avg_move: 0.19
  throwback_rate: null
  pct_meeting_target: 0.41
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/InvVPivot.html
accessed: 2026-07-16
---

# Inverted V Pivot

## Overview

A 3-bar pattern (based on Vicky Wong's V pivot, flipped) studied on the weekly scale: the
middle bar's high towers above its two neighbors, forming an inverted V. It usually appears
after an uptrend (63%) and marks the end of a short-term uptrend — a bearish reversal that
confirms on a close below the lowest of the three bars.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Scale | Weekly chart |
| Price trend | Upward leading in 63% of the time |
| Shape | Inverted V — middle bar (2) high above the adjacent bars (1, 3) |
| Percentages | Bar 2 high at least 2% above the highs of bars 1 and 3 |
| Confirmation | Price closes below the lowest price of the three bars |

## Detection Rules (computable)

Definitions: three consecutive bars `bar1 = [2]`, `bar2 = [1]`, `bar3 = [0]` (the center is
the peak).

- **R1 [B]** Center peak: `high[1] > high[2]` and `high[1] > high[0]`.
- **R2 [B]** 2% minimum on each side: `high[1] >= high[2] * 1.02` and `high[1] >= high[0] * 1.02`.
- **R3 [D]** Prior trend up: `close[2] > close[N+2]` (default `N = 10` [D]; Bulkowski: 63% follow an uptrend).
- **R4 [B]** Confirmation: a later close below `min(low[0], low[1], low[2])` (see below).

## Confirmation & Breakout

Breakout is **downward**. The pattern confirms when price closes below the lowest low of
the three bars. Bulkowski suggests placing a short order a penny below the lowest bar to
reduce slippage.

## Targets & Stops

- Height: `H = high[1] (A) - min(low of the 3 bars) (B)`.
- Target (down): `target = B - 0.41 * H` (price reaches the full-height target only 41% of
  the time, so be conservative) — a conservative variant uses the 0.41 multiplier.
- Stop: above the center peak high (`A`).

## Performance

| Metric | Value (weekly, bull market) |
|---|---|
| Overall rank | Not ranked (would tie for first of three weekly patterns) |
| Break-even failure rate | 11% |
| Average drop | 19% |
| % meeting price target | 41% |

Based on almost 1,400 perfect trades (weekly scale). The pattern is prolific (Bulkowski
catalogued only 1 in 5). It usually reverses an uptrend but can also mark a continuation of
a downtrend.

## Trading Tactics

- Short a penny below the lowest of the three bars to enter with less slippage.
- Be conservative with targets — the full-height target is met only 41% of the time.
- Place the stop above the center-bar high.

## Pine Notes

- Feasibility: **easy**. Pure 3-bar arithmetic on `high`/`low` — no pivot lag, no
  trendlines. The center bar is fully known on the bar after it forms.
- Confirmation (`close < min(low[0..2])`) is non-repainting; fire the alert on that close.
- Studied on the weekly timeframe — expose a timeframe caveat since stats are weekly-only.
- Suggested inputs: side-percentage threshold (default 2%, R2), trend-lookback `N` (R3),
  target multiplier (0.41).
