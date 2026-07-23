---
id: 3-bar
name: 3-Bar
aliases: [3-Bar]
category: small-pattern
type: either
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 22, of: 34}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/3Bar.html
accessed: 2026-07-16
---

# 3-Bar

## Overview

A prolific three-bar pattern: bar 1 closes lower than the prior day, the middle bar makes the
lowest low of the three, and the last bar closes above the highs of the other two. Its main
value is predicting direction — price breaks out upward 85% of the time — though its target-exit
trading performance is only middling.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Three bars | Three-bar pattern |
| First bar | Closes lower than the prior day's close (not vs its own open) |
| Middle bar | Has a low below both adjacent bars |
| Last bar | Closes above the highs of the other two bars (stringent test used) |
| Breakout | Upward 85% of the time |

## Detection Rules (computable)

Current bar = last bar, so middle bar = `[1]`, first bar = `[2]`, prior day = `[3]`.

- **R1 [B]** First bar closes lower than prior day: `close[2] < close[3]`.
- **R2 [B]** Middle bar lowest low: `low[1] < low[2] and low[1] < low[0]`.
- **R3 [B]** Last bar closes above both other highs: `close[0] > high[1] and close[0] > high[2]`.
  (A looser variant only requires `close[0] > high[1]`; Bulkowski tested the stringent one.)

## Confirmation & Breakout

Price breaks out upward 85% of the time (moves above the highest bar before below the lowest).
Bulkowski's tested trade: buy stop a penny above the pattern top; stop-loss a penny below the
bottom (some tests used a penny below the middle bar); target 2× height above the top.

## Targets & Stops

- Target (height exit): `target = highest_bar_high + 2 * (highest_bar_high - lowest_bar_low)`.
- Stop-loss: a penny below the lowest bar (or, in the example, below the middle bar).

## Performance

Bull-market stocks, upward breakouts, 489 stocks, height exit:

| Metric | 3-Bar Uptrend | Uptrend Bench | 3-Bar Downtrend | Downtrend Bench |
|---|---|---|---|---|
| Trades | 8,712 | 5,877 | 7,595 | 5,278 |
| Avg profit/loss per trade | $90.81 | $73.54 | $89.38 | $83.91 |
| Win/loss ratio | 42% | 41% | 41% | 42% |

ETFs: $68.16 (up) / $62.97 (down) vs $68.94 / $68.34 — flops, don't use. Crypto: $256.66 (up,
beats $224.62) / $180.87 (down, worse than $209.61) — good in uptrends only.
Notable: ranks 22 of 34 small patterns. Beats benchmark in stocks (uptrend better than
downtrend); the 85% upward-breakout tendency is its most useful feature.

## Trading Tactics

- Best used as a directional predictor (upward breakout 85% of the time).
- In stocks it beats the benchmark, especially in uptrends.
- Avoid in ETFs; in crypto only trade uptrends.
- Entry a penny above the top, stop below the bottom (or middle bar), target 2× height.

## Pine Notes

- Feasibility: **easy**. Three-bar OHLC comparisons plus one prior-day close; no pivots, no
  repaint. Completes on the last bar's close.
- Suggested inputs: target multiplier (default 2.0), stop location toggle (pattern low vs
  middle-bar low), strict/loose last-bar rule toggle (R3), optional trend filter.
