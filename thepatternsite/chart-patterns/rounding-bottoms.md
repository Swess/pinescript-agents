---
id: rounding-bottoms
name: Rounding bottoms
aliases: [rounded bottom, saucer]
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 40, typical: 90}
confirmation: required
rank: {value: 7, of: 39}
stats:
  break_even_failure_rate: 0.04
  avg_move: 0.48
  throwback_rate: 0.64
  pct_meeting_target: 0.65
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/roundb.html
accessed: 2026-07-16
---

# Rounding bottoms

## Overview

A rounding bottom is a gentle, bowl-shaped (saucer) turn in price, usually forming over many
months and most visible on the weekly chart. It typically appears after an uptrend and acts
as a bullish continuation 67% of the time. It becomes valid when price closes above the left
rim (peak) of the bowl.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Time frame | Daily or weekly; concentrate on the weekly scale where the rounding is more apparent |
| Price trend | Price trends upward into the pattern 67% of the time (acts as continuation) |
| Shape | A rounded bowl/saucer shape, usually over many months |
| Bump | Price may shoot up midway through the turn, then usually retraces most (not all) of the way back to where the bump started |
| Confirmation | A close above the left peak (left rim); the right side may not pause at a minor high |

## Detection Rules (computable)

Definitions: `left_rim` = high at the pattern's left edge; `bowl_low` = lowest low of the
turn; `right_rim` = high at the right edge; window length `W` (bars spanning the bowl).

- **R1 [B]** Prior trend up into the pattern (continuation bias): `close[left_rim] > close[left_rim + N]` (default `N = 20` [D]).
- **R2 [D]** Bowl shape: fit a quadratic to `low` over `W` bars with an upward-opening curve (positive 2nd-difference), or require the midpoint to be the lowest region — `bowl_low` occurs near the middle third of `W`.
- **R3 [D]** Gentle/rounded: no single bar-to-bar drop or rise exceeds a fraction of total height (default: each step `<= 15%` of `(left_rim - bowl_low)`), so the curve is smooth, not V-shaped.
- **R4 [B]** Mid-turn bump allowed: a temporary rally near the low that retraces most of the way back is tolerated (do not reject on it).
- **R5 [B]** Confirmation: `close > left_rim` (a close above the left peak).

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > left_rim` (Bulkowski uses the left
peak because the right side may not form a clear minor high). Break-even failure rate is very
low at 4%. If a handle forms at the right rim, draw a trendline from left rim to right rim
extended downward and buy on a close above it (only when that line slopes down).

## Targets & Stops

- Measure rule: `height = left_rim - bowl_low`; `target = right_rim + 0.65 * height`
  (add to the right rim; if there is no right rim use the left rim). 65% meet target.
- A flat base leading into the rounding turn often precedes a powerful rally.
- Price often pauses at the left-rim price level; throwbacks hurt post-breakout performance.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 7 of 39 (1 = best) |
| Break-even failure rate | 4% |
| Average rise | 48% |
| Throwback rate | 64% |
| % meeting price target | 65% |

Statistics based on 990 perfect trades. Patterns breaking out in the middle third of the
yearly price range do best. A flat base into the turn leads to powerful rallies.

## Trading Tactics

- Use the weekly chart to spot the rounded shape.
- Enter on a close above the left rim.
- Swing traders can sell into the mid-turn bump and buy back once price retraces near the
  bump's start (price usually re-enters the turn higher than the bump start).
- Favor patterns with a flat base into the turn and breakouts in the middle third of the year.
- Watch for a right-rim handle; buy on a close above the down-sloping rim-to-rim trendline.

## Pine Notes

- Feasibility: **hard**. The bowl shape (R2/R3) is inherently subjective — a quadratic/poly
  fit over a long window approximates it, but "rounded" resists a crisp rule.
- Suggested inputs: window `W`, max per-bar step % (R3), trend lookback `N`, target multiplier
  (0.65). Consider fitting `low` with a rolling regression and testing curvature sign.
- The confirming close above the left rim (R5) is the clean, non-repainting trigger; anchor
  signals there rather than to the shape detection.
- Timeframe caveat: statistics assume long (multi-month) formations — best on weekly/daily.
