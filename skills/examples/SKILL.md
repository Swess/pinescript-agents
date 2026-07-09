---
name: examples
description: Browse and learn from example Pine Scripts. Shows available examples organized by complexity level.
disable-model-invocation: true
allowed-tools: Glob, Read
---

# Pine Script Examples

Browse available example scripts to learn patterns and get inspiration.

## Instructions

When this skill is invoked:

1. **List all examples** from the `examples/` directory using Glob
2. **Organize by complexity**:
   - `examples/simple/` - Basic patterns for beginners
   - `examples/intermediate/` - More advanced techniques
   - `examples/advanced/` - Complex implementations

3. **Show a summary** of each example:
   - Filename
   - Brief description (from file header)
   - Key concepts demonstrated

4. **Offer to explain** any example in detail

## Example Categories

### Simple Examples
- Basic indicators (MA, RSI)
- Simple plots and colors
- Basic alerts

### Intermediate Examples
- Multi-timeframe analysis
- Custom calculations
- Tables and labels

### Advanced Examples
- UDT-first architecture
- Complex drawing management
- Strategy with full backtesting

## User Interaction

After showing examples:
- "Would you like me to explain any of these in detail?"
- "Would you like to use one as a starting point for your project?"
- "Would you like to see a specific category?"

## Using Examples as Templates

If user wants to use an example:
1. Copy to `projects/` with new name
2. Explain the key parts
3. Help customize for their needs
