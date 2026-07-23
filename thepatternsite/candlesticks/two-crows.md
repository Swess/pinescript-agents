---
id: two-crows
name: Two crows
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 61, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: -0.0484
  throwback_rate: null
  pct_meeting_target: 0.54
  reversal_rate: 0.54
  frequency_rank: 64
source: https://thepatternsite.com/TwoCrows.html
accessed: 2026-07-16
---

# Two crows

## Overview

A three-candle bearish reversal pattern in an uptrend: a tall white candle, then a black
candle gapping above it, then a second black candle that opens within the prior black body
and closes within the first white body. Acts as a bearish reversal only 54% of the time
(near random) with mediocre overall performance (rank 61 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| First candle | Tall white candle |
| Second candle | Black, its body gaps above the prior (white) candle's body |
| Third candle | Black, opens within the second candle's body and closes within the first (white) candle's body |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** First candle white and tall: `close[2] > open[2]` and body `(close[2]-open[2]) > ta.sma(abs(close-open), 20)` (tall default [D]).
- **R3 [B]** Second candle black: `close[1] < open[1]`.
- **R4 [B]** Second body gaps above the first body: `min(open[1], close[1]) > close[2]`.
- **R5 [B]** Third candle black: `close < open`.
- **R6 [B]** Third opens within the second body: `open < open[1] and open > close[1]`.
- **R7 [B]** Third closes within the first (white) body: `close < close[2] and close > open[2]`.

## Confirmation & Breakout

Breakout is downward (reversal) when price closes below the lowest low of the pattern:
`close < min(low[2], low[1], low)`. Upward breakout (`close > max(high[2], high[1], high)`)
turns it into a bullish continuation. Bulkowski advises waiting for the breakout direction
since the pattern is near random.

## Targets & Stops

- Candle-height target: `height = max(high[2],high[1],high) - min(low[2],low[1],low)`;
  project from the breakout price. ~54% meet target (bear market, down breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Theoretical | Bearish reversal |
| Tested reversal rate | 54% (near random) |
| Overall performance rank | 61 of 103 (1 = best) |
| Frequency rank | 64 |
| Best % meeting target | 54% (bear market, down breakout) |
| Best 10-day move | -4.84% (bear market, down breakout) |
| Best 10-day performance rank | 26 (bull market, up breakout) |

Best performance comes from patterns obeying the primary trend (up breakouts in a bull
market, down breakouts in a bear market).

## Trading Tactics

- Best when the pattern appears within a third of the yearly low.
- Select tall candles for the best performance.
- Trade the two crows in an upward retrace of a primary downtrend, entering short on the
  downward breakout.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons across three bars.
- Signal fires on the close of the third candle.
- "Tall white candle" (R2) is quantified with an average-body comparison; expose the
  multiplier as an input.
- Suggested inputs: trend-lookback for R1, tall-candle multiplier, "within one-third of
  yearly low" filter. Reversal rate is near random — recommend breakout confirmation.
