---
id: bearish-fakey
name: Bearish Fakey
aliases: [Fakey]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 4, typical: 4}
confirmation: required
rank: null
stats:
  break_even_failure_rate: 0.56
  avg_move: 0.08
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/FakeyBear.html
accessed: 2026-07-16
---

# Bearish Fakey

## Overview

A four-bar pattern: an inside day (bars 1-2) followed by a strong upward thrust (bar 3) and
a further push higher (bar 4) that then reverses. In essence a four-day upward drift that
"fakes out" buyers before price drops below the pattern. Bulkowski tuned the last two bars
for lowest failure rate; the version shown is the best-performing variant. Failure rate is
high at 56%.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Inside day | Bar 1 high above bar 2 high; bar 1 low below bar 2 low (bar 2 inside bar 1); ties not allowed |
| Candle 3 | High above bar 1's high; low above bar 1's low |
| Candle 4 | Low above bar 3's low; high above bar 3's high |
| Confirmation | Price must drop below the low of bar 1 to be valid. If it first rises above bar 4's high, it is NOT a bearish fakey |
| Candle color/height | Not tested |

## Detection Rules (computable)

Bars indexed `bar1 = [3]`, `bar2 = [2]`, `bar3 = [1]`, `bar4 = [0]` when the fourth bar is current.

- **R1 [B]** Inside day: `high[3] > high[2] and low[3] < low[2]`.
- **R2 [B]** Bar 3 above bar 1: `high[1] > high[3] and low[1] > low[3]`.
- **R3 [B]** Bar 4 above bar 3: `low[0] > low[1] and high[0] > high[1]`.
- **R4 [B]** Validity (see Confirmation): pattern only confirms when price later drops below `low[3]` (bar 1 low) before exceeding bar 4's high.

## Confirmation & Breakout

Breakout is **downward**. Enter short a penny below the low of bar 1 (`low_bar1 - tick`).
Cancel the order if price first rises above bar 4's high — that invalidates the pattern.
56% of patterns fail to drop more than 5% before reversing up, so treat the setup cautiously.

## Targets & Stops

- Performance was measured low-to-ultimate-low (perfect-trade basis); average decline 8%.
- Height-exit test (research, treated as bullish): `target = pattern_high + 2 * height`,
  where `height` spans the highest to lowest bar; stop a penny below the pattern bottom.

## Performance

| Metric | Bull market |
|---|---|
| Break-even failure rate | 56% |
| Average decline | 8% |
| Overall rank | Not measured |
| Throwback / % meeting target | Not measured |

Based on 3,977 perfect trades. In benchmark height-exit tests (run as if bullish), fakey in
an uptrend underperformed the benchmark while fakey in a downtrend slightly beat it; results
in cryptocurrency beat the benchmark modestly (low sample counts).

## Trading Tactics

- Short a penny below bar 1's low; cancel if price exceeds bar 4's high first.
- Expect over half of signals to fail to reach a 5% drop — size accordingly.
- Bulkowski suggests (untested) looking for fakeys bumping against overhead resistance.

## Pine Notes

- Feasibility: **moderate**. The four-bar shape is a fixed-window OHLC test (easy), but the
  pattern is only valid on a later break below bar 1's low, so track it as a pending
  candidate and fire only when `low < low_bar1` occurs before price exceeds bar 4's high.
- Suggested inputs: entry offset (ticks), invalidation toggle (bar-4 high), target multiplier.
- No inside-day configuration, candle color, or bar height is tested — keep those out of detection.
