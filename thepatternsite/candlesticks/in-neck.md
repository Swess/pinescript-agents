---
id: in-neck
name: In Neck
aliases: []
category: candlestick
type: continuation
direction: bearish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 17, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.61
  reversal_rate: 0.47
  frequency_rank: 62
source: https://thepatternsite.com/InNeck.html
accessed: 2026-07-16
---

# In Neck

## Overview

A two-line bearish continuation in a downtrend: a tall black candle followed by a white
candle that opens below the black candle's low but closes just barely into the black body.
It continues the downtrend 53% of the time ("near random"), yet post-breakout performance
is very good, ranking 17 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle |
| Second candle | White candle that opens below the black day's low and closes just into the black body ("but not by much") |

## Detection Rules (computable)

- **R1 [D]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend into the first line).
- **R2 [B]** First candle black and tall: `close[1] < open[1]` and `(high[1]-low[1]) > ta.sma(high-low, 20)[1]` [D].
- **R3 [B]** Second candle white: `close > open`.
- **R4 [B]** Second candle opens below the first candle's low: `open < low[1]`.
- **R5 [B]** Second candle closes just into the first body: `close >= close[1]` and `close <= close[1] + 0.15*(open[1]-close[1])` (closes just above the black close, ≤ 15% into the body [D]; "not by much").

## Confirmation & Breakout

Downward breakout (confirms the bearish continuation) = `close < min(low, low[1])`; upward
breakout = `close > max(high, high[1])`. Best results come from trading it within a falling
price trend. Wait for the breakout.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`;
  down target = breakout price − height (best % meeting target 61%: bull market, up breakout).
- Stop: above `max(high, high[1])` for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 53% (reversal 47%) |
| Overall rank | 17 of 103 (1 = best) |
| Frequency rank | 62 (somewhat rare for a 2-line candle) |
| Best % meeting target | 61% (bull market, up breakout) |
| Best avg 10-day move | +6.34% (bear market, up breakout) |
| Best 10-day rank | 16 (bear market, up breakout) |

Weakest after a downward breakout in a bull market; other market/breakout combinations post
decent numbers. Best move (+6.34%) exceeds the 6% Bulkowski calls "good."

## Trading Tactics

- In-neck candles within a third of the yearly low perform best.
- Select tall (first) candles.
- For best results, trade in a falling price trend.

## Pine Notes

- Feasibility: **moderate**. OHLC-only over two bars, but "closes just into the body, but
  not by much" is subjective — expose the penetration depth (R5) as an adjustable percentage.
- Distinguish from on-neck (close at prior low) and thrusting (close deeper into the body).
- Suggested inputs: trend-lookback (R1), tall-body multiplier (R2), body-penetration cap (R5),
  yearly-low filter. Signal fires on the second candle's close; confirm on breakout.
