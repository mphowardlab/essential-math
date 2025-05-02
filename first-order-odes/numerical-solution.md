# Numerical solution methods

Some ODEs are hard (or impossible!) to solve analytically... or maybe you just
don't want to! Numerical approximations to the solution can be very valuable in
these cases.

````{topic} Euler's method
To solve the the first-order ODE $y' = f(t, y)$, approximate $y(t)$ using a
Taylor series:

```{math}
:label: euler-method
y(t + \Delta t) \approx y(t) + f(t, y) \Delta t
```

This update can be applied repeatedly to approximate *y* as a function of *t*.
To start, *t* is initialized to $t_0$ and *y* is started from the initial
condition $y_0 = y(t_0)$. Then, going from $n = 0$, advance $t_n$ and $y_n$

\begin{align}
t_{n+1} &= t_n + \Delta t \\
y_{n+1} &= y_n + f(t_n, y_n)
\end{align}

until the desired value of *t* is reached.
````

For example, let's solve the initial value problem:

```{math}
y' - y = t, \qquad y(0) = 0
```

using Euler's method with a step size $\Delta t = 0.2$. First, rewrite in
explicit form:

```{math}
 y' = t + y = f(t, y)
```

Then, form a table and update

|  $n$ |  $t$   | $y$    | $f(t,y)$ |
| ---- | ------ | ------ | -------- |
| 0    | 0      | 0      | 0        |
| 1    | 0.2    | 0      | 0.2      |
| 2    | 0.4    | 0.04   | 0.44     |
| 3    | 0.6    | 0.128  | 0.728    |
| 4    | 0.8    | 0.274  | 1.074    |
| 5    | 1.0    | 0.489  |          |

Compare to Exact Solution

Using the Integrating Factor Method:

```{math}
F(x) = e^{\int -1 \, dx} = e^{-x}
```

Integrate by parts

```{math}
\int x e^{-x} dx = -x e^{-x} + \int e^{-x} dx = -(x + 1) e^{-x}
```

```{math}
y(x) = e^x \left[ - (x + 1) e^{-x} + C \right] = e^x - (x + 1)
```

Solve for C using our initial boundary conditon y(0)=0

```{math}
0 = y(0) = -1 + C \Rightarrow C = 1
```

```{math}
:label: exact-final
y(x) = e^x - (x + 1)
```

 | Numerical | Exact  | Error |
 | --------- | ------ | ----- |
 | 0         | 0      | 0     |
 | 0         | 0.021  | 0.021 |
 | 0.04      | 0.092  | 0.052 |
 | 0.128     | 0.222  | 0.094 |
 | 0.274     | 0.426  | 0.152 |
 | 0.489     | 0.718  | 0.229 |

Here, we compare the numerical solution (Euler's Method) with the exact solution.
The error column shows that the numerical solution departs from the exact
solution as the t value increases.

## Error in approximation

Because we are using truncated Taylor series, we accrue an error:

```{image} ./_images/Euler.png
:alt: Euler's method error
:width: 300px
:align: center
```

The error in a single step is $O(\Delta t^2)$. This is called the *local* error.
To cover a finite time *t*, $t/\Delta t$ steps are required so the *global*
(total) error is $O(\Delta t)$. To improve accuracy, you should decrease $\Delta
t$, but this takes more work. Some $\Delta t$ will also totally fail! This is
the field of numerical stability (not covered here).
