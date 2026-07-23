---
id: bearish-separating-lines
name: Bearish separating lines
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 40, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.67
  reversal_rate: null
  frequency_rank: 82
source: https://thepatternsite.com/SeparateLinesBear.html
accessed: 2026-07-16
---

# Bearish separating lines

## Overview

A two-candle bearish continuation in a downtrend: a tall white candle followed by a tall
black candle that shares (nearly) the same opening price. Acts as a bearish continuation
63% of the time. Rare (frequency rank 82); overall rank 40 (mid-list), but performs very
well after upward breakouts.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Tall white candle in the downtrend |
| Second candle | Tall black candle whose opening price is similar to the first candle's open |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle tall and white: `close[1] > open[1]` and body[1] >= 1.3 * avg body [D].
- **R3 [B]** Second candle tall and black: `close < open` and body >= 1.3 * avg body [D].
- **R4 [B]** Shared opening price: `abs(open - open[1]) <= 0.1 * (high[1] - low[1])` (similar opens; default [D]).

## Confirmation & Breakout

Downward breakout = price closes below the bottom of the two-candle pattern
(`close < min(low, low[1])`). Price breaks out downward most often, continuing the
downtrend. Note the paradox: the strongest post-breakout moves come after *upward*
breakouts — avoid downward-breakout trades for performance despite the bearish label.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`; project down from
  the breakout for the continuation case. Target met ~67% (best: bull market, up breakout).
- Stop: above `max(high, high[1])` for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 63% bearish |
| Overall rank | 40 of 103 (1 = best) |
| Frequency rank | 82 (rare) |
| Best % meeting target | 67% (bull market, up breakout) |
| Best avg move 10 days | +8.36% (bear market, up breakout) |
| Best 10-day performance rank | 5 (bear market, up breakout) |

Performs best after upward breakouts (+8.36%, rank 5 in a bear market); downward breakouts
perform poorly. Similar in shape to meeting lines but with different behavior and colors.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Select tall candles for best performance.
- Price breaks out downward most often (but upward breakouts perform best).

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC with a shared-open test; no pivots.
- Suggested inputs: open-match tolerance (R4), tall-body multiplier (R2/R3), trend lookback (R1).
- "Separating" refers to the shared open with opposite-color, oppositely-directed bodies —
  contrast with meeting lines (shared close).
- Signal fires on the second candle's close; breakout confirmation fires later.
