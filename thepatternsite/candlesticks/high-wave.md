---
id: high-wave
name: High Wave
aliases: []
category: candlestick
type: either
direction: either
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 67, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.77
  reversal_rate: 0.51
  frequency_rank: 17
source: https://thepatternsite.com/HighWave.html
accessed: 2026-07-16
---

# High Wave

## Overview

A single candle with tall upper and lower shadows attached to a small (non-doji) body —
resembling a long-legged doji but with a colored body. Theory calls it indecision, and
tests confirm it: acts as a reversal 51% of the time (essentially random). Overall
performance is mid-list at rank 67 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | None required |
| Configuration | Tall upper and lower shadows on a small body |
| Body | Not a doji (open/close more than a few pennies apart, so a color shows) |

## Detection Rules (computable)

- **R1 [B]** Small body: `abs(close-open) <= 0.3*(high-low)` (body ≤ 30% of range [D]).
- **R2 [B]** Body is not a doji: `abs(close-open) >= 0.05*(high-low)` (body ≥ 5% of range [D]).
- **R3 [B]** Tall upper shadow: `(high-max(open,close)) >= abs(close-open)` (upper shadow ≥ body [D]).
- **R4 [B]** Tall lower shadow: `(min(open,close)-low) >= abs(close-open)` (lower shadow ≥ body [D]).
- **R5 [D]** Overall tall candle: `(high-low) > ta.sma(high-low, 20)` (taller-than-average default).

## Confirmation & Breakout

No trend is required. Upward breakout = `close > high`; downward breakout = `close < low`.
Because the pattern signals indecision, wait for the breakout to define direction.

## Targets & Stops

- Candle-height target: `height = high - low`; target = breakout price ± height in the
  breakout direction (best % meeting target 77%: bull market, up breakout).
- Stop: opposite extreme of the candle (`low` for longs, `high` for shorts) [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Indecision |
| Tested behavior | Reversal 51% (random) |
| Overall rank | 67 of 103 (1 = best) |
| Frequency rank | 17 (common) |
| Best % meeting target | 77% (bull market, up breakout) |
| Best avg 10-day move | −3.38% (bear market, down breakout) |
| Best 10-day rank | 60 (bear market, up breakout) |

## Trading Tactics

- High waves within a third of the yearly low perform best.
- Those confirmed by an opening gap tend to perform best.
- Breakouts below the 50-day moving average tend to outperform.

## Pine Notes

- Feasibility: **easy**. Single-bar body/shadow ratios; no pivots, no trend requirement.
- Distinguish from long-legged doji (R2 forbids a doji body) and spinning top (require both
  shadows tall via R3/R4).
- Suggested inputs: body-fraction cap (R1), doji floor (R2), shadow-to-body multiple (R3/R4),
  optional opening-gap and 50-MA filters.
