---
id: outside-days
name: Outside Days
aliases: [Outside Day]
category: small-pattern
type: continuation
direction: either
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 6, of: 23}
stats:
  break_even_failure_rate: 0.32
  avg_move: 0.10
  throwback_rate: null
  pct_meeting_target: 0.82
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/OutsideDays.html
accessed: 2026-07-16
---

# Outside Days

## Overview

A two-bar pattern where the second bar engulfs the first: a higher high AND a lower low, so
the second bar's range fits entirely outside the prior day's range. No inbound trend is
required. It acts as a continuation 63% of the time, so expect a breakout in the inbound-trend
direction. Headline stats are for upward breakouts in a bull market (rank 6 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | No trend requirement (trend is up 53% of the time) |
| Length | Two bars |
| Shape | Second bar has a higher high AND a lower low — it engulfs the first bar's range |
| First bar | Cannot be a four-price doji (open = high = low = close) |
| Half-staff | Often forms midway in a trend, like a flag or pennant |

## Detection Rules (computable)

Bars indexed `bar1 = [1]`, `bar2 = [0]` (current).

- **R1 [B]** Outside day: `high[0] > high[1] and low[0] < low[1]`.
- **R2 [B]** First bar has a real range: `high[1] != low[1]` (excludes four-price doji).
- **R3 [D]** (Optional trend context) inbound trend via `close[1]` vs `close[11]` to label continuation vs reversal; not required for detection.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the two-bar
range. Acts as a continuation 63% of the time (bull, up) — trade with the inbound trend.

## Targets & Stops

- Height: `height = high[0] - low[0]` (the engulfing second bar defines the pattern range).
- Up target: `top + height`; down target: `bottom - height`. Met **82%** (bull, up breakout).
- Stop: beyond the opposite side of the pattern, or a fixed % stop [D].

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 32% | +10% | 82% |
| Bull, down | 40% | -8% | 73% |
| Bear, up | 28% | +11% | 75% |
| Bear, down | 21% | -16% | 78% |

Measure rule works best when the breakout agrees with the market trend (78-82%) vs contra-trend
(73-75%). Half-staff position averages ~50% (midway in the trend). Performance has decayed over
time: avg up-breakout gain 10.2% (1990s) → 10.0% (2000s) → 8.9% (2010s) — "13% harder to make
money today." Only appears in the first edition of the Encyclopedia.

## Trading Tactics

- Trade in the breakout direction, favouring continuation of the inbound trend.
- Go long in bull markets, short in bear markets — contra-trend trades weaken the measure rule.
- The measure rule is strong (82% bull, up) — a reliable target-setting edge.

## Pine Notes

- Feasibility: **easy**. Classic engulfing-range test (`high[0] > high[1] and low[0] < low[1]`),
  no trend requirement, no pivots. Fire on the confirming breakout close.
- Suggested inputs: target multiplier, stop mode, optional trend-context filter for
  continuation-only trades.
- Exclude four-price dojis on the first bar (R2). Note this is the price-only outside day, not
  the candlestick engulfing pattern (no open/close body test here).
