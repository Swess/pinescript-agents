---
id: takuri-line
name: Takuri line
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 47, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.82
  reversal_rate: 0.66
  frequency_rank: 28
source: https://thepatternsite.com/TakuriLine.html
accessed: 2026-07-16
---

# Takuri line

## Overview

A single-candle bullish reversal in a downtrend: a small body with a lower shadow at least
three times the body height and little or no upper shadow (looks like a long-legged hammer).
Acts as a reversal 66% of the time, but the new trend is short-lived (overall rank 47).
The body may be any color.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | One |
| Price trend | Downward leading into the pattern |
| Body | Small; any color |
| Lower shadow | At least 3× the height of the body |
| Upper shadow | Little or none |

## Detection Rules (computable)

- **R1 [B]** Downtrend into the candle: `close < close[5]` (5-bar downtrend default [D]).
- **R2 [B]** Small body: `body <= 0.3 * range` (small-body default 30% of range [D]).
- **R3 [B]** Lower shadow ≥ 3× body: `(min(open, close) - low) >= 3 * body`.
- **R4 [B]** Little/no upper shadow: `(high - max(open, close)) <= 0.1 * range` (default 10% [D]).

Where `body = abs(close - open)` and `range = high - low`.

## Confirmation & Breakout

Upward breakout = close above the top of the candle (confirms the bullish reversal).
Bulkowski suggests confirming by waiting for price to close higher the next day.

## Targets & Stops

- Candle-height measure rule: `height = high - low`; up target = candle top + height.
  Best % meeting target 82% (bull market, up breakout).
- Stop: below the candle low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bullish reversal 66% of the time |
| Overall rank | 47 of 103 (1 = best) |
| Frequency rank | 28 |
| Best % meeting target | 82% (bull market, up breakout) |
| Best avg move 10 days | −4.45% (bear market, down breakout) |
| Best 10-day performance rank | 39 (bull market, down breakout) |

The reversal happens ~2 of 3 times but the new trend does not last long.

## Trading Tactics

- Look for the Takuri line as part of a downward retracement in an uptrend.
- Confirm by waiting for price to close higher the next day.
- Takuri lines within a third of the yearly high tend to act as reversals most often.

## Pine Notes

- Feasibility: **easy**. Single-bar geometry (hammer-like) plus a downtrend filter.
- Signal fires on the confirmed candle close; add optional next-bar higher-close confirmation.
- Suggested inputs: trend-lookback (R1), small-body threshold (R2), lower-shadow multiple
  (R3, default 3×), max upper-shadow fraction (R4). Nearly identical to a hammer — the
  distinguishing feature is the very long (≥3×) lower shadow.
