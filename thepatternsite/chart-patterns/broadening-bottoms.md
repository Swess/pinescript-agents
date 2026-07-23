---
id: broadening-bottoms
name: Broadening Bottoms
aliases: []
category: chart-pattern
type: either
direction: either
bars: {min: 15, typical: 50}
confirmation: required
rank: {value: 15, of: 39}
stats:
  break_even_failure_rate: 0.16
  avg_move: 0.45
  throwback_rate: 0.69
  pct_meeting_target: 0.65
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/broadb.html
accessed: 2026-07-16
---

# Broadening Bottoms

## Overview

A megaphone shape after a downtrend: the top trendline slopes up and the bottom trendline
slopes down, so price makes higher peaks and lower valleys. It appears often but ranks
mid-list. Breakout can occur in **any direction (upward 60% of the time)**. Frontmatter
stats are for the upward-breakout case; both directions are detailed under Performance.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Price trend | Downward leading into the pattern (trend-start close above the pattern-start close) |
| Shape | Higher peaks and lower valleys — a megaphone |
| Trendlines | Top line slopes up, bottom line slopes down |
| Touches | At least five touches total; three peaks or three valleys touch one line with two+ touches of the other; ideally the middle of three touches actually touches |
| White space | Price should cross the pattern side to side, filling the area with movement |
| Volume | Upward 65% (up breakouts) to 67% (down breakouts) of the time |
| Breakout | Any direction; upward 60% of the time |

## Detection Rules (computable)

Definitions: fit an upper trendline through swing highs and a lower trendline through swing
lows using `ta.pivothigh`/`ta.pivotlow`.

- **R1 [B]** Prior trend down: `close` at pattern start below `close` at trend start (default lookback `N = 20` [D]).
- **R2 [B]** Top slopes up, bottom slopes down: `slope_upper > 0` and `slope_lower < 0` (diverging megaphone).
- **R3 [B]** At least 5 touches total: `>=3` on one line and `>=2` on the other.
- **R4 [D]** Touch tolerance: a pivot "touches" if within `0.5%` of the trendline (default, adjustable).
- **R5 [D]** White-space fill: price alternates between the two trendlines (at least one full top-to-bottom traverse) rather than tracking a channel.
- **R6 [B]** Pattern valid only on breakout close outside a trendline / pattern extreme (see below).

## Confirmation & Breakout

Breakout occurs when price pierces a trendline or closes beyond the top/bottom of the
pattern. Breakout is **upward 60%** of the time. Partial declines predict an upward
breakout and work **73%** of the time; partial rises work only **53%** of the time.

## Targets & Stops

- Upward breakout: `target = peak_high + 0.65 * (peak_high - valley_low)` (or add full
  height to the pattern top, which works 65% of the time).
- Downward breakout: `target = valley_low - 0.41 * (peak_high - valley_low)` (or subtract
  full height from the pattern bottom, which works 41% of the time).
- Height = highest peak (A) minus lowest valley (B).
- Intraformation / stop: buy when price rebounds off the lower trendline; short at the top
  as price heads down.

## Performance

| Metric | Up breakout | Down breakout |
|---|---|---|
| Overall rank | 15 of 39 | 23 of 36 |
| Break-even failure rate | 16% | 26% |
| Average move | 45% rise | 15% decline |
| Throwback / pullback rate | 69% | 62% |
| % meeting price target | 65% | 41% |

Based on 599 up-breakout and 405 down-breakout perfect trades. Notable: best up-breakout
performance comes from an intermediate-term (3-6 month) decline into the pattern. Both
directions perform best when the breakout is within a third of the yearly low. Both do best
when volume trends upward inside the pattern. Throwbacks and pullbacks both hurt
performance. The partial decline is the pattern's most reliable predictive feature.

## Trading Tactics

- Wait for a confirmed breakout (trendline pierce or close beyond the pattern extreme).
- Use a partial decline (works 73%) as an upward-breakout signal.
- Intraformation: buy the third touch of the lower trendline as price rises; short the top as price falls.
- Prefer breakouts within a third of the yearly low and an upward volume trend.
- Ensure price fills the pattern (crosses side to side) — a down-then-up channel is not a broadening bottom.

## Pine Notes

- Feasibility: **hard**. Requires fitting one up-sloping and one down-sloping trendline and
  validating touch counts and white-space fill. Trendline fits and breakout lag by the pivot
  length (`ta.pivothigh/low(len, len)`).
- Suggested inputs: pivot length, touch tolerance % (R4), min touches (R3), trend-lookback N,
  up/down target multipliers (0.65 / 0.41), breakout confirmation mode.
- The white-space / channel-rejection test (R5) is the most subjective — it is the key
  identification pitfall Bulkowski highlights; ship it as an adjustable filter.
- Direction is ambiguous until breakout (upward 60% likely) — model both outcomes and fire
  on the bar of the first close/pierce outside the pattern.
