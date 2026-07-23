---
id: double-bottom-eve-adam
name: Eve & Adam Double Bottom
aliases: [EADB]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 10, typical: 40}
confirmation: required
rank: {value: 20, of: 39}
stats:
  break_even_failure_rate: 0.12
  avg_move: 0.42
  throwback_rate: 0.67
  pct_meeting_target: 0.72
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/eadb.html
accessed: 2026-07-16
---

# Eve & Adam Double Bottom

## Overview

Two valleys at roughly the same price after a downtrend, where the first ("Eve") is wide
and rounded and the second ("Adam") is narrow and V-shaped. The two bottoms should look
distinctly different. It is a bullish reversal, **not valid until price closes above the
peak between the valleys**.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading into the pattern |
| Shape | Two valleys that look different: Eve (first) wide, rounded; Adam (second) narrow, V-shaped, maybe one long spike |
| Peak | Rise between bottoms should measure at least 10% (allow variations) |
| Bottom price | Variation small, usually between 0% and 4%; both bottom near the same price |
| Separation | Several weeks apart, most in the 2-to-7-week range (median 23 days) |
| Confirmation | Price closes above the peak between the two valleys |
| Volume | Higher on the left (Eve) bottom |

## Detection Rules (computable)

Definitions: `valley1` (Eve), `valley2` (Adam) = swing lows via `ta.pivotlow(l, r)`;
`peak` = highest high strictly between the two valleys.

- **R1 [B]** Prior trend down: `close` at `valley1` below `close` `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Eve (valley1) is wide/rounded: width at `1%` above the low spans ≥ 5 bars (default, adjustable).
- **R3 [D]** Adam (valley2) is narrow/V-shaped: width at `1%` above the low spans ≤ 3 bars, and narrower than valley1 (default, adjustable).
- **R4 [B]** Bottom prices nearly equal: `abs(low_v1 - low_v2) / min(low_v1, low_v2) <= 0.04` (Bulkowski "0% to 4%").
- **R5 [B]** Peak rise between bottoms ≥ 10%: `(peak_high - min(low_v1, low_v2)) / min(low_v1, low_v2) >= 0.10` (allow variations).
- **R6 [B]** Valley separation 2-7 weeks: `10 <= (bar_v2 - bar_v1) <= 35` (median 23 days; bounds are defaults [D]).
- **R7 [B]** Pattern valid only on confirmation (see below).

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > peak_high` (a close above the
highest peak between the two valleys). Without confirmation there is a **48%** chance price
continues lower — do not act on the twin bottoms alone.

## Targets & Stops

- Target (measure rule): `target = peak_high + 0.72 * (peak_high - min(low_v1, low_v2))`
  — height (highest peak to lowest valley) times the 72% percentage-meeting-target, added
  to the breakout/peak price.
- Stop: a penny below the lower of the two bottoms [D].

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 20 of 39 (1 = best) |
| Break-even failure rate | 12% |
| Average rise | 42% |
| Throwback rate | 67% |
| % meeting price target | 72% |

Based on 759 perfect trades. Notable: a long-term decline (>6 months) into the pattern gives
the best performance, but only one point above short-term declines. Breakouts in the middle
third of the yearly range perform best. A downward volume trend helps. Throwbacks hurt
performance. Price may form a "handle" after confirmation; a long flat base beforehand
predicts a large rise (Big W).

## Trading Tactics

- Wait for confirmation (close above the center peak) before entering long.
- Place the stop a penny below the lower bottom.
- Prefer patterns emerging from long flat bases and with tall left sides (Big W).
- Expect a possible handle after confirmation before the main advance.
- Favor breakouts in the middle third of the yearly range with a downward volume trend.

## Pine Notes

- Feasibility: **moderate**. Requires pivot-low detection (`ta.pivotlow(len, len)`); valleys
  confirm `len` bars late — detection lags; do not anchor signals to the valley bar or the script repaints.
- Suggested inputs: pivot length, bottom tolerance % (R4), min peak rise % (R5), separation
  bounds (R6), Eve/Adam width thresholds (R2/R3), trend-lookback N, target multiplier (0.72).
- The Eve-vs-Adam shape distinction (R2/R3) is the most subjective; ship the width tests
  as adjustable optional filters.
- Confirm (and fire the alert) only on the bar where `close > peak_high` first occurs.
