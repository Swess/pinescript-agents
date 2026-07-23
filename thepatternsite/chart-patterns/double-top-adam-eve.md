---
id: double-top-adam-eve
name: Adam & Eve Double Top
aliases: [AEDT]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 10, typical: 40}
confirmation: required
rank: {value: 10, of: 36}
stats:
  break_even_failure_rate: 0.21
  avg_move: 0.16
  throwback_rate: 0.64
  pct_meeting_target: 0.54
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/aedt.html
accessed: 2026-07-16
---

# Adam & Eve Double Top

## Overview

Two peaks at roughly the same price after an uptrend, where the first ("Adam") is a narrow
inverted V and the second ("Eve") is wider and more rounded. The two tops should look
distinctly different. It is a bearish reversal, **not valid until price closes below the
valley between the peaks**. Unconfirmed twin peaks fail (price rises) 60% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading into the pattern |
| Shape | Two distinct tops that look different: Adam (first) narrow inverted V; Eve (second) wider, more rounded |
| Valley | Drop between tops should measure at least 10% (allow exceptions) |
| Top price | Variation between peaks small, less than 3%; both peak near the same price |
| Separation | Several weeks apart, most in the 2-to-7-week range |
| Confirmation | Price closes below the valley between the two peaks |
| Volume | Usually higher on the left (Adam) peak than the right |

## Detection Rules (computable)

Definitions: `peak1` (Adam), `peak2` (Eve) = swing highs via `ta.pivothigh(h, r)`;
`valley` = lowest low strictly between the two peaks.

- **R1 [B]** Prior trend up: `close` at `peak1` above `close` `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Adam (peak1) is narrow/V-shaped: width at `1%` below the high spans ≤ 3 bars (default, adjustable).
- **R3 [D]** Eve (peak2) is wide/rounded: width at `1%` below the high spans ≥ 5 bars, and wider than peak1 (default, adjustable).
- **R4 [B]** Peak prices nearly equal: `abs(high_p1 - high_p2) / min(high_p1, high_p2) <= 0.03` ("less than 3%").
- **R5 [B]** Valley drop between peaks ≥ 10%: `(min(high_p1,high_p2) - valley_low) / min(high_p1,high_p2) >= 0.10` (allow exceptions).
- **R6 [B]** Peak separation 2-7 weeks: `10 <= (bar_p2 - bar_p1) <= 35` (default bounds from "2 to 7 week range").
- **R7 [B]** Pattern valid only on confirmation (see below).

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < valley_low` (a close below the
valley between the two peaks). Without confirmation there is a **60%** chance price
continues higher — do not short the twin peaks alone.

## Targets & Stops

- Target (measure rule): `target = valley_low - 0.54 * (highest_peak_high - valley_low)`
  — height times the 54% percentage-meeting-target, subtracted from the breakout/valley price.
- Stop: above the Eve peak — the wide, rounded top makes good resistance.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 10 of 36 (1 = best) |
| Break-even failure rate | 21% |
| Average decline | 16% |
| Pullback rate | 64% |
| % meeting price target | 54% |

Based on 651 perfect trades. Notable: a short- to intermediate-term rise into the pattern
gives the best post-breakout performance. Breakouts in the lowest third of the yearly range
perform best (difference with other ranges small). Pullbacks hurt performance.

## Trading Tactics

- Wait for confirmation (close below the valley) before shorting.
- Place the stop above the Eve peak (resistance).
- Prefer a short- to intermediate-term rise into the pattern.
- Favor breakouts in the lowest third of the yearly range.
- If the top appears after a long-term decline, confirmation may signal the decline nearing its end.

## Pine Notes

- Feasibility: **moderate**. Requires pivot-high detection (`ta.pivothigh(len, len)`); peaks
  confirm `len` bars late — detection lags; do not anchor signals to the peak bar or the script repaints.
- Suggested inputs: pivot length, peak tolerance % (R4), min valley drop % (R5), separation
  bounds (R6), Adam/Eve width thresholds (R2/R3), trend-lookback N, target multiplier (0.54).
- The Adam-vs-Eve shape distinction (R2/R3) is the most subjective; ship the width tests
  as adjustable optional filters.
- Confirm (and fire the alert) only on the bar where `close < valley_low` first occurs.
