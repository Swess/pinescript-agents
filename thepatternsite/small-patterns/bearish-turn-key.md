---
id: bearish-turn-key
name: Bearish turn-key
aliases: []
category: small-pattern
type: reversal
direction: bearish
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
source: https://thepatternsite.com/TurnkeyBear.html
accessed: 2026-07-16
---

# Bearish turn-key

## Overview

A four-bar reversal in which the highs zig-zag while the closes step down, then up: the
pattern is supposed to be bearish and breaks out downward 71% of the time in stocks.
Bulkowski's tests (upward breakouts only, for consistency with other small patterns) show
it loses money on average in every configuration — he explicitly rates it a pattern to
avoid.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | Four price bars |
| Bar 1 | Any price bar |
| Bar 2 | Higher high (above bar 1) but closes below bar 1's close |
| Bar 3 | Lower low (below bar 2's low), closes above bar 2's close but stays below bar 1's close |
| Bar 4 | Higher high (above bar 3) but closes below bar 3's close |
| Alternate (optional) | Bar 4 also closes below the prior day's low and below bar 2's close (worsens performance in tests) |
| Breakout | Downward 71% of the time in stocks |

## Detection Rules (computable)

Bars indexed most-recent-first: bar 4 = `[0]`, bar 3 = `[1]`, bar 2 = `[2]`, bar 1 = `[3]`.

- **R1 [B]** Bar 2 higher high, lower close: `high[2] > high[3] and close[2] < close[3]`.
- **R2 [B]** Bar 3 lower low, close between: `low[1] < low[2] and close[1] > close[2] and close[1] < close[3]`.
- **R3 [B]** Bar 4 higher high, lower close: `high[0] > high[1] and close[0] < close[1]`.
- **R4 [D]** Alternate filter (off by default; Bulkowski notes it hurts results): `close[0] < low[1] and close[0] < close[2]`.

## Confirmation & Breakout

Breakout is downward 71% of the time by definition. Bulkowski's test entered instead on an
**upward** breakout with a buy stop one tick above the highest bar of the four (top of the
pattern); the loss exit was one tick below the lowest bar. A close/trade beyond either
extreme of the four-bar range confirms the direction.

## Targets & Stops

- Height: `height = highest(high, 4) - lowest(low, 4)` over the four bars.
- Bulkowski's target exit (up test): `target = highest(high, 4) + 2 * height` (twice the height added to the top).
- Stop: one tick below the lowest bar of the pattern (`lowest(low, 4)`).

## Performance

No classic break-even/average-move statistics are published; performance is reported as
dollar profit/loss per trade versus a benchmark (bull market, upward-breakout test).

| Market / Test | Result vs benchmark |
|---|---|
| Stocks, uptrend | +$46.68 vs +$88.58 (underperforms) |
| Stocks, downtrend | +$88.73 vs +$100.27 (underperforms) |
| ETFs, uptrend | -$2.34 vs +$85.22 (underperforms) |
| ETFs, downtrend | +$55.81 vs +$83.76 (underperforms) |

Win/loss ratios (~37-42%) trail the benchmark in every case. About one-tenth as many trades
as the benchmark. Too rare in cryptocurrency to report. Bulkowski's verdict: avoid trading
this pattern.

## Trading Tactics

- Bulkowski recommends against trading this pattern — it underperforms the benchmark in
  stocks and ETFs regardless of the inbound trend.
- If traded anyway, wait for a breakout beyond the four-bar range and place the stop just
  beyond the opposite extreme.

## Pine Notes

- Feasibility: **easy**. Pure four-bar OHLC comparison — no pivots, no lag beyond the fourth
  bar. Detection completes on bar 4; fire the signal on the confirming breakout close.
- Suggested inputs: enable/disable the alternate bar-4 filter (R4), entry side (down per
  definition vs up per Bulkowski's test), target multiple (default 2x height), stop offset.
- Session/timeframe: defined on daily bars; the "higher high / lower close" structure is
  scale-agnostic but was tested on daily data.
