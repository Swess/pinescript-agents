---
id: ugly-double-bottoms
name: Ugly double bottoms
aliases: [UDB]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 10, typical: 40}
confirmation: required
rank: {value: 23, of: 41}
stats:
  break_even_failure_rate: 0.15
  avg_move: 0.41
  throwback_rate: 0.64
  pct_meeting_target: 0.63
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/udb.html
accessed: 2026-07-16
---

# Ugly double bottoms

## Overview

A double bottom in which the second bottom is significantly higher (5–15%) than the
first, appearing after a downtrend — useful for timing entries when bottom fishing.
Discovered by Bulkowski in March 2006. Average rise (41%) slightly beats regular double
bottoms (37%) with a similar failure rate; the pattern is only valid once price closes
above the highest high between the two bottoms.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downtrend into the pattern; an *upward* inbound primary (long-term) trend gives slightly better performance |
| Shape | Double bottom with unequal bottoms; second bottom 5% to 15% higher than the first, and a consecutive minor low (no intervening low) |
| Volume | Recedes 80% of the time |
| Breakout | Upward, when price closes above the highest high between the two bottoms |
| Confirmation | Confirms when price closes above the peak between the two bottoms; if price never closes above it, it is not an ugly double bottom |

## Detection Rules (computable)

Definitions: `valley1`, `valley2` = consecutive swing lows via `ta.pivotlow(l, r)` with
no intervening minor low; `peak` = highest high strictly between the two valleys.

- **R1 [B]** Prior trend down into the pattern: `close` at `valley1` below the close `N` bars earlier (default `N = 20` [D]).
- **R2 [B]** Second bottom 5–15% above the first: `0.05 <= (low_v2 - low_v1) / low_v1 <= 0.15`.
- **R3 [B]** Consecutive minor lows: no pivot low between `valley1` and `valley2`.
- **R4 [D]** Valley separation: `5 <= (bar_v2 - bar_v1) <= 50` (not stated; default bounds).
- **R5 [B]** Volume recedes across the pattern (80% of cases): regression slope of volume from `valley1` to `valley2` < 0 (ship as optional filter).
- **R6 [B]** Pattern is only valid on confirmation: a close above `peak_high` before price makes a new low below `low_v2`; otherwise it is "just more squiggles."

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > peak_high` (a close above the
highest high between the two bottoms). Bulkowski stresses this must happen before price
makes a new low; a lower low first invalidates the candidate. In the preferred setup,
breakout occurs on average 11 days after the second bottom, in a strong push on high
volume.

## Targets & Stops

- Target (measure rule): `target = peak_high + 0.63 * (peak_high - low_v1)` — height
  from the highest peak to the *left* (lower) bottom times the 63% percentage-meeting-
  target, added to the breakout price.
- Stop: slightly below the second (higher) bottom (e.g. `low_v2 * (1 - 0.005)` [D]), or
  use Bulkowski's 3-4 trendline exit (see Trading Tactics).

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank (up breakouts) | 23 of 41 (1 = best) |
| Break-even failure rate | 15% |
| Average rise | 41% |
| Throwback rate | 64% |
| % meeting price target | 63% |

Based on 4,376 perfect trades (4,376 patterns in 1,326 stocks, July 1991 – July 2025).
Notable: ugly double bottoms average a 41% rise vs 37% for regular double bottoms, with
a comparable failure rate (15% vs 16%). Best performance from short-term (0–3 month)
inbound trends; upward volume slope between the bottoms improves performance;
breakouts within a third of the yearly low tend to *underperform* (unusual for a
bottom pattern); heavy breakout-day volume (above the 30-day average) helps.

## Trading Tactics

- Wait for a close above the highest high between the bottoms; a new low first kills
  the pattern.
- Preferred setup: months-long decline that steepens into a 45–60 degree blow-off run
  lasting about a month or more; panic selling ends at the first bottom, a bounce and a
  higher second bottom follow, then an upward breakout ~11 days later on high volume.
- Draw a trendline joining the two bottoms projected upward: if it is shallow (~30
  degrees or less) and price closes below it, sell immediately — the primary decline
  likely has further to go. Otherwise monitor it; a break months later often marks the
  end of the rise.
- Prefer breakout-day volume above the 30-day average and an upward volume trend
  between the bottoms.
- Avoid: gaps down before the pattern (bad-news warning), and multi-peak overhead
  resistance above the pattern. A long lower tail/spike at the bottom that closes near
  the day's high is a buy signal.

## Pine Notes

- Feasibility: **moderate**. Needs `ta.pivotlow(len, len)` for both bottoms plus the
  "no intervening minor low" check — enforce by requiring exactly two pivot lows in the
  window. Detection lags by `len` bars; anchor entries to the confirmation bar
  (`close > peak_high`), never the valley bars.
- R2 is the defining, fully objective rule (5–15% higher second low) — easy to code.
- Invalidation logic matters: cancel a candidate as soon as `low < low_v2` occurs
  before confirmation.
- Suggested inputs: pivot length, min/max second-bottom elevation (5%/15%), max valley
  separation (R4), trend-lookback N (R1), target multiplier (0.63), optional volume
  filters (receding volume, breakout volume > 30-day SMA).
- The blow-off-angle setup (45–60 degrees) is scale-dependent and subjective — document
  it but do not code it; angle measures do not translate across chart scales.
