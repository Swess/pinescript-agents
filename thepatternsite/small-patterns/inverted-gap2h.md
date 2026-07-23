---
id: inverted-gap2h
name: Inverted Gap2H
aliases: [Inverted Gap 2H, Gap 2Hi]
category: small-pattern
type: continuation
direction: bearish
bars: {min: 3, typical: 3}
confirmation: required
rank: {value: 17, of: 23}
stats:
  break_even_failure_rate: 0.39
  avg_move: 0.08
  throwback_rate: null
  pct_meeting_target: 0.44
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/Gap2Hi.html
accessed: 2026-07-16
---

# Inverted Gap2H

## Overview

Bulkowski's upside-down version of the Gap2H: a downward price gap followed by two
consecutive lower highs and lower lows. It usually acts as a bearish continuation (69% of
the time in a bull market with a down breakout), so the expected breakout is downward. Rank
17 of 23 among small patterns with downward breakouts.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Three bars: a gap followed by two lower highs and two lower lows |
| Down gap | Price gaps lower — bar 2's high is below bar 1's low (a true gap) |
| Lower high & low | Bar 3 makes a lower high and lower low; bar 3's high is above bar 2's low (not originally tested) |

## Detection Rules (computable)

Bars indexed `bar1 = [2]`, `bar2 = [1]` (the gap bar), `bar3 = [0]` when bar 3 is current.

- **R1 [B]** Gap down: `high[1] < low[2]` (bar 2's high below bar 1's low).
- **R2 [B]** Bar 3 lower high: `high[0] < high[1]`.
- **R3 [B]** Bar 3 lower low: `low[0] < low[1]`.
- **R4 [D]** Bar 3 high above bar 2 low: `high[0] > low[1]` (added by Bulkowski in later target-exit tests; originally untested).

## Confirmation & Breakout

Breakout occurs when price closes **below the bottom** (downward, expected) or **above the
top** of the pattern. Acts as a continuation 69% of the time, so trade with the trend
(downward). Wait for the confirming breakout close, then enter at the next open.

## Targets & Stops

- Height: `height = highest_high - lowest_low` across the three bars.
- Down target: `target = lowest_low - height`; up target: `highest_high + height`.
  Met 44% of the time (bull, down breakout).
- Stop: a penny above the pattern top for shorts (or a fixed 7% stop).

## Performance

| Market / Breakout | 5% Failure | Avg Rise/Drop | Measure-rule success |
|---|---|---|---|
| Bull, up | 34% | +10% | 57% |
| Bull, down | 39% | -8% | 44% |
| Bear, up | 28% | +11% | 48% |
| Bear, down | 19% | -18% | 50% |

Best performance in a bear market. In height-exit target tests the inverted Gap2H beat the
benchmark in stocks and ETFs, performing especially well when a multi-day **uptrend**
preceded the pattern (best in ETF uptrends). No crypto results (crypto rarely gaps).

## Trading Tactics

- Expect a downward (continuation) breakout; wait for the confirming close.
- Best edge (target-exit tests) came when an uptrend led into the pattern.
- Use a pattern-boundary stop (penny above top) or a 7% stop.

## Pine Notes

- Feasibility: **easy**. Fixed three-bar OHLC + gap test, no pivots. As with Gap2H, the gap
  test is session-dependent — gate it to instruments/timeframes that actually gap (avoid
  24-hour crypto/futures overnight).
- Suggested inputs: min gap size, target multiplier, R4 toggle, stop mode.
- Fire on the confirming breakout close, not bar 3.

<!-- ANOMALY: Table 1 (Performance and Failure Rates) on the inverted-Gap2H page is
numerically identical to the Gap2H page, suggesting a copy from the original; the headline
bull/down break-even is 39% here vs 38% on Gap2H. -->
