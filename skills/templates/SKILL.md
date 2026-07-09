---
name: templates
description: Browse and use Pine Script templates. Quick starting points for common indicator and strategy patterns.
disable-model-invocation: true
allowed-tools: Glob, Read
---

# Pine Script Templates

Browse available templates for quick project starts.

## Instructions

When this skill is invoked:

1. **List all templates** from the `templates/` directory
2. **Organize by category**:
   - `templates/indicators/` - Indicator patterns
   - `templates/strategies/` - Strategy patterns
   - `templates/utilities/` - Helper functions

3. **Show template details**:
   - Name and purpose
   - Key features included
   - Customization points

## Template Categories

### Indicators
- Momentum (RSI, MACD variations)
- Trend (Moving averages, channels)
- Volatility (ATR-based, Bollinger)
- Volume (Volume profiles, OBV)

### Strategies
- Trend Following (MA crossover, breakout)
- Mean Reversion (Bollinger, RSI extremes)
- Momentum (MACD, RSI strategies)

### Utilities
- Debug panels
- Risk management helpers
- Session filters
- Alert builders

## Using a Template

When user selects a template:

1. **Copy to projects/**:
   - Rename to descriptive project name
   - E.g., `templates/indicators/rsi-divergence.pine` → `projects/my-rsi-scanner.pine`

2. **Explain customization points**:
   - Which inputs to adjust
   - Where to add custom logic
   - How to modify visuals

3. **Help customize** based on user needs

## Quick Start

Suggest popular templates based on common requests:
- "RSI indicator" → `templates/indicators/rsi-momentum.pine`
- "Moving average strategy" → `templates/strategies/ema-cross.pine`
- "Volume analysis" → `templates/indicators/volume-profile.pine`
