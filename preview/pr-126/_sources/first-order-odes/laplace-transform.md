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

Example: Hormone Level  

The concentration of a hormone in the blood varies due to sinusoidal production by the thyroid and continuous removal according to:

$$
c' = A + B\cos\left(\frac{\pi t}{12}\right) - kc
$$

The concentration is $c_0$ at 6 AM ($t = 0$). What is the average concentration between 6 PM and 6 AM the same day?

To solve, rearrange and use the Laplace transform:

$$
c' + kc = A + B\cos\left(\frac{\pi t}{12}\right)
$$

$$
[sC(s) - c_0] + kC(s) = \mathcal{L}\left\{A + B\cos\left(\frac{\pi t}{12}\right)\right\}
$$

$$
= \frac{A}{s} + \frac{Bs}{s^2 + \left(\frac{\pi}{12}\right)^2}
$$

$$
C(s) = \left(\frac{1}{s + k}\right)\left[c_0 + \frac{A}{s} + \frac{Bs}{s^2 + \left(\frac{\pi}{12}\right)^2}\right]
$$

$$
C(s) = \frac{c_0}{s + k} + \frac{A}{s(s + k)} + \frac{Bs}{(s^2 + \left(\frac{\pi}{12}\right)^2)(s + k)}
$$

Using partial fraction decomposition:

$$
\frac{A}{s(s + k)} = \frac{1}{s(s + k)} = \frac{c_1}{s} + \frac{c_2}{s + k}
$$

$$
c_1 = \frac{1}{k}, \quad c_2 = \frac{-1}{k}
$$

For the next term:

$$
\frac{Bs}{(s^2 + \left(\frac{\pi}{12}\right)^2)(s + k)} = \frac{s}{(s^2 + \left(\frac{\pi}{12}\right)^2)(s + k)}
$$

$$
= \frac{c_1 s + c_2}{s^2 + \left(\frac{\pi}{12}\right)^2} + \frac{c_3}{s + k}
$$

$$
s = (c_1 s + c_2)(s + k) + c_3\left[s^2 + \left(\frac{\pi}{12}\right)^2\right]
$$

$$
(c_1 + c_3)s^2 + (c_1 k + c_2)s + c_2 k + c_3\left(\frac{\pi}{12}\right)^2 = s
$$

$$
c_1 + c_3 = 0 \\
c_1 k + c_2 = 1 \\
c_2 k + c_3 \left(\frac{\pi}{12}\right)^2 = 0
$$

Constants:

$$
c_3 = \frac{-k}{k^2 + \left(\frac{\pi}{12}\right)^2}, \quad
c_1 = \frac{k}{k^2 + \left(\frac{\pi}{12}\right)^2}, \quad
c_2 = \frac{\left(\frac{\pi}{12}\right)^2}{k^2 + \left(\frac{\pi}{12}\right)^2}
$$

So: 

$$
\frac{s}{(s^2 + \left(\frac{\pi}{12}\right)^2)(s + k)} = \frac{ks + \left(\frac{\pi}{12}\right)^2}{(s^2 + \left(\frac{\pi}{12}\right)^2)(k^2 + \left(\frac{\pi}{12}\right)^2)} - \frac{k}{(s + k)(k^2 + \left(\frac{\pi}{12}\right)^2)}
$$

Therefore, 


