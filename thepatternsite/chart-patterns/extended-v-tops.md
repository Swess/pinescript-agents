---
id: extended-v-tops
name: Extended V-Tops
aliases: []
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 2, of: 36}
stats:
  break_even_failure_rate: 0.15
  avg_move: 0.18
  throwback_rate: 0.63
  pct_meeting_target: 0.49
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/VTopExt.html
accessed: 2026-07-16
---

# Extended V-Tops

## Overview

A variation on the V-top: an inverted-V rise-and-fall with a small retrace/pause (the
"extension") on the right side — often a flag or pennant sloping slightly upward — before
price tumbles. It is a bearish reversal and one of Bulkowski's top-ranked patterns
(2 of 36). Breakout is a close out of the extension.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Uptrend | Straight-line run up with few/no pauses, often within a channel |
| Width | At least 3 weeks to 3 months |
| Reversal | Top forms a one-day reversal, island reversal, or tail, usually on heavy volume |
| Trendline | After the reversal, price pierces an up-sloping trendline along the lows (observation) |
| Retrace | Right side must retrace at least 38.2% of the left-side rise |
| Extension | Price pauses on the way down, often a flag sloping slightly upward |
| No spike | Extended V-tops with an unusually long price bar as the top are excluded |
| Angle | Right-side drop often mirrors the left-side rise angle |

## Detection Rules (computable)

Definitions: `B` = left-side low (pattern start), `A` = the inverted-V peak,
`extension` = the flag/pennant pause on the decline.

- **R1 [B]** Straight-line rise into `A`: mostly up-closes from `B` to `A` (default `>= 70%` up-closes [D]).
- **R2 [B]** Width from `B` to `A` is `>= 15` bars (3 weeks) and `<= 65` bars (3 months) [B/D].
- **R3 [B]** No long spike at the top: `A` bar range `<= 2 * ta.atr(14)` [D].
- **R4 [B]** Right side retraces at least 38.2% of the rise: reaches `<= A - 0.382 * (A - B)`.
- **R5 [B]** Extension: a flag/pennant pause forms on the decline (default: price contained in a slight up-sloping band for `>= 5` bars [D]).
- **R6 [B]** Breakout: `close` below the bottom of the extension (flag/pennant).

## Confirmation & Breakout

Breakout is **downward**: a close below the bottom of the extension (the flag/pennant on
the way down). Alternatively, enter when price retraces more than 38.2% of the left side.

## Targets & Stops

- Target: the low at the start of the pattern (`B`), met 49% of the time.
- Stop: above the V-top peak `A`.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 2 of 36 |
| Break-even failure rate | 15% |
| Average decline | 18% |
| Pullback rate | 63% |
| % meeting price target | 49% |

Based on 1,217 perfect trades. Notable: tall patterns (height/breakout > 22%) outperform;
a downward inbound trend improves performance; breakouts within a third of the yearly low
perform best.

## Trading Tactics

- Preferred entry: when price breaks out of the flag/pennant extension (close below it) —
  easier to trade than a plain V-top.
- Alternative: enter once price retraces more than 38.2% of the left side.
- Expect price to approach (but maybe not reach) the pattern start `B`; be ready to exit
  early.
- Prefer tall patterns and a downward inbound trend.

## Pine Notes

- Feasibility: **moderate–hard**. Adds an "extension" (flag/pennant) detection on top of
  the V-top logic — the sloping-pause phase (R5) is the fuzzy part; approximate with a
  band/ATR containment test.
- The V-top peak needs pivot-high detection (`ta.pivothigh(len, len)`), lagging by `len`
  bars. The extension-breakout close (R6) is a clean non-repainting trigger.
- Suggested inputs: pivot length, min/max width (R2), retrace % (0.382, R4), extension
  min-bars / band width (R5), up-close ratio (R1), tall-pattern filter (22%).

## Anomalies

- The measure-rule table on the page reads "The price of A is the measure rule target,"
  which conflicts with the Important Results footnote ("target is the bottom of the start of
  the pattern"). This spec uses the footnote (target = `B`, the start low), consistent with
  the V-top family and the page's example (price exceeding target when dropping below the
  pattern start).
