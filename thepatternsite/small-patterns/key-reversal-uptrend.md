---
id: key-reversal-uptrend
name: Key Reversal, Uptrend
aliases: [Key Reversal]
category: small-pattern
type: reversal
direction: either
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 16, of: 23}
stats:
  break_even_failure_rate: 0.45
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.71
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/KRU.html
accessed: 2026-07-16
---

# Key Reversal, Uptrend

## Overview

A two-bar pattern in a short-term uptrend where the second bar is an outside day: it opens
above the prior close, posts a higher high, but closes below the prior day's low, hinting at
a bearish reversal. Bulkowski trades whichever way price breaks out. 51% actually continue
higher. Headline stats are for upward breakouts in a bull market (rank 16 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Two bars |
| Trend | Short-term uptrend leading in |
| Outside day | Bar 2 opens above bar 1's close, closes below bar 1's low, and posts a high above bar 1's high |

## Detection Rules (computable)

Bars indexed `bar1 = [1]`, `bar2 = [0]` (current).

- **R1 [B]** Prior trend up: `close > close[5]` (5-day linear-regression uptrend; default `N = 5` [D]).
- **R2 [B]** Open above prior close: `open[0] > close[1]`.
- **R3 [B]** Close below prior low: `close[0] < low[1]`.
- **R4 [B]** Higher high: `high[0] > high[1]`.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the two-bar
pattern. Bulkowski enters at the next open in the breakout direction. Reversal (down)
breakout is the thesis; ~49% break down.

## Targets & Stops

- Height: `height = highest_high - lowest_low` across the two bars.
- Up target: `top + height`; down target: `bottom - height`. Met 71% (bull, up breakout).
- Stop: a penny beyond the opposite side of the pattern, or a fixed 7% stop.

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 45% | +7% | 71% |
| Bull, down | 50% | -6% | 62% |
| Bear, up | 39% | +9% | 65% |
| Bear, down | 33% | -11% | 66% |

Height-exit tests (up breakouts): beat the benchmark in stocks; other markets weaker.

## Trading Tactics

- Wait for a confirming close beyond the pattern; trade that direction at the next open.
- Best measure-rule odds when the breakout agrees with the broader market trend.

## Pine Notes

- Feasibility: **easy**. Two-bar outside-day test plus a short-term trend filter; no pivots.
  Fire on the confirming breakout close.
- Suggested inputs: trend lookback `N`, target multiplier, stop mode.
- Mirror image of the downtrend key reversal; encode all three outside-day conditions (R2-R4).

<!-- ANOMALY: KRU is an uptrend reversal (bearish thesis, down breakout) yet its headline
"Important Bull Market Results" reports UP-breakout stats (45% BE failure, +7% rise, 71%
target) because Bulkowski ranks small patterns within the upward-breakout group. Frontmatter
carries those headline (up-breakout) values; the full split is in Performance. -->
