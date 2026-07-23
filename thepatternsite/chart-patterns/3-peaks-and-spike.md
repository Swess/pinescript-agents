---
id: 3-peaks-and-spike
name: 3-peaks and spike
aliases: [Three peaks and spike]
category: chart-pattern
type: either
direction: bearish
bars: {min: 20, typical: 60}
confirmation: required
rank: {value: 9, of: 38}
stats:
  break_even_failure_rate: 0.17
  avg_move: 0.16
  throwback_rate: 0.67
  pct_meeting_target: 0.45
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/MultiPeak2B.html
accessed: 2026-07-16
---

# 3-peaks and spike

## Overview

A Bulkowski-discovered (July 2021) variant of the multi-peak pattern: three peaks near
the same price followed by a fourth, taller peak (the spike). Price then declines and
confirms the pattern when it closes below the lowest low among the four peaks. It behaves
much like multi-peaks but with a lower failure rate, and works as a reversal or a
continuation depending on the inbound trend.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Up and down inbound trends lead to the same performance (16% average drop) |
| Peaks, spike | At least three peaks near the same price, then a fourth peak above the prior three; no height limit on the spike (usually very tall) and no intervening peak(s) between peak 3 and the spike |
| Separation | No minimum, but major peaks were separated by at least a week (5 price bars) |
| Confirmation | Closes below the bottom of the pattern (lowest low between the four peaks); upward breakouts invalidate the pattern |
| Volume | Rising-volume patterns perform slightly better (17% vs 15% decline); light breakout volume outperforms heavy by one percentage point |
| Exclusions | The first three peaks must NOT confirm as a triple top (no close below their lowest valley on the way to the spike) and should not be a head-and-shoulders top; no post-spike peak confirming a double top |

## Detection Rules (computable)

Definitions: `peak1..peak3` = swing highs via `ta.pivothigh(l, r)` near a common price;
`peak4` = the spike; `lowest_low` = lowest low between `peak1` and `peak4`
(point B); `highest_high = high_p4` (point A).

- **R1 [B]** Three peaks near the same price: `(max(high_p1..p3) - min(high_p1..p3)) / min(high_p1..p3) <= 0.03` (default 3% [D]; Bulkowski says "near the same price").
- **R2 [B]** Spike above the prior three: `high_p4 > max(high_p1, high_p2, high_p3)` (no height limit stated).
- **R3 [B]** No intervening peak between peak 3 and the spike: no confirmed `ta.pivothigh` between `bar_p3` and `bar_p4`.
- **R4 [B]** Peak separation ≥ 5 bars: `bar_p(i+1) - bar_p(i) >= 5` for each adjacent pair.
- **R5 [B]** First three peaks not a confirmed triple top: no `close < lowest valley between p1..p3` occurs before `peak4` forms.
- **R6 [D]** Not a head-and-shoulders top: middle peak not more than 2% above both neighbors (simple proxy; optional filter).
- **R7 [B]** Confirmation: after `peak4`, `close < lowest_low`. A close above `high_p4` before this invalidates the pattern.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: a close below the lowest valley between
the four peaks (`close < lowest_low`) — Bulkowski calls this both confirmation and
breakout. Upward breakouts (a close above the pattern top) invalidate the pattern. Also
invalid if a second peak after the spike confirms a double top — trade the double top
instead.

## Targets & Stops

- Target (measure rule): `target = lowest_low - (high_p4 - lowest_low)` (full height A→B
  subtracted from B). Reached only 45% of the time — be conservative. Tall patterns
  outperform short ones substantially (19% vs 13% decline).
- Stop guidance from Bulkowski's stats: 1% of patterns see price rise above the pattern
  top after breakout; 16% stop above the middle but below the top; 78% stay between the
  bottom and the middle. Default stop [D]: above the pattern's midpoint,
  `lowest_low + 0.5 * (high_p4 - lowest_low)`; tighter risk = above the spike high.

## Performance

Bull-market results (495 perfect trades):

| Metric | Value |
|---|---|
| Overall performance rank | 9 of 38 (1 = best) |
| Break-even failure rate | 17% |
| Average decline | 16% |
| Pullback rate | 67% |
| % meeting price target | 45% |
| Trend change (≥ 20% drop) after breakout | 30% of the time |

Notable: performance is nearly identical to generic multi-peaks but with a lower failure
rate. Inbound trend direction doesn't matter (16% either way) — in a downtrend it acts as
a continuation. Rising pattern volume and light breakout volume each add about a
percentage point.

## Trading Tactics

- Short on a close below the lowest valley of the four-peak pattern; never act before —
  upward breakouts invalidate it.
- Use the full-height measure-rule target but treat it as optimistic (met 45% of the
  time); prefer tall patterns (19% vs 13%).
- Expect a pullback 67% of the time.
- A trend change (≥ 20% drop) follows only 30% of the time — this is usually a swing
  short, not a position short.
- If the pattern morphs into a confirmed double top after the spike, trade that instead.

## Pine Notes

- Feasibility: **moderate**. Requires tracking 4 sequential `ta.pivothigh` pivots plus
  the running lowest low; pivots confirm `len` bars late — signal only on the
  confirmation-close bar (no repaint).
- The exclusion rules (R5/R6) are the subtle part: R5 needs a persistent check that no
  triple-top confirmation close occurred before the spike; R6's H&S proxy is inherently
  approximate — ship both as toggles.
- Suggested inputs: pivot length, peak-equality tolerance % (R1), min peak separation
  (R4), H&S filter toggle, volume filter toggle, target = full height (fixed by rule).
- Store peaks in a `var` array of UDTs (`time`, `bar_index`, `high`); reset the candidate
  set when a close above the working pattern top invalidates it.
