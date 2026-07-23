---
id: hikkake-bullish
name: Hikkake, bullish
aliases: [hikkake]
category: candlestick
type: either
direction: bullish
bars: {min: 4, typical: 5}
confirmation: required
rank: {value: 84, of: 105}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.60
  reversal_rate: 0.48
  frequency_rank: 16
source: https://thepatternsite.com/HikkakeBull.html
accessed: 2026-07-16
---

# Hikkake, bullish

## Overview

A three-bar pattern (Dan Chesler) resembling a three-inside-down but without the trend or
color constraints: an inside day followed by a bar with a lower high and lower low, then a
false-move reversal upward. Theoretically bullish when confirmed, but tests it as a bullish
continuation only 52% of the time (random). Confirmation is part of the definition. Overall
performance ranks 84 of 105.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Three (plus confirmation) |
| Price trend | None required |
| Configuration | Inside day (lower high, higher low vs prior day) followed by a lower high and lower low |
| Candle color | Not important |
| Confirmation | Price rises above the high of the inside day within three days after the pattern ends |

## Detection Rules (computable)

Index the 3-bar core so bar1=[n+2], inside-day=[n+1], bar3=[n], where the confirmation
occurs on the current bar (0) up to 3 bars after bar3.

- **R1 [B]** Inside day: `high[n+1] < high[n+2] and low[n+1] > low[n+2]`.
- **R2 [B]** Third bar has lower high and lower low than the inside day: `high[n] < high[n+1] and low[n] < low[n+1]`.
- **R3 [B]** Confirmation within 3 bars of bar3 end: current `high > high[n+1]` (rises above the inside day's high), with `n` in 0..2.
- **R4 [D]** No candle-color constraint — do not gate on body direction.

## Confirmation & Breakout

Confirmation = price posts a higher high than the inside day (`high > inside_day_high`)
within three days; a close is not required, just a higher high. Bulkowski measured
performance from a close above the highest high or below the lowest low of the 3-bar
candle; upward breakouts are ~2× as common as downward ones.

## Targets & Stops

- Height target: `height = highest(high, 3-bar) - lowest(low, 3-bar)`; up target =
  breakout price + height (met ~60% best config: bull market, up breakout).
- Entry: buy stop above the highest high (or above the inside day's high).
- Stop: below the lowest low of the 3-bar hikkake (Chesler: a penny below the lowest low
  for up breakouts) — note: below the 3-bar low, not the wider 6-bar low.

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish continuation 52% (random) |
| Overall rank | 84 of 105 (1 = best) |
| Frequency rank | 16 (common) |
| Best % meeting target | 60% (bull market, up breakout) |
| Best avg 10-day move | +4.97% (bear market, up breakout) |
| Best 10-day rank | 23 (bear market, up breakout) |

Tall hikkakes (taller than ~5% of breakout price ÷ pattern height) outperform in every
combination (~9.6% moves in bear markets). A short-term **downtrend** into the confirmed
hikkake improves performance in most cases; the pattern does well in bear markets
regardless of breakout direction (measured top/bottom of the 3-bar candle to end of trend):

| Market, breakout | Rising trend | Falling trend |
|---|---|---|
| Bull, up | 5.91% | 6.47% |
| Bear, up | 6.75% | 8.58% |
| Bull, down | 4.60% | 4.37% |
| Bear, down | 7.24% | 8.67% |

## Trading Tactics

- Once the three bars form, place a buy stop above the highest high (or above the inside
  day's high) to enter on confirmation.
- Prefer tall patterns and, ideally, a short downtrend into the pattern.
- Stop below the bottom of the 3-bar hikkake; if too far, use a volatility stop or pass.

## Pine Notes

- Feasibility: **moderate**. 3-bar geometry is pure OHLC; the "within 3 days" confirmation
  needs a rolling search window (`n` in 0..2) — implement as a state flag set when the core
  forms, cleared after 3 bars or on confirmation.
- No pivots/repaint; signal fires on the confirmation bar. Mirror image of the bearish hikkake.
- Suggested inputs: confirmation window (default 3), tall-pattern threshold, short-downtrend
  filter, 50-EMA filter.
