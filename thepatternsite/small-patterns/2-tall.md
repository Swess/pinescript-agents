---
id: 2-tall
name: 2-tall
aliases: [2-Tall]
category: small-pattern
type: either
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/TallDance.html
accessed: 2026-07-16
---

# 2-tall

## Overview

A variation of the 2-dance: two adjacent, unusually tall price bars (each at least 1.5–2× the
prior month's average bar height). It performs strongly in stocks regardless of inbound trend,
best as an upward-breakout reversal of a downtrend. Similar to daily pipes but with fewer
restrictions. Rare in ETFs and crypto because of the height requirement.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Up or down into the pattern; downtrends with upward breakouts (reversals) work best |
| Shape | Two adjacent bars, each ≥ 1.5× (best ≥ 2×) the average bar height of the prior month (22 bars) |
| Breakout | Upward only (tested); price rises above the top of the higher of the two bars |
| Trading | Buy stop a penny above the higher bar's top; stop-loss a penny below the lower bar's bottom |
| Target | 2× pattern height added to the top; ignore setups whose target is >20% away |
| Vehicle | Best in stocks; rare in ETFs/crypto |

## Detection Rules (computable)

`avgH = ta.sma(high - low, 22)[1]` (average bar height over the month before the pair). Bars
`[1]` and `[0]`.

- **R1 [B]** Bar 1 tall: `(high[1] - low[1]) >= 2 * avgH` (1.5× more prolific; default 2.0).
- **R2 [B]** Bar 2 tall: `(high[0] - low[0]) >= 2 * avgH`.
- **R3 [D]** Target within reach: computed target ≤ 20% above the pattern top (Bulkowski
  discarded unrealistic >20% targets).
- **R4 [D]** Min price $5 (Bulkowski excluded penny stocks).

Note: unlike 2-did, the 2-tall does NOT require an inside day — height is the only shape rule.

## Confirmation & Breakout

Entry via a buy stop a penny above the top (higher high) of the two bars. Stop-loss a penny
below the lower low. Upward breakouts only; reversals of a downtrend perform best.

## Targets & Stops

- Target (height exit): `target = pair_high + 2 * (pair_high - pair_low)`. Because the pair is
  tall, the target is far → larger profit when reached. Skip setups whose target is >20% away.
- Stop-loss: a penny below the lower of the two bars.

## Performance

Bull-market stocks, upward breakouts, height exit:

| Metric | 2-Tall Uptrend | Uptrend Bench | 2-Tall Downtrend | Downtrend Bench |
|---|---|---|---|---|
| Trades | 3,438 | 6,018 | 3,024 | 5,373 |
| Avg profit/loss per trade | $142.63 | $48.01 | $214.49 | $68.70 |
| Win/loss ratio | 42% | 40% | 46% | 42% |
| Avg gain of winners | 13% | 7% | 13% | 7% |
| Avg loss | -7% | -4% | -7% | -4% |

ETFs: $179.25 (up) / -$42.03 (down) vs $48.84 / $51.31 — strong in uptrends, avoid in
downtrends (loses money). Crypto: $779.98 (up, 58 trades) / $192.51 (down, 10 trades) —
huge but too few samples to trust.
Notable: outperforms the benchmark ~3:1 in stocks; downtrend (reversal) version does best
($214.49). Long hold times (~55-62 days) due to the far target.

## Trading Tactics

- Best in stocks; treat ETF/crypto results as unreliable (few samples).
- Prefer it as an upward-breakout reversal of a downtrend.
- In ETFs, avoid the downtrend variety (it loses money).
- Entry a penny above the pattern top, stop a penny below the bottom, target 2× height; skip
  targets more than 20% away.

## Pine Notes

- Feasibility: **easy**. Two-bar tallness test via `ta.sma(high-low, 22)`; no pivots, no
  repaint. Completes on the 2nd bar's close; breakout confirmation adds a later bar.
- Suggested inputs: tallness multiple (default 2.0, alt 1.5), average window (default 22),
  target height multiplier (default 2.0), max target distance % (default 20), min price,
  optional trend filter.
- Similar to daily pipe tops/bottoms but with fewer restrictions.
