---
id: downside-gap-three-methods
name: Downside gap three methods
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 26, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0502
  throwback_rate: null
  pct_meeting_target: 0.56
  reversal_rate: 0.62
  frequency_rank: 84
source: https://thepatternsite.com/DownGap3Methods.html
accessed: 2026-07-16
---

# Downside gap three methods

## Overview

A three-candle pattern in a downtrend: two long black candles separated by a gap, then a
white candle that closes the gap. Theory calls it a bearish continuation, but Bulkowski's
tests show it acts as a bullish reversal 62% of the time. Rare (frequency rank 84) but a
respectable performer (rank 26).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Three |
| Price trend | Downward |
| Candles 1 & 2 | Two long black bodies with a gap between them (shadows do not overlap) |
| Candle 3 | White candle that opens within the second body and closes within the first body, closing the gap |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[3] < close[8]` (5-bar downtrend default [D]).
- **R2 [B]** First candle long black: `close[2] < open[2]` and `(open[2] - close[2]) > ta.sma(high - low, 20)[2]`.
- **R3 [B]** Second candle long black: `close[1] < open[1]` and tall body [D].
- **R4 [B]** Gap down with no shadow overlap: `high[1] < low[2]`.
- **R5 [B]** Third candle white: `close > open`.
- **R6 [B]** Third opens within second body and closes within first body, filling the gap:
  `open > close[1] and open < open[1]` and `close > close[2] and close < open[2]`.

## Confirmation & Breakout

Upward breakout = `close > ` top of the three-candle high; downward = `close < ` bottom of
the three-candle low. Breaks out upward most often (bullish reversal 62%).

## Targets & Stops

- Candle-height target: `height = highest(high, 3) - lowest(low, 3)`; project from the
  breakout in the breakout direction. Best % meeting target 56% (bear market, down breakout).
- Stop: opposite side of the pattern extreme [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish reversal 62% of the time |
| Overall performance rank | 26 of 103 (1 = best) |
| Frequency rank | 84 (very rare) |
| Best % meeting target | 56% (bear market, down breakout) |
| Best avg 10-day move | −5.02% (bear market, down breakout) |
| Best 10-day performance rank | 8 (bull market, down breakout) |

Does best after downward breakouts; avoid upward breakouts, especially in a bear market.
Look for it within a third of the yearly high (reverses most often there) and near the end
of an inverted-and-ascending scallop.

## Trading Tactics

- Best reversal signal when it appears within a third of the yearly high.
- Look for it as part of an inverted and ascending scallop.
- Breaks out upward most often.

## Pine Notes

- Feasibility: **easy/moderate**. Three-bar OHLC logic plus a gap test; no pivots.
- The gap (`high[1] < low[2]`) is a hard condition — rare on continuous futures/24h
  symbols where gaps seldom appear; more common on daily equity charts.
- Suggested inputs: trend-lookback, tall-body multiplier, gap toggle.
