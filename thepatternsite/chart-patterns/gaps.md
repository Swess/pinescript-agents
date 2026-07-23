---
id: gaps
name: Gaps
aliases: [price gaps, area gap, common gap, pattern gap, breakaway gap, continuation gap, measuring gap, runaway gap, exhaustion gap, ex-dividend gap]
category: chart-pattern
type: either
direction: either
bars: {min: 1, typical: 1}
confirmation: none
rank: null
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/gaps.html
accessed: 2026-07-16
---

# Gaps

## Overview

A gap appears when today's low is above yesterday's high (bullish/upward gap) or
today's high is below yesterday's low (bearish/downward gap). Bulkowski classifies
them as area (common/pattern), breakaway, continuation (measuring/runaway),
ex-dividend, and exhaustion gaps. Gaps mark support/resistance zones; as a tradeable
signal they usually come too late, but a chart-pattern breakout that gaps improves
performance two-thirds of the time.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Gap definition | Today's high below yesterday's low (bearish gap) or today's low above yesterday's high (bullish gap) |
| Area / common / pattern gap | Occurs in congestion (trendless markets); closes quickly, usually in a few days; volume may be high on gap day but normalizes in a day or two; few new highs/lows follow; distinctive price curl as the gap closes |
| Breakaway gap | Starts a new trend, often on leaving a consolidation area; high volume on gap day, which can continue several days; price trends for several days |
| Continuation / measuring / runaway gap | Occurs during a straight-line advance or decline; price makes new highs/lows without closing the gap; volume usually high |
| Ex-dividend gap | Caused by a dividend distribution; price drops by the dividend amount; usually closed by the end of the trading day |
| Exhaustion gap | At the end of a trend, on high volume; usually not followed by new highs/lows; may be unusually tall; price consolidates or reverses after; commonly follows continuation gaps; usually closes within a week |

## Detection Rules (computable)

Definitions: `gap_up = low > high[1]`, `gap_dn = high < low[1]`;
`gap_size = gap_up ? low - high[1] : low[1] - high`; a gap is *closed* when subsequent
price fully fills it (`low <= high_at_gap[1]` for up gaps, `high >= low_at_gap[1]` for
down gaps).

- **R1 [B]** Gap exists: `gap_up` or `gap_dn` as defined above.
- **R2 [D]** Area gap: gap occurs in congestion — `abs(close - close[15]) / close[15] < 0.03` (trendless lookback, default 15 bars / 3%) — and no volume-trend requirement.
- **R3 [D]** Breakaway gap: gap leaves a consolidation — congestion test (R2 lookback) true *before* the gap — with gap-day `volume > 1.5 * ta.sma(volume, 30)` (high volume, default multiplier).
- **R4 [D]** Continuation gap: gap occurs mid-trend — `abs(close - close[15]) / close[15] >= 0.05` in the gap direction (default) — with `volume > 1.5 * ta.sma(volume, 30)` and price making new highs/lows after without closing the gap.
- **R5 [D]** Exhaustion gap: gap after an extended trend (R4 trend test) with unusually tall gap (`gap_size > 2 * ta.sma(range, 20)` default) and/or gap closed within 5–7 bars; no new extreme follows.
- **R6 [D]** Ex-dividend gap: exclude by ignoring downward gaps on known ex-dividend dates (not detectable from OHLCV alone).

Note: gap *type* is only knowable with certainty in hindsight (whether new highs/lows
follow, how fast it closes); R2–R5 are heuristic defaults.

## Confirmation & Breakout

No confirmation event — a gap is a one-bar event, classified by context. Practical
classification confirms over the following bars: quick close (days) → area/exhaustion;
continued trend on volume → breakaway/continuation. Percentage of gaps closing within
a week (bull market): area 85% up / 90% down; breakaway 1% / 1%; continuation 8% / 15%;
exhaustion 60% / 66%.

## Targets & Stops

- Measure rule (continuation gaps): the gap marks roughly the halfway point of the move
  — by price, the gap middle sits 50–52% along the very short-term trend. Formula:
  `target = gap_center + (gap_center - swing_low)` for up moves (measure from the swing
  low/high to the gap center and project the same distance beyond).
- Stop: place a stop a few cents below the gap (upward breakouts) or above the gap
  (downward breakouts) — gaps are zones of weak support/resistance.

## Performance

| Gap type | Close within a week (up gaps) | Close within a week (down gaps) | Median time to close (up) | Median time to close (down) |
|---|---|---|---|---|
| Area/common/pattern | 85% | 90% | 3–4 days | 3–4 days |
| Breakaway | 1% | 1% | 89 days | 84 days |
| Continuation/measuring/runaway | 8% | 15% | 45 days | 25 days |
| Exhaustion | 60% | 66% | 6 days | 5 days |

Based on over 1,100 samples, bull market. Notable: a gap on the day of a chart-pattern
breakout suggests better pattern performance two out of three times, regardless of
breakout direction.

## Trading Tactics

- Area and ex-dividend gaps close too quickly to be of trading significance.
- Breakaway gaps: trade in the trend direction on high volume; best performance near
  the yearly high in a bull market (near the yearly low in a bear market).
- Continuation gaps: use the half-way measure rule to project the remaining move.
- Exhaustion gaps: an unusually tall gap may mark the end of the trend immediately or
  within days; violent reversals can follow — consider a position in the new direction.
- If you hold a stock and a chart pattern breaks out with a gap, hold on for a strong
  move.
- Use the gap edge as a stop location (below up gaps, above down gaps).

## Pine Notes

- Feasibility: gap *detection* is **easy** (`low > high[1]` / `high < low[1]`); gap
  *classification* is **hard** because Bulkowski's types are defined largely by what
  happens afterward — real-time labels will be provisional and may effectively repaint
  if re-labeled.
- Suggested approach: detect and box every gap (`box.new` from `high[1]` to `low`),
  track open/closed state, and label type heuristically from trend context (R2–R5)
  with a "provisional" flag until N bars pass.
- Suggested inputs: congestion lookback/threshold, trend threshold, volume multiplier,
  tall-gap multiplier, bars-to-close window (7), max boxes kept (respect the 64-object
  drawing limit — prune closed gaps first).
- Ex-dividend gaps cannot be filtered from OHLCV alone; note the caveat for stock
  charts. On 24h futures (NQ/ES) daily gaps are rare and session-dependent — gap logic
  differs materially between cash-session and continuous charts.
