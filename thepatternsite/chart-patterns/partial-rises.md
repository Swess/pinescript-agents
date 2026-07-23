---
id: partial-rises
name: Partial Rises
aliases: []
category: chart-pattern
type: continuation
direction: bearish
bars: {min: 5, typical: 15}
confirmation: recommended
rank: {value: null, of: null}
stats:
  break_even_failure_rate: null
  avg_move: 0.13
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/partrises.html
accessed: 2026-07-16
---

# Partial Rises

## Overview

A partial rise is a looping move that appears near the end of an established broadening
pattern or rectangle: price touches the bottom trendline, moves up, but turns back down
*before* reaching (or coming close to) the top trendline. It predicts an immediate downward
breakout. New (2013) research finds performance is marginally better when a partial rise is
*absent*, but the difference (13% vs 14% average decline) is effectively a statistical tie.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Established host | Only look for it inside a completed rectangle or broadening pattern that already obeys its own identification rules |
| Bottom trendline | Price touches the bottom trendline and moves up, but does not touch or come close to the top trendline before heading back down |
| Breakout | Downward, usually immediately after the partial rise touches the lower trendline (may linger first) |
| Pause caveat | An ordinary mid-pattern pause can mimic a partial rise — wait for price to head back down before shorting |

## Detection Rules (computable)

Definitions: host pattern has `topLine` and `botLine` trendlines; `loopHigh` = the swing
high made during the partial rise (`ta.pivothigh`).

- **R1 [B]** Host is established: rectangle/broadening pattern already validated (enough alternating trendline touches). Prerequisite before scanning.
- **R2 [B]** Recent lower-trendline touch: price touched `botLine` (`low <= botLine * (1 + tol)`, default `tol = 0.01` [D]) at the start of the loop.
- **R3 [B]** Fails to reach top trendline: `loopHigh` stays well below `topLine` — rises at most partway across the channel: `(topLine - loopHigh) / (topLine - botLine) >= 0.30` (default 30% clearance [D]).
- **R4 [D]** Fibonacci confirmation (optional): the up loop reverses near the 50% or 62% retrace of the prior down move — `loopHigh` within a band around `bot + 0.5..0.62 * priorDownMove`.
- **R5 [B]** Turn back down: after `loopHigh`, price rounds over and heads back toward `botLine` (short only once this is clear).

## Confirmation & Breakout

Breakout is **downward** by definition. The actionable confirmation is price turning back
down from the loop high and heading toward the lower trendline (Bulkowski: short once it's
clear price is heading back down); the breakout usually follows immediately on reaching the
bottom trendline. Cover the short if instead price bounces off the lower trendline and heads
back up.

## Targets & Stops

- No dedicated measure rule for the partial rise itself; use the host pattern's measure rule
  (rectangle/broadening height projected down from the breakout) for the target [D].
- Post-breakout declines with a partial rise present averaged 13% (bull market) [B].
- Stop/cover: exit if price fails at the lower trendline and turns back up (the loop should
  not become a full traverse to the upper trendline) [B].

## Performance

New research (3/1989 – 11/11/13): 583 patterns with partial rises declined an average of
13% after breakout vs 14% for 1,273 without — so close it's essentially a statistical tie,
slightly favouring absence of a partial rise.

Success rate at correctly predicting a downward breakout, bull markets, by host pattern:

| Host pattern | Success rate |
|---|---|
| Broadening bottoms | 67% |
| Broadening, right-angled & ascending | 74% |
| Broadening, right-angled & descending | 54% |
| Broadening tops | 61% |
| Broadening wedges, ascending | 74% |
| Broadening wedges, descending | 14% |
| Rectangle bottoms | 74% |
| Rectangle tops | 57% |

Notable: reliability varies sharply by host — moderately reliable in most broadening/
rectangle variants (67–74%); very poor in descending broadening wedges (14%).

## Trading Tactics

- Confirm the host pattern is fully established before hunting for a partial rise.
- Short once price clearly turns back down toward the lower trendline (not on the first pop).
- A reversal near the 50% or 62% Fibonacci retrace of the prior down move supports the read.
- Expect the pattern to sometimes linger/slide along the lower trendline before breaking out.
- Cover immediately if price bounces off the lower trendline and heads back up.

## Pine Notes

- Feasibility: **hard**. Depends entirely on first detecting and fitting the host
  rectangle/broadening trendlines — the hardest part — and this loop is defined *relative*
  to those lines. Not viable standalone.
- Suggested inputs: trendline-touch tolerance (R2), minimum clearance from top trendline
  (R3, default 30%), optional Fibonacci band (50–62%), pivot lookback for `loopHigh`.
- Inherently subjective: distinguishing a genuine partial rise from an ordinary mid-pattern
  pause (Bulkowski flags this explicitly) — requires waiting for the turn-down, which lags.
- Best implemented as an add-on to an existing rectangle/broadening detector; fire the
  candidate only after `loopHigh` is confirmed and price turns back toward the bottom line.
