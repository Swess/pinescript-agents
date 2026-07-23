---
id: inside-days
name: Inside Days
aliases: [Inside Day]
category: small-pattern
type: continuation
direction: either
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 10, of: 23}
stats:
  break_even_failure_rate: 0.32
  avg_move: 0.10
  throwback_rate: null
  pct_meeting_target: 0.80
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/InsideDays.html
accessed: 2026-07-16
---

# Inside Days

## Overview

A two-bar pattern where the second bar's high-low range fits entirely inside the first
bar's range (lower high and higher low). No inbound trend is required. It acts as a
continuation 62% of the time, so expect the breakout to follow the inbound trend. Headline
stats are for upward breakouts in a bull market (rank 10 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | No trend requirement (trend is up 53% of the time) |
| Length | Two bars |
| Shape | Second bar has a lower high AND higher low — it fits inside the first bar's range |
| Last bar | High and low cannot be equal (not a four-price doji) |
| Half-staff | Often forms midway in a trend, like a flag or pennant |

## Detection Rules (computable)

Bars indexed `bar1 = [1]`, `bar2 = [0]` (current).

- **R1 [B]** Inside day: `high[0] < high[1] and low[0] > low[1]`.
- **R2 [B]** Bar 2 has a real range: `high[0] != low[0]`.
- **R3 [D]** (Optional trend context) inbound trend via `close[1]` vs `close[6]` to label continuation vs reversal; not required for detection.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the two-bar
range. Bulkowski enters at the next open in the breakout direction. Acts as a continuation
62% of the time — trade with the inbound trend.

## Targets & Stops

- Height: `height = high[1] - low[1]` (first bar's range = pattern range).
- Up target: `top + height`; down target: `bottom - height`. Met **80%** (bull, up breakout) — high.
- Stop: a penny beyond the opposite side of the pattern, or a fixed 7% stop.

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 32% | +10% | 80% |
| Bull, down | 39% | -8% | 72% |
| Bear, up | 27% | +11% | 74% |
| Bear, down | 21% | -16% | 77% |

Continuations outperform reversals in every market/breakout combination. Performance has
decayed over time (avg up-breakout gain 11% in the 1990s → 9% in the 2010s). Height-exit
tests beat the benchmark in stocks but **underperform in ETFs and cryptocurrency**.

## Trading Tactics

- Trade in the breakout direction, favouring continuation of the inbound trend.
- The measure rule is unusually reliable (80% up, bull) — a strong edge for target setting.
- Best in stocks; avoid inside days in ETFs and cryptocurrencies.

## Pine Notes

- Feasibility: **easy**. Classic inside-bar test (`high[0] < high[1] and low[0] > low[1]`),
  no trend requirement, no pivots. Fire on the confirming breakout close.
- Suggested inputs: target multiplier, stop mode, optional trend-context filter for
  continuation-only trades.
- Watch data-feed inside-bar edge cases (equal highs/lows) — R2 excludes four-price dojis.
