---
id: narrow-range-7
name: Narrow range 7
aliases: [NR7]
category: small-pattern
type: either
direction: either
bars: {min: 7, typical: 7}
confirmation: required
rank: {value: 11, of: 23}
stats:
  break_even_failure_rate: 0.46
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.43
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/nr7.html
accessed: 2026-07-16
---

# Narrow range 7

## Overview

A seven-bar volatility-contraction pattern: the most recent bar has the narrowest high-low
range of the last seven bars. The tight range often precedes an expansion, and price can break
out either up or down. Bulkowski uses the NR7 in his Chart Pattern Indicator. Headline stats
are for upward breakouts in a bull market (rank 11 of 23).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Seven bars |
| Narrow range | The most recent bar's high-low range is smaller than each of the prior six bars (narrowest of the seven) |
| Breakout | Price closes above the top or below the bottom of the NR7 |

## Detection Rules (computable)

Definitions: `range = high - low`. Current bar is bar 0; the seven-bar window is bars `[0..6]`.

- **R1 [B]** Narrowest of seven: `range[0] < range[i]` for every `i` in `1..6` (equivalently `range[0] == lowest(range, 7)` and strictly less than the others).
- **R2 [D]** Pattern top/bottom: `top = highest(high, 7)`, `bottom = lowest(low, 7)` over the seven bars.

## Confirmation & Breakout

Breakout occurs when price closes **above the top** or **below the bottom** of the seven-bar
pattern. Bulkowski buys/shorts at the next open in the breakout direction. Direction is not
predetermined — trade whichever side breaks.

## Targets & Stops

- Height: `height = top - bottom` (highest high minus lowest low of the seven bars).
- Up target: `top + height`; down target: `bottom - height`. Measure rule met **43%** (bull, up).
- Stop: Bulkowski's swing test used a fixed 7% profit target and 7% stop; alternatively place a
  stop just beyond the opposite side of the pattern [D].

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 46% | +7% | 43% |
| Bull, down | 47% | -6% | 37% |
| Bear, up | 40% | +8% | 32% |
| Bear, down | 27% | -12% | 39% |

Swing-trade test (7% target / 7% stop, 29,021 trades): Bull/Up net +$78.79 (57% wins);
Bull/Down -$55.52; Bear/Up -$91.22; Bear/Down -$33.63. Measure-rule odds are notably weaker
than the NR4. High failure rates are typical of short-term patterns.

## Trading Tactics

- Wait for a close beyond the top or bottom; trade that direction at the next open.
- Alternate signal (untested by Bulkowski): use a close beyond the last (narrowest) bar's
  high/low to anticipate direction, then ride the swing.
- The measure rule is weak (43% at best) — treat targets as rough estimates.

## Pine Notes

- Feasibility: **easy**. Pure range comparison over seven bars, no pivots. Detection completes
  on the narrow bar; fire on the confirming breakout close.
- Suggested inputs: lookback (7, fixed by definition), target mode (measure rule vs fixed %),
  stop mode/percent, entry timing (next open vs breakout close).
- Shares its implementation with NR4 via a single window-length parameter.
