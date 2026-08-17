# ORB Algo - corrected single-file strategy

`orb-algo-strategy.pine` - one script carrying both the visual layer and the accounting.

Derived from **ORB Algo | Flux Charts** (© fluxchart, MPL-2.0). Stays under MPL-2.0.

Pine allows exactly one `indicator()` / `strategy()` declaration per file, so a merged script is necessarily a `strategy()`. The Strategy Tester is the ledger. There is deliberately **no custom backtest table** in it, because a second hand-rolled accounting path is precisely what made the original untrustworthy.

---

## What was wrong with the original panel

The entry engine was fine. The hand-rolled backtest table was not.

### 1. Take profits were booked at an unfillable price

Dynamic mode fires TP1 when a long's close drops back **below** the EMA, then recorded the exit at the EMA:

```pinescript
lastORB.tp1Index := bar_index
lastORB.tp1Price := ema        // strictly better than this bar's close
```

Every Dynamic exit was credited the close-to-EMA gap it could never have captured. Dynamic is the default TP method, so this touched almost every trade. It is not repainting (`ema` is known at bar close) but it is not a reachable fill either.

**Now:** entries and Dynamic take profits are market orders. The broker emulator fills them at the next bar's open.

### 2. Flat exits were always losses

At session rollover the original wrote the flatten price into the stop-loss field and ran it through an `math.abs()` helper:

```pinescript
diffPercent(float val1, float val2) => math.abs(val1 - val2) / val2 * 100.0
...
lastORB.slPrice := lastClose
totalORBProfitPercent := totalORBProfitPercent - diffPercent(curORB.slPrice, curORB.entryPrice) * (1.0 - totalProfitTaken)
```

A long flat-exited **above** its entry was subtracted as a loss of that magnitude, and also incremented `unsuccessfulTrades` because `totalProfitTaken == 0`. The error was isolated to this path - on genuine stop hits the stop price is adverse by construction, so the `abs` was harmless there.

**Now:** `strategy.close_all()` at session rollover. The emulator signs the P&L.

### 3. Three denominators, one table

- `Total Days` counted every session, including days with no breakout.
- `Winrate` and `Average Profit` divided by `successfulTrades + unsuccessfulTrades`.
- Trades still open, and trades that ended flat, landed in neither counter - but their P&L was already inside `totalORBProfitPercent`.
- On the `0% | 100% | 0%` and `0% | 0% | 100%` presets a single trade could increment **both** counters: TP1 set `isSuccess := true` while leaving `totalProfitTaken` at 0, so a later stop also counted it as a loss.

**Now:** the Tester's `Total Closed Trades`, `Percent Profitable` and `Profit Factor`, all off one population.

### 4. Same-bar conflicts favoured the trade

```pinescript
if not(bar_index == lastORB.tp1Index or bar_index == lastORB.tp2Index or bar_index == lastORB.tp3Index)
```

Any bar that had registered a take profit could not register the stop.

**Now:** real limit and stop orders. The emulator resolves same-bar ordering with its own documented assumptions rather than in the trade's favour.

### 5. Also corrected

- Gaps are priced by the emulator instead of being assumed away.
- Commission and slippage exist as first-class Properties settings.
- Dead code removed: the `slMethod == 'Fixed'` branch was unreachable (`'Fixed'` was absent from the `options` list) and `stopLossPercent` was consequently unused. Both are now live as `Fixed %`.
- `int maxBarsBack = last_bar_index` made `last_bar_index - bar_index < maxBarsBack` always true. Gone.
- `nz(lastORB.h, 0)` replaced with an explicit `na` check.
- ORB zones are now plotted series (`plot.style_linebr`) instead of `line` objects, so there is no 500-object cap and no per-tick delete-and-redraw loop.
- Timeframe ceiling raised from 15min to 1H, which roughly triples loaded history and therefore sample size.
- `minimumProfitPercent` / `minimumProfitIncrementPercent` / ATR multipliers / ATR length promoted from hardcoded constants to inputs.
- Stop levels are computed from the **actual fill price**, not from the signal bar's close.

---

## Entry logic - unchanged

- A new opening range starts at the first bar of the regular session (or of a custom session) and collects high/low for `ORB Timeframe` minutes.
- A breakout is the close (or the EMA) trading beyond that range.
- A breakout that closes back inside the range is discarded; the script waits for the next one.
- A retest is a bar that closes beyond the level but wicks back to it. Sensitivity sets how many are required: High 0, Medium 1, Low 2, Lowest 3.
- One entry per session, maximum.

---

## What the visual layer draws

| Element | How |
|---|---|
| ORB high / low zones | Plotted series, one flat segment per session, broken while the next range forms |
| EMA | Optional plot |
| Stop and ATR targets | `style_linebr` plots, live only while the trade is open |
| Buy / Sell signal | Triangle on the signal bar |
| TP / SL / Session Exit | Cross and square markers |
| ORB Dashboard | Range state, direction, fill price, stop, legs filled, open P&L % |

TradingView's own strategy trade arrows and labels remain available on top of these; toggle them in the script's Style tab.

---

## Reading the Tester honestly

1. **Set commission and slippage in the Properties tab first.** They default to zero because they are instrument-specific. Nothing in the script will remind you.
2. Expect tens of trades, not hundreds. The chart timeframe caps loaded history.
3. **At 40 closed trades a true 50% winrate still prints anywhere in the 34-66% band at 95% confidence.** That band is wider than most of the edge anyone is trying to measure here. Treat a single symbol's winrate as a hint, not a result.
4. Per-trade risk varies because the stop sits on range geometry while position size is fixed. Net Profit is therefore not an R-multiple sum. Read `Profit Factor` and `Max Drawdown` alongside it.
5. Entries fill at the next bar's open. Any comparison against a close-fill indicator will show the indicator flattering the strategy.

---

## Implementation notes

- **Sizing:** `Position Size (units)` defaults to 100 so every exit-ratio preset lands on whole units. Legs are absolute quantities, not `qty_percent`, which avoids the compounding trap where a "5%" second leg would mean 5% of the *remaining* 10%.
- **ATR mode** places one `strategy.exit` bracket per leg, each carrying the same stop. This is TradingView's documented idiom for scaled exits with per-leg targets. Consequence: a stop hit emits one partial-exit alert per open leg. The stop payload uses `sentiment: "flat"`, so the first alert flattens the position and the rest are no-ops.
- **Dynamic mode** uses a single whole-position stop plus `strategy.close` market exits per leg, since there is no predefined take-profit price to hand the emulator.
- **Bracket maintenance** re-issues orders only when the stop level actually moves, and never for a leg that has already filled. Re-issuing a filled exit id would create a second order for that quantity.
- **Zero-ratio legs** are retired at fill time so they cannot stall the Dynamic chain, which advances one leg per event. The increment gate measures from a single `lastTPRef` for the same reason: a per-leg `tp*Price` would read `na` on any preset that skips a leg.
- **Inverted-bracket guard:** a geometric stop can gap onto the wrong side of the fill. The strategy flattens rather than holding a bracket that would fire instantly.
- **Verify the TradersPost partial-exit payload** against current TradersPost docs before going live. Entry and flatten payloads follow the same shape as `qtrend-kvo-strategy.pine`; the partial-reduce shape is the one worth double-checking.
