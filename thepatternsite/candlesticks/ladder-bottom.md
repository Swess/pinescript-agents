---
id: ladder-bottom
name: Ladder bottom
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 5, typical: 5}
confirmation: recommended
rank: {value: 41, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.27
  reversal_rate: 0.56
  frequency_rank: 80
source: https://thepatternsite.com/LadderBottom.html
accessed: 2026-07-16
---

# Ladder bottom

## Overview

A five-candle bullish reversal in a downtrend: three tall black candles each with lower
opens and closes, a fourth black candle with an upper shadow, then a white candle that gaps
open above the prior body. Acts as a bullish reversal 56% of the time (near random) but its
overall performance rank of 41 is respectable, partly because it is a tall pattern.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Five |
| Price trend | Downward |
| Days 1–3 | Tall black candles, each with a lower open and a lower close |
| Day 4 | Black candle (any size) with an upper shadow |
| Day 5 | White candle whose open gaps above the body (top) of day 4 |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[4] < close[9]` (5-bar prior downtrend default [D]).
- **R2 [B]** Days 1–3 all black: `close[4] < open[4]` and `close[3] < open[3]` and `close[2] < open[2]`.
- **R3 [B]** Days 1–3 stair-step down (lower opens and closes): `open[3] < open[4] and close[3] < close[4]` and `open[2] < open[3] and close[2] < close[3]`.
- **R4 [D]** Days 1–3 are tall: each body `>= 1.3 *` average body of prior 20 bars.
- **R5 [B]** Day 4 black with upper shadow: `close[1] < open[1]` and `high[1] - open[1] > 0`.
- **R6 [B]** Day 5 white: `close > open`.
- **R7 [B]** Day 5 gaps open above day-4 body top: `open > open[1]` (open[1] is the black body top of day 4).

## Confirmation & Breakout

Breakout measured as a close above the top or below the bottom of the five-candle pattern.
Upward (bullish) = `close > highest(high, 5)`; downward = `close < lowest(low, 5)`. Because
the pattern is tall, an upward breakout requires a large move.

## Targets & Stops

- Height target: `height = highest(high,5) - lowest(low,5)`; up target = upward breakout
  price + height, down target = downward breakout price − height. Only ~27% reach the full
  target (the tall height makes it hard) [B].
- Stop: below `lowest(low, 5)` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish reversal 56% (near random) |
| Overall performance rank | 41 of 103 (1 = best) |
| Frequency rank | 80 (rare — 451 found in 4.7M candles) |
| Best % meeting target | 27% (bull market, up breakout) |
| Best avg 10-day move | −7.07% (bear market, down breakout) |
| Best 10-day performance rank | 8 (bear market, down breakout) |

Performs best in bear markets: down-breakout drop averages −7.07% (rank 8) and even up
breakouts in a bear market average +6.76%. Best trades rejoin an existing up-trend after a
downward retrace.

## Trading Tactics

- Use candle color as the entry signal in a bull market.
- Taller-than-median ladder bottoms move farther after the breakout.
- Volume gives performance clues.
- Best setup: a downward retrace within an upward primary trend that then breaks out upward.

## Pine Notes

- Feasibility: **moderate**. Five-bar sequence with strict stair-stepping; no pivots needed,
  but the gap and stair-step tests are exacting so real-world matches are rare.
- Day-4 "upper shadow" is loose; Bulkowski deliberately does not require a tall shadow.
- Suggested inputs: prior-downtrend lookback, tall-body multiplier, breakout lookback (5).
- Signal fires on close of day 5; breakout comes on a later bar (recommend confirmation).
