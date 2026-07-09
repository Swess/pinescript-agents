# Functions and annotations

This is documentation for v3, which is no longer
					actively maintained.

For up-to-date documentation, see the latest version.
      Functions and annotations
Pine Script distinguishes between functions and annotation functions
(or just annotations). Syntactically they are similar, but they have
different purposes and usage effects.
Functions are used for calculating values and most of the time return a
result. Some functions have side effects (e.g.,
[strategy.entry], [strategy.exit]). Function
calls are used in expressions along with operators. Essentially, they
determine the calculation algorithm. Functions are divided into built-in
and user-defined.
Examples of built-in functions:
sma,
ema,
rsi.
Function annotations are used for determining meta information which
describes an indicator being created (they also have side effects). All
annotations are built-in. Annotations may

assign a name to an indicator
determine which variables appear incoming and outgoing (by default,
It’s also possible to assign a name and default values for incoming
variables). Outgoing variables are displayed on the chart as graphs
or other layouts.
some other visual effects (e.g., background coloring)

Name, color and each graph’s display style are determined in
annotations. Examples of annotation functions:
study,
input,
plot.
A few annotations have not only side effects (in the form of determining
meta information) but also return a result. plot and hline are such
annotations. However this result can be used only in other annotations
and can’t take part in the indicator’s calculations (see annotation
fill).
A detailed overview of available Pine Script annotations could be found
here.
Syntactically, user-defined functions, built-in functions and annotation
functions are similar in use within the script: to use either function
or annotation one should specify its name as well as the list of actual
arguments in parentheses. The main difference is in usage semantic.
Also, there is a difference in passing arguments --- annotations and
built-in functions accept keyword arguments while user-defined functions
do not (see release note on kwargs in built-in
functions).
Example of an annotation call with positional arguments:
study('Example', 'Ex', true)
Compare it with the equivalent call but with keyword arguments:
study(title='Example', shorttitle='Ex', overlay=true)
It’s possible to mix positional and keyword arguments. Positional
arguments must go first and keyword arguments should follow them. So the
following call is not valid:
study(precision=3, 'Example') // Compilation error!         Previous       Operators      Next   Expressions, declarations and statements