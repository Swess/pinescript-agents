# Price levels, hline

This is documentation for v4, which is no longer
					actively maintained.

For up-to-date documentation, see the latest version.
      Price levels, hline
The
hline()
annotation function renders a horizontal line at a given level. For
example:
```pinescript
//@version=4
study(title="Chaikin Oscillator", shorttitle="Chaikin Osc")
short = input(3, minval=1)
long = input(10, minval=1)
osc = ema(accdist, short) - ema(accdist, long)
plot(osc, color=color.red)
hline(0, title="Zero", color=color.gray, linestyle=hline.style_dashed)
```
A number must be the first argument of hline. Values of series
type are forbidden. It’s possible to create a few horizontal lines with
the help of hline and fill the background between them with a
translucent color using
fill().         Previous       Script inputs      Next   Filling the background with fill