# Numerical solution methods
## Conversion to First-Order ODEs

We learned previously how to solve systems of first-order ODEs:

y' = f(t, y)

using Euler’s method. However, we didn’t learn what to do with higher-order derivatives.

If a second-order ODE can be written in explicit form:

y'' = f(t, y, y')

it can be solved by conversion to a system of first-order ODEs
