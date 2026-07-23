---
id: inverted-3l-r
name: Inverted 3L-R
aliases: [Inverted 3L-R, 3L-Ri, Three Highs and a Reversal]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 4, typical: 4}
confirmation: recommended
rank: {value: 10, of: 23}
stats:
  break_even_failure_rate: 0.46
  avg_move: 0.06
  throwback_rate: null
  pct_meeting_target: 0.45
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/3L-Ri.html
accessed: 2026-07-16
---

# Inverted 3L-R

## Overview

The mirror of the 3L-R: a four-bar pattern of three consecutively higher highs followed by a
reversal bar whose low is below the first bar's low ("three highs and a reversal"). Supposed to
reverse an uptrend downward, but acts as a reversal only 52% of the time (near random), and
continuations outperform reversals.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| 4 bars | Three highs plus a reversal bar |
| Higher highs | Two consecutively higher highs across the first 3 bars (each high above the prior high) |
| Lower low | The last (4th) bar's low is below the first bar's low |

## Detection Rules (computable)

Current bar = bar 4, so bar 3 = `[1]`, bar 2 = `[2]`, bar 1 = `[3]`.

- **R1 [B]** Higher highs across bars 1-3: `high[2] > high[3] and high[1] > high[2]`.
- **R2 [B]** Bar 4 low below bar 1 low: `low[0] < low[3]`.

## Confirmation & Breakout

Short at the open the day after the last bar (or a penny below the pattern bottom for a downward
breakout). Acts as a reversal 52% of the time (roughly random direction); continuations
outperform (drops averaged 7% for continuations vs 6% for reversals; 14% vs 13% in bear markets).

## Targets & Stops

- Measure rule (1× height, downward): `target = lowest_low - (highest_high - lowest_low)`.
  Fulfilled 45% in bull markets, 53% in bear.
- Stops tested: 7% above entry, OR a penny above the pattern's highest high.
- Note: the target-exit stock/ETF/crypto tests on this page were run as UPWARD-breakout longs
  (target 2× height above the top, stop a penny below), same mechanics as 3L-R.

## Performance

Important bull-market results (perfect trades, downward breakout, "trend low" basis):

| Metric | Bull | Bear |
|---|---|---|
| Overall rank (of 23) | 10 | — |
| 5% break-even failure rate | 46% | 29% |
| Average drop | 6% | 14% |
| Measure-rule success | 45% | 53% |

Short-trade results (Table 3, 7% target): bull net -$72.32 (44% wins), bear net +$52.46.
Target-exit long tests (upward breakouts): stocks $74.81 / $91.06 vs $88.58 / $100.27 —
doesn't beat benchmark, don't trade. ETFs $67.53 / $47.38 vs $85.22 / $83.76 — not worth it.
Crypto $234.00 / $31.81 vs $358.38 / $250.23 — benchmark wins, don't trade.

## Trading Tactics

- As a short: prefer continuations (price dropping into the pattern); reversals are near random.
- Consider a pattern-high stop to cut losses (lowers win rate).
- Bulkowski's tests found it does not beat the benchmark in stocks, ETFs, or crypto — trade
  cautiously if at all.

## Pine Notes

- Feasibility: **easy**. Four-bar high/low comparisons only; no pivots, no repaint. Completes on
  bar 4's close.
- Suggested inputs: direction/breakout mode (short vs the upward-breakout long variant tested),
  target multiplier, stop mode (7% vs pattern-high), optional inbound-trend filter, min price.
- The page mixes a short-side "perfect trade" study with upward-breakout long target-exit tables;
  keep the two methodologies distinct when coding.
