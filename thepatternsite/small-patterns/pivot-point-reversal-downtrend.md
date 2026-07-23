---
id: pivot-point-reversal-downtrend
name: Pivot point reversal, downtrend
aliases: [PPR Downtrend]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 17, of: 23}
stats:
  break_even_failure_rate: 0.43
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.77
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/PPRD.html
accessed: 2026-07-16
---

# Pivot point reversal, downtrend

## Overview

A two-bar pattern in a short-term downtrend where the current bar closes above the prior day's
high, hinting at a bullish reversal. It reverses only 31% of the time in a bull market, so the
breakout direction is not assured. Headline stats are for upward breakouts in a bull market
(rank 17 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Two bars (references the prior bar) |
| Trend | Short-term downtrend leading in |
| Close | The close must be above the prior day's high |

## Detection Rules (computable)

Pattern bar is bar 0; reference bar is bar `[1]`.

- **R1 [B]** Prior trend down: 10-day linear-regression slope of `(high+low)/2` negative; simplify to `close < close[10]` [D].
- **R2 [B]** Close above prior high: `close > high[1]`.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the two-bar
pattern. Bulkowski buys/shorts at the next open in the breakout direction. It reverses (breaks
up) only 31% of the time — wait for the breakout rather than assuming a reversal.

## Targets & Stops

- Height: `height = top - bottom` (highest high minus lowest low of the two bars).
- Up target: `top + height`; down target: `bottom - height`. Measure rule met **77%** (bull, up).
- Stop: beyond the opposite side of the pattern, or a fixed % stop [D].

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 43% | +7% | 77% |
| Bull, down | 48% | -7% | 73% |
| Bear, up | 34% | +9% | 70% |
| Bear, down | 29% | -12% | 77% |

Swing test (18,627 trades): Bull/Up +$71.03 (56% wins); Bull/Down -$55.99; Bear/Up -$107.41;
Bear/Down +$72.57. Measure rule is reasonably reliable (70-77%).

## Trading Tactics

- Wait for a close beyond the top or bottom; trade that direction at the next open.
- Don't presume a reversal — only 31% actually reverse the downtrend in a bull market.
- Use the measure rule for targets (77% bull, up).

## Pine Notes

- Feasibility: **easy**. Single comparison (`close > high[1]`) plus a trend filter; no pivots.
  Fire on the confirming breakout close.
- Suggested inputs: trend lookback `N` (R1, default 10), target multiple, stop mode, entry timing.
- Mirror of the uptrend variant (which tests `close < low[1]` in an uptrend); share one
  parameterized implementation.
