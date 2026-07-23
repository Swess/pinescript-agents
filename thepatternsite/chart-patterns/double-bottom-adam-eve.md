---
id: double-bottom-adam-eve
name: Adam & Eve Double Bottom
aliases: [AEDB]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 10, typical: 50}
confirmation: required
rank: {value: 17, of: 39}
stats:
  break_even_failure_rate: 0.12
  avg_move: 0.43
  throwback_rate: 0.67
  pct_meeting_target: 0.69
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/aedb.html
accessed: 2026-07-16
---

# Adam & Eve Double Bottom

## Overview

Two valleys at roughly the same price after a downtrend, where the first ("Adam") is
narrow and V-shaped and the second ("Eve") is wider and more rounded. The two bottoms
should look distinctly different. It is a bullish reversal, **not valid until price closes
above the peak between the valleys**.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading into the pattern |
| Shape | Two valleys that look different: Adam (first) narrow, V-shaped, maybe one long spike; Eve (second) wide, rounded, with more numerous shorter spikes |
| Peak | Rise between bottoms should measure at least 10% (allow variations); taller patterns perform better |
| Bottom price | Price variation between bottoms is small; both bottom near the same price |
| Separation | Average separation almost two months |
| Confirmation | Price closes above the peak between the two valleys |
| Volume | Usually higher on the left (Adam) valley |

## Detection Rules (computable)

Definitions: `valley1` (Adam), `valley2` (Eve) = swing lows via `ta.pivotlow(l, r)`;
`peak` = highest high strictly between the two valleys.

- **R1 [B]** Prior trend down: `close` at `valley1` below `close` `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Adam (valley1) is narrow/V-shaped: width at `1%` above the low spans ≤ 3 bars (default, adjustable).
- **R3 [D]** Eve (valley2) is wide/rounded: width at `1%` above the low spans ≥ 5 bars, and wider than valley1 (default, adjustable).
- **R4 [D]** Bottom prices nearly equal: `abs(low_v1 - low_v2) / min(low_v1, low_v2) <= 0.04` (default tolerance).
- **R5 [B]** Peak rise between bottoms ≥ 10%: `(peak_high - min(low_v1, low_v2)) / min(low_v1, low_v2) >= 0.10`.
- **R6 [B]** Valley separation ~2 months: `20 <= (bar_v2 - bar_v1) <= 60` (average ~2 months; bounds are defaults [D]).
- **R7 [B]** Pattern valid only on confirmation (see below).

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > peak_high` (a close above the
highest peak between the two valleys). Without confirmation there is a **48%** chance price
continues lower — do not act on the twin bottoms alone.

## Targets & Stops

- Target (measure rule): `target = peak_high + 0.69 * (peak_high - min(low_v1, low_v2))`
  — height (highest peak to lowest valley) times the 69% percentage-meeting-target, added
  to the breakout/peak price.
- Stop: a penny below the lower of the two bottoms [D].

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 17 of 39 (1 = best) |
| Break-even failure rate | 12% |
| Average rise | 43% |
| Throwback rate | 67% |
| % meeting price target | 69% |

Based on 1,020 perfect trades. Notable: patterns after a long flat base produce large
rises (look for a "pothole" on the weekly scale). A short-term decline into the pattern
gives the best performance. Breakouts within a third of the yearly high, and downward
volume trends, both help. Throwbacks hurt performance. Price may form a "handle" after
confirmation before trending up.

## Trading Tactics

- Wait for confirmation (close above the center peak) before entering long.
- Place the stop a penny below the lower bottom.
- Prefer patterns emerging from long flat bases and with tall left (Adam) sides (Big W).
- Expect a possible handle after confirmation before the main advance.
- Favor breakouts within a third of the yearly high with a downward volume trend.

## Pine Notes

- Feasibility: **moderate**. Requires pivot-low detection (`ta.pivotlow(len, len)`), which
  confirms a valley only `len` bars later — detection lags; do not anchor signals to the valley bar or the script repaints.
- Suggested inputs: pivot length, bottom tolerance % (R4), min peak rise % (R5), min/max
  separation (R6), Adam/Eve width thresholds (R2/R3), trend-lookback N, target multiplier (0.69).
- The Adam-vs-Eve shape distinction (R2/R3) is the most subjective; ship the width tests
  as adjustable optional filters.
- Confirm (and fire the alert) only on the bar where `close > peak_high` first occurs.
