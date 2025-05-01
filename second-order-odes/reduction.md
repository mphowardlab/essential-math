# Reduction of order

It can be hard to find $y_1$ and $y_2$ in general, but some techniques can help.
We will learn how to get $y_2$ if a $y_1$ is found (e.g, by guessing).

```{topic} Reduction of Order
If a solution $y_1$ of $y'' + P(x)y' + q(x)y = 0$ is known, then

\begin{align}
y_2 &= y_1\int u\d{x} \\
u &= \frac{1}{y_1^2}\ e^{-\int p\d{x}}
\end{align}

is another solution.
```

For example, to solve:

\begin{equation}
(x^2 - x)y'' - xy' + y = 0
\end{equation}

We can guess that $y_1 = x$ is a solution because $y_1' = 1$ and $y_1'' = 0$.
We can now use reduction of order to find $y_2$. First, rewrite the ODE in
standard form by dividing through by $x^2-x$:

\begin{equation}
y'' + \frac{1}{1 - x} y' + \frac{1}{x^2 - x}y = 0
\end{equation}

Then, calculate *u*:

\begin{align}
u &= \frac{1}{x^2} \exp\left(-\int \frac{1}{1-x} \d{x} \right) \\
  &= \frac{1}{x^2}\ e^{\ln(1-x)} \\
  &= \frac{1-x}{x^2}
\end{align}

Finally, integrate *u* to obtain $y_2$:

\begin{align}
y_2 &= \frac{1}{x^2} \int \left( \frac{1}{x^2} - \frac{1}{x} \right)\d{x} \\
&= x \left(-\frac{1}{x}-\ln{x}\right)
\end{align}

Absorbing the minus sign into the unknown coefficient, the general solution is:

\begin{equation}
y = c_1 x + c_2 (1 + \ln x)
\end{equation}
