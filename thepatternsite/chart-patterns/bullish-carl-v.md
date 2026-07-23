---
id: bullish-carl-v
name: Bullish Carl V
aliases: [Carl V]
category: chart-pattern
type: either
direction: bullish
bars: {min: 10, typical: 30}
confirmation: recommended
rank: {value: null, of: 39}
stats:
  break_even_failure_rate: 0.01
  avg_move: 0.63
  throwback_rate: 0.65
  pct_meeting_target: 0.57
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/CarlVBull.html
accessed: 2026-07-16
---

# Bullish Carl V

## Overview

A five-turn XABCD pattern discovered by Carl Vanhaesendonck. The ABCD portion resembles a
broadening bottom (line AC slopes up, line BD slopes down); point X is a prior minor low
away from the broadening shape. The pattern is traded bullishly by buying the rise from
valley D. It is **not ranked**, and its stats are measured from point D (not from a
breakout), matching how Vanhaesendonck actually trades it.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Shape | Minor low X leads to a broadening pattern where the second peak is above the first (C above A) and the second valley is below the first (D below B) |
| Turn X | Minor low; best performance when a preceding major peak E is below the price of C |
| Turn A | Minor high above X; the highest peak between X and A |
| Turn B | Valley below A but above X; no valley below B on A→B |
| Turn C | Peak above A; the highest peak between A and C |
| Turn D | Valley below B but above X; no valley lower than D on C→D |
| Breakout | Close above C (up) or close below X (down) |

## Detection Rules (computable)

Definitions: `X` (minor low), `A` (high), `B` (low), `C` (high), `D` (low) = alternating
pivots via `ta.pivothigh`/`ta.pivotlow`, in time order X→A→B→C→D.

- **R1 [B]** X is a minor low preceding the pattern.
- **R2 [B]** A above X and is the highest high between X and A: `high_A > low_X`.
- **R3 [B]** B below A but above X: `low_X < low_B < high_A`.
- **R4 [B]** C above A and is the highest high between A and C: `high_C > high_A`.
- **R5 [B]** D below B but above X: `low_X < low_D < low_B`.
- **R6 [B]** Line AC slopes up (`high_C > high_A`) and line BD slopes down (`low_D < low_B`) — broadening shape.
- **R7 [D]** Reversal quality (optional): a preceding major peak E is below the price of C — improves average rise (41%→46%).

## Confirmation & Breakout

Formal breakout: a close above C (upward) or a close below X (downward, ~35% of the time).
For the bullish trade, entry does not wait for the formal breakout — it triggers as price
turns up from D. Vanhaesendonck's entry: buy when price rises to **25% of the XC height
added to the low at D** (`entry = low_D + 0.25 * (high_C - low_X)`). To detect D as a bottom,
require no lower low for 3 bars after D (an "Above 3" confirmation).

## Targets & Stops

- Target (measure rule): `target = low_D + (high_C - low_X)` — add the full XC height to the
  low at D. Reached **57%** of the time (or **60%** using the XA distance added to the low at D).
- Scaling (Vanhaesendonck): buy stop at the 25% level, stop a couple of ticks below D; at 50%
  move stop to break-even; at 100% sell half and trail the rest (often exit all at 100% when
  day trading); extend to a 200% target computed as `high_C + (high_C - low_X)`.
- Stops: a penny below D triggers 56% of the time; a penny below X triggers 40% of the time
  (safer but wider — check the loss vs reward first).
- After a downward breakout, price still rises from D to the price of B 94% of the time.

## Performance

| Metric | Value (bull market, measured from D) |
|---|---|
| Overall rank | not ranked |
| Break-even failure rate | 1% |
| Average rise | 63% |
| Throwback rate | 65% |
| % meeting price target | 57% |

Based on 1,379 perfect trades. Stats are measured from point D to the ultimate high (not
from a pattern breakout). Notable: reversals (a drop from major peak E into X) lift gains
39%→44% and cut failures 20%→16%; a big move into X (median 11% for reversals, 6% for
continuations) predicts a larger gain. A long XA leg relative to CD helps. Bulkowski found
it hard to trade profitably on U.S. stocks/daily; the discoverer trades it in currencies.

## Trading Tactics

- Buy when price rises to 25% of the XC height above the low at D; stop a couple of ticks below D.
- Confirm D with an "Above 3" (no lower low for 3 bars after the trough).
- At 50% of height, move the stop to break-even; sell half at 100% and trail; extend to a 200% target.
- Prefer reversals (drop from a major peak E, with E below C) and a large move into X.
- A long XA leg vs. the CD drop favors bigger gains.

## Pine Notes

- Feasibility: **hard**. Requires detecting five alternating pivots in strict order with
  interior "no lower/higher turn" constraints — each pivot confirms `len` bars late
  (`ta.pivothigh/low(len, len)`), so D (the entry trigger) is known only after a lag.
- Suggested inputs: pivot length, XC-height entry fraction (0.25), D-confirmation bars (3),
  target/scale multipliers (1.0 / 2.0), optional E-below-C quality filter (R7).
- The strict interior constraints (R2-R5) are the hard part to encode faithfully; track
  candidate turns in `var` UDT arrays and validate the full XABCD sequence before arming entry.
- Best suited to intraday/currency use per the discoverer; test carefully on stocks/daily.
