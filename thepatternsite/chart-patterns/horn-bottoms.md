---
id: horn-bottoms
name: Horn Bottom
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 2, of: 3}
stats:
  break_even_failure_rate: 0.06
  avg_move: 0.59
  throwback_rate: null
  pct_meeting_target: 0.74
source: https://thepatternsite.com/hornb.html
accessed: 2026-07-16
---

# Horn Bottom

## Overview

An H-shaped, 3-week pattern on the weekly chart: two parallel downward price spikes
separated by one week, plunging below the surrounding price landscape after a downtrend.
Discovered by Bulkowski in 1998; weekly-chart horns perform better than daily ones, and all
statistics here are from the weekly scale. Confirmation is a close above the highest price
of the 3-week pattern.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Chart | Use the weekly chart to locate horns |
| Price trend | Downward leading to the pattern |
| Shape | Inverted steer's horn: two parallel price spikes separated by a week |
| Spikes | Should plummet below the surrounding price landscape, including the middle week (spike length vs the past year no longer required — dropping it improved performance) |
| Confirmation | Valid when price closes above the highest price in the 3-week pattern |

## Detection Rules (computable)

Definitions (weekly bars): `left` = bar[2], `mid` = bar[1], `right` = bar[0] at detection
time; spikes are `left` and `right`; `pattern_high = max(high[2], high[1], high[0])`,
`pattern_low = min(low[2], low[0])`.

- **R1 [B]** Prior trend down: `close[3] < close[3 + N]` with default `N = 10` weeks [D].
- **R2 [B]** Both spikes pierce below the middle week: `low[2] < low[1] and low[0] < low[1]`.
- **R3 [B]** Spikes pierce below the surrounding landscape: `low[2] < ta.lowest(low, K)[3]` and `low[0] < ta.lowest(low, K)[3]` for surrounding lookback `K = 8` weeks (default [D]).
- **R4 [D]** Spikes are roughly parallel/similar depth: `abs(low[2] - low[0]) / min(low[2], low[0]) <= 0.05` (default 5%; note Bulkowski says a *large* difference outperforms — ship as adjustable, not strict).
- **R5 [B]** Confirmation required: signal only when `close > pattern_high` on a later week.

## Confirmation & Breakout

Wait for a weekly close above the highest price in the 3-week pattern before taking a
position — or place a buy stop a penny above that high. Breakout is upward by definition
once confirmed.

## Targets & Stops

- Measure rule: `height = pattern_high - pattern_low` (highest to lowest price of the 3-week
  pattern); `target = pattern_high + 0.74 * height` (74% meet the full-height target).
- Bulkowski's target-exit test used `target = pattern_high + 2 * height` (twice the height
  added to the top of the horn).
- Stop (from his test setup): a penny below the lower of the two horn spikes.

## Performance

Bull market, more than 1,000 perfect trades, weekly scale:

| Metric | Value |
|---|---|
| Overall performance rank | 2 of 3 (weekly scale) |
| Break-even failure rate | 6% |
| Average rise | 59% |
| % meeting price target | 74% |

Target-exit test (489 stocks, bull market, up breakouts, buy stop above horn / stop a penny
below the lower spike / limit at 2x-height target):

| Metric | Horn in uptrend | Uptrend benchmark | Horn in downtrend | Downtrend benchmark |
|---|---|---|---|---|
| Trades | 84 | 9,015 | 77 | 5,701 |
| Avg profit/loss per trade | $452.07 | $232.18 | $620.02 | $259.81 |
| Win/loss ratio | 52% | 46% | 57% | 46% |
| Avg hold time (days) | 65 | 74 | 67 | 81 |

Notable: horns beat the benchmark in both trend directions; downtrend horns do particularly
well — but trade counts are small, so view with skepticism. Not enough horns found in ETFs
or crypto to report. Tall horns, heavy breakout volume, heavier left-spike volume, an inside
right week, and a large price difference between the spike lows all improve performance.

## Trading Tactics

- Locate on the weekly chart; wait for the close above the 3-week pattern high (or buy stop a penny above it).
- Stop a penny below the lower spike.
- Prefer tall horns; prefer heavy breakout volume and left-spike-heavy volume.
- Prefer an inside right week (right spike's range inside the left spike's range).
- Horns near a downtrend's end usually come close to (within about a dollar of) the final low, not exactly at it.
- Some horns appear near the end of uptrends — watch for a trend change.

## Pine Notes

- Feasibility: **easy**. A fixed 3-bar template on weekly bars — pure OHLC comparisons, no
  pivots or trendlines.
- Detect on the close of the right-spike week (bar 0 in the definitions); confirm on the
  first subsequent weekly `close > pattern_high`. Both events are non-repainting on closed bars.
- Run on the weekly timeframe directly rather than `request.security` from daily — Bulkowski's
  stats are weekly-only.
- Suggested inputs: trend lookback N (R1), surrounding lookback K (R3), spike-similarity
  tolerance (R4, optional), target multiplier (0.74 or 2.0 per the test), stop offset.
- Optional filters worth exposing: inside right week (`high[0] < high[2] and low[0] > low[2]`),
  volume comparisons (left spike vs right spike, breakout volume vs average).
