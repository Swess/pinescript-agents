---
id: flags
name: Flags
aliases: []
category: chart-pattern
type: continuation
direction: either
bars: {min: 3, typical: 8}
confirmation: required
rank: null
stats:
  break_even_failure_rate: 0.44
  avg_move: 0.09
  throwback_rate: null
  pct_meeting_target: 0.46
source: https://thepatternsite.com/flags.html
accessed: 2026-07-16
---

# Flags

## Overview

A small rectangle of consolidating price, usually tilted against the prevailing trend and
mounted at the end of a flagpole — an unusually steep, straight-line price run. Without a
quick, near-vertical move (the flagpole) there is no flag. Flags are short-term continuation
patterns; the best performers have a long, near-vertical flagpole.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Can be any direction leading to the pattern |
| Shape | Small rectangle, often tilted against the prevailing price trend |
| Trend lines | Price moves between two parallel, or near parallel, trendlines |
| Duration | Less than 3 weeks; longer patterns are rectangles or channels |
| Flagpole | Unusually steep price run lasting several days leading to the flag |
| Volume trend | Downward 74% (up breakouts) to 77% (down breakouts) of the time |
| Breakout | Upward 60% of the time |

## Detection Rules (computable)

Definitions: `pole_start` (A) = start of the steep price swing, `pole_end` (B) = swing
extreme where consolidation begins; flag spans `bar_flag_start..bar_flag_end`; `upper`/`lower` =
lines fit through flag highs/lows; `pole_height = abs(price_B - price_A)`.

- **R1 [B]** Flagpole exists: steep, quick run — `abs(close - close[P]) / close[P] >= 0.10` over `P <= 10` bars (default 10% in ≤10 bars [D]; Bulkowski: "unusually steep," several days).
- **R2 [B]** Flag duration < 3 weeks: `flag_len <= 15` bars; minimum 3 bars [D].
- **R3 [B]** Parallel channel: `abs(slope(upper) - slope(lower)) <= 0.25 * avg_channel_width / flag_len` (near-parallel tolerance, default [D]).
- **R4 [B]** Tilt against trend (best performance, optional filter): after an up pole, `slope(mid) < 0` where `mid` = linear regression of `(high + low) / 2` within the flag (Bulkowski's own tilt method); reversed for down poles.
- **R5 [D]** Flag is tight: all flag closes within the pole's upper (up trend) or lower (down trend) 25% retracement zone — `max_flag_retrace <= 0.5 * pole_height` (default, adjustable).
- **R6 [B]** Volume trends downward within the flag: regression slope of `volume` < 0 (74–77% of the time; optional filter).

## Confirmation & Breakout

Breakout = close outside a flag trendline in the direction of the prior trend (continuation).
Breakouts are upward 60% of the time. Treat a close beyond the flag's upper line (after an up
pole) as the long trigger; a close below the lower line (after a down pole) as the short trigger.

## Targets & Stops

- Measure rule: `height = price_B - price_A` (start to end of the pole swing). Up breakout:
  `target = flag_low + 0.46 * height` added to the bottom of the flag (C). Down breakout:
  `target = flag_high - 0.46 * height` subtracted from the top of the flag. (46% is the
  percentage meeting the full-height target.)
- Alternative targets: the pole projects the flag "half staff" — move after ≈ move before (A = B).
- Stop: just beyond the far side of the flag (below flag low for longs, above flag high for shorts) [D].

## Performance

Bull market, hundreds of perfect trades. Note: results are based on the short-term price
swing, not breakout-to-ultimate-high/low — that is why no rank is given and moves look small.

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall performance rank | Not ranked | Not ranked |
| Break-even failure rate | 44% | 45% |
| Average rise/decline | 9% | 8% |
| % meeting price target | 46% | 46% |

Notable: best performance comes from an upward inbound trend with a downward-tilting flag.
Flags above a flat base (up breakouts) or below one (down breakouts) precede large moves.
Tight flags beat loose ones. Best performers break out within a third of the yearly low.

## Trading Tactics

- Require a genuine flagpole — no steep run, no flag trade.
- Prefer tight flags; skip loose ones (meandering price, pokes outside the trendlines, white space, jagged look).
- Prefer flags tilting against an upward inbound trend.
- Look for the half-staff behavior: expect the post-breakout move to roughly match the pole.
- Favor breakouts within a third of the yearly low.
- Enter on the close outside the flag trendline in the trend direction; target via the measure rule with the 46% multiplier.

## Pine Notes

- Feasibility: **moderate**. The pole is easy (rate-of-change filter, R1); the flag channel
  needs short linear regressions over highs/lows, which is manageable given flags are ≤15 bars.
- Bulkowski's tilt method is directly codable: `ta.linreg((high + low) / 2, flag_len, 0)` slope (R4).
- "Tight vs loose" (R5) is the most subjective criterion; ship as an adjustable retracement cap.
- Suggested inputs: pole min % and max bars (R1), flag min/max bars (R2), parallel tolerance (R3),
  tilt filter on/off (R4), max retracement (R5), volume filter on/off (R6), target multiplier (0.46).
- Detection lags by the pivot/regression window; fire signals only on the breakout close to avoid repainting.
