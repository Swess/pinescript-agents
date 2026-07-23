---
id: hanging-man
name: Hanging Man
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 87, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.86
  reversal_rate: 0.41
  frequency_rank: 16
source: https://thepatternsite.com/HangingMan.html
accessed: 2026-07-16
---

# Hanging Man

## Overview

A single-line candle in an uptrend: a small body sitting atop a long lower shadow. Theory
says bearish reversal, but Bulkowski's tests show it acts as a bullish continuation 59% of
the time (reversal only 41% — "near random"). Post-breakout performance is poor, ranking
87 of 103.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | Upward leading into the candle |
| Configuration | Small-bodied candle atop a long lower shadow, in an uptrend (candle color unimportant) |

## Detection Rules (computable)

- **R1 [D]** Uptrend into the candle: `close[1] > close[6]` (5-bar uptrend into the prior bar).
- **R2 [B]** Small body: `abs(close-open) <= 0.3*(high-low)` (body ≤ 30% of range [D]).
- **R3 [B]** Long lower shadow: `(min(open,close)-low) >= 2*abs(close-open)` (lower shadow ≥ 2× body [D]).
- **R4 [B]** Little/no upper shadow: `(high-max(open,close)) <= 0.1*(high-low)` (upper shadow ≤ 10% of range [D]).
- **R5 [D]** Body sits near the high: `(high-max(open,close)) <= 0.25*(high-low)`.

## Confirmation & Breakout

Downward breakout (confirms the bearish reversal theory) = `close < low`; upward breakout =
`close > high`. Because price closes near the candle's top, upward breakouts are the norm
(59%), so the pattern usually continues the uptrend. Bulkowski recommends waiting for the
breakout.

## Targets & Stops

- Candle-height target: `height = high - low`; down target = breakout price − height
  (met ~86% best config: bear market, down breakout).
- Stop: above `high` for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bullish continuation 59% (reversal 41%) |
| Overall rank | 87 of 103 (1 = best) |
| Frequency rank | 16 (common) |
| Best % meeting target | 86% (bear market, down breakout) |
| Best avg 10-day move | −3.60% (bear market, down breakout) |
| Best 10-day rank | 59 (bear market, down breakout) |

Best (still mediocre) move is −3.60% after a downward breakout in a bear market — short of
the 6% Bulkowski considers good.

## Trading Tactics

- Hanging men within a third of the yearly low perform best.
- Candles taller than the median move ~50% farther after the breakout than shorter ones.
- Hanging men within a third of the yearly high tend to act as continuations of the
  primary trend.

## Pine Notes

- Feasibility: **easy**. Single-bar body/shadow ratios; no pivots.
- Signal fires on the candle's close; confirm on breakout for alerts.
- Suggested inputs: trend-lookback (R1), body/shadow ratio thresholds (R2–R4), yearly-low
  filter. Color is irrelevant — do not gate on `close>open`.
