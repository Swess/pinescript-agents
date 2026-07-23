---
id: 10-new-price-lines
name: 10 New Price Lines
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 10, typical: 10}
confirmation: recommended
rank: {value: 100, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0195
  throwback_rate: null
  pct_meeting_target: 0.93
  reversal_rate: 0.51
  frequency_rank: 69
source: https://thepatternsite.com/10NewPriceLines.html
accessed: 2026-07-16
---

# 10 New Price Lines

## Overview

Ten consecutive candle lines, each posting a higher high than the previous one. Theory
says it is a bearish reversal, and it acts as one 51% of the time in a bull market — near
random. Overall performance ranks 100 of 103, so any post-breakout trend tends to be
short-lived.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Ten |
| Price trend leading to the pattern | None required |
| Configuration | Ten consecutive candle lines, each with a higher high |

## Detection Rules (computable)

- **R1 [B]** Ten consecutive higher highs: `high > high[1]` holds for the last 10 bars, i.e. `high[i] > high[i+1]` for `i = 0..9`.
- **R2 [B]** No prior-trend requirement: pattern may appear in any context.
- **R3 [D]** Optional context filter: within one-third of the yearly low (`close < ta.lowest(low, 252) * 4/3`) — Bulkowski notes best reversal behavior there.

## Confirmation & Breakout

Bulkowski defines the breakout using the **last** candle line in the pattern: a close
above its top = up breakout, a close below its bottom = down breakout. Up breakout:
`close > high[0]` of the tenth candle on a later bar; down breakout: `close < low[0]`.

## Targets & Stops

- Pattern height: `height = highest_high - lowest_low` across the ten candles.
- Up target: `breakout_price + height / 6`.
- Down target: `breakout_price - height / 3`.
- (Dividing by 6/3 keeps the tall pattern's target reachable.) Price met the downward
  target 93% of the time (bear market).
- Stop [D]: for a short, above the pattern high; for a long, below the last candle low.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bearish reversal 51% of the time (bull market) |
| Frequency rank | 69 |
| Overall performance rank | 100 of 103 (1 = best) |
| Best % meeting price target | 93% (bear market, down breakout) |
| Best average move in 10 days | −1.95% (bear market, down breakout) |
| Best 10-day performance rank | 83 (bear market, down breakout) |

A "good" move would be a drop of 6%+; the best average decline of just 1.95% falls well
short. Reversal behavior is essentially random.

## Trading Tactics

- Patterns within a third of the yearly low perform best for upward breakouts.
- Reversals occur most often within a third of the yearly low.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. A run-length check on higher highs over a fixed window; no pivots.
- Signal fires on the tenth confirmed higher-high bar; wait for the breakout close to set
  direction.
- Suggested inputs: line count (reuse for 8/12/13 variants), yearly-low filter toggle,
  measure-rule divisors (6 up / 3 down).
- Note: near-random reversal reliability — treat as context, not a standalone signal.
