---
id: narrow-range-4
name: Narrow range 4
aliases: [NR4]
category: small-pattern
type: either
direction: either
bars: {min: 4, typical: 4}
confirmation: required
rank: {value: 7, of: 23}
stats:
  break_even_failure_rate: 0.46
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.55
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/NR4.html
accessed: 2026-07-16
---

# Narrow range 4

## Overview

A four-bar volatility-contraction pattern: the most recent bar has the narrowest high-low
range of the last four bars. The tight range often precedes an expansion, and price can break
out either up or down. Headline stats are for upward breakouts in a bull market (rank 7 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Four bars |
| Narrow range | The most recent bar's high-low range is smaller than each of the prior three bars (narrowest of the four) |
| Breakout | Price closes above the top or below the bottom of the NR4 |

## Detection Rules (computable)

Definitions: `range = high - low`. Current bar is bar 0; the four-bar window is bars `[0..3]`.

- **R1 [B]** Narrowest of four: `range[0] < range[1] and range[0] < range[2] and range[0] < range[3]`.
- **R2 [D]** Pattern top/bottom: `top = highest(high, 4)`, `bottom = lowest(low, 4)` over the four bars.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the four-bar
pattern. Bulkowski buys/shorts at the next open in the breakout direction. Direction is not
predetermined — trade whichever side breaks.

## Targets & Stops

- Height: `height = top - bottom` (highest high minus lowest low of the four bars).
- Up target: `top + height`; down target: `bottom - height`. Measure rule met **55%** (bull, up).
- Stop: Bulkowski's swing test used a fixed 7% profit target and 7% stop; alternatively place a
  stop just beyond the opposite side of the pattern [D].

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 46% | +7% | 55% |
| Bull, down | 48% | -6% | 51% |
| Bear, up | 37% | +8% | 47% |
| Bear, down | 28% | -12% | 50% |

Swing-trade test (7% target / 7% stop, 23,203 trades): Bull/Up net +$89.20 (58% wins);
Bull/Down -$62.95; Bear/Up -$63.71; Bear/Down +$46.47. High failure rates are typical of
short-term patterns.

## Trading Tactics

- Wait for a close beyond the top or bottom; trade that direction at the next open.
- Alternate signal (untested by Bulkowski): use a close beyond the last (narrowest) bar's
  high/low to anticipate direction, then ride the swing.
- Use the measure rule cautiously — it works only ~55% of the time even in the best case.

## Pine Notes

- Feasibility: **easy**. Pure range comparison over four bars (`ta.lowest`/manual compare),
  no pivots. Detection completes on the narrow bar; fire on the confirming breakout close.
- Suggested inputs: lookback (4, fixed by definition), target mode (measure rule vs fixed %),
  stop mode/percent, entry timing (next open vs breakout close).
- NR4 and NR7 differ only in window length — share one parameterized implementation.
