# Barcoloring a series with barcolor

This is documentation for v4, which is no longer
					actively maintained.

For up-to-date documentation, see the latest version.
      Barcoloring a series with barcolor
The
barcolor
annotation function lets you specify the color of bars. The coloring can
be conditional. The following script renders inside and outside bars
in different colors:
```pinescript
//@version=4
study("barcolor example", overlay=true)
isUp() => close > open
isDown() => close <= open
isOutsideUp() => high > high[1] and low < low[1] and isUp()
isOutsideDown() => high > high[1] and low < low[1] and isDown()
isInside() => high < high[1] and low > low[1]
barcolor(isInside() ? color.yellow : isOutsideUp() ? color.aqua : isOutsideDown() ? color.purple : na)
```
As you can see, the na value leaves bars as is.
barcolor works whether the script is running in overlay=true mode or
not.         Previous       Filling the background with fill      Next   Background coloring with bgcolor