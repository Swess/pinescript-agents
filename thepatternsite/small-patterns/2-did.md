---
id: 2-did
name: 2-did
aliases: [2-Did]
category: small-pattern
type: either
direction: bullish
bars: {min: 2, typical: 2}
confirmation: recommended
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/2Did.html
accessed: 2026-07-16
---

# 2-did

## Overview

A subset of the 2-dance pattern combining a tall two-bar pair with an inside day. Both bars
are at least 1.5x the prior month's average bar height, and the second bar is an inside day
(inside the first bar's high-low range). Bulkowski found it outperforms both a plain inside
day and the two-bar benchmark — but only in stocks (too rare in ETFs/crypto to trust).

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Up or down into the pattern; downtrends with upward breakouts (reversals) work best |
| Shape | Two adjacent bars, each ≥ 1.5× the average bar height of the prior month (22 bars) |
| Inside day | Bar 2 is entirely inside bar 1's high-low range; no ties allowed |
| Trading | Buy stop a penny above bar 1's high; stop-loss a penny below bar 1's low |
| Vehicle | Trade in stocks only; rare and poor in ETFs |

## Detection Rules (computable)

`avgH = ta.sma(high - low, 22)[1]` (average bar height over the month before the pair). Bar 1
= `[1]`, bar 2 = `[0]`.

- **R1 [B]** Bar 1 tall: `(high[1] - low[1]) >= 1.5 * avgH` (best performance at 2×; default 1.5).
- **R2 [B]** Bar 2 tall: `(high[0] - low[0]) >= 1.5 * avgH`.
- **R3 [B]** Bar 2 is an inside day: `high[0] < high[1] and low[0] > low[1]` (strict; no ties).
- **R4 [D]** Min price $5 at pattern (Bulkowski excluded penny stocks).

## Confirmation & Breakout

Entry via a buy stop a penny above bar 1's high (bar 1 is the taller/outer bar). Stop-loss a
penny below bar 1's low. Reversals of a downtrend (upward breakout after a downtrend) perform
best.

## Targets & Stops

- Target (height exit): `target = pair_high + (pair_high - pair_low)` — height of the 2-did
  pair added to its top. (Bulkowski used a 1× height exit here, per the stock methodology.)
- Stop-loss: a penny below bar 1's low.
- The tall-bar requirement sets a far target → higher profit but harder to reach (higher %
  loss on failures).

## Performance

Bull-market stocks, upward breakouts, 497 stocks, height exit:

| Metric | 2-Did Uptrend | Uptrend Bench | 2-Did Downtrend | Downtrend Bench |
|---|---|---|---|---|
| Trades | 1,890 | 6,018 | 1,802 | 5,373 |
| Avg profit/loss per trade | $103.39 | $48.01 | $112.40 | $68.70 |
| Win/loss ratio | 41% | 40% | 42% | 42% |
| Avg gain of winners | 11% | 7% | 12% | 7% |
| Avg loss | -6% | -4% | -7% | -4% |

Vs a plain inside day (stocks): $103.39 vs $62.43 (up), $112.40 vs $77.46 (down) — 2-did wins.
ETFs: $4.57 (up) / -$28.90 (down) vs $48.84 / $51.31 — underperforms; too rare. Crypto: too
few trades (32 up, 10 down) to trust despite high numbers.

Notable: downtrend (reversal) version outperforms the uptrend (continuation) version. Long
hold times (~40 days) because of the far target.

## Trading Tactics

- Trade in stocks only; skip ETFs (rare and poor) and crypto (too few samples).
- Prefer it as a reversal of a downtrend (upward breakout).
- Entry a penny above bar 1's high, stop a penny below bar 1's low, target = 1× height above top.

## Pine Notes

- Feasibility: **easy**. Inside-day test plus a rolling average bar-height comparison
  (`ta.sma(high-low, 22)`); no pivots, no repaint. Completes on bar 2's close.
- Suggested inputs: tallness multiple (default 1.5, best 2.0), average window (default 22),
  target height multiplier (default 1.0), min price, optional trend filter.
- Note the height-exit multiplier here is 1× (differs from 2-dance/2-tall's 2× methodology).
