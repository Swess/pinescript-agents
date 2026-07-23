---
id: stick-sandwich
name: Stick sandwich
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 14, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0743
  throwback_rate: null
  pct_meeting_target: 0.67
  reversal_rate: null
  frequency_rank: 59
source: https://thepatternsite.com/StickSandwich.html
accessed: 2026-07-16
---

# Stick sandwich

## Overview

A three-candle pattern in a downtrend: a black candle, then a white candle trading above
the prior close, then a black candle that closes at or near the first candle's close
(the two black closes "sandwich" the white). Theorized bullish reversal, but Bulkowski
found it acts as a bearish continuation 62% of the time — with a strong post-breakout
performance rank (14).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Black (close < open) |
| Second candle | White, trading above the close of the first day |
| Third candle | Black, closing at or near the close of the first day |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[2] < close[7]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[2] < open[2]`.
- **R3 [B]** Second candle white and trades above first close: `close[1] > open[1] and close[1] > close[2]`.
- **R4 [B]** Third candle black: `close < open`.
- **R5 [B]** Third close ≈ first close: `abs(close - close[2]) <= 0.05 * close[2]` (default 5% tolerance for "at or near" [D]).

## Confirmation & Breakout

Downward breakout = close below the bottom of the three-candle pattern (bearish
continuation). Upward breakout (reversal) = close above the top. Bulkowski notes reversals
(upward breakouts) post the better moves.

## Targets & Stops

- Candle-height measure rule: `height = pattern_high - pattern_low` added to (up) /
  subtracted from (down) the breakout price. Best % meeting target 67% (bull market, up breakout).
- Stop: above the pattern high for shorts, below the low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bearish continuation 62% of the time |
| Overall rank | 14 of 103 (1 = best) |
| Frequency rank | 59 |
| Best % meeting target | 67% (bull market, up breakout) |
| Best avg move 10 days | 7.43% (bear market, up breakout) — ranks 11 |

Shines after upward breakouts (reversals); downward-breakout 10-day results are lousy.
Best move of 7.43% beats the 6% "good" benchmark.

## Trading Tactics

- The position of the closing price helps detect reversals of the downtrend.
- Buy the stick sandwich as part of a downward retrace in an upward price trend (reversals post better moves).
- Patterns within a third of the yearly low act as continuations most often.

## Pine Notes

- Feasibility: **easy**. Three-bar OHLC geometry; no pivots.
- Signal fires on the confirmed third candle close.
- Suggested inputs: trend-lookback (R1), "at or near" close tolerance (R5 — our
  quantification of Bulkowski's phrasing). Watch the close-equality tolerance across
  instruments; a relative fraction scales better than absolute ticks.
