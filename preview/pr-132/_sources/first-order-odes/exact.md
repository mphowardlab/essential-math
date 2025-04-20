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

   The two partial derivatives are equal so the ODE is exact. You can proceed
   directly to integration. First, integrate *Q* with respect *y*

   \begin{equation}
   f(x,y) = \int \cos(x^2) \d{y} = y \cos(x^2) + k(x)
   \end{equation}
   where *k* is an unknown function of *x*. Then, differentiate *f* with respect
   to *x* and compare to *P*:

   \begin{align}
   \td{}{f}{x}{y} = -2xy \sin(x^2) + k' &= P = -2xy \sin(x^2) \\
   k' &= 0
   \end{align}

   This simple ODE has $k = 0$ as a solution (neglecting the integration
   constant). Putting it all together,

   \begin{equation}
   f = y \cos(x^2) = c
   \end{equation}

   is an implicit solution of the ODE, which we can manipulate to an explicit
   solution

   \begin{equation}
   y = \frac{c}{\cos(x^2)}
   \end{equation}
   ```

2. $y' = \dfrac{x^4 + y^2}{xy}$

   ```{solution}
   \begin{align}
   (x^4 + y^2)dx - xydy = 0 \\
   P = x^4 + y^2 \\
   Q = -xy \\
   \end{align}

   Check to see if the function is exact:

   \begin{align}
   \frac{\partial P}{\partial y} = 2y \\
   \frac{\partial Q}{\partial x} = -y \\
   \frac{\partial P}{\partial y} \ne \frac{\partial Q}{\partial x} \\
   \end{align}

   The function is not exact, so we need to find an integrating factor:

   \begin{align}
   R = \frac{1}{-xy}(2y-(-y)) = \frac{3y}{-xy} = \frac{-3}{x} \\
   F = e^{\int \frac{-3}{x}} = e^{-3ln(x)} = x^{-3} \\
   x^{-3}(x^4+y^2)dx - x^{-3}(xy)dy = 0 \\
   (x+\frac{y^2}{x^{-3}})dx - \frac{y}{x^2}dy = 0 \\
   f(x,y) = \int -\frac{y}{x^2}dy = \frac{-y^2}{2x^2}+k(x) \\
   \frac{\partial f}{\partial x} = \frac{y^2}{x^3} + k'(x) = F \cdot P \\
   \frac{y^2}{x^3} + k'(x) = x + \frac{y^2}{x^3} \\
   k'(x) = x \\
   \int xdx = \frac{x^2}{2} + C^* \\
   \frac{x^2}{2} - \frac{y^2}{2x^2} + C^* = C \\
   \frac{x^2}{2} - \frac{y^2}{2x^2} = C
   \end{align}
   ```
