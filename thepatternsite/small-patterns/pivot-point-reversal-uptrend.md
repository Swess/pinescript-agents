---
id: pivot-point-reversal-uptrend
name: Pivot point reversal, uptrend
aliases: [PPR Uptrend]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 15, of: 23}
stats:
  break_even_failure_rate: 0.43
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.80
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/PPRU.html
accessed: 2026-07-16
---

# Pivot point reversal, uptrend

## Overview

A two-bar pattern in a short-term uptrend where the current bar closes below the prior day's
low, hinting at a bearish reversal. It reverses only 33% of the time in a bull market, so the
breakout direction is not assured. Headline stats are for upward breakouts in a bull market
(rank 15 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Two bars (references the prior day's low) |
| Trend | Short-term uptrend leading in |
| Close | The close must be below the prior day's low |

## Detection Rules (computable)

Pattern bar is bar 0; reference bar is bar `[1]`.

- **R1 [B]** Prior trend up: 10-day linear-regression slope of `(high+low)/2` positive; simplify to `close > close[10]` [D].
- **R2 [B]** Close below prior low: `close < low[1]`.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the two-bar
pattern. Bulkowski buys/shorts at the next open in the breakout direction. It reverses (breaks
down) only 33% of the time — wait for the breakout rather than assuming a reversal.

## Targets & Stops

- Height: `height = top - bottom` (highest high minus lowest low of the two bars).
- Up target: `top + height`; down target: `bottom - height`. Measure rule met **80%** (bull, up).
- Stop: beyond the opposite side of the pattern, or a fixed % stop [D].

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 43% | +7% | 80% |
| Bull, down | 50% | -6% | 72% |
| Bear, up | 39% | +8% | 72% |
| Bear, down | 29% | -11% | 75% |

Swing test (19,676 trades): Bull/Up +$73.56 (57% wins); Bull/Down -$96.35; Bear/Up -$58.04;
Bear/Down +$68.64. Measure rule is reliable (72-80%).

## Trading Tactics

- Wait for a close beyond the top or bottom; trade that direction at the next open.
- Don't presume a reversal — only 33% actually reverse the uptrend in a bull market.
- Use the measure rule for targets (80% bull, up).

## Pine Notes

- Feasibility: **easy**. Single comparison (`close < low[1]`) plus a trend filter; no pivots.
  Fire on the confirming breakout close.
- Suggested inputs: trend lookback `N` (R1, default 10), target multiple, stop mode, entry timing.
- Mirror of the downtrend variant (which tests `close > high[1]` in a downtrend); share one
  parameterized implementation.
