---
id: downside-weekly-reversal
name: Downside weekly reversal
aliases: [Weekly Reversal Top]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 22, of: 23}
stats:
  break_even_failure_rate: 0.24
  avg_move: 0.12
  throwback_rate: null
  pct_meeting_target: 0.52
  reversal_rate: 0.62
  frequency_rank: null
source: https://thepatternsite.com/WeeklyRevsDownside.html
accessed: 2026-07-16
---

# Downside weekly reversal

## Overview

A two-bar (two-week) bearish reversal seen on the weekly scale: after an uptrend, the second
week is an outside week (higher high and lower low than the prior week) that closes below the
prior week's low. It acts as a reversal 62% of the time (bull market, down breakout) but
ranks near the bottom of small patterns (22 of 23). Only appears in the first edition of the
Encyclopedia of Chart Patterns.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Data scale | Weekly bars |
| Price trend | Upward leading into the pattern |
| Length | Two weeks (two bars) |
| Shape | Second bar is an outside week: higher high and lower low than the prior week |
| Lower close | Second bar closes below the prior bar's low |

## Detection Rules (computable)

On the weekly timeframe; bar 2 = current `[0]`, bar 1 = prior `[1]`.

- **R1 [B]** Prior uptrend: `close[1] > close[N]` (default `N = 5` weeks [D]).
- **R2 [B]** Outside week: `high[0] > high[1] and low[0] < low[1]`.
- **R3 [B]** Lower close: `close[0] < low[1]` (closes below the prior week's low).

## Confirmation & Breakout

A breakout occurs when price closes above the top or below the bottom of the two-bar pattern.
The pattern acts as a reversal (down breakout) 62% of the time; expect and trade the downward
break. Wait for the breakout before taking a position — enter on the open of the week after
the confirming close.

## Targets & Stops

- Height: `height = highest(high, 2) - lowest(low, 2)` (highest high minus lowest low of the two bars).
- Down target: `lowest(low, 2) - height`; up target: `highest(high, 2) + height`. Measure rule
  met **52%** (bull, down); 72% (bull, up).
- Stop: Bulkowski's swing test used a fixed 7% target/7% stop; a "pattern stop" places the
  stop one tick beyond the opposite extreme of the pattern (raises average loss substantially).

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure rule |
|---|---|---|---|
| Bull, up | 16% | +18% | 72% |
| Bull, down | 24% | -12% | 52% |
| Bear, up | 21% | +14% | 54% |
| Bear, down | 10% | -26% | 70% |

Overall rank 22 of 23. Best moves come when the trade aligns with the primary trend
(bear/down -26%). 7%-swing test (8,430 trades): Bull/Up +$132.39 (60% wins), Bull/Down
-$135.13, Bear/Up -$114.78, Bear/Down +$99.59. Height-exit target test (stocks) marginally
beat the benchmark ($224.21 vs $200.96 per trade).

## Trading Tactics

- Trade with the trend: since it acts as a reversal most often, expect a downward breakout.
- Wait for the confirming close beyond the pattern; enter at the next week's open.
- Use the measure rule cautiously (only 52% in the headline bull/down case).
- A pattern stop (just beyond the opposite extreme) tightens win rate but enlarges the
  average loss versus a fixed 7% stop.

## Pine Notes

- Feasibility: **easy**. Two-bar outside-week test on a weekly series — no pivots. Run on a
  weekly chart, or drive via `request.security(syminfo.tickerid, "W", ...)` from a lower
  timeframe (beware repaint on the forming week).
- Suggested inputs: trend-lookback weeks (R1), target mode (measure rule vs fixed 7%), stop
  mode (7% vs pattern stop), entry timing.
- Mirror of the upside weekly reversal — share one parameterized implementation.
