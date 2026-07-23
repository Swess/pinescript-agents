---
id: shooting-star-2-lines
name: Shooting star (2 lines)
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 52, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.52
  reversal_rate: null
  frequency_rank: 51
source: https://thepatternsite.com/ShootingStar2.html
accessed: 2026-07-16
---

# Shooting star (2 lines)

## Overview

A two-candle pattern in an uptrend: a white candle followed by a small-bodied candle with
a tall upper shadow (at least 3× the body) and a gap between the two bodies. Despite candle
theory calling it a bearish reversal, Bulkowski found it acts as a bullish **continuation**
61% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Upward leading into the pattern |
| First candle | White (close > open) |
| Second candle | Small body, upper shadow ≥ 3× body, no/small lower shadow; any color |
| Gap | A gap exists between the bodies of the two candles |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** First candle white: `close[1] > open[1]`.
- **R3 [B]** Gap up between bodies: `min(open, close) > max(open[1], close[1])`.
- **R4 [B]** Second body small: `body <= 0.3 * range` (small-body default 30% [D]).
- **R5 [B]** Second upper shadow ≥ 3× body: `(high - max(open, close)) >= 3 * body`.
- **R6 [B]** Second lower shadow small/absent: `(min(open, close) - low) <= 0.1 * range` (default 10% [D]).

Where `body = abs(close - open)` on the current (second) bar and `range = high - low`.

## Confirmation & Breakout

Upward breakout = close above the top of the two-candle pattern; downward = close below the
bottom. In the example, price broke out upward. Continuation rate 61%.

## Targets & Stops

- Candle-height measure rule using the height of the whole pattern (highest high − lowest
  low of the two candles) added to (up) / subtracted from (down) the breakout price.
- Best % meeting target 52% (bull market, up breakout).
- Stop: below the pattern low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bullish continuation 61% of the time |
| Overall rank | 52 of 103 (1 = best) |
| Frequency rank | 51 |
| Best % meeting target | 52% (bull market, up breakout) |
| Best avg move 10 days | −4.93% (bear market, down breakout) |
| Best 10-day performance rank | 31 (bear market, down breakout) |

Bulkowski notes the post-breakout move is short — a trend reversal could be days away.

## Trading Tactics

- Shooting stars within a third of the yearly low perform best.
- Candles within a third of the yearly high act as continuation patterns most often.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC geometry plus a gap test; no pivots.
- Signal fires on the confirmed second candle close.
- Suggested inputs: trend-lookback (R1), gap-required toggle (R3), small-body threshold
  (R4), upper-shadow multiple (R5). Note the ≥3× shadow rule (vs 2× for the 1-line version).
- The uptrend requirement is the only subjective element.
