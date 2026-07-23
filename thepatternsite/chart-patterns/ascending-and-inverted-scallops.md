---
id: ascending-and-inverted-scallops
name: Ascending and inverted scallops
aliases: [inverted and ascending scallop]
category: chart-pattern
type: continuation
direction: bullish
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 14, of: 39}
stats:
  break_even_failure_rate: 0.09
  avg_move: 0.45
  throwback_rate: 0.66
  pct_meeting_target: 0.64
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/aiscallop.html
accessed: 2026-07-16
---

# Ascending and inverted scallops

## Overview

An inverted, backward-J shape that looks like the right half of an umbrella: a
straight (or nearly straight) run up, a rounded top, then a small decline. It appears
in uptrends (or at the bullish turn of a downtrend) and performs well in both bull and
bear markets, with a low break-even failure rate and a large average rise. Discovered
by Bulkowski in the early 2000s.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Most often in an upward trend leading to the pattern, or at the bullish turning point of a downtrend |
| Shape | Inverted, backward J — right half of an umbrella: straight or nearly straight run up, rounded at the top, then a small decline |
| Smooth top | Peaks form a rounded turn; larger patterns may be less smooth |
| Retrace | The right end usually retraces 54% of the prior up move; avoid 100% retraces |
| Volume | Trends downward 70% of the time |
| Confirmation | Confirms when price closes above the highest high in the pattern |

## Detection Rules (computable)

Definitions: `A` = pattern start low (swing low via `ta.pivotlow`), `B` = highest high
of the pattern (rounded top), `C` = right-side retrace low after `B` (swing low).

- **R1 [B]** Prior trend up (or bullish turn): `close` at `A` above the close `N` bars earlier, OR `A` is a confirmed downtrend pivot low (default `N = 20` [D]).
- **R2 [D]** Straight run up A→B: rise `(high_B - low_A) / low_A >= 0.10` over `5–30` bars with few pullbacks (max intermediate retrace 25% of the leg; defaults).
- **R3 [D]** Rounded top: no single-bar spike top — highest high within 1% spans ≥ 2 bars, and the top forms over ≥ 3 bars (default; subjective criterion).
- **R4 [B]** Right retrace near 54% of the A→B move: `0.25 <= (high_B - low_C) / (high_B - low_A) <= 0.75` (Bulkowski: usually 54%; band is a default [D]).
- **R5 [B]** Not a full retrace: `low_C > low_A` (avoid 100% retraces).
- **R6 [B]** Volume trends downward over the pattern (70% of cases): regression slope of volume A→C < 0 (ship as optional filter).
- **R7 [B]** Pattern valid only on confirmation (see below).

## Confirmation & Breakout

Trigger: `close > high_B` (a close above the highest high in the pattern). Breakout is
upward in 95% of cases. A close below `low_A` is a downward breakout — Bulkowski says
avoid the pattern if price drops below the start (A).

## Targets & Stops

- Target (measure rule): `target = high_B + 0.64 * (high_B - low_A)` — height from the
  highest peak (B) to the lowest valley (A) times the 64% percentage-meeting-target,
  added to the highest peak.
- Stop: a few cents below the right scallop edge (C); raise the stop as price climbs.
  If a distinct right valley forms and price drops below it, sell (moved stop
  location).

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 14 of 39 (1 = best) |
| Break-even failure rate | 9% |
| Average rise | 45% |
| Throwback rate | 66% |
| % meeting price target | 64% |

Based on 1,776 perfect trades. Notable: performs well in both bull and bear markets;
95% of these scallops break out upward; heavy breakout volume suggests better
performance.

## Trading Tactics

- Buy when price closes above the highest peak in the pattern (B).
- Sell/avoid if price drops below the right scallop edge; if it drops below the
  pattern start (A), skip the trade entirely.
- Swing traders: buy the right-side bottom (C), sell at the top of the pattern.
- If a distinct right valley forms, use it as the new stop location; sell on a drop
  below it.
- Prefer heavy breakout volume.

## Pine Notes

- Feasibility: **hard**. The rounded-top / umbrella shape is the most subjective part;
  R2–R4 approximate it with leg length, spike suppression, and retrace-depth bounds,
  but expect false positives/negatives versus visual inspection.
- Use `ta.pivotlow`/`ta.pivothigh` for A, B, C — each confirms `len` bars late; anchor
  entries to the confirmation bar (`close > high_B`), never the pivot bars.
- Suggested inputs: pivot length, min A→B rise % (R2), retrace band (R4, default
  25–75% around Bulkowski's 54%), trend-lookback N (R1), target multiplier (0.64),
  optional volume-slope filter.
- Consider a curvature check (e.g. fit of highs to a concave-down quadratic over the
  top section) as an optional smoothness filter — expensive but closer to Bulkowski's
  intent.
