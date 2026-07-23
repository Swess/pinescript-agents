---
id: cup-with-handle
name: Cup with handle
aliases: [CWH, cup-and-handle]
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 40, typical: 150}
confirmation: required
rank: {value: 3, of: 39}
stats:
  break_even_failure_rate: 0.05
  avg_move: 0.54
  throwback_rate: 0.62
  pct_meeting_target: 0.61
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/cup.html
accessed: 2026-07-16
---

# Cup with handle

## Overview

A rounded, U-shaped turn (the cup) following a rise, with a shorter congestion area (the
handle) on the right side forming in the upper half of the cup. Price breaks out upward
above the right cup rim. A top-tier bullish performer (rank 3 of 39, 5% break-even
failure rate), though nearly half of breakouts retrace substantially within two months.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Price rises into the start of the cup (Bulkowski doesn't pay much attention to this) |
| Shape | A rounded turn that looks like a cup with a handle on the right |
| U-shaped cup | The cup should be U-shaped, not V-shaped (allow variations) |
| Handle | The cup must have a handle on the right |
| Cup duration | 7 to 65 weeks (allow variations) |
| Handle duration | 1 week minimum, no maximum; forms in the upper half of the cup |
| Cup rims | Should be near the same price level (be flexible) |

## Detection Rules (computable)

Definitions: `left_lip` / `right_lip` = swing highs bounding the cup (via
`ta.pivothigh`); `cup_low` = lowest low between the lips; `handle_low` = lowest low after
`right_lip` and before breakout.

- **R1 [B]** Rise into the cup: `close` at `left_lip` above the close `N` bars earlier (default `N = 20` [D]; low-weight filter — Bulkowski de-emphasizes it).
- **R2 [B]** Cup duration: `35 <= (bar_rlip - bar_llip) <= 325` bars (7–65 weeks, daily bars; allow variations).
- **R3 [B]** Rims near the same price: `abs(left_lip_high - right_lip_high) / min(left_lip_high, right_lip_high) <= 0.05` (tolerance default 5% [D]).
- **R4 [B]** U-shape, not V-shape: bottom is rounded — e.g. the count of bars whose low is within `5%` of `cup_low` is ≥ 5, or the time from `left_lip` to `cup_low` and `cup_low` to `right_lip` are each ≥ 25% of cup width (proxy defaults [D]).
- **R5 [B]** Handle exists on the right: after `right_lip`, price pauses for ≥ 5 bars (1 week minimum) before breakout.
- **R6 [B]** Handle in upper half of cup: `handle_low >= cup_low + 0.5 * (right_lip_high - cup_low)`.
- **R7 [B]** Confirmation required: no signal until breakout (see below).

## Confirmation & Breakout

Breakout is **upward** by definition. Standard trigger: `close > right_lip_high` (close
above the right cup rim). Early entry: draw a down-sloping trendline along the handle
peaks — a close above that trendline signals an early buy. For inner cups (cups within
cups), trade the inner cup when price rises above its handle.

## Targets & Stops

- Target (measure rule): `height = right_lip_high - cup_low` (right cup lip to lowest
  valley); `target = breakout_price + 0.61 * height`, where breakout price = right cup
  lip. Full-height target met 61% of the time.
- Stop: the handle low is a good place for a stop; raise it as price rises (trailing).

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 3 of 39 (1 = best) |
| Break-even failure rate | 5% |
| Average rise | 54% |
| Throwback rate | 62% |
| % meeting price target | 61% |

Based on 913 perfect trades. Notable: handles shorter than the median 22 days show
superior post-breakout performance; throwbacks hurt performance. Trading lesson (300
patterns, 1990–2024): 47% of cup-with-handle patterns dropped substantially within two
months of the upward breakout, and 23% rise no more than 15% before dropping — manage
the trade actively after entry.

## Trading Tactics

- Buy when price closes above the right cup rim; or take the early entry on a close above a down-sloping handle trendline.
- Trade inner cups (cups forming within larger cups) when price rises above the inner handle.
- Place the stop at the handle low and raise it as price rises.
- Prefer handles shorter than 22 days (the median).
- Expect throwbacks 62% of the time; they hurt performance.
- Beware the post-breakout retrace: nearly half of these patterns drop substantially within two months of breakout.

## Pine Notes

- Feasibility: **moderate–hard**. The rims are pivot highs, but the "rounded U-shape"
  (R4) needs a proxy — bar-count near the bottom or a curvature/regression test; ship it
  as an adjustable filter since Bulkowski explicitly allows variations.
- Long cup durations (up to 65 weeks ≈ 325 daily bars) approach the 500-bar lookback
  limit — cache lip/low levels in `var` state as pivots confirm rather than indexing deep
  history; weekly timeframe is friendlier.
- Fire the signal only on the breakout bar (`close > right_lip_high`); pivot confirmation
  lag means the right lip is known late — do not backdate.
- Suggested inputs: pivot length, rim tolerance % (R3), min/max cup duration (R2),
  U-shape strictness (R4), min handle bars and upper-half requirement toggle (R5/R6),
  target multiplier (0.61), optional early trendline-entry toggle.
- Most subjective criteria: U- vs V-shape and "be flexible" rim matching — both should
  default loose.
