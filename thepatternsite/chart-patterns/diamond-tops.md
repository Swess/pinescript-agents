---
id: diamond-tops
name: Diamond Tops
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 10, typical: 30}
confirmation: required
rank: {value: 39, of: 39}
stats:
  break_even_failure_rate: 0.21
  avg_move: 0.29
  throwback_rate: 0.57
  pct_meeting_target: 0.65
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/diamondt.html
accessed: 2026-07-16
---

# Diamond Tops

## Overview

A diamond top appears after an uptrend: price broadens (higher peaks, lower valleys) and
then narrows (lower peaks, higher valleys), so trendlines connecting the turns outline a
diamond, usually tilted to one side. It breaks out downward 54% of the time and can act as
a reversal or a half-staff continuation. A quick rise into the diamond often precedes a
quick decline back toward the launch price.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading to the pattern |
| Shape | Looks like a diamond, usually tilted to the side |
| Trendlines | First half broadens (higher peaks, lower valleys); second half narrows (lower peaks, higher valleys) — broadening then symmetrical triangle |
| Touches | Price touches each trendline once or twice; some outliers may cross |
| Volume trend | Downward 55%–59% of the time |
| Breakout | Downward 54% of the time |

## Detection Rules (computable)

Definitions: use swing pivots via `ta.pivothigh(len, len)` / `ta.pivotlow(len, len)`.
Split the pattern into a first (broadening) half and a second (narrowing) half around the
widest point `mid`.

- **R1 [B]** Prior trend up: `close > close[N]` at pattern start (default `N = 20` [D]).
- **R2 [B]** Broadening first half: `peak2 > peak1` and `valley2 < valley1` before `mid`.
- **R3 [B]** Narrowing second half: `peak_k < peak_{k-1}` and `valley_k > valley_{k-1}` after `mid`.
- **R4 [D]** Each of the two trendlines is touched at least twice (default; outliers tolerated).
- **R5 [D]** Volume trends down across the pattern: `ta.linreg(volume, patternLen, 0)` slope `< 0` (Bulkowski notes 55–59% do; optional filter).
- **R6 [B]** Pattern is valid only on confirmation: a close beyond one of the two trendline boundaries (see below).

## Confirmation & Breakout

Breakout occurs when `close` moves outside one of the diamond's trendline boundaries.
Direction is **downward 54%** of the time (bull market). Treat the pattern as unconfirmed
until a boundary close.

## Targets & Stops

- Height: `H = highest_peak_high (A) - lowest_valley_low (B)` within the pattern.
- Target (down breakout): `target = breakout_price - 0.63 * H` (63% of full height met).
- Target (up breakout): `target = breakout_price + 0.65 * H` (65% met).
- Stop: beyond the opposite trendline / nearest pattern extreme.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 39 of 39 (last) | 3 of 36 |
| Break-even failure rate | 21% | 15% |
| Average move | 29% rise | 17% decline |
| Throwback / pullback rate | 57% | 58% |
| % meeting price target | 65% | 63% |

Based on 733 perfect trades (bull market). Notable: a quick, near-vertical rise into the
diamond with a downward breakout often falls back toward the launch price (but slower).
Short- to intermediate-term prior trends perform best; breakouts in the lowest third of the
yearly range perform best; a rising volume trend favors upward breakouts;
throwbacks/pullbacks hurt performance.

## Trading Tactics

- Wait for a close beyond a trendline boundary before entering.
- If price rose nearly vertically into the diamond and breaks out down, expect a decline
  back toward the launch price (at a slower pace).
- If the diamond continues in the entry direction (half-staff), expect roughly the prior
  move again; watch overhead resistance where price may stall.
- Prefer breakouts in the lowest third of the yearly price range.
- A rising volume trend favors upward-breakout performance.

## Pine Notes

- Feasibility: **hard**. Requires detecting a broadening phase then a symmetrical-triangle
  phase and fitting four trendlines — subjective; ship as a best-effort detector with
  generous tolerances.
- Pivot detection (`ta.pivothigh/low(len, len)`) confirms turns `len` bars late; do not
  anchor signals to the pivot bar or the script repaints.
- Suggested inputs: pivot length, trend-lookback `N` (R1), min trendline touches (R4),
  volume-slope filter toggle (R5), target multipliers (0.63 / 0.65).
- The diamond shape (R2–R4) is the most subjective element; fire the alert only on the
  confirming trendline-boundary close.
