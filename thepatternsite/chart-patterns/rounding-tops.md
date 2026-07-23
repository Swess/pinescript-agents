---
id: rounding-tops
name: Rounding tops
aliases: [rounded top]
category: chart-pattern
type: either
direction: either
bars: {min: 40, typical: 90}
confirmation: required
rank: {value: 2, of: 39}
stats:
  break_even_failure_rate: 0.09
  avg_move: 0.55
  throwback_rate: 0.63
  pct_meeting_target: 0.58
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/roundingtop.html
accessed: 2026-07-16
---

# Rounding tops

## Overview

A rounding top is a gentle inverted-bowl (half-moon) turn in price, large enough to appear on
the weekly or daily chart, forming after an uptrend. The breakout can be either direction: a
close above the highest high (upward) or a close below the lower rim (downward). Upward
breakouts are exceptional performers.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Time frame | Weekly or daily chart |
| Price trend | Upward leading into the pattern |
| Even ends | The two rims of the inverted bowl bottom near the same price; 58% of the time the right end is slightly higher than the start |
| Rounded turn | Prices form a gentle curve, a half-moon shape |
| Breakout | Up: close above the highest high. Down: close below the lower of the two rims (the lowest low in the pattern) |

## Detection Rules (computable)

Definitions: `peak` = highest high of the turn; `left_rim`, `right_rim` = the low at each
edge of the inverted bowl; `pattern_low` = min(left_rim, right_rim); window `W`.

- **R1 [B]** Prior trend up into the pattern: `close[left_rim] > close[left_rim + N]` (default `N = 20` [D]).
- **R2 [D]** Inverted-bowl shape: fit a quadratic to `high` over `W` bars with a downward-opening curve (negative 2nd-difference), or require `peak` near the middle third of `W`.
- **R3 [D]** Gentle/rounded: no single bar-to-bar step exceeds a fraction of total height (default: each step `<= 15%` of `(peak - pattern_low)`), so the turn is smooth, not spiky.
- **R4 [B]** Even rims: `abs(left_rim - right_rim) / min(left_rim, right_rim) <= 0.05` (rims near the same price; right slightly higher 58% of the time) [D tolerance].
- **R5 [B]** Breakout: `close > peak` (upward) or `close < pattern_low` (downward).

## Confirmation & Breakout

Breakout can be **either direction**. Upward: `close > peak` (highest high). Downward:
`close < pattern_low` (lower rim). For aggressive traders, an early buy triggers when price
retraces 32% of the top's height from the right rim: `buy = right_rim + 0.32 * (peak - right_rim)`.

## Targets & Stops

- Measure rule: `height = peak - right_rim`. Upward: `target = peak + 0.58 * height`.
  Downward: `target = right_rim - 0.14 * height` (downward targets are rarely met — 14%).
- The two rims are support areas. Tall patterns and heavy breakout volume improve performance.
- When the right rim is above the left, the pattern underperforms. Throwbacks/pullbacks hurt.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 2 of 39 | 3 of 36 |
| Break-even failure rate | 9% | 20% |
| Average move | 55% rise | 17% decline |
| Throwback / pullback rate | 63% | 58% |
| % meeting price target | 58% | 14% |

Statistics based on more than 950 perfect trades (bull market). Tall patterns beat short ones;
heavy breakout volume helps. A right rim above the left rim underperforms. Breakouts within a
third of the yearly low perform slightly better (only 6 samples).

## Trading Tactics

- Use the weekly or daily chart to spot the half-moon shape.
- Enter on the confirming breakout (up above the peak, down below the lower rim).
- Aggressive traders can buy on the 32%-retrace-of-height signal from the right rim.
- Prefer tall patterns with heavy breakout volume; be wary when the right rim sits above the left.
- The rims act as support; throwbacks and pullbacks hurt performance.

## Pine Notes

- Feasibility: **hard**. The inverted-bowl shape (R2/R3) is subjective — approximate with a
  rolling quadratic fit / curvature sign over a long window.
- Suggested inputs: window `W`, max per-bar step % (R3), rim-evenness tolerance (R4), trend
  lookback `N`, target multipliers (0.58 up / 0.14 down), 32%-retrace buy toggle.
- The confirming breakout closes (R5) are the clean, non-repainting triggers; anchor signals
  there rather than to the shape detection.
- Timeframe caveat: statistics assume long (multi-month) formations — best on weekly/daily.
