---
id: morning-doji-star
name: Morning doji star
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 25, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.49
  reversal_rate: 0.76
  frequency_rank: 78
source: https://thepatternsite.com/MorningDojiStar.html
accessed: 2026-07-16
---

# Morning doji star

## Overview

A three-candle bullish reversal appearing after a downtrend: a tall black candle, then a
doji whose body gaps below the first body, then a tall white candle whose body gaps above
the doji. Acts as a bullish reversal 76% of the time and ranks a strong 25th of 103 for
overall performance, though it is rare (frequency rank 78).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle in the downtrend |
| Second candle | A doji whose body gaps below the prior candle's body |
| Third candle | Tall white candle whose body gaps above the doji's body |

## Detection Rules (computable)

- **R1 [B]** Downtrend into pattern: `close[2] < close[7]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black and tall: `close[2] < open[2]` and body[2] >= 1.3 * avg body [D].
- **R3 [B]** Second candle a doji: `abs(close[1] - open[1]) <= 0.1 * (high[1] - low[1])` (doji default [D]).
- **R4 [B]** Doji body gaps below first body: `max(open[1], close[1]) < min(open[2], close[2])`.
- **R5 [B]** Third candle white and tall: `close > open` and body >= 1.3 * avg body [D].
- **R6 [B]** Third body gaps above doji body: `min(open, close) > max(open[1], close[1])`.

## Confirmation & Breakout

Upward breakout occurs when price closes above the top (high) of the three-candle pattern:
`close > highest(high, 3)`. Because price falls into the pattern and exits upward it acts
as a reversal. Downward breakouts outperform in the 10-day window but the theoretical
signal is bullish; confirmation via close above the pattern high is required.

## Targets & Stops

- Candle-height target: `height = highest(high, 3) - lowest(low, 3)`; up target =
  breakout price + height. Target met ~49% (best: bull market, up breakout).
- Stop: below `lowest(low, 3)` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Reversal rate | 76% bullish (932 examples) |
| Overall rank | 25 of 103 (1 = best) |
| Frequency rank | 78 (rare) |
| Best % meeting target | 49% (bull market, up breakout) |
| Best avg move 10 days | -6.25% (bear market, down breakout) |
| Best 10-day performance rank | 15 (bear market, down breakout) |

Downward breakouts outperform upward ones in both 10-day rank and average move. Removing
the 10-day limit: downward breakouts are weak in bull markets but strongest in bear
markets. Bear-market samples are few (33 for bear/down), so treat with skepticism.

## Trading Tactics

- Candles within a third of the yearly high tend to act as reversals most often.
- Select tall candles for best performance in most markets.
- Volume gives performance clues.
- Best setup: primary trend upward with the morning doji star forming a downward retrace.

## Pine Notes

- Feasibility: **moderate**. Pure OHLC on three bars, but the doji and "tall" definitions
  and the gap conditions need thresholds; breakout confirmation adds a bar of lag.
- Suggested inputs: doji-body ratio (R3), tall-body multiplier (R2/R5), trend lookback (R1),
  optional "within one-third of yearly high" filter.
- Gaps in R4/R6 are body gaps (per Bulkowski), not shadow gaps — compare body extremes.
- Signal fires on the third candle's close; breakout confirmation fires later.
