---
id: wide-ranging-day-upside-reversal
name: Wide ranging day upside reversal
aliases: [WRDUR]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 1, typical: 1}
confirmation: required
rank: {value: 12, of: 23}
stats:
  break_even_failure_rate: 0.39
  avg_move: 0.08
  throwback_rate: null
  pct_meeting_target: 0.40
  reversal_rate: 0.38
  frequency_rank: null
source: https://thepatternsite.com/WRDUR.html
accessed: 2026-07-16
---

# Wide ranging day upside reversal

## Overview

A single unusually tall bar appearing in a short-term downtrend that closes near its intraday
high, hinting at a reversal up. It "reverses" only 38% of the time in a bull market — price
more often continues lower — and ranks 12 of 23 among small patterns. Headline stats are for
upward breakouts in a bull market.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | One bar |
| Price trend | Short-term downtrend leading in |
| Close | Within 25% of the intraday high (closes near the top of the bar) |
| Wide range | Unusually tall bar; test used high-low range ≥ 3× the one-month average range |

## Detection Rules (computable)

Single bar; `range = high - low`.

- **R1 [B]** Prior downtrend: `close[1] < close[N]` (default `N = 5` bars via linear-regression trend [D]).
- **R2 [B]** Close near high: `(high - close) / range <= 0.25`.
- **R3 [B]** Wide range: `range >= 3 * sma(high - low, 21)` (three times the ~one-month average range).

## Confirmation & Breakout

A breakout occurs when price closes above the top or below the bottom of the one-bar pattern;
buy/short at the next open in that direction. Despite being an "upside" reversal it acts as a
reversal only 38% of the time — most often price continues lower, so do not assume the upward
break.

## Targets & Stops

- Height: `height = high - low` of the bar.
- Up target: `high + height`; down target: `low - height`. Measure rule met **40%** (bull, up).
- Stop: Bulkowski's swing test used a fixed 7% target and 7% stop.

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure rule |
|---|---|---|---|
| Bull, up | 39% | +8% | 40% |
| Bull, down | 45% | -8% | 33% |
| Bear, up | 35% | +7% | 31% |
| Bear, down | 20% | -16% | 47% |

Overall rank 12 of 23. High failure rates are typical of short-term patterns; the bear/down
-16% may reflect a small sample (150). 7%-swing test (4,291 trades): Bull/Up +$75.98 (56%
wins), Bull/Down -$53.46, Bear/Up -$105.34, Bear/Down +$211.14.

## Trading Tactics

- Don't assume an upward reversal — the down break is more common; trade the confirmed
  breakout direction.
- Wait for a close beyond the top/bottom of the bar; enter at the next open.
- Use the measure rule cautiously (≤40% in the headline case).

## Pine Notes

- Feasibility: **easy**. Single-bar test: close-position ratio plus a range-vs-average filter
  (`ta.sma(high - low, 21)`). No pivots; detection completes on the bar itself.
- Suggested inputs: close-near-high threshold (R2, default 25%), range multiple (R3, default
  3×), average-range length (default 21), trend lookback (R1), target/stop mode.
- Mirror of the wide ranging day downside reversal — share one parameterized implementation.
