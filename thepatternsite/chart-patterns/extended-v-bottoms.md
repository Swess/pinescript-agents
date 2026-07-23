---
id: extended-v-bottoms
name: Extended V-Bottoms
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 15, typical: 40}
confirmation: required
rank: {value: 24, of: 39}
stats:
  break_even_failure_rate: 0.10
  avg_move: 0.40
  throwback_rate: 0.62
  pct_meeting_target: 0.51
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/vBottomExts.html
accessed: 2026-07-16
---

# Extended V-Bottoms

## Overview

A variation on the V-bottom: after price reverses at the V low and climbs for a bit, it
moves sideways (the "extension") before continuing higher. The extension can take any shape
(often a small congestion, flag, pennant, or triangle). Breakout is a close above the
right-side peak.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Downtrend | Straight-line run down with few/no pauses, often within a channel |
| Width | At least 3 weeks to 3 months |
| Reversal | Bottom forms a one-day reversal, island reversal, or tail, usually on heavy volume, perhaps gapping up |
| Trendline | After the reversal, price pierces a down-sloping trendline along the tops |
| Extension | After the initial rise, price moves sideways before continuing higher |
| Retrace | Right side retraces at least 38.2% of the left-side drop (arbitrary; be flexible) |
| Breakout | Close above the right-side peak |
| No spike | Single-long-bar bottoms excluded |
| Angle | Right-side rise often mirrors the left-side drop angle |

## Detection Rules (computable)

Definitions: `A` = left-side high (pattern start), `B` = V low, `peakR` = right-side peak
before the sideways extension.

- **R1 [B]** Straight-line drop into `B`: mostly down-closes from `A` to `B` (default `>= 70%` down-closes [D]).
- **R2 [B]** Width from `A` to `B` is `>= 15` bars (3 weeks) and `<= 65` bars (3 months) [B/D].
- **R3 [B]** No long spike at the low: `B` bar range `<= 2 * ta.atr(14)` [D].
- **R4 [B]** Right side retraces at least 38.2% of the drop: reaches `>= B + 0.382 * (A - B)`, forming `peakR`.
- **R5 [B]** Extension: a sideways congestion follows `peakR` (default: price stays within a band for `>= 5` bars [D]).
- **R6 [B]** Breakout: `close > peakR` (a close above the right-side peak).

## Confirmation & Breakout

Breakout is **upward**: `close > peakR`, a close above the right-side peak that precedes the
extension. Trade once price exits the extension; you may also enter earlier at the 38.2%
retrace of the left side.

## Targets & Stops

- Target: `A`, the high at the start of the pattern (met 51% of the time).
- Stop: below the V low `B` (or below the extension).

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 24 of 39 |
| Break-even failure rate | 10% |
| Average rise | 40% |
| Throwback rate | 62% |
| % meeting price target (target = A) | 51% |

Based on 288 perfect trades. A powerful move up often follows the extension breakout,
retracing much of the drop that led into the V.

## Trading Tactics

- Preferred entry: when price closes above the right-side peak (exits the extension).
- Alternative earlier entry: the 38.2% retrace of the left side (higher risk).
- Expect price to approach the left-side start (`A`); treat that as an optimistic target.
- Place the stop below the V low or the extension.

## Pine Notes

- Feasibility: **moderate–hard**. Adds an "extension" (sideways congestion) detection on
  top of the V-bottom logic — the sideways phase (R5) is the fuzzy part; approximate with a
  band/ATR containment test.
- The V low and right-side peak need pivot detection (`ta.pivotlow/high(len, len)`), lagging
  by `len` bars. The breakout (`close > peakR`, R6) is a clean non-repainting trigger.
- Suggested inputs: pivot length, min/max width (R2), retrace % (0.382, R4), extension
  min-bars / band width (R5), down-close ratio (R1).
