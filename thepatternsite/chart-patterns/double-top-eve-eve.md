---
id: double-top-eve-eve
name: Double Top, Eve & Eve
aliases: [EEDT, classic double top]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 10, typical: 40}
confirmation: required
rank: {value: 12, of: 36}
stats:
  break_even_failure_rate: 0.20
  avg_move: 0.16
  throwback_rate: 0.65
  pct_meeting_target: 0.43
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/eedt.html
accessed: 2026-07-16
---

# Double Top, Eve & Eve

## Overview

Two wide, rounded ("Eve") peaks near the same price after an uptrend — the classic
double top. Both tops should look *similar* (wide and rounded, spikes numerous and
short if present). It is a bearish reversal that only becomes valid once price closes
below the valley between the two peaks; 60% of twin-peak patterns never confirm.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the pattern |
| Shape | Two distinct tops that look similar; Eve tops are rounded and wide, sometimes with several short spikes |
| Valley | Drop between tops should measure at least 10%, allow exceptions (Bulkowski ignores valley depth when picking patterns) |
| Top price | Variation between peaks is small, often less than 3%; peaks near the same price |
| Separation | Peaks several weeks apart, most 2–6 weeks (another guideline Bulkowski ignores) |
| Confirmation | Confirms once price closes below the valley between the two peaks |
| Volume | Usually higher on formation of the left peak |

## Detection Rules (computable)

Definitions: `peak1`, `peak2` = swing highs via `ta.pivothigh(l, r)`; `valley` = lowest
low strictly between the two peaks.

- **R1 [B]** Prior trend up: `close` at `peak1` above the close `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Both tops are wide/rounded (Eve): each peak spans ≥ 4 bars within 1% of its high (default, adjustable).
- **R3 [B]** Top prices nearly equal: `abs(high_p1 - high_p2) / max(high_p1, high_p2) <= 0.03` (Bulkowski: often less than 3%).
- **R4 [B]** Valley drop between tops ≥ 10%: `(high_p1 - valley_low) / high_p1 >= 0.10` (Bulkowski ignores this; ship as optional).
- **R5 [B]** Peak separation: `10 <= (bar_p2 - bar_p1) <= 30` (most 2–6 weeks; exact bounds are defaults [D]).
- **R6 [B]** Pattern is only valid on confirmation (see below); before that, treat as potential only.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < valley_low` (a close below the
valley between the two peaks). Without confirmation there is a 60% chance price
continues higher without ever confirming the double top.

## Targets & Stops

- Target (measure rule): `target = valley_low - 0.43 * (max(high_p1, high_p2) - valley_low)`
  — height from highest peak to lowest valley times the 43% percentage-meeting-target,
  subtracted from the breakout price (the valley).
- Stop: slightly above the higher of the two peaks (e.g. `max(high_p1, high_p2) * (1 + 0.005)` [D]).

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 12 of 36 (1 = best) |
| Break-even failure rate | 20% |
| Average decline | 16% |
| Pullback rate | 65% |
| % meeting price target | 43% |

Based on 942 perfect trades. Notable: any twin-peak pattern fails to confirm (close
below the valley) 60% of the time; pullbacks hurt post-breakout performance; a rising
volume trend within the pattern improves performance; a short-term rise leading in
gives the best post-breakout results.

## Trading Tactics

- Wait for confirmation (close below the valley floor); without it, 60% of the time
  price continues higher.
- Measure-rule target: pattern height × 43%, projected down from the breakout — note
  the full-height target is met less than half the time.
- Small rise into the pattern → expect a small decline.
- High-velocity move into the pattern → high-velocity move after the breakout.
- Prefer a short-term rise leading in and a rising volume trend within the pattern.
- Expect pullbacks (65%); they hurt performance.

## Pine Notes

- Feasibility: **moderate**. Requires `ta.pivothigh(len, len)` — peaks confirm `len`
  bars late; anchor signals to the confirmation bar (`close < valley_low`), never the
  peak bars, to avoid repainting.
- The "Eve = wide/rounded" test (R2) is the most subjective rule; implement peak width
  as bars spent within 1% of the high and ship it as an optional filter.
- Suggested inputs: pivot length, top tolerance % (R3), min valley drop % (R4,
  optional), min/max peak separation (R5), trend-lookback N (R1), target multiplier
  (0.43).
- Track candidate peaks in `var` arrays/UDTs; fire the alert on the first bar where
  `close < valley_low`. Given only 43% meet the full measure-rule target, consider a
  closer default take-profit input.
