---
id: black-long-day
name: Black long day
aliases: [Long black day]
category: candlestick
type: continuation
direction: bearish
bars: {min: 1, typical: 1}
confirmation: recommended
rank: {value: 19, of: 103}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: 0.62
  reversal_rate: null
  frequency_rank: 9
source: https://thepatternsite.com/LongBlack.html
accessed: 2026-07-16
---

# Black long day

## Overview

A single tall black candle — a body about three times the average recent body height, with
shadows shorter than the body. Acts as a continuation of the existing price trend 53% of the
time (matching theory). Common (frequency rank 9) and strong overall performance rank of 19.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Number of lines | One |
| Price trend | None required |
| Body | Tall black body — "three times the average body height of recent candles" |
| Shadows | Shorter than the body |

## Detection Rules (computable)

- **R1 [B]** Black candle: `close < open`.
- **R2 [B]** Tall body: `body >= 3 * avgBody` where `body = open - close` and `avgBody = ta.sma(abs(close-open), 20)` (Bulkowski: 3x recent average; 20-bar window default [D]).
- **R3 [B]** Upper shadow shorter than body: `(high - open) < body`.
- **R4 [B]** Lower shadow shorter than body: `(close - low) < body`.

## Confirmation & Breakout

Breakout = close beyond the candle's extreme. Upward = `close > high`; downward =
`close < low`. Acts as a continuation, so a downward breakout following a downtrend (or
upward following an uptrend) is expected.

## Targets & Stops

- Height target: `height = high - low`; up target = breakout price + height, down target =
  breakout price − height (met ~62% best configuration) [B].
- Stop: opposite extreme of the candle [D].

## Performance

| Metric | Value |
|---|---|
| Tested behavior | Continuation 53% of the time |
| Overall performance rank | 19 of 103 (1 = best) |
| Frequency rank | 9 (very common) |
| Best % meeting target | 62% (bull market, up breakout) |
| Best avg 10-day move | +6.3% (bear market, up breakout) |
| Best 10-day performance rank | 8 (bull market, up breakout) |

Behavior is "all over the place" but overall rank holds up well at 19. Upward breakouts that
reverse a downtrend tend to do well.

## Trading Tactics

- Best performance when the candle appears within a third of the yearly low.
- Upward breakouts that reverse a downtrend tend to do well.
- Within a third of the yearly low it acts often as a continuation of the primary trend.

## Pine Notes

- Feasibility: **easy**. Single-bar body/shadow ratios; needs a rolling average body length.
- The "3x average body" threshold is the key tunable; expose window (default 20) and
  multiplier (default 3.0) as inputs.
- Suggested inputs: tall-body multiplier, average window, yearly-low filter, breakout toggle.
- Signal fires on the candle's own close (`barstate.isconfirmed`).
