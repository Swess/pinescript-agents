---
id: bullish-doji-star
name: Bullish doji star
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 49, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0546
  throwback_rate: null
  pct_meeting_target: 0.59
  reversal_rate: 0.36
  frequency_rank: 53
source: https://thepatternsite.com/DojiStarBull.html
accessed: 2026-07-16
---

# Bullish doji star

## Overview

A two-candle pattern in a downtrend: a tall black candle followed by a doji whose body
gaps below the prior candle's body. Theory calls it a bullish reversal, but Bulkowski's
tests show it acts as a bearish continuation 64% of the time because price sits near the
low of the pattern, making a downward breakout easy.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle (`close < open`) |
| Second candle | Doji (open and close within pennies) whose body gaps *below* the first body |
| Shadows | May overlap; the doji's shadows should not be unusually long |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [D]** First candle tall: `(open[1] - close[1]) > ta.sma(high - low, 20)` (taller-than-average body).
- **R4 [B]** Second candle is a doji: `abs(close - open) <= 0.1 * (high - low)` (default 10% body-to-range [D]).
- **R5 [B]** Doji body gaps below the first body: `max(open, close) < close[1]` (doji top below the black candle's close).

## Confirmation & Breakout

The pattern needs a breakout. Upward breakout = `close > high` over the two-day high
(`close > max(high, high[1])`); downward = `close < min(low, low[1])`. Because price is
near the low, downward breakouts dominate (~64%).

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`; project from the
  breakout in the breakout direction. Best % meeting target 59% (bull market, up breakout).
- Stop: for a bullish trade, below `min(low, low[1])` [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 64% of the time (reversal ~36%) |
| Overall performance rank | 49 of 103 (1 = best) |
| Frequency rank | 53 |
| Best % meeting target | 59% (bull market, up breakout) |
| Best avg 10-day move | 5.46% (bear market, up breakout) |
| Best 10-day performance rank | 9 (bull market, up breakout) |

The "bullish" theory underperforms: in practice the pattern usually resumes the downtrend.
Mid-list performer — do not expect the move to last long.

## Trading Tactics

- Best when the pattern appears within a third of the yearly low.
- Select tall candles.
- Watch support and resistance zones around the pattern.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC comparisons; no pivots, no repainting.
- Fires on the close of the doji; confirm breakout on a later bar for signal quality.
- Suggested inputs: trend-lookback (R1), doji body-to-range threshold (R4), tall-body
  multiplier (R3), optional "within one-third of yearly low" filter.
- The "unusually long shadow" caveat is subjective; approximate with a max doji-range
  cap if desired.
