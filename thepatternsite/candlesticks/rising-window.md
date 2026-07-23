---
id: rising-window
name: Rising window
aliases: [Rising gap]
category: candlestick
type: continuation
direction: bullish
bars: {min: 2, typical: 2}
confirmation: none
rank: {value: 42, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: 20
source: https://thepatternsite.com/RisingWindow.html
accessed: 2026-07-16
---

# Rising window

## Overview

A price gap in an uptrend: yesterday's high is below today's low, leaving a hole on the
chart. Acts as a bullish continuation 75% of the time. Common (frequency rank 20), though
harder to find on longer timeframes. Overall rank 42 mostly measures the surrounding trend,
not the window itself.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of candle lines | Two |
| Price trend | Upward leading into the pattern |
| Configuration | Yesterday's high is below today's low (an upward price gap) |

## Detection Rules (computable)

- **R1 [B]** Uptrend into pattern: `close[1] > close[6]` (5-bar uptrend default [D]).
- **R2 [B]** Gap up: `low > high[1]` (today's low above yesterday's high).

## Confirmation & Breakout

No separate breakout — the gap itself is the pattern and signals continuation. The gap is
"closed" when price later retraces to fill it (`low <= high[1]` on a subsequent bar). A
minor low forms within the gap (support) 20% of the time before it closes ("stopped in gap").

## Targets & Stops

- Bulkowski gives no measure-rule target for the rising window; the gap's lower edge
  (`high[1]`) acts as support. Stop below `high[1]` or below the gap [D].
- Gap-fill timing: average 79 days to close, median 11 days (average skewed by long-lived gaps).

## Performance

| Metric | Value |
|---|---|
| Continuation rate | 75% bullish |
| Stopped in gap | 20% (minor low forms in gap before it closes) |
| Overall rank | 42 of 103 (1 = best) |
| Frequency rank | 20 (common) |
| Avg time to close gap | 79 days |
| Median time to close gap | 11 days |

Gap type matters: a rising window can be a breakaway gap (leaves congestion), an
exhaustion gap (trend ends soon after), or an area/common gap (closes quickly). No
up/down breakout splits or price-target percentages are given for this pattern.

## Trading Tactics

- Treat the lower edge of the gap (`high[1]`) as a support zone.
- Classify the gap (breakaway / exhaustion / common) to judge how far the trend may run.

## Pine Notes

- Feasibility: **easy**. Two-bar OHLC gap test plus a trend filter; no pivots.
- Suggested inputs: trend lookback (R1), minimum gap size as a fraction of price [D],
  optional gap-fill / stopped-in-gap tracking (needs state across bars).
- On continuous futures (NQ/ES) with 24h sessions, true daily gaps are rarer — consider a
  session-open gap variant or apply on RTH-only series. Intraday gaps are common.
- Signal fires on the gap bar's open/confirmation; no separate breakout wait needed.
