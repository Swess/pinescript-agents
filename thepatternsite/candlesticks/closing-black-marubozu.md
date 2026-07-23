---
id: closing-black-marubozu
name: Closing black marubozu
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 43, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.76
  reversal_rate: null
  frequency_rank: 18
source: https://thepatternsite.com/CloseBlkMarubozu.html
accessed: 2026-07-16
---

# Closing black marubozu

## Overview

A single tall black (down) candle with an upper shadow but no lower shadow — the close is
at the low. It differs from the plain black marubozu only by having an upper shadow. It
acts as a continuation of the prevailing trend 52% of the time (near-random), with mid-list
overall performance (43 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend leading to pattern | None required |
| Configuration | Tall black candle with an upper shadow but no lower shadow |

## Detection Rules (computable)

- **R1 [B]** Black candle: `close < open`.
- **R2 [B]** No lower shadow (close is the low): `close - low <= 0.05 * (high - low)` (default: lower shadow ≤5% of range [D]).
- **R3 [B]** Has an upper shadow: `high - open > 0.05 * (high - low)` (default: upper shadow >5% of range [D]).
- **R4 [B]** Tall body: `(open - close) > ta.sma(high - low, 20)` (default: body taller than 20-bar average range [D]).

## Confirmation & Breakout

Breakout direction defines performance: downward breakout (continuation) = `close < low`;
upward breakout (reversal) = `close > high`. With the close at the low, downward breakouts
are expected. Bulkowski recommends waiting for the breakout.

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout price in the
  breakout direction. Best percentage meeting target 76% (bull market, up breakout).
- Stop: opposite side of the candle from the trade direction [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 52% (near-random) |
| Frequency rank | 18 |
| Overall performance rank | 43 of 103 (1 = best) |
| Best % meeting target | 76% (bull market, up breakout) |
| Best 10-day move | +5.82% (bear market, up breakout) |
| Best 10-day performance rank | 20 (bear market, up breakout) |

Best moves come from *upward* breakouts (counter to the candle's close-at-low bias) in bear
markets — price must fight the one-day downtrend and the bear market to break out higher.

## Trading Tactics

- Prefer closing black marubozu candles within a third of the yearly low.
- Candles with tall upper shadows outperform.
- Those within a third of the yearly low often act as continuation candlesticks.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC comparisons; no pivots, no repainting.
- Signal fires on the candle's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: lower-shadow tolerance (R2), minimum upper-shadow (R3), tall-body
  multiplier (R4), optional yearly-low filter.
- Distinguish from the plain black marubozu (no upper shadow either) — R3 requires the
  upper shadow to be present.
