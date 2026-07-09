# Release notes

This is documentation for v3, which is no longer
					actively maintained.

For up-to-date documentation, see the latest version.
      Release notes
This page contains release notes of notable changes in Pine Script v3.
October 2019

plotchar function now supports most of the Unicode symbols:

```pinescript
//@version=3
study("My Script", overlay=true)
plotchar(open > close, char="🐻")
```
New bordercolor argument of the plotcandle function allows you
to change the color of candles’ borders:

```pinescript
//@version=3
study("My Script")
plotcandle(open, high, low, close, title='Title', color = open < close ? green : red, wickcolor=black, bordercolor=orange)
```
September 2019
Some fixes were made:

fill function now works correctly with na as the color
parameter value
sign function now calculates correctly for literals and constants

July-August 2019
New variables added:

isseconds returns true when current resolution is in seconds
isminutes returns true when current resolution is in minutes

The behavior of some functions and variables has changed:

The time variable returns the correct open time of the bar for
more special cases than before
An optional seconds parameter of the timestamp function allows
you to set the time to within seconds
security function:

Added the possibility of requesting resolutions in seconds:
1, 5, 15, 30 seconds (chart resolution should be less than or
equal to the requested resolution)

Reduced the maximum value that can be requested in some of the
other resolutions:
from 1 to 1440 minutes
from 1 to 365 days
from 1 to 52 weeks
from 1 to 12 months

17 May 2017
Added compile-time
constants.
Pine Script used to have 3 types of constants - literal, non-literal
and serial. Now there’s one more, but let’s look at existing ones
first.
Some functions (input, color) can only accept literals as certain
arguments. We realized that it could be more convenient, so we added a
new type of constants that can be calculated during compilation. In
addition to literals, they include mathematical expressions that use
other literals and constants.
Any type of Pine Script literal (integer, float, boolean, string) is the
most specific type while the serial type is the most general one. The
compilation-time constants take a spot between the literal and
non-literal types. All of the functions that accepted literal as an
argument will now accept compilation-time constants as well.
26 Apr 2017
Added string input withoptions.
Some built-in indicators have a setting that lets you choose several
options. The same is possible in Pine Script now. For example:
```pinescript
//@version=3
study("Input with Options")
s = input(title="Session", defval="24x7", options=["24x7", "0900-1300", "1300-1700", "1700-2100"])
plot(time(period, s))
```
17 Apr 2017
Added kwargs
syntax
for all built-in functions. Pinescript had different calls for
annotation functions (study, plot, …) and built-in functions
(sma, security, …). Annotation functions used to accept keyword
arguments while built-in functions didn’t.
You are now able to call all built-in functions using keyword arguments.
This will be especially useful for the security function to specify
the lookahead argument but skip the gaps argument:
security('TSLA', 'D', close, lookahead=barmerge.lookahead_off)
20 Mar 2017
Repainting and backtesting issues have been reported for some time. These issues are not identical,
but they are interrelated. Version 3 aims to solve the backtesting
issue. Here’s a more detailed explanation.
Repainting issue
There’s a substantial difference between historical and real-time data
that a Pine Script indicator or strategy uses. The key difference -
a historical bar does NOT contain information about price movements
between high and low of a bar. Only a few Pine Script language tools
are sensitive to this difference, read more
Indicator repainting.
Here is a basic example that describes this case:
```pinescript
//@version=2
study("My Script")
a = barstate.isrealtime or barstate.islast ? close : na
plot(a)
```
The above script is based on historical data and always returns na. It
can be plotted only on the last bar of both historical and real-time
data. After each chart reload (after pressing F5) the border that
divides historical data and real-time will be shifted, in accordance
with the current time period.
Backtesting issue
The second issue is a security function that allows you to get
“future” data while doing calculations using historical data. For
example: security(tickerid, "D", high) on historical data will show
the daily high price on the first hourly bar of the whole day. This can
be used to create an incorrect backtesting strategy:
```pinescript
//@version=2
strategy("Fake strategy", overlay=true)

r = input("D", type=resolution)
l = security(tickerid, r, low)
h = security(tickerid, r, high)

longCondition = low == l
if (longCondition)
    strategy.entry("My Long Entry Id", strategy.long)

shortCondition = high == h
if (shortCondition)
    strategy.entry("My Short Entry Id", strategy.short)
```
However, we believe that this type of behavior of the security function
could be useful when it’s being used in indicators. For instance,
ChrisMoody uses this effect
in a popular indicator called CM_Pivot
Points_M-W-D-4H-1H_Filtered
(over 3000 likes) that is used to create pivot lines. Some other
examples --- Open Close Daily
Line,
Time Frame
Superimpose,
as well as the Get Satisfaction
comment.
We decided that the old behavior will remain available only when it’s
explicitly indicated.
By default, in Pine Script version 3, security function will NOT
return future data (in contrast to version 2). We also added a new
parameter lookahead with two values:
barmerge.lookahead_off
and
barmerge.lookahead_on
to switch between the new and old behavior of the
security
function. Detailed description of this parameter can be found in the
section barmerge_gaps_and_lookahead.
Other changes

Self-referenced and forward-referenced variables are removed.
Math operations with booleans are forbidden.

See Pine version 3 migration guide for more details.
Pine version 2

Variable assignment (or mutable variables),
if_statement,
for_statement,