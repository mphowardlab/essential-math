# Definition

Many dynamic processes can occur simultaneously, giving more than one ODE.
For example, consider two tanks. Tank 1 has concentration $c_1$ of a solute and
Tank 2 has concentration $c_2$. Tank 1 flows into Tank 2, which is then passed
through a pump and recycled back to Tank 1.

```{image} ./_images/tank-system.JPG
:alt: Concentrations in two tanks
:width: 300px
:align: center
```

Eventually, the two concentrations should equalize, but how do they evolve to
over time? $c_1$ and $c_2$ can be modeled using unsteady mass balances. This
is a *system* of first-order ODEs that can be solved simultaneously.

The general, explicit form of a system of first-order ODEs is:

\begin{align}
y_1' &= f_1(t, y_1, \cdots, y_n)\\
\vdots \\
y_n' &= f_n(t, y_1, \cdots, y_n)
\end{align}

where *t* is the independent variable, $(y_1, \cdots, y_n)$ are the *n*
dependent variables, and $(f_1, \cdots, f_n)$ are the *n* right-hand side
functions of the *n* ODEs. We will notate this system more compactly using
vectors

\begin{equation}
\vv{y}' = \vv{f}(t, \vv{y})
\end{equation}

where **y** is the column vector of dependent variables, **f** is the column
vector of right-hand side functions, and $\vv{y}'$ is a shorthand for the
column vector of first derivatives of all dependent variables.
