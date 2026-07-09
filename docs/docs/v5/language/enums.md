# Enums

This is documentation for v5, which is no longer
					actively maintained.

For up-to-date documentation, see the latest version.
      Enums
Notice!This page contains advanced material. If you are a beginning Pine
Script® programmer, we recommend you become familiar with other, more
accessible Pine Script features before you venture here.
Introduction
Pine Script Enums, otherwise known as enumerations, enumerated
types, or
enum types, are unique data types with all possible values (members)
explicitly defined by the programmer. They provide a human-readable,
expressive way to declare distinct sets of predefined values that
variables, conditional expressions, and
collections can accept, allowing more strict control over the values
used in a script’s logic.
Declaring an enum
To declare an enum, use the
enum
keyword with the following syntax:
[export ]enum <enumName>    <field_1>[ = <title_1>]    <field_2>[ = <title_2>]    ...    <field_N>[ = <title_N>]
Each field in the enum represents a unique, named member (value)
of the enum type. Users can specify optional “const string” titles for
enum fields to add extra information about what their values represent.
If the programmer does not specify a field’s title, its title is the
“string” representation of its name.
Enum inputs display enum field titles within their dropdown menus in a
script’s “Settings/Inputs” tab. Scripts can also retrieve enum field
titles using the
str.tostring()
function, allowing their use in additional calculations. See
this section below for more information.
While the above syntax may look similar to the syntax for declaring
user-defined types (UDTs), it’s crucial to understand that
enum types and
UDTs
serve different purposes. Scripts use
UDTs
to create objects with
“series” fields that can hold values of any specified type. In
contrast, enums are distinct groups of “simple” fields representing
the specific, predefined values of the same unique type that
variables, expressions, and
collections can accept.
For example, this code block declares a Signal enum with three fields:
buy, sell, and neutral. Each field represents a distinct member
(possible value) of the Signal
enum type:
//@enum           An enumeration of named values representing buy, sell, and neutral signal states.
//@field buy      Represents a "Buy signal" state.
//@field sell     Represents a "Sell signal" state.
//@field neutral  Represents a "neutral" state. 
enum Signal
    buy     = "Buy signal"
    sell    = "Sell signal"
    neutral 
Note that:

The Signal identifier represents the enum’s name, which
signifies the unique type the fields belong to.
We used the //@enum and //@field
annotations to document the meaning of the enum and its fields.
Unlike the buy and sell fields, the neutral field does not
include a specified title. As such, its title is the “string”
representation of its name (“neutral”).

To retrieve a member of an enum, reference its field name using dot
notation syntax, i.e.:
enumName.fieldName
As with other types, scripts can assign enum members to variables,
function parameters, and
UDT
fields, allowing strict control over their allowed values.
For instance, this line of code declares a mySignal variable whose
value is the neutral member of the Signal enum. Any value assigned
to this variable later must also be of the same
enum type:
mySignal = Signal.neutral
Note that the above line does not require declaring the variable’s
type as Signal because the compiler can automatically infer that
information from the assigned value. If we use
na as
the initial value instead, we must use Signal as the type keyword to
specify that mySignal will accept a Signal member:
Signal mySignal = na
Using enums
Scripts can compare enum members with the
== and
!=
operators and use them in
conditional structures, allowing the convenient creation of logical patterns with a
reduced risk of unintended values or operations.
The following example declares an OscType enum with three fields
representing different oscillator choices: rsi, mfi, and cci. The
calcOscillator() function uses OscType members within a
switch
structure to determine which oscillator it calculates. The script calls
this function using the value from an
enum input as the selection argument and plots the
resulting oscillator:

```pinescript
//@version=5
indicator("Using enums demo")

//@enum An enumeration of oscillator choices.
```
enum OscType
    rsi = "Relative Strength Index"
    mfi = "Money Flow Index"
    cci = "Commodity Channel Index"

```pinescript
//@variable An enumerator (member) of the `OscType` enum.
```
OscType oscInput = input.enum(OscType.rsi, "Oscillator type")

```pinescript
//@function         Calculates one of three oscillators based on a specified `selection`.
//@param source     The series of values to process.
//@param length     The number of bars in the calculation.
//@param selection  Determines which oscillator to calculate.
calcOscillator(float source, simple int length, OscType selection) =>
    result = switch selection
        OscType.rsi => ta.rsi(source, length)
        OscType.mfi => ta.mfi(source, length)
        OscType.cci => ta.cci(source, length)

// Plot the value of a `calcOscillator()` call with `oscInput` as the `selection`.
plot(calcOscillator(close, 20, oscInput))
```
Note that:

The selection parameter of the calcOscillator() function can
only take on one of four values: OscType.rsi, OscType.mfi,
OscType.cci, or
na.
The “Oscillator type” input in the script’s
“Settings/Inputs” tab displays all OscType field titles in
its dropdown. See
this section to learn more about enum inputs.

It’s crucial to note that each declared enum represents a unique
type. Scripts cannot compare members of different enums or use such
members in expressions requiring a specific
enum type, even if the fields have identical names and titles.
In this example, we added an OscType2 enum to the above script and
changed the oscInput variable to use a member of that enum. The script
now raises a compilation error because it can’t use a member of the
OscType2 enum as the selection argument in the calcOscillator()
call:
```pinescript
//@version=5
indicator("Incompatible enums demo")

//@enum An enumeration of oscillator choices.
```
enum OscType
    rsi = "Relative Strength Index"
    mfi = "Money Flow Index"
    cci = "Commodity Channel Index"

//@enum An enumeration of oscillator choices. Its fields DO NOT represent the same values those in the `OscType` enum.
enum OscType2
    rsi = "Relative Strength Index"
    mfi = "Money Flow Index"
    cci = "Commodity Channel Index"

```pinescript
//@variable An enumerator (member) of the `OscType2` enum.
```
OscType2 oscInput = input.enum(OscType2.rsi, "Oscillator type")

```pinescript
//@function         Calculates one of three oscillators based on a specified `selection`.
//@param source     The series of values to process.
//@param length     The number of bars in the calculation.
//@param selection  Determines which oscillator to calculate.
calcOscillator(float source, simple int length, OscType selection) =>
    result = switch selection
        OscType.rsi => ta.rsi(source, length)
        OscType.mfi => ta.mfi(source, length)
        OscType.cci => ta.cci(source, length)

// Plot the value of a `calcOscillator()` call with `oscInput` as the `selection`.
// Raises a compilation error because only members of `OscType` are allowed. 
plot(calcOscillator(close, 20, oscInput))
```
Utilizing field titles
The “string” titles of an enum’s fields allow programmers to add
extra information to each member. These field titles appear within a
dropdown in the script’s “Settings/Inputs” tab when calling the
input.enum()
function.
Scripts can also utilize enum field titles in their calculations and
logic. Use the string conversion function
(str.tostring())
on an enum field to access its title.
The following example combines different enum field titles to construct
a ticker ID for requesting data from
another context. The script declares two enums, Exchange and Pair, whose
respective fields represent exchange and currency pair names. It
uses
input.enum()
to assign user-specified enum members to the exchangeInput and
pairInput variables, then retrieves the “string” titles from those
variables with
str.tostring()
and concatenates them to form an “Exchange:Symbol” pair for use in a
request.security()
call:

```pinescript
//@version=5
indicator("Utilizing field titles demo")

//@enum An enumeration of cryptocurrency exchanges. All field titles are the same as the field names.
```
enum Exchange
    BINANCE
    BITSTAMP
    BITFINEX
    COINBASE
    KRAKEN

//@enum An enumeration of cryptocurrency pairs. All the field titles are the same as the field names. 
enum Pair
    BTCUSD
    ETHUSD
    SOLUSD
    XRPUSD

```pinescript
//@variable An enumerator (member) of the `Exchange` enum.
```
Exchange exchangeInput = input.enum(Exchange.BINANCE, "Exchange")
```pinescript
//@variable An enumerator (member) of the `Pair` enum.
```
Pair pairInput = input.enum(Pair.BTCUSD, "Pair")

```pinescript
//@variable The exchange-symbol pair for the data request. 
```
simple string symbol = str.tostring(exchangeInput) + ":" + str.tostring(pairInput)

// Plot the `close` value requested from the `symbol` context.
plot(request.security(symbol, timeframe.period, close), "Requested close", color.purple, 3)
Note that:

None of the members of the Exchange or Pair enums have
specified titles. Therefore, each field’s title is the
“string” representation of its name, as shown by the script’s
enum inputs.
Calling the
str.tostring()
function on an enum field is the only way to retrieve its
title for additional calculations. The
str.format()
and log.*() functions cannot accept enum members. To use a
field’s title in a string formatting function, call
str.tostring()
on the field first, then pass the resulting “string” to the
function.

Collecting enum members
Pine Script collections (arrays, matrices, and maps) can store enum members, allowing strict control over the values they can contain. To declare a collection of enum members, include the enum’s name in the collection’s type template.
For example, this code block creates an empty
array
to hold members of the FooBar enum. The only values this array can
allow as elements are FooBar.foo, FooBar.bar, FooBar.baz, and
na:
```pinescript
//@variable An enumeration of miscellaneous named members.
```
enum FooBar
    foo
    bar
    baz

```pinescript
//@variable An array that can only contain the following values: `FooBar.foo`, `FooBar.bar`, `FooBar.baz`, `na`.
```
array<FooBar> fooBarArray = array.new<FooBar>()
Enums are particularly helpful when working with
maps, as unlike other
non-fundamental types, scripts can declare maps with keys of an
enum type, enabling strict control over all possible keys allowed in
their key-value pairs.
The following example uses a
map
with enum keys and “int” values to track and count signal states
across chart bars. The script’s Signal enum contains five fields
representing specific named states. The signalCounters
map
uses the Signal name as the first keyword in its
type template to specify that it can only accept Signal members as keys.
The script uses a
switch
structure to calculate a signalState variable whose value is a member
of the Signal enum, which it uses to determine the counter value to
update in the signalCounters map. It constructs a “string” to
represent the key-value pairs of the
map
and displays the result in a single-cell
table
on the last chart bar:

```pinescript
//@version=5
indicator("Collecting enum members demo", overlay = true)

//@enum An enumeration of named signal states. 
```
enum Signal
    strongBuy  = "Strong buy"
    buy        = "Buy"
    neutral    = "Neutral"
    sell       = "Sell"
    strongSell = "Strong sell"

```pinescript
//@variable The number of bars in the signal calculation.
int lengthInput = input.int(50, "Length", 2)

//@variable A map of `Signal.*` keys and "int" values counting the number of bars with each signal state. 
//          Allowed keys: `Signal.strongBuy`, `Signal.buy`, `Signal.neutral`, `Signal.sell`, `Signal.strongSell`, `na`.
var map<Signal, float> signalCounters = map.new<Signal, float>()

//@variable A single-cell table displaying the key-value pairs of the `signalCounters` map.
var table infoTable = table.new(position.top_right, 1, 1, chart.fg_color)

if barstate.isfirst
    // Put `Signal.*`-"int" pairs into the `signalCounters` map to establish insertion order.
    signalCounters.put(Signal.strongBuy, 0)
    signalCounters.put(Signal.buy, 0)
    signalCounters.put(Signal.neutral, 0)
    signalCounters.put(Signal.sell, 0)
    signalCounters.put(Signal.strongSell, 0)
    // Initialize the `infoTable` cell.
    infoTable.cell(0, 0, text_color = chart.bg_color, text_halign = text.align_left, text_size = size.large)

// Calculate the EMA and Percent rank of `source` data over `length` bars.
float ema  = ta.ema(close, lengthInput)
float rank = ta.percentrank(close, lengthInput)

//@variable A `Signal` member representing the current signal state based on `ema` and `rank` values. 
```
Signal signalState = switch
    close > ema => rank > 70 ? Signal.strongBuy  : rank > 50 ? Signal.buy  : Signal.neutral
    close < ema => rank < 30 ? Signal.strongSell : rank < 50 ? Signal.sell : Signal.neutral
    => Signal.neutral

// Add 1 to the value in the `signalCounters` map associated with the `signalState` key.
signalCounters.put(signalState, signalCounters.get(signalState) + 1)

// Update the `infoTable` cell's text using the keys and values from the `signalCounters` map on the last bar.
if barstate.islast
    string tableText = ""
    for [state, count] in signalCounters
        tableText += str.tostring(state) + ": " + str.tostring(count) + "\n"
    infoTable.cell_set_text(0, 0, str.trim(tableText))
Note that:

The signalCounters map can contain up to six key-value
pairs, as the Signal enum has five predefined values, plus a
possible value of
na,
and maps cannot
contain repetitive keys.
The script declares the signalCounters variable using the
var
keyword, signifying that the assigned
map
instance persists across executions.
On the first chart bar, the script uses five
map.put()
calls to establish the insertion order of keys in the
signalCounters map. See
this section of the Maps page for more information.
To minimize resource usage, the script declares the
infoTable and initializes its cell on the first bar, then
updates the cell’s text on the latest bar. See
this section of the
Profiling and optimization page to learn more.

Shadowing
To avoid potential conflicts where namespaces added to Pine Script in
the future would conflict with the names of enums in existing scripts,
enum names can shadow some of Pine’s namespaces.
For example, one can declare an enum like the following, whose name
shadows the syminfo.* namespace:
```pinescript
//@version=5
indicator("Shadowing demo")
```
enum syminfo
    abcd

log.info(str.tostring(syminfo.abcd))
However, using such a name for an enum is only allowed if the enum’s
fields do not have names matching any of the namespace’s built-ins.
Otherwise, Pine will not be able to determine which value the script is
supposed to use, resulting in a compilation error:
```pinescript
//@version=5
indicator("Name conflict demo")
```
enum syminfo
    abcd
    tickerid // This matches the built-in `syminfo.tickerid` variable, causing a compilation error.

log.info(str.tostring(syminfo.tickerid))
Additionally, one cannot use any of Pine’s built-in
type names as the name of an
enum.
Notice!While it is possible for some enum names to shadow language namespaces,
as shown above, we recommend choosing unique names for enums
wherever possible for more readable code that’s easier to maintain.         Previous       Objects      Next   Methods              On this pageOverviewIntroductionDeclaring an enumUsing enumsUtilizing field titlesCollecting enum membersShadowing