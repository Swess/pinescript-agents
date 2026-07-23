---
id: one-day-reversal-top
name: One day reversal, top
aliases: [ODR Top]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 20, of: 23}
stats:
  break_even_failure_rate: 0.48
  avg_move: 0.06
  throwback_rate: null
  pct_meeting_target: 0.67
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/ODRT.html
accessed: 2026-07-16
---

# One day reversal, top

## Overview

A tall single bar at the top of a short-term uptrend that stands alone like a tree atop a
peak: its open and close both sit near the intraday low, and the two adjacent bars' highs are
below its midpoint. It signals a bearish reversal on a downward breakout. Headline stats are
for downward breakouts in a bull market (rank 20 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | One reversal bar, identified using the bar before and the bar after (three bars total) |
| Trend | Short-term uptrend leading in; trade only downward reversals |
| Open & close | Both within 25% of the intraday low (near the bottom of the bar) |
| Surrounding days | Highs of both adjacent bars are below the midpoint of the reversal bar |
| Tall | Reversal bar at least as tall as the one-month average bar height |
| Volume | High volume ideal but excluded from the test (pattern is rare enough) |

## Detection Rules (computable)

Definitions: `range = high - low`; reversal bar is bar `[1]` (needs one confirming bar after);
`avg1M = ta.sma(range, 22)`.

- **R1 [B]** Prior trend up: 5-day linear-regression slope of `(high+low)/2` positive; simplify to `close[1] > close[6]` [D].
- **R2 [B]** Open near low: `(open[1] - low[1]) <= 0.25 * range[1]`.
- **R3 [B]** Close near low: `(close[1] - low[1]) <= 0.25 * range[1]`.
- **R4 [B]** Adjacent highs below midpoint: `high[2] < (high[1]+low[1])/2 and high[0] < (high[1]+low[1])/2`.
- **R5 [B]** Tall bar: `range[1] >= avg1M`.

## Confirmation & Breakout

Breakout is **downward**: wait for a close below the bottom of the reversal (middle) bar.
Bulkowski sells short at the next open after that close. Trade only reversals of the uptrend
(downward breakouts).

## Targets & Stops

- Height: `height = high_mid - low_mid` (highest high minus lowest low of the reversal bar).
- Down target: `low_mid - height`. Measure rule met **67%** (bull, and bear).
- Stop: place beyond the pattern high, or use a fixed % stop [D].

## Performance

| Market | 5% Failure | Avg Drop | Measure-rule success |
|---|---|---|---|
| Bull | 48% | -6% | 67% |
| Bear | 31% | -10% | 67% |

Swing test (4,790 trades): Bull net -$97.80 (42% wins); Bear +$8.80. Works better in a bear
market, which drags prices lower and aids the downward breakout. Measure rule hits 67%
regardless of breakout direction.

## Trading Tactics

- Trade only reversals of the uptrend; short at the next open after a close below the middle bar.
- Use the measure rule (subtract pattern height from the low) — 67% reliable.
- Weak in a bull market (48% fail to drop 5%, net loss in the swing test) — favor bear markets.

## Pine Notes

- Feasibility: **easy**. Mirror of the bottom variant: single tall-bar test plus two neighbor
  checks; the "after" bar means detection lags one bar (evaluate on bar `[1]`). No pivots.
- Suggested inputs: trend lookback `N` (R1), near-low fraction (0.25, R2/R3), tallness multiple
  (1.0, R5), target multiple, stop mode.
- The "stands alone" test (R4) — both neighbors' highs below the reversal bar's midpoint — is
  the distinguishing rule.
