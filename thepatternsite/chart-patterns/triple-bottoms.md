---
id: triple-bottoms
name: Triple bottoms
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 20, typical: 60}
confirmation: required
rank: {value: 12, of: 39}
stats:
  break_even_failure_rate: 0.13
  avg_move: 0.46
  throwback_rate: 0.65
  pct_meeting_target: 0.74
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/tb.html
accessed: 2026-07-16
---

# Triple bottoms

## Overview

A triple bottom is three distinct valleys at roughly the same price, separated by two peaks,
appearing after a downtrend. It is a bullish reversal, somewhat rare (three bottoms seldom
line up), and becomes valid only when price closes above the highest peak between the valleys.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading into the pattern, but should not drop below the first bottom |
| Shape | Three distinct valleys that look similar |
| Bottom price | Small price variation between bottoms — the three valleys bottom near the same price (allow variation) |
| Confirmation | Price closes above the highest peak between the valleys |
| Volume | Usually higher on the first bottom than the last; trends downward 61% of the time; may peak beneath each valley |

## Detection Rules (computable)

Definitions: `valley1/2/3` = swing lows via `ta.pivotlow(r, r)`; `peakA` = highest high
between valley1 and valley3 (the breakout level).

- **R1 [B]** Prior trend down into the pattern, without breaking below the first bottom: `low_v2 >= low_v1 * (1 - 0.02)` and `low_v3 >= low_v1 * (1 - 0.02)` (default 2% tolerance [D]).
- **R2 [B]** Three valleys near the same price: `max(low_v1, low_v2, low_v3) - min(...)` divided by `min(...)` `<= 0.05` (small variation; default 5% [D]).
- **R3 [D]** Valleys distinct: separated by at least `K` bars each (default `K = 5`) with an intervening peak that rises meaningfully above the valleys (default ≥ 5% of price).
- **R4 [B]** Confirmation: `close > peakA` (close above the highest peak between the valleys).
- **R5 [B]** Best when the last valley is above the second: `low_v3 > low_v2` (predicts better performance) — quality filter, not required.

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > peakA` (the highest peak between the
valleys). Triples are rare, so price often continues down without confirming — wait for the
close above the peak before entering. If the rise between bottoms 1–2 exceeds that between
2–3, a down-sloping trendline connecting the two peaks gives an earlier buy on a close above it.

## Targets & Stops

- Measure rule: `height = peakA - min(low_v1, low_v2, low_v3)`; `target = peakA + 0.74 * height`
  (add to the breakout price; 74% meet target).
- A flat-base "pothole in a road" (weekly scale) into the triple bottom predicts a large rise.
- Throwbacks hurt post-breakout performance.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 12 of 39 (1 = best) |
| Break-even failure rate | 13% |
| Average rise | 46% |
| Throwback rate | 65% |
| % meeting price target | 74% |

Statistics based on more than 2,500 perfect trades. Best performers: short-to-intermediate
declines (≤6 months) into the pattern; a tall left side ("Big W"); a last valley above the
second; a flat base into the turn. Avoid triple bottoms after a long uptrend or after a peak
(the rise may stall at the old peak). Beware multi-peak "bear trap" setups.

## Trading Tactics

- Wait for the confirming close above the center peak before buying (triples often fail to confirm).
- Prefer a tall left side and a last valley above the second valley.
- Favor patterns after short/intermediate declines and long flat bases; avoid long prior uptrends.
- An early entry: buy on a close above the down-sloping trendline joining the two peaks.
- Avoid bearish price spikes/tails and gaps down near the pattern; throwbacks hurt performance.

## Pine Notes

- Feasibility: **moderate**. Needs three confirmed pivot lows plus the intervening peak;
  pivots lag by the lookback and can repaint if anchored to the pivot bar.
- Suggested inputs: pivot length, bottom-tolerance % (R2), min valley separation `K` (R3),
  min peak-rise %, target multiplier (0.74), "last valley above second" filter toggle (R5).
- Track candidate valleys in `var` arrays/UDTs; fire the alert only on the bar where
  `close > peakA` first occurs (non-repainting confirmation).
- Subjective element: what counts as a "distinct valley" — expose pivot length and separation.
