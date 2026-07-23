---
id: long-legged-doji
name: Long legged doji
aliases: []
category: candlestick
type: either
direction: either
bars: {min: 1, typical: 1}
confirmation: required
rank: {value: 37, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.68
  reversal_rate: null
  frequency_rank: 41
source: https://thepatternsite.com/LongLegDoji.html
accessed: 2026-07-16
---

# Long legged doji

## Overview

A single doji (open and close within a few pennies of each other) with long upper and lower
shadows, signalling indecision. Tests confirm the breakout direction is essentially random
(acts as a bullish continuation 51% of the time). Overall performance rank 37.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | None |
| Body | Doji — open and close within a few pennies of each other |
| Shadows | Long upper and lower shadows (longer than recent shadows; lengths need not match) |

## Detection Rules (computable)

- **R1 [B]** Doji body: `abs(close - open) <= 0.05 * (high - low)` (open ≈ close; 5% of range default [D]).
- **R2 [B]** Long upper shadow: `(high - max(open, close)) > longShadow` where `longShadow = ta.sma(high - low, 20) * 0.75` (shadows "longer than recent"; default 75% of avg range [D]).
- **R3 [B]** Long lower shadow: `(min(open, close) - low) > longShadow`.

## Confirmation & Breakout

Breakout = close beyond the candle's extreme. Upward = `close > high`; downward =
`close < low`. Direction is random, so a breakout is essential to define the trade — never
trade the doji on formation alone.

## Targets & Stops

- Height target: `height = high - low`; target = breakout price ± height (met ~68% best
  configuration) [B].
- Stop: opposite extreme of the candle [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish continuation 51% (random) |
| Overall performance rank | 37 of 103 (1 = best) |
| Frequency rank | 41 |
| Best % meeting target | 68% (bull market, up breakout) |
| Best avg 10-day move | +4.62% (bear market, up breakout) |
| Best 10-day performance rank | 38 (bear market, up breakout) |

Doji = indecision; breakout direction cannot be predicted from the candle.

## Trading Tactics

- Best performance when the candle appears within a third of the yearly low.
- Long-legged dojis with taller-than-median shadows move ~50% farther after the breakout.
- Breakouts below the 50-trading-day moving average outperform.

## Pine Notes

- Feasibility: **easy**. Single-bar body and shadow tests relative to a rolling average range.
- Distinguish from a rickshaw man / high-wave candle (same family) if precision matters.
- Suggested inputs: doji body tolerance (default 5% of range), long-shadow multiplier,
  average window (20), optional below-50-SMA filter.
- Because direction is random, always require a breakout confirmation before acting.
