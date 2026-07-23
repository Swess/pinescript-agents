---
id: gapping-down-doji
name: Gapping down doji
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 88, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0252
  throwback_rate: null
  pct_meeting_target: 0.95
  reversal_rate: 0.56
  frequency_rank: 57
source: https://thepatternsite.com/GappingDownDoji.html
accessed: 2026-07-16
---

# Gapping down doji

## Overview

A single doji candle that gaps below the prior candle in a downtrend. Theory calls it a
bearish continuation; Bulkowski's tests show a near-random bullish reversal 56% of the
time. Weak post-breakout trend (rank 88), but it meets the measure-rule target 95% of the
time after an up breakout in a bull market.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | Downward |
| Configuration | Price gaps lower and forms a doji (open and close no more than a few pennies apart) |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** Gap lower: `high < low[1]` (gap including shadows, per Bulkowski's breakout definition [D]).
- **R3 [B]** Doji body: `abs(close - open) <= 0.1 * (high - low)` (default 10% body-to-range [D]).

## Confirmation & Breakout

Breakout measured including shadows: upward = `close > high`; downward = `close < low`.
Breaks out upward (bullish reversal) most often (~56%).

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout in the breakout
  direction. Best % meeting target 95% (bull market, up breakout).
- Stop: opposite side of the candle [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish reversal 56% of the time (near random) |
| Overall performance rank | 88 of 103 (1 = best) |
| Frequency rank | 57 |
| Best % meeting target | 95% (bull market, up breakout) |
| Best avg 10-day move | 2.52% (bull market, up breakout) |
| Best 10-day performance rank | 65 (bear market, up breakout) |

Bulkowski is unimpressed: like all doji, behavior is about random (50-59%). Price does not
trend far after it.

## Trading Tactics

- Best within a third of the yearly low (except after an up breakout in a bear market).
- Determine the gap type to anticipate the breakout direction.
- Breaks out upward most often.

## Pine Notes

- Feasibility: **easy**. Single-bar doji test plus a gap-down condition; no pivots.
- Gap-down (`high < low[1]`) is rare on 24h/continuous futures — better on daily equities.
- Suggested inputs: trend-lookback, doji body-to-range threshold, minimum gap size.
