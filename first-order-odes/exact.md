# Exact differential equations

Remember that a function $f(x,y)$ has the
[total differential](../multivariable-calculus/total-differential.md)

\begin{equation}
\d{f}= \td{}{f}{x}{y} \d{x} + \td{}{f}{y}{x} \d{y}
\end{equation}

Also note that if $f = c$ (a constant), then $\d{f} = 0$. How does this apply
to ODEs?

Suppose we can rewrite our ODE as

```{math}
:label: exactode
P(x,y) \d{x} + Q(x,y) \d{y} = 0
```

If we can show that

\begin{equation}
P = \td{}{f}{x}{y} \qquad Q = \td{}{f}{y}{x}
\end{equation}

for some $f$, then we know that $f(x,y) = c$ is an implicit solution of the
ODE! We call ODEs with this property *exact*. But, how do we know if such a
function exists and what it is?

```{topic} Test for exactness
A differential equation in the form of Eq. {eq}`exactode` is exact if

\begin{equation}
\td{}{P}{y}{x} = \td{}{Q}{x}{y}
\end{equation}
```

````{example} Test for exactness
Is the following differential equation exact?

```{math}
:label: exactode-example
\begin{equation}
\cos(x+y) \d{x} + \left[3y^2 + 2y + \cos(x+y) \right]\d{y} = 0
\end{equation}
```

---

For the given ODE,

\begin{align}
P &= \cos(x+y) \\
\td{}{P}{y}{x} &= -\sin(x+y)
\end{align}

and

\begin{align}
Q &= 3y^2 + 2y + \cos(x+y) \\
\td{}{Q}{x}{y} &= -\sin(x+y)
\end{align}

Since these partial derivatives match, the ODE is exact.
````

If an ODE is exact, we can integrate *P* or *Q* to get *f*, then solve for the
integration constant with *Q* or *P*. For the ODE given by
Eq. {eq}`exactode-example`, first integrate *P* with respect to *x*:

\begin{align}
f &= \int P \d{x} \\
&= \int \cos(x+y) \d{x} \\
&= \sin(x+y) + k(y)
\end{align}

Note that this integration adds an unknown function *k* of the variable that was
held constant (in this case, *y*). To determine this function, differentiate and
equate with *Q*:

\begin{align}
\td{}{f}{y}{x} &= Q \\
\cos(x+y) + k' &= 3y^2+2y+\cos(x+y) \\
k' &= 3y^2+2y
\end{align}

This is a first-order ODE for *k* that can be solved using separation of
variables:

\begin{align}
\int \d{k} &= \int (3y^2+2y) \d{y} \\
k &= y^3 + y^2 + k_0
\end{align}

where $k_0$ is another unknown integration constant. Since we know that the ODE
was exact, the solution *f* must be equal to a constant *c*:

\begin{align}
f = \sin(x+y) + y^3 +y^2 + k_0 = c
\end{align}

Note that the coefficient $k_0$ can be absorbed into *c*. This will be a common
pattern for these problems, so moving forward, we will neglect writing the
integration constant for *k*. The general, implicit solution to the ODE is:

\begin{equation}
\sin(x+y) + y^3 + y^2 = c
\end{equation}

Note that order of integration does not matter. We could also have integrated
with respect to *y* first

\begin{align}
f &=\int Q \d{y} \\
&= \int \left[3y^2+2y+\cos(x+y) \right] \d{y} \\
&=y^3+y^2+\sin(x+y)+k(x)
\end{align}

Then differentiated with respect to *x* and equated with *P*:

\begin{align}
\td{}{f}{x}{y} &= P \\
\cos(x+y) + k' &= \cos(x+y) \\
k'&=0
\end{align}

giving $k = k_0$. Substituting, we arrive at the same answer!

## Skill builder problems

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
