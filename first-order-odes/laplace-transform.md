# Laplace transform

```{example} Laplace transform
Solve the initial value problem

\begin{equation}
y' =-ky, \quad y(0) =2
\end{equation}

---

Rearrange, apply Laplace transform $Y = L[y]$, and solve for $Y$:

\begin{align}
y'+ ky &= 0 \\
L[y'+ky] &= L[0] \\
L[y']+kL[y] &= L[0] \\
sY - y(0) + k Y &= 0 \\
(s+k) Y - 2 &= 0 \\
Y &= \frac{2}{s+k}
\end{align}

Invert Laplace transform:

\begin{equation}
y = L^{-1}\left[\frac{2}{s+k}\right] = 2L^{-1}\left[\frac{1}{s+k}\right] = 2 e^{-kt}
\end{equation}
```

```{example} Laplace transform with partial fractions
Solve the initial value problem:

\begin{equation}
y'-y = t, \quad y(0) = 1
\end{equation}

---

Rearrange, apply Laplace transform $Y = L[y]$, and solve for $Y$:

\begin{align}
L[y'-y] &= L[t]\\
L[y']-L[y] &= L[t]\\
sY - y(0) - Y &= \frac{1}{s^2}\\
(s-1) Y - 1 &= \frac{1}{s^2}\\
Y &= \frac{1}{s-1} + \frac{1}{s^2(s-1)}
\end{align}

These terms do not immediately correspond to the Laplace transform table, but
we can separate them using
[partial fraction decomposition](../calculus/integration-partial-fractions.md):

\begin{equation}
\frac{1}{(s-1) s^2} = \frac{A_1}{s-1} + \frac{A_2}{s} + \frac{A_3}{s^2}
\end{equation}

$A_1$ and $A_3$ can be found using the coverup method:

\begin{align}
A_1 &= \frac{1}{1^2} = 1 \\
A_3 &= \frac{1}{0-1} = -1
\end{align}

To find $A_2$, substitute and cross multiply:

\begin{equation}
1 = s^2 + A_2(s-1)s - (s-1)
\end{equation}

then compare the coefficient of the $s^2$ terms on either side:

\begin{equation}
1 + A_2 = 0 \to A_2 = -1
\end{equation}

So, all together:

\begin{equation}
Y = \frac{2}{s-1} - \frac{1}{s} - \frac{1}{s^2}
\end{equation}

Solve for $y$ by applying the inverse Laplace transform

\begin{align}
y &=L^{-1}[Y]\\
  &=2L^{-1}\left[\frac{1}{s-1}\right]-L^{-1}\left[\frac{1}{s}\right]-L^{-1}\left[\frac{1}{s^2}\right]\\
  &=2e^t-1-t
\end{align}
```

```{example} Laplace transform
Solve the initial value problem using Laplace transforms
\begin{equation}
y' + 4y = e^{4x} \quad y(0) = 0
\end{equation}

---

\begin{align}
L[y'+4y] &= L[e^{4x}] \\
sY - y(0) + 4Y &= \frac{1}{s-4} \\
(s+4) Y &= \frac{1}{s-4} \\
\end{align}

Use partial fractions:
\begin{align}
Y &= \frac{1}{(s-4)(s+4)} \\
&= \frac{A_1}{s-4} + \frac{A_2}{s+4} \\
\end{align}

Cover up to find $A_1$ and $A_2$:

\begin{align}
A_1 &= \frac{-1}{8} \\
A_2 &= \frac{1}{8} \\
\end{align}

Solve using Laplace transforms:
\begin{align}
Y = \frac{-1}{8} \frac{1}{s+4} + \frac{1}{8} \frac{1}{s-4} \\
y = L^{-1}[Y] &= \frac{-1}{8}L^{-1}\left[\frac{1}{s+4}\right] + \frac{1}{8}L^{-1}\left[\frac{1}{s-4}\right] \\
&= \frac{-1}{8}e^{-4x} + \frac{1}{8}e^{4x} \\
y &= \frac{1}{8}(e^{4x} - e^{-4x}) \\
\end{align}
```
