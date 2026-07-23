---
id: bullish-2-close
name: Bullish 2-close
aliases: [Bullish 2-Close Reversal]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.38
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/2Closebull.html
accessed: 2026-07-16
---

# Bullish 2-close

## Overview

A three-bar bullish reversal. Bar 2 makes a lower low and closes below bar 1; bar 3 makes a
still-lower low yet closes above both bar 1 and bar 2. Bulkowski found it a poor performer —
it only marginally beats the benchmark in stock uptrends and fails elsewhere.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Three bars | The pattern is exactly three price bars long |
| Bar 1 | Any price bar |
| Bar 2 | Makes a lower low (below bar 1) and closes below bar 1's close |
| Bar 3 | Posts a lower low (below bar 2's low) but closes above bar 1's and bar 2's close |
| Breakout | Upward 71% of the time |
| Target | Hits the 2x-height exit target 38% of the time |

## Detection Rules (computable)

Convention: current bar = bar 3, so bar 2 = `[1]`, bar 1 = `[2]`.

- **R1 [B]** Bar 2 lower low: `low[1] < low[2]`.
- **R2 [B]** Bar 2 closes below bar 1: `close[1] < close[2]`.
- **R3 [B]** Bar 3 lower low than bar 2: `low[0] < low[1]`.
- **R4 [B]** Bar 3 closes above bar 1 and bar 2: `close[0] > close[2] and close[0] > close[1]`.

## Confirmation & Breakout

Breaks out upward 71% of the time. Bulkowski's tested entry: a buy stop one tick above the
highest bar of the pattern; stop-loss a tick below the lowest bar. The 2x-height target is
reached only 38% of the time.

## Targets & Stops

- Target (height exit): `target = highest_bar_high + 2 * (highest_bar_high - lowest_bar_low)`.
  Reached 38% of the time.
- Stop-loss: one tick below the lowest bar of the pattern.

## Performance

Bull-market stock tests, upward breakouts only, 489 stocks, height exit:

| Metric | 2-Close in Uptrend | Uptrend Benchmark | 2-Close in Downtrend | Downtrend Benchmark |
|---|---|---|---|---|
| Trades | 6,873 | 5,877 | 5,855 | 5,278 |
| Avg profit/loss per trade | $76.96 | $73.54 | $83.09 | $83.91 |
| Win/loss ratio | 42% | 41% | 42% | 42% |
| Avg gain of winners | 8% | 8% | 8% | 9% |
| Avg loss | -4% | -5% | -4% | -5% |

ETFs (94 ETFs): $36.16 (up) / $41.52 (down) vs benchmark $68.94 / $68.34 — underperforms.
Crypto: $173.84 (up) / $170.38 (down) vs $224.62 / $209.61 — underperforms both trends.
Notable: only a marginal beat in stock uptrends ($76.96 vs $73.54); falls short in downtrends
and flops in ETFs and crypto. Bulkowski says "look elsewhere for a more promising pattern."

## Trading Tactics

- Bulkowski's bottom line: a poor performer; look elsewhere.
- If traded, prefer stocks in an uptrend (the only marginal edge found).
- Entry a tick above the pattern high, stop a tick below the pattern low, target 2x height
  (hit only 38% of the time — consider a nearer target).

## Pine Notes

- Feasibility: **easy**. Three-bar OHLC comparisons only; no pivots, no repaint. Completes on
  bar 3's close.
- Suggested inputs: target height multiplier (default 2.0), tick offset, optional inbound
  5-day trend filter.
