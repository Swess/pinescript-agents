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

**Gotcha:** a `table` will render in the script's home pane. With `overlay=false` that's
the lower pane — pass `force_overlay=true` to `table.new(...)` if you need it on price.

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

_Last updated: 2026-07-23 — added homoglyph gotcha from the ICT Silver Bullet indicator build._
