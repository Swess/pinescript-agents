---
id: bearish-2-close
name: Bearish 2-Close
aliases: [Bearish 2-Close Reversal]
category: small-pattern
type: reversal
direction: bearish
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
source: https://thepatternsite.com/2Closebear.html
accessed: 2026-07-16
---

# Bearish 2-Close

## Overview

A three-bar reversal pattern that is supposed to be bearish (breaks out downward 65% of the
time in stocks) but that Bulkowski found does not lead to a sustained trend. Bar 2 makes a
higher high and closes above bar 1; bar 3 makes a still-higher high yet closes below bar 1's
close. Bulkowski advises avoiding it — downward-breakout trades lost money on average.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Three bars | The pattern is exactly three price bars long |
| Bar 1 | Any price bar |
| Bar 2 | Makes a higher high (above bar 1) and closes above bar 1's close |
| Bar 3 | Posts a higher high (above bar 2's high) but closes below bar 1's close |
| Breakout | Downward 65% of the time in stocks |

## Detection Rules (computable)

Convention: current bar = bar 3, so bar 2 = `[1]`, bar 1 = `[2]`.

- **R1 [B]** Bar 2 higher high: `high[1] > high[2]`.
- **R2 [B]** Bar 2 closes above bar 1: `close[1] > close[2]`.
- **R3 [B]** Bar 3 higher high than bar 2: `high[0] > high[1]`.
- **R4 [B]** Bar 3 closes below bar 1: `close[0] < close[2]`.

## Confirmation & Breakout

Bulkowski's tested rule set (upward breakouts only): entry via a buy stop one tick above the
highest bar of the pattern; a downward breakout is a close/move below the lowest bar. The
pattern breaks out downward 65% of the time in stocks. Downward-breakout trades lost money on
average ($63.66 loss in an uptrend, $78.57 loss in a downtrend), so confirmation of a
sustained move is essential and Bulkowski recommends avoiding the pattern.

## Targets & Stops

- Target (height exit): `target = highest_bar_high + 2 * (highest_bar_high - lowest_bar_low)`
  for an upward breakout; mirror below the low for a downward breakout.
- Stop-loss: one tick below the lowest bar of the pattern (upward) / above the highest bar
  (downward).

## Performance

Bull-market stock tests, upward breakouts only, 489 stocks, height exit:

| Metric | 2-Close in Uptrend | Uptrend Benchmark | 2-Close in Downtrend | Downtrend Benchmark |
|---|---|---|---|---|
| Trades | 3,705 | 5,877 | 3,199 | 5,278 |
| Avg profit/loss per trade | $56.52 | $73.54 | $92.77 | $83.91 |
| Win/loss ratio | 40% | 41% | 42% | 42% |
| Avg gain of winners | 8% | 8% | 8% | 9% |
| Avg loss | -4% | -5% | -4% | -5% |

ETFs (94 ETFs): $48.23 (up) / $52.20 (down) vs benchmark $68.94 / $68.34 — underperforms in
both trends. Crypto: $296.56 (up) / $27.75 (down) vs $224.62 / $209.61 — erratic, too few
samples. Notable: pattern underperforms the benchmark in uptrends, outperforms in downtrends
(stocks); Bulkowski recommends caution/avoidance because of the uneven, non-trending behavior.

## Trading Tactics

- Bulkowski's bottom line: avoid trading this pattern; it does not produce a sustained trend.
- If traded, use only upward breakouts (downward breakouts lost money on average).
- Entry a tick above the pattern high, stop a tick below the pattern low, target 2x height.

## Pine Notes

- Feasibility: **easy**. Purely OHLC comparisons across three consecutive bars — no pivot
  detection, no repaint risk; the pattern completes on bar 3's close.
- Suggested inputs: target height multiplier (default 2.0), tick offset for stop/entry.
- No trend filter is required by the definition, but performance splits by inbound 5-day
  trend, so an optional trend filter input is worthwhile for study.
