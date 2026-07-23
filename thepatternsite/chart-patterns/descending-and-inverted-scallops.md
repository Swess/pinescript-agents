---
id: descending-and-inverted-scallops
name: Descending and inverted scallops
aliases: [inverted and descending scallop]
category: chart-pattern
type: continuation
direction: bearish
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 10, of: 36}
stats:
  break_even_failure_rate: 0.17
  avg_move: 0.16
  throwback_rate: 0.66
  pct_meeting_target: 0.29
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/idscallops.html
accessed: 2026-07-16
---

# Descending and inverted scallops

## Overview

An inverted-J shape usually found in downtrends or at bearish turning points: price
rises from the pattern start (A) to a rounded top (B), then trends down to the scallop
end (C, the lowest valley). Discovered by Bulkowski in mid-2004; robust performers in
bull markets. The pattern confirms as a bearish continuation when price closes below
the lowest valley without first closing above the peak. Frontmatter uses the
down-breakout figures (up-breakout split below).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Usually downward leading to the scallop, or at bearish turning points |
| Shape | Looks like an inverted J |
| Smooth top | Rounded top, not V-shaped, but be flexible |
| Down move | The rise from pattern start (A) to the high (B) averages 56% of the following down move from the highest peak (B) to the scallop end (C, lowest valley) |
| Ends | Both scallop start and end should form at price turning points |
| Proportion | Height and width should look proportional |
| Confirmation | Confirms when price closes below the lowest valley without first closing above the scallop's peak |

## Detection Rules (computable)

Definitions: `A` = pattern start (swing low/turning point), `B` = highest peak (swing
high, rounded), `C` = scallop end / lowest valley (swing low), with `bar_A < bar_B < bar_C`.

- **R1 [B]** Prior trend usually down: `close` at `A` below the close `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Rounded top: highest high within 1% spans ≥ 2 bars; no single-bar spike top (default; "be flexible" per Bulkowski).
- **R3 [B]** Leg proportion: `(high_B - low_A) ≈ 0.56 * (high_B - low_C)`; accept `0.3 <= (high_B - low_A) / (high_B - low_C) <= 0.9` (56% is the stated average; band is a default [D]).
- **R4 [B]** Ends at turning points: `A` and `C` are confirmed pivot lows.
- **R5 [D]** Proportional height/width: `0.5 <= (bars A→C) / percent_height` sanity band — implement simply as pattern width `10–60` bars and height ≥ 5% (defaults; subjective criterion).
- **R6 [B]** Pattern valid only on confirmation: a close below `low_C` occurring *before* any close above `high_B`; a close above the peak first invalidates the candidate.

## Confirmation & Breakout

Downward breakout/confirmation: `close < low_C` (close below the lowest valley in the
pattern) without a prior close above `high_B`. Upward breakouts (close above the peak)
also occur and are tallied separately in the statistics.

## Targets & Stops

- Height: `H = high_B - low_C` (highest peak to lowest valley).
- Downward target: `target = low_C - 0.29 * H` (29% percentage-meeting-target).
- Upward target: `target = high_B + 0.62 * H` (62%), added to the top of the pattern.
- Cover rule (stop for shorts): if price retraces upward 67% of the B→C decline
  (`close > low_C + 0.67 * (high_B - low_C)`), cover the short.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 9 of 39 | 10 of 36 |
| Break-even failure rate | 16% | 17% |
| Average rise/decline | 47% | 16% |
| Throwback/pullback rate | 58% | 66% |
| % meeting price target | 62% | 29% |

Bull-market numbers based on more than 1,500 perfect trades. Notable: scallops with
upward breakouts and a rising volume trend perform best; tall scallops beat short
ones; throwbacks hurt performance; scallops get narrower and shorter the lower they
appear in a price trend; a handle after the scallop end (before the downtrend resumes)
is quite common.

## Trading Tactics

- Wait for confirmation before trading.
- Short on a close below the lowest valley (C); cover if price retraces 67% of the
  B→C decline.
- Measure rule: height × 29% below the valley (down) or × 62% above the peak (up).
- Prefer tall scallops; up-breakout trades work best with a rising volume trend.
- Narrowing, shortening scallops mark a maturing downtrend — once the downtrend ends,
  buy and ride the new uptrend.

## Pine Notes

- Feasibility: **moderate-hard**. Needs pivots for A, B, C plus the invalidation rule
  (close above `high_B` cancels the candidate before confirmation) — track candidate
  state in a `var` UDT and clear it on invalidation.
- The 56% leg-proportion test (R3) is the most distinctive objective filter; expose
  its acceptance band as inputs.
- Rounded-top (R2) and proportionality (R5) are subjective — ship as optional filters.
- Pivots confirm `len` bars late; anchor entries to the confirmation close.
- Suggested inputs: pivot length, leg-ratio band (R3), min height %, width bounds,
  trend-lookback N, target multipliers (0.29 down / 0.62 up), cover-retrace fraction
  (0.67).
