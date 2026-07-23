---
id: bearish-2-step
name: Bearish 2-step
aliases: [Bearish 2-Step Reversal]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 5, typical: 5}
confirmation: recommended
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/2StepBear.html
accessed: 2026-07-16
---

# Bearish 2-step

## Overview

A rare five-bar bearish reversal that extends the bearish 2-close: bars 1-3 form a 2-close
reversal (higher high, lower close), and bars 4-5 repeat the "step." Breaks out downward 74%
of the time in stocks but does not lead to a meaningful downtrend; performance is dismal and
Bulkowski advises caution.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Five bars | The pattern is five price bars long |
| Bar 1 | Any price bar |
| Bar 2 | High above bar 1, with a higher close too |
| Bar 3 | High above bar 2 but close below bar 1 (and below bar 2). Bars 1-3 = a 2-close reversal |
| Bar 4 | Closes above bar 3's close |
| Bar 5 | High above bar 4 but closes below bars 3 and 4 |
| Breakout | Downward 74% of the time in stocks |

## Detection Rules (computable)

Current bar = bar 5, so bar 4 = `[1]`, bar 3 = `[2]`, bar 2 = `[3]`, bar 1 = `[4]`.

- **R1 [B]** Bar 2 higher high, higher close: `high[3] > high[4] and close[3] > close[4]`.
- **R2 [B]** Bar 3 higher high than bar 2: `high[2] > high[3]`.
- **R3 [B]** Bar 3 closes below bars 1 and 2: `close[2] < close[4] and close[2] < close[3]`.
- **R4 [B]** Bar 4 closes above bar 3: `close[1] > close[2]`.
- **R5 [B]** Bar 5 high above bar 4: `high[0] > high[1]`.
- **R6 [B]** Bar 5 closes below bars 3 and 4: `close[0] < close[2] and close[0] < close[1]`.

## Confirmation & Breakout

Breaks out downward 74% of the time in stocks. Bulkowski tested upward breakouts only (buy
stop a penny above the highest bar; stop a penny below the lowest bar; target 2× height).
Downward breakout trades lost an average of $129.57 (uptrend) / $155.71 (downtrend), so the
bearishness does not produce a sustained trend.

## Targets & Stops

- Target (height exit): `target = highest_bar_high + 2 * (highest_bar_high - lowest_bar_low)`
  (upward); mirror below the low for downward.
- Stop-loss: a penny below the lowest bar (upward) / above the highest bar (downward).

## Performance

Bull-market stocks, upward breakouts, height exit:

| Metric | 2-Step Uptrend | Uptrend Bench | 2-Step Downtrend | Downtrend Bench |
|---|---|---|---|---|
| Trades | 164 | 5,672 | 134 | 5,053 |
| Avg profit/loss per trade | $14.92 | $102.71 | $166.15 | $131.16 |
| Win/loss ratio | 35% | 41% | 44% | 42% |

ETFs: <30 samples, underperforms — too few to report. Crypto: 16 trades, too rare.
Notable: significantly underperforms in uptrends, beats benchmark in downtrends but with only
134 trades. Downward-breakout trades lost money on average. Very rare pattern.

## Trading Tactics

- Bulkowski's bottom line: be cautious; other higher-high/lower-close reversals also test poorly.
- If traded, upward breakouts only, and only in stocks (too rare elsewhere).
- Entry a penny above the pattern high, stop a penny below the low, target 2× height.

## Pine Notes

- Feasibility: **easy**. Five-bar OHLC comparisons only; no pivots, no repaint. Completes on
  bar 5's close.
- Suggested inputs: target height multiplier (default 2.0), tick offset, optional trend filter.
- Rarity means very few signals — expect long stretches with no pattern.
