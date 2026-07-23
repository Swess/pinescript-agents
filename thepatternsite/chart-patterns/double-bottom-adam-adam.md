---
id: double-bottom-adam-adam
name: Adam & Adam Double Bottom
aliases: [AADB]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 10, typical: 40}
confirmation: required
rank: {value: 26, of: 39}
stats:
  break_even_failure_rate: 0.16
  avg_move: 0.39
  throwback_rate: 0.67
  pct_meeting_target: 0.73
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/aadb.html
accessed: 2026-07-16
---

# Adam & Adam Double Bottom

## Overview

Two narrow, V-shaped valleys ("Adam" bottoms) at roughly the same price level, separated by
a peak, appearing after a downtrend. The pattern is a bullish reversal but is **not valid
until price confirms** by closing above the peak between the valleys.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading into the pattern |
| Shape | Two distinct valleys that look similar; Adam bottoms are narrow, V-shaped, sometimes with one long price spike |
| Peak | Rise between the two bottoms should measure at least 10%; wide variations allowed |
| Bottom price | Price variation between the bottoms is small (average 1%, allow variations) |
| Separation | Valleys typically weeks apart (median 16 days) |
| Confirmation | Price closes above the peak between the two valleys |
| Volume | Usually higher on formation of the first bottom |

## Detection Rules (computable)

Definitions: `valley1`, `valley2` = swing lows via `ta.pivotlow(l, r)`; `peak` = highest
high strictly between the two valleys.

- **R1 [B]** Prior trend down: `close` at `valley1` is below the close `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Valleys are V-shaped (Adam): narrow — valley width at `1%` above the low spans ≤ 3 bars (default, adjustable).
- **R3 [B]** Bottom prices nearly equal: `abs(low_v1 - low_v2) / min(low_v1, low_v2) <= 0.03` (Bulkowski avg 1%; default tolerance 3% [D]).
- **R4 [B]** Peak rise between bottoms ≥ 10%: `(peak_high - low_v1) / low_v1 >= 0.10`.
- **R5 [B]** Valley separation: `10 <= (bar_v2 - bar_v1) <= 60` (median 16 days; bounds are defaults [D]).
- **R6 [B]** Pattern is only valid on confirmation (see below); before that, treat as potential only.

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > peak_high` (a close above the
highest peak between the two valleys). Without confirmation there is a 48% probability
price continues lower — do not act on the twin bottoms alone.

## Targets & Stops

- Target (measure rule): `target = peak_high + 0.73 * (peak_high - min(low_v1, low_v2))`
  — full-height target hit 73% of the time; the 73% multiplier gives a more reliable target.
- Stop: slightly below the lower of the two bottoms (e.g. `min(low_v1, low_v2) * (1 - 0.005)` [D]).

## Performance

| Metric | Value |
|---|---|
| Overall rank | 26 of 39 (1 = best) |
| Break-even failure rate | 16% |
| Average rise | 39% |
| Throwback rate | 67% |
| % meeting price target | 73% |

Notable: throwbacks are frequent — price often returns to the breakout level before the
main advance. Double bottoms that follow a long flat base produce larger rises.

## Trading Tactics

- Wait for confirmation (close above the center peak) before entering long.
- Place the stop slightly below the lower bottom.
- Expect a possible "handle" — price may waffle after confirmation before trending up.
- Prefer patterns emerging from long flat bases.

## Pine Notes

- Feasibility: **moderate**. Requires pivot-low detection (`ta.pivotlow(len, len)`), which
  confirms a valley only `len` bars after it forms — detection lags; do not anchor signals
  to the valley bar or the script repaints.
- Suggested inputs: pivot length, bottom tolerance % (R3), min peak rise % (R4), min/max
  valley separation (R5), trend-lookback N (R1), target multiplier (0.73).
- Track candidate valleys in `var` arrays/UDTs; confirm the pattern (and fire the alert)
  only on the bar where `close > peak_high` first occurs.
- The "Adam = V-shaped" test (R2) is the most subjective rule; ship it as an optional filter.
