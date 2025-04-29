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

```{example} Test for exactness

Is the following differential equation exact?

\begin{equation}
\cos(x+y) \d{x} + \left[3y^2 + 2y + \cos(x+y) \right]\d{y} = 0
\end{equation}

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
```

If an ODE is exact, we can integrate $P$ or $Q$ to get $f$, then solve for the
integration constant with $Q$ or $P$.

```{example} Solve for integration constant

\begin{align}
f =\int P \d{x} = \int \cos(x+y) \d{x} = \sin(x+y) + k(y) \
\td{f}{y}=\cos(x+y)+k'=Q=3y^2+2y+\cos(x+y) \
k'=3y^2+2y 
\int dk=\int (3y^2+2y) \d{y} \
k=y^3+y^2+c^*
\end{align}

---
\begin{align}
\therefore 
f=\sin(x+y) + y^3 +y^2 + c^* =c \to \sin(x+y)+y^3 +y^2 =c 
\end{align}

is the general solution of the ODE!

---

Note that order of integration does not matter. We could also have done 

\begin{align}
f=\int Q d{y} = \int \left[3y^2+2y+\cos(x+y) \right]dy=y^3+y^2+\sin(x+y)+k(x) \
\td{f}{x} =\cos(x+y)+k'=P=\cos(x+y) \
k'&=0 \to k=c^*
\end{align}

and arrived at the same answer!
```
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

2. $y' = \dfrac{x^4 + y^2}{xy}$

   ```{solution}
   This ODE is not in the standard form, so we need to first rearrange:

   \begin{align}
   xy \d{y} = (x^4+y^2) \d{x} \\
   (x^4 + y^2) \d{x} - xy \d{y} = 0
   \end{align}

   so:

   \begin{align}
   P &= x^4 + y^2 \\
   Q &= -xy
   \end{align}

   Check to see if the ODE is exact:

   \begin{align}
   \td{}{P}{y}{x} &= 2y \\
   \td{}{Q}{x}{y} &= -y
   \end{align}

   The two partial derivatives are not equal, so the ODE is not exact. In
   order to make it exact, we need to find an integrating factor *F*. First,
   compute:

   \begin{align}
   R &= \frac{1}{Q}\left[\td{}{P}{y}{x} - \td{}{Q}{x}{y} \right] \\
     &=\frac{1}{-xy}(2y-(-y)) \\
     &= -\frac{3}{x}
   \end{align}

   *R* is a function of only *x*, so use it to compute *F*

   \begin{equation}
   F = \exp\left(\int \frac{-3}{x} \d{x}\right) = e^{-3\ln(x)} = x^{-3}
   \end{equation}

   Apply the integrating factor to the original ODE:

   \begin{align}
   x^{-3}(x^4+y^2) \d{x} - x^{-3}(xy) \d{y} &= 0 \\
   \left(x+\frac{y^2}{x^{-3}}\right) \d{x} - \frac{y}{x^2} \d{y} &= 0
   \end{align}

   Integrate the *Q* of our exact ODE with respect to *y*:

   \begin{equation}
   f(x,y) = \int -\frac{y}{x^2} \d{y} = \frac{-y^2}{2x^2}+k(x)
   \end{equation}

   where *k* is an unknown function of *x*. Then, differentiate *f* with respect
   to *x* and compare to *P* of the exact ODE:

   \begin{align}
   \td{}{f}{x}{y} = \frac{y^2}{x^3} + k'(x) &= P = x + \frac{y^2}{x^3} \\
   k'(x) &= x \\
   \end{align}

   This ODE for *k* can be integrated directly (neglecting the integration
   constant)

   \begin{equation}
   k = \int x \d{x} = \frac{x^2}{2}
   \end{equation}

   Putting it all together,

   \begin{align}
   f = \frac{-y^2}{2x^2} + \frac{x^2}{2} = c
   \end{align}

   is an implicit solution of the ODE.
   ```
