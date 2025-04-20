# Separable differential equations

## Definition

An **ordinary differential equation (ODE)** contains one or more derivatives of
an unknown function of one variable.

**Examples of ODEs:**
\begin{align}
y' = cos x \\
y'' + 9y = 0 \\
x^2 y''' y' + 2e^x y^4 = (x^2 + 2)y^2
\end{align}

The **order** of an ODE is its highest derivative. First-order ODEs typically
look like:
\begin{align}
F(x, y, y') = 0 \\
y' = f(x, y) \end{align} with the first being an example of the **implicit
form** and the second being an example of the **explicit form**.

**When do we see first-order ODEs in Chemical Engineering?**

- Unsteady mass/energy balances
- Chemical kinetics

## Direction Fields and Initial Value Problems

ODEs have **families of solutions** due to integration constants. The
**direction field** (or slope field) is obtained by plotting the slope at (x, y)
from (y' = f(x, y)), and shows how a point will evolve.

````{example} Initial Value Problem
Given y' = xy and initial condition y(0) = 1, draw a solution curve through the
slope field. Then, verify that
\begin{align}
y = Ce^{x^2 / 2}
\end{align}
is a solution for y' = xy. Find the particular solution when y(1) = 1.

**Direction Field Diagram:**
```{image} ./_images/directionalfield.png
:alt: Directional Field Diagram
```
Let's begin by verifying the solution:
\begin{align}
y' &= Ce^{x^2 / 2} * x \\
Cx^{x^2 / 2} &= x(Ce^{x^2 / 2}) ✓
\end{align}

Then, let's solve for the particular solution of y(1) = 1:
\begin{align}
1 = y(0) &= Ce^0 \\
Ce^0 = e
\end{align}
Therefore, C = 1. Plugging this back into our initial equation gives us:
\begin{align}
y = e^{x^2/2}
\end{align}

````

## Solving ODEs: Separation of Variables

If an ODE can be separated so that y and x are on each side, it can be integrated:

\begin{align}
g(y) \frac{dy}{dx} = f(x) \\
\int g(y)dy = \int f(x) dx + C
\end{align}

````{example} Separation of Variables
Given y' = xy, separate the variables and solve:
\begin{align}
\int \frac{dy}{y} &= \int x dx \\
ln(y) &= \frac{x^2}{2} + c_0 \\
y &= e^{\frac{x^2}{2} + c_0} \\
C &= e^{c_0} \\
y &= C e^\frac{x^2}{2}
\end{align}
````
