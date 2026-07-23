---
id: 3dc
name: 3DC
aliases: [Three-Day Trend Compression, Trend Compression Pattern]
category: small-pattern
type: either
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/3DC.html
accessed: 2026-07-16
---

# 3DC

## Overview

The three-day trend compression pattern (from Andrea Unger, via Michael Harris's ideas): a
three-bar pattern in which the third bar's height is less than one-third of the combined height
of the first two bars. Position of the bars relative to each other is irrelevant. Appears on
any timeframe and market. Best in stocks (especially downtrend reversals), mediocre in ETFs,
poor in crypto.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Data | Works on any time scale and market |
| Three bars | Three-bar pattern |
| Shape | Third bar's height < 1/3 of the sum of the first two bars' heights; relative position irrelevant |

## Detection Rules (computable)

`h1 = high[2] - low[2]`, `h2 = high[1] - low[1]`, `h3 = high[0] - low[0]` (bar 3 = current).

- **R1 [B]** Third bar compressed: `h3 < (h1 + h2) / 3`.

(No positional constraint — the three bars may be anywhere relative to one another.)

## Confirmation & Breakout

Bulkowski tested upward breakouts in bull markets only: buy stop a penny above the pattern top
(highest of the three bars); stop-loss a penny below the bottom (lowest of the three); target
2× height above the top. Trades where price broke both ways on the same day were ignored
(optimistic bias). Entering the day after the breakout worsens performance.

## Targets & Stops

- Target (height exit): `target = highest_bar_high + 2 * (highest_bar_high - lowest_bar_low)`.
- Stop-loss: a penny below the lowest of the three bars.

## Performance

Bull-market stocks, upward breakouts, 490 stocks, height exit:

| Metric | 3DC Uptrend | Uptrend Bench | 3DC Downtrend | Downtrend Bench |
|---|---|---|---|---|
| Trades | 6,754 | 5,877 | 6,139 | 5,278 |
| Avg profit/loss per trade | $87.83 | $73.54 | $104.70 | $83.91 |
| Win/loss ratio | 42% | 41% | 43% | 42% |

ETFs: $74.51 (up, beats $68.94) / $62.67 (down, worse than $68.34). Crypto: $199.98 (up) /
$105.73 (down) vs $224.62 / $209.61 — underperforms both, don't use.
Notable: in stocks, downtrend (reversal) version does best ($104.70) — reversals beat
continuations.

## Trading Tactics

- Best in stocks; prefer it as a reversal of a downtrend (upward breakout).
- In ETFs only the uptrend version marginally beats the benchmark.
- Avoid in crypto (underperforms in both trends).
- Entry a penny above the top, stop a penny below the bottom, target 2× height.

## Pine Notes

- Feasibility: **easy**. A single height-ratio comparison across three bars; no pivots, no
  repaint. Completes on the third bar's close; breakout confirmation adds a later bar.
- Suggested inputs: compression fraction (default 1/3), target multiplier (default 2.0),
  optional trend filter, timeframe-agnostic (works intraday/daily/weekly).
