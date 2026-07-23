---
id: 2-dance
name: 2-dance
aliases: [2-Dance, Dance pattern]
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
source: https://thepatternsite.com/2Dance.html
accessed: 2026-07-16
---

# 2-dance

## Overview

A two-bar pattern (brought to Bulkowski by Kevin McDonald) of two candles each with a long
shadow — ideally a tall lower shadow on bar 1 and a tall upper shadow on bar 2, resembling
spinning tops or doji. It is a lower mid-list performer in stocks, near the top for ETFs, and
strong in crypto. Trade it only on upward breakouts (shorting it loses money); it works best
as a reversal of a short-term downtrend.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Two bars | Two adjacent daily price bars |
| Shadow vs body | Each bar's longer shadow ≥ 3× the body height |
| Shadow ratio | The longer shadow ≥ 2× the shorter shadow (per bar) |
| Ideal shape | Bar 1 has a tall lower shadow, bar 2 a tall upper shadow (doji-like) |
| Exclusion | Exclude a four-price doji (open = high = low = close) |
| Breakout | Upward breakout = close/move above the top of the pair; trade upward only |

## Detection Rules (computable)

Definitions per bar: `body = abs(close - open)`, `upsh = high - max(open, close)`,
`dnsh = min(open, close) - low`. Bar 1 = `[1]`, bar 2 = `[0]`.

- **R1 [B]** Bar 1 long shadow ≥ 3× body: `max(upsh[1], dnsh[1]) >= 3 * body[1]`.
- **R2 [B]** Bar 1 longer shadow ≥ 2× shorter: `max(upsh[1], dnsh[1]) >= 2 * min(upsh[1], dnsh[1])`.
- **R3 [B]** Bar 2 long shadow ≥ 3× body: `max(upsh[0], dnsh[0]) >= 3 * body[0]`.
- **R4 [B]** Bar 2 longer shadow ≥ 2× shorter: `max(upsh[0], dnsh[0]) >= 2 * min(upsh[0], dnsh[0])`.
- **R5 [B]** Not a 4-price doji: `high != low` on each bar.
- **R6 [D]** Preferred shape filter (optional): bar 1's long shadow is down (`dnsh[1] > upsh[1]`)
  and bar 2's long shadow is up (`upsh[0] > dnsh[0]`) — highest-performing configuration [B].

## Confirmation & Breakout

Entry via a buy stop one tick above the top (highest high) of the two-bar pair. Bulkowski
reports upward breakouts are the only profitable direction — do not short the pattern.
Best performance comes when it reverses a 5-day downtrend.

## Targets & Stops

- Target (height exit): `target = pair_high + 2 * (pair_high - pair_low)` where `pair_high` /
  `pair_low` are the highest high / lowest low of the two bars.
- Stop-loss: one tick below the lowest low of the pair.
- Minimum price $5 (Bulkowski excluded penny stocks from testing).

## Performance

Bull-market stock tests, upward breakouts, height exit:

| Metric | 2-Dance Uptrend | Uptrend Bench | 2-Dance Downtrend | Downtrend Bench |
|---|---|---|---|---|
| Trades | 7,241 | 6,018 | 6,242 | 5,373 |
| Avg profit/loss per trade | $54.37 | $48.01 | $83.54 | $68.70 |
| Win/loss ratio | 42% | 40% | 45% | 42% |

ETFs: $49.24 (up) / $76.71 (down) vs $48.84 / $51.31 — near top of small-pattern list, 49%
win rate. Crypto: $136.43 (up) / $224.85 (down) vs $214.65 / $147.18.

Key findings:
- Reversals of a downtrend outperform continuations of an uptrend.
- A doji as one of the two bars (especially the 2nd) shows superior performance.
- An inside-day 2-dance performs best; some body overlap helps (except upward-breakout uptrend).
- Taller 2nd bar → lower profit; a tall bar 1 + short bar 2 outperforms.
- Do NOT trade a busted (downward-breakout-then-reverse) 2-dance — all busted variants lost to
  the non-busted benchmark.

## Trading Tactics

- Trade upward breakouts only; never short a 2-dance.
- Favor it as a reversal of a short-term downtrend.
- Prefer patterns where at least one bar (ideally the 2nd) is a doji, and inside-day shape.
- Prefer a tall first bar / short second bar; avoid the reverse.
- Skip busted 2-dance setups.

## Pine Notes

- Feasibility: **easy–moderate**. Shadow/body ratios are simple per-bar arithmetic; the two-bar
  pattern completes on the 2nd bar's close (no repaint). Breakout confirmation adds a later bar.
- Suggested inputs: shadow/body multiple (default 3), long/short shadow ratio (default 2),
  target multiplier (default 2.0), optional doji filter, optional inside-day filter, optional
  5-day trend filter, min price.
- The "doji" and "inside-day" quality filters (R6 and above) are best shipped as optional
  toggles since they gate performance rather than identity.
