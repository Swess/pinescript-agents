---
id: pennants
name: Pennants
aliases: []
category: chart-pattern
type: continuation
direction: either
bars: {min: 3, typical: 8}
confirmation: required
rank: null
stats:
  break_even_failure_rate: 0.54
  avg_move: 0.07
  throwback_rate: null
  pct_meeting_target: 0.35
source: https://thepatternsite.com/pennants.html
accessed: 2026-07-16
---

# Pennants

## Overview

A short symmetrical triangle — price bounces between two converging trendlines for three
weeks or less — mounted on an unusually steep flagpole. Pennants are day-trader workhorses
that supposedly mark the midway point of a move, but they work that way only about 30% of
the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be any direction leading to the pattern |
| Shape | Looks like a short symmetrical triangle |
| Trendlines | Prices move between two converging trendlines |
| Duration | 3 weeks or less; longer patterns are symmetrical triangles or wedges |
| Flagpole | Unusually steep run lasting several days leading to the pennant |
| Volume trend | Downward 86% of the time |
| Breakout | Upward 57% of the time |

## Detection Rules (computable)

Definitions: `pole_start` (A) = start of the steep swing, `pole_end` (B) = swing extreme
where the pennant begins; pennant spans `bar_p_start..bar_p_end`; `upper`/`lower` = lines fit
through pennant highs/lows; `pole_height = abs(price_B - price_A)`.

- **R1 [B]** Flagpole exists: steep, quick run — `abs(close - close[P]) / close[P] >= 0.10` over `P <= 10` bars (default 10% in ≤10 bars [D]; Bulkowski: average inbound swing 19% in 11 days).
- **R2 [B]** Pennant duration ≤ 3 weeks: `pennant_len <= 15` bars; minimum 3 bars [D].
- **R3 [B]** Trendlines converge: `slope(upper) < slope(lower)` and projected lines cross within `2 * pennant_len` bars ahead (apex proximity default [D]).
- **R4 [B]** Tilt filter (optional): performance suffers when the pennant slopes with the prevailing trend — prefer `slope(mid) < 0` after an up pole (and vice versa), where `mid` = regression of `(high + low) / 2`.
- **R5 [D]** Tight pennant: closes stay within the converging boundaries; retracement of the pole `<= 0.5 * pole_height` (default, adjustable).
- **R6 [B]** Volume trends downward: regression slope of `volume` over the pennant < 0 (86% of the time; optional filter).

## Confirmation & Breakout

Breakout = close outside a pennant trendline; upward 57% of the time. Trade in the breakout
direction (typically the direction of the pole for the continuation play).

## Targets & Stops

- Measure rule: `height = abs(price_B - price_A)` (the pole swing). Up breakout:
  `target = pennant_low + 0.35 * height` (added to the bottom of the pennant, C). Down breakout:
  `target = pennant_high - 0.32 * height` (subtracted from the top). Multipliers are the
  percentages meeting the full-height target.
- Half staff: inbound trend averages 19% in 11 days; the outbound leg averages 14% in 10 days —
  the post-pennant move matches or exceeds the inbound one only 30% of the time. Do not assume A = B.
- Stop: just beyond the far side of the pennant [D].

## Performance

Bull market, more than 1,600 perfect trades. Results measure the short-term price swing, not
breakout-to-ultimate-high/low; no rank is applicable due to the nature of the pattern.

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall performance rank | Not applicable | Not applicable |
| Break-even failure rate | 54% | 54% |
| Average rise/decline | 7% | 6% |
| % meeting price target | 35% | 32% |

Notable: pennants above a flat base (up breakouts) or below one (down breakouts) precede
large moves. Tight pennants beat loose ones. Downward breakouts perform best within a third
of the yearly low. Performance suffers when the pennant tilts with the prevailing trend.

## Trading Tactics

- Require a steep flagpole; without it the triangle is just noise.
- Trade tight pennants; skip loose ones (meandering, jagged price poking outside the lines).
- Prefer pennants tilting against the prevailing trend.
- Use the measure rule with the 35%/32% multiplier — the full pole rarely repeats (30%).
- For shorts, favor breakouts within a third of the yearly low.
- Note the high 54% break-even failure rate: use tight stops and modest targets.

## Pine Notes

- Feasibility: **moderate-hard**. Same machinery as flags, plus a convergence test: fit
  short regressions to pennant highs and lows and require crossing slopes (R3).
- With only 3–15 bars, pivots are scarce — regressions over `high` and `low` series are more
  robust than pivot-connected lines at this scale.
- Tilt test (R4) codes directly as the sign of `ta.linreg((high + low) / 2, len, 0)` slope.
- Fire signals only on the breakout close outside a boundary; regression lines recomputed
  per bar will repaint, so freeze the boundary values when the pennant window closes.
- Suggested inputs: pole min % / max bars (R1), pennant min/max bars (R2), apex-distance limit (R3),
  tilt filter toggle (R4), max retracement (R5), volume filter toggle (R6), target multipliers (0.35/0.32).
