---
id: bearish-breakaway
name: Bearish Breakaway
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 5, typical: 5}
confirmation: recommended
rank: {value: 11, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0666
  throwback_rate: null
  pct_meeting_target: 0.35
  reversal_rate: 0.63
  frequency_rank: 98
source: https://thepatternsite.com/BearBreakaway.html
accessed: 2026-07-16
---

# Bearish Breakaway

## Overview

A rare five-candle bearish reversal in an uptrend. It opens with a tall white candle, gaps
up to a second white candle, continues higher through days three and four, then a tall
black fifth candle closes back inside the gap between the first two bodies. It reverses
63% of the time (89% in a bear market) and ranks 11 of 103 overall — but at frequency rank
98 it is very hard to find.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Five |
| Price trend | Upward leading into the pattern |
| Day 1 | Tall white candle |
| Day 2 | White candle with a gap between the first two bodies (shadows may overlap) |
| Day 3 | Higher close; any color |
| Day 4 | White candle with a higher close |
| Day 5 | Tall black candle closing within the gap between the day-1 and day-2 bodies |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[5] > close[6]` [D] and rising into day 1.
- **R2 [B]** Day 1 tall white: `close[4] > open[4]` and `(close[4] - open[4]) > ta.sma(abs(close-open),20)` [D].
- **R3 [B]** Day 2 white and body-gap up: `close[3] > open[3] and open[3] > close[4]` (body gap; shadows may overlap).
- **R4 [B]** Day 3 higher close, any color: `close[2] > close[3]`.
- **R5 [B]** Day 4 white with higher close: `close[1] > open[1] and close[1] > close[2]`.
- **R6 [B]** Day 5 tall black closing inside the day1–day2 body gap: `close < open` and `close > close[4] and close < open[3]`.

## Confirmation & Breakout

Up breakout = close above the top of the five-candle pattern; down breakout = close below
its lowest low. The pattern completes on day 5 and typically breaks out downward.

## Targets & Stops

- Pattern height: `height = highest_high - lowest_low` across the five candles.
- Up target = up-breakout price + height; down target = down-breakout price − height.
- The pattern is tall, so targets are rarely hit — met just 35% (bull market, down breakout).
- Stop [D]: above the pattern high for shorts.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bearish reversal 63% (bull market); 89% in a bear market |
| Frequency rank | 98 (very rare) |
| Overall performance rank | 11 of 103 (1 = best) |
| Best % meeting price target | 35% (bull market, down breakout) |
| Best average move in 10 days | +6.66% (bull market, up breakout) |
| Best 10-day performance rank | 2 (bear market, up breakout) |

Statistics rest on just 36 trades and were not in the book — treat as indicative. Tall
pattern means the measure-rule target is rarely reached.

## Trading Tactics

- Not stated by Bulkowski (page has no separate trading-tidbits list beyond identification/example).

## Pine Notes

- Feasibility: **moderate**. Five-bar OHLC/body-gap comparisons; no pivots, but the day-5
  "closes within the day1–day2 body gap" test and the body gap need careful definition.
- True gaps are rare intraday/futures; consider a body-gap tolerance input.
- Signal completes on day 5; wait for the breakout close for direction.
- Suggested inputs: tall-candle threshold, body-gap tolerance, trend lookback.
