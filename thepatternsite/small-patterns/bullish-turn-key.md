---
id: bullish-turn-key
name: Bullish turn-key
aliases: []
category: small-pattern
type: reversal
direction: bullish
bars: {min: 4, typical: 4}
confirmation: required
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/TurnkeyBull.html
accessed: 2026-07-16
---

# Bullish turn-key

## Overview

The mirror of the bearish turn-key: a four-bar reversal in which the lows zig-zag while the
closes step up, then down, and it breaks out upward 73% of the time in stocks. Without the
alternate rule it underperforms the benchmark in stocks, ETFs, and cryptocurrency;
Bulkowski advises looking elsewhere for a better pattern.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Four price bars |
| Bar 1 | Any price bar |
| Bar 2 | Lower low (below bar 1) but closes above bar 1's close |
| Bar 3 | Higher high (above bar 2's high), closes below bar 2's close but stays above bar 1's close |
| Bar 4 | Lower low (below bar 3) but closes above bar 3's close |
| Alternate (optional) | Rule 1: bar 4 closes above bar 3's high (helps only in downtrends). Rule 2: bar 4 closes above bar 2's close (degrades performance) |
| Breakout | Upward 73% of the time in stocks |

## Detection Rules (computable)

Bars indexed most-recent-first: bar 4 = `[0]`, bar 3 = `[1]`, bar 2 = `[2]`, bar 1 = `[3]`.

- **R1 [B]** Bar 2 lower low, higher close: `low[2] < low[3] and close[2] > close[3]`.
- **R2 [B]** Bar 3 higher high, close between: `high[1] > high[2] and close[1] < close[2] and close[1] > close[3]`.
- **R3 [B]** Bar 4 lower low, higher close: `low[0] < low[1] and close[0] > close[1]`.
- **R4 [D]** Alternate rule 1 (helps in downtrends only): `close[0] > high[1]`.
- **R5 [D]** Alternate rule 2 (degrades performance — off by default): `close[0] > close[2]`.

## Confirmation & Breakout

Breakout is upward 73% of the time by definition. Bulkowski's test entered on an upward
breakout with a buy stop one tick above the highest bar of the four (top of the pattern);
the loss exit was one tick below the lowest bar. A close/trade beyond either extreme of the
four-bar range confirms the direction.

## Targets & Stops

- Height: `height = highest(high, 4) - lowest(low, 4)` over the four bars.
- Bulkowski's target exit: `target = highest(high, 4) + 2 * height` (twice the height added to the top).
- Stop: one tick below the lowest bar of the pattern (`lowest(low, 4)`).

## Performance

No classic break-even/average-move statistics are published; results are reported as dollar
profit/loss per trade versus a benchmark (bull market, upward-breakout test, no alternate
rules).

| Market / Test | Result vs benchmark |
|---|---|
| Stocks, uptrend | +$58.32 vs +$88.58 (underperforms) |
| Stocks, downtrend | +$70.79 vs +$100.27 (underperforms) |
| ETFs, uptrend | +$22.68 vs +$85.22 (underperforms) |
| ETFs, downtrend | +$51.51 vs +$83.76 (underperforms) |
| Crypto, uptrend | +$248.20 vs +$358.38 (underperforms) |
| Crypto, downtrend | -$134.72 vs +$250.23 (underperforms) |

Alternate-rule test (stocks): rule 1 (close above bar 3's high) improves downtrend results
to +$135.47 (beats benchmark) but hurts uptrends; rule 2 degrades performance. Bulkowski's
verdict: underperforms — look elsewhere unless applying rule 1 in downtrends.

## Trading Tactics

- Bulkowski recommends against trading the base pattern; it underperforms the benchmark.
- If traded, add alternate rule 1 (bar 4 closes above bar 3's high) in downtrends only, where
  it beats the benchmark; skip alternate rule 2.
- Wait for a breakout beyond the four-bar range; place the stop just beyond the opposite
  extreme.

## Pine Notes

- Feasibility: **easy**. Pure four-bar OHLC comparison — no pivots. Detection completes on
  bar 4; fire the signal on the confirming breakout close.
- Suggested inputs: alternate rule 1 toggle (R4), alternate rule 2 toggle (R5, default off),
  entry side, target multiple (default 2x height), stop offset.
- Symmetric with the bearish turn-key — share one parameterized (mirror-flag) implementation.
