---
id: three-black-crows
name: Three black crows
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 3, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.1331
  throwback_rate: null
  pct_meeting_target: 0.36
  reversal_rate: 0.78
  frequency_rank: 60
source: https://thepatternsite.com/ThreeBlackCrows.html
accessed: 2026-07-16
---

# Three black crows

## Overview

A three-candle bearish reversal in an uptrend: three tall black candles, each closing near
its low and making a new low, with candles 2 and 3 opening within the prior candle's body.
Acts as a reversal 78% of the time and ranks 3rd overall for post-breakout performance,
though the sample is small (2,660 of 4.7M candle lines).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| All candles | Tall and black (close < open) |
| Candles 2 & 3 opens | Open within the body of the prior candle |
| Closes | Each closes near its low, making a new low |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** Three black candles: `close[2] < open[2] and close[1] < open[1] and close < open`.
- **R3 [B]** Tall candles: each `body >= ta.sma(range, 20)` (above-average body height default [D]).
- **R4 [B]** Candle 2 opens within candle 1's body: `open[1] < open[2] and open[1] > close[2]`.
- **R5 [B]** Candle 3 opens within candle 2's body: `open < open[1] and open > close[1]`.
- **R6 [B]** Each closes near its low: `(close[2]-low[2]) <= 0.2*range[2] and (close[1]-low[1]) <= 0.2*range[1] and (close-low) <= 0.2*range` (default 20% [D]).
- **R7 [B]** Successively lower lows: `low[1] < low[2] and low < low[1]`.

Where `body = abs(close - open)` and `range = high - low`.

## Confirmation & Breakout

Downward breakout = close below the bottom of the pattern (bearish reversal, the usual
outcome since price ends near the lows). Upward breakout = close above the top.

## Targets & Stops

- Candle-height measure rule: `height = pattern_high - pattern_low`; down target =
  breakout price − height. Best % meeting target 36% (bear market, up breakout).
- Stop: above the pattern high for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bearish reversal 78% of the time |
| Overall rank | 3 of 103 (1 = best) |
| Frequency rank | 60 |
| Best % meeting target | 36% (bear market, up breakout) |
| Best avg move 10 days | 13.31% (bear market, up breakout) — ranks 2 |

The high reversal rate is partly mechanical: price ends near the lows, so a downward
breakout is far easier than an upward one. Large post-breakout moves (up to 13.31%) but
small sample (66 samples for the best cell).

## Trading Tactics

- Candles within a third of the yearly low act as reversals most often.
- Select tall candles for best performance.
- Bulkowski favors an upward breakout in an upward primary trend as one working setup.

## Pine Notes

- Feasibility: **moderate**. Three-bar OHLC geometry — no pivots, but several joint
  conditions (opens-within-body, new lows, close-near-low, tall bodies).
- Signal fires on the confirmed third candle close.
- Suggested inputs: trend-lookback (R1), tall-body threshold (R3), close-near-low fraction
  (R6). Distinguish from identical three crows (opens ≈ prior close) and a bearish
  three-line strike via the open-within-body and new-low rules.
