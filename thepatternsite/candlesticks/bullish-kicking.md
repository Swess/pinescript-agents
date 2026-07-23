---
id: bullish-kicking
name: Bullish kicking
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 96, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.52
  reversal_rate: 0.53
  frequency_rank: 100
source: https://thepatternsite.com/KickingBull.html
accessed: 2026-07-16
---

# Bullish kicking

## Overview

A rare two-candle pattern of two marubozu candles separated by an upward gap: a tall black
marubozu followed by a tall white marubozu that gaps above it. Theory and tests agree it is
a bullish reversal, but only 53% of the time (near random). Frequency rank 100 of 103,
overall performance rank 96.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | None required |
| First candle | Tall black marubozu (no shadows) |
| Second candle | Tall white marubozu (no shadows) |
| Gap | Upward gap between the two candles |

## Detection Rules (computable)

- **R1 [B]** First candle black marubozu: `close[1] < open[1]` and `high[1] - open[1] <= 0.05*(high[1]-low[1])` and `close[1] - low[1] <= 0.05*(high[1]-low[1])` (shadow tolerance 5% of range [D]).
- **R2 [B]** Second candle white marubozu: `close > open` and `high - close <= 0.05*(high-low)` and `open - low <= 0.05*(high-low)` [D].
- **R3 [B]** Upward gap between candles: `low > high[1]` (second candle entirely above the first).
- **R4 [D]** Both bodies tall: each body `>= 1.3 * ` average body of prior 20 bars.

## Confirmation & Breakout

Breakout = close beyond the pattern extreme. Upward (bullish) = `close > max(high, high[1])`;
downward = `close < min(low, low[1])`. Direction is near random, so wait for the close-based
breakout. The candle breaks out upward most often.

## Targets & Stops

- Height target: `height = max(high, high[1]) - min(low, low[1])`; up target = upward
  breakout price + height (met ~52% best configuration) [B].
- Stop: below `min(low, low[1])` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish reversal 53% (near random) |
| Overall performance rank | 96 of 103 (1 = best) |
| Frequency rank | 100 (very rare) |
| Best % meeting target | 52% (bull market, up breakout) |
| Best avg 10-day move | +2.78% (bull market, up breakout) |
| Best 10-day performance rank | 57 (bull market, up breakout) |

Two marubozu candles with an upward gap — rare, and post-breakout trend is short/weak.
Best performance also comes when breakouts are below the 50-day moving average.

## Trading Tactics

- Breaks out upward most often — trade in the breakout direction; do not guess direction.
- Select tall candles for the best performance.
- Breakouts below the 50-trading-day moving average give the best performance.

## Pine Notes

- Feasibility: **easy**. OHLC comparisons on two bars plus a gap test.
- Marubozu detection needs a shadow-tolerance input (default 5% of range).
- Suggested inputs: shadow tolerance, tall-body multiplier, optional below-50-SMA filter,
  breakout confirmation toggle.
- Signal on close of the second candle (`barstate.isconfirmed` for alerts). Rare trigger.
