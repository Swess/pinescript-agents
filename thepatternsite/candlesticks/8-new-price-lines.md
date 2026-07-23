---
id: 8-new-price-lines
name: 8 New Price Lines
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 8, typical: 8}
confirmation: recommended
rank: {value: 90, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0341
  throwback_rate: null
  pct_meeting_target: 0.92
  reversal_rate: 0.47
  frequency_rank: 52
source: https://thepatternsite.com/8NewPriceLines.html
accessed: 2026-07-16
---

# 8 New Price Lines

## Overview

Eight consecutive candle lines, each with a higher high. Candle theory calls it a bearish
reversal, but testing shows it acts as a bullish continuation 53% of the time (near
random). It is the most common of the new-price-line family (frequency rank 52) yet ranks
90 of 103 overall.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Eight |
| Price trend leading to the pattern | None required |
| Configuration | Eight consecutive candle lines, each with a higher high |

## Detection Rules (computable)

- **R1 [B]** Eight consecutive higher highs: `high[i] > high[i+1]` for `i = 0..7`.
- **R2 [B]** No prior-trend requirement.
- **R3 [D]** Optional context filter: within one-third of the yearly low (`close < ta.lowest(low, 252) * 4/3`).

## Confirmation & Breakout

Breakout is defined by the **last** candle line: close above its top = up breakout, close
below its bottom = down breakout. Up: `close > high[0]` of the eighth candle on a later
bar; down: `close < low[0]`.

## Targets & Stops

- Pattern height: `height = highest_high - lowest_low` across the eight candles.
- Up target: `breakout_price + height / 6`.
- Down target: `breakout_price - height / 3`.
- Price met the downward target 92% of the time (bull market).
- Stop [D]: for a long, below the last candle low; for a short, above the pattern high.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bullish continuation 53% of the time |
| Frequency rank | 52 |
| Overall performance rank | 90 of 103 (1 = best) |
| Best % meeting price target | 92% (bull market, down breakout) |
| Best average move in 10 days | −3.41% (bear market, down breakout) |
| Best 10-day performance rank | 62 (bear market, down breakout) |

Acts as a continuation 53% of the time; the complementary reversal rate is ~47%. Once
price begins falling it can tumble, but the best average decline of 3.41% still falls short
of a "good" 6%+ move.

## Trading Tactics

- Patterns within a third of the yearly low perform best.
- Reversals occur most often within a third of the yearly low; continuations more likely
  near the yearly high.
- Watch for a 38%–62% retracement of the prior up move.

## Pine Notes

- Feasibility: **easy**. Run-length check on eight higher highs; no pivots.
- Wait for the breakout close on the eighth candle to set direction.
- Suggested inputs: line count, yearly-low filter, retracement-band check (38–62%),
  measure-rule divisors (6 up / 3 down).
- Most common of the family but near-random reliability — use as context.
