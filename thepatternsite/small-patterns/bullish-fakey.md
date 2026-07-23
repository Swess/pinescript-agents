---
id: bullish-fakey
name: Bullish Fakey
aliases: [Fakey]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 4, typical: 4}
confirmation: required
rank: null
stats:
  break_even_failure_rate: 0.47
  avg_move: 0.22
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/FakeyBull.html
accessed: 2026-07-16
---

# Bullish Fakey

## Overview

A four-bar pattern: an inside day (bars 1-2) followed by a strong downward thrust (bar 3)
and a further push lower (bar 4) that then reverses upward. In essence a four-day downward
drift that "fakes out" sellers before price rises above the pattern. Bulkowski shows the
best high-occurrence variant. Failure rate is 47%.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Inside day | Bar 1 high above bar 2 high; bar 1 low below bar 2 low (bar 2 inside bar 1); ties not allowed |
| Candle 3 | High below bar 1's high; low below bar 1's low |
| Candle 4 | Low below bar 3's low; high below bar 3's high |
| Confirmation | Price must rise above the high of bar 1 to be valid. If it first drops below bar 4's low, it is NOT a bullish fakey |
| Candle color/height | Not tested |

## Detection Rules (computable)

Bars indexed `bar1 = [3]`, `bar2 = [2]`, `bar3 = [1]`, `bar4 = [0]` when the fourth bar is current.

- **R1 [B]** Inside day: `high[3] > high[2] and low[3] < low[2]`.
- **R2 [B]** Bar 3 below bar 1: `high[1] < high[3] and low[1] < low[3]`.
- **R3 [B]** Bar 4 below bar 3: `low[0] < low[1] and high[0] < high[1]`.
- **R4 [B]** Validity (see Confirmation): pattern only confirms when price later rises above `high[3]` (bar 1 high) before dropping below bar 4's low.

## Confirmation & Breakout

Breakout is **upward**. Enter on a buy stop a penny above the high of bar 1 (`high_bar1 + tick`).
Cancel the order if price first drops below bar 4's low — that invalidates the pattern.
47% of patterns fail to rise more than 5% before reversing down.

## Targets & Stops

- Performance measured top-to-ultimate-high (perfect-trade basis); average rise 22%.
- Height-exit test: `target = pattern_high + 2 * height`, where `height` spans the highest
  to lowest bar; stop a penny below the pattern bottom.

## Performance

| Metric | Bull market |
|---|---|
| Break-even failure rate | 47% |
| Average rise | 22% |
| Overall rank | Not measured |
| Throwback / % meeting target | Not measured |

Based on 4,219 perfect trades. In benchmark height-exit tests, bullish fakey beat the
benchmark in stocks (both trend directions), did well in ETF uptrends (avoid ETF
downtrends), and beat the benchmark in cryptocurrency (low sample counts).

## Trading Tactics

- Buy a penny above bar 1's high; cancel if price drops below bar 4's low first.
- Prefer fakeys resting on support; note they can form the right shoulder of a
  head-and-shoulders bottom.
- Nearly half of signals fail to reach a 5% rise — manage risk accordingly.

## Pine Notes

- Feasibility: **moderate**. Fixed four-bar OHLC test for the shape, but validity depends on
  a later break above bar 1's high, so track the candidate and fire only when
  `high > high_bar1` occurs before price falls below bar 4's low.
- Suggested inputs: entry offset (ticks), invalidation toggle (bar-4 low), target multiplier.
- Inside-day configuration, candle color, and bar height are untested — exclude from detection.
