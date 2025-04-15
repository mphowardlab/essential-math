# Separable Differential Equations
## Definition

An **ordinary differential equation (ODE)** contains one or more derivatives of an unknown function of one variable.

**Examples:**
\begin{align} 
y' = cos x \\
y'' + 9y = 0 \\
x^2 y''' + 2x^5 y^4 = (x^2 + 2)y^2
\end{align}
                                                                                                                  
The **order** of an ODE is its highest derivative. First-order ODEs typically look like:
\begin{align}
F(x, y, y') = 0 \\
y' = f(x, y)
\end{align}
with the first being an example of the **implicit form** and the second being an example of the **explicit form**.

**When do we see first-order ODEs in Chemical Engineering?**
- Unsteady mass/energy balances
- Chemical kinetics

---

## Direction Fields and Initial Value Problems

ODEs have **families of solutions** due to integration constants. The **direction field** (or slope field) is obtained by plotting the slope at (x, y) from (y' = f(x, y)), showing how a point will evolve.

````{example} Initial Value Problem
Given y' = xy and initial condition y(0) = 1, draw a solution curve through the slope field. Then, verify that
\begin{align}
y = e^{x^2 / 2}
\end{align}
is a solution for y' = xy.

**Direction Field Diagram:**
```{image} ./_images/directionalfield.png
:alt: Directional Field Diagram
```

**Verification:**
Verify that
\begin{align}
y = e^{x^2 / 2}
\end{align} 
is a solution for y' = xy:
\begin{align}
y' = x e^{x^2 / 2}
\end{align}

To fully specify a problem, an **initial value** is required.
\begin{align}
y(x_0) = y_0
\end{align}

Given y(0) = 1, we find that c = 1 and the particular solution is:
\begin{align}
y = e^{x^2 / 2}
\end{align}
````

___

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
y &= e^(\frac{x^2}{2} + c_0) \\
C &= e^c_0 \\
y &= C e^\frac{x^2}{2}
\end{align}
````