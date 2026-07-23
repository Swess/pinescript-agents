---
id: downside-tasuki-gap
name: Downside Tasuki Gap
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 23, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0469
  throwback_rate: null
  pct_meeting_target: 0.44
  reversal_rate: 0.54
  frequency_rank: 68
source: https://thepatternsite.com/DownsideTasukiGap.html
accessed: 2026-07-16
---

# Downside Tasuki Gap

## Overview

A three-candle pattern in a downtrend: a black candle, a second black candle that gaps
lower (no shadow overlap), then a white candle that opens within the second body and
closes inside the gap. Theory calls it a bearish continuation; Bulkowski's tests show a
near-random bullish reversal 54% of the time, but a decent post-breakout trend (rank 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Three |
| Price trend | Downward |
| Candle 1 | Black candle in a downtrend |
| Candle 2 | Black candle that gaps lower, no shadow overlap with candle 1 |
| Candle 3 | White candle that opens within candle 2's body and closes within the gap between candles 1 and 2 |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the pattern: `close[3] < close[8]` (5-bar downtrend default [D]).
- **R2 [B]** First candle black: `close[2] < open[2]`.
- **R3 [B]** Second candle black: `close[1] < open[1]`.
- **R4 [B]** Gap down with no shadow overlap: `high[1] < low[2]`.
- **R5 [B]** Third candle white: `close > open`.
- **R6 [B]** Third opens within second body: `open > close[1] and open < open[1]`.
- **R7 [B]** Third closes within the gap (above candle 2 top, below candle 1 bottom):
  `close > high[1] and close < low[2]`.

## Confirmation & Breakout

Upward breakout = `close > ` three-candle high; downward = `close < ` three-candle low.
Reversal (upward) occurs ~54% of the time — near random.

## Targets & Stops

- Candle-height target: `height = highest(high, 3) - lowest(low, 3)`; project from the
  breakout. Best % meeting target 44% (bear market, down breakout).
- Stop: opposite side of the pattern extreme [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish reversal 54% of the time (near random) |
| Overall performance rank | 23 of 103 (1 = best) |
| Frequency rank | 68 |
| Best % meeting target | 44% (bear market, down breakout) |
| Best avg 10-day move | 4.69% (bear market, up breakout) |
| Best 10-day performance rank | 30 (bull market, up breakout) |

Respectable performer in all markets except downward breakouts in a bull market. A 4-to-6
week downward move preceding it makes a reversal more likely.

## Trading Tactics

- Best when it appears within a third of the yearly low.
- A 4-6 week downward move into the pattern favors a reversal.
- Look for it forming as part of an inverted and ascending scallop.

## Pine Notes

- Feasibility: **easy/moderate**. Three-bar OHLC logic plus a gap test; no pivots.
- Gap requirement (`high[1] < low[2]`) is rare on 24h/continuous futures; suited to daily
  equity charts.
- Similar to downside gap three methods — distinguish by candle-3 close: Tasuki closes
  *within the gap*; three-methods closes *inside the first body*.
