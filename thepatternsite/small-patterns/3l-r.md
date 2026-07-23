---
id: 3l-r
name: 3L-R
aliases: [3L-R, Three Lows and a Reversal]
category: small-pattern
type: continuation
direction: bullish
bars: {min: 4, typical: 4}
confirmation: recommended
rank: {value: 14, of: 23}
stats:
  break_even_failure_rate: 0.38
  avg_move: 0.09
  throwback_rate: null
  pct_meeting_target: 0.56
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/3L-R.html
accessed: 2026-07-16
---

# 3L-R

## Overview

A four-bar pattern (three lower lows followed by a reversal bar), from Paolo Pezzutti / Michael
Harris. "3L-R" = three lows and a reversal. Three consecutive lower lows, then a final bar whose
high exceeds the first bar's high. Supposed to reverse a downtrend, but it actually acts as a
continuation 53% of the time, and continuations outperform.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| 4 bars | Three lows plus a reversal bar |
| Lower lows | Two consecutively lower lows across the first 3 bars (each low below the prior low) |
| Higher high | The last (4th) bar's high is above the first bar's high |

## Detection Rules (computable)

Current bar = bar 4, so bar 3 = `[1]`, bar 2 = `[2]`, bar 1 = `[3]`.

- **R1 [B]** Lower lows across bars 1-3: `low[2] < low[3] and low[1] < low[2]`.
- **R2 [B]** Bar 4 high above bar 1 high: `high[0] > high[3]`.

## Confirmation & Breakout

Buy at the open the day after the last bar (or a penny above the pattern top). Acts as a
continuation 53% of the time; look for price rising into the pattern (continuations averaged 9%
vs 8% for reversals; same in bear markets).

## Targets & Stops

- Measure rule (1× height): `target = highest_high + (highest_high - lowest_low)`. Fulfilled 56%
  in bull markets, 47% in bear.
- Target-exit tests used 2× height: `target = highest_high + 2 * (highest_high - lowest_low)`.
- Stops tested: 7% below buy, OR a penny below the pattern's lowest low. The pattern stop cut
  losses sharply but lowered the win rate.

## Performance

Important bull-market results (perfect trades, "trend high" basis):

| Metric | Bull | Bear |
|---|---|---|
| Overall rank (of 23) | 14 | — |
| 5% break-even failure rate | 38% | 34% |
| Average rise | 9% | 9% |
| Measure-rule success | 56% | 47% |

Target-exit stock tests (497 stocks, upward breakouts, height exit): $86.19 (up) / $106.33
(down) vs benchmark $88.58 / $100.27 — barely beats benchmark, and only in downtrends. ETFs:
$80.68 / $44.50 vs $85.22 / $83.76 — not worth trading. Crypto: $282.20 / $151.02 vs $358.38 /
$250.23 — benchmark wins, don't trade.
7%-target trading (Table 3): bull net +$75.93 (57% wins), bear net -$60.33.

## Trading Tactics

- Prefer it as a continuation (price rising into the pattern); continuations outperform reversals.
- Buy at next open; consider a pattern-low stop to cap losses (at the cost of win rate).
- Marginal in stocks; skip ETFs and crypto per Bulkowski's tests.

## Pine Notes

- Feasibility: **easy**. Four-bar low/high comparisons only; no pivots, no repaint. Completes on
  bar 4's close.
- Suggested inputs: target multiplier (measure rule 1× vs height-exit 2×), stop mode (7% vs
  pattern-low), optional inbound-trend filter, min price.
- Note the "avg rise/failure/measure" stats are on a trend-high basis (Bulkowski's perfect-trade
  methodology), distinct from the target-exit trading tables.
