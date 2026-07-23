---
id: upside-tasuki-gap
name: Upside Tasuki gap
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 5, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: -0.092
  throwback_rate: null
  pct_meeting_target: 0.38
  reversal_rate: null
  frequency_rank: 74
source: https://thepatternsite.com/UpsideTasukiGap.html
accessed: 2026-07-16
---

# Upside Tasuki gap

## Overview

A three-candle bullish continuation pattern in an uptrend: a white candle, a second white
candle that gaps higher (with a gap between the shadows), then a black candle that opens
within the second body and closes inside the gap between the first two candles (without
filling it if shadows are ignored). Acts as a continuation 57% of the time (near random)
but carries an excellent overall performance rank of 5.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| First candle | White candle |
| Second candle | White, gaps higher including a gap between the two candles' shadows |
| Third candle | Black, opens in the second candle's body and closes within the gap created between the first two candles |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** First candle white: `close[2] > open[2]`.
- **R3 [B]** Second candle white: `close[1] > open[1]`.
- **R4 [B]** Second candle gaps higher including shadows: `low[1] > high[2]`.
- **R5 [B]** Third candle black: `close < open`.
- **R6 [B]** Third opens within the second body: `open < close[1] and open > open[1]`.
- **R7 [B]** Third closes inside the gap but does not fill it: `close < open[1] and close > high[2]` (closes in the gap between the two white candles) [D interpretation].

## Confirmation & Breakout

Breakout is upward (the continuation) when price closes above the top of the pattern:
`close > max(high[2], high[1], high)`. Breaks out upward most often; if the breakout is
downward the stock sometimes returns to the launch price. Breakout direction is near random.

## Targets & Stops

- Candle-height target: `height = max(high[2],high[1],high) - min(low[2],low[1],low)`;
  add to the breakout price for an up breakout. ~38% meet target (bear market, up breakout).
- Stop: below the pattern low `min(low[2],low[1],low)` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Bullish continuation |
| Tested continuation rate | 57% (near random) |
| Overall performance rank | 5 of 103 (1 = best) |
| Frequency rank | 74 (difficult to find) |
| Best % meeting target | 38% (bear market, up breakout) |
| Best 10-day move | -9.20% (bear market, down breakout) |
| Best 10-day performance rank | 2 (bear market, down breakout) |

Bear-market patterns (either breakout direction) perform best; bull-market results are also
good. Rare — only 704 found in 4.7M candle lines.

## Trading Tactics

- Patterns within a third of the yearly low usually perform best.
- Expect an upward breakout (most common).
- If the breakout is downward, watch for a return to the launch price.

## Pine Notes

- Feasibility: **easy**. OHLC comparisons across three bars including a shadow-inclusive gap.
- Signal fires on the close of the third candle.
- R7 ("closes within the gap, does not fill it") is subtle — the close sits between the
  first candle's body top and the second candle's low; expose the gap definition as an input.
- Rare pattern; expect few signals. Near-random breakout — recommend breakout confirmation.
