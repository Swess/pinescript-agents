---
id: 12-new-price-lines
name: 12 New Price Lines
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 12, typical: 12}
confirmation: recommended
rank: {value: 99, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0207
  throwback_rate: null
  pct_meeting_target: 0.85
  reversal_rate: 0.49
  frequency_rank: 87
source: https://thepatternsite.com/12NewPriceLines.html
accessed: 2026-07-16
---

# 12 New Price Lines

## Overview

Twelve consecutive candle lines, each with a higher high. Candle theory calls it a bearish
reversal, but testing shows it acts as a bullish continuation 51% of the time (near
random). Overall performance ranks 99 of 103, implying a short trend after the breakout.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Twelve |
| Price trend leading to the pattern | None required |
| Configuration | Twelve consecutive candle lines, each with a higher high |

## Detection Rules (computable)

- **R1 [B]** Twelve consecutive higher highs: `high[i] > high[i+1]` for `i = 0..11`.
- **R2 [B]** No prior-trend requirement.
- **R3 [D]** Optional context filter: within one-third of the yearly low (`close < ta.lowest(low, 252) * 4/3`).

## Confirmation & Breakout

Breakout is defined by the **last** candle line: close above its top = up breakout, close
below its bottom = down breakout. Up: `close > high[0]` of the twelfth candle on a later
bar; down: `close < low[0]`.

## Targets & Stops

- Pattern height: `height = highest_high - lowest_low` across the twelve candles.
- Up target: `breakout_price + height / 6`.
- Down target: `breakout_price - height / 3`.
- Price met the downward target 85% of the time (bear market).
- Stop [D]: for a long, below the last candle low; for a short, above the pattern high.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bullish continuation 51% of the time |
| Frequency rank | 87 |
| Overall performance rank | 99 of 103 (1 = best) |
| Best % meeting price target | 85% (bear market, down breakout) |
| Best average move in 10 days | +2.07% (bull market, up breakout) |
| Best 10-day performance rank | 80 (bear market, up breakout) |

Acts as a continuation 51% of the time; the complementary reversal rate is ~49%. A good
move would be 6%+; the best average rise of 2.07% falls short.

## Trading Tactics

- Patterns within a third of the yearly low perform best for upward breakouts.
- Breaks out upward most often, especially in a bear market.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Run-length check on twelve higher highs; no pivots.
- Wait for the breakout close on the twelfth candle to set direction.
- Suggested inputs: line count, yearly-low filter, measure-rule divisors (6 up / 3 down).
- Near-random reliability — use as context.
