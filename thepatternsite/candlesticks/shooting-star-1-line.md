---
id: shooting-star-1-line
name: Shooting star (1 line)
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 55, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0386
  throwback_rate: null
  pct_meeting_target: 0.84
  reversal_rate: 0.59
  frequency_rank: 37
source: https://thepatternsite.com/ShootingStar.html
accessed: 2026-07-16
---

# Shooting star (1 line)

## Overview

A single-candle bearish reversal that appears in an uptrend: a small real body (not a
doji) with a tall upper shadow at least twice the body height and little or no lower
shadow. It looks like a gravestone doji but the open and close differ. Bulkowski's stats
show it acts as a reversal only 59% of the time ("near random").

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | Upward leading into the pattern |
| Body | Small, but not a doji (open ≠ close) |
| Upper shadow | Tall — at least twice the height of the body |
| Lower shadow | None or very small |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the candle: `close > close[5]` (5-bar uptrend default [D]).
- **R2 [B]** Small body but not a doji: `body > 0` and `body <= 0.3 * range` (small-body default 30% [D]).
- **R3 [B]** Tall upper shadow ≥ 2× body: `(high - max(open, close)) >= 2 * body`.
- **R4 [B]** Little/no lower shadow: `(min(open, close) - low) <= 0.1 * range` (default 10% [D]).

Where `body = abs(close - open)` and `range = high - low`.

## Confirmation & Breakout

Downward breakout = close below the low of the candle; upward breakout = close above the
high of the candle. Bulkowski recommends waiting for the breakout rather than assuming the
bearish theory (reversal only 59%).

## Targets & Stops

- Candle-height measure rule: `height = high - low`; down target = breakout price − height,
  up target = breakout price + height.
- % meeting target best case 84% (bear market, down breakout).
- Stop: above the candle high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bearish reversal 59% of the time |
| Overall rank | 55 of 103 (1 = best) |
| Frequency rank | 37 |
| Best % meeting target | 84% (bear market, down breakout) |
| Best avg move 10 days | 3.86% (bear market, up breakout) |
| Best 10-day performance rank | 46 (bull market, up breakout) |

Bulkowski notes the candle "looks better than it performs" — even the best 10-day move
(3.86%) falls short of the 6%+ he considers good.

## Trading Tactics

- Shooting stars within a third of the yearly low perform best and act as reversals most often.
- Best performance when the candle is part of an upward retracement in a downward price trend.

## Pine Notes

- Feasibility: **easy**. Pure single-bar OHLC geometry; no pivots.
- Signal fires on the confirmed candle close (`barstate.isconfirmed`).
- Suggested inputs: trend-lookback for R1, small-body threshold (R2), upper-shadow
  multiple (R3), max lower-shadow fraction (R4), optional "within one-third of yearly low"
  filter (`close < ta.lowest(low, 252) * 4/3`).
- The uptrend requirement (R1) is the only subjective piece; everything else is exact.
