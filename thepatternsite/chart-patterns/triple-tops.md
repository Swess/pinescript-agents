---
id: triple-tops
name: Triple tops
aliases: []
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 20, typical: 60}
confirmation: required
rank: {value: 24, of: 36}
stats:
  break_even_failure_rate: 0.25
  avg_move: 0.14
  throwback_rate: 0.66
  pct_meeting_target: 0.49
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/tt.html
accessed: 2026-07-16
---

# Triple tops

## Overview

A triple top is three peaks near the same price, separated by two valleys, appearing after an
uptrend. It is a bearish reversal that becomes valid only when price closes below the lowest
valley in the pattern. Performance is toward the bottom of the list — a fairly high failure
rate and a meager average decline.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Upward leading into the pattern |
| Shape | Three peaks near the same price with a downward breakout |
| Middle peak | Sometimes the middle peak is priced marginally below the other two |
| Volume | Trends downward 62% of the time; usually high beneath each peak |
| Market | More triple tops appear in bear markets than in bull markets |
| Confirmation | Price closes below the lowest valley in the pattern |

## Detection Rules (computable)

Definitions: `peak1/2/3` = swing highs via `ta.pivothigh(r, r)`; `valleyA` = lowest low
between peak1 and peak3 (the breakout level).

- **R1 [B]** Prior trend up into the pattern: `close > close[N]` at pattern start (default `N = 20` [D]).
- **R2 [B]** Three peaks near the same price: `(max(high_p1, high_p2, high_p3) - min(...)) / min(...) <= 0.05` (small variation; default 5% [D]). The middle peak may be marginally lower.
- **R3 [D]** Peaks distinct: separated by at least `K` bars each (default `K = 5`) with an intervening valley that dips meaningfully below the peaks (default ≥ 5% of price).
- **R4 [B]** Confirmation: `close < valleyA` (close below the lowest valley between the peaks).
- **R5 [B]** Best when the last peak is below the middle peak: `high_p3 < high_p2` (a lower top suggests weakness → stronger decline) — quality filter.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < valleyA` (the lowest valley in the
pattern). Wait for the confirming close before shorting. Price must have something to reverse:
a small rise leading into the pattern implies only a small decline afterward.

## Targets & Stops

- Measure rule: `height = max(high_p1, high_p2, high_p3) - valleyA`; `target = valleyA - 0.49 * height`
  (subtract from the lowest valley; only 49% meet target).
- A high-velocity rise into the pattern often yields a larger post-breakout decline.
- Pullbacks hurt post-breakout performance.

## Performance

| Metric | Value (bull market) |
|---|---|
| Overall rank | 24 of 36 (1 = best) |
| Break-even failure rate | 25% |
| Average decline | 14% |
| Pullback rate | 66% |
| % meeting price target | 49% |

Statistics based on 1,964 perfect trades. Best performers: last peak below the middle peak;
high-velocity rise into the pattern; breakout in the lowest third of the yearly price range.
A downward volume trend helps only marginally (one percentage point). More common in bear
markets.

## Trading Tactics

- Wait for the confirming close below the lowest valley before shorting.
- Prefer patterns where the last peak is lower than the middle peak (sign of weakness).
- Expect a larger decline after a steep/high-velocity rise into the pattern.
- Favor breakouts in the lowest third of the yearly range; pullbacks hurt performance.
- Temper expectations: average decline is small and the failure rate is relatively high.

## Pine Notes

- Feasibility: **moderate**. Needs three confirmed pivot highs plus the intervening valley;
  pivots lag by the lookback and can repaint if anchored to the pivot bar.
- Suggested inputs: pivot length, top-tolerance % (R2), min peak separation `K` (R3), min
  valley-dip %, trend lookback `N`, target multiplier (0.49), "last peak below middle" toggle (R5).
- Track candidate peaks in `var` arrays/UDTs; fire the alert only on the bar where
  `close < valleyA` first occurs (non-repainting confirmation).
- Subjective element: what counts as a "distinct peak" — expose pivot length and separation.
