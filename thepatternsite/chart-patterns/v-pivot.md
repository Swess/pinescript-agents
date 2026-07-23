---
id: v-pivot
name: V Pivot
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: required
rank: null
stats:
  break_even_failure_rate: 0.08
  avg_move: 0.55
  throwback_rate: null
  pct_meeting_target: 0.74
  reversal_rate: 0.51
  frequency_rank: null
source: https://thepatternsite.com/VPivot.html
accessed: 2026-07-16
---

# V Pivot

## Overview

A 3-bar pattern (identified by Vicky Wong, a modified horn bottom) studied on the weekly
scale: the middle bar's low dips below its two neighbors, forming a V. It is reliable at
calling bottoms — 51% mark the end of the prior downtrend — and confirms on a close above
the highest of the three bars.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Scale | Weekly chart |
| Price trend | Random; 51% act as reversals of the prior downtrend |
| Shape | V — middle bar (2) low below the adjacent bars (1, 3) |
| Percentages | Low of bar 1 and low of bar 3 each at least 2% above the low of bar 2 |
| Confirmation | Price closes above the highest price of the three bars |

## Detection Rules (computable)

Definitions: three consecutive bars `bar1 = [2]`, `bar2 = [1]`, `bar3 = [0]` (the center is
the trough).

- **R1 [B]** Center trough: `low[1] < low[2]` and `low[1] < low[0]`.
- **R2 [B]** 2% minimum on each side: `low[2] >= low[1] * 1.02` and `low[0] >= low[1] * 1.02`.
- **R3 [D]** Prior trend down: `close[2] < close[N+2]` (default `N = 10` [D]; 51% reverse a downtrend).
- **R4 [B]** Confirmation: a later close above `max(high[0], high[1], high[2])` (see below).

## Confirmation & Breakout

Breakout is **upward**. The pattern confirms when price closes above the highest high of
the three bars. Enter long on (or a tick above) that close.

## Targets & Stops

- Height: `H = max(high of the 3 bars) (B) - low[1] (A)`.
- Target (up): `target = B + H` (full-height target reached 74% of the time).
- Stop: below the center-bar low (`A`).

## Performance

| Metric | Value (weekly, bull market) |
|---|---|
| Overall rank | Not ranked (would place third of four weekly patterns) |
| Break-even failure rate | 8% |
| Average rise | 55% |
| % meeting price target | 74% |
| Acting as reversal | 51% |

Based on almost 1,400 perfect trades (weekly scale). Post-breakout performance is
notably strong for such a simple pattern.

## Trading Tactics

- Enter long on a close above the highest of the three bars.
- Full-height target is met 74% of the time.
- Place the stop below the center-bar low.

## Pine Notes

- Feasibility: **easy**. Pure 3-bar arithmetic on `high`/`low` — no pivot lag, no
  trendlines. The center bar is known on the bar after it forms.
- Confirmation (`close > max(high[0..2])`) is non-repainting; fire the alert on that close.
- Studied on the weekly timeframe — expose a timeframe caveat since stats are weekly-only.
- Suggested inputs: side-percentage threshold (default 2%, R2), trend-lookback `N` (R3).
