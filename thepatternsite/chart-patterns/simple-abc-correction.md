---
id: simple-abc-correction
name: Simple ABC Correction
aliases: [ABC correction]
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 10, typical: 25}
confirmation: recommended
rank: {value: null, of: 39}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/abc.html
accessed: 2026-07-16
---

# Simple ABC Correction

## Overview

The simple ABC correction is a measured move down (MMD) nested inside a larger measured
move up (MMU). It marks the corrective phase of an uptrend: after an initial rise to E,
price steps down through two straight-line legs (EA and BC) before the major up-swing
resumes at C. It is a bullish continuation setup and carries no Bulkowski performance
statistics.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Nested structure | An MMD (points E, A, B, C) nested inside a larger MMU |
| Corrective phase | Only one MMD, with two straight-line runs (EA down, then BC down) — discard patterns with pronounced turning points inside those legs |
| Point relationships | A, B, and C are all below E; B must not rise above E |
| Point D | Continuation target D must stay below point C (the MMD must not correct too far — over-corrected MMDs fail more often) |
| Point C | C starts a major price up-swing |

## Detection Rules (computable)

Definitions: `E` = swing high starting the correction; `A` = first swing low; `B` =
intermediate swing high (bounce); `C` = second swing low completing the ABC. Use
`ta.pivothigh`/`ta.pivotlow` to locate turns.

- **R1 [B]** Prior trend up: `close` at `E` above `close` `N` bars earlier (default `N = 20` [D]).
- **R2 [B]** A below E: `low_A < low_E_ref` — first leg EA moves down.
- **R3 [B]** B is a lower high, capped by E: `high_A < high_B < high_E` (B must not exceed E).
- **R4 [B]** C below B and below A's context: `low_C < high_B` and C is a distinct second swing low.
- **R5 [D]** Each leg is a "straight-line run": no interior pivot in EA or BC exceeding `2%` counter-move (default, adjustable) — rejects patterns with pronounced interior turns.
- **R6 [B]** No over-correction: projected continuation stays below C is a warning; require `low_C > low_A * (1 - 0.02)` is NOT required — instead flag that C should not retrace the full MMU (over-corrected patterns fail more) [D].

## Confirmation & Breakout

Breakout is **upward** by nature (resumption of the uptrend). Suggested triggers, in
increasing conservativeness:
- Aggressive: draw a down trendline from B along the tops; buy on a close above it. A close above the intraday high at A also works.
- Trendline: draw a trendline from E to B extended down; buy when price closes above it.
- Conservative: buy on a close above B, or above E.

Caveat: about **36%** of the time price reverses at the level of E and drops, confirming
a double top instead — be prepared for that failure mode.

## Targets & Stops

- No formal measure-rule percentage is given. Use the measured-move logic: the CD advance
  tends to approximate the prior EA leg length — `target ≈ price_C + (high_E - low_A)` [D].
- Stop: below point C (the second swing low) [D].

## Performance

Not stated by Bulkowski. This page carries no failure rate, average move, or rank — the
only quantified claim is that ~36% of setups reverse at E (turning into a double top).

## Trading Tactics

- Draw an E→B trendline extended downward; enter long on a close above it.
- Aggressive: buy on a close above a B-down trendline or above the intraday high at A.
- Conservative: wait for a close above B, or above E.
- Expect ~36% to fail by reversing at E — size and stop accordingly.

## Pine Notes

- Feasibility: **moderate-to-hard**. Requires reliable pivot detection for E, A, B, C via
  `ta.pivothigh/pivotlow(len, len)`, which confirms each turn `len` bars late — signals lag
  and anchoring to the pivot bar repaints.
- The "straight-line run" test (R5) and "no pronounced interior turn" filter are the most
  subjective; ship them as adjustable counter-move tolerances.
- Suggested inputs: pivot length, trend-lookback N, straight-line counter-move tolerance %,
  target multiplier.
- Best used on a swing/daily timeframe within a confirmed uptrend; treat the double-top
  reversal at E as the primary risk.
