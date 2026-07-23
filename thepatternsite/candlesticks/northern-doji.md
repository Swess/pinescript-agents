---
id: northern-doji
name: Northern doji
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 83, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0317
  throwback_rate: null
  pct_meeting_target: 0.88
  reversal_rate: null
  frequency_rank: 6
source: https://thepatternsite.com/NorthernDoji.html
accessed: 2026-07-16
---

# Northern doji

## Overview

A single doji (open and close within pennies of each other) appearing in an uptrend.
Theory calls it a bearish reversal, but it acts as a bullish continuation 51% of the time —
essentially random. Extremely common (frequency rank 6) but a weak performer (overall
rank 83).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | Upward leading into the pattern |
| Configuration | A doji — opening and closing prices within pennies of each other — in an uptrend |

## Detection Rules (computable)

- **R1 [B]** Uptrend into pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** Doji body: `abs(close - open) <= 0.1 * (high - low)` (open/close within pennies; 10% default [D]).
- **R3 [D]** Non-trivial range so the doji is meaningful: `(high - low) >= 0.5 * avg range` (default).

## Confirmation & Breakout

Upward breakout = close above the top of the candle (`close > high` on a later bar);
downward = close below the bottom (`close < low`). Opening-gap confirmation works best.
Breakout direction is near-random (51% continuation), so waiting for direction is advised.

## Targets & Stops

- Candle-height target: `height = high - low`; project up from the top (up breakout) or
  down from the bottom (down breakout). Target met ~88% (best: bull market, up breakout).
- Stop: opposite side of the candle relative to the breakout [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 51% bullish (near random) |
| Overall rank | 83 of 103 (1 = best) |
| Frequency rank | 6 (very common) |
| Best % meeting target | 88% (bull market, up breakout) |
| Best avg move 10 days | +3.17% (bull market, up breakout) |
| Best 10-day performance rank | 53 (bull market, up breakout) |

The tested behavior (bullish continuation) differs from theory (bearish reversal) by just
one percentage point — effectively meaningless. Even the best performance rank of 53 is
mid-list. Breakouts below the 50-day moving average lead to the best performance.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Opening gap confirmation works best.
- Breakouts below the 50-trading-day moving average lead to the best performance.

## Pine Notes

- Feasibility: **easy**. Single-bar doji test plus a trend filter; no pivots.
- Suggested inputs: doji-body ratio (R2), trend lookback (R1), optional 50-day MA breakout
  filter, optional "within one-third of yearly low" filter.
- Any doji type (long-legged, dragonfly, gravestone) in an uptrend qualifies.
- Given near-random behavior, treat as a context/alert candle rather than a standalone signal.
