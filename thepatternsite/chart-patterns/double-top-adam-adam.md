---
id: double-top-adam-adam
name: Adam & Adam Double Top
aliases: [AADT]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 10, typical: 40}
confirmation: required
rank: {value: 19, of: 36}
stats:
  break_even_failure_rate: 0.25
  avg_move: 0.15
  throwback_rate: 0.64
  pct_meeting_target: 0.64
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/aadt.html
accessed: 2026-07-16
---

# Adam & Adam Double Top

## Overview

Two narrow, pointed peaks ("Adam" tops, inverted V's) at roughly the same price level,
separated by a valley, appearing after an uptrend. It is a bearish reversal but is **not
valid until price confirms** by closing below the valley between the two peaks. Unconfirmed
twin peaks fail (price rises instead) 60% of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading into the pattern |
| Shape | Two distinct, similar-looking tops; Adam tops are narrow inverted V's, often twin spikes |
| Valley | Drop between the tops should measure at least 10% (allow exceptions) |
| Top price | Variation between peaks small, usually less than 3%; both peak near the same price |
| Separation | Twin peaks usually several weeks apart |
| Confirmation | Price closes below the valley between the two peaks |
| Volume | Usually higher on the left peak than the right; trends downward |

## Detection Rules (computable)

Definitions: `peak1`, `peak2` = swing highs via `ta.pivothigh(h, r)`; `valley` = lowest
low strictly between the two peaks.

- **R1 [B]** Prior trend up: `close` at `peak1` above `close` `N` bars earlier (default `N = 20` [D]).
- **R2 [D]** Peaks are narrow/V-shaped (Adam): width at `1%` below the high spans ≤ 3 bars (default, adjustable).
- **R3 [B]** Peak prices nearly equal: `abs(high_p1 - high_p2) / min(high_p1, high_p2) <= 0.03` (Bulkowski "less than 3%").
- **R4 [B]** Valley drop between peaks ≥ 10%: `(high_p1 - valley_low) / high_p1 >= 0.10` (allow exceptions).
- **R5 [D]** Peak separation: `10 <= (bar_p2 - bar_p1) <= 60` ("several weeks apart"; bounds are defaults).
- **R6 [B]** Pattern valid only on confirmation (see below); before that, treat as potential only.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < valley_low` (a close below the
lowest valley between the two peaks). Without confirmation there is a **60%** chance price
continues higher without confirming — do not short the twin peaks alone.

## Targets & Stops

- Target (measure rule): `target = valley_low - 0.64 * (highest_peak_high - valley_low)`
  — height (highest peak to lowest valley) times the 64% percentage-meeting-target, subtracted
  from the breakout/valley price.
- Stop: a few cents above the highest peak; if too far, use a volatility stop.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 19 of 36 (1 = best) |
| Break-even failure rate | 25% |
| Average decline | 15% |
| Pullback rate | 64% |
| % meeting price target | 64% |

Based on 1,114 perfect trades. Notable: high-velocity moves into the pattern tend to
produce high-velocity moves after breakout. A small rise into the top yields a small
decline. Long-term trends into the pattern produce the smallest post-breakout declines.
Breakouts in the highest third of the yearly range perform worst. Pullbacks hurt
performance.

## Trading Tactics

- Wait for confirmation (close below the valley) before shorting.
- Place the stop just above the higher peak (or a volatility stop).
- Prefer patterns with a high-velocity run-up and shorter-term (not long) prior trend.
- Avoid the highest third of the yearly range for the breakout.
- If the double top appears after a long-term decline, confirmation may signal the decline is near its end.

## Pine Notes

- Feasibility: **moderate**. Requires pivot-high detection (`ta.pivothigh(len, len)`), which
  confirms a peak only `len` bars later — detection lags; do not anchor signals to the peak bar or the script repaints.
- Suggested inputs: pivot length, peak tolerance % (R3), min valley drop % (R4), min/max
  peak separation (R5), trend-lookback N (R1), target multiplier (0.64).
- Track candidate peaks in `var` arrays/UDTs; confirm (and fire the alert) only on the bar
  where `close < valley_low` first occurs.
- The "Adam = narrow V" test (R2) is the most subjective; ship it as an optional filter.
