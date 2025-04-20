# Separable differential equations

```{topic} Separable first-order ODEs
If a first-order ODE can be separated so that *y* and *x* are on each side, it
can be solved by integration:

\begin{align}
y' &= \frac{f(x)}{g(y)} \\
\int g(y)\d{y} &= \int f(x) \d{x} + c
\end{align}
```

```{example} Separation of variables
Given $y' = xy$, separate the variables and solve:

\begin{align}
\int \frac{\d{y}}{y} &= \int x \d{x} \\
\ln y &= \frac{x^2}{2} + c_0 \\
y &= e^{x^2/2 + c_0} \\
y &= c e^\frac{x^2}{2}
\end{align}

Note that here, we are being careful to denote the redefinition of the
integration constant ($c = e^{c_0}$). This detail may be glossed over at times.
```
