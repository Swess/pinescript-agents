---
id: diamond-bottoms
name: Diamond Bottoms
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 10, typical: 30}
confirmation: required
rank: {value: 27, of: 39}
stats:
  break_even_failure_rate: 0.13
  avg_move: 0.39
  throwback_rate: 0.52
  pct_meeting_target: 0.73
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/diamondb.html
accessed: 2026-07-16
---

# Diamond Bottoms

## Overview

A diamond bottom appears after a downtrend: price first broadens (higher peaks, lower
valleys) and then narrows (lower peaks, higher valleys), so trendlines connecting the
turning points outline a diamond — usually tilted to one side. It most often breaks out
upward (74%) in a bull market and can act as either a reversal or a half-staff continuation.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading to the pattern |
| Shape | Looks like a diamond, but often tilted to the side |
| Trendlines | First half broadens (higher peaks, lower valleys); second half narrows (lower peaks, higher valleys) — a broadening pattern followed by a symmetrical triangle |
| Touches | Price touches each trendline once or twice; some outliers may cross |
| Volume trend | Downward 67% of the time |
| Breakout | Upward 74% of the time, when price closes outside one of the trendline boundaries |

## Detection Rules (computable)

Definitions: use swing pivots via `ta.pivothigh(len, len)` / `ta.pivotlow(len, len)`.
Split the pattern into a first (broadening) half and a second (narrowing) half around the
widest point `mid`.

- **R1 [B]** Prior trend down: `close < close[N]` at pattern start (default `N = 20` [D]).
- **R2 [B]** Broadening first half: successive peaks rise and valleys fall — `peak2 > peak1` and `valley2 < valley1` before `mid`.
- **R3 [B]** Narrowing second half: successive peaks fall and valleys rise — `peak_k < peak_{k-1}` and `valley_k > valley_{k-1}` after `mid`.
- **R4 [D]** Each of the two trendlines is touched at least twice (default; outliers tolerated).
- **R5 [D]** Volume trends down across the pattern: `ta.linreg(volume, patternLen, 0)` slope `< 0` (Bulkowski notes 67% do; use as optional filter).
- **R6 [B]** Pattern is valid only on confirmation: a close beyond one of the two trendline boundaries (see below).

## Confirmation & Breakout

Breakout occurs when `close` moves outside one of the diamond's trendline boundaries.
Direction is **upward 74%** of the time (bull market). Before a boundary close, treat the
pattern as unconfirmed.

## Targets & Stops

- Height: `H = highest_peak_high (A) - lowest_valley_low (B)` within the pattern.
- Target (up breakout): `target = breakout_price + 0.73 * H` (73% of full height is met).
- Target (down breakout): `target = breakout_price - 0.55 * H` (55% met).
- Stop: beyond the opposite trendline / the nearest pattern extreme.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 27 of 39 | 1 of 36 |
| Break-even failure rate | 13% | 15% |
| Average move | 39% rise | 19% decline |
| Throwback / pullback rate | 52% | 67% |
| % meeting price target | 73% | 55% |

Based on 477 perfect trades (bull market). Notable: a quick, near-vertical drop into the
diamond with an upward breakout often recovers back toward the launch price. Short- to
intermediate-term prior trends perform best; falling volume favors upward breakouts;
throwbacks/pullbacks hurt post-breakout performance.

## Trading Tactics

- Wait for a close beyond a trendline boundary before entering.
- If price plunged nearly vertically into the diamond and breaks out up, expect a recovery
  toward (often just short of) the launch price.
- If the diamond continues in the entry direction (half-staff), expect roughly the prior
  move again, but watch for support/resistance where price may stall.
- Avoid diamonds breaking out near the yearly high; prefer yearly low/middle.
- Prefer a falling volume trend for upward breakouts.

## Pine Notes

- Feasibility: **hard**. Requires detecting a broadening phase followed by a symmetrical-
  triangle phase and fitting four trendlines — genuinely subjective; ship as a best-effort
  detector with generous tolerances.
- Pivot detection (`ta.pivothigh/low(len, len)`) confirms turning points `len` bars late;
  do not anchor signals to the pivot bar or the script repaints.
- Suggested inputs: pivot length, trend-lookback `N` (R1), min trendline touches (R4),
  volume-slope filter toggle (R5), target multipliers (0.73 / 0.55).
- The diamond shape (R2–R4) is the most subjective element; fire the alert only on the
  confirming trendline-boundary close.
