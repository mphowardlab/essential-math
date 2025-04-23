# Exact differential equations

## Skill Builders

Obtain general solutions to:

1. $-2xy \sin( x^2) \d{x} + \cos(x^2) \d{y} = 0$

   ```{solution}
   The ODE is already in the standard form so

   \begin{align}
   P &= -2xy \sin(x^2) \\
   Q &= \cos(x^2) \\
   \end{align}

   Check to see if the ODE is exact:

   \begin{align}
   \td{}{P}{y}{x} &= -2x \sin(x^2) \\
   \td{}{Q}{x}{y} &= -2x \sin(x^2)
   \end{align}

   The two partial derivatives are equal, so the ODE is exact. You can proceed
   directly to integration. First, integrate *Q* with respect *y*

   \begin{equation}
   f(x,y) = \int \cos(x^2) \d{y} = y \cos(x^2) + k(x)
   \end{equation}
   where *k* is an unknown function of *x*. Then, differentiate *f* with respect
   to *x* and compare to *P*:

   \begin{align}
   \td{}{f}{x}{y} = -2xy \sin(x^2) + k'(x) &= P = -2xy \sin(x^2) \\
   k'(x) &= 0
   \end{align}

   This simple ODE has $k = 0$ as a solution (neglecting the integration
   constant). Putting it all together,

   \begin{equation}
   f = y \cos(x^2) = c
   \end{equation}

   is an implicit solution of the ODE, which we can manipulate to an explicit
   solution:

   \begin{equation}
   y = \frac{c}{\cos(x^2)}
   \end{equation}
   ```

2. $y' = \dfrac{x^4 + y^2}{xy}$

   ```{solution}
   This ODE is not in the standard form, so we need to first rearrange:

   \begin{align}
   xy \d{y} = (x^4+y^2) \d{x} \\
   (x^4 + y^2) \d{x} - xy \d{y} = 0
   \end{align}

   \begin{align}
   P &= x^4 + y^2 \\
   Q &= -xy
   \end{align}

   Check to see if the function is exact:

   \begin{align}
   \td{}{P}{y}{x} &= 2y \\
   \td{}{Q}{x}{y} &= -y
   \end{align}

   The two partial derivatives are not equal, so the function is not exact. In
   order to make it exact, we need to find an integrating factor:

   \begin{equation}
   R = \frac{1}{-xy}(2y-(-y)) = \frac{3y}{-xy} = \frac{-3}{x}
   \end{equation}

   \begin{equation}
   F = e^{\int \frac{-3}{x} \d{x}} = e^{-3\ln(x)} = x^{-3}
   \end{equation}

   Apply the integrating factor to the original ODE:

   \begin{align}
   x^{-3}(x^4+y^2) \d{x} - x^{-3}(xy) \d{y} &= 0 \\
   (x+\frac{y^2}{x^{-3}}) \d{x} - \frac{y}{x^2} \d{y} &= 0
   \end{align}

   Integrate the *Q* of our exact function with respect to *y*:

   \begin{equation}
   f(x,y) = \int -\frac{y}{x^2} \d{y} = \frac{-y^2}{2x^2}+k(x)
   \end{equation}

   where *k* is an unknown function of *x*. Then, differentiate *f* with respect
   to *x* and compare to the *P* of the exact function:

   \begin{align}
   \td{}{f}{x}{y} = \frac{y^2}{x^3} + k'(x) &= P = x + \frac{y^2}{x^3} \\
   k'(x) &= x
   \end{align}

   This ODE has does not have $k = 0$ as a solution, so we will need to
   integrate *k'* with respect to *x* to find what *k* equals.

   \begin{align}
   k &= \int x \d{x} = \frac{x^2}{2} + c^* \\
   f &= \frac{-y^2}{2x^2} + \frac{x^2}{2} + c^* = c
   \end{align}

   Rearrange to find the implicit solution:

   \begin{equation}
   \frac{x^2}{2} - \frac{y^2}{2x^2} = c
   \end{equation}
   ```
