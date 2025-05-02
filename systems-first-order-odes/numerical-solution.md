# Numerical solution methods

Systems of first-order ODEs can also be solved numerically using similar
approaches as for
[single first-order ODEs](../first-order-odes/numerical-solution.md), but now
all dependent variables must be advanced simultaneously. The methods we use
for single first-order ODES can be straightforwardly extended to systems using
the explicit-form vector notation $\vv{y}' = \vv{f}(t, \vv{y})$. For example,
Euler's method becomes:

\begin{equation}
\vv{y}(t+\Delta t) \approx \vv{y}(t) + \vv{f}(t, \vv{y}) \Delta t
\end{equation}

We are "just" adding columns to our calculations!

````{example} First-order reaction in a draining tank
A first-order reaction (rate constant *k*) is taking place in a tank that is
initially 1 M concentration in the reactant A and has 10 L of solution. A feed
stream that has a reactant concentration of 1 M enters at 1 L / min, while
well-mixed solution exits at 2 L / min.

<<<<<<< HEAD
"Just" Add Columns 

```{image} ./_images/euler_diagram_new.png
:alt: Euler Diagram
=======
```{image} ./_images/euler_diagram.png
:alt: Reactions in draining tank.
>>>>>>> 6ca2ce5b888e5be455a5d84fcf097db818701364
:align: center
:width: 300px
```

Estimate the concentration of A after 1 minute if $k = 0.5/{\rm min}$.

---

Start from an unsteady mole balance on A:

\begin{equation}
\dd{}{n_{\rm A}}{t} = \dot n_{{\rm A},{\rm in}} - \dot n_{{\rm A},{\rm out}} +
  r_A V
\end{equation}

The number of moles in the tank, the molar flow rate in, and the molar flow
rate out are:

\begin{align}
n_{\rm A} &= c_{\rm A} V \\
\dot n_{{\rm A},{\rm in}} &= c_{{\rm A},{\rm in}} \dot V_{\rm in} = 1 \\
\dot n_{{\rm A},{\rm out}} &= c_{\rm A} \dot V_{\rm out}  = 2c_A
\end{align}

so

\begin{align}
\dd{}{(Vc_{\rm A})}{t} &= 1 - 2 c_A - k c_A V \\
V \dd{}{c_{\rm A}}{t} + c_{\rm A} \dd{}{V}{t} &= 1 - 2 c_A - k c_A V
\end{align}

Since the volume *V* is changing, write a mass balance on the tank assuming
that the solution density $\rho$ does not depend on concentration:

\begin{align}
\dd{}{m}{t} = \dot m_{\rm in} - \dot m_{\rm out}
\end{align}

with the mass in the tank, mass flow rate in, and mass flow rate out:

\begin{align}
m &= \rho V \\
\dot m_{\rm in} &= \rho \dot V_{\rm in} = \rho \\
\dot m_{\rm out} &= \rho \dot V_{\rm out} = 2 \rho
\end{align}

so

<<<<<<< HEAD
|  $n$ |  $t$   | $y_1$  | $y_2$   | $f_1$    |  $f_2$   |
|------|--------|--------|---------|----------|----------|
| 0    | 0      | 1      | 10      | -0.5     | -1       |
| 1    | 0.2    |        |         |          |          |
| 2    | 0.4    |        |         |          |          |
| 3    | 0.6    |        |         |          |          |
| 4    | 0.8    |        |         |          |          |
| 5    | 1.0    |        |         |          |          |
=======
\begin{align}
\dd{}{(V\rho)}{t} = \rho \dd{}{V}{t} &= -\rho \\
\dd{}{V}{t} &= - 1
\end{align}
>>>>>>> 6ca2ce5b888e5be455a5d84fcf097db818701364

Substituting for $\dd{}{V}{t}$ in the unsteady mole balance and rearranging
gives the system of first-order ODES:

\begin{align}
\dd{}{c_{\rm A}}{t} &= \frac{1}{V}
  \left(1 - c_A - 0.5Vc_A\right),& c_{\rm A}(0) &= 1 \\
\dd{}{V}{t} &= -1, & V(0) &= 10
\end{align}

Calling $y_1 = c_{\rm A}$ and $y_2 = V$:

|  $n$ |  $t$   | $y_1$  | $y_2$   | $f_1$    |  $f_2$   |
|------|--------|--------|---------|----------|----------|
| 0    | 0      | 1      | 10      | -0.5     | -1       |
| 1    | 0.2    |        |         |          |          |
| 2    | 0.4    |        |         |          |          |
| 3    | 0.6    |        |         |          |          |
| 4    | 0.8    |        |         |          |          |
| 5    | 1.0    |        |         |          |          |

The concentration after 1 minute is approximately X M.
````
