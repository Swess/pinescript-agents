---
id: multi-peaks
name: Multi-peaks.
aliases: [Multi-peak pattern]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 20, typical: 70}
confirmation: required
rank: {value: 10, of: 37}
stats:
  break_even_failure_rate: 0.21
  avg_move: 0.16
  throwback_rate: 0.63
  pct_meeting_target: 0.54
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/MultiPeaks.html
accessed: 2026-07-16
---

# Multi-peaks.

## Overview

A Bulkowski-discovered (June 2021) topping pattern: four or more peaks near the same
price forming a flat-top resistance barrier over an irregular bottom, appearing after an
upward trend. It always forms as a top and confirms only when price closes below the
lowest valley between the peaks; upward breakouts invalidate it.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward; the trend start (intermediate-term uptrend, 3–6 months) must be below the bottom of the multi-peak. Ignore overshoot; ignore the pattern in an upward retrace of a downtrend |
| Shape | Flat-top pattern with an irregular (or not) bottom |
| Peaks | At least four peaks near the same price; no peak should soar above the others (as in a head-and-shoulders head) |
| Separation | No minimum, but major peaks were separated by at least a week |
| Confirmation | Closes below the bottom of the pattern (lowest low between the peaks); upward breakouts invalidate the pattern |
| Volume | Rising/falling pattern volume and heavy breakout volume have no influence on performance |
| Exclusions | Not counted if the pattern is a head-and-shoulders top or includes a pronounced 2B; rectangle tops with 4+ peaks are fine; ascending/descending triangles and broadening patterns ignored |

## Detection Rules (computable)

Definitions: `peak1..peakN` (N ≥ 4) = swing highs via `ta.pivothigh(l, r)` near a common
price; `pattern_top` = highest peak (point A); `lowest_low` = lowest low between the
first and last peak (point B).

- **R1 [B]** Prior uptrend with trend start below the pattern: `lowest_low > close[M]` for an intermediate-term lookback (default `M = 80` bars ≈ 4 months [D]).
- **R2 [B]** At least four peaks near the same price: `(max(peaks) - min(peaks)) / min(peaks) <= 0.03` (default 3% tolerance [D]).
- **R3 [B]** No soaring peak: `pattern_top / min(peaks) <= 1 + 0.03` (same tolerance; excludes H&S-type heads).
- **R4 [B]** Peak separation: adjacent qualifying peaks ≥ 5 bars apart (Bulkowski: "at least a week" [D as exact number]).
- **R5 [B]** Exclusion — pronounced 2B: no peak materially above the flat top late in the pattern (that becomes the multi-peak 2B variant).
- **R6 [B]** Confirmation: after the last peak, `close < lowest_low`. A close above `pattern_top` first invalidates the pattern.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: a close below the lowest valley between
the peaks (`close < lowest_low`) — confirmation and breakout are the same event. Upward
breakouts invalidate the pattern. Bulkowski notes it may work better to trade a
double-top confirmation inside the pattern for an earlier entry (un-quantified idea).

## Targets & Stops

- Target (measure rule): `target = lowest_low - (pattern_top - lowest_low)` (full height
  A→B subtracted from B). Met 54% of the time — be conservative.
- Stop guidance from Bulkowski's stats: 2% of patterns see price rise above the pattern
  top after breakout; 14% stop above the middle but below the top; 70% stay between the
  bottom and the middle. Default stop [D]: above the pattern midpoint,
  `lowest_low + 0.5 * (pattern_top - lowest_low)`.

## Performance

Bull-market results (657 perfect trades):

| Metric | Value |
|---|---|
| Overall performance rank | 10 of 37 (1 = best) |
| Break-even failure rate | 21% |
| Average decline | 16% |
| Pullback rate | 63% |
| % meeting price target | 54% |
| Trend change (≥ 20% drop) after breakout | 31% of the time |

Variant stats (2B-type variants included; base pattern in parentheses):

| Metric | Variant (base) |
|---|---|
| Break-even failure rate | 14% (21%) |
| Average decline | 18% (16%) |
| Pullback rate | 65% (63%) |
| % meeting price target | 57% (54%) |

Notable: including 2B-type variants improves nearly every stat, and patterns at least 91
days (3 months) from first to last peak improve further — average decline 20%, failures
12%. Of variants wider than 91 days, 44% saw price drop 20%+ after the breakout (vs 31%
for regular multi-peaks). Volume has no influence.

## Trading Tactics

- Short on a close below the lowest valley between the peaks; never before — upward
  breakouts invalidate the pattern.
- Use the full-height measure rule but treat the target as optimistic (54% hit rate).
- Prefer wide patterns (≥ 91 days first-to-last peak) and the 2B variant — both improve
  decline and failure stats.
- Consider the earlier double-top entry inside the pattern for better price and lower
  failed-trade risk (Bulkowski's suggestion, not statistically validated).
- Expect a pullback 63% of the time; a full trend change follows only 31% of the time.

## Pine Notes

- Feasibility: **moderate**. Maintain a `var` array of confirmed `ta.pivothigh` peaks
  within the equality band; require ≥ 4 before arming the confirmation check. Pivots
  confirm late — signal only on the breakdown-close bar (no repaint).
- The H&S / 2B exclusions (R3/R5) reduce to band checks against the flat top — cheap to
  compute, but the "pronounced" qualifier is subjective; expose the tolerance as an input.
- Suggested inputs: pivot length, peak-equality tolerance % (R2/R3), min peak separation
  (R4), min pattern width filter (91-day toggle), trend lookback (R1).
- Reset the peak set whenever a close exceeds the working pattern top (invalidation) or
  a confirmation fires.
- On intraday charts "week" ≠ 5 bars; scale R4 by timeframe or restrict to daily.
