# Barcoloring a series with ​barcolor​

This is documentation for v3, which is no longer
					actively maintained.

For up-to-date documentation, see the latest version.
      Barcoloring a series with ​barcolor​
The annotation function
barcolor
lets you specify a color for a bar dependent on the fulfillment of a
certain condition. The following example script renders the inside and
outside bars in different colors:
study("barcolor example", overlay=true)
isUp() => close > open
isDown() => close <= open
isOutsideUp() => high > high[1] and low < low[1] and isUp()
isOutsideDown() => high > high[1] and low < low[1] and isDown()
isInside() => high < high[1] and low > low[1]
barcolor(isInside() ? yellow : isOutsideUp() ? aqua : isOutsideDown() ? purple : na)

As you can see, when passing the na value, the colors stay the default
chart color.         Previous       Filling in the background with `fill`      Next   Background coloring with `bgcolor`