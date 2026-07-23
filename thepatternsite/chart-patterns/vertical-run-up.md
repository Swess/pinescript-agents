---
id: vertical-run-up
name: Vertical run up
aliases: []
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 4, typical: 6}
confirmation: none
rank: {value: null, of: null}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/VerticalRunUp.html
accessed: 2026-07-16
---

# Vertical run up

## Overview

A vertical run up is a near-vertical price climb, day after day, with little or no overlap
between adjacent price bars, lasting at least four sessions. It is a steep upward momentum
move; after it ends, price continues higher (more sedately) 21% of the time, but 79% of the
time first closes below the last run bar and retraces some or all of the move (median
retrace 52%). It is the complement of the vertical run down and carries no Encyclopedia rank.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Vertical run | Price moves up in a steep run for at least four sessions |
| Overlap | Minimal overlap bar-to-bar; median overlap is 33% |
| Flag (optional) | Price may pause — a peak that fails to make a higher high for ≥ 3 days — happening ~18% of the time |

## Detection Rules (computable)

Definitions: adjacent-bar `overlap = max(0, min(high[i], high[i+1]) - max(low[i], low[i+1]))`;
`overlap_ratio = overlap / (high[i] - low[i])`.

- **R1 [B]** Run length ≥ 4 sessions: at least 4 consecutive bars each making a higher high and higher low: `high > high[1] and low > low[1]` holds for the last `4` bars.
- **R2 [B]** Steep run: cumulative rise over the run exceeds a threshold, e.g. `(high - low_runStart) / low_runStart >= 0.10` (default 10% [D]; "steep" is qualitative on the page).
- **R3 [B]** Minimal bar-to-bar overlap: `overlap_ratio <= 0.33` for each bar in the run (page states median overlap is 33%).
- **R4 [D]** Optional flag/pause filter: allow up to one span where price fails to make a new high for ≤ 3 days without breaking the run (occurs ~18% of runs [B]).

## Confirmation & Breakout

No breakout confirmation defines the pattern — it is recognized once four qualifying bars
exist. The tradeable signal is the first close above the top (B) or below the bottom of the
last run bar: a close up rides a new (slower) uptrend; a close down anticipates a retrace
(sell longs or short). Only 21% continue climbing after the run; 79% close down first.

## Targets & Stops

- Continuation: after a close above the run top (B), ride the trend but expect a slower
  rise than during the run; no fixed measure rule is given [B].
- Retrace expectation (for shorting/exit): median retrace is 52% of the AB run, so a first
  target is `target = high_B - 0.52 * (high_B - low_runStart)` [B]; a full retrace to
  `low_runStart` is the single most frequent outcome (22%).
- Stops: not specified by Bulkowski — default a stop a penny or two beyond the last run
  bar in the direction opposite the signal [D].

## Performance

Study of 3,024 vertical runs in 247 stocks across three bull markets (Jul 1995 – Jan 2014).

| Metric | Value |
|---|---|
| Continues climbing after run (closes above top first) | 21% |
| Closes below last bar first, then retraces | 79% |
| Full retrace of the AB move | 22% (most frequent retrace amount) |
| Median retrace | 52% |
| Median time to close back above top (B) | 27 days |
| Makes a new high in < 3 months | 78% |
| Suffers a trend change (drop ≥ 20%) | 21% |
| Flag/pause occurrence | 18% |

Notable: an exhaustion gap often signals the end of the vertical move.

## Trading Tactics

- Buy-and-hold: retraces are usually short-lived; 78% make a new high within three months.
- Position traders: only 21% suffer a real trend change — generally hold.
- Swing/day: use a close above the top or below the bottom of the last run bar as the
  signal; ride the new trend on an up close, or sell/short on a down close.
- Watch for an exhaustion gap as an end-of-run marker.

## Pine Notes

- Feasibility: **easy–moderate**. Same rolling-window approach as the vertical run down; no
  pivot detection, so it evaluates in real time without repaint.
- Suggested inputs: min run length (default 4), min steep-rise % (R2), max overlap ratio
  (R3), flag lookback (3 days).
- The close-above-top / close-below-last-bar signal is stateful entry logic separate from
  detection; fire the alert only on the bar where that close first occurs.
- Session/timeframe: statistics are daily-bar, bull-market US stocks; overlap behaviour is
  timeframe-sensitive — recheck the 33% threshold on intraday NQ/ES data.
