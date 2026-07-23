---
id: short-white-candle
name: Short white candle
aliases: []
category: candlestick
type: either
direction: either
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 85, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.95
  reversal_rate: 0.52
  frequency_rank: 54
source: https://thepatternsite.com/ShortWhiteCandle.html
accessed: 2026-07-16
---

# Short white candle

## Overview

A single short white (up) candle whose shadows are shorter than its body. It signals
indecision — acting as a reversal 52% of the time (near the theoretical coin-flip). Common
(frequency rank 54) but with dreadful post-breakout performance (rank 85 of 103), though it
almost always meets its measure-rule target.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | None required |
| Body | Short and white (close > open) |
| Shadows | Both shorter than the body |

## Detection Rules (computable)

- **R1 [B]** White body: `close > open`.
- **R2 [B]** Short body: `body <= 0.5 * ta.sma(range, 20)` (short = below-average height; default 50% of 20-bar avg range [D]).
- **R3 [B]** Upper shadow shorter than body: `(high - close) < body`.
- **R4 [B]** Lower shadow shorter than body: `(open - low) < body`.

Where `body = close - open` (white) and `range = high - low`. No prior trend required.

## Confirmation & Breakout

Breakout = close above the top (up) or below the bottom (down) of the candle. The candle
frequently breaks out upward. Bulkowski recommends waiting for the breakout direction
given the near-random reversal rate.

## Targets & Stops

- Candle-height measure rule: `height = high - low`; up target = breakout price + height,
  down target = breakout price − height. Price almost always meets this target
  (best 95%, bull market, up breakout).
- Stop: opposite side of the candle from the breakout [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Reversal 52% of the time |
| Overall rank | 85 of 103 (1 = best) |
| Frequency rank | 54 |
| Best % meeting target | 95% (bull market, up breakout) |
| Best avg move 10 days | −2.62% (bear market, down breakout) |
| Best 10-day performance rank | 61 (bull market, down breakout) |

Post-breakout moves are small (best decline just 2.62% vs 6%+ for top performers), but the
measure-rule target is met almost always — the one redeeming quality.

## Trading Tactics

- Candles within a third of the yearly low perform best, except after downward breakouts in bear markets.
- Candles taller than the median move significantly farther after breakout than short ones.
- The candle frequently breaks out upward.

## Pine Notes

- Feasibility: **easy**. Single-bar OHLC geometry; "short" needs a reference — use an
  average-range comparison (R2) since Bulkowski's "short" is relative to typical candles.
- Signal fires on the confirmed candle close.
- Suggested inputs: short-body threshold (R2, fraction of average range), optional
  "within one-third of yearly low" filter.
- "Short" is the one subjective term; quantify against a rolling average range.
