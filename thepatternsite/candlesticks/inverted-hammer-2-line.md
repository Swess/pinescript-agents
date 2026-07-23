---
id: inverted-hammer-2-line
name: Inverted Hammer, 2 line
aliases: []
category: candlestick
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: {value: 6, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.68
  reversal_rate: 0.35
  frequency_rank: 61
source: https://thepatternsite.com/HammerInv.html
accessed: 2026-07-16
---

# Inverted Hammer, 2 line

## Overview

A two-line candle in a downtrend: a tall black first candle followed by a short candle
with a tall upper shadow and little/no lower shadow. Theory calls it a bullish reversal,
but Bulkowski's tests show it acts as a bearish continuation 65% of the time (reversal
only 35%). Overall performance ranks a strong 6 of 103 — the post-breakout move is often
large.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | Downward leading into the pattern |
| First candle | Tall black candle with close near the day's low |
| Second candle | Short candle with a tall upper shadow and little or no lower shadow |
| Second candle body | Not a doji (open/close more than pennies apart) |
| Second candle open | Must open below the prior candle's close |

## Detection Rules (computable)

- **R1 [D]** Downtrend into the pattern: `close[1] < close[6]` (5-bar downtrend into the first line).
- **R2 [B]** First candle black: `close[1] < open[1]`.
- **R3 [D]** First candle tall: `(high[1]-low[1]) > ta.sma(high-low, 20)[1]` (taller-than-average default).
- **R4 [B]** First candle closes near its low: `(close[1]-low[1]) <= 0.2*(high[1]-low[1])` (within 20% of low [D]).
- **R5 [B]** Second candle has a tall upper shadow: `(high - max(open,close)) >= 2*abs(close-open)` (upper shadow ≥ 2× body [D]).
- **R6 [B]** Second candle has little/no lower shadow: `(min(open,close)-low) <= 0.1*(high-low)` (default 10% [D]).
- **R7 [B]** Second candle is not a doji: `abs(close-open) > 0.1*(high-low)` (default body ≥ 10% of range [D]).
- **R8 [B]** Second candle opens below prior close: `open < close[1]`.

## Confirmation & Breakout

Upward breakout (confirms the bullish reversal) = `close > high[1]` (close above the top of
the pattern); downward breakout = `close < min(low, low[1])`. Downward breakouts are more
common, which is why it usually acts as a bearish continuation. Bulkowski recommends
waiting for the breakout.

## Targets & Stops

- Candle-height target: `height = max(high, high[1]) - min(low, low[1])`;
  up target = breakout price + height (met ~68% in the best config: bull market, up breakout).
- Stop: below `min(low, low[1])` for longs [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish continuation 65% (reversal 35%) |
| Overall rank | 6 of 103 (1 = best) |
| Frequency rank | 61 |
| Best % meeting target | 68% (bull market, up breakout) |
| Best avg 10-day move | +7.74% (bear market, up breakout) |
| Best 10-day rank | 9 (bear market, up breakout) |

Best performance comes from an upward breakout in a bear market (rise of ~7.75%, well
above the 6% Bulkowski considers "good").

## Trading Tactics

- Favor inverted hammers with tall shadows — they perform well.
- Best as part of a downward retrace in an existing uptrend.
- Inverted hammers within a third of the yearly low tend to act as continuations of the
  existing trend (i.e., price keeps dropping) — a shorting opportunity.

## Pine Notes

- Feasibility: **easy**. Pure OHLC/shadow comparisons over two bars; no pivots.
- Signal fires on the close of the second candle; use `barstate.isconfirmed` for alerts.
- Suggested inputs: trend-lookback (R1), tall-body multiplier (R3), upper-shadow multiple
  (R5), doji threshold (R7), near-yearly-low filter (`close < ta.lowest(low,252)*4/3`).
- "Close near the low" and "tall" are subjective — expose as adjustable percentages.
