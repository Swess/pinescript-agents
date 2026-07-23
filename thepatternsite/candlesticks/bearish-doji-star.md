---
id: bearish-doji-star
name: Bearish doji star
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 51, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.55
  reversal_rate: null
  frequency_rank: 43
source: https://thepatternsite.com/DojiStarBear.html
accessed: 2026-07-16
---

# Bearish doji star

## Overview

A two-candle pattern in an uptrend: a long white candle, then a doji that gaps higher with
its body above the prior body and comparatively short shadows. Theory calls it a bearish
reversal, but Bulkowski's tests show a *bullish continuation* 69% of the time — the doji
sits at the top, so a close above it (continuation) is far easier than a downward breakout.
Overall performance is mid-list (51 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend leading to pattern | Upward |
| First candle | Long white candle |
| Second candle | Doji (open and close within pennies); gaps higher with its body above the prior body; comparatively short shadows |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** First candle long white: `close[1] > open[1]` and body `> ta.sma(high-low,20)[1]` (long default [D]).
- **R3 [B]** Second candle is a doji: `abs(close - open) <= 0.05 * (high - low)` (doji body ≤5% of range default [D]).
- **R4 [B]** Doji body gaps above the prior body: `min(open, close) > close[1]` (body above the white body).
- **R5 [B]** Doji shadows short vs. the white body: `(high - low) < (close[1] - open[1])` (combined shadows smaller than prior body).

## Confirmation & Breakout

Breakout direction defines behavior: upward breakout (continuation) = `close > ` the top of
the doji / pattern high; downward breakout (reversal) = `close < ` the bottom of the
pattern. Because the doji sits at the top, upward breakouts dominate (69% continuation).

## Targets & Stops

- Pattern-height target: `height = max(high, high[1]) - min(low, low[1])`; project from the
  breakout price in the breakout direction. Best percentage meeting target 55% (bear
  market, up breakout).
- Stop: below the lower of the two candle lows for longs [D].

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 69% bullish (theory says bearish reversal) |
| Frequency rank | 43 |
| Overall performance rank | 51 of 103 (1 = best) |
| Best % meeting target | 55% (bear market, up breakout) |
| Best 10-day move | −5.77% (bear market, down breakout) |
| Best 10-day performance rank | 14 (bull market, down breakout) |

The 69% "success" is a continuation, not the theoretical bearish reversal, and is easy to
achieve given the doji's position at the top. Mid-list overall rank means short trends.

## Trading Tactics

- Prefer bearish doji stars within a third of the yearly low for best performance.
- Best traded as part of an upward retracement within a downward primary trend.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC comparisons; doji tolerance and the body-gap rule are
  quantified with defaults — no pivots or repainting.
- Signal fires on the doji's close; use `barstate.isconfirmed` for alerts.
- Suggested inputs: trend lookback (R1), long-first-candle multiplier (R2), doji-body
  tolerance (R3), short-shadow rule (R5). Note the theory-vs-tested contradiction: despite
  the "bearish" name, tested behavior is bullish continuation.
