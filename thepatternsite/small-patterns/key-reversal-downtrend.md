---
id: key-reversal-downtrend
name: Key Reversal, Downtrend
aliases: [Key Reversal]
category: small-pattern
type: reversal
direction: either
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 3, of: 23}
stats:
  break_even_failure_rate: 0.43
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.69
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/KRD.html
accessed: 2026-07-16
---

# Key Reversal, Downtrend

## Overview

A two-bar pattern in a short-term downtrend where the second bar is an outside day: it makes
a lower low but closes above the prior day's high, hinting at a bullish reversal. Bulkowski
trades whichever way price breaks out. 51% actually continue lower. Ranks very well (3 of
23) among small patterns with upward breakouts in a bull market.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Two bars |
| Trend | Short-term downtrend leading in |
| Outside day | Bar 2 closes above bar 1's high, opens below bar 1's close, and posts a low below bar 1's low |

## Detection Rules (computable)

Bars indexed `bar1 = [1]`, `bar2 = [0]` (current).

- **R1 [B]** Prior trend down: `close < close[5]` (5-day linear-regression downtrend; default `N = 5` [D]).
- **R2 [B]** Close above prior high: `close[0] > high[1]`.
- **R3 [B]** Open below prior close: `open[0] < close[1]`.
- **R4 [B]** Lower low: `low[0] < low[1]`.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the two-bar
pattern. Bulkowski enters at the next open in the breakout direction. Reversal (up) breakout
is the thesis; ~50% break up.

## Targets & Stops

- Height: `height = highest_high - lowest_low` across the two bars.
- Up target: `top + height`; down target: `bottom - height`. Met 69% (bull, up breakout).
- Stop: a penny beyond the opposite side of the pattern, or a fixed 7% stop.

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 43% | +7% | 69% |
| Bull, down | 50% | -7% | 61% |
| Bear, up | 35% | +9% | 60% |
| Bear, down | 29% | -12% | 64% |

Height-exit tests: exceeds the benchmark in stocks ($93.25 vs $68.70) and ETFs; **worse
than the benchmark in cryptocurrency** (avoid crypto).

## Trading Tactics

- Wait for a confirming close beyond the pattern; trade that direction at the next open.
- Best measure-rule odds when the breakout agrees with the broader market trend.
- Do not trade this pattern in cryptocurrencies.

## Pine Notes

- Feasibility: **easy**. Two-bar outside-day test plus a short-term trend filter; no pivots.
  Fire on the confirming breakout close.
- Suggested inputs: trend lookback `N`, target multiplier, stop mode.
- Note the outside-day definition here uses close-vs-prior-high and open-vs-prior-close, not
  just an engulfing range — encode all three conditions (R2-R4).
