---
id: cloud-banks
name: Cloud banks
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 250, typical: 1000}
confirmation: recommended
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.86
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/Cloudbank.html
accessed: 2026-07-16
---

# Cloud banks

## Overview

A cloud bank is a multi-year wall of horizontal price movement (a solid block of overhead
resistance with a flat bottom) followed by a swift, dramatic decline of at least 40% —
often in a bear market. The opportunity is the recovery: buy near the lowest low after
the decline and hold as price climbs back into the cloud. Bulkowski discovered the
pattern in 2010; it is a long-duration, buy-and-hold investment setup best found on
weekly or monthly charts.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Horizontal resistance (the cloud) | Price moves horizontally or almost so; the bottom of the region is flat (valleys bottom near the same price), the top can be irregular. Avoid clouds trending downward — horizontal is best |
| Years | The cloud should last for years (be flexible); the longer it lasts, the easier it is to pick a target |
| Price decline | After the cloud ends, price makes a swift, dramatic decline of at least 40%; larger declines mean higher profit potential. Often caused by a bear market; recovery should occur in a bull market |
| Lowest low | With a sharp, near straight-line drop, expect a V-shaped recovery. Find the lowest low by waiting for price to rise above a 30-week SMA (weekly chart); the lowest valley between the cloud's end and the crossover is the lowest low |

## Detection Rules (computable)

Definitions: `cloud_base` = flat support level of the horizontal region (e.g. the mode /
median of pivot lows in the cloud window); `cloud_end` = last bar of the horizontal
phase; `lowest_low` = lowest low between `cloud_end` and the moving-average crossover.

- **R1 [B]** Cloud is horizontal and long-lived: over a window of at least `W` bars (default `W = 500` daily bars ≈ 2 years [D]), pivot lows cluster near one level — `abs(pivot_low_i - cloud_base) / cloud_base <= 0.05` for all cloud valleys (tolerance default 5% [D]).
- **R2 [B]** Cloud does not slope downward: linear-regression slope of closes over the cloud window `>= 0` (or within a small negative tolerance, default -1%/year [D]) — downward-sloping clouds are a trap.
- **R3 [B]** Post-cloud decline ≥ 40%: `(cloud_base - lowest_low) / cloud_base >= 0.40`.
- **R4 [B]** Recovery signal: `close` crosses above the simple moving average — 5-month SMA (monthly), 30-week SMA (weekly), or 150-day SMA (daily): `ta.crossover(close, ta.sma(close, 150))` on the daily chart.
- **R5 [B]** Lowest low = lowest valley between `cloud_end` and the crossover bar; alternative bottom evidence: a higher valley and higher peak (ugly-double-bottom behavior).
- **R6 [B]** Profit-potential filter: only take the trade if the drop from cloud base to crossover price is at least 40% — `(cloud_base - crossover_price) / cloud_base >= 0.40`; less than 40% suggests price may keep falling.

## Confirmation & Breakout

There is no classic breakout. The actionable trigger is the **recovery confirmation**:
price closes above the 5-month / 30-week / 150-day simple moving average after the ≥40%
decline (R4), with sufficient remaining distance to the cloud base (R6). Buying before
this crossover risks catching a still-falling price.

## Targets & Stops

- Target: `target = cloud_base` — the bottom of the cloud bank ("normal" price of the
  stock). 86% of studied patterns saw price climb back to at least the cloud base.
  Extended target: the cloud top, but moving through the cloud takes much longer.
- Potential profit = `cloud_base - lowest_low` (or higher if held longer).
- Stop: not stated by Bulkowski; a default is below the lowest low (e.g.
  `lowest_low * (1 - 0.02)` [D]). Verify the bottom with bullish divergence on MACD or
  RSI before entry.

## Performance

| Metric | Value |
|---|---|
| Patterns studied | 439 patterns in 371 stocks, Jan 1990 – Oct 2018 |
| Recovered to cloud base | 86% |
| Average drop, cloud base to lowest low | 68% |
| Avg time, lowest low back to cloud base | 1.7 years (median 1.1, max 9.1) |

Recovery-time frequency distribution (cumulative): 21% of stocks returned to the cloud
base within 0.5 years, 48% within 1 year, 65% within 1.5, 73% within 2, 100% within 5.
Reaching the cloud **top** is slower: 16% within 0.5 years, 30% within 1, 52% within 2,
100% within 5. It takes much longer to move through the cloud than to reach its base.
Non-recoveries were patterns formed too recently or stocks that never recovered.

## Trading Tactics

- Hunt on weekly or monthly charts (Bulkowski prefers monthly); require a flat cloud bottom.
- Never invest in a cloud bank that slopes downward — it signals a broken business model.
- Wait for price to stop tumbling: buy when price closes above the 5-month/30-week/150-day SMA, provided the remaining run to the cloud base justifies the trade (drop ≥ 40%).
- Verify the lowest low with other evidence (higher valley + higher peak, or bullish MACD/RSI divergence).
- Hold until price approaches the bottom of the cloud bank — recovery can take years; this is buy-and-hold.
- Sell when price returns to the cloud base; most of the profit is over (moving through the cloud takes as long again).

## Pine Notes

- Feasibility: **hard**. Multi-year structure detection strains Pine's lookback limits —
  on daily bars a years-long cloud plus decline easily exceeds the 500-bar max lookback
  for series indexing; run on **weekly or monthly** timeframes and cache levels in `var`
  variables instead of deep history indexing.
- Cloud detection: maintain a rolling window of confirmed `ta.pivotlow` values; flag a
  cloud when the trailing `W` bars of pivot lows cluster within tolerance of a level
  (R1) with a non-negative regression slope (R2).
- The entry signal itself is simple: `ta.crossover(close, ta.sma(close, maLen))` with
  `maLen` per timeframe (150 daily / 30 weekly / 5 monthly), gated by the ≥40% drop
  from the recorded `cloud_base` (R3/R6).
- Suggested inputs: cloud window length, base tolerance % (R1), slope tolerance (R2),
  min decline % (default 0.40), MA length, optional RSI/MACD divergence confirmation.
- Subjective parts: where exactly the cloud "ends" and the irregular cloud top — record
  `cloud_base` from valley clustering and treat the top as informational only.
