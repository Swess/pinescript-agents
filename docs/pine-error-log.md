# Pine Script Error Log & Gotchas

A running repository of Pine Script v6 compilation errors, warnings, and hard-won
techniques encountered while building scripts in this project. **Consult this file
before writing code** (especially plots, panes, and strategy declarations), and
**append a new entry whenever you hit and resolve a compiler error or a non-obvious
gotcha.** The goal is to never make the same mistake twice.

Each entry: what you saw → why it happens → the fix → a verified snippet.

---

## How to use this log

- **Before coding:** skim the relevant section (Compilation Errors / Techniques / Warnings).
- **After fixing an error:** add an entry. Keep it specific — include the error code,
  the exact function/argument, and a minimal correct example.
- Skills that should reference this file: `pine-developer`, `pine-debugger`, `pine-optimizer`.

---

## Compilation Errors

### CE10120 — "The `<function>` function does not have an argument with the name `<name>`"

**Seen:** `The "barcolor" function does not have an argument with the name "force_overlay"`

**Why:** Not every plotting/coloring function accepts `force_overlay`. `barcolor()`'s
full v6 signature is `barcolor(color, offset, editable, show_last, title, display)` —
there is **no `force_overlay` parameter**. Passing it is a hard compile error.

**Fix:** Remove `force_overlay` from `barcolor()`. It is unnecessary anyway —
`barcolor()` **always** colors the main-chart price bars regardless of which pane the
script lives in (`overlay=true` or `false`).

```pinescript
// ❌ WRONG — CE10120
barcolor(cond ? color.green : na, force_overlay=true)

// ✅ CORRECT — barcolor already targets the main price bars
barcolor(cond ? color.green : na)
```

**`force_overlay` support cheat-sheet (verified against the v6 reference):**

| Function                | `force_overlay`? |
|-------------------------|:----------------:|
| `plot`                  | ✅ yes |
| `plotshape` / `plotchar` / `plotarrow` | ✅ yes |
| `plotcandle` / `plotbar`| ✅ yes |
| `bgcolor`               | ✅ yes |
| `fill`                  | ✅ yes |
| `line.new` / `label.new` / `box.new` / `table.new` | ✅ yes |
| **`barcolor`**          | ❌ **no** (already targets main chart) |
| `hline`                 | ❌ no (stays in the script's pane) |

---

### Strategy alert annotation must come AFTER `strategy()`

**Why:** TradingView's updated compiler rejects `//@strategy_alert_message` placed
*above* the `strategy()` declaration. It must be immediately **after** the call.

```pinescript
// ✅ CORRECT
//@version=6
strategy("My Strategy", overlay=true)
//@strategy_alert_message {{strategy.order.alert_message}}
```

(Also documented in `CLAUDE.md` → Best Practices.)

---

### CE10120 — `strategy()`/`indicator()` argument casing: `shorttitle`, not `shortTitle`

**Seen:** `The "strategy" function does not have an argument with the name "shortTitle"`

**Why:** Pine's built-in function parameters are lowercase, not camelCase. It's
`shorttitle`, matching `overlay`, `pyramiding`, `calc_on_order_fills`, etc. — only
user-defined variables/functions get camelCase freely; built-in argument names must
match the reference exactly.

```pinescript
// ❌ WRONG — CE10120
strategy("My Strategy", shortTitle = "MS", overlay = true)

// ✅ CORRECT
strategy("My Strategy", shorttitle = "MS", overlay = true)
```

---

## Techniques

### Combining a chart-overlay indicator + a pane oscillator in ONE script

**Problem:** You want one script that shows, e.g., a trend line + entry markers on the
**price chart** AND an oscillator (RSI, KVO, MACD…) in its **own pane** below. A single
script has only one "home" pane, decided by `overlay`.

**Solution — put the script's home in the pane, then force the price-chart layer up:**

1. Declare the script with **`overlay=false`** (for strategies) / `overlay=false` on
   `indicator(...)`. The script now owns a **separate lower pane** — draw the
   oscillator there normally (`plot`, `hline`, area fills).
2. For **every element that belongs on the price chart**, add **`force_overlay=true`**:
   the trend line `plot`, entry/exit `plotshape`s, stop/target `plot`s, `bgcolor`
   tints, `fill`s, and any `line`/`label`/`box`/`table`.
3. **`barcolor()` needs nothing** — it always colors the main price bars.
4. `hline` cannot be forced onto the price chart; it stays in the script's pane
   (perfect for the oscillator's zero line).

```pinescript
//@version=6
strategy("Trend + Oscillator", overlay=false)   // home = lower pane

// --- price-chart layer (forced up onto price) ---
plot(trendLine, "Trend", color=color.aqua, force_overlay=true)
plotshape(buySig, style=shape.labelup, location=location.belowbar, force_overlay=true)
bgcolor(regime ? color.new(color.green, 92) : na, force_overlay=true)
barcolor(up ? color.green : color.red)           // no force_overlay — already on price

// --- oscillator layer (lives in this pane) ---
plot(osc, "Oscillator", style=plot.style_area)
hline(0, "Zero", linestyle=hline.style_dotted)   // stays in pane
```

### Unbounded `line.new`/`label.new` silently killing tracked drawing references

**Problem:** A script tracks its own drawing objects (e.g. `array<line>` per open
position, so a stop/target line can be deleted later when the trade closes) while a
*separate* feature elsewhere in the script also calls `line.new`/`label.new` every bar
with no cap of its own (e.g. a decorative marker drawn on every signal bar, never
deleted). Both features share the same script-wide `max_lines_count` /
`max_labels_count` budget. Once that shared budget is exceeded, Pine auto-deletes the
**oldest** object script-wide, which can be a still-tracked line from the first
feature, not the unbounded one. The tracking array then holds a dangling reference, and
calling `line.delete()`/`label.delete()` on it later (e.g. when the position closes)
can error and take down the whole script intermittently, only once history is long
enough to exhaust the budget, making it look like a random/rare failure rather than a
reliable one.

**Fix:** Any drawing objects created on a recurring, unbounded condition (once per
signal bar, once per no-wick bar, etc.) must be tracked in their own array and pruned
by the script itself, well under the declared max, so they can never crowd out
longer-lived tracked objects sharing the same budget.

```pinescript
// ❌ WRONG — never deleted, competes for the shared 500-line budget forever
if cond
    line.new(bar_index, open, bar_index + 20, open)

// ✅ CORRECT — self-bounded well under max_lines_count
var array<line> markerLines = array.new<line>()
if cond
    array.push(markerLines, line.new(bar_index, open, bar_index + 20, open))
    if array.size(markerLines) > 100
        line.delete(array.shift(markerLines))
```

### Prefer reconciling against live state over diffing `strategy.closedtrades`

**Problem:** Cleaning up a per-trade drawing (e.g. a stop/target line) by watching
`strategy.closedtrades` grow and matching new entries by `entry_id` seems reliable, but
it's an indirect signal: it assumes every close is observed exactly once, in order,
with no gap. If that assumption is ever wrong for a reason specific to the strategy's
own order flow (multiple simultaneous closes, a cancelled-not-filled order, any path
that doesn't increment `strategy.closedtrades` the way expected), the tracked array
entry is never removed and its line sits on the chart forever, `extend.right` carrying
it across the whole rest of the chart.

**Fix:** Reconcile the tracked array against `strategy.opentrades` directly (ground
truth) instead of inferring closure from a diff. Guard with a small age check (skip
anything recorded in the last bar or two) so a just-placed entry, which doesn't appear
in `strategy.opentrades` until it fills on the following bar's open, isn't deleted
before it ever opens.

```pinescript
// ❌ FRAGILE — assumes every close shows up exactly once in strategy.closedtrades
if strategy.closedtrades > lastSeen
    for i = lastSeen to strategy.closedtrades - 1
        // ...remove by matching strategy.closedtrades.entry_id(i)...
    lastSeen := strategy.closedtrades

// ✅ ROBUST — checks the live open set every bar, self-heals regardless of cause
for idx = array.size(trackedIds) - 1 to 0
    if bar_index - array.get(trackedBarIdx, idx) > 1   // grace period for fill lag
        string id = array.get(trackedIds, idx)
        bool stillOpen = false
        for j = 0 to strategy.opentrades - 1
            if strategy.opentrades.entry_id(j) == id
                stillOpen := true
                break
        if not stillOpen
            // ...delete the drawing and array.remove(trackedIds, idx) etc...
```

**Gotcha:** a `table` will render in the script's home pane. With `overlay=false` that's
the lower pane — pass `force_overlay=true` to `table.new(...)` if you need it on price.

---

### Function scope: what a Pine function may and may not touch

Three separate rules, easy to conflate. All three shaped the ORB Algo rewrite: the
natural first draft violated rules 1 and 3, and rule 2 is what made the clean version
possible. Recorded here as constraints designed around, not as observed compiler output.

**1. A function may NOT reassign a `var` global.**

```pinescript
var bool inTrade = false

// ❌ WRONG - cannot assign to a global from inside a function
resetState() =>
    inTrade := false
```

Inline the assignments at each call site, or restructure so the function *returns*
the new value and the caller assigns it.

**2. A function MAY mutate the fields of an object passed into it.**

UDT instances are references, so this is legal and is the escape hatch for rule 1.
Pass state around as an object instead of as loose globals:

```pinescript
type Trade
    float realizedPct = 0.0
    bool  isClosed    = false

// ✅ CORRECT - mutating fields of the argument, not reassigning a global
bookLeg(Trade t, float exitPx) =>
    t.realizedPct := t.realizedPct + exitPx
    t.isClosed := true
    true            // last expression is the return value
```

**3. A function may NOT be DECLARED inside a local scope.**

Declaring a helper inside `if barstate.islast` is a compile error, even though it
looks like a natural place for a table-row writer. Hoist it to global scope and
pass the things it needs as arguments:

```pinescript
// ❌ WRONG - declaration inside a local scope
if barstate.islast
    var table t = table.new(position.top_right, 2, 5)
    row(int r, string k, string v) =>
        table.cell(t, 0, r, k)

// ✅ CORRECT - global declaration, table passed in
var table t = table.new(position.top_right, 2, 5)
row(table tbl, int r, string k, string v) =>
    table.cell(tbl, 0, r, k)
    table.cell(tbl, 1, r, v)

if barstate.islast
    row(t, 1, "Wins", "12")
```

---

### `int / int` division is fractional in v6 - do NOT work around it

Worth stating because the "integer division truncates" instinct is wrong here and
leads to pointless `1.0 *` prefixes, or worse, to misdiagnosing a correct winrate
calculation as broken.

In v5, `int/int` truncated when **both** operands were `const` (`5/2 == 2`) but kept
the remainder if either was `input`/`simple`/`series` (`5/2 == 2.5`). **v6 removed
the inconsistency: fractional division of constants now works too.**

```pinescript
//@version=6
int wins = 3, int losses = 7
winrate = 100.0 * wins / (wins + losses)   // 30, not 0 - no cast needed
```

Division by zero yields `na`, so guard the denominator and print `"n/a"` rather
than letting `str.tostring()` render `NaN`.

See `docs/docs/migration-guides/to-pine-version-6.md` → "Fractional division of constants".

---

### Per-unit brackets under pyramiding need unique entry IDs + `from_entry`

Building a scale-in strategy (SuperTrend flip entry plus no-wick adds), each unit needed
its own ATR stop and target. Three things all have to be right or the feature ships dead
or silently wrong:

**1. `pyramiding` defaults to 0.** Every add after the first is discarded with no error,
no warning, and no marker on the chart. Set it in the declaration:

```pinescript
strategy("...", pyramiding = 4)   // 1 flip entry + 3 adds
```

**2. One `strategy.exit` per unit, bound with `from_entry`, IDs must be unique.**
`strategy.exit` called once creates a persistent resting order; it does not need
re-calling every bar. Recycling slot IDs across legs (`"L1".."L4"`) is a constraint
designed around here rather than observed failing: an ID reused while the strategy still
tracks it can fold two intended-independent brackets together, and unique IDs cost
nothing. Use a monotonic leg counter:

```pinescript
var int legId = 0
if trendChanged
    legId += 1

string id = "L" + str.tostring(legId) + ".0"
strategy.entry(id, strategy.long, qty = qtyInput)
strategy.exit(id + "x", from_entry = id, stop = close - slDist, limit = close + tpDist)
```

**3. Snapshot the ATR at entry.** Placing the exit once at entry time with absolute
prices freezes the bracket. The tempting alternative - looping over
`strategy.opentrades` every bar and re-calling `strategy.exit` with `atr * mult` - turns
a fixed bracket into a trailing one, because `atr` moves every bar.

**Verification that actually discriminates:** find a leg where all units filled and
confirm the trade list shows that many separate exits at different prices. "It compiles"
proves nothing here.

**Related ordering gotcha:** on a flip bar, `strategy.position_size` still reports the
*previous* leg, because nothing has filled yet. Gating adds on `not trendChanged` is
load-bearing, not cosmetic. Call `strategy.close_all()` before the new `strategy.entry()`
on that bar.

---

### `timeframe.multiplier` is a bad choice for a drawing's horizontal extent

Seen in the "No Wick Candlestick Identifier" indicator, which extended its compensation
line with `x2 = bar_index + timeframe.multiplier`.

`timeframe.multiplier` is the numeric part of the timeframe string, not a duration. So
the extent is 1 bar on 1m, 5 on 5m, 60 on 1H, 240 on 4H, then back to **1** on 1D and 1W.
The visual meaning collapses at daily and above and explodes on 4H.

Expose an explicit bar count instead:

```pinescript
int compBarsInput = input.int(20, 'Line Length (bars)', minval = 1)
line.new(bar_index, open, bar_index + compBarsInput, open, ...)
```

Also worth stating plainly when a user asks: `width` on `line.new` / `linewidth` on
`plot` is pixel thickness only. It never affects a value, a comparison, or a signal.

---

## Warnings (non-fatal, but fix them)

### "The function `<name>` should be called on each calculation for consistency"

**Seen with:** `ta.lowest`, `ta.highest`, and other `ta.*` functions called **inside a
conditional/local scope** (e.g. inside `if entrySignal`).

**Why it matters:** `ta.*` functions maintain internal state that must advance on
**every bar**. Calling them only when a condition is true leaves that state stale, so
the value you read can be wrong (e.g. a stop-loss computed from an out-of-date swing).

**Fix:** Hoist the `ta.*` call to the global scope; use the resulting series inside the
conditional.

```pinescript
// ❌ WRONG — ta.lowest only advances on signal bars
if entrySignal
    stop = ta.lowest(low, len)

// ✅ CORRECT — computed every bar, read when needed
swingLow = ta.lowest(low, len)
if entrySignal
    stop = swingLow
```

---

### Invisible Unicode homoglyph in an identifier → "Undeclared identifier"

**Seen:** a group-name variable written `grpТime` compiled as an undeclared/other
identifier because the "Т" was Cyrillic U+0422, not Latin "T" — indistinguishable by eye.

**Why:** Pine identifiers are case- and byte-sensitive. A homoglyph (Cyrillic а/е/o/Т,
Greek, full-width) reads identically to a human but is a different symbol, so a later
reference to the "same" name is actually a different (undeclared) identifier — or, if
used consistently, silently non-ASCII and fragile.

**Fix:** Keep identifiers strict ASCII. To catch these, grep for non-ASCII outside
comments/strings: `grep -nP "[^\x00-\x7F]"` then eyeball hits that live in code, not
in `©`/`™`/em-dash/emoji.

---

---

### CE10088 "Cannot modify global variable ... in function" for label/line/box vars

**Seen:** a plain global `var label myLabel = na`, reassigned inside a user-defined
function with `myLabel := label.new(...)` after deleting the previous one, failed to
compile with CE10088.

**Why:** functions can never rebind a global variable's identifier via `:=`, only
mutate the object a global variable already refers to (field reassignment, array/box/
line/label setter methods). A bare `label`/`line`/`box` global is a direct binding, so
reassigning it from inside a function is exactly the disallowed case.

**Fix:** wrap the drawing handle(s) in a small UDT and reassign a *field* of it instead
— the same pattern the LuxAlgo `zone` type already uses for `currentZone.b_ox := box.new(...)`:
```pinescript
type fastMark
    label   e_ntryLabel  = na
    line    t_argetLine  = na

var fastMark currentFastMark = fastMark.new()

f() =>
    currentFastMark.e_ntryLabel.delete()
    currentFastMark.e_ntryLabel := label.new(...)   // OK: mutating a field, not the global identifier
```

---

_Last updated: 2026-08-20 - added the CE10088 global-var-in-function fix (wrap drawing
handles in a UDT field instead of reassigning a bare global) from the RPZL fast-entry
strategy build._
