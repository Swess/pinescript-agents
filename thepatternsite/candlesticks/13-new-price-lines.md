---
id: 13-new-price-lines
name: 13 New Price Lines
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 13, typical: 13}
confirmation: recommended
rank: {value: 95, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0438
  throwback_rate: null
  pct_meeting_target: 0.80
  reversal_rate: 0.57
  frequency_rank: 90
source: https://thepatternsite.com/13NewPriceLines.html
accessed: 2026-07-16
---

# 13 New Price Lines

## Overview

Thirteen consecutive candle lines, each with a higher high. Theory calls it a bearish
reversal, and it acts as one 57% of the time in a bull market — near random. It is
uncommon (frequency rank 90) and ranks 95 of 103 overall.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Thirteen |
| Price trend leading to the pattern | None required |
| Configuration | Thirteen consecutive candle lines, each with a higher high |

## Detection Rules (computable)

- **R1 [B]** Thirteen consecutive higher highs: `high[i] > high[i+1]` for `i = 0..12`.
- **R2 [B]** No prior-trend requirement.
- **R3 [D]** Optional context filter: within one-third of the yearly low (`close < ta.lowest(low, 252) * 4/3`).

## Confirmation & Breakout

Breakout is defined by the **last** candle line: close above its top = up breakout, close
below its bottom = down breakout. Up: `close > high[0]` of the thirteenth candle on a
later bar; down: `close < low[0]`.

## Targets & Stops

- Pattern height: `height = highest_high - lowest_low` across the thirteen candles.
- Up target: `breakout_price + height / 6`.
- Down target: `breakout_price - height / 3`.
- Price met the downward target 80% of the time (bear market).
- Stop [D]: for a short, above the pattern high; for a long, below the last candle low.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bearish reversal 57% of the time |
| Frequency rank | 90 |
| Overall performance rank | 95 of 103 (1 = best) |
| Best % meeting price target | 80% (bear market, down breakout) |
| Best average move in 10 days | −4.38% (bear market, down breakout) |
| Best 10-day performance rank | 42 (bear market, down breakout) |

The 10-day decline rank of 42 is slightly better than mid-list — the best of the new-price-
line family, though a "good" move (6%+) still exceeds the 4.38% average.

## Trading Tactics

- Patterns within a third of the yearly low act as reversals most often.
- Breaks out upward most often in a bear market.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Run-length check on thirteen higher highs; no pivots.
- Wait for the breakout close on the thirteenth candle to set direction.
- Suggested inputs: line count, yearly-low filter, measure-rule divisors (6 up / 3 down).
- Rare pattern (frequency rank 90); reliability near random.
