---
id: one-day-reversal-bottom
name: One day reversal, bottom
aliases: [ODR Bottom]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 20, of: 23}
stats:
  break_even_failure_rate: 0.39
  avg_move: 0.08
  throwback_rate: null
  pct_meeting_target: 0.73
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/ODRB.html
accessed: 2026-07-16
---

# One day reversal, bottom

## Overview

A tall single bar at the bottom of a short-term downtrend that stands alone like an inverted
tree atop a peak: its open and close both sit near the intraday high, and the two adjacent
bars' lows are above its midpoint. It signals a bullish reversal on an upward breakout.
Headline stats are for upward breakouts in a bull market (rank 20 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | One reversal bar, identified using the bar before and the bar after (three bars total) |
| Trend | Short-term downtrend leading in; trade only upward reversals |
| Open & close | Both within 25% of the intraday high (near the top of the bar) |
| Surrounding days | Lows of both adjacent bars are above the midpoint of the reversal bar |
| Tall | Reversal bar at least as tall as the one-month average bar height |
| Volume | High volume ideal but excluded from the test (pattern is rare enough) |

## Detection Rules (computable)

Definitions: `range = high - low`; reversal bar is bar `[1]` (needs one confirming bar after,
so it is detected on bar 0); `avg1M = ta.sma(range, 22)`.

- **R1 [B]** Prior trend down: 5-day linear-regression slope of `(high+low)/2` negative; simplify to `close[1] < close[6]` [D].
- **R2 [B]** Open near high: `(high[1] - open[1]) <= 0.25 * range[1]`.
- **R3 [B]** Close near high: `(high[1] - close[1]) <= 0.25 * range[1]`.
- **R4 [B]** Adjacent lows above midpoint: `low[2] > (high[1]+low[1])/2 and low[0] > (high[1]+low[1])/2`.
- **R5 [B]** Tall bar: `range[1] >= avg1M`.

## Confirmation & Breakout

Breakout is **upward**: wait for a close above the top of the reversal (middle) bar. Bulkowski
places a buy stop a penny above the top of the middle bar. Trade only reversals of the
downtrend (upward breakouts).

## Targets & Stops

- Height: `height = high_mid - low_mid` (highest high minus lowest low of the reversal bar).
- Up target: `high_mid + height`. Measure rule met **73%** (bull).
- Stop: place beyond the pattern low, or use a fixed % stop [D].

## Performance

| Market | 5% Failure | Avg Rise | Measure-rule success |
|---|---|---|---|
| Bull | 39% | +8% | 73% |
| Bear | 31% | +10% | 65% |

Swing test (5,53x trades): Bull net +$61.35 (56% wins); Bear -$92.17. The measure rule works
best in a bull market (73%) — a bear market's downtrend fights the upward breakout.

## Trading Tactics

- Trade only reversals of the downtrend; enter on a buy stop a penny above the middle bar's top.
- Use the measure rule (add pattern height to the high) — reliable at 73% in a bull market.
- Expect only a modest 8% average rise; a short-term trade, not a position hold.

## Pine Notes

- Feasibility: **easy**. Single tall-bar test plus two neighbor checks; the "after" bar means
  detection lags by one bar (evaluate the reversal on bar `[1]`). No pivots needed.
- Suggested inputs: trend lookback `N` (R1), near-high fraction (0.25, R2/R3), tallness multiple
  (1.0, R5), target multiple, stop mode.
- The "stands alone" test (R4) is the distinguishing rule — both neighbors' lows must clear the
  reversal bar's midpoint.
