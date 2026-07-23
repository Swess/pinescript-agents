---
id: open-close-reversal-downtrend
name: Open-close reversal, downtrend
aliases: [OCR Downtrend]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 1, typical: 2}
confirmation: required
rank: {value: 5, of: 23}
stats:
  break_even_failure_rate: 0.42
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.82
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/OCRD.html
accessed: 2026-07-16
---

# Open-close reversal, downtrend

## Overview

A single bar in a short-term downtrend that opens near its intraday low and closes near its
intraday high, yet still closes below the prior day's close. It hints at a bullish reversal,
though it only reverses 51% of the time (breakout direction is nearly random). Headline stats
are for upward breakouts in a bull market (rank 5 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | One bar, referencing the prior bar's close (1-2 bars) |
| Trend | Short-term downtrend leading in |
| Open | Within 25% of the intraday low |
| Close | Within 25% of the intraday high AND below the prior day's close |

## Detection Rules (computable)

Definitions: `range = high - low`. Pattern bar is bar 0.

- **R1 [B]** Prior trend down: 5-day linear-regression slope of `(high+low)/2` negative; simplify to `close < close[5]` [D].
- **R2 [B]** Open near low: `(open - low) <= 0.25 * range`.
- **R3 [B]** Close near high: `(high - close) <= 0.25 * range`.
- **R4 [B]** Close below prior close: `close < close[1]`.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the pattern bar.
Bulkowski buys/shorts at the next open in the breakout direction. It reverses (breaks up) only
51% of the time — direction is nearly random, so wait for the breakout.

## Targets & Stops

- Height: `height = high - low` of the pattern bar.
- Up target: `high + height`; down target: `low - height`. Measure rule met **82%** (bull, up).
- Stop: beyond the opposite side of the pattern, or a fixed % stop [D].

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 42% | +7% | 82% |
| Bull, down | 51% | -6% | 80% |
| Bear, up | 33% | +10% | 75% |
| Bear, down | 27% | -12% | 81% |

Swing test (5,061 trades): Bull/Up +$90.31 (58% wins); Bull/Down -$47.93; Bear/Up -$35.80;
Bear/Down +$57.44. The measure rule is unusually reliable (80-82% in a bull market).

## Trading Tactics

- Wait for a close beyond the top or bottom; trade that direction at the next open.
- Lean on the measure rule — it hits 82% (bull, up), a strong target-setting edge.
- Don't assume a reversal; breakout direction is close to a coin flip (51% up).

## Pine Notes

- Feasibility: **easy**. Single-bar open/close-position test plus a prior-close comparison and a
  trend filter; no pivots. Fire on the confirming breakout close.
- Suggested inputs: trend lookback `N` (R1), open/close fractions (0.25, R2/R3), target multiple,
  stop mode, entry timing.
- Distinguish from the uptrend variant only by the trend filter and the open/close-position
  swap — share one parameterized implementation.
