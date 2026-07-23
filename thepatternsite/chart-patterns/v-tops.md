---
id: v-tops
name: V-Tops
aliases: []
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 15, typical: 30}
confirmation: required
rank: {value: 20, of: 36}
stats:
  break_even_failure_rate: 0.29
  avg_move: 0.15
  throwback_rate: 0.56
  pct_meeting_target: 0.37
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/VTop.html
accessed: 2026-07-16
---

# V-Tops

## Overview

A V-top is a straight-line upward run that reverses sharply into a straight-line decline,
forming an inverted V. It is a bearish reversal; the breakout is defined as price retracing
38.2% of the left-side rise. Computer-detected to avoid selection bias.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Uptrend | Straight-line run up with few/no pauses, often within a channel |
| Width | At least 3 weeks to 3 months |
| Reversal | Top forms a one-day reversal, island reversal, or tail, usually on heavy volume |
| Trendline | After the reversal, price pierces an up-sloping trendline along the lows (observation, not a requirement) |
| Retrace | Right side must retrace at least 38.2% of the left-side rise |
| Breakout | The 38.2% retrace point is the breakout |
| No pause | No pause between the V-top and the breakout (else it is an extended V-top) |
| No spike | V-tops with a single long price bar as the top are excluded |
| Angle | Right-side drop often mirrors the left-side rise angle |

## Detection Rules (computable)

Definitions: `B` = left-side low (pattern start), `A` = the inverted-V peak.

- **R1 [B]** Straight-line rise into `A`: mostly up-closes from `B` to `A` (default `>= 70%` up-closes [D]).
- **R2 [B]** Width from `B` to `A` is `>= 15` bars (3 weeks) and `<= 65` bars (3 months) [B/D].
- **R3 [B]** No long spike at the top: `A` bar range `<= 2 * ta.atr(14)` [D].
- **R4 [B]** Right side retraces at least 38.2% of the rise: `close <= A - 0.382 * (A - B)`.
- **R5 [D]** No pause on the decline before the 38.2% retrace: mostly down-closes from `A` to the retrace point (else it is an extended V-top).
- **R6 [B]** Breakout = the bar where R4 first becomes true.

## Confirmation & Breakout

Breakout is **downward** and defined as a close at or below the 38.2% retrace of the
left-side rise: `close <= A - 0.382 * (A - B)`. Bulkowski also suggests selling on a close
below the up-sloping trendline along the lows, optionally after waiting 3 days.

## Targets & Stops

- Target: `B`, the low at the start of the pattern (met 37% of the time).
- Stop: above the V-top peak `A`.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 20 of 36 |
| Break-even failure rate | 29% |
| Average decline | 15% |
| Pullback rate | 56% |
| % meeting price target (target = B) | 37% |

Based on 2,416 perfect trades. Notable: tall patterns (height/breakout > 25.3%)
substantially outperform short ones; a downward inbound trend improves performance;
breakouts within a third of the yearly low perform best; a rising volume trend helps.

## Trading Tactics

- Entry: the 38.2% retrace of the left-side rise (arbitrary but used for the stats).
- Draw a trendline along the rising lows; sell on a close below it, optionally waiting 3
  days and checking fundamentals / industry peers first.
- Prefer tall patterns and a downward inbound trend.
- Place the stop above the V-top peak.

## Pine Notes

- Feasibility: **moderate**. The V-top peak (`A`) needs pivot-high detection
  (`ta.pivothigh(len, len)`), which lags by `len` bars; the left-low `B` is the prior swing
  low or trend start.
- The 38.2% retrace breakout (R4) is a clean non-repainting trigger once `A` and `B` are
  fixed — fire the alert there.
- Suggested inputs: pivot length, min/max width (R2), up-close ratio (R1), retrace %
  (default 0.382, R4), tall-pattern filter (25.3%).
- "Straight-line / no-pause / mirror-angle" tests are the subjective parts; approximate
  with close-direction ratios and ship as optional filters.
