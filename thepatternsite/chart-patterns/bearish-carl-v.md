---
id: bearish-carl-v
name: Bearish Carl V
aliases: [Carl V]
category: chart-pattern
type: either
direction: bearish
bars: {min: 10, typical: 30}
confirmation: recommended
rank: {value: null, of: 36}
stats:
  break_even_failure_rate: 0.24
  avg_move: 0.14
  throwback_rate: 0.63
  pct_meeting_target: 0.36
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/CarlVBear.html
accessed: 2026-07-16
---

# Bearish Carl V

## Overview

A five-turn XABCD pattern discovered by Carl Vanhaesendonck. The ABCD portion resembles a
broadening bottom (line AC slopes down, line BD slopes up); point X is a prior minor high
away from the broadening shape. The pattern is traded bearishly by shorting the drop from
peak D. It is **not ranked**, and its stats are measured from point D (not from a breakout),
matching how Vanhaesendonck actually trades it.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Shape | Minor high X leads to a broadening pattern where the second valley is below the first (C below A) and the second peak is above the first (D above B) |
| Turn X | Minor high; a rise into X above the median 15% (from prior low E to X) gives a better-performing pattern |
| Turn A | Minor low below X; the lowest valley between X and A; no peak higher than X on the drop X→A |
| Turn B | Peak above A but below X; no peak above B nor valley below A on A→B |
| Turn C | Valley below A; the lowest valley between A and C; no peak higher than B on B→C |
| Turn D | Peak above B but below X; no peak higher than D nor valley below C on C→D |
| Breakout | Close above X (up) or close below C (down) |

## Detection Rules (computable)

Definitions: `X` (minor high), `A` (low), `B` (high), `C` (low), `D` (high) = alternating
pivots via `ta.pivothigh`/`ta.pivotlow`, in time order X→A→B→C→D.

- **R1 [B]** X is a minor high preceding the pattern.
- **R2 [B]** A below X and is the lowest low between X and A: `low_A < high_X`.
- **R3 [B]** B above A but below X: `low_A < high_B < high_X`.
- **R4 [B]** C below A and is the lowest low between A and C: `low_C < low_A`.
- **R5 [B]** D above B but below X: `high_B < high_D < high_X`.
- **R6 [B]** Line AC slopes down (`low_C < low_A`) and line BD slopes up (`high_D > high_B`) — broadening shape.
- **R7 [D]** Rise into X ≥ 15% (from prior low E): `(high_X - low_E) / low_E >= 0.15` — optional quality filter (median; better patterns exceed it).

## Confirmation & Breakout

Formal breakout: a close above X (upward, ~54% of the time) or a close below C (downward).
For the bearish trade, entry does not wait for the formal breakout — it triggers as price
turns down from D. Vanhaesendonck's entry: short when price drops to **25% of the XC height
subtracted from the high at D** (`entry = high_D - 0.25 * (high_X - low_C)`). To detect D as
a peak, require no higher high for 3 bars after D (a "Below 3" confirmation).

## Targets & Stops

- Target (measure rule): `target = high_D - (high_X - low_C)` — subtract the full XC height
  from the high at D. Reached **36%** of the time.
- Scaling (Vanhaesendonck): stop initially a penny above D; at 50% of height move stop to
  break-even; scale out half at 100% (full height); close at 200% (twice XC height); else
  exit on a close above a pivot.
- After D, price drops to the price of B 94% of the time, reaches A 54%, and reaches C 39%.

## Performance

| Metric | Value (bull market, measured from D) |
|---|---|
| Overall rank | not ranked |
| Break-even failure rate | 24% |
| Average decline | 14% |
| Pullback rate | 63% |
| % meeting price target | 36% |

Based on 1,619 perfect trades. Stats are measured from point D to the ultimate low (not from
a pattern breakout). Notable: continuations (price trending down into X) perform best. About
54% of patterns break out upward (close above X first) — the short setup assumes the drop
from D. Bulkowski found the pattern hard to make money with on U.S. stocks / daily charts;
its discoverer trades it in currencies and for day trading.

## Trading Tactics

- Short when price drops to 25% of the XC height below the high at D; stop a penny above D.
- Confirm D with a "Below 3" (no higher high for 3 bars after the peak).
- At 50% of height, move the stop to break-even; scale out half at 100%; close at 200%.
- Exit on a close above the most recent pivot high if the target is not reached.
- Prefer continuations (downtrend into X) and a rise into X exceeding the 15% median.

## Pine Notes

- Feasibility: **hard**. Requires detecting five alternating pivots in strict order with
  interior "no higher/lower turn" constraints — each pivot confirms `len` bars late
  (`ta.pivothigh/low(len, len)`), so D (the entry trigger) is known only after a lag.
- Suggested inputs: pivot length, XC-height entry fraction (0.25), D-confirmation bars (3),
  target/scale multipliers (1.0 / 2.0), min rise-into-X % (R7).
- The strict interior constraints (R2-R5, no intervening higher/lower turns) are the hard
  part to encode faithfully; track candidate turns in `var` UDT arrays and validate the full
  XABCD sequence before arming the entry.
- Best suited to intraday/currency use per the discoverer; test carefully on stocks/daily.
