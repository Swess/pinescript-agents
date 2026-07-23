---
id: advance-block
name: Advance Block
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 54, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0476
  throwback_rate: null
  pct_meeting_target: 0.53
  reversal_rate: 0.36
  frequency_rank: 65
source: https://thepatternsite.com/AdvanceBlock.html
accessed: 2026-07-16
---

# Advance Block

## Overview

Three white candles in an uptrend, each opening within the prior candle's body, with the
upper shadows growing taller on the last two — a picture of fading bullish momentum.
Theory calls it a bearish reversal, but testing shows it acts as a bullish continuation
64% of the time. Overall rank is mid-list (54 of 103).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| Candles | Three white candles |
| Opens | Each candle opens within the body of the previous candle |
| Shadows | Upper shadows grow taller on the last two candles |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] < close[2]` (rising) and broader rise [D] `close[1] > close[6]`.
- **R2 [B]** Three white candles: `close[2] > open[2] and close[1] > open[1] and close > open`.
- **R3 [B]** Each opens within prior body: `open[1] > open[2] and open[1] < close[2]` and `open > open[1] and open < close[1]`.
- **R4 [B]** Upper shadows grow on the last two candles: `(high[1] - close[1]) > (high[2] - close[2])` and `(high - close) > (high[1] - close[1])`.
- **R5 [D]** Rising closes (advance): `close > close[1] and close[1] > close[2]`.

## Confirmation & Breakout

Up breakout = close above the top of the three-candle pattern; down breakout = close below
its bottom. The pattern breaks out upward most often. Best performance comes from downward
breakouts.

## Targets & Stops

- Pattern height: `height = highest_high - lowest_low` across the three candles.
- Target = breakout price ± height [D]. Price met target 53% (bull market, up breakout).
- Stop [D]: above the pattern high for shorts.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bullish continuation 64% of the time |
| Frequency rank | 65 |
| Overall performance rank | 54 of 103 (1 = best) |
| Best % meeting price target | 53% (bull market, up breakout) |
| Best average move in 10 days | −4.76% (bear market, down breakout) |
| Best 10-day performance rank | 32 (bull market, down breakout) |

Acts as a continuation 64% of the time; the complementary reversal rate is ~36%. The best
moves come from downward breakouts, though the 4.76% average falls short of a "good" 6%+.

## Trading Tactics

- For reversal signals, look for advance blocks in an upward retracement of a downtrend.
- Select tall candles for best performance.
- Breaks out upward most often.

## Pine Notes

- Feasibility: **moderate**. Three-bar OHLC comparison; the open-within-prior-body and
  growing-shadow tests need explicit inequalities but no pivots.
- Signal completes on the third candle; wait for the breakout close for direction.
- Suggested inputs: trend lookback, shadow-growth strictness, require-rising-closes toggle.
