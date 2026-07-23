---
id: flat-base
name: Flat Base
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 30, typical: 65}
confirmation: required
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.85
source: https://thepatternsite.com/FlatBase.html
accessed: 2026-07-16
---

# Flat Base

## Overview

A long stretch of horizontal price movement, often following a sharp decline (Bulkowski's
"emergency landing" analogy), from which price eventually takes off upward. Neither the top
nor the bottom of the region needs to be perfectly flat — it just has to read as a
horizontal zone, and Bulkowski searches for it on a **linear** (not log) price scale. The
subsequent rise is often choppy rather than a straight-line mirror of the decline.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Chart scale | Switch to linear/arithmetic scale to find them |
| Timeframe | Daily, weekly, or even intraday |
| Price action | Price moves horizontally |
| Boundaries | Tops and bottom need not be horizontal (unlike rectangle bottoms) |
| Duration | Any duration; the longer the better |
| Related stat | Rectangle bottoms (a special case) longer than the median 65 days rose 51% vs 41% for shorter ones |

## Detection Rules (computable)

Definitions: window `W` = candidate flat-base bars ending at the current bar;
`top = ta.highest(high, W)`, `bot = ta.lowest(low, W)`, `height = top - bot`.

- **R1 [D]** Horizontal price: total range is small relative to price — `height / bot <= 0.15` over the window (default 15%, adjustable).
- **R2 [D]** No trend inside the base: `abs(ta.linreg(close, W, 0) - ta.linreg(close, W, W - 1)) / bot <= 0.05` (regression drift ≤ 5% across the window, default).
- **R3 [B]** Duration: the longer the better — minimum `W >= 30` bars [D]; flag "long base" when `W > 65` bars (Bulkowski: >65 days performs best).
- **R4 [D]** Prior decline (typical context, optional filter): `close[W] > top * 1.2` — price fell into the base (default 20%, adjustable).
- **R5 [B]** Confirmation required: no signal until price closes above the horizontal line along the price tops (see below).

## Confirmation & Breakout

Draw a horizontal line along the price tops of the base. **Buy when price closes above this
line** (`close > top`). Downward breakouts (a close below the base bottom) are the exit /
invalidation signal for longs.

## Targets & Stops

- Up breakout (measure rule): `target = top + 0.85 * (top - bot)` — price hits the full-height
  target 85% of the time, so 85% of the height is used as the minimum move.
- Down breakout: `target = bot - 0.50 * (top - bot)`; discard if the target is below 0.
- Sanity check: convert the projected move to a percentage of the breakout price; if it implies
  a 30–50% move, distrust it. Look for nearby support/resistance that could stall price.
- Stop: closer than the bottom of the pattern to limit loss (Bulkowski suggests tighter than
  the base bottom); exit longs on a close below the base bottom.

## Performance

No formal statistics block for the flat base itself. Bulkowski cites his rectangle-bottom
research (a special case of the flat base), bull market, upward breakouts:

| Metric | Value |
|---|---|
| Average rise, base shorter than median 65 days | 41% |
| Average rise, base longer than 65 days | 51% |
| % hitting full-height upward target | 85% |
| % hitting full-height downward target | ~50% |

Notable: longer bases outperform shorter ones by 24% (relative). Search on linear scale —
log scaling hides flat bases after large declines.

## Trading Tactics

- Prefer flat bases longer than 65 days/bars.
- Draw a horizontal line along the tops; buy the close above it.
- Place the stop tighter than the base bottom; close longs if price closes below the bottom.
- Use 85% of the height projected up from the top as a minimum target; check it against nearby
  support/resistance and reject implausibly large projected percentage moves.

## Pine Notes

- Feasibility: **easy**. Rolling `ta.highest`/`ta.lowest` plus a range-compression test —
  no pivots or trendlines needed.
- Scan multiple window lengths (e.g. 30/65/100 bars) or make `W` an input; longest qualifying
  window wins.
- Freeze `top`/`bot` when the base qualifies; fire the alert only on the first `close > top`
  to avoid the moving-ceiling repaint (a rising `ta.highest` chases price).
- Suggested inputs: window length(s), max range % (R1), max drift % (R2), min bars / long-base
  threshold (R3), prior-decline filter toggle (R4), target multipliers (0.85 / 0.50).
- Subjective criterion: "looks horizontal" — R1+R2 jointly approximate it; linear-vs-log
  scaling is a chart-display concern and does not affect the math.
