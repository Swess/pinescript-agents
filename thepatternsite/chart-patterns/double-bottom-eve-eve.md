---
id: double-bottom-eve-eve
name: Double Bottom, Eve & Eve
aliases: [EEDB, classic double bottom]
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 10, typical: 45}
confirmation: required
rank: {value: 5, of: 39}
stats:
  break_even_failure_rate: 0.12
  avg_move: 0.50
  throwback_rate: 0.65
  pct_meeting_target: 0.65
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/eedb.html
accessed: 2026-07-16
---

# Double Bottom, Eve & Eve

## Overview

Two wide, rounded ("Eve") valleys bottoming near the same price after a downtrend — the
classic double bottom most chartists picture. Both bottoms should look *similar* (wide
and rounded, with numerous short spikes if any). Bulkowski calls it a terrific performer
(rank 5 of 39), but it is only valid once price closes above the peak between the valleys.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading to the pattern |
| Shape | Two distinct valleys that look similar; Eve bottoms are wide and rounded, spikes numerous and short |
| Peak | Rise between bottoms should measure at least 10%, allow variations (Bulkowski often ignores this) |
| Bottom price | Price variation between bottoms is small, usually 0% to 6%; valleys bottom near the same price |
| Separation | Valleys several weeks apart, most 2–7 weeks |
| Confirmation | Confirms once price closes above the peak between the two valleys |
| Volume | Usually higher on the left bottom |

## Detection Rules (computable)

Definitions: `valley1`, `valley2` = swing lows via `ta.pivotlow(l, r)`; `peak` = highest
high strictly between the two valleys.

- **R1 [B]** Prior trend down: `close` at `valley1` below the close `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Both valleys are wide/rounded (Eve): each valley spans ≥ 4 bars within 1% of its low (default, adjustable).
- **R3 [B]** Bottom prices nearly equal: `abs(low_v1 - low_v2) / min(low_v1, low_v2) <= 0.06` (Bulkowski: usually 0–6%).
- **R4 [B]** Peak rise between bottoms ≥ 10%: `(peak_high - low_v1) / low_v1 >= 0.10` (Bulkowski often ignores this; ship as optional).
- **R5 [B]** Valley separation: `10 <= (bar_v2 - bar_v1) <= 35` (most 2–7 weeks; exact bounds are defaults [D]).
- **R6 [B]** Pattern is only valid on confirmation (see below); before that, treat as potential only.

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > peak_high` (a close above the
peak between the two valleys). Without confirmation there is a 48% chance price
continues lower without ever confirming the double bottom.

## Targets & Stops

- Target (measure rule): `target = peak_high + 0.65 * (peak_high - min(low_v1, low_v2))`
  — height from highest peak to lowest valley times the 65% percentage-meeting-target,
  added to the breakout price (the peak).
- Stop: slightly below the lower of the two bottoms (e.g. `min(low_v1, low_v2) * (1 - 0.005)` [D]).

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 5 of 39 (1 = best) |
| Break-even failure rate | 12% |
| Average rise | 50% |
| Throwback rate | 65% |
| % meeting price target | 65% |

Based on 952 perfect trades. Notable: throwbacks hurt post-breakout performance; a
short-term decline leading in gives the best results; patterns within a third of the
yearly high or low perform best (avoid the middle); a downward volume trend suggests
good post-breakout performance.

## Trading Tactics

- Wait for confirmation (close above the peak between the valleys); without it, 48% of
  the time price continues lower.
- Big W: a tall, steep left side with few consolidations suggests price returns to near
  where the downtrend began.
- Handle: after confirmation price may waffle sideways; the breakout from that handle
  often starts a strong trend.
- Flat base: expect a large rise if the pattern follows a long flat base (weekly scale —
  it looks like a pothole in a road).
- Shelf: a horizontal shelf on the right bottom is a support zone — swing traders can
  buy there and exit if price stalls at the confirmation point.
- Buy bullish reversals during retraces of a primary uptrend; avoid them in a primary
  downtrend (the reversal tends to collapse when the stock rejoins the downtrend).
- Small decline into the pattern → expect a small rise.

## Pine Notes

- Feasibility: **moderate**. Requires `ta.pivotlow(len, len)` — valleys confirm `len`
  bars late; anchor entries/alerts to the confirmation bar (`close > peak_high`), never
  the valley bars, to avoid repainting.
- The "Eve = wide/rounded" test (R2) is the most subjective rule; implement valley width
  as bars spent within 1% of the low and ship it as an optional filter.
- Suggested inputs: pivot length, bottom tolerance % (R3, default 6%), min peak rise %
  (R4, optional), min/max valley separation (R5), trend-lookback N (R1), target
  multiplier (0.65).
- Track candidate valleys in `var` arrays/UDTs; fire the alert on the first bar where
  `close > peak_high`.
