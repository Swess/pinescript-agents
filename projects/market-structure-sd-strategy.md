# Market Structure + Supply/Demand Strategy - Pine Script Specification

## Overview
A comprehensive pure price action indicator that identifies market structure through validated swing points, detects supply/demand zones, and generates high-probability entry signals with automatic risk-to-reward filtering.

## Strategy Rules

### Step 1: Market Structure (Trend Identification)
- **Uptrend**: Higher highs and higher lows
- **Downtrend**: Lower lows and lower highs
- **Validation Rule**:
  - A swing low is only validated when price breaks above the previous swing high
  - A swing high is only validated when price breaks below the previous swing low
- **Trading Direction**: Only trade with the trend (longs in uptrend, shorts in downtrend)
- **Trend Change**: Occurs only when a validated swing point is broken

### Step 2: Supply and Demand Zones
- **Demand Zones**: Consolidation areas before sharp upward moves (used for longs in uptrends)
- **Supply Zones**: Consolidation areas before sharp downward moves (used for shorts in downtrends)
- **Zone Definition**: Low to high of the base candle (candle immediately before impulse move)
- **Entry**: When price retests the zone
- **Stop Loss**: Below demand zone (longs) or above supply zone (shorts)
- **Take Profit**: Recent validated swing high (longs) or swing low (shorts)

### Step 3: Risk-to-Reward Filter
- Minimum R:R ratio of 2.5:1
- Only display signals that meet or exceed this threshold
- R:R = (Take Profit - Entry) / (Entry - Stop Loss)

---

## Input Parameters

### Swing Point Detection
```pine
// Pivot Detection
pivotLength = input.int(5, "Pivot Length", minval=1, maxval=50,
    tooltip="Number of bars to left/right for pivot detection")
confirmBars = input.int(0, "Confirmation Bars", minval=0, maxval=10,
    tooltip="Additional bars to wait after pivot detection (0 = realtime, higher = less repainting)")

// Swing Validation
showUnvalidated = input.bool(true, "Show Unvalidated Swings",
    tooltip="Display swing points that haven't been validated yet")
```

### Zone Detection
```pine
// Consolidation Settings
consolidationBars = input.int(3, "Consolidation Bars", minval=2, maxval=20,
    tooltip="Minimum bars to form a consolidation pattern")
consolidationThreshold = input.float(0.5, "Consolidation ATR Multiplier", minval=0.1, maxval=2.0, step=0.1,
    tooltip="Range must be less than ATR * this value to qualify as consolidation")

// Impulse Detection
impulseThreshold = input.float(1.5, "Impulse ATR Multiplier", minval=0.5, maxval=5.0, step=0.1,
    tooltip="Move must exceed ATR * this value to qualify as impulse")
atrLength = input.int(14, "ATR Length", minval=5, maxval=50)

// Zone Management
maxZones = input.int(10, "Maximum Active Zones", minval=3, maxval=20,
    tooltip="Maximum number of supply/demand zones to display")
zoneExpiry = input.int(100, "Zone Expiry Bars", minval=20, minval=500,
    tooltip="Remove zones after this many bars if not tested")
```

### Signal Generation
```pine
// Entry Rules
allowRetest = input.bool(true, "Allow Multiple Retests", inline="entry")
firstTouchOnly = input.bool(false, "First Touch Only", inline="entry",
    tooltip="Only signal on first retest of zone")

// Risk Management
minRR = input.float(2.5, "Minimum R:R Ratio", minval=1.0, maxval=10.0, step=0.1,
    tooltip="Minimum risk-to-reward ratio required for signal")
stopLossBuffer = input.float(0.1, "Stop Loss Buffer %", minval=0, maxval=5.0, step=0.1,
    tooltip="Extra space beyond zone boundary for stop loss")
```

### Visual Settings
```pine
// Swing Point Colors
colorValidatedHigh = input.color(color.red, "Validated High", group="Swing Points", inline="vh")
colorValidatedLow = input.color(color.green, "Validated Low", group="Swing Points", inline="vl")
colorUnvalidatedHigh = input.color(color.new(color.red, 60), "Unvalidated High", group="Swing Points", inline="uh")
colorUnvalidatedLow = input.color(color.new(color.green, 60), "Unvalidated Low", group="Swing Points", inline="ul")

// Zone Colors
colorDemandZone = input.color(color.new(color.green, 85), "Demand Zone", group="Zones", inline="dz")
colorSupplyZone = input.color(color.new(color.red, 85), "Supply Zone", group="Zones", inline="sz")
colorTestedZone = input.color(color.new(color.gray, 90), "Tested Zone", group="Zones", inline="tz")

// Signal Colors
colorLongSignal = input.color(color.green, "Long Signal", group="Signals", inline="ls")
colorShortSignal = input.color(color.red, "Short Signal", group="Signals", inline="ss")
colorEntryLine = input.color(color.blue, "Entry Line", group="Signals", inline="el")
colorStopLine = input.color(color.red, "Stop Loss", group="Signals", inline="sl")
colorTargetLine = input.color(color.green, "Take Profit", group="Signals", inline="tp")

// Dashboard
showDashboard = input.bool(true, "Show Dashboard", group="Display")
dashPosition = input.string("top_right", "Dashboard Position",
    options=["top_left", "top_center", "top_right", "middle_left", "middle_center", "middle_right", "bottom_left", "bottom_center", "bottom_right"],
    group="Display")
```

### Alert Settings
```pine
alertOnLong = input.bool(true, "Long Entry Alert", group="Alerts", inline="long")
alertOnShort = input.bool(true, "Short Entry Alert", group="Alerts", inline="short")
alertOnTrendChange = input.bool(false, "Trend Change Alert", group="Alerts", inline="trend")
```

---

## Data Structures

### Custom Types

```pine
// Swing Point Type
type SwingPoint
    float price
    int barIndex
    bool isHigh
    bool isValidated
    int validatedBar

// Zone Type
type Zone
    float top
    float bottom
    int startBar
    int impulseBar
    bool isSupply  // true = supply, false = demand
    bool isActive
    bool isTested
    int testCount
    box visual
    label info

// Signal Type
type TradeSignal
    bool isLong
    float entry
    float stopLoss
    float takeProfit
    float rrRatio
    int zoneId
    line entryLine
    line slLine
    line tpLine
    label signalLabel
```

---

## Core Logic Specifications

### 1. Swing Point Detection & Validation

#### Detection Phase
```pine
// Detect pivot highs and lows
pivotHigh = ta.pivothigh(high, pivotLength, pivotLength)
pivotLow = ta.pivotlow(low, pivotLength, pivotLength)

// Wait for confirmation bars if specified
confirmedPivotHigh = confirmBars > 0 ? pivotHigh[confirmBars] : pivotHigh
confirmedPivotLow = confirmBars > 0 ? pivotLow[confirmBars] : pivotLow

// Store in arrays when detected
if not na(confirmedPivotHigh)
    swingPoint = SwingPoint.new(
        confirmedPivotHigh,
        bar_index - pivotLength - confirmBars,
        true,   // isHigh
        false,  // not validated yet
        na
    )
    array.push(unvalidatedHighs, swingPoint)

if not na(confirmedPivotLow)
    swingPoint = SwingPoint.new(
        confirmedPivotLow,
        bar_index - pivotLength - confirmBars,
        false,  // isLow
        false,  // not validated yet
        na
    )
    array.push(unvalidatedLows, swingPoint)
```

#### Validation Phase
```pine
// Check if any unvalidated lows should be validated
// Rule: A low is validated when price breaks above the previous high
for i = 0 to array.size(unvalidatedLows) - 1
    swing = array.get(unvalidatedLows, i)

    // Find the previous validated high
    if array.size(validatedHighs) > 0
        previousHigh = array.get(validatedHighs, array.size(validatedHighs) - 1)

        // Has price broken above that high?
        if high > previousHigh.price
            swing.isValidated := true
            swing.validatedBar := bar_index
            array.push(validatedLows, swing)
            array.remove(unvalidatedLows, i)
            break

// Check if any unvalidated highs should be validated
// Rule: A high is validated when price breaks below the previous low
for i = 0 to array.size(unvalidatedHighs) - 1
    swing = array.get(unvalidatedHighs, i)

    // Find the previous validated low
    if array.size(validatedLows) > 0
        previousLow = array.get(validatedLows, array.size(validatedLows) - 1)

        // Has price broken below that low?
        if low < previousLow.price
            swing.isValidated := true
            swing.validatedBar := bar_index
            array.push(validatedHighs, swing)
            array.remove(unvalidatedHighs, i)
            break
```

#### Array Cleanup
```pine
// Keep only most recent validated swings (limit memory usage)
MAX_TRACKED_SWINGS = 20

if array.size(validatedHighs) > MAX_TRACKED_SWINGS
    array.shift(validatedHighs)

if array.size(validatedLows) > MAX_TRACKED_SWINGS
    array.shift(validatedLows)
```

### 2. Market Structure Analysis

```pine
// Determine trend based on validated swing sequences
determineTrend() =>
    var string currentTrend = "undefined"
    var float trendInvalidationLevel = na

    if array.size(validatedHighs) >= 2 and array.size(validatedLows) >= 2
        // Get most recent validated swings
        lastHigh = array.get(validatedHighs, array.size(validatedHighs) - 1)
        previousHigh = array.get(validatedHighs, array.size(validatedHighs) - 2)
        lastLow = array.get(validatedLows, array.size(validatedLows) - 1)
        previousLow = array.get(validatedLows, array.size(validatedLows) - 2)

        // Check for uptrend: higher highs AND higher lows
        higherHigh = lastHigh.price > previousHigh.price
        higherLow = lastLow.price > previousLow.price

        // Check for downtrend: lower highs AND lower lows
        lowerHigh = lastHigh.price < previousHigh.price
        lowerLow = lastLow.price < previousLow.price

        if higherHigh and higherLow
            currentTrend := "bullish"
            trendInvalidationLevel := lastLow.price
        else if lowerHigh and lowerLow
            currentTrend := "bearish"
            trendInvalidationLevel := lastHigh.price

    [currentTrend, trendInvalidationLevel]

// Check for trend change
checkTrendChange(currentTrend, invalidationLevel) =>
    changed = false

    if currentTrend == "bullish" and not na(invalidationLevel)
        if low < invalidationLevel
            changed := true
    else if currentTrend == "bearish" and not na(invalidationLevel)
        if high > invalidationLevel
            changed := true

    changed
```

### 3. Supply & Demand Zone Detection

```pine
// Detect consolidation patterns
detectConsolidation(lookback) =>
    rangeHigh = ta.highest(high, lookback)
    rangeLow = ta.lowest(low, lookback)
    rangeSize = rangeHigh - rangeLow
    atrValue = ta.atr(atrLength)

    isConsolidation = rangeSize < (atrValue * consolidationThreshold)
    [isConsolidation, rangeLow, rangeHigh]

// Detect impulse moves
detectImpulse(priceChange, lookback) =>
    atrValue = ta.atr(atrLength)
    threshold = atrValue * impulseThreshold

    isBullishImpulse = priceChange > threshold
    isBearishImpulse = priceChange < -threshold

    [isBullishImpulse, isBearishImpulse]

// Main zone detection logic
var array<Zone> demandZones = array.new<Zone>()
var array<Zone> supplyZones = array.new<Zone>()
var bool wasInConsolidation = false
var float consolidationLow = na
var float consolidationHigh = na
var int consolidationStartBar = na

// Check for consolidation
[isConsolidating, consLow, consHigh] = detectConsolidation(consolidationBars)

if isConsolidating and not wasInConsolidation
    // Entering consolidation - mark the start
    consolidationStartBar := bar_index - consolidationBars
    consolidationLow := consLow
    consolidationHigh := consHigh
    wasInConsolidation := true
else if not isConsolidating and wasInConsolidation
    // Breaking out of consolidation - check for impulse
    breakoutMove = close - close[1]
    [bullishImpulse, bearishImpulse] = detectImpulse(breakoutMove, 1)

    if bullishImpulse and currentTrend == "bullish"
        // Create demand zone (only in uptrend)
        zone = Zone.new(
            consolidationHigh,
            consolidationLow,
            consolidationStartBar,
            bar_index,
            false,  // isSupply = false (it's demand)
            true,   // isActive
            false,  // isTested
            0,      // testCount
            na,     // box visual (create later)
            na      // label (create later)
        )
        array.push(demandZones, zone)

    else if bearishImpulse and currentTrend == "bearish"
        // Create supply zone (only in downtrend)
        zone = Zone.new(
            consolidationHigh,
            consolidationLow,
            consolidationStartBar,
            bar_index,
            true,   // isSupply = true
            true,   // isActive
            false,  // isTested
            0,      // testCount
            na,     // box visual
            na      // label
        )
        array.push(supplyZones, zone)

    wasInConsolidation := false

// Update zone status (test detection and expiry)
updateZones(zones) =>
    for i = array.size(zones) - 1 to 0
        zone = array.get(zones, i)

        if zone.isActive
            // Check if price is testing the zone
            inZone = low <= zone.top and high >= zone.bottom

            if inZone
                zone.isTested := true
                zone.testCount += 1

                // Deactivate if first-touch-only mode
                if firstTouchOnly
                    zone.isActive := false

            // Check if zone is broken
            if zone.isSupply
                zoneBreak = close > zone.top
            else
                zoneBreak = close < zone.bottom

            if zoneBreak
                zone.isActive := false

            // Check for expiry
            if bar_index - zone.impulseBar > zoneExpiry
                zone.isActive := false

        // Remove inactive zones if max limit reached
        if not zone.isActive and array.size(zones) > maxZones
            if not na(zone.visual)
                box.delete(zone.visual)
            if not na(zone.info)
                label.delete(zone.info)
            array.remove(zones, i)
```

### 4. Entry Signal Generation

```pine
// Check for entry opportunities at active zones
generateSignals(trend) =>
    var TradeSignal currentSignal = na
    var bool signalActive = false

    // Check demand zones for long entries (uptrend only)
    if trend == "bullish"
        for i = 0 to array.size(demandZones) - 1
            zone = array.get(demandZones, i)

            if zone.isActive
                inZone = low <= zone.top and high >= zone.bottom

                if inZone and (allowRetest or zone.testCount == 0)
                    // Calculate trade parameters
                    entry = close
                    stopLoss = zone.bottom * (1 - stopLossBuffer / 100)

                    // Find take profit (most recent validated high)
                    if array.size(validatedHighs) > 0
                        lastHigh = array.get(validatedHighs, array.size(validatedHighs) - 1)
                        takeProfit = lastHigh.price

                        // Calculate R:R
                        risk = entry - stopLoss
                        reward = takeProfit - entry
                        rrRatio = reward / risk

                        // Check if meets minimum R:R
                        if rrRatio >= minRR and not signalActive
                            currentSignal := TradeSignal.new(
                                true,       // isLong
                                entry,
                                stopLoss,
                                takeProfit,
                                rrRatio,
                                i,          // zone ID
                                na, na, na, na  // lines created later
                            )
                            signalActive := true
                            break

    // Check supply zones for short entries (downtrend only)
    else if trend == "bearish"
        for i = 0 to array.size(supplyZones) - 1
            zone = array.get(supplyZones, i)

            if zone.isActive
                inZone = low <= zone.top and high >= zone.bottom

                if inZone and (allowRetest or zone.testCount == 0)
                    // Calculate trade parameters
                    entry = close
                    stopLoss = zone.top * (1 + stopLossBuffer / 100)

                    // Find take profit (most recent validated low)
                    if array.size(validatedLows) > 0
                        lastLow = array.get(validatedLows, array.size(validatedLows) - 1)
                        takeProfit = lastLow.price

                        // Calculate R:R
                        risk = stopLoss - entry
                        reward = entry - takeProfit
                        rrRatio = reward / risk

                        // Check if meets minimum R:R
                        if rrRatio >= minRR and not signalActive
                            currentSignal := TradeSignal.new(
                                false,      // isLong = false (short)
                                entry,
                                stopLoss,
                                takeProfit,
                                rrRatio,
                                i,          // zone ID
                                na, na, na, na  // lines created later
                            )
                            signalActive := true
                            break

    [currentSignal, signalActive]
```

### 5. Risk-to-Reward Calculation

```pine
// Calculate R:R ratio for a trade setup
calculateRR(entry, stopLoss, takeProfit, isLong) =>
    risk = isLong ? (entry - stopLoss) : (stopLoss - entry)
    reward = isLong ? (takeProfit - entry) : (entry - takeProfit)

    rrRatio = risk > 0 ? (reward / risk) : 0
    rrRatio

// Filter trades by minimum R:R
meetsRRRequirement(rrRatio) =>
    rrRatio >= minRR
```

---

## Visual Elements Specification

### 1. Swing Point Labels

```pine
// Draw validated swing points
if not na(confirmedPivotHigh)
    label.new(
        bar_index - pivotLength - confirmBars,
        confirmedPivotHigh,
        text="HH",
        style=label.style_label_down,
        color=colorValidatedHigh,
        textcolor=color.white,
        size=size.small,
        tooltip="Validated Swing High"
    )

if not na(confirmedPivotLow)
    label.new(
        bar_index - pivotLength - confirmBars,
        confirmedPivotLow,
        text="LL",
        style=label.style_label_up,
        color=colorValidatedLow,
        textcolor=color.white,
        size=size.small,
        tooltip="Validated Swing Low"
    )

// Draw unvalidated swings (optional)
if showUnvalidated
    // Draw unvalidated highs
    for swing in unvalidatedHighs
        label.new(
            swing.barIndex,
            swing.price,
            text="H?",
            style=label.style_label_down,
            color=colorUnvalidatedHigh,
            textcolor=color.white,
            size=size.tiny,
            tooltip="Unvalidated High"
        )

    // Draw unvalidated lows
    for swing in unvalidatedLows
        label.new(
            swing.barIndex,
            swing.price,
            text="L?",
            style=label.style_label_up,
            color=colorUnvalidatedLow,
            textcolor=color.white,
            size=size.tiny,
            tooltip="Unvalidated Low"
        )
```

### 2. Supply/Demand Zone Boxes

```pine
// Draw demand zones
for zone in demandZones
    if na(zone.visual)
        zoneColor = zone.isActive ? colorDemandZone : colorTestedZone
        zone.visual := box.new(
            zone.startBar,
            zone.top,
            bar_index,
            zone.bottom,
            bgcolor=zoneColor,
            border_color=color.new(color.green, 0),
            border_width=1,
            extend=extend.right
        )

        // Add zone label
        zone.info := label.new(
            zone.impulseBar,
            zone.top,
            text="DEMAND",
            style=label.style_label_down,
            color=color.green,
            textcolor=color.white,
            size=size.small
        )
    else
        // Update box to extend to current bar
        box.set_right(zone.visual, bar_index)

        // Update color based on status
        zoneColor = zone.isActive ? colorDemandZone : colorTestedZone
        box.set_bgcolor(zone.visual, zoneColor)

// Draw supply zones
for zone in supplyZones
    if na(zone.visual)
        zoneColor = zone.isActive ? colorSupplyZone : colorTestedZone
        zone.visual := box.new(
            zone.startBar,
            zone.top,
            bar_index,
            zone.bottom,
            bgcolor=zoneColor,
            border_color=color.new(color.red, 0),
            border_width=1,
            extend=extend.right
        )

        // Add zone label
        zone.info := label.new(
            zone.impulseBar,
            zone.bottom,
            text="SUPPLY",
            style=label.style_label_up,
            color=color.red,
            textcolor=color.white,
            size=size.small
        )
    else
        // Update box
        box.set_right(zone.visual, bar_index)

        // Update color
        zoneColor = zone.isActive ? colorSupplyZone : colorTestedZone
        box.set_bgcolor(zone.visual, zoneColor)
```

### 3. Entry Signal Visualization

```pine
// Draw entry, stop loss, and take profit lines when signal triggers
if not na(currentSignal)
    // Entry line
    currentSignal.entryLine := line.new(
        bar_index,
        currentSignal.entry,
        bar_index + 20,
        currentSignal.entry,
        color=colorEntryLine,
        width=2,
        style=line.style_solid
    )

    // Stop loss line
    currentSignal.slLine := line.new(
        bar_index,
        currentSignal.stopLoss,
        bar_index + 20,
        currentSignal.stopLoss,
        color=colorStopLine,
        width=2,
        style=line.style_dashed
    )

    // Take profit line
    currentSignal.tpLine := line.new(
        bar_index,
        currentSignal.takeProfit,
        bar_index + 20,
        currentSignal.takeProfit,
        color=colorTargetLine,
        width=2,
        style=line.style_dashed
    )

    // Signal label with R:R info
    labelText = currentSignal.isLong ? "LONG\nR:R " + str.tostring(currentSignal.rrRatio, "#.##") : "SHORT\nR:R " + str.tostring(currentSignal.rrRatio, "#.##")
    labelColor = currentSignal.isLong ? colorLongSignal : colorShortSignal
    labelStyle = currentSignal.isLong ? label.style_label_up : label.style_label_down

    currentSignal.signalLabel := label.new(
        bar_index,
        currentSignal.isLong ? low : high,
        text=labelText,
        style=labelStyle,
        color=labelColor,
        textcolor=color.white,
        size=size.normal,
        tooltip="Entry: " + str.tostring(currentSignal.entry) +
                "\nSL: " + str.tostring(currentSignal.stopLoss) +
                "\nTP: " + str.tostring(currentSignal.takeProfit) +
                "\nR:R: " + str.tostring(currentSignal.rrRatio, "#.##") + ":1"
    )
```

### 4. Dashboard Table

```pine
// Create dashboard
var table dashboard = na

if showDashboard and barstate.islast
    if na(dashboard)
        position = dashPosition == "top_right" ? position.top_right :
                   dashPosition == "top_left" ? position.top_left :
                   dashPosition == "top_center" ? position.top_center :
                   dashPosition == "middle_right" ? position.middle_right :
                   dashPosition == "middle_left" ? position.middle_left :
                   dashPosition == "middle_center" ? position.middle_center :
                   dashPosition == "bottom_right" ? position.bottom_right :
                   dashPosition == "bottom_left" ? position.bottom_left :
                   position.bottom_center

        dashboard := table.new(position, 2, 6,
            border_width=2,
            border_color=color.gray,
            frame_width=2,
            frame_color=color.gray)

    // Header
    table.cell(dashboard, 0, 0, "Market Structure",
        bgcolor=color.new(color.blue, 70),
        text_color=color.white,
        text_size=size.normal)
    table.cell(dashboard, 1, 0, "",
        bgcolor=color.new(color.blue, 70))

    // Current trend
    trendText = currentTrend == "bullish" ? "BULLISH" :
                currentTrend == "bearish" ? "BEARISH" : "UNDEFINED"
    trendColor = currentTrend == "bullish" ? color.green :
                 currentTrend == "bearish" ? color.red : color.gray

    table.cell(dashboard, 0, 1, "Trend:",
        text_color=color.white,
        bgcolor=color.new(color.gray, 80))
    table.cell(dashboard, 1, 1, trendText,
        text_color=color.white,
        bgcolor=color.new(trendColor, 70))

    // Trend invalidation level
    invalidationText = not na(trendInvalidationLevel) ?
        str.tostring(trendInvalidationLevel, format.mintick) : "N/A"

    table.cell(dashboard, 0, 2, "Invalidation:",
        text_color=color.white,
        bgcolor=color.new(color.gray, 80))
    table.cell(dashboard, 1, 2, invalidationText,
        text_color=color.white,
        bgcolor=color.new(color.gray, 80))

    // Active zones
    activeDemand = 0
    for zone in demandZones
        if zone.isActive
            activeDemand += 1

    activeSupply = 0
    for zone in supplyZones
        if zone.isActive
            activeSupply += 1

    table.cell(dashboard, 0, 3, "Demand Zones:",
        text_color=color.white,
        bgcolor=color.new(color.gray, 80))
    table.cell(dashboard, 1, 3, str.tostring(activeDemand),
        text_color=color.white,
        bgcolor=color.new(color.green, 70))

    table.cell(dashboard, 0, 4, "Supply Zones:",
        text_color=color.white,
        bgcolor=color.new(color.gray, 80))
    table.cell(dashboard, 1, 4, str.tostring(activeSupply),
        text_color=color.white,
        bgcolor=color.new(color.red, 70))

    // Current signal status
    signalText = signalActive ?
        (currentSignal.isLong ? "LONG (" + str.tostring(currentSignal.rrRatio, "#.##") + ":1)" :
                                "SHORT (" + str.tostring(currentSignal.rrRatio, "#.##") + ":1)") :
        "No Signal"

    signalColor = signalActive ?
        (currentSignal.isLong ? color.green : color.red) : color.gray

    table.cell(dashboard, 0, 5, "Signal:",
        text_color=color.white,
        bgcolor=color.new(color.gray, 80))
    table.cell(dashboard, 1, 5, signalText,
        text_color=color.white,
        bgcolor=color.new(signalColor, 70))
```

### 5. Trend Direction Background (Optional)

```pine
// Optional background color based on trend
showTrendBG = input.bool(false, "Show Trend Background", group="Display")
bgTransparency = input.int(95, "Background Transparency", minval=80, maxval=98, group="Display")

trendBG = showTrendBG ?
    (currentTrend == "bullish" ? color.new(color.green, bgTransparency) :
     currentTrend == "bearish" ? color.new(color.red, bgTransparency) :
     na) : na

bgcolor(trendBG)
```

---

## Alert Conditions

```pine
// Long entry alert
longSignal = signalActive and currentSignal.isLong
alertcondition(longSignal and alertOnLong,
    title="Long Entry Signal",
    message="LONG signal triggered!\nEntry: {{close}}\nSL: " + str.tostring(currentSignal.stopLoss) + "\nTP: " + str.tostring(currentSignal.takeProfit) + "\nR:R: " + str.tostring(currentSignal.rrRatio, "#.##") + ":1")

// Short entry alert
shortSignal = signalActive and not currentSignal.isLong
alertcondition(shortSignal and alertOnShort,
    title="Short Entry Signal",
    message="SHORT signal triggered!\nEntry: {{close}}\nSL: " + str.tostring(currentSignal.stopLoss) + "\nTP: " + str.tostring(currentSignal.takeProfit) + "\nR:R: " + str.tostring(currentSignal.rrRatio, "#.##") + ":1")

// Trend change alert
var string previousTrend = ""
trendChanged = currentTrend != previousTrend and currentTrend != "undefined"
if trendChanged
    previousTrend := currentTrend

alertcondition(trendChanged and alertOnTrendChange,
    title="Trend Change",
    message="Trend changed to " + currentTrend)
```

---

## Implementation Notes

### Repainting Considerations
1. **Pivot Detection**: Has natural lag of `pivotLength` bars
2. **Confirmation Bars**: Additional delay reduces repainting but increases lag
3. **Zone Detection**: Minimal repainting if consolidation parameters are stable
4. **Signals**: Generated in real-time when price enters zones

### Performance Optimization
1. Limit tracked swing points to most recent 20
2. Limit active zones to `maxZones` setting
3. Remove expired/tested zones automatically
4. Use type system for efficient data management
5. Update visual elements only when necessary

### Edge Cases to Handle
1. **Early Bars**: Handle na values when insufficient history
2. **No Validated Swings**: Don't generate signals if no trend established
3. **Overlapping Zones**: Allow but limit total count
4. **Rapid Trend Changes**: Reset zones when trend changes
5. **Missing Take Profit**: Don't signal if no valid swing target exists

### Memory Management
1. Use circular buffer approach for swing arrays
2. Delete old box/label objects when removing zones
3. Limit line/label creation for active signals only
4. Clean up visual elements periodically

---

## Testing Checklist

### Functionality Tests
- [ ] Swing points detected correctly with specified pivot length
- [ ] Validation logic works (lows validated by breaking previous high, vice versa)
- [ ] Trend determination accurate (HH+HL = bullish, LL+LH = bearish)
- [ ] Consolidation zones detected before impulse moves
- [ ] Supply zones only created in downtrends
- [ ] Demand zones only created in uptrends
- [ ] Entry signals only in trend direction
- [ ] R:R calculated correctly
- [ ] Signals filtered by minimum R:R threshold
- [ ] Stop loss placed correctly (below demand, above supply)
- [ ] Take profit at recent validated swing point

### Visual Tests
- [ ] Swing labels display at correct locations
- [ ] Zone boxes extend properly
- [ ] Zone colors update based on status (active/tested)
- [ ] Entry/SL/TP lines draw correctly on signal
- [ ] Dashboard displays accurate information
- [ ] Labels readable and non-overlapping
- [ ] Colors match input settings

### Edge Case Tests
- [ ] Handles early bars with insufficient data
- [ ] Works with different timeframes
- [ ] Handles rapid price movements
- [ ] Manages maximum zone limit correctly
- [ ] Zone expiry works as intended
- [ ] Handles trend changes properly
- [ ] No errors with extreme pivot lengths

### Alert Tests
- [ ] Long signals trigger alerts correctly
- [ ] Short signals trigger alerts correctly
- [ ] Trend change alerts work (if enabled)
- [ ] Alert messages contain correct information

---

## File Structure

```
/projects/market-structure-sd-strategy.pine    # Main indicator file
```

---

## Next Steps

1. **Implementation Phase**: Hand off to `pine-developer` agent
2. **Debugging Phase**: Add debug tools with `pine-debugger` agent
3. **Optimization Phase**: Enhance UX/performance with `pine-optimizer` agent
4. **Testing Phase**: Comprehensive testing on multiple timeframes/symbols
5. **Documentation**: Final documentation for TradingView publication

---

## Dependencies

- Pine Script v6
- TradingView Premium account (for multi-timeframe testing)
- Historical data with sufficient bars for backtesting

---

## Estimated Complexity

**High Complexity** - This is an advanced indicator requiring:
- Custom type definitions
- Array management for swing points and zones
- Complex validation logic
- Multiple visual elements (boxes, labels, lines, table)
- Real-time signal generation
- Memory management

Estimated development time: 4-6 hours for experienced Pine Script developer

---

## Color Scheme Recommendations

### Default Professional Theme
- **Validated Highs**: `color.new(#D32F2F, 0)` - Red
- **Validated Lows**: `color.new(#388E3C, 0)` - Green
- **Unvalidated Highs**: `color.new(#D32F2F, 60)` - Transparent Red
- **Unvalidated Lows**: `color.new(#388E3C, 60)` - Transparent Green
- **Demand Zones**: `color.new(#4CAF50, 85)` - Light Green
- **Supply Zones**: `color.new(#F44336, 85)` - Light Red
- **Tested Zones**: `color.new(#9E9E9E, 90)` - Gray
- **Entry Line**: `color.new(#2196F3, 0)` - Blue
- **Stop Loss**: `color.new(#F44336, 0)` - Red
- **Take Profit**: `color.new(#4CAF50, 0)` - Green

---

## Maintenance Notes

### Future Enhancements
1. Multi-timeframe analysis (HTF trend + LTF entries)
2. Volume confirmation for zones
3. Zone strength rating (volume, size, test count)
4. Partial take profit levels
5. Trailing stop loss option
6. Session-specific zones (separate London/NY/Asia)
7. Divergence confirmation with RSI/MACD
8. Fibonacci extension targets

### Known Limitations
1. Maximum 500 boxes can be drawn (Pine Script limit)
2. Pivot detection has inherent lag
3. Zone detection is discretionary (ATR-based thresholds)
4. Requires trending markets (consolidation periods less effective)
5. No volume analysis (could improve zone quality)

---

## Version History

**v1.0.0** - Initial specification
- Core market structure detection
- Supply/demand zone identification
- Entry signal generation with R:R filter
- Comprehensive visual system
- Dashboard and alerts

---

## References

- Pine Script v6 Language Reference
- TradingView Built-in Functions Documentation
- Supply and Demand Trading Methodology
- Market Structure Analysis Principles
- Price Action Trading Concepts

---

*End of Specification Document*
