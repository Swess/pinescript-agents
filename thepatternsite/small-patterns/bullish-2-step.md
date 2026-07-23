---
id: bullish-2-step
name: Bullish 2-step
aliases: [Bullish 2-Step Reversal]
category: small-pattern
type: reversal
direction: bullish
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
source: https://thepatternsite.com/2StepBull.html
accessed: 2026-07-16
---

# Bullish 2-step

## Overview

A rare five-bar bullish reversal extending the bullish 2-close: bars 1-3 form a 2-close
reversal (lower low, higher close), and bars 4-5 repeat the "step." Breaks out upward 79% of
the time in stocks but underperforms the benchmark by a wide margin; Bulkowski says don't
trade it.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Five bars | The pattern is five price bars long |
| Bar 1 | Any price bar |
| Bar 2 | Low below bar 1, with a lower close too |
| Bar 3 | Low below bar 2 but close above bar 1 (and above bar 2). Bars 1-3 = a 2-close reversal |
| Bar 4 | Closes below bar 3's close |
| Bar 5 | Low below bar 4 but closes above bars 3 and 4 |
| Breakout | Upward 79% of the time in stocks |

## Detection Rules (computable)

Current bar = bar 5, so bar 4 = `[1]`, bar 3 = `[2]`, bar 2 = `[3]`, bar 1 = `[4]`.

- **R1 [B]** Bar 2 lower low, lower close: `low[3] < low[4] and close[3] < close[4]`.
- **R2 [B]** Bar 3 lower low than bar 2: `low[2] < low[3]`.
- **R3 [B]** Bar 3 closes above bars 1 and 2: `close[2] > close[4] and close[2] > close[3]`.
- **R4 [B]** Bar 4 closes below bar 3: `close[1] < close[2]`.
- **R5 [B]** Bar 5 low below bar 4: `low[0] < low[1]`.
- **R6 [B]** Bar 5 closes above bars 3 and 4: `close[0] > close[2] and close[0] > close[1]`.

## Confirmation & Breakout

Breaks out upward 79% of the time in stocks. Bulkowski tested upward breakouts only: buy stop
a penny above the highest bar; stop a penny below the lowest bar; target 2× height.

## Targets & Stops

- Target (height exit): `target = highest_bar_high + 2 * (highest_bar_high - lowest_bar_low)`.
- Stop-loss: a penny below the lowest bar of the pattern.

## Performance

Bull-market stocks, upward breakouts, height exit:

| Metric | 2-Step Uptrend | Uptrend Bench | 2-Step Downtrend | Downtrend Bench |
|---|---|---|---|---|
| Trades | 430 | 5,672 | 376 | 5,053 |
| Avg profit/loss per trade | $15.27 | $102.71 | $64.58 | $131.16 |
| Win/loss ratio | 36% | 41% | 41% | 42% |

ETFs (94 ETFs, few samples): $153.63 (up) / $158.36 (down) vs $99.79 / $90.88 — exceptional
but only 37/28 trades, not reliable. Crypto: too rare.
Notable: significantly underperforms the benchmark in stocks in both trends. Bulkowski: "Don't
trade using this pattern."

## Trading Tactics

- Bulkowski's bottom line: don't trade it — it underperforms the benchmark by a wide margin
  in stocks; ETF results are unreliable due to tiny samples.
- If traded, upward breakouts only, entry a penny above the pattern high, stop a penny below
  the low, target 2× height.

## Pine Notes

- Feasibility: **easy**. Five-bar OHLC comparisons only; no pivots, no repaint. Completes on
  bar 5's close.
- Suggested inputs: target height multiplier (default 2.0), tick offset, optional trend filter.
- Rarity means very few signals.
