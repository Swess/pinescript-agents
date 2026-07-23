---
id: vertical-run-down
name: Vertical run down
aliases: []
category: chart-pattern
type: continuation
direction: bearish
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
source: https://thepatternsite.com/VerticalRunDown.html
accessed: 2026-07-16
---

# Vertical run down

## Overview

A vertical run down is a near-straight-line price plunge, day after day, with little or no
overlap between adjacent price bars, lasting at least four sessions. It is a steep
downward momentum move; after it ends, price usually retraces at least part of the drop
(84% of the time), and nearly half the time it fully retraces. Not in the Encyclopedia, so
it carries no overall chart-pattern rank.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Vertical run | Price moves down in a steep drop for at least four sessions |
| Overlap | Minimal overlap from price bar to price bar |
| Flag (optional) | Price may pause along the run — a failure to make a new low for at least three days — happening ~6% of the time |

## Detection Rules (computable)

Definitions: adjacent-bar `overlap = max(0, min(high[i], high[i+1]) - max(low[i], low[i+1]))`;
`overlap_ratio = overlap / (high[i] - low[i])`.

- **R1 [B]** Run length ≥ 4 sessions: at least 4 consecutive bars each making a lower low and lower high: `low < low[1] and high < high[1]` holds for the last `4` bars.
- **R2 [B]** Steep drop: cumulative decline over the run exceeds a threshold, e.g. `(high_runstart - low) / high_runstart >= 0.10` (default 10% [D]; "steep" is qualitative on the page).
- **R3 [B]** Minimal bar-to-bar overlap: `overlap_ratio <= 0.33` for each bar in the run (default 33% [D]; page states minimal overlap without a down-run figure — the 33% median comes from the vertical run up).
- **R4 [D]** Optional flag/pause filter: allow up to one span where price fails to make a new low for ≤ 3 days without breaking the run (occurs ~6% of runs [B]).

## Confirmation & Breakout

No breakout confirmation defines the pattern — it is recognized once four qualifying bars
exist. Directionally it is a **downward** run. The tradeable turn is signalled when a
trailing buy stop set a penny or two above the prior bar's high is hit (price makes a
higher high after the run). After bar 4, 84% of runs retrace at least part of the drop;
16% keep dropping (more slowly).

## Targets & Stops

- Retrace trade (long the bounce): `target = low_runEnd + 0.5 * (high_runStart - low_runEnd)`
  — exit midway up the run; works ~64% of the time [B]. Use log-scale midpoint on log charts.
- Continuation (gap) target: if a gap taller than $0.25 appears on bar 4 or later, 75% are
  continuation gaps — `target = high_runStart - (high_runStart - gap_mid)` projected further
  down; gap sits within 10 percentage points of the run's midpoint 41% of the time (allow a
  fudge factor) [B].
- Stop (for the bounce trade): a penny or two below the turn low (`low_runEnd`), raised as
  price climbs [B].

## Performance

Study of 2,036 vertical runs in 469 stocks across three bull markets (Jul 1995 – Jan 2014).

| Metric | Value |
|---|---|
| Price fully retraces the drop after run ends | 46% |
| Retraces at least a portion | 84% |
| Continues dropping (slower) | 16% |
| Median retrace | 81% |
| Suffers a trend change (drop ≥ 20%) | 20% |
| Tall bar (≥ 2× 1-month avg height) ends run within a day | 41% |
| Gaps > $0.25 that are continuation gaps | 75% |

Notable: because ~half of runs fully retrace, Bulkowski advises not being shaken out of a
long position by the drop.

## Trading Tactics

- Buy-and-hold: retraces tend to be short-lived; hold existing positions.
- Position traders: only 20% suffer a real trend change — generally hold.
- Swing/day (retrace): after bar 4, trail a buy stop a penny or two above the prior bar's
  high, lowering it as each lower high forms (never raise it); on the turn, target half the
  run height.
- Swing/day (gaps): treat gaps > $0.25 on bar 4+ as continuation gaps for a downside target.
- Watch for an unusually tall bar (≥ 2× prior 1-month average height) as an end-of-run warning.

## Pine Notes

- Feasibility: **easy–moderate**. The run test (R1–R3) is a simple rolling window over
  consecutive bars — no pivot detection needed, so it evaluates in real time without repaint.
- Suggested inputs: min run length (default 4), min steep-drop % (R2), max overlap ratio
  (R3), tall-bar multiple (2×) and averaging window (1 month), gap size threshold ($0.25 →
  use a tick/ATR fraction for non-dollar instruments).
- The trailing-buy-stop turn logic is a stateful entry, not part of pattern detection —
  implement as a separate order-management block once the run is flagged.
- Session/timeframe: statistics are daily-bar, bull-market US stocks; overlap and gap rules
  are sensitive to timeframe and to instruments quoted in non-dollar ticks (NQ/ES) — scale
  the $0.25 gap threshold accordingly.
