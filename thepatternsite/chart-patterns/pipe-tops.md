---
id: pipe-tops
name: Pipe tops
aliases: []
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 1, of: 2}
stats:
  break_even_failure_rate: 0.13
  avg_move: 0.19
  throwback_rate: null
  pct_meeting_target: 0.54
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/pipet.html
accessed: 2026-07-16
---

# Pipe tops

## Overview

A pipe top is a two-bar reversal: twin adjacent upward price spikes at roughly the same high,
appearing after an upward move. It works best on the weekly chart. The pattern is a bearish
reversal that becomes valid only when price closes below the lower of the two spikes.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Time frame | Appears on daily charts, but weekly-scale pipes perform better — use weekly |
| Price trend | Usually upward leading into the pattern |
| Shape | Two adjacent upward spikes; on a candle chart the candles can be any shape (spike refers to the bar highs) |
| Spikes | Should be longer than most others in the past year and tower over surrounding price (be flexible) |
| Overlap | The two spikes should have large price overlap |
| Variation | Price variation between tops usually small (avg ~20 cents; up to $1+ for high-price stocks) |
| Volume | Right spike often has lower volume than the left (observation, not a requirement) |
| Obvious | The pipe should stand alone and be obvious on the chart |
| Best setup | Best performers appear at the top of a retrace in a prolonged downtrend |
| Confirmation | Price closes below the lowest price in the pattern |

## Detection Rules (computable)

Definitions: `spikeA`, `spikeB` = the two adjacent bars; `high_A`, `high_B` their highs;
`pipe_top` = max(high_A, high_B); `pipe_low` = min(low of the two bars).

- **R1 [B]** Prior trend up (or a bounce within a downtrend): `close > close[N]` into the pattern (default `N = 20` [D]).
- **R2 [B]** Twin adjacent spikes: two consecutive bars whose highs sit near each other — `abs(high_A - high_B) / min(high_A, high_B) <= 0.01` (variation small; loosen for high-price stocks [D]).
- **R3 [D]** Spikes stand out: each bar's high exceeds the highest high of the surrounding `M` bars (default `M = 10`) — the pair towers over the landscape.
- **R4 [D]** Large overlap: the two bars' ranges overlap substantially — `min(high_A, high_B) > max(low of the two)` with overlap ≥ 50% of the smaller range (default).
- **R5 [B]** Confirmation: `close < pipe_low` (close below the lower of the two spikes) — pattern is valid only then.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < pipe_low` (a close below the lowest
price in the pattern). Break-even failure rate is 13%.

## Targets & Stops

- Measure rule: `height = pipe_top(B) - pipe_low(A)`; `target = pipe_low - 0.54 * height`
  (54% meet target — subtract from the lowest price in the pattern).
- Best performing pipe tops occur during downtrends (price bounces up, forms a pipe, resumes
  the decline). Avoid pipes after a long downtrend — they may signal the trend's end.

## Performance

| Metric | Value (bull market, weekly) |
|---|---|
| Overall rank | 1 of 2 (best, weekly scale) |
| Break-even failure rate | 13% |
| Average decline | 19% |
| % meeting price target | 54% |

Statistics based on more than 4,000 perfect trades. Pipe tops perform well in both bull and
(especially) bear markets. Best performers: at the top of a retrace within a prolonged
downtrend, and with breakouts within a third of the yearly low.

## Trading Tactics

- Use the weekly chart for best results.
- Enter short on a close below the lower spike.
- Favor pipe tops that form as a retrace top within a downtrend; avoid them after a long
  downtrend (may mark the bottom).
- Prefer breakouts within a third of the yearly low.

## Pine Notes

- Feasibility: **easy**. Only two adjacent bars; the confirming close (R5) is non-repainting.
- Suggested inputs: time frame note (weekly recommended), top-tolerance % (R2), surrounding
  lookback `M` (R3), overlap % (R4), trend lookback `N`, target multiplier (0.54).
- The "towers over the landscape / obvious" criterion (R3) and volume observation are the
  subjective parts; ship them as optional filters.
- Timeframe caveat: statistics are weekly-scale; on intraday/daily the edge may differ.
