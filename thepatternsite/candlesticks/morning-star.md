---
id: morning-star
name: Morning star
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 12, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.49
  reversal_rate: 0.78
  frequency_rank: 66
source: https://thepatternsite.com/MorningStar.html
accessed: 2026-07-16
---

# Morning star

## Overview

A three-candle bullish reversal after a downtrend: a tall black candle, a small-bodied
"star" of any color that gaps below the first body, then a tall white candle that gaps
above the star's body and closes at least midway into the first candle's body. Acts as a
bullish reversal 78% of the time and ranks a strong 12th of 103 for overall performance.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle in the downtrend |
| Second candle | Small-bodied candle of any color whose body gaps below the prior body |
| Third candle | Tall white candle that gaps above the second body and closes at least midway into the first candle's body |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[2] < close[7]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black and tall: `close[2] < open[2]` and body[2] >= 1.3 * avg body [D].
- **R3 [B]** Second candle small-bodied: `abs(close[1] - open[1]) <= 0.5 * body[2]` (small default [D]).
- **R4 [B]** Star body gaps below first body: `max(open[1], close[1]) < min(open[2], close[2])`.
- **R5 [B]** Third candle white and tall: `close > open` and body >= 1.3 * avg body [D].
- **R6 [B]** Third body gaps above star body: `min(open, close) > max(open[1], close[1])`.
- **R7 [B]** Third closes at least midway into first body: `close >= open[2] - 0.5 * (open[2] - close[2])`.

## Confirmation & Breakout

Upward breakout occurs when price closes above the top of the pattern:
`close > highest(high, 3)`. Price trends down into the pattern and exits upward, so it acts
as a reversal. Confirmation via close above the pattern high is required.

## Targets & Stops

- Candle-height target: `height = highest(high, 3) - lowest(low, 3)`; up target =
  breakout price + height. Target met ~49% (best: bear market, up breakout).
- Stop: below `lowest(low, 3)` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 78% bullish (ranks 6th of 103) |
| Overall rank | 12 of 103 (1 = best) |
| Frequency rank | 66 |
| Best % meeting target | 49% (bear market, up breakout) |
| Best avg move 10 days | -8.53% (bear market, down breakout) |
| Best 10-day performance rank | 3 (bear market, down breakout) |

Selling 10 days after breakout makes upward breakouts the weakest performers, but letting
the trend run gives upward breakouts better post-breakout performance than downward ones —
the uptrend takes a while to get going but tends to keep moving. Best bear/down average
move (-8.53%) is based on just 108 patterns, so expect it to soften with more data.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Select tall candles for best performance.
- Best setup: primary trend rising, morning star forming a downward retrace of the uptrend.
- Patience — the post-breakout trend is slow to start.

## Pine Notes

- Feasibility: **moderate**. Three-bar OHLC with gap and "midway close" checks; thresholds
  for tall/small bodies needed; breakout confirmation adds a bar of lag.
- Suggested inputs: small-body ratio (R3), tall-body multiplier (R2/R5), midway-close
  requirement toggle (R7), trend lookback (R1).
- Star body may be any color; only the first and third candle colors are fixed.
- Signal fires on the third candle's close; breakout confirmation fires later.
