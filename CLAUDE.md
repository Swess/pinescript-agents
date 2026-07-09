# Pine Script Development Assistant

Professional Pine Script v6 development environment for TradingView indicators and strategies.

## Quick Start

Use these skills to get started:
- `/pinescript:start` - Guided wizard for new projects
- `/pinescript:create [description]` - Quick creation from description
- `/pinescript:video [youtube-url]` - Analyze trading video
- `/pinescript:templates` - Browse templates
- `/pinescript:examples` - Browse examples

## Critical Syntax Rules

### Line Continuation - NEVER Split Ternary Operators

**WRONG:**
```pinescript
titleText = condition ? "value1" :
            "value2"  // ERROR!
```

**CORRECT:**
```pinescript
titleText = condition ? "value1" : "value2"
```

For expressions outside parentheses, continuation lines must use non-multiple-of-4 indentation:
```pinescript
longCondition = ta.crossover(ema50, ema200) and
     rsi < 30   // 5 spaces - NOT multiple of 4
```

Use the `pine_guide` MCP tool with topic "language" for complete syntax rules.

### Plot Scope Restriction

NEVER use `plot()` inside local scopes (if, for, functions):
```pinescript
// ❌ WRONG
if condition
    plot(value)  // ERROR!

// ✅ CORRECT
plot(condition ? value : na)
```

### UDT-First Architecture

For complex data, define User Defined Types before calculations:
- Bundle related data together
- Use `xloc.bar_time` for unlimited lookback (not bar_index which has 5000 bar limit)
- Store both `time` and `bar_index` when capturing events

## Project Structure

- `projects/` - Your Pine Script files (save work here)
- `templates/` - Ready-to-use templates
- `examples/` - Reference implementations
- `docs/` - Pine Script documentation + MCP server
- `tools/` - Development utilities

## Essential Limits

- Max 500 bars lookback
- Max 500 plot outputs
- Max 40 security() calls
- Max 64 drawing objects
- Strings: 40,960 characters

## Best Practices

1. **Version Declaration**: Always start with `//@version=6`
2. **Strategy Alerts**: Include `//@strategy_alert_message {{strategy.order.alert_message}}` **immediately after** the `strategy()` call (TradingView now rejects it above the declaration)
3. **Avoid Repainting**: Use `lookahead=barmerge.lookahead_off` with `request.security()`
4. **Handle NA Values**: Check with `na(value)` before operations
5. **Cache Loop Boundaries**: Store `array.size()` before loops (2025 breaking change)
6. **Group Inputs**: Use `group=` parameter for organized settings
7. **Add Tooltips**: Help users understand each input
8. **No Unrequested Chrome**: Do NOT add performance/stats tables or other decorative panels by default. Ship the core logic + requested visuals only; offer extras as a follow-up.

## Video Analysis

When given a YouTube URL, run the analyzer:
```bash
python tools/video-analyzer.py "URL"
```

Then confirm the extracted strategy with the user before implementing.

## Skills Reference

Skills activate automatically based on context:

| Skill | Purpose |
|-------|---------|
| pine-developer | Write Pine Script code |
| pine-visualizer | Break down trading concepts |
| pine-debugger | Fix errors and add debugging |
| pine-backtester | Add performance metrics |
| pine-optimizer | Improve performance and UX |
| pine-publisher | Prepare for publication |
| pine-manager | Orchestrate complex projects |

## Documentation

Use the `pinescript` MCP server tools for documentation lookup:
- `pine_search` - Full-text search across all Pine Script docs
- `pine_reference` - Look up functions, variables, types (e.g., `ta.sma`, `plot`)
- `pine_guide` - Retrieve guide pages by topic (execution model, strategies, plots)
- `pine_examples` - Find code examples with context
- `pine_categories` - Browse documentation categories

Local docs are also available at:
- `docs/manual/` - Complete Pine Script v6 reference
- `docs/docs/` - User guide (concepts, language, FAQ, errors)

## Error Log (consult + append)

`docs/pine-error-log.md` is a running repository of real compilation errors, warnings,
and non-obvious techniques hit in this project. **Check it before writing plots/panes/
strategy declarations, and append a new entry whenever you resolve a compiler error or
gotcha** so the same mistake is never repeated. (E.g. it records that `barcolor()` has
no `force_overlay` arg, and how to combine a chart overlay + a pane oscillator in one
script.)

## Quality Checklist

Before delivering code:
- [ ] `//@version=6` present
- [ ] No repainting (or documented)
- [ ] NA values handled
- [ ] Loop boundaries cached
- [ ] Inputs grouped with tooltips
- [ ] Strategy has alert annotation
