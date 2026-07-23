---
id: closing-white-marubozu
name: Closing white marubozu
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 70, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.73
  reversal_rate: null
  frequency_rank: 15
source: https://thepatternsite.com/ClosingWhiteMarubozu.html
accessed: 2026-07-16
---

# Closing white marubozu

## Overview

A single tall white (up) candle with a lower shadow but no upper shadow — the close is at
the high. It acts as a continuation of the prevailing trend 55% of the time (near-random).
Common (frequency rank 15) but a poor 10-day performer (70 of 103) because price does not
trend far after the breakout.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend leading to pattern | None required |
| Configuration | Tall white candle with a lower shadow but no upper shadow |

## Detection Rules (computable)

- **R1 [B]** White candle: `close > open`.
- **R2 [B]** No upper shadow (close is the high): `high - close <= 0.05 * (high - low)` (default: upper shadow ≤5% of range [D]).
- **R3 [B]** Has a lower shadow: `open - low > 0.05 * (high - low)` (default: lower shadow >5% of range [D]).
- **R4 [B]** Tall body: `(close - open) > ta.sma(high - low, 20)` (default: body taller than 20-bar average range [D]).

## Confirmation & Breakout

Breakout direction defines performance: upward breakout (continuation) = `close > high`;
downward breakout (reversal) = `close < low`. With the close at the high, upward breakouts
are expected. Bulkowski recommends waiting for the breakout.

## Targets & Stops

- Candle-height target: `height = high - low`; project from the breakout price in the
  breakout direction. Best percentage meeting target 73% (bear market, down breakout).
- Stop: opposite side of the candle from the trade direction [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 55% (near-random) |
| Frequency rank | 15 (common) |
| Overall performance rank | 70 of 103 (1 = best) |
| Best % meeting target | 73% (bear market, down breakout) |
| Best 10-day move | −5.36% (bear market, down breakout) |
| Best 10-day performance rank | 27 (bear market, down breakout) |

Best raw move (−5.36%) comes from a bear-market down breakout — a reversal of the candle's
bullish bias. Short post-breakout trends keep overall performance low.

## Trading Tactics

- Prefer closing white marubozu candles within a third of the yearly low.
- Candles taller than the median move price ~50% farther after the breakout.
- Those within a third of the yearly high tend to act as continuations most often.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC comparisons; no pivots, no repainting.
- Signal fires on the candle's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: upper-shadow tolerance (R2), minimum lower-shadow (R3), tall-body
  multiplier (R4), optional yearly-low/high filter.
- Distinguish from the plain white marubozu (no lower shadow either) — R3 requires the
  lower shadow to be present.
