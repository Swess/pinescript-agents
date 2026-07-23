---
id: 3-falling-peaks
name: 3 falling peaks
aliases: [Three falling peaks, 3FP]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 15, typical: 45}
confirmation: required
rank: {value: 21, of: 36}
stats:
  break_even_failure_rate: 0.22
  avg_move: 0.15
  throwback_rate: 0.66
  pct_meeting_target: 0.23
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/3fp.html
accessed: 2026-07-16
---

# 3 falling peaks

## Overview

Three peaks, each successive peak below the prior one, usually after an upward price
trend. It is a bearish reversal that signals the possible start of a bear trend (in a
stock or, when seen in an index, the broad market), but it is **not valid until price
closes below the lowest valley** between the three peaks.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Usually upward leading to the start of the pattern |
| Shape | Three peaks, each one lower than the prior one |
| Symmetry | Each peak should look similar to the others (all wide/thick or all narrow); peaks do NOT have to follow a trendline |
| Confirmation | Price closes below the lowest valley in the pattern |

## Detection Rules (computable)

Definitions: `peak1`, `peak2`, `peak3` = consecutive swing highs via `ta.pivothigh(l, r)`;
`valleyA` = lowest low between `peak1` and `peak2`; `valleyB` = lowest low between
`peak2` and `peak3`; `lowest_valley = min(low_vA, low_vB)`.

- **R1 [B]** Prior trend up: `close` at `peak1` is above the close `N` bars earlier (default `N = 20` [D]).
- **R2 [B]** Peaks strictly descending: `high_p1 > high_p2 > high_p3`.
- **R3 [D]** Peaks are distinct swings: each pivot confirmed with left/right strength ≥ 3 bars (default, adjustable).
- **R4 [D]** Peak similarity (symmetry): peak widths (bars above 99% of the pivot high) within a factor of 3 of each other; ship as an optional filter.
- **R5 [D]** Pattern span: `10 <= (bar_p3 - bar_p1) <= 100` (defaults; Bulkowski states no bounds).
- **R6 [B]** Pattern valid only on confirmation: `close < lowest_valley` after `peak3`.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: a close below the lowest valley between
the three peaks (`close < min(low_vA, low_vB)`). Without that close, "you don't have a
three falling peaks pattern." Aggressive variant ("valley short") [B]: if the first
valley (A) is below the second (B), use the second valley (B) as the confirmation price
instead of the lowest one, for an earlier entry.

## Targets & Stops

- Target (measure rule): `target = lowest_valley - 0.23 * (high_p1 - lowest_valley)` —
  only 23% of patterns reach the full-height target, so Bulkowski applies the 23%
  multiplier to the height (highest peak to lowest valley).
- Stop: slightly above the most recent minor high (peak 3), e.g.
  `high_p3 * (1 + 0.005)` [D].
- Cover the short if price rises above any of the peaks.

## Performance

Bull-market results (2,300 perfect trades):

| Metric | Value |
|---|---|
| Overall performance rank | 21 of 36 (1 = best) |
| Break-even failure rate | 22% |
| Average decline | 15% |
| Pullback rate | 66% |
| % meeting price target | 23% |

Notable: pullbacks (66% of the time) hurt performance, and the decline below the
confirmation line is frequently shallow — several of Bulkowski's examples rebound after
a meager drop. The pattern appears often, in stock and other markets alike. Waiting for
confirmation before exiting a long can mean a loss or a large profit give-back, so
Bulkowski does not recommend it as a bear-market timing indicator — but its appearance
means avoid long positions.

## Trading Tactics

- Wait for a close below the lowest valley before shorting; use the measure rule with the
  23% multiplier for a conservative target.
- Aggressive: if valley A is below valley B, confirm off valley B for an earlier entry.
- Stop slightly above peak 3; cover if price rises above any peak.
- Expect a pullback to the breakout level 66% of the time — it hurts performance.
- Treat the pattern as a warning to avoid new longs even before confirmation.

## Pine Notes

- Feasibility: **moderate**. Three consecutive `ta.pivothigh` detections plus the valley
  lows between them; pivots confirm `len` bars late, so fire signals only on the
  confirmation-close bar (never anchor to the peak bars, or the script repaints).
- The symmetry criterion (R4) is the most subjective — implement as an optional filter or
  omit initially; R2/R6 carry the pattern.
- Suggested inputs: pivot length, trend-lookback N (R1), max pattern span (R5), target
  multiplier (default 0.23), aggressive valley-short toggle.
- Distinguish from a triple top (roughly equal peaks) and a descending triangle (flat
  valley support): require strict descent per R2 and no equal-valley constraint.
- Track the three peaks and two valleys in a `var` UDT array storing `time`, `bar_index`,
  and price; reset when a new high above `peak1` invalidates the sequence.
