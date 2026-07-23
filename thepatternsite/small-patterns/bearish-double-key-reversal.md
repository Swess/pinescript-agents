---
id: bearish-double-key-reversal
name: Bearish Double Key Reversal
aliases: [DKR, Double-Key Reversal]
category: small-pattern
type: reversal
direction: bearish
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
source: https://thepatternsite.com/DoubleKeyBear.html
accessed: 2026-07-16
---

# Bearish Double Key Reversal

## Overview

A three-bar pattern found as price makes new near-term highs. Bar 1 closes strongly (upper
25% of its range); bars 2 and 3 each make higher highs but close successively lower,
hinting at a bearish reversal. Upward breakouts occurred 39% of the time in stocks, so the
pattern leans bearish — but Bulkowski's tests show it underperforms a random three-bar
selection, so he advises against trading it in stocks and ETFs.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Trend | Security entering new high ground on a near-term basis (5-day up/down trend sort) |
| Length | Three price bars |
| Bar 1 | Close in the upper 25% of bar 1's own high-low range |
| Bar 2 | Higher high than bar 1 but closes below bar 1's close; range supposed to be short (not enforced) |
| Bar 3 | Higher high than bar 2 but closes below bar 2's close; an outside day may help (not required) |

## Detection Rules (computable)

Bars are indexed `bar1 = [2]`, `bar2 = [1]`, `bar3 = [0]` (current). `range1 = high[2] - low[2]`.

- **R1 [B]** Bar 1 closes in upper 25%: `(high[2] - close[2]) / range1 <= 0.25`.
- **R2 [B]** Bar 2 higher high: `high[1] > high[2]`.
- **R3 [B]** Bar 2 closes below bar 1 close: `close[1] < close[2]`.
- **R4 [B]** Bar 3 higher high: `high[0] > high[1]`.
- **R5 [B]** Bar 3 closes below bar 2 close: `close[0] < close[1]`.
- **R6 [D]** Near-term new highs: `high[2] >= highest(high, 5)[3]` (proxy for "new high ground"; default 5-bar lookback, adjustable).

## Confirmation & Breakout

Downward breakouts occurred 61% of the time (upward 39%) in stocks. Bulkowski's test used
**upward** breakouts only, entering on a buy stop a penny above the highest bar in the
pattern. For the intended bearish trade, treat a close/penny below the lowest bar of the
pattern as the confirming trigger.

## Targets & Stops

- Height: from the highest price bar to the lowest price bar in the pattern.
- Target exit (as tested, upward breakout): `target = pattern_high + 2 * height`.
- Loss exit / stop: a penny below the lowest price bar (`pattern_low - tick`).

## Performance

Bulkowski reports no overall rank or break-even/average-move statistics for this pattern —
only benchmark-relative height-exit tests (upward breakouts, bull market):

| Market | Metric | DKR (up trend) | Benchmark |
|---|---|---|---|
| Stocks | Avg profit/trade | $33.71 | $73.54 |
| ETFs | Avg profit/trade | $10.50 | $68.94 |

The bullish-tested version loses money in stocks regardless of inbound trend and
underperforms the benchmark in ETFs. Too rare in cryptocurrency (<30 trades) to assess.

## Trading Tactics

- Bulkowski advises against trading this pattern in stocks and ETFs — a random three-bar
  pattern does better.
- If traded, note the intended breakout is downward (61%); the height-exit long test was
  only for research comparison.

## Pine Notes

- Feasibility: **easy**. Fixed three-bar window using only OHLC comparisons — no pivot
  detection, no repaint; signal known at the close of bar 3.
- Suggested inputs: bar-1 close-position threshold (default 25%), new-high lookback (R6),
  height target multiplier (2x).
- The "entering new high ground" and "short bar-2 range" criteria are loose; R6 gives a
  computable proxy and the range test can be shipped as an optional filter.
