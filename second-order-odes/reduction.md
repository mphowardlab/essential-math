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

## Skill builder problems

Solve the following:

(a) $xy'' + 2y' + xy = 0$, given $\displaystyle y_{1} = \frac{\cos(x)}{x}$

```{solution}
$y'' + \frac{2}{x}y' + y = 0$ is linear and homogeneous, so use variation of parameters for y_{2}

\begin{align}
u = \frac{1}{y^2}e^{-\int{pdx}} = \frac{x^2}{\cos^2(x)}e^{-\int{\frac{2}{x}dx}} = \frac{x^2}{\cos^2(x)}e^{-2\ln(x)}\ = \frac{x^2}{\cos^2(x)}x^{-2}\ = \sec^2(x) \\

y_{2} = y_{1}\int{udx} = \frac{\cos(x)}{x}\int{\sec^2(x)dx} = x^{-1}\cos(x)\tan(x) = \frac{\sin(x)}{x} \\
\end{align}
\begin{equation}
y = c_{1}x^{-1}\cos(x) + c_{2}x^{-1}\sin(x)
\end{equation}
```

(b) $(1-x^2)y'' - 2xy' + 2y = 0$

By inspection $y_{1} = x$ is a solution because $y_{1}' = 1$ and $y_{1}'' = 0$. So, find $y_{2}$.

```{solution}
\begin{align}
y'' - \frac{2x}{1-x^2}y' + \frac{2}{1-x^2}y = 0\\

u = \frac{1}{y_{2}^2}e^{-\int{pdx}} = \frac{1}{x^2}e^{\int{\frac{2x}{1-x^2}dx}} = \frac{1}{x^2}e^{-\ln(1-x^2)} = \frac{1}{x^2(1-x^2)}, x < 1\\

y_{2} = y_{1}\int{udx} = x\int{\frac{1}{x^2(1-x^2)}dx} = x\int{[\frac{1}{x^2} + \frac{1}{2(1+x)} + \frac{1}{2(1-x)}]dx}\\
\frac{1}{x^2(1-x)(1+x)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{1+x} + \frac{D}{1-x} = \frac{A}{x} + \frac{\frac{1}{2}}{1+x} + \frac{\frac{1}{2}}{1-x}
\end{align}
Cover up:
B = 1
\begin{equation}
C = \frac{1}{2}
\end{equation}
\begin{equation}
D = \frac{1}{2}
\end{equation}
No constant term so A = 0
\begin{align}
y_{2} = x[-\frac{1}{x} + \frac{1}{2}\ln(1+x) - \frac{1}{2}\ln(1=x)] = -1 + \frac{x}{2}\ln(\frac{1+x}{1-x}) = -1 - \frac{x}{2}\ln(\frac{1-x}{1+x})\\
\end{align}
\begin{equation}
y = c_{1}x + c_{2}[1 + \frac{x}{2}\ln(\frac{1-x}{1+x})], x < 1
\end{equation}
```
