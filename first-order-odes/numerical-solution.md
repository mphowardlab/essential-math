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
for a step size $\Delta t$

\begin{align}
y_{n+1} &= y_n + f(t_n, y_n) \\
t_{n+1} &= t_n + \Delta t
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

|  $n$ |  $t$   | $y$    | $f$      |
|------|--------|--------|----------|
| 0    | 0      | 0      | 0        |
| 1    | 0.2    | 0      | 0.2      |
| 2    | 0.4    | 0.04   | 0.44     |
| 3    | 0.6    | 0.128  | 0.728    |
| 4    | 0.8    | 0.274  | 1.074    |
| 5    | 1.0    | 0.489  |          |

Let's compare our numerical result to the analytical solution to the same ODE.
This solution can be obtained using an integrating factor:

```{math}
F = e^{\int -1 \d{t}} = e^{-t}
```

Integrate by parts:

```{math}
\int F r \d{t} &= \int t e^{-t} \d{t} \\
&= -t e^{-t} + \int e^{-t} \d{t} \\
&= -(t + 1) e^{-t}
```

So the general solution is:

```{math}
y(t) = e^t \left[-(t + 1) e^{-t} + c \right] = c e^x - t - 1
```

Solve for *c* using the initial condition:

```{math}
y(0) = c - 1 = 0 \to c = 1
```

so

```{math}
y(t) = e^t - t - 1
```

Comparing the numerical and analytical solutions at the same time points by
computing the absolute error between them gives:

 |  $t$   | Numerical | Analytical  | Error |
 |--------|-----------|-------------|-------|
 | 0      | 0         | 0           | 0     |
 | 0.2    | 0         | 0.021       | 0.021 |
 | 0.4    | 0.04      | 0.092       | 0.052 |
 | 0.6    | 0.128     | 0.222       | 0.094 |
 | 0.8    | 0.274     | 0.426       | 0.152 |
 | 1.0    | 0.489     | 0.718       | 0.229 |

The error increases as more timesteps are run due to accumulation of error. A
smaller timestep typically produces a better solution, but at the cost of doing
additional calculations. We will discuss next how the error depends on the step
size.

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

## Skill builder problems

Solving $y' = y + 5 \sin(2\pi t)$ using Euler's Method

We are given the initial value problem:

$$
y' = y + 5\sin(2\pi t), \quad y(0) = 1
$$

Using the **Euler method**, we compute approximations for $y(1)$ using two step sizes:

Using the Euler method, we compute approximations for $y(1)$ using two step sizes:

Step size $\Delta t = 0.1$

Let $f(t, y) = y + 5\sin(2\pi t)$

| $n$ | $t_n$ | $y_n$ | $f(t_n, y_n)$ |
|----:|------:|------:|---------------:|
| 0   | 0.0   | 1.000 | 1.000          |
| 1   | 0.1   | 1.100 | 4.039          |
| 2   | 0.2   | 1.504 | 6.257          |
| 3   | 0.3   | 2.130 | 6.895          |
| 4   | 0.4   | 2.818 | 5.757          |
| 5   | 0.5   | 3.394 | 3.394          |
| 6   | 0.6   | 3.733 | 0.795          |
| 7   | 0.7   | 3.813 | -0.942         |
| 8   | 0.8   | 3.719 | -1.037         |
| 9   | 0.9   | 3.615 | 0.676          |
| 10  | 1.0   | **3.683** | —         |

So, for $\Delta t = 0.1$, the Euler approximation gives:

$$
y(1) \approx 3.683
$$

Step size $\Delta t = 0.2$

Step size $\Delta t = 0.2$

| $n$ | $t_n$ | $y_n$ | $f(t_n, y_n)$ |
|----:|------:|------:|---------------:|
| 0   | 0.0   | 1.000 | 1.000          |
| 1   | 0.2   | 1.200 | 6.955          |
| 2   | 0.4   | 2.591 | 5.330          |
| 3   | 0.6   | 3.657 | 0.576          |
| 4   | 0.8   | 3.772 | -1.155         |
| 5   | 1.0   | **3.322** | —         |

Therefore, for $\Delta t = 0.2$:

$$
y(1) \approx 3.322
$$

---

Analytical solution:
$$
y^' - y = 5 * sin(2*pi*t)
$$
First, find the integrating factor
$$
F = e^(\int(p{dt})) = e^{(-1) * (t)}
$$

$$
(\int(F*r* {dt})) = (\int((e^((-1)*(t)))*((5)*(\sin((2)*(pi)*(t))))*(\d{t}))) = (\frac{5*e^(((-1)*t))}{((4)*(pi^2))+ 1})*[((-1)* (\sin((2 * pi) * (t))))-(((2) * pi) * (\cos(((2) * pi) * (t))))]

$$
Then, solve for y. 
$$
y = (\frac{1}{F})*[\int F r \d{t} + C] = (\frac{-5} {((4)*(pi^2))+1})*(sin(2 * pi t))+((2*pi)*(cos(2*pi t))) + ((C) * (e^t))
$$

Next, use initial conditions in to find C.

$$
1 = y(0) = (\frac{5} {((4) * (pi^2))}) * (0 + (2*pi)) + C
$$

$$
C = 1 + (\frac{(10 * pi)}{((4) * (pi^2)) + 1})
$$

Put C value in equation for y.

$$
y(t) = (1 + (\frac{(10 * pi)}{((4) * (pi^2))+1}))*((e^t)) - (\frac{5}{((4)*(pi^2))+1})*((sin(2*pi t)) + ((2*pi)*(cos(2*pi t))))
$$

Find y at t=1.

$$
y(1) = (1+(\frac{(10*pi)}{((4)*(pi^2))+1}))*e - (\frac{5}{((4)*(pi^2))+1})*(2*(pi))
$$

$$
y(1) = e +(\frac{(10*pi)}{((4)*(pi^2))+1})*(e-1)
$$

$$
y(1)= **4.052**
$$

The absolute error is 0.369 for 