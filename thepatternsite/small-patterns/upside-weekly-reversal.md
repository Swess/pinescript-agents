---
id: upside-weekly-reversal
name: Upside weekly reversal
aliases: [Weekly Reversal Bottom]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 8, of: 23}
stats:
  break_even_failure_rate: 0.16
  avg_move: 0.19
  throwback_rate: null
  pct_meeting_target: 0.70
  reversal_rate: 0.67
  frequency_rank: null
source: https://thepatternsite.com/WeeklyRevsUpside.html
accessed: 2026-07-16
---

# Upside weekly reversal

## Overview

A two-bar (two-week) bullish reversal on the weekly scale: after a downtrend, the second week
is an outside week (higher high and lower low than the prior week) that closes above the prior
week's high. It acts as a reversal 67% of the time (bull market, up breakout) and ranks a
respectable 8 of 23 among small patterns.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Data scale | Weekly bars |
| Price trend | Downward leading into the pattern |
| Length | Two weeks (two bars) |
| Shape | Second bar is an outside week: higher high and lower low than the prior week |
| Higher close | Second bar closes above the prior bar's high |

## Detection Rules (computable)

On the weekly timeframe; bar 2 = current `[0]`, bar 1 = prior `[1]`.

- **R1 [B]** Prior downtrend: `close[1] < close[N]` (default `N = 5` weeks [D]).
- **R2 [B]** Outside week: `high[0] > high[1] and low[0] < low[1]`.
- **R3 [B]** Higher close: `close[0] > high[1]` (closes above the prior week's high).

## Confirmation & Breakout

A breakout occurs when price closes above the top or below the bottom of the two-bar pattern.
The pattern acts as a reversal (up breakout) 67% of the time; expect and trade the upward
break. Wait for the breakout before taking a position — enter on the open of the week after
the confirming close.

## Targets & Stops

- Height: `height = highest(high, 2) - lowest(low, 2)` (highest high minus lowest low of the two bars).
- Up target: `highest(high, 2) + height`; down target: `lowest(low, 2) - height`. Measure rule
  met **70%** (bull, up).
- Stop: fixed 7% (Bulkowski's swing test) or a pattern stop one tick beyond the opposite
  extreme of the pattern.

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure rule |
|---|---|---|---|
| Bull, up | 16% | +19% | 70% |
| Bull, down | 19% | -14% | 62% |
| Bear, up | 18% | +12% | 56% |
| Bear, down | 8% | -28% | ~ |

Overall rank 8 of 23. Trades aligned with the primary trend perform best; paradoxically the
patterns that act as continuations (bear/down break) fall a hefty 28%. Highest failure rates
are the counter-trend moves (bull/down 19%, bear/up 18%).

## Trading Tactics

- Trade with the trend: since it acts as a reversal most often, expect an upward breakout.
- Wait for the confirming close above the pattern top; enter at the next week's open.
- Measure rule is reasonably reliable here (70% in the headline bull/up case).
- Choose between a 7% stop and a pattern stop (tighter win rate, larger average loss).

## Pine Notes

- Feasibility: **easy**. Two-bar outside-week test on a weekly series — no pivots. Run on a
  weekly chart, or via `request.security(syminfo.tickerid, "W", ...)` from a lower timeframe
  (beware repaint on the forming week).
- Suggested inputs: trend-lookback weeks (R1), target mode (measure rule vs fixed 7%), stop
  mode, entry timing.
- Mirror of the downside weekly reversal — share one parameterized implementation.
