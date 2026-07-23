---
id: key-reversal-bar-bullish-v2
name: Key reversal bar, bullish, v2
aliases: [KRB, Bullish Key Reversal Bar]
category: small-pattern
type: reversal
direction: bullish
bars: {min: 1, typical: 1}
confirmation: required
rank: {value: 4, of: 35}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/KRB2.html
accessed: 2026-07-16
---

# Key reversal bar, bullish, v2

## Overview

A single tall price bar that reverses a short-term downtrend: it opens well below the prior
close but closes near or above the prior close. This is Bulkowski's re-tested "v2" study
(1990-2025). It ranks 4th of 35 small patterns in stocks (1 = best) and more than doubles
the benchmark dollar return in stocks, ties in ETFs, and is absent in cryptocurrency.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | One price bar |
| Down trend | Reverses a short-term downtrend; trend measured by 5-day linear-regression slope of the high-low range |
| Configuration | Opens "much lower" — more than half the average 1-month bar height below the prior close — but closes near or above the prior close |
| "Near" close | Close is less than 15% (of the 22-bar average bar height) below the prior close, or above the prior close by any amount |
| Tall bar | Bar is at least 50% taller than the average 1-month (22-bar) bar height |
| Volume | Adding a volume-climax test *hurt* performance; not used |

## Detection Rules (computable)

Definitions: `range = high - low`; `avg1M = ta.sma(range, 22)[1]` (average bar height of the
22 bars before the pattern bar).

- **R1 [B]** Prior trend down: 5-bar linear-regression slope of `range` is negative; simplify to `close < close[5]` [D].
- **R2 [B]** Opens much lower: `open < close[1] - 0.5 * avg1M`.
- **R3 [B]** Closes near/above prior close: `close >= close[1] - 0.15 * avg1M`.
- **R4 [B]** Tall bar: `range >= 1.5 * avg1M`.

## Confirmation & Breakout

Breakout is **upward** by design. Trigger: price trades a penny above the top of the pattern
bar (`high` of the KRB) — Bulkowski uses a buy stop at `high + 1 tick` and enters at the next
open. No trade until that buy stop fills.

## Targets & Stops

- Target (height exit): `target = high + 2 * range` (twice the bar's height added to its top).
- Stop: a penny below the bottom of the pattern bar (`low - 1 tick`).

## Performance

| Market (height exit, up breakout) | KRB avg P/L | Benchmark | KRB win/loss | Avg hold |
|---|---|---|---|---|
| Stocks (bull) | $135.16 | $62.36 | 45% | 29 days |
| ETFs (bull) | $49.57 | $49.24 | 44% | 19 days |
| Cryptocurrency | absent | — | — | — |

Notable: winners gain ~10% (stocks) vs losers -6%. The pattern more than doubles the stock
benchmark over ~2,000 trades but only ties the benchmark in ETFs. Bulkowski flags the strong
stock result as possibly a fluke despite the large sample. Adding a volume test cut trades in
half and dropped stock P/L from $135.16 to $101.77.

## Trading Tactics

- Enter only when the buy stop above the bar's top triggers; buy at the next open.
- Exit at twice the bar height above the top; stop a penny below the bar's bottom.
- Trade in stocks; ETFs merely tie the benchmark and crypto lacks the pattern.
- Do not add a volume-climax filter — it degrades results in testing.

## Pine Notes

- Feasibility: **easy**. Single-bar test with a trend filter and a 22-bar average-height
  normalizer; no pivots. Detection completes on the pattern bar; the entry fires later when
  price exceeds the bar top (use a stop-order or intrabar high-cross check).
- Suggested inputs: trend lookback `N` (R1), open-gap fraction (0.5, R2), near-close fraction
  (0.15, R3), tallness multiple (1.5, R4), target multiple (2.0), average-height window (22).
- The linear-regression slope trend test can be approximated with `ta.linreg` on `range`; a
  plain `close < close[5]` is a serviceable default.

<!-- NOTE: v2 pages report dollar performance (avg P/L, win/loss %) rather than the classic
break-even-failure / average-rise / measure-rule fractions, so those stats are null in
frontmatter. Rank 4/35 is the stock height-exit ranking Bulkowski states. -->
