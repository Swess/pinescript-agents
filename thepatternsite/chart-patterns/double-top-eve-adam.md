---
id: double-top-eve-adam
name: Double Top, Eve & Adam
aliases: [EADT]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 10, typical: 40}
confirmation: required
rank: {value: 16, of: 36}
stats:
  break_even_failure_rate: 0.21
  avg_move: 0.15
  throwback_rate: 0.64
  pct_meeting_target: 0.55
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/eadt.html
accessed: 2026-07-16
---

# Double Top, Eve & Adam

## Overview

Two peaks near the same price after an uptrend: the first (Eve) is wide and rounded,
the second (Adam) is narrow and pointed — an inverted V, often a one-day price spike.
The two tops should look *different* (first wide, second narrow). It is a bearish
reversal, valid only once price closes below the valley between the peaks.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the pattern |
| Shape | Two distinct tops that look different: Eve first (rounded, wider), Adam second (narrow, inverted V, often a 1-day spike) |
| Valley | Drop between the tops should measure at least 10% (allow exceptions) |
| Top price | Variation between peaks is small, often less than 3%; peaks near the same price |
| Separation | Peaks several weeks apart, most 2–6 weeks (Bulkowski says he ignores this guideline) |
| Confirmation | Confirms when price closes below the valley between the two peaks |
| Volume | Usually higher on formation of the left (Eve) peak |

## Detection Rules (computable)

Definitions: `peak1` (Eve), `peak2` (Adam) = swing highs via `ta.pivothigh(l, r)`;
`valley` = lowest low strictly between the two peaks.

- **R1 [B]** Prior trend up: `close` at `peak1` above the close `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Eve is wide, Adam is narrow: width of `peak1` at 1% below its high spans ≥ 4 bars; width of `peak2` at 1% below its high spans ≤ 3 bars (defaults, adjustable).
- **R3 [B]** Top prices nearly equal: `abs(high_p1 - high_p2) / max(high_p1, high_p2) <= 0.03` (Bulkowski: often less than 3%).
- **R4 [B]** Valley drop between tops ≥ 10%: `(high_p1 - valley_low) / high_p1 >= 0.10` (allow exceptions).
- **R5 [B]** Peak separation: `10 <= (bar_p2 - bar_p1) <= 30` (most 2–6 weeks; exact bounds are defaults [D]).
- **R6 [B]** Pattern is only valid on confirmation (see below); before that, treat as potential only.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < valley_low` (a close below the
valley between the two peaks). Without confirmation there is a 60% chance price
continues higher without ever confirming the double top.

## Targets & Stops

- Target (measure rule): `target = valley_low - 0.55 * (max(high_p1, high_p2) - valley_low)`
  — height from highest peak to lowest valley times the 55% percentage-meeting-target,
  subtracted from the breakout price.
- Stop: slightly above the higher of the two peaks (e.g. `max(high_p1, high_p2) * (1 + 0.005)` [D]).

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 16 of 36 (1 = best) |
| Break-even failure rate | 21% |
| Average decline | 15% |
| Pullback rate | 64% |
| % meeting price target | 55% |

Based on 662 perfect trades. Notable: pullbacks hurt post-breakout performance; a
short-term rise (0–3 months) into the pattern gives the best post-breakout results;
breakouts in the lowest third of the yearly price range outperform.

## Trading Tactics

- Wait for confirmation (close below the valley floor) before shorting; without it,
  60% of the time price keeps rising.
- Measure-rule target: pattern height × 55%, projected down from the breakout.
- Small rise into the pattern → expect a small decline (price needs something to reverse).
- If the double top forms as an upward retrace in a longer downtrend, confirmation may
  mean the decline is nearly over (10–20% lower, about a month away).
- Prefer patterns with a short-term (0–3 month) rise leading in and breakouts near the
  yearly low.
- Expect pullbacks (64%); they hurt performance.

## Pine Notes

- Feasibility: **moderate**. Needs `ta.pivothigh(len, len)` for the two peaks — detection
  lags by `len` bars; anchor signals to the confirmation bar (`close < valley_low`), not
  the peak bars, to avoid repainting.
- The Eve-vs-Adam width test (R2) is the most subjective rule; implement peak width as
  bars spent within 1% of the peak high and ship it as an optional filter.
- Suggested inputs: pivot length, top tolerance % (R3), min valley drop % (R4), min/max
  peak separation (R5), trend-lookback N (R1), target multiplier (0.55).
- Track candidate peaks in `var` arrays/UDTs; fire the alert only on the first bar where
  `close < valley_low`.
