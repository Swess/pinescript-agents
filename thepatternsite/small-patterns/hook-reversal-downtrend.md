---
id: hook-reversal-downtrend
name: Hook Reversal, Downtrend
aliases: [Hook Reversal]
category: small-pattern
type: reversal
direction: either
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 9, of: 23}
stats:
  break_even_failure_rate: 0.42
  avg_move: 0.08
  throwback_rate: null
  pct_meeting_target: 0.69
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/HRD.html
accessed: 2026-07-16
---

# Hook Reversal, Downtrend

## Overview

A two-bar pattern in a short-term downtrend: bar 2 is an inside day whose last bar opens
near its low and closes near its high, hinting at a bullish reversal. Bulkowski does not
assume the reversal — he trades whichever way price breaks out. 51% actually continue lower.
Headline stats are for upward breakouts in a bull market (rank 9 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Two bars |
| Trend | Short-term downtrend leading in |
| Inside day | Bar 1 makes a higher high AND lower low than bar 2 (bar 2 inside bar 1) |
| Open | Last bar's open within 25% of its intraday low |
| Close | Last bar's close within 25% of its intraday high |
| Range | Last bar's high and low cannot be equal |

## Detection Rules (computable)

Bars indexed `bar1 = [1]`, `bar2 = [0]` (current). `range0 = high[0] - low[0]`.

- **R1 [B]** Prior trend down: `close < close[5]` (5-day linear-regression downtrend; default `N = 5` [D]).
- **R2 [B]** Inside day: `high[1] > high[0] and low[1] < low[0]`.
- **R3 [B]** Bar 2 open near low: `(open[0] - low[0]) / range0 <= 0.25`.
- **R4 [B]** Bar 2 close near high: `(high[0] - close[0]) / range0 <= 0.25`.
- **R5 [B]** Bar 2 has a real range: `high[0] != low[0]`.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the two-bar
pattern. Bulkowski enters at the next open in the breakout direction (buy on up-breakout,
short on down-breakout). Reversal (up) breakout is the pattern's thesis but only ~49% oblige.

## Targets & Stops

- Height: `height = highest_high - lowest_low` across the two bars.
- Up target: `top + height`; down target: `bottom - height`. Met 69% (bull, up breakout).
- Stop: a penny beyond the opposite side of the pattern, or a fixed 7% stop.

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 42% | +8% | 69% |
| Bull, down | 47% | -6% | 65% |
| Bear, up | 36% | +8% | 63% |
| Bear, down | 27% | -13% | 69% |

Height-exit tests: mildly beats the benchmark in stocks ($79 vs $68.70) and ETFs; **loses
money in cryptocurrency** (avoid crypto).

## Trading Tactics

- Wait for a confirming close beyond the pattern; trade that direction at the next open.
- Best measure-rule odds when the breakout agrees with the broader market trend.
- Do not trade this pattern in cryptocurrencies.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC test plus a short-term trend filter; no pivots. Fire
  on the confirming breakout close, not on bar 2.
- Suggested inputs: trend lookback `N`, open/close proximity thresholds (default 25%),
  target multiplier, stop mode.
- "Short-term downtrend" is the only loose criterion — `close < close[N]` is a fine proxy.
