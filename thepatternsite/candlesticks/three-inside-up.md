---
id: three-inside-up
name: Three inside up
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 20, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.60
  reversal_rate: 0.65
  frequency_rank: 31
source: https://thepatternsite.com/ThreeInsideUp.html
accessed: 2026-07-16
---

# Three inside up

## Overview

A three-candle bullish reversal appearing in a downtrend: a tall black candle, then a
small white candle whose body is inside the prior body (forming a bullish harami), then a
confirming white candle that closes above the prior close. Bulkowski's tests show it acts
as a bullish reversal 65% of the time with a high overall performance rank of 20.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle (close < open) in a downtrend |
| Second candle | Small white candle whose body is within the body of the first candle; tops or bottoms of the bodies may be equal, but not both |
| Third candle | White candle that closes above the prior (second) close |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[2] < close[7]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[2] < open[2]`.
- **R3 [D]** First candle tall: `(open[2] - close[2]) > ta.sma(high - low, 20)` (taller than average range).
- **R4 [B]** Second candle white: `close[1] > open[1]`.
- **R5 [B]** Second body inside first body: `open[1] >= close[2] and close[1] <= open[2]` (harami; equality allowed on one side, not both).
- **R6 [B]** Third candle white: `close > open`.
- **R7 [B]** Third close above prior close: `close > close[1]`.

## Confirmation & Breakout

The third candle is itself the confirming line. For performance, an upward breakout occurs
when price closes above the top of the candlestick pattern:
`close > highest(high, 3)`. Downward breakout = close below the pattern low.

## Targets & Stops

- Height target: `height = pattern_high - pattern_low` over the 3 candles; up target =
  breakout price + height. Price meets target ~60% of the time (bull market, up breakout).
- Stop: below the pattern low `min(low[2], low[1], low)` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested reversal rate | 65% bullish |
| Overall performance rank | 20 of 103 (1 = best) |
| Frequency rank | 31 |
| Best % meeting target | 60% (bull market, up breakout) |
| Best average move in 10 days | −7.00% (bear market, down breakout) |
| Best 10-day performance rank | 9 (bear market, down breakout) |

Best results come after a downward breakout in a bear market (a 7% drop), even though the
pattern is theoretically a bullish reversal.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Patterns within a third of the yearly high tend to act as reversals most often.
- Best setup: trade during a downward retracement of a primary uptrend, entering when the
  candle breaks out upward to rejoin the uptrend.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on three bars; no pivots, no repainting.
- Signal fires on close of the third candle (`barstate.isconfirmed` for alerts).
- Suggested inputs: trend-lookback (R1), tall-first-candle multiplier (R3), optional
  "within one-third of yearly low" filter.
- R5 encodes the harami inside-body rule; allow equality on one edge but not both.
