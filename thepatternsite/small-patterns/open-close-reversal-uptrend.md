---
id: open-close-reversal-uptrend
name: Open-close reversal, uptrend
aliases: [OCR Uptrend]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 2, of: 23}
stats:
  break_even_failure_rate: 0.45
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.84
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/OCRU.html
accessed: 2026-07-16
---

# Open-close reversal, uptrend

## Overview

A single bar in a short-term uptrend that opens near its intraday high and closes near its
intraday low, yet still closes above the prior day's close. It hints at a bearish reversal,
though it only reverses ~50% of the time (breakout direction is essentially random). Headline
stats are for upward breakouts in a bull market (rank 2 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Two bars (references the prior bar's close) |
| Trend | Short-term uptrend leading in |
| Open | Within 25% of the intraday high |
| Close | Within 25% of the intraday low AND above the prior day's close |

## Detection Rules (computable)

Definitions: `range = high - low`. Pattern bar is bar 0.

- **R1 [B]** Prior trend up: 5-day linear-regression slope of `(high+low)/2` positive; simplify to `close > close[5]` [D].
- **R2 [B]** Open near high: `(high - open) <= 0.25 * range`.
- **R3 [B]** Close near low: `(close - low) <= 0.25 * range`.
- **R4 [B]** Close above prior close: `close > close[1]`.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the pattern bar.
Bulkowski buys/shorts at the next open in the breakout direction. It reverses (breaks down)
only ~50% of the time — direction is random, so wait for the breakout.

## Targets & Stops

- Height: `height = high - low` of the pattern bar.
- Up target: `high + height`; down target: `low - height`. Measure rule met **84%** (bull, up).
- Stop: beyond the opposite side of the pattern, or a fixed % stop [D].

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 45% | +7% | 84% |
| Bull, down | 50% | -6% | 76% |
| Bear, up | 37% | +7% | 81% |
| Bear, down | 33% | -11% | 80% |

Swing test (6,167 trades): Bull/Up +$118.67 (59% wins); Bull/Down -$76.87; Bear/Up -$91.36;
Bear/Down +$67.85. Ranked 2 of 23 — the measure rule hits 84% (bull, up), the best of the
open-close reversals.

## Trading Tactics

- Wait for a close beyond the top or bottom; trade that direction at the next open.
- Lean on the measure rule — it hits 84% (bull, up), an excellent target-setting edge.
- Despite the "uptrend reversal" name, breakout direction is essentially a coin flip.

## Pine Notes

- Feasibility: **easy**. Single-bar open/close-position test plus a prior-close comparison and a
  trend filter; no pivots. Fire on the confirming breakout close.
- Suggested inputs: trend lookback `N` (R1), open/close fractions (0.25, R2/R3), target multiple,
  stop mode, entry timing.
- Mirror of the downtrend variant (open/close positions and trend filter swapped); share one
  parameterized implementation.
