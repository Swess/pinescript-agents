---
id: island-tops
name: Island Tops
aliases: [Island Reversal]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 1, typical: 10}
confirmation: recommended
rank: {value: 31, of: 36}
stats:
  break_even_failure_rate: 0.34
  avg_move: 0.13
  throwback_rate: 0.55
  pct_meeting_target: 0.62
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/islandrev.html
accessed: 2026-07-16
---

# Island Tops

## Overview

An island top is a reversal in which price gaps up into an "island" of trading, then gaps
back down at roughly the same price, leaving the island stranded above the surrounding
price action. It forms after an uptrend and breaks out downward. Bulkowski rates islands
poor performers; pullbacks are frequent.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the island (top variety) |
| Shape | Gaps separate a price island from the mainland |
| Gaps | Two gaps must share some or all of the same price |
| Volume | High on the day price makes the second gap |
| Duration | The island can be one day to several months long |

## Detection Rules (computable)

Definitions: `entry_gap` = upward gap into the island; `exit_gap` = downward gap out of it.

- **R1 [B]** Prior trend up: `close > close[N]` before the entry gap (default `N = 20` [D]).
- **R2 [B]** Entry gap up: `low[entry] > high[entry+1]` (gap above the preceding bar's high).
- **R3 [B]** Exit gap down: `high[exit] < low[exit-1]` (gap below the following mainland bar's high on the island side).
- **R4 [B]** Gaps overlap in price: the exit gap fills into or below the entry-gap zone — `exit_gap_top >= entry_gap_bottom` (the two gaps "share some or all of the same price").
- **R5 [B]** Island span between the gaps is `1` bar to several months (no fixed max).
- **R6 [D]** Volume spike on the exit-gap bar: `volume[exit] > 1.5 * ta.sma(volume, 20)` (Bulkowski notes high volume; default 1.5x [D]).

## Confirmation & Breakout

Breakout is **downward** — the exit gap down is itself the breakout of the island. Because
pullbacks are common (55%), confirmation via a close below the island's low is recommended
before acting.

## Targets & Stops

- Height: `H = highest_peak_high (A) - lowest_valley_low in island (B)`.
- Target (down breakout): `target = B - 0.62 * H` (62% of full height met).
- Tall islands perform better than short ones.
- Stop: above the island high (`A`).

## Performance

| Metric | Island tops (down breakout) |
|---|---|
| Overall rank | 31 of 36 |
| Break-even failure rate | 34% |
| Average decline | 13% |
| Pullback rate | 55% |
| % meeting price target | 62% |

Based on 2,000+ perfect trades (bull market; page covers both island tops and bottoms).
Notable: pullbacks are so frequent you can wait for them to complete before entering; tall
islands outperform short ones.

## Trading Tactics

- The exit gap down defines the island; consider waiting for a pullback to complete before
  shorting.
- Prefer tall islands.
- Place the stop above the island high.
- Expect frequent pullbacks that hurt post-breakout performance.

## Pine Notes

- Feasibility: **easy–moderate**. Gap detection is straightforward (`low > high[1]` up,
  `high < low[1]` down); the harder part is matching an entry gap to a later exit gap that
  shares the same price (R4) — track the entry-gap zone in `var` state until an overlapping
  down gap appears.
- Gaps are non-repainting once the gap bar closes; the down-gap bar can trigger the signal
  directly, or wait for a close below the island low for confirmation.
- Suggested inputs: trend-lookback `N` (R1), max island span, gap-overlap tolerance,
  volume-spike multiple (R6).
- Intraday sessions on futures gap at the open frequently — validate on the intended
  timeframe/session before relying on gap logic.
