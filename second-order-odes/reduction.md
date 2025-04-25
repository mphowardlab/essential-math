# Reduction of order

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

