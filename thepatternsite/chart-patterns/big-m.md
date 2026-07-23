---
id: big-m
name: Big M
aliases: []
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 20, typical: 60}
confirmation: required
rank: {value: 8, of: 36}
stats:
  break_even_failure_rate: 0.14
  avg_move: 0.17
  throwback_rate: 0.67
  pct_meeting_target: 0.55
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/bigm.html
accessed: 2026-07-16
---

# Big M

## Overview

A Big M is a double top with tall sides — a special case of the double top formed by a
long, straight-line run up into twin peaks. In well-behaved patterns, after confirmation
price returns to near the low of the left-side trend start (the "launch price") before
recovering. It is a bearish reversal, valid only after price closes below the valley
between the peaks.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward, often a long straight-line run up |
| Shape | A big M with twin peaks and tall sides |
| Reversal pattern | A double top at the top of the M |
| Tall sides | Twin peaks with highs less than 4% apart (be flexible) |
| Drop between tops | 10% to 20% or more (be flexible) |
| Confirmation | Price closes below the lowest valley between the two peaks |

## Detection Rules (computable)

Definitions: `peak1`, `peak2` = swing highs via `ta.pivothigh(h, r)`; `valley` = lowest
low strictly between them; `launch` = the low where the left-side run-up began.

- **R1 [B]** Prior trend up, tall left side: `close` at `peak1` well above the launch low — require a run-up of at least `20%` from launch to peak1 (default [D]) for "tall sides".
- **R2 [B]** Peak prices within 4%: `abs(high_p1 - high_p2) / min(high_p1, high_p2) <= 0.04`.
- **R3 [B]** Drop between tops ≥ 10%: `(min(high_p1,high_p2) - valley_low) / min(high_p1,high_p2) >= 0.10` (10%-20%+ typical).
- **R4 [D]** Straight-line run-up: few consolidations on the left side — the rise from launch to peak1 is monotonic within a `3%` counter-move tolerance (default, adjustable).
- **R5 [B]** Pattern valid only on confirmation (see below).

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < valley_low` (a close below the
lowest valley between the two peaks). After confirmation price reaches or exceeds the
launch price about **52%** of the time (roughly random, but a usable target).

## Targets & Stops

- Target (measure rule): `target = valley_low - (highest_peak_high - valley_low)` — subtract
  the full height (highest peak A to lowest valley B) from the confirmation/valley price.
  For a closer target, subtract half the height.
- Ideal case: price bottoms at the launch price (E). Reaches/exceeds launch ~52% of the time.
- Stop: for swing traders shorting at the second peak, exit if price rises above the highest peak (A).

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 8 of 36 (1 = best) |
| Break-even failure rate | 14% |
| Average decline | 17% |
| Pullback rate | 67% |
| % meeting price target | 55% |

Based on over 2,000 perfect trades. Notable: price reaches or exceeds the launch price ~52%
of the time. Typical behavior is a fast straight-line run up followed by a slower decline.
Bulkowski (in his own trading, not in these stats) allows other reversal patterns — triple
tops, triangles — to replace the double top at the top of the M.

## Trading Tactics

- Wait for confirmation (close below the valley) before taking a short.
- Swing traders: short at the second peak, ride to confirmation; exit if price rises above the highest peak.
- Position traders: enter on confirmation, exit as price nears the left-side launch low.
- Use the launch price as a downside target (hit ~52% of the time; often close but not reached).

## Pine Notes

- Feasibility: **moderate**. Requires pivot-high detection for the twin peaks and locating
  the launch low, plus a straight-line-run test. Peaks confirm `len` bars late
  (`ta.pivothigh(len, len)`); do not anchor to the peak bar or the script repaints.
- Suggested inputs: pivot length, peak tolerance % (R2, 4%), min drop between tops % (R3),
  min run-up % (R1), straight-line counter-move tolerance (R4).
- The "tall sides / straight-line run-up" tests (R1/R4) are the features distinguishing a
  Big M from an ordinary double top; ship them as adjustable filters.
- Confirm (and fire the alert) only on the bar where `close < valley_low` first occurs.
