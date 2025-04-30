# Variation of parameters

```{example} Steady heat diffusion with internal source
We are solving the steady-state heat diffusion equation with an internal source:

\begin{equation}
\alpha \dd{2}{T}{x} + qx \sin x = 0
\end{equation}

where $\alpha$ is thermal diffusivity, and $qx \sin x$ is the heat source. The
boundary conditions are:

\begin{equation}
T(-1) = T(1) = 1
\end{equation}

---

In standard form,

\begin{equation}
T'' = -q x \sin x
\end{equation}

1. Find homogeneous solution:

   \begin{align}
   \alpha T_{\rm h}'' &= 0 \\
   \alpha \lambda^2 &= 0 \\
   \lambda &= 0
   \end{align}

   so,

   \begin{equation}
   T_{\rm h} = c_1 + c_2 x
   \end{equation}

2. Find particular solution using variation of parameters:

   \begin{align}
   y_1 &= 1, \quad y_2 = x \\
   y_1' &= 0, \quad y_2' = 1
   \end{align}

   so the Wronskian is $W = 1 \cdot 1 - 0 \cdot x = 1$. The right-hand side
   function is

   \begin{equation}
   r = -\frac{qx \sin x}{\alpha}
   \end{equation}

   so the particular solution is:

   \begin{align}
   T_{\rm p} &= -1 \int x \left( \frac{-q x \sin x}{\alpha} \right) \, \d{x}
     + x \int \left( \frac{-q x \sin x}{\alpha} \right) \, \d{x} \\
   &= \frac{q}{\alpha} \int x^2 \sin x \, \d{x}
     - \frac{q}{\alpha} x \int x \sin x \, \d{x}
   \end{align}

   These integrals can both be evaluated by parts. For the first integral,
   use the tabular method:

   | sign | $u$     | $\d{v}$     |
   |------|---------|-------------|
   |      |         | $\sin x$    |
   |  $+$ | $x^2$   | $-\cos x$   |
   |  $-$ | $2x$    | $-\sin x$   |
   |  $+$ | $2$     | $\cos x$    |
   |      | $0$     |             |

   so

   \begin{equation}
   \int x^2 \sin x \, \d{x} = -x^2 \cos x + 2x \sin x + 2 \cos x
   \end{equation}

   For the second integral, use

   \begin{align}
   u &= x & \d{v} &= \sin x \d{x} \\
   \d{u} &= 1 \d{x} & v &= -\cos{x}
   \end{align}

   so

   \begin{equation}
   \int x \sin x \d{x} = -x \cos x + \int \cos x \d{x} = -x \cos x + \sin x
   \end{equation}

   Substitute everything back:

   \begin{align}
   T_{\rm p} &= \frac{q}{\alpha} \left[ -x^2 \cos x + 2x \sin x + 2 \cos x \right]
     - \frac{q}{\alpha} x \left[ -x \cos x + \sin x \right] \\
   &= \frac{q}{\alpha} [2 \cos x + x \sin x]
   \end{align}

3. Combine and apply boundary conditions.

   The general solution is

   \begin{equation}
   T = c_1 + c_2 x + \frac{q}{\alpha}(2\cos x + x \sin x)
   \end{equation}

   The boundary conditions are:

   \begin{align}

   T(-1) &= c_1 - c_2 + \frac{q}{\alpha}[2\cos(-1) - \sin(-1)] = 1\\
     &= c_1 - c_2 + \frac{q}{\alpha}[2\cos 1 + \sin 1] \\
   T(1) &= c_1 + c_2 + \frac{q}{\alpha}[2\cos 1 + \sin 1] = 1
   \end{align}

   This is a system of linear equations that can be solved for $c_1$ and $c_2$.
   Subtracting the two equations gives:

   \begin{equation}
   0 = 2 c_2
   \end{equation}

   so $c_2 = 0$. Plugging back in and solving for $c_1$:

   \begin{align}
   1 &= c_1 + \frac{q}{\alpha}(2\cos 1 + \sin 1) \\
   c_1 &= 1 - \frac{q}{\alpha}(2\cos 1 + \sin 1)
   \end{align}

The final result is:
\begin{equation}
T = 1 + \frac{q}{\alpha}\left[2(\cos x - \cos 1) + x \sin x - \sin 1\right]
\end{equation}
```
