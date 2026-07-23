---
id: horn-tops
name: Horn Top
aliases: []
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 1, of: 2}
stats:
  break_even_failure_rate: 0.09
  avg_move: 0.19
  throwback_rate: null
  pct_meeting_target: 0.54
source: https://thepatternsite.com/hornt.html
accessed: 2026-07-16
---

# Horn Top

## Overview

An H-shaped, 3-week pattern on the weekly chart: two parallel upward price spikes separated
by one week, towering above the surrounding price landscape after an uptrend. Discovered by
Bulkowski in 1998; it performs best on weekly charts and especially well in a bear market.
Confirmation is a close below the lowest price of the 3-week pattern.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Chart | Use the weekly chart to locate horns |
| Price trend | Upward leading to the pattern |
| Shape | Steer's horn: two parallel price spikes separated by a week |
| Spikes | Should be longer than most in the past year, but be flexible |
| Confirmation | Valid when price closes below the lowest price in the 3-week pattern |

## Detection Rules (computable)

Definitions (weekly bars): `left` = bar[2], `mid` = bar[1], `right` = bar[0] at detection
time; `pattern_high = max(high[2], high[0])`, `pattern_low = min(low[2], low[1], low[0])`.

- **R1 [B]** Prior trend up: `close[3] > close[3 + N]` with default `N = 10` weeks [D].
- **R2 [B]** Both spikes rise above the middle week: `high[2] > high[1] and high[0] > high[1]`.
- **R3 [B]** Spikes tower above the surrounding landscape: `high[2] > ta.highest(high, K)[3]` and `high[0] > ta.highest(high, K)[3]` for surrounding lookback `K = 8` weeks (default [D]; Bulkowski: longer than most spikes in the past year, but be flexible).
- **R4 [D]** Spikes roughly parallel/similar height: `abs(high[2] - high[0]) / min(high[2], high[0]) <= 0.05` (default 5%, adjustable).
- **R5 [B]** Confirmation required: signal only when `close < pattern_low` on a later week.

## Confirmation & Breakout

Wait for a weekly close below the lowest low of the 3-week pattern before placing a trade.
Breakout is downward by definition once confirmed. A horn top usually signals a trend change
within 2 months.

## Targets & Stops

- Measure rule: `height = pattern_high - pattern_low` (highest high to lowest low of the
  3-week pattern); `target = pattern_low - 0.54 * height` (54% meet the full-height target).
- Stop: above the higher of the two spikes, e.g. `pattern_high * 1.005` [D].

## Performance

Bull market, 843 perfect trades, weekly scale:

| Metric | Value |
|---|---|
| Overall performance rank | 1 of 2 (best, weekly scale) |
| Break-even failure rate | 9% |
| Average decline | 19% |
| % meeting price target | 54% |

Notable: performance is good, especially in a bear market. Pullbacks hurt performance.

## Trading Tactics

- Wait for the weekly close below the 3-week pattern low before shorting.
- Avoid horn tops that appear near the end of a downtrend.
- Expect a trend change within about 2 months of the pattern.
- Pullbacks hurt performance — a quick return to the breakout level is a warning sign.

## Pine Notes

- Feasibility: **easy**. A fixed 3-bar template on weekly bars — pure OHLC comparisons,
  mirroring the horn bottom.
- Detect on the close of the right-spike week; confirm on the first subsequent weekly
  `close < pattern_low`. Non-repainting on closed bars.
- Run on the weekly timeframe directly; Bulkowski's stats are weekly-only.
- Suggested inputs: trend lookback N (R1), surrounding lookback K (R3), spike-similarity
  tolerance (R4), target multiplier (0.54), stop offset.
- The "longer than most spikes in the past year" guidance is loose by Bulkowski's own advice;
  K = 8 weeks is a pragmatic default — expose it rather than scanning a full 52-week window.
