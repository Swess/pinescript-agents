---
id: spikes-and-tails
name: Spikes and Tails
aliases: [Tails]
category: small-pattern
type: reversal
direction: either
bars: {min: 1, typical: 1}
confirmation: recommended
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/spikes.html
accessed: 2026-07-16
---

# Spikes and Tails

## Overview

A spike (or "tail") is a single tall price move with the close near the base of the spike,
marking a short-term turning point. A bullish spike plunges downward and closes near the
intraday high (a low turning point); a bearish spike towers upward and closes near the
intraday low (a peak). Bulkowski notes downward (bullish) spikes are more reliable than
upward ones, likely due to the market's long-run upward bias. The page is qualitative — no
performance statistics are published.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Any direction, but usually in the direction of the spike (down for bullish, up for bearish) |
| Shape | A tall price move with the close near the base of the spike |
| Closing price | Upward spike closes near the intraday low; downward spike closes near the intraday high |
| Volume | Usually heavy |
| Bullish spike | Spikes downward, closes near the intraday high; often a low turning point |
| Bearish spike | Spikes upward, closes near the intraday low; forms a peak but rarely a major/sustained turn |
| Confirmation | Wait a day to confirm the spike stands alone |

## Detection Rules (computable)

Single bar; `range = high - low`. Define the long shadow as the distance from the close to the
far extreme of the spike.

- **R1 [D]** Tall bar: `range >= 2 * sma(high - low, 21)` (unusually long; default 2× monthly average, adjustable).
- **R2 [B]** Bullish spike (downward tail): close near the high — `(high - close) / range <= 0.25` and the lower shadow `(min(open, close) - low) / range >= 0.5` [D].
- **R3 [B]** Bearish spike (upward tail): close near the low — `(close - low) / range <= 0.25` and the upper shadow `(high - max(open, close)) / range >= 0.5` [D].
- **R4 [D]** Volume above average: `volume >= sma(volume, 20)` ("usually heavy").
- **R5 [B]** Stands alone: confirm on the next bar (wait one day) that neither neighbor overlaps the spike's extreme [D].

## Confirmation & Breakout

No mechanical breakout level is defined. Bulkowski advises waiting a day to be sure the spike
stands alone (like a lone pine tree on a barren hill) before acting, then entering in the
reversal direction. Treat both types as short-term signals only.

## Targets & Stops

Not stated by Bulkowski. No measure rule or published targets. As a default [D], use the swing
rule (project the spike's height from the turning point) and place a stop just beyond the tip
of the spike.

## Performance

Not stated by Bulkowski — the page reports no failure rates, average moves, or rank. The only
qualitative finding: downward (bullish) spikes are more reliable turning points than upward
(bearish) spikes, and bearish spikes rarely produce a major or lasting reversal.

## Trading Tactics

- Upward spike: swing traders can expect a downward swing, but the turn may be brief.
- Downward spike: more reliable; buy once it is clear the spike stands alone.
- Both are short-term signals — do not expect a major, lasting trend change.
- Be cautious when the close is not near the intraday low (upward spike) or high (downward
  spike).

## Pine Notes

- Feasibility: **easy** mechanically (single-bar shadow/range test), but the definition of an
  "unusually tall" spike and "stands alone" is subjective — ship the range multiple and shadow
  ratios as inputs.
- Suggested inputs: range multiple (R1), close-near-extreme threshold, shadow-ratio threshold,
  volume filter toggle, confirm-next-bar toggle.
- The "wait a day / stands alone" rule (R5) needs the following bar, so signals confirm one bar
  late — do not anchor to the spike bar or the script will look ahead.
- Closely related to tall-candle and long-shadow candlestick studies; consider reusing an
  existing shadow-ratio helper.
