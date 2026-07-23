---
id: on-neck
name: On neck
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 33, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.64
  reversal_rate: null
  frequency_rank: 70
source: https://thepatternsite.com/OnNeck.html
accessed: 2026-07-16
---

# On neck

## Overview

A two-candle bearish continuation in a downtrend: a tall black candle followed by a white
candle whose close matches (or nearly matches) the prior candle's low. Acts as a bearish
continuation 56% of the time — near random — but overall performance ranks a respectable
33rd of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle in the downtrend |
| Second candle | White candle whose close matches (or nearly matches) the prior low |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black and tall: `close[1] < open[1]` and body[1] >= 1.3 * avg body [D].
- **R3 [B]** Second candle white: `close > open`.
- **R4 [B]** Second close matches prior low: `abs(close - low[1]) <= 0.1 * (high[1] - low[1])` (near-match default [D]).

## Confirmation & Breakout

Downward breakout = price closes below the bottom of the two-candle pattern
(`close < min(low, low[1])`); upward = close above the top. The continuation signal is
bearish but near random (56%), so breakout confirmation is recommended. The best
post-breakout move actually occurs after an upward breakout in a bear market.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`; project down from
  the breakout for the continuation case. Target met ~64% (best: bear market, up breakout).
- Stop: above `max(high, high[1])` for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 56% bearish (near random) |
| Overall rank | 33 of 103 (1 = best) |
| Frequency rank | 70 |
| Best % meeting target | 64% (bear market, up breakout) |
| Best avg move 10 days | +8.32% (bear market, up breakout) |
| Best 10-day performance rank | 6 (bear market, up breakout) |

The pattern works in reality as in theory (bearish continuation 56%), but that is near
random. Upward breakouts have decent trends; downward breakouts do not. The best 10-day
move is a +8.32% rise (bear market, up breakout), a strong rank of 6.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Select tall candles for best performance.
- On-neck continuation candles occur most often within a third of the yearly low.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC with a close-equals-prior-low test; no pivots.
- Suggested inputs: close-match tolerance (R4), tall-body multiplier (R2), trend lookback (R1).
- Distinguish from the in-neck (close slightly into the prior body) — R4 keys on the prior low.
- Signal fires on the second candle's close; breakout confirmation fires later.
