---
id: wide-ranging-day-downside-reversal
name: Wide ranging day downside reversal
aliases: [WRDDR]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 1, typical: 1}
confirmation: required
rank: {value: 4, of: 23}
stats:
  break_even_failure_rate: 0.43
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.42
  reversal_rate: 0.43
  frequency_rank: null
source: https://thepatternsite.com/WRDDR.html
accessed: 2026-07-16
---

# Wide ranging day downside reversal

## Overview

A single unusually tall bar appearing in a short-term uptrend that closes near its intraday
low, hinting at a reversal down. It "reverses" only 43% of the time in a bull market — price
more often continues higher — yet it ranks 4 of 23 among small patterns on average rise.
Headline stats are for upward breakouts in a bull market.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | One bar |
| Price trend | Short-term uptrend leading in |
| Close | Within 25% of the intraday low (closes near the bottom of the bar) |
| Wide range | Unusually tall bar; test used high-low range ≥ 3× the one-month average range |

## Detection Rules (computable)

Single bar; `range = high - low`.

- **R1 [B]** Prior uptrend: `close[1] > close[N]` (default `N = 5` bars via linear-regression trend [D]).
- **R2 [B]** Close near low: `(close - low) / range <= 0.25`.
- **R3 [B]** Wide range: `range >= 3 * sma(high - low, 21)` (three times the ~one-month average range).

## Confirmation & Breakout

A breakout occurs when price closes above the top or below the bottom of the one-bar pattern;
buy/short at the next open in that direction. Despite being a "downside" reversal it acts as
a reversal only 43% of the time — most often price continues upward, so do not assume the
downward break.

## Targets & Stops

- Height: `height = high - low` of the bar.
- Up target: `high + height`; down target: `low - height`. Measure rule met **42%** (bull, up);
  30% (bull, down).
- Stop: Bulkowski's swing test used a fixed 7% target and 7% stop.

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure rule |
|---|---|---|---|
| Bull, up | 43% | +7% | 42% |
| Bull, down | 43% | -7% | 30% |
| Bear, up | 44% | +10% | 31% |
| Bear, down | 28% | -12% | 33% |

Overall rank 4 of 23. High failure rates are typical of short-term patterns. 7%-swing test
(3,357 trades): Bull/Up +$92.04 (58% wins), Bull/Down -$35.77, Bear/Up +$8.32, Bear/Down
-$33.63.

## Trading Tactics

- Don't assume a downward reversal — the up breakout is more common; trade the confirmed
  breakout direction.
- Wait for a close beyond the top/bottom of the bar; enter at the next open.
- Use the measure rule cautiously (≤42%); the tall bar makes full targets hard to reach.

## Pine Notes

- Feasibility: **easy**. Single-bar test: close-position ratio plus a range-vs-average filter
  (`ta.sma(high - low, 21)`). No pivots; detection completes on the bar itself.
- Suggested inputs: close-near-low threshold (R2, default 25%), range multiple (R3, default
  3×), average-range length (default 21), trend lookback (R1), target/stop mode.
- Mirror of the wide ranging day upside reversal — share one parameterized implementation.
