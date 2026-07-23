---
id: bullish-double-key-reversal
name: Bullish Double Key Reversal
aliases: [DKR, Double-Key Reversal]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: required
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/DoubleKeyBull.html
accessed: 2026-07-16
---

# Bullish Double Key Reversal

## Overview

A three-bar pattern found as price makes new near-term lows. Bar 1 closes weakly (lower
25% of its range); bars 2 and 3 each make lower lows but close successively higher,
hinting at a bullish reversal. It outperforms the bearish version but sample counts are
small, so results are unreliable — Bulkowski cautions that a winning backtest may still
lose in live trading.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Trend | Security entering new low ground on a near-term basis (5-day up/down trend sort) |
| Length | Three price bars |
| Bar 1 | Close in the lower 25% of bar 1's own high-low range |
| Bar 2 | Lower low than bar 1 but closes above bar 1's close; range supposed to be short (not enforced) |
| Bar 3 | Lower low than bar 2 but closes above bar 2's close; an outside day may help (not required) |

## Detection Rules (computable)

Bars are indexed `bar1 = [2]`, `bar2 = [1]`, `bar3 = [0]` (current). `range1 = high[2] - low[2]`.

- **R1 [B]** Bar 1 closes in lower 25%: `(close[2] - low[2]) / range1 <= 0.25`.
- **R2 [B]** Bar 2 lower low: `low[1] < low[2]`.
- **R3 [B]** Bar 2 closes above bar 1 close: `close[1] > close[2]`.
- **R4 [B]** Bar 3 lower low: `low[0] < low[1]`.
- **R5 [B]** Bar 3 closes above bar 2 close: `close[0] > close[1]`.
- **R6 [D]** Near-term new lows: `low[2] <= lowest(low, 5)[3]` (proxy for "new low ground"; default 5-bar lookback, adjustable).

## Confirmation & Breakout

Bulkowski tested **upward** breakouts, entering on a buy stop a penny above the highest bar
in the pattern — the confirming trigger for the bullish trade.

## Targets & Stops

- Height: from the highest price bar to the lowest price bar in the pattern.
- Target exit: `target = pattern_high + 2 * height`.
- Loss exit / stop: a penny below the lowest price bar (`pattern_low - tick`).

## Performance

Bulkowski reports no overall rank or break-even/average-move statistics — only
benchmark-relative height-exit tests (upward breakouts, bull market):

| Market | Metric | DKR (up trend) | Benchmark |
|---|---|---|---|
| Stocks | Avg profit/trade | $36.97 | $73.54 |
| ETFs | Avg profit/trade | $77.37 | $68.94 |
| Crypto | Avg profit/trade | $462.23 | $224.62 |

Underperforms the benchmark in stocks but marginally beats it in ETFs and strongly beats it
in cryptocurrency (63% win rate in uptrends). Trade counts are far below the benchmark, so
live results may disappoint.

## Trading Tactics

- Best relative performance is in cryptocurrency uptrends; weakest in stocks.
- Enter on a buy stop a penny above the pattern top; exit at 2x height above the top; stop a
  penny below the pattern bottom.
- Rely on it cautiously given the small sample sizes.

## Pine Notes

- Feasibility: **easy**. Fixed three-bar window using only OHLC comparisons — no pivot
  detection, no repaint; signal known at the close of bar 3.
- Suggested inputs: bar-1 close-position threshold (default 25%), new-low lookback (R6),
  height target multiplier (2x).
- The "entering new low ground" and "short bar-2 range" criteria are loose; R6 gives a
  computable proxy and the range test can be shipped as an optional filter.
