---
id: bearish-abandoned-baby
name: Bearish Abandoned Baby
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: recommended
rank: {value: 64, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: 0.0534
  throwback_rate: null
  pct_meeting_target: 0.57
  reversal_rate: 0.69
  frequency_rank: 96
source: https://thepatternsite.com/AbandonBaby.html
accessed: 2026-07-16
---

# Bearish Abandoned Baby

## Overview

A rare three-candle bearish reversal appearing in an uptrend: a white candle, then a doji
that gaps entirely above the prior candle, then a black candle that gaps below the doji.
It reverses 69% of the time (rank 14 for reversals), but the post-breakout trend is weak
and short — worst after a downward breakout.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Three |
| Price trend | Upward leading into the pattern |
| First candle | White, in an uptrend |
| Second candle | Doji whose lower shadow stays above the prior candle's high (gaps up) |
| Third candle | Black candle whose upper shadow stays below the doji's low (gaps down) |
| Candle height | Not important |

## Detection Rules (computable)

- **R1 [B]** Uptrend into the pattern: `close[3] < close[2]` and broader rise [D] `close[2] > close[7]`.
- **R2 [B]** First candle white: `close[2] > open[2]`.
- **R3 [B]** Second candle is a doji: `abs(close[1] - open[1]) <= 0.1 * (high[1] - low[1])` [D].
- **R4 [B]** Doji gaps up: `low[1] > high[2]` (doji's low above prior candle's high).
- **R5 [B]** Third candle black: `close < open`.
- **R6 [B]** Third candle gaps down from doji: `high < low[1]` (upper shadow below doji's low).

## Confirmation & Breakout

Up breakout = close above the top of the three-line pattern; down breakout = close below
its bottom. Bulkowski notes the candle performs best after an **upward** breakout and is
very weak after a downward one.

## Targets & Stops

- Pattern height: `height = highest_high - lowest_low` across the three candles.
- Target = breakout price ± height (standard candle measure) [D].
- Price met target 57% of the time (bull market, up breakout).
- Stop [D]: above the pattern high for shorts.

## Performance

| Metric | Value |
|---|---|
| Theoretical performance | Bearish reversal |
| Tested performance | Bearish reversal 69% of the time |
| Frequency rank | 96 (rare) |
| Overall performance rank | 64 of 103 (1 = best) |
| Best % meeting price target | 57% (bull market, up breakout) |
| Best average move in 10 days | +5.34% (bear market, up breakout) |
| Best 10-day performance rank | 24 (bear market, up breakout) |

Rare candle — bear-market stats use fewer than 20 samples and may change substantially.
Mediocre downward-breakout moves drag the overall rank down.

## Trading Tactics

- Within a third of the yearly low, performs best when breakout aligns with the prevailing
  trend (bull/up, bear/down).
- Select tall candles in a bull market.
- Look for a downward breakout in a bull market.

## Pine Notes

- Feasibility: **moderate**. All rules are OHLC/gap comparisons on three bars — no pivots —
  but the doji tolerance and gap definitions need explicit thresholds.
- The two gaps (doji isolated above both neighbors) are the strict part; on 24h/futures
  sessions true gaps are rare, so consider a shadow-overlap relaxation input.
- Suggested inputs: doji body-ratio tolerance, trend lookback, gap-strictness toggle.
- Signal completes on the third confirmed bar; wait for the breakout close for direction.
