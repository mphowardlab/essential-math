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
f &=\int P \d{x} = \int \cos(x+y) \d{x} = \sin(x+y) + k(y)
\td{f}{y}&=\cos(x+y)+k'=Q=3y^2+2y+\cos(x+y)
k'&=3y^2+2y
\int dk$=\int (3y^2+2y) \d{y}
k&=y^3+y^2+c^*
\end{align}

---

\therefore 
\begin{align}
f=\sin(x+y) + y^3 +y^2 + c^* =c \to \sin(x+y)+y^3 +y^2 =c 
\end{align}

is the general solution of the ODE!

---

Note that order of integration does not matter. We could also have done 

\begin{align}
f=\int Q d{y} &= \int \left[3y^2+2y+\cos(x+y) \right]dy=y^3+y^2+\sin(x+y)+k(x)
\td{f}{x} &=\cos(x+y)+k'=P=\cos(x+y) 
k'&=0 \to k=c^*
\end{align}

and arrived at the same answer!
```