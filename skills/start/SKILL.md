---
name: start
description: Interactive wizard for new Pine Script projects. Guides users through creating indicators or strategies step by step.
disable-model-invocation: true
---

# Welcome to Pine Script Development Assistant

I'll help you build professional TradingView indicators and strategies. Let me ask a few questions to understand what you need.

## Getting Started

Use the AskUserQuestion tool to gather:

1. **What would you like to create?**
   - Indicator (displays information on charts)
   - Strategy (tests and executes trading rules)

2. **Describe your trading idea** in plain language
   - What signals are you looking for?
   - What indicators or calculations should it use?
   - How should it appear on the chart?

3. **What's your experience level?**
   - Beginner (I'll explain everything in simple terms)
   - Intermediate (some Pine Script knowledge)
   - Advanced (skip basic explanations)

## After Gathering Information

Based on the user's answers:

1. **For beginners**: Use the beginner-helper agent to explain concepts
2. **For all levels**: Create a clear implementation plan
3. **Suggest relevant templates** from `templates/` directory
4. **Create the file** in `projects/[descriptive-name].pine`

## Quick Examples

If the user isn't sure what to build, suggest these:

- **Simple Moving Average Crossover** - Buy when fast MA crosses above slow MA
- **RSI Overbought/Oversold** - Signals when RSI hits extreme levels
- **Support/Resistance Levels** - Automatically draw key price levels
- **Volume Spike Detector** - Alert when volume is unusually high

## Next Steps

After understanding the user's needs:
1. If simple: Go directly to implementation
2. If complex: Use `/pinescript:pine-manager` to orchestrate the project
3. Always save work to `projects/` directory
