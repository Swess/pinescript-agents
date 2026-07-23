---
id: evening-doji-star
name: Evening doji star
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 30, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0620
  throwback_rate: null
  pct_meeting_target: 0.57
  reversal_rate: 0.71
  frequency_rank: 81
source: https://thepatternsite.com/EveningDojiStar.html
accessed: 2026-07-16
---

# Evening doji star

## Overview

A three-candle bearish reversal at the top of an uptrend: a tall white candle, then a doji
whose body gaps above both neighbors, then a tall black candle that closes at or below the
midpoint of the first candle's body. High reversal rate (71%, rank 12) but rare
(frequency rank 81).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Three |
| Price trend | Upward |
| Candle 1 | Tall white candle |
| Candle 2 | Doji whose body gaps above the two surrounding days (ignore shadows) |
| Candle 3 | Tall black candle that closes at or below the midpoint of candle 1's body |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] > close[8]` (5-bar uptrend default [D]).
- **R2 [B]** First candle tall white: `close[2] > open[2]` and `(close[2] - open[2]) > ta.sma(high - low, 20)[2]`.
- **R3 [B]** Second candle is a doji: `abs(close[1] - open[1]) <= 0.1 * (high[1] - low[1])` (default 10% [D]).
- **R4 [B]** Doji body gaps above candle 1 body: `min(open[1], close[1]) > close[2]`.
- **R5 [B]** Third candle black: `close < open`.
- **R6 [B]** Third closes at or below candle 1 midpoint: `close <= (open[2] + close[2]) / 2`.

## Confirmation & Breakout

Downward breakout = `close < ` three-candle low; upward = `close > ` three-candle high.
Downward (bearish reversal) occurs 71% of the time.

## Targets & Stops

- Candle-height target: `height = highest(high, 3) - lowest(low, 3)`; project down from the
  breakout. Best % meeting target 57% (bear market, up breakout).
- Stop: above the three-candle high [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish reversal 71% of the time (reversal rank 12) |
| Overall performance rank | 30 of 103 (1 = best) |
| Frequency rank | 81 (rare) |
| Best % meeting target | 57% (bear market, up breakout) |
| Best avg 10-day move | 6.20% (bear market, up breakout) |
| Best 10-day performance rank | 15 (bull market, up breakout) |

One of the better-performing candlesticks; the 6.2% best move rests on just 28 samples so
may shift. Upward breakouts (bull market) are the most reliable performers.

## Trading Tactics

- Evening doji stars with upward breakouts perform well.
- Select tall candles.
- Those within a third of the yearly low act as reversals most often.

## Pine Notes

- Feasibility: **easy/moderate**. Three-bar OHLC logic; the doji body-gap is the key test.
- Sister to the evening star (this one requires the middle candle to be a *doji*).
- Suggested inputs: trend-lookback, doji body-to-range threshold, tall-body multiplier,
  midpoint-penetration toggle.
