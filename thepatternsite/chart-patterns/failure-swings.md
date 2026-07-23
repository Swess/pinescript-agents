---
id: failure-swings
name: Failure Swings
aliases: []
category: chart-pattern
type: reversal
direction: either
bars: {min: 5, typical: 12}
confirmation: recommended
rank: {value: null, of: null}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/failswing.html
accessed: 2026-07-16
---

# Failure Swings

## Overview

Failure swings are chart patterns that form on indicator lines (classically the Wilder RSI)
rather than on price. They are small M-shaped (bearish) or W-shaped (bullish) patterns that
reliably signal short-term price turning points. In the M shape the indicator's second peak
fails to exceed the first peak, warning of a weakening trend and a likely reversal; the W
shape is the mirror at a trough. No performance statistics are given on the page.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Where | On an indicator line (e.g. RSI), not on price |
| M-shape (bearish) | Two peaks where the second peak fails to rise above the first; ideally spans the overbought trigger line (RSI 70) |
| W-shape (bullish) | Two troughs where the second trough fails to fall below the first; ideally spans the oversold trigger line (RSI 30) |
| Trigger line | Spanning the signal line (70/30) is classic but NOT required — valid swings occur without it |
| Signal | Price begins its turn as the swing forms |

## Detection Rules (computable)

Definitions: run the pattern on an indicator series `ind` (default `ta.rsi(close, 14)`).
`peak1/peak2` = successive `ta.pivothigh(ind, L, L)`; `trough1/trough2` =
successive `ta.pivotlow(ind, L, L)` (default lookback `L = 3` [D]).

- **R1 [D]** Indicator source: `ind = ta.rsi(close, 14)` (default; page notes swings occur on other indicators too — expose the source).
- **R2 [B]** M-shaped (bearish): second peak fails to exceed the first: `ind[peak2] < ind[peak1]`, with an intervening trough between them.
- **R3 [B]** W-shaped (bullish): second trough fails to undercut the first: `ind[trough2] > ind[trough1]`, with an intervening peak between them.
- **R4 [D]** Optional trigger-line span: M-swing peaks straddle `ind >= 70`; W-swing troughs straddle `ind <= 30` (classic but optional per Bulkowski — ship as a filter, default OFF).
- **R5 [D]** Swing proximity: the two peaks (or troughs) occur within `N` bars (default `N = 20` [D]) so the M/W is compact, not two unrelated pivots.

## Confirmation & Breakout

Not a price-breakout pattern. The confirming event is the failure itself: for an M-swing,
the indicator turning down from the lower second peak (optionally after crossing back below
the failure point / the intervening trough level); for a W-swing, turning up from the higher
second trough. Bulkowski treats spanning the 70/30 trigger line as supportive but not
required, so confirmation is **recommended**, not mandatory.

## Targets & Stops

Not stated by Bulkowski. As a default [D], treat the swing as a short-term-reversal signal
and manage with a price-based stop beyond the most recent price swing extreme that formed
alongside the indicator swing; no measure rule exists for this pattern.

## Performance

Not stated by Bulkowski. The page is descriptive (drawn from *Trading Basics*, p. 90) and
provides no failure rate, average move, or ranking.

## Trading Tactics

- Use M-shaped swings as short-term bearish reversal warnings, W-shaped as bullish warnings.
- Don't insist the swing span the 70/30 line — many valid swings do not.
- Apply to indicators beyond RSI (the concept is indicator-agnostic).
- Combine with indicator divergence for confirmation (Bulkowski's "See Also" links).

## Pine Notes

- Feasibility: **moderate**. Detection is on an indicator series via `ta.pivothigh/low`,
  which confirms a pivot only `L` bars after it forms — signals lag by `L` bars; anchoring
  to the pivot bar itself would repaint.
- Suggested inputs: indicator source/length, pivot lookback `L`, overbought/oversold levels
  (70/30), optional trigger-line-span filter, max swing width `N`.
- Inherently subjective parts: "various shapes" of the swing and how strictly to require the
  trigger-line span — expose both as toggles.
- The pattern is timeframe-agnostic (works on any indicator on any TF), but pivot lag makes
  it better suited to confirmation than to precise turn timing.
