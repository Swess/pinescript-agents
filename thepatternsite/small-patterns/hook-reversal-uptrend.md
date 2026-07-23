---
id: hook-reversal-uptrend
name: Hook Reversal, Uptrend
aliases: [Hook Reversal]
category: small-pattern
type: reversal
direction: either
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 16, of: 23}
stats:
  break_even_failure_rate: 0.49
  avg_move: 0.06
  throwback_rate: null
  pct_meeting_target: 0.63
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/HRU.html
accessed: 2026-07-16
---

# Hook Reversal, Uptrend

## Overview

A two-bar pattern in a short-term uptrend: bar 2 is an inside day whose last bar opens near
its high and closes near its low, hinting at a bearish reversal. Bulkowski trades whichever
way price breaks out rather than assuming the reversal. 52% actually continue higher.
Headline stats are for downward breakouts in a bull market (rank 16 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Two bars |
| Trend | Short-term uptrend leading in |
| Inside day | Bar 1 makes a higher high AND lower low than bar 2 (bar 2 inside bar 1) |
| Open | Last bar's open within 25% of its intraday high |
| Close | Last bar's close within 25% of its intraday low |
| Range | Last bar's high and low cannot be equal |

## Detection Rules (computable)

Bars indexed `bar1 = [1]`, `bar2 = [0]` (current). `range0 = high[0] - low[0]`.

- **R1 [B]** Prior trend up: `close > close[5]` (5-day linear-regression uptrend; default `N = 5` [D]).
- **R2 [B]** Inside day: `high[1] > high[0] and low[1] < low[0]`.
- **R3 [B]** Bar 2 open near high: `(high[0] - open[0]) / range0 <= 0.25`.
- **R4 [B]** Bar 2 close near low: `(close[0] - low[0]) / range0 <= 0.25`.
- **R5 [B]** Bar 2 has a real range: `high[0] != low[0]`.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the pattern.
Bulkowski enters at the next open in the breakout direction. Reversal (down) breakout is the
thesis but only ~48% oblige.

## Targets & Stops

- Height: `height = highest_high - lowest_low` across the two bars.
- Down target: `bottom - height`; up target: `top + height`. Met 63% (bull, down breakout).
- Stop: a penny beyond the opposite side of the pattern, or a fixed 7% stop.

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 44% | +7% | 69% |
| Bull, down | 49% | -6% | 63% |
| Bear, up | 39% | +8% | 62% |
| Bear, down | 31% | -11% | 67% |

Height-exit tests (up breakouts): handily beats the benchmark in stocks ($74.86 vs $48.01),
but **underperforms in ETFs and cryptocurrency** — avoid those.

## Trading Tactics

- Wait for a confirming close beyond the pattern; trade that direction at the next open.
- Best measure-rule odds when the breakout agrees with the broader market trend.
- Do not trade this pattern in ETFs or cryptocurrencies.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC test plus a short-term trend filter; no pivots. Fire
  on the confirming breakout close, not on bar 2.
- Suggested inputs: trend lookback `N`, open/close proximity thresholds (default 25%),
  target multiplier, stop mode.
- Mirror image of the downtrend hook reversal.
