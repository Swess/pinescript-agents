---
id: big-w
name: Big W
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 20, typical: 60}
confirmation: required
rank: {value: 11, of: 39}
stats:
  break_even_failure_rate: 0.09
  avg_move: 0.46
  throwback_rate: 0.64
  pct_meeting_target: 0.74
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/bigw.html
accessed: 2026-07-16
---

# Big W

## Overview

A Big W is a double bottom with tall sides — a double bottom formed by a tall, straight
decline into twin valleys. After confirmation, price often approaches the height of the
left-side trend start before retracing to form a handle, then resumes the rise. It is a
bullish reversal, valid only after price closes above the peak between the valleys.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading into the pattern |
| Shape | A big W with twin bottoms and tall sides |
| Reversal pattern | A double bottom at the base of the W |
| Tall sides | Best performers have tall, straight declines into the bottom of the W |
| Rise between bottoms | 10% to 20% or more (be flexible) |
| Volume | Recedes 69% of the time between the two bottoms |
| Confirmation | Price closes above the highest peak between the two bottoms |

## Detection Rules (computable)

Definitions: `valley1`, `valley2` = swing lows via `ta.pivotlow(l, r)`; `peak` = highest
high strictly between them; `launch` = the high where the left-side decline began.

- **R1 [B]** Prior trend down, tall left side: decline of at least `20%` from launch high to valley1 (default [D]) for "tall sides".
- **R2 [B]** Rise between bottoms ≥ 10%: `(peak_high - min(low_v1,low_v2)) / min(low_v1,low_v2) >= 0.10` (10%-20%+ typical).
- **R3 [D]** Bottom prices nearly equal: `abs(low_v1 - low_v2) / min(low_v1, low_v2) <= 0.04` (default tolerance).
- **R4 [D]** Straight-line decline: left side monotonic within a `3%` counter-move tolerance (few consolidations; default, adjustable).
- **R5 [B]** Pattern valid only on confirmation (see below).

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > peak_high` (a close above the
highest peak D between the two bottoms). After confirmation price often pauses at the
confirmation level (handle), then approaches the left-side high (A) before continuing.

## Targets & Stops

- Target (measure rule): `target = peak_high + (peak_high - min(low_v1, low_v2))` — add the
  full height (highest peak D to lowest valley B) to the peak-high price. (Note: this page
  states the full-height measure rule; the 74% figure is the percentage of patterns meeting
  that target.)
- Stall/stop: swing traders buy at the second bottom, ride to confirmation; exit immediately
  if price drops below the low of the second bottom.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 11 of 39 (1 = best) |
| Break-even failure rate | 9% |
| Average rise | 46% |
| Throwback rate | 64% |
| % meeting price target | 74% |

Based on more than 2,100 perfect trades. Notable: volume recedes between the bottoms 69% of
the time. Price typically approaches the left-side high (A) then forms a handle before
resuming. Best performers have tall, straight left-side declines.

## Trading Tactics

- Wait for confirmation (close above the center peak) before entering long.
- Swing traders: buy at the second bottom, ride to confirmation; exit if price drops below the second-bottom low.
- Position traders: enter on confirmation, be prepared to sell as price nears the left-side high (A).
- Expect a handle after confirmation before the main advance resumes.
- Prefer patterns with tall, straight-line left-side declines.

## Pine Notes

- Feasibility: **moderate**. Requires pivot-low detection for the twin bottoms and locating
  the launch high, plus a straight-line-decline test. Valleys confirm `len` bars late
  (`ta.pivotlow(len, len)`); do not anchor to the valley bar or the script repaints.
- Suggested inputs: pivot length, bottom tolerance % (R3), min rise between bottoms % (R2),
  min decline % (R1), straight-line counter-move tolerance (R4).
- The "tall sides / straight-line decline" tests (R1/R4) distinguish a Big W from an
  ordinary double bottom; ship them as adjustable filters.
- Confirm (and fire the alert) only on the bar where `close > peak_high` first occurs.
