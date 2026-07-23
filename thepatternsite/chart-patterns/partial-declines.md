---
id: partial-declines
name: Partial Declines
aliases: []
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 5, typical: 15}
confirmation: recommended
rank: {value: null, of: null}
stats:
  break_even_failure_rate: null
  avg_move: 0.33
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/partdecline.html
accessed: 2026-07-16
---

# Partial Declines

## Overview

A partial decline is a looping move that appears near the end of an established broadening
pattern or rectangle: price touches the top trendline, moves down, but turns back up
*before* reaching (or coming close to) the bottom trendline. It predicts an immediate upward
breakout. New (2013) research shows that patterns exhibiting a partial decline actually
perform slightly better after breakout (33% avg gain vs 29% without).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Established host | Only look for it inside a completed rectangle or broadening pattern that already obeys its own identification rules |
| Top trendline | Price touches the top trendline and moves down, but does not touch or come close to the bottom trendline before heading back up |
| Breakout | Upward, usually immediately after the partial decline touches the upper trendline (may linger first) |
| Pause caveat | An ordinary mid-pattern pause can mimic a partial decline — wait for price to head back up before buying |

## Detection Rules (computable)

Definitions: host pattern has `topLine` and `botLine` trendlines; `loopLow` = the swing low
made during the partial decline (`ta.pivotlow`).

- **R1 [B]** Host is established: rectangle/broadening pattern already validated (enough alternating trendline touches). Prerequisite before scanning.
- **R2 [B]** Recent upper-trendline touch: price touched `topLine` (`high >= topLine * (1 - tol)`, default `tol = 0.01` [D]) at the start of the loop.
- **R3 [B]** Fails to reach bottom trendline: `loopLow` stays well above `botLine` — retraces at most partway across the channel: `(loopLow - botLine) / (topLine - botLine) >= 0.30` (default 30% clearance [D]).
- **R4 [D]** Fibonacci confirmation (optional): the down loop reverses near the 50% or 62% retrace of the prior up move — `loopLow` within a band around `top - 0.5..0.62 * priorUpMove`.
- **R5 [B]** Turn back up: after `loopLow`, price rounds over and heads back toward `topLine` (buy only once this is clear).

## Confirmation & Breakout

Breakout is **upward** by definition. The actionable confirmation is price turning back up
from the loop low and heading toward the upper trendline (Bulkowski: buy once it's clear
price is heading back up); the breakout itself usually follows immediately on reaching the
top trendline. Exit if instead price bounces off the upper trendline and heads back down.

## Targets & Stops

- No dedicated measure rule for the partial decline itself; use the host pattern's measure
  rule (rectangle/broadening height projected up from the breakout) for the target [D].
- Post-breakout gains with a partial decline present averaged 33% (bull market) [B].
- Stop: exit if price fails at the upper trendline and turns back down (the loop should not
  become a full traverse to the lower trendline) [B].

## Performance

New research (3/1989 – 11/11/13): 903 patterns with partial declines gained an average of
33% after breakout vs 29% for 1,840 without — so a partial decline is *good* for performance.

Success rate at correctly predicting an upward breakout, bull markets, by host pattern:

| Host pattern | Success rate |
|---|---|
| Broadening bottoms | 80% |
| Broadening, right-angled & ascending | 81% |
| Broadening, right-angled & descending | 63% |
| Broadening tops | 72% |
| Broadening wedges, ascending | 35% |
| Broadening wedges, descending | 87% |
| Rectangle bottoms | 80% |
| Rectangle tops | 91% |

Notable: reliability varies sharply by host — best in rectangle tops (91%) and descending
broadening wedges (87%); worst in ascending broadening wedges (35%).

## Trading Tactics

- Confirm the host pattern is fully established before hunting for a partial decline.
- Buy once price clearly turns back up toward the upper trendline (not on the first dip).
- A reversal near the 50% or 62% Fibonacci retrace of the prior up move supports the read.
- Expect the pattern to sometimes linger/slide along the upper trendline before breaking out.
- Exit immediately if price bounces off the upper trendline and heads back down.

## Pine Notes

- Feasibility: **hard**. Depends entirely on first detecting and fitting the host
  rectangle/broadening trendlines — the hardest part — and this loop is defined *relative*
  to those lines. Not viable standalone.
- Suggested inputs: trendline-touch tolerance (R2), minimum clearance from bottom trendline
  (R3, default 30%), optional Fibonacci band (50–62%), pivot lookback for `loopLow`.
- Inherently subjective: distinguishing a genuine partial decline from an ordinary
  mid-pattern pause (Bulkowski flags this explicitly) — requires waiting for the turn-up,
  which lags.
- Best implemented as an add-on to an existing rectangle/broadening detector; fire the
  candidate only after `loopLow` is confirmed and price turns back toward the top line.
