---
id: gap2h
name: Gap2H
aliases: [Gap 2H]
category: small-pattern
type: continuation
direction: bullish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 21, of: 23}
stats:
  break_even_failure_rate: 0.34
  avg_move: 0.10
  throwback_rate: null
  pct_meeting_target: 0.53
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/Gap2H.html
accessed: 2026-07-16
---

# Gap2H

## Overview

A three-bar pattern (from Michael Harris via Paolo Pezzutti): an upward price gap followed
by two consecutive higher highs and higher lows. It usually acts as a bullish continuation
(72% of the time), so the expected breakout is upward. Failure and rank are typical of
short-term patterns (rank 21 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Three bars: a gap followed by two higher highs and two higher lows |
| Price gap | Price gaps higher — bar 2's low is above bar 1's high (a true gap) |
| Higher high | Bar 3 makes a higher high than bar 2 |
| Higher low | Bar 3 makes a higher low than bar 2, but remains below bar 2's high |

## Detection Rules (computable)

Bars indexed `bar1 = [2]`, `bar2 = [1]` (the gap bar), `bar3 = [0]` when bar 3 is current.

- **R1 [B]** Gap up: `low[1] > high[2]` (bar 2's low above bar 1's high).
- **R2 [B]** Bar 3 higher high: `high[0] > high[1]`.
- **R3 [B]** Bar 3 higher low: `low[0] > low[1]`.
- **R4 [B]** Bar 3 low below bar 2 high: `low[0] < high[1]` (higher low remains below bar 2's high).

## Confirmation & Breakout

Breakout occurs when price closes **above the top** (upward, expected) or **below the
bottom** of the pattern. Acts as a continuation 72% of the time, so trade with the trend
(upward). Wait for the breakout close before entering; Bulkowski buys/shorts at the next
open after the confirming close.

## Targets & Stops

- Height: `height = highest_high - lowest_low` across the three bars.
- Up target: `target = highest_high + height`; down target: `lowest_low - height`.
  Met 53% of the time (bull, up breakout).
- Stop: a penny below the pattern bottom for longs (or a fixed 7% stop, as Pezzutti recommends).

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 34% | +10% | 53% |
| Bull, down | 38% | -8% | 46% |
| Bear, up | 28% | +11% | 44% |
| Bear, down | 19% | -18% | 56% |

Best performance is in a bear market (fewest failures, largest moves). In height-exit
target tests the Gap2H substantially beat the benchmark in stocks and ETFs, especially when
the inbound trend was down for several days into the pattern. No crypto results (crypto
rarely gaps).

## Trading Tactics

- Expect an upward (continuation) breakout; wait for a confirming close beyond the pattern.
- For ETFs/stocks, best edge comes when a multi-day downtrend precedes the gap.
- Consider a 7% target / 7% stop (original method) or a pattern-boundary stop.

## Pine Notes

- Feasibility: **easy**. Fixed three-bar OHLC + gap test, no pivot detection. Gap logic is
  session-sensitive: true price gaps mostly occur on daily/intraday-session data and rarely
  on 24-hour instruments (crypto/futures overnight) — gate the gap test to instruments/timeframes that gap.
- Suggested inputs: min gap size (ticks/%), target multiplier, stop mode (7% vs pattern).
- Fire the alert on the confirming breakout close, not on bar 3, to avoid acting on unconfirmed patterns.
