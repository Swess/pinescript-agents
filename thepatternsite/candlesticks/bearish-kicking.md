---
id: bearish-kicking
name: Bearish kicking
aliases: []
category: candlestick
type: reversal
direction: bearish
bars: {min: 2, typical: 2}
confirmation: required
rank: {value: 102, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.51
  reversal_rate: 0.54
  frequency_rank: 102
source: https://thepatternsite.com/KickingBear.html
accessed: 2026-07-16
---

# Bearish kicking

## Overview

A rare two-candle pattern built from two marubozu candles separated by a gap: a white
marubozu followed by a black marubozu that gaps below it. Theory calls it a bearish
reversal, but Bulkowski's tests show it acts as a bearish reversal only 54% of the time
(near random). Frequency rank 102 of 103 (very rare) and overall performance rank 102.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | Two |
| Price trend | None required |
| First candle | White marubozu (tall white body, no shadows) |
| Second candle | Black marubozu (tall black body, no shadows) |
| Gap | A gap separates the two candles (second gaps below the first) |

## Detection Rules (computable)

- **R1 [B]** First candle white marubozu: `close[1] > open[1]` and `high[1] - close[1] <= 0.05*(high[1]-low[1])` and `open[1] - low[1] <= 0.05*(high[1]-low[1])` (shadow tolerance 5% of range [D]).
- **R2 [B]** Second candle black marubozu: `close < open` and `high - open <= 0.05*(high-low)` and `close - low <= 0.05*(high-low)` [D].
- **R3 [B]** Gap down between candles: `high < low[1]` (second candle entirely below the first).
- **R4 [D]** Both bodies tall: each body `>= 1.3 * ` average body of prior 20 bars (tallness default; page says "select tall candles").

## Confirmation & Breakout

Breakout occurs when price closes beyond the pattern's extreme. Downward (bearish) breakout
= `close < min(low, low[1])`; upward = `close > max(high, high[1])`. Because direction is
near random, wait for the close-based breakout before trading. The candle breaks out
downward most often.

## Targets & Stops

- Height-based target: `height = max(high, high[1]) - min(low, low[1])`;
  down target = downward breakout price − height (met ~51% in the best configuration) [B].
- Stop: above `max(high, high[1])` for shorts [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Bearish reversal 54% (near random) |
| Overall performance rank | 102 of 103 (1 = best) |
| Frequency rank | 102 (very rare — 116 found in 4.7M candles) |
| Best % meeting target | 51% (bull market, down breakout) |
| Best avg 10-day move | +3.90% (bull market, up breakout) |
| Best 10-day performance rank | 35 (bull market, up breakout) |

Composed of two marubozu candles with a gap — extremely rare. Poor performance; Bulkowski
advises not spending much time on it. Breaks out downward most often.

## Trading Tactics

- Breaks out downward most often — trade in the breakout direction.
- Select tall candles for the best performance.
- Volume gives performance clues.

## Pine Notes

- Feasibility: **easy**. Pure OHLC comparisons on two bars plus a gap test; no pivots.
- Marubozu detection needs a shadow-tolerance input (default 5% of range) since real bars
  rarely have exactly zero shadow.
- Suggested inputs: shadow tolerance, tall-body multiplier, breakout confirmation toggle.
- Signal fires on close of the second candle; use `barstate.isconfirmed` for alerts.
- So rare it will seldom trigger on liquid instruments.
