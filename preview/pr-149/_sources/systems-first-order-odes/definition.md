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

## Skill builder problems

1. Solve the IVP

   \begin{align}
   y_1' &= 1-2y_1, & y_1(0) &= 0\\
   y_2' &= 2y_1 - y_1y_2, & y_2(0) &= 0
   \end{align}

   ```{solution}
   We begin by solving for $y_1$ in terms of *x*. The ODE is separable and
   therefore can be solved using separation of variables.

   \begin{align}
   \int \frac{dy_1}{1-2y_1} &= \int dx \\
   -\frac{1}{2} \ln{\left(1-2y_1\right)} &= x + c_0 \\
   \ln{\left(1-2y_1\right)} &= -2x + c_1 \\
   1 - 2y_1 &= c_2 e^{-2x} \\
   y_1 &= \frac{1}{2} \left(1- c_2 e^{-2x}\right) \\
   \end{align}

   Now, use the initial condition $y_1(0)= 0$ to solve for $c_2$:

   \begin{equation}
   y_1(0) = \frac{1}{2}\left(1-c_2\right) = 0
   \end{equation}

   so $c_2 = 1$ and

   \begin{equation}
   y_1 = \frac{1}{2} \left(1-e^{-2x}\right)
   \end{equation}

   Now, we can solve for $y_2$ knowing $y_1$ and recognizing that $y_2$ can also
   be solved via separation of variables
   \begin{align}
   y_2' &= y_1\left(2-y_2\right) \\
   \int \frac{dy_2}{2-y_2} &= \int \frac{1}{2}\left(1-e^{-2x}\right) \d{x} \\
   -\ln{\left(2-y_2\right)} &= \frac{1}{2}\left(x + \frac{1}{2}e^{-2x}\right) + c_0\\
   2 - y_2
     &= c_1 \exp\left[-\frac{1}{2}\left(x+ \frac{1}{2}e^{-2x}\right)\right] \\
   y_2
     &= 2 - c_1 \exp\left[-\frac{1}{2}\left(x+\frac{1}{2}e^{-2x}\right)\right] \\
   \end{align}

   Again, use the initial condition $y_2(0)= 0$ to solve for $c_1$:

   \begin{align}
   y_2(0) &= 2 - c_1 e^{-1/4} = 0 \\
   c_1 &= 2e^{1/4}
   \end{align}

   Therefore,

   \begin{equation}
   y_2 = 2\left[1-\exp\left(\frac{1}{4}-\frac{x}{2}-\frac{1}{4}e^{-2x}\right)\right]
   \end{equation}
   ```
