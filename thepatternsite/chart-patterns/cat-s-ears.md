---
id: cat-s-ears
name: Cat's ears
aliases: []
category: chart-pattern
type: continuation
direction: bearish
bars: {min: 10, typical: 35}
confirmation: required
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/CatsEars.html
accessed: 2026-07-16
---

# Cat's ears

## Overview

A double top that forms in a downward price trend: after a severe decline and a pause,
price forms two peaks (the "ears") separated by a dip (the "scalp"), then breaks down
below the pattern's low and continues the decline. The pattern comes from Giorgos E.
Siligardos (Technical Analysis of Stocks & Commodities, December 2012); Bulkowski has
**not tested it** and offers no performance statistics.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Decline | Stock makes a "severe decline" leading into the pattern (phase 1; not quantified by the author) |
| Pause | Decline stops and price moves essentially horizontally (phase 2) |
| Left ear | First peak forms (phase 3) |
| Scalp | Price pauses again between the two ears, moving sideways (phase 4) |
| Right ear | Second peak forms (phase 5) |
| Scalp line break | Scalp line = lowest price in the pattern (often the drop between the ears); a close below the pattern's low confirms it |
| Volume | High volume at the ear tops and at the breakout; low volume between ears and on pullbacks |
| Duration | Pattern length between 10 days and 2 months (60 days) |

## Detection Rules (computable)

Definitions: `ear1`, `ear2` = swing highs via `ta.pivothigh(l, r)`; `scalp_low` = lowest
low strictly between the two ears; `pattern_low` = lowest low over the whole pattern.

- **R1 [B]** Prior trend down (severe decline): `close` at pattern start is below the close `N` bars earlier by at least `15%` (decline required by author; magnitude default [D]: `(close[N] - close) / close[N] >= 0.15`, `N = 40`).
- **R2 [D]** Pre-ear pause: over the `P` bars before ear1 (default `P = 5`), price range is tight — `(highest - lowest) / lowest <= 0.05` (author states horizontal movement; threshold is a default; note Variation 1 omits this phase).
- **R3 [D]** Two ears (peaks) at roughly similar height: `abs(high_e1 - high_e2) / min(high_e1, high_e2) <= 0.05` (default 5%; author allows either ear higher).
- **R4 [D]** Scalp dip between ears: `scalp_low < min(high_e1, high_e2) * 0.97` (a visible dip, default 3%).
- **R5 [B]** Duration: `10 <= pattern_bars <= 60` (10 days to 2 months).
- **R6 [B]** Confirmation required: pattern is valid only when `close < pattern_low` (scalp line break); before that, treat as potential only.
- **R7 [B]** RSI filter (optional, from trading tips): 14-period RSI stays below 65 throughout the pattern — `ta.rsi(close, 14) < 65` on every pattern bar.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < pattern_low` (a close below the
scalp line, the lowest price in the pattern). No breakout-direction probabilities are
given — Bulkowski has not tested this pattern.

## Targets & Stops

- Target (measure rule): `target = pattern_low - (highest_ear_high - pattern_low)` — take
  the height from the highest peak (A) to the lowest valley (B) and subtract it from the
  lowest valley.
- No percentage-meeting-target figure is stated (untested).
- Stop: above the higher of the two ears (e.g. `max(high_e1, high_e2) * (1 + 0.005)` [D]).

## Performance

| Metric | Value |
|---|---|
| Overall rank | Not tested (shown as "?") |
| Break-even failure rate | Not tested |
| Average decline | Not tested |
| Pullback rate | Not tested |
| % meeting price target | Not tested |

Bulkowski explicitly states he has not tested the pattern and has not verified the
identification guidelines. Six variations exist (Siligardos): missing phase-2 pause,
left ear below/above the right ear, high or low scalp line, and a volatile phase 2.

## Trading Tactics

- Use the measure rule: height (highest peak to lowest valley) projected below the lowest valley.
- Require 14-period RSI below 65 during pattern formation; RSI above 65 makes the pattern less bearish.
- The left-ear RSI reading is often lower than the right ear's.
- If the left ear's peak is above the right ear's, the pattern is more likely to reach the measure-rule target.
- Expect pullbacks on low volume after the downward breakout.

## Pine Notes

- Feasibility: **moderate**. Two pivot highs plus an intervening pivot low —
  `ta.pivothigh(len, len)` confirms each ear only `len` bars later; anchor entries to the
  scalp-line-break bar, not the ear bars, to avoid repainting.
- Suggested inputs: pivot length, ear-height tolerance % (R3), min scalp dip % (R4),
  min/max duration (R5), prior-decline % and lookback (R1), RSI length/threshold toggle (R7).
- The "severe decline" and phase-2/phase-4 pauses are the most subjective criteria — ship
  R1's magnitude and R2 as adjustable/optional filters (Variation 1 has no phase 2 at all).
- Untested pattern: expose the RSI kicker and left-ear-higher filter as optional
  confluence inputs rather than hard rules.
