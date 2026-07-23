---
id: bullish-abandoned-baby
name: Bullish Abandoned Baby
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 9, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.1031
  throwback_rate: null
  pct_meeting_target: 0.71
  reversal_rate: 0.70
  frequency_rank: 92
source: https://thepatternsite.com/AbandonBabyBull.html
accessed: 2026-07-16
---

# Bullish Abandoned Baby

## Overview

A rare three-candle bullish reversal in a downtrend: a black candle, then a doji that gaps
entirely below both neighbors, then a white candle that gaps above the doji. It reverses
70% of the time (rank 13 for reversals) and ranks 9 of 103 overall — but it is very hard
to find (only 293 examples in 4.7 million candle lines).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Black, in a downtrend |
| Second candle | Doji that gaps below the two adjacent candle shadows |
| Third candle | White candle whose lower shadow stays above the top of the doji |
| Candle height | Not important |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[3] > close[2]` and broader decline [D] `close[2] < close[7]`.
- **R2 [B]** First candle black: `close[2] < open[2]`.
- **R3 [B]** Second candle is a doji: `abs(close[1] - open[1]) <= 0.1 * (high[1] - low[1])` [D].
- **R4 [B]** Doji gaps down below both neighbors: `high[1] < low[2] and high[1] < low`.
- **R5 [B]** Third candle white: `close > open`.
- **R6 [B]** Third candle gaps up from doji: `low > high[1]` (lower shadow above doji's top).

## Confirmation & Breakout

Up breakout = close above the top of the three-line pattern; down breakout = close below
its bottom. With a downtrend in and an up breakout, the candle acts as a reversal. The
subsequent uptrend does not last long.

## Targets & Stops

- Pattern height: `height = highest_high - lowest_low` across the three candles.
- Target = breakout price ± height (standard candle measure) [D].
- Price met target 71% of the time (bear market, down breakout).
- Stop [D]: below the pattern low for longs.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bullish reversal |
| Tested performance | Bullish reversal 70% of the time |
| Frequency rank | 92 (rare) |
| Overall performance rank | 9 of 103 (1 = best) |
| Best % meeting price target | 71% (bear market, down breakout) |
| Best average move in 10 days | −10.31% (bear market, down breakout) |
| Best 10-day performance rank | 1 (bear market, down breakout) |

The chart-topping 10-day move (−10.31%) rests on just 14 samples, so it is unreliable and
likely to change; still, it earns an overall rank of 9.

## Trading Tactics

- Within a third of the yearly low, performs best after an upward breakout (few samples).
- Select tall candles for best performance.
- Forms at the end of short downtrends.

## Pine Notes

- Feasibility: **moderate**. OHLC/gap comparisons on three bars — no pivots — but doji
  tolerance and the two isolating gaps need explicit thresholds.
- The doji must gap clear of both neighbors; true gaps are rare intraday/futures, so offer
  a shadow-overlap relaxation input.
- Suggested inputs: doji body-ratio tolerance, trend lookback, gap-strictness toggle.
- Signal completes on the third confirmed bar; wait for the breakout close for direction.
