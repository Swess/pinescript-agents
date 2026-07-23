---
id: 1-2-3-trend-change
name: 1-2-3 trend change
aliases: [1-2-3 trend change method, Trader Vic trend change]
category: chart-pattern
type: reversal
direction: either
bars: {min: 15, typical: 50}
confirmation: required
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/123tc.html
accessed: 2026-07-16
---

# 1-2-3 trend change

## Overview

A three-step method (from Victor Sperandeo, popularized by Bulkowski) for detecting a
meaningful trend change on any timeframe: a trendline break (1), a test of the prior
extreme (2), and a close beyond the intervening swing point (3). It works symmetrically —
detecting the end of downtrends (bullish) and the end of uptrends (bearish).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Trendline (downtrend case) | Draw from the highest high to the lowest low on the chart such that price does not cross the trendline until after the lowest low |
| Step 1 | Price closes above the down-sloping trendline — first indication of a trend change |
| Step 2 | Price tests the recent low; the test can dip below the prior low but it must be clear price is moving up, not continuing down |
| Step 3 | Price closes above the recent high formed between the low and the retest — this completes the method |
| Uptrend case | Mirror image: trendline from lowest low to highest high; Step 1 = close below the up trendline, Step 2 = test of the recent high (may slightly exceed it), Step 3 = close below the low between the peaks |
| Timeframe | Applicable to any timeframe, but the amount of data displayed can change which trendline is drawn |

## Detection Rules (computable)

Bullish (downtrend-reversal) case; the bearish case is the mirror image with
highs/lows and inequalities swapped.

Definitions: `A` = lowest low of the downtrend (`ta.pivotlow` or lowest low over the
detection window); `trendline` = line from the highest high preceding `A` to `A`, with
no closes above it before `A`; `B` = highest high between `A` and the retest low.

- **R1 [D]** Prior downtrend exists: `close[at A] < close[A - 20]` (default lookback 20 bars, adjustable).
- **R2 [B]** Trendline validity: no bar between the anchor high and `A` closes above the trendline.
- **R3 [B]** Step 1 — trendline break: first bar after `A` where `close > trendline_value` at that bar.
- **R4 [B]** Step 2 — retest of the low: after the break, price forms a swing low (`point2 = ta.pivotlow(l, r)`) near `A`; `point2` may be below `A`. Default proximity: `abs(low_p2 - low_A) / low_A <= 0.05` (5% [D]).
- **R5 [D]** Retest shows price is turning up, not continuing down: the retest low is followed by at least one higher close within `r` bars (pivot confirmation itself serves as this check).
- **R6 [B]** `B` (the high used in Step 3) lies between `A` and `point2` in time: `bar_A < bar_B < bar_p2`.
- **R7 [B]** Step 3 — completion: `close > high_B`. The trend change is signaled only here.

## Confirmation & Breakout

The pattern **is** its own confirmation: Step 3 (a close above the high between the low
and its retest, or below the low between the high and its retest for uptrends) completes
the method and signals the trend change. Steps 1 and 2 alone are only preliminary
indications — do not act before Step 3.

Bulkowski's study results (see Performance): after a completed downtrend signal, price
climbed at least 20% from the low 73% of the time; after a completed uptrend signal,
price declined at least 20% only 43% of the time.

## Targets & Stops

- No measure rule is stated by Bulkowski for this method. Default target [D]: use the
  20% benchmark from his study — `target = low_A * 1.20` (bullish case) /
  `high_A * 0.80` (bearish case) — or manage with a trailing stop.
- Stop [D]: below the retest low for longs (`low_p2 * (1 - 0.005)`); above the retest
  high for shorts.

## Performance

| Metric | Value |
|---|---|
| Downtrend reversals: price climbed ≥ 20% from the low | 73% (74 of 101 samples) |
| Uptrend reversals: price declined ≥ 20% from the high | 43% (29 of 67 samples) |
| Overall rank | Not ranked |

Notable: the method is markedly more reliable at calling bottoms (73%) than tops (43%).
Bulkowski notes the flaw that how much data is displayed on the chart can determine which
trendline gets drawn, dramatically changing the result.

## Trading Tactics

- Use the method to time trend changes on any timeframe; wait for all three steps.
- Bottoms: the completed signal preceded a ≥ 20% rise 73% of the time — reasonably reliable.
- Tops: only 43% of completed signals led to a ≥ 20% decline — treat bearish signals with
  more caution or demand additional confirmation.
- Be consistent about the lookback window used to anchor the trendline, since it changes
  which trendline is drawn.

## Pine Notes

- Feasibility: **hard**. The core difficulty is programmatic trendline construction: the
  anchor is "highest high to lowest low such that price does not cross until after the
  low" — requires scanning candidate anchor points and validating no intermediate close
  crosses the line.
- Retest detection (R4) needs `ta.pivotlow(len, len)` — confirms `len` bars late; anchor
  signals to the Step 3 close bar, never the pivot bar, to avoid repainting.
- The "clear that price is moving up, not continuing down" criterion (R5) is inherently
  subjective; pivot confirmation is a reasonable proxy but ship the proximity tolerance
  as an input.
- Suggested inputs: trend-detection lookback (R1), pivot length, retest proximity % (R4),
  and a switch for bullish/bearish/both detection.
- Store points A, B, 1, 2 in a UDT with both `time` and `bar_index`; use `xloc.bar_time`
  for drawing the trendline over long formations.
