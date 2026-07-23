---
id: key-reversal-bar-bearish-v2
name: Key reversal bar, bearish, v2
aliases: [KRB, Bearish Key Reversal Bar]
category: small-pattern
type: reversal
direction: bearish
bars: {min: 1, typical: 1}
confirmation: required
rank: {value: null, of: 35}
stats:
  break_even_failure_rate: null
  avg_move: null
  throwback_rate: null
  pct_meeting_target: null
  reversal_rate: null
  frequency_rank: null
source: https://thepatternsite.com/KRB2Bear.html
accessed: 2026-07-16
---

# Key reversal bar, bearish, v2

## Overview

A single tall price bar that reverses a short-term uptrend: it opens well above the prior
close but closes near or below the prior close. Stocks show a downward breakout 78% of the
time, so by breakout direction it is "bearish." But downward-breakout trades *lost* money on
average ($96.17/trade in stocks), so this v2 study focuses on the **upward** breakouts, which
nearly triple the stock benchmark dollar return.

## Identification Guidelines

| Characteristic | Guideline |
|---|---|
| Length | One price bar |
| Up trend | Reverses a short-term uptrend; trend measured by 5-day linear-regression slope of the high-low range (breaks out down 78% of the time) |
| Configuration | Opens "much higher" — more than half the average 1-month bar height above the prior close — but closes near or below the prior close |
| "Near" close | Close is less than 15% (of the 22-bar average bar height) above the prior close, or below the prior close by any amount |
| Tall bar | Bar is at least 50% taller than the average 1-month (22-bar) bar height |
| Volume | Adding a volume-climax test *hurt* performance; not used |

## Detection Rules (computable)

Definitions: `range = high - low`; `avg1M = ta.sma(range, 22)[1]` (average bar height of the
22 bars before the pattern bar).

- **R1 [B]** Prior trend up: 5-bar linear-regression slope of `range` is positive; simplify to `close > close[5]` [D].
- **R2 [B]** Opens much higher: `open > close[1] + 0.5 * avg1M`.
- **R3 [B]** Closes near/below prior close: `close <= close[1] + 0.15 * avg1M`.
- **R4 [B]** Tall bar: `range >= 1.5 * avg1M`.

## Confirmation & Breakout

The pattern breaks out **downward** 78% of the time, but those trades lose money. Bulkowski's
tested edge is the **upward** breakout: he places a buy stop a penny above the bar's top and
enters at the next open. Do not trade the downside.

## Targets & Stops

- Target (height exit, up breakout): `target = high + 2 * range`.
- Stop: a penny below the bottom of the pattern bar (`low - 1 tick`).

## Performance

| Market (height exit, up breakout) | KRB avg P/L | Benchmark | KRB win/loss | Avg hold |
|---|---|---|---|---|
| Stocks (bull) | $91.56 | $32.55 | 44% | 27 days |
| Downward-breakout trades (stocks) | -$96.17 | — | — | — |
| Downward-breakout trades (ETFs) | -$76.51 | — | — | — |

Notable: 78% of stock patterns break out downward, yet downward trades lose money — the
"bearish" pattern is not usefully bearish. Upward breakouts nearly triple the stock benchmark
($91.56 vs $32.55) but trades are comparatively few. Adding a volume test dropped stock P/L
from $91.56 to $43.79 and win/loss from 44% to 41%.

## Trading Tactics

- Ignore the downside despite the 78% down-breakout rate; those trades lose money.
- Trade the upward breakout: buy stop a penny above the bar top, enter next open.
- Exit at twice the bar height above the top; stop a penny below the bar bottom.
- Do not add a volume-climax filter — it degrades results.

## Pine Notes

- Feasibility: **easy**. Mirror of the bullish v2 bar: single-bar test, trend filter, 22-bar
  average-height normalizer, no pivots. Detection completes on the pattern bar; entry fires
  when price exceeds the bar top.
- Suggested inputs: trend lookback `N` (R1), open-gap fraction (0.5, R2), near-close fraction
  (0.15, R3), tallness multiple (1.5, R4), target multiple (2.0), average-height window (22).
- Counterintuitively the tradeable signal is the *upward* breakout even though the pattern is
  named bearish — encode the long entry, not a short.

<!-- ANOMALY: named "bearish" and breaks out down 78% of the time, but Bulkowski trades and
reports the UPWARD breakout because downward breakouts lose money. No numeric overall rank was
stated on the bearish page (only the bullish page gave 4/35), so rank.value is null. -->
