---
id: bump-and-run-reversal-tops
name: Bump-and-run reversal tops
aliases: [BARR top, bump-and-run formation, BARF]
category: chart-pattern
type: reversal
direction: bearish
bars: {min: 30, typical: 60}
confirmation: required
rank: {value: 3, of: 36}
stats:
  break_even_failure_rate: 0.14
  avg_move: 0.17
  throwback_rate: 0.64
  pct_meeting_target: 0.44
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/barrt.html
accessed: 2026-07-16
---

# Bump-and-Run Reversal Tops

## Overview

The bearish mirror of the BARR bottom: price climbs along a moderate 30–45 degree
trendline (lead-in phase), then accelerates up a steeper 45–60 degree slope on high
volume (bump phase), rounds over, and falls back to the original trendline before
plunging in a downhill run. Discovered by Bulkowski in 1996, it is an excellent performer
in both bull and bear markets, ranking 3 of 36 with a 17% average decline.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Arithmetic scale | Use arithmetic (not semi-log) charts — vertical distances are measured |
| Rising trendline | Trendline connecting valleys rises at 30 to 45 degrees (varies with scaling); avoid horizontal/near-horizontal and steep (over 60 degree) trendlines |
| Lead-in phase | Start of the pattern preceding the bump; price follows the rising trendline |
| Lead-in height | Tallest vertical distance in the first quarter of the pattern; at least $1, preferably $2+ (depends on stock price); the point is to find a narrow channel |
| Lead-in duration | At least a month, but be flexible |
| Bump phase | Price rises along a steeper 45–60 degree trendline on high volume, usually after a favorable event (earnings, upgrades); rounds over and returns to the 30-degree trendline |
| Bump height | Peak to the 30-degree trendline, vertically; at least twice the lead-in height (be flexible) |
| Downhill run | After returning to the trendline, price may form additional bumps or slide along it before plunging |
| Volume | High at pattern start, bump start, and the downward breakout |
| Confirmation | Price closes below the 30-degree trendline; without that close it is NOT a valid pattern |

## Detection Rules (computable)

Definitions: `trendline` = line fit across the rising valleys of the lead-in phase;
`leadin_height` = max vertical distance from price low to trendline in the first quarter
of the pattern; `bump_high` = highest high of the bump phase; `bump_height` =
`bump_high - trendline_at(bump_high_bar)`.

- **R1 [B]** Lead-in trendline rises at a moderate rate (30–45 degrees; not near-flat, not > 60 degrees): normalize as `%/bar` and require `min_rate <= rise_rate <= max_rate` (defaults `0.1%–0.5%/bar` [D]; angle depends on chart scaling — adjustable).
- **R2 [B]** Lead-in duration `>= 21` bars (at least a month, flexible).
- **R3 [B]** Lead-in channel is narrow: `leadin_height` small relative to price — default `leadin_height / close <= 0.05` [D] (Bulkowski's $1–$2 guidance is price-dependent).
- **R4 [B]** Bump rise is much steeper: bump-phase rise rate `>= 2x` the lead-in rise rate (proxy for 45–60 degrees [D]), typically on high volume.
- **R5 [B]** Bump height `>= 2 * leadin_height` (input multiplier, default 2.0, flexible).
- **R6 [B]** Rounded top: after `bump_high`, highs decline until price returns to the trendline (rounding is qualitative; require `>= 5` bars of falling swing highs [D]).
- **R7 [B]** Confirmation mandatory: `close < trendline_value` — no signal before this close.
- **R8 [B]** Optional volume filter: volume elevated (above its 30-bar average [D]) at pattern start, bump start, and breakout.

## Confirmation & Breakout

Breakout is **downward** by definition. Trigger: `close < trendline_value` — a close
below the 30-degree lead-in trendline. Bulkowski is explicit: wait for this confirmation
before trading; without it the pattern is invalid. Price may slide along the trendline or
form additional bumps first — 18% to 21% of patterns show dual bumps before the final
downward breakout.

## Targets & Stops

- Target (measure rule): the **bottom of the chart pattern** (the low where the pattern begins): `target = pattern_start_low`; met 44% of the time.
- Exit tactics for longs: a warning line parallel to the trendline, one lead-in height above it, marks entry into the sell zone; additional sell lines each lead-in height higher — sell when price touches a sell line (especially if the bump is narrow, not rounded), or when price rounds over and pierces a lower sell line.
- Stop: not explicitly specified; for shorts place above the bump's rounding-over highs [D].

## Performance

Bull market results (1,488 perfect trades):

| Metric | Value |
|---|---|
| Overall rank | 3 of 36 (1 = best) |
| Break-even failure rate | 14% |
| Average decline | 17% |
| Pullback rate | 64% |
| % meeting price target | 44% |

Notable: excellent performer in both bull and bear markets. Pullbacks (64%) hurt
performance. 18–21% form dual bumps. A busted BARR top (decline < 10% then a climb above
the pattern top) flips the signal bullish.

## Trading Tactics

- Sell holdings or short when price closes below the 30-degree trendline (mandatory confirmation).
- Use the warning line (one lead-in height above the trendline) to know the stock has entered the sell zone; stack sell lines each lead-in height apart and exit on a touch or on the round-over piercing a lower line.
- Target the pattern's starting low; only 44% get there, so consider partial profits earlier.
- Expect pullbacks (64%) — they hurt performance.
- Watch for dual bumps (18–21%): a second rise and round-over before the real breakout.
- Use arithmetic scale for all height measurements.

## Pine Notes

- Feasibility: **hard**. Same angle-to-rate translation problem as the BARR bottom —
  encode the 30–45/45–60 degree criteria as rise rates (%/bar) with adjustable inputs and
  document the scaling caveat.
- Suggested inputs: lead-in min bars (R2), lead-in rate band (R1), channel width %
  (R3), bump/lead-in rate ratio (R4), bump height multiplier (R5, default 2.0),
  round-over bars (R6), volume filter toggle (R8).
- Implementation sketch: fit the lead-in trendline from pivot lows; capture
  `leadin_height` over the first quarter of the candidate; detect bump onset via rise
  rate + volume; after the bump high, wait for `close <` the extended trendline — the
  natural, non-repainting alert bar.
- Sell-zone/warning-line logic is a clean overlay feature: plot parallels at
  `trendline + k * leadin_height` for k = 1..n.
- Keep candidates alive through possible dual bumps: don't expire the pattern when price
  bounces off the trendline; expire only on confirmation or a timeout (e.g. 2x pattern
  length [D]).
