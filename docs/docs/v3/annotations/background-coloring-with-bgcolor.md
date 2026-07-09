# Background coloring with ​bgcolor​

This is documentation for v3, which is no longer
					actively maintained.

For up-to-date documentation, see the latest version.
      Background coloring with ​bgcolor​
Similar to the barcolor function, the
bgcolor
function changes the color of the background. Function will the color of
that can be calculated in an expression, and an optional parameter
transp — transparency from 0-100 range — which is 90 by
default.
As an example, here’s a script for coloring trading sessions (try it on
EURUSD, 30 min resolution):
study("bgcolor example", overlay=true)
timeinrange(res, sess) => time(res, sess) != 0
premarket = #0050FF
regular = #0000FF
postmarket = #5000FF
notrading = na
sessioncolor = timeinrange("30", "0400-0930") ? premarket : timeinrange("30", "0930-1600") ? regular : timeinrange("30", "1600-2000") ? postmarket : notrading
bgcolor(sessioncolor, transp=75)