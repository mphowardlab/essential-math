# Numerical solution methods
## Conversion to First-Order ODEs

We learned previously how to solve systems of first-order ODEs:

\[y' = f(t, y)\]

using Euler’s method. However, we didn’t learn what to do with higher-order derivatives.

If a second-order ODE can be written in explicit form:

\[y'' = f(t, y, y')\]

it can be solved by conversion to a system of first-order ODEs


Let \( y_1 = y \) and \( y_2 = y' \). Then:

\[\begin{cases}
y_1' = y_2 & y_1(0) = y(0)\\
y_2' = f(t, y_1, y_2) & y_2(0) = y'(0)
\end{cases}\]

> Note: This actually works for even higher-order ODEs!


## Analytical Example
\[y'' + y' - 2y = 0,  y(0) = 4,  y'(0) = -5\]

We showed:
\[y = e^x + 3e^{-2x}\] 
 Let’s resolve as a system:

\[\begin{align*}
y_1 &=y\\y_2 &=y'\\y'' &=-y'+2y
\end{align*}\]