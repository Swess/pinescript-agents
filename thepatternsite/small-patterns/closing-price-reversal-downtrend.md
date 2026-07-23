---
id: closing-price-reversal-downtrend
name: Closing price reversal, downtrend
aliases: [CPRD, Closing Price Reversal Downtrend]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 23, of: 23}
stats:
  break_even_failure_rate: 0.43
  avg_move: 0.08
  throwback_rate: null
  pct_meeting_target: 0.72
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/CPRD.html
accessed: 2026-07-16
---

# Closing price reversal, downtrend

## Overview

A one-bar bullish reversal appearing in a short-term downtrend: the bar opens near its low,
closes near its high, and closes above the prior day's close. It uses the prior bar's close in
its definition. Ranked worst (23 of 23) among the small patterns Bulkowski compared, but its
measure rule hits 72% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| 1 bar | One-bar pattern; references the prior bar's close |
| Downtrend | Appears in a short-term downtrend |
| Open | Open within 25% of the intraday low |
| Close | Close within 25% of the intraday high AND above the prior day's close |

## Detection Rules (computable)

`rng = high - low` (current bar). Prior close = `close[1]`.

- **R1 [D]** Prior downtrend: `close[1] < close[6]` (5-bar downtrend into the bar; default, adjustable).
- **R2 [B]** Open near the low: `(open - low) <= 0.25 * rng`.
- **R3 [B]** Close near the high: `(high - close) <= 0.25 * rng`.
- **R4 [B]** Close above prior close: `close > close[1]`.

## Confirmation & Breakout

Buy at the open the next day (or a penny above the pattern high for the target-exit method). The
pattern is meant to reverse the downtrend upward.

## Targets & Stops

- Measure rule (1× height): `target = high + (high - low)`. Fulfilled 72% in bull, 65% in bear.
- Target-exit tests used 2× height: `target = high + 2 * (high - low)`.
- Stops tested: 7% below buy, OR a penny below the pattern's low. The pattern stop cut losses
  dramatically but the win rate fell so far it stayed unprofitable.

## Performance

Important bull-market results (perfect trades, "trend high" basis):

| Metric | Bull | Bear |
|---|---|---|
| Overall rank (of 23) | 23 (worst) | — |
| 5% break-even failure rate | 43% (Table 1: 42%) | 39% |
| Average rise | 8% | 9% |
| Measure-rule success | 72% | 65% |

7%-target trading (Table 3): bull net +$0.09 (52% wins), bear net -$159.55 — essentially
breakeven at best. Target-exit stock tests (downtrend only, 492 stocks): $64.04 vs benchmark
$62.36 — no real edge. ETFs: $45.20 vs $49.24 — underperforms. Crypto: $154.44 vs $122.37 —
outperforms (the one bright spot).

## Trading Tactics

- Weak overall (ranked last of 23); the only clear edge Bulkowski found was in cryptocurrency.
- If traded, buy at next open, use the 1× measure-rule target (hit 72% of the time).
- A pattern-low stop limits losses but does not make the pattern profitable in stocks/ETFs.

## Pine Notes

- Feasibility: **easy**. Single-bar open/close/high/low ratios plus one prior close; no pivots,
  no repaint. Completes on the bar's close.
- Suggested inputs: open/close proximity fraction (default 0.25), downtrend lookback (R1),
  target multiplier (1× measure rule vs 2× height exit), stop mode, min price.
- R1 (downtrend) is the only defaulted rule — Bulkowski used linear regression / minor-low
  logic to confirm the inbound downtrend; a simple `close[1] < close[N]` is a codable proxy.
