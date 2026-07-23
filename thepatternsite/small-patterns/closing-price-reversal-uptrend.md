---
id: closing-price-reversal-uptrend
name: Closing Price Reversal, Uptrend
aliases: [CPRU]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 23, of: 23}
stats:
  break_even_failure_rate: 0.52
  avg_move: 0.06
  throwback_rate: null
  pct_meeting_target: 0.64
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/CPRU.html
accessed: 2026-07-16
---

# Closing Price Reversal, Uptrend

## Overview

A one-bar pattern (that references the prior bar's close) appearing in a short-term
uptrend. The bar opens near its high and closes near its low, below the prior day's close,
signalling a potential downward reversal. Failure rates are high — with 52% failing to
drop more than 5% in a bull market, the reversal theme is unreliable.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | One bar, but uses the closing price of the prior bar |
| Trend | Short-term uptrend leading into the pattern |
| Open | Open must be within 25% of the intraday high |
| Close | Close must be within 25% of the intraday low AND below the prior day's close |

## Detection Rules (computable)

Definitions: `range = high - low`.

- **R1 [B]** Prior trend up: `close > close[5]` (Bulkowski used a 5-day linear-regression uptrend; default `N = 5` [D]).
- **R2 [B]** Open near high: `(high - open) / range <= 0.25`.
- **R3 [B]** Close near low: `(close - low) / range <= 0.25`.
- **R4 [B]** Close below prior close: `close < close[1]`.

## Confirmation & Breakout

Breakout is assumed **downward**. Bulkowski's tactic is to sell short at the open of the
next bar; there is no separate close-below trigger. Break-even failure rate is 52% (bull),
so confirmation via a stop below the pattern low is prudent before committing.

## Targets & Stops

- Target (measure rule): `height = high - low`; `target = low - height` — met 64% of the
  time (bull), 70% (bear).
- Stop: a penny above the top of the pattern (`high + tick` [B], from the pattern-stop test).

## Performance

| Metric | Bull | Bear |
|---|---|---|
| 5% failure rate | 52% | 34% |
| Average drop | 6% | 14% |
| Measure-rule success | 64% | 70% |

Overall rank 23 of 23 (worst) among small patterns with downward breakouts in a bull
market. Trading tests were net-losing in both markets; a pattern stop reduced average loss
size but hurt the win rate and still could not make the pattern profitable. In height-exit
target tests, however, CPRU roughly doubled the stock benchmark ($64.48 vs $32.55) and beat
the benchmark in ETFs and cryptocurrencies.

## Trading Tactics

- Treat the reversal signal skeptically — over half fail to move 5% in a bull market.
- If trading it, short at the next open; cover at the measure-rule target (height below the low).
- Use a stop a penny above the pattern high to cap losses.

## Pine Notes

- Feasibility: **easy**. Single-bar pattern with only current and prior-bar OHLC — no pivot
  detection, no repaint risk; the signal is known at the close of the pattern bar.
- Suggested inputs: uptrend lookback `N` (R1), open/close proximity thresholds (R2/R3,
  default 25%), target multiplier.
- The "short-term uptrend" test is the only loosely-defined criterion; a simple
  `close > close[N]` or rising linear regression over 5 bars is a reasonable proxy.
