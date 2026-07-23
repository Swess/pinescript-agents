---
id: pipe-bottoms
name: Pipe bottoms
aliases: []
category: chart-pattern
type: reversal
direction: bullish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 3, of: 3}
stats:
  break_even_failure_rate: 0.08
  avg_move: 0.54
  throwback_rate: null
  pct_meeting_target: 0.77
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/pipeb.html
accessed: 2026-07-16
---

# Pipe bottoms

## Overview

A pipe bottom is a two-bar reversal: twin adjacent downward price spikes at roughly the same
low, appearing at the end of a downtrend. It works best on the weekly chart. The pattern is a
bullish reversal that becomes valid only when price closes above the higher of the two spikes.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Time frame | Appears on daily charts, but weekly-scale pipes perform better — use weekly |
| Price trend | Usually downward leading into the pattern |
| Shape | Two adjacent downward spikes; on a candle chart the candles can be any shape (spike refers to the bar lows) |
| Overlap | The two weeks usually have large price overlap; need not bottom at the same price (bottom price variation ~1%) |
| Volume | Most pipes show above-average volume on one or both spikes |
| Obvious | The pipe should stand alone and clear the surrounding price action |
| Best setup | Best performers appear at the end of downtrends |
| Confirmation | Price closes above the highest high in the pattern |

## Detection Rules (computable)

Definitions: `spikeA`, `spikeB` = the two adjacent bars; `low_A`, `low_B` their lows;
`pipe_top` = max(high of the two bars); `pipe_low` = min(low_A, low_B).

- **R1 [B]** Prior trend down: `close < close[N]` into the pattern (default `N = 20` [D]; Bulkowski: short-term downtrend up to 3 months performs best).
- **R2 [B]** Twin adjacent spikes: two consecutive bars whose lows sit near each other — `abs(low_A - low_B) / min(low_A, low_B) <= 0.01` (bottom price variation ~1%; loosen for uneven lows [D]).
- **R3 [D]** Spikes stand out (obvious): each bar's low is below the lowest low of the surrounding `M` bars (default `M = 10`), i.e. the pair clears the local landscape.
- **R4 [D]** Large overlap: the two bars' ranges overlap substantially — `min(high_A, high_B) > max(low_A, low_B)` and overlap ≥ 50% of the smaller range (default).
- **R5 [B]** Confirmation: `close > pipe_top` (close above the higher of the two spikes) — pattern is valid only then.

## Confirmation & Breakout

Breakout is **upward** by definition. Trigger: `close > pipe_top` (Bulkowski: buy when price
closes above the higher of the two spikes, marked `A`). Break-even failure rate is only 8%.

## Targets & Stops

- Measure rule: `height = pipe_top(A) - pipe_low(B)`; `target = pipe_top + 0.77 * height`
  (77% meet target). Bulkowski's height-exit test uses a fuller `target = pipe_top + 2 * height`.
- Buy stop a penny above the higher spike; stop-loss a penny below the lower spike
  (`close < pipe_low` closes the position).

## Performance

| Metric | Value (bull market, weekly) |
|---|---|
| Overall rank | 3 of 3 (last, weekly scale; 1 = best) |
| Break-even failure rate | 8% |
| Average rise | 54% |
| % meeting price target | 77% |

Statistics based on more than 8,800 perfect trades. Height-exit testing (497 stocks): pipes
in an uptrend earn $402/trade vs a $201 benchmark; pipes in downtrends still beat their
benchmark. ETF test: uptrend pipes strongly outperform ($377 vs $175) but downtrend ETF pipes
should be avoided. Best performers: uneven lows beat equal lows; breakouts within a third of
the yearly low; heavy left-spike volume vs right; short (≤3-month) downtrend into the pipe.

## Trading Tactics

- Use the weekly chart for best results.
- Buy on a close above the higher spike (or a buy stop a penny above it).
- Place the stop a penny below the lower spike.
- Favor pipes with uneven lows, near the yearly low, with heavy left-spike volume.
- Pipes appearing as a retrace within an uptrend signal higher prices ahead.

## Pine Notes

- Feasibility: **easy**. Only two adjacent bars — no pivot lookahead needed for the core test;
  the confirming close (R5) is non-repainting.
- Suggested inputs: time frame note (weekly recommended), bottom-tolerance % (R2), surrounding
  lookback `M` (R3), overlap % (R4), trend lookback `N`, target multiplier (0.77 or 2.0).
- The "obvious / stands alone" criterion (R3) and volume filters are the subjective parts;
  ship them as optional filters.
- Timeframe caveat: statistics are weekly-scale; on intraday/daily the edge may differ.
