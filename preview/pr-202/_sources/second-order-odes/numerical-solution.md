# Numerical solution methods

## Boundary value problems (shooting method)

We can solve initial value problems for second-order ODEs by converting to a
system and using methods we know. What about boundary value problems?

Let's say we want to solve:

\begin{equation}
y'' + y = 0, \quad y(0) = 0, \quad y(\pi/6) = 4
\end{equation}

Using normal approach:

\begin{align}
y &= c_1 \cos x + c_2 \sin x \\
y(0) &= c_1 = 0\\
y(\pi/6) &= c_2 \frac{1}{2} = 4 \to c_2 = 8\\
\end{align}

so,

\begin{equation}
y = 8 \sin x
\end{equation}

What if we needed to do this numerically? Try converting to system using
$y_1 = y$ and $y_2 = y'$, so

\begin{equation}
y'' + y = 0 \to y_2' = -y_1
\end{equation}

and

\begin{align}
y_1' &= y_2, & y_1(0) &= 0 \\
y_2' &= -y_1, & y_2(0) &= a
\end{align}

where *a* is an unknown value that we need to figure out so that $y(\pi/6) = 4$.

We will use the *shooting method* to determine *a*. The idea is to treat the
boundary condition at the other value of *x* as a function of *a*, then vary *a*
using a root-finding approach.

```{image} ./_images/shooting.jpg
:alt: Graph of Lines
:align: center
:width: 300px
```

This boundary-condition function is the numerical integration of the system of
ODEs! Bisection search is well-suited for solving for *a* because it is stable
and doesn't require a derivative.

```{example} Reaction-diffusion with second-order reaction
We are solving a reaction-diffusion problem with a second-order reaction:

\begin{equation}
D \dd{2}{c}{x} - k c^2 = 0, \quad c(0) = c_0, \quad -D c'(L) = 0
\end{equation}

Formulate in a form suitable for numerical solution using the shooting method.

---

First, rewrite as a system of first-order ODEs using $y_1 = c$ and $c_2 = c'$.
The ODE is

\begin{equation}
c'' - \frac{k}{D}c^2 \to y_2' = \frac{k}{D} y_1^2
\end{equation}

so

\begin{align}
y_1' &= y_2, & y_1(0) &= c_0 \\
y_2' &= \frac{k}{D} y_1, & y_2(0) &= a
\end{align}

where *a* is the unknown value of $y_2(0)$. Vary *a* until

\begin{equation}
-D c'(L) = 0 \to y_2(L) = 0
\end{equation}
```
