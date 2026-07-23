---
id: bullish-side-by-side-white-lines
name: Bullish side by side white lines
aliases: []
category: candlestick
type: continuation
direction: bullish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 46, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.61
  reversal_rate: null
  frequency_rank: 73
source: https://thepatternsite.com/SidebySideWhiteLinesBull.html
accessed: 2026-07-16
---

# Bullish side by side white lines

## Overview

A three-candle bullish continuation pattern in an uptrend: three white candles where the
last two have similar-sized bodies that open near each other and above the top of the first
candle's body (creating a body gap). Acts as a continuation 66% of the time. Rare
(frequency rank 73) with mid-list post-breakout performance (rank 46).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| All candles | White (close > open) |
| Second & third candles | Bodies of similar size; open near the same price and above the top of the first candle's body |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[2] > close[7]` (5-bar uptrend default [D]).
- **R2 [B]** All three candles white: `close[2] > open[2] and close[1] > open[1] and close > open`.
- **R3 [B]** Last two bodies similar size: `abs((close[1]-open[1]) - (close-open)) <= 0.3 * max(close[1]-open[1], close-open)` (default 30% tolerance [D]).
- **R4 [B]** Last two open near each other: `abs(open[1] - open) <= 0.3 * (close[1]-open[1])` (default 30% of body [D]).
- **R5 [B]** Last two open above the first body top: `open[1] > close[2] and open > close[2]` (gap above first white close).

## Confirmation & Breakout

Upward breakout = close above the top of the highest shadow in the three-line pattern
(continuation of the uptrend). Note Bulkowski found downward breakouts (reversals) tend to
be more powerful, but samples are few.

## Targets & Stops

- Candle-height measure rule: `height = pattern_high - pattern_low`; up target = breakout
  price + height. Best % meeting target 61% (bear market, down breakout).
- Stop: below the pattern low for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested performance | Bullish continuation 66% of the time |
| Overall rank | 46 of 103 (1 = best) |
| Frequency rank | 73 (rare; 984 found in 4.7M candle lines) |
| Best % meeting target | 61% (bear market, down breakout) |
| Best avg move 10 days | −6.07% (bear market, down breakout) — ranks 17 |

Downward-breakout (reversal) moves are the strongest (−6.07%, beats the 6% benchmark);
small sample warrants extra research.

## Trading Tactics

- Candles within a third of the yearly low perform best.
- Select tall candles for best performance.
- Patterns within a third of the yearly high act as continuation candles.

## Pine Notes

- Feasibility: **easy**. Three-bar OHLC geometry; no pivots.
- Signal fires on the confirmed third candle close.
- Suggested inputs: trend-lookback (R1), body-similarity tolerance (R3), open-similarity
  tolerance (R4). The body gap (R5) uses "above the first candle's close" per Bulkowski's
  gap-ignoring-shadows description.
