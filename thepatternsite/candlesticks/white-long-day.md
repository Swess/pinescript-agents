---
id: white-long-day
name: White long day
aliases: [Long white day]
category: candlestick
type: continuation
direction: bullish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 53, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.60
  reversal_rate: null
  frequency_rank: 10
source: https://thepatternsite.com/LongWhiteDay.html
accessed: 2026-07-16
---

# White long day

## Overview

A single tall white candle with shadows shorter than the body and a body at least three
times the average body height over the prior two-to-three weeks. Acts as a continuation of
the existing trend 58% of the time. Very common (frequency rank 10), mid-list overall
performance rank 53.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | None required |
| Body | Tall white body — at least three times the average body height over the last 2–3 weeks |
| Shadows | Shorter than the body |

## Detection Rules (computable)

- **R1 [B]** White candle: `close > open`.
- **R2 [B]** Tall body: `body >= 3 * avgBody` where `body = close - open` and `avgBody = ta.sma(abs(close-open), 15)` (Bulkowski: 3x average over last 2–3 weeks ≈ 15 bars [D]).
- **R3 [B]** Upper shadow shorter than body: `(high - close) < body`.
- **R4 [B]** Lower shadow shorter than body: `(open - low) < body`.

## Confirmation & Breakout

Breakout = close beyond the candle's extreme. Upward = `close > high`; downward =
`close < low`. As a continuation candle, an upward breakout following an uptrend is expected.

## Targets & Stops

- Height target: `height = high - low`; target = breakout price ± height (met ~60% best
  configuration) [B].
- Stop: opposite extreme of the candle [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Continuation 58% of the time |
| Overall performance rank | 53 of 103 (1 = best) |
| Frequency rank | 10 (very common) |
| Best % meeting target | 60% (bear market, down breakout) |
| Best avg 10-day move | −6.21% (bear market, down breakout) |
| Best 10-day performance rank | 16 (bear market, down breakout) |

Best move comes from a downward breakout in a bear market (−6.21%, rank 16), i.e. reversals
in bear markets outperform.

## Trading Tactics

- Best performance when the candle appears within a third of the yearly low.
- Taller-than-median long white days move almost twice as far after the breakout.
- Breakouts below the 50-trading-day moving average tend to outperform.

## Pine Notes

- Feasibility: **easy**. Single-bar body/shadow ratios plus a rolling average body length.
- Threshold "3x average over 2–3 weeks" → expose window (default 15) and multiplier (3.0).
- Suggested inputs: tall-body multiplier, average window, yearly-low filter, below-50-SMA
  filter, breakout toggle.
- Signal fires on the candle's own close (`barstate.isconfirmed`).
