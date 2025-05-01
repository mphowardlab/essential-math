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

## Skill builder problems

1. Solve the differential equation

   \begin{equation}
   y'' - 4y' + 4y = x^{2} e^{x}  \quad y(0) = 0, \quad y'(0) = 0
   \end{equation}

   ```{solution}
   1. Find homogeneous solution $y_{\rm h}$:

      \begin{align}
      y_{\rm h}'' - 4y_{\rm h}' + 4y_{\rm h} &= 0 \\
      \lambda^2 - 4\lambda + 4 &= 0 \\
      (\lambda -2)^2 &= 0
      \end{align}

      so $\lambda = 2$ is a repeated eigenvalue and

      \begin{equation}
      y_{\rm h} = (c_1 + c_2 x) e^{2x}
      \end{equation}

   2. Find particular solution $y_{\rm p}$:

      \begin{align}
      y_1   &= e^{2x}          &\quad y_2&= x e^{2x} \\
      y_1'  &= 2 e^{2x}        &\quad y_2'&= (1 + 2x) e^{2x}
      \end{align}

      so the Wronskian is $W =(1 + 2x) \cdot e^{4x} - 2x \cdot e^{4x} = e^{4x}$.
      The right-hand side function is

      \begin{equation}
      r = x^{2} e^{x}
      \end{equation}

      so the particular solution is:

      \begin{align}
      y_{\rm p} &= -e^{2x} \int \frac{x e^{2x} (x^{2} e^{x})}{e^{4x}} \d{x} +
       x e^{2x} \int \frac{e^{2x} (x^{2} e^{x})}{e^{4x}} \d{x} \\
       &= -e^{2x} \int x^{3} e^{-x} \d{x} + x e^{2x} \int x^{2} e^{-x} \d{x}
      \end{align}

      These integrals can both be evaluated by parts using the tabular method:

      For the first

      | sign | $u$     | $\d{v}$     |
      |------|---------|-------------|
      |      |         | $e^{-x}$    |
      |  $+$ | $x^3$   | $-e^{-x}$   |
      |  $-$ | $3x^2$  | $e^{-x}$    |
      |  $+$ | $6x$    | $-e^{-x}$   |
      |  $-$ | $6$     | $e^{-x}$    |
      |      | $0$     |             |

      so

      \begin{equation}
      \int x^3 e^{-x} \d{x} = -x^3 e^{-x} - 3x^2 e^{-x} - 6x e^{-x}- 6 e^{-x}
      \end{equation}

      For the second

      | sign | $u$     | $\d{v}$     |
      |------|---------|-------------|
      |      |         | $e^{-x}$    |
      |  $+$ | $x^2$   | $-e^{-x}$   |
      |  $-$ | $2x$    | $e^{-x}$    |
      |  $+$ | $2$     | $-e^{-x}$   |
      |      | $0$     |             |

      so

      \begin{equation}
      \int x^2 e^{-x} \d{x} = -x^2 e^{-x} - 2x e^{-x} - 2 e^{-x}
      \end{equation}

      Substitute everything back:

      \begin{align}
      y_{\rm p} &= -e^{2x}
        \left( -x^3 e^{-x} - 3x^2 e^{-x} - 6x e^{-x} - 6 e^{-x} \right) \\
        &\quad + x e^{2x} \left( -x^2 e^{-x} - 2x e^{-x} - 2 e^{-x} \right) \\
        &= (x^2 + 4x + 6) e^x
      \end{align}

   3. Combine and apply initial conditions

      The general solution and its first derivative are

      \begin{align}
      y &= (c_1 + c_2 x) e^{2x}+(x^{2}+4x+6)e^{x} \\
      y' &= 2(c_1 + c_2 x) e^{2x} + c_2e^{2x} + (x^{2}+4x+6) e^{x} + (2x+4)e^{x}
      \end{align}

      Plugging in intial conditions

      \begin{align}
      y(0) &= c_1 + 6 = 0
      y'(0) &= 2 c_1 + c_2 + 10 = 0
      \end{align}

      gives $c_1 = -6$ and $c_2 = 2$.

    The final solution is:

    \begin{equation}
    y = (2 x - 6) e^{2x} + (x^{2}+4x+6)e^{x}
    \end{equation}
   ```

(d)

$y'' + y = \csc(x)$, with initial conditions $y\left(\frac{\pi}{2}\right) = y'\left(\frac{\pi}{2}\right) = 0$

```{solution}

#### Homogeneous:


\begin{align}
y' + y &= 0 \\
\lambda^2 + 1 &= 0 \Rightarrow \lambda_{1,2} = \pm i \\
y_n &= c_1 \underbrace{\cos x}_{\substack{\uparrow \\ y_1}} + c_2 \underbrace{\sin x}_{\substack{\uparrow \\ y_2}}
\end{align}


#### Particular:


\begin{align}
y_1 &= \cos(x), \quad y_2 = \sin(x) \\
y_1' &= -\sin(x), \quad y_2'= \cos(x)
\end{align}



\begin{align}
W &= y_1 y_2' - y_2 y_1' \\
  &= \cos^2(x) + \sin^2(x) \\
  &= 1
\end{align}



\begin{align}
y_p &= -y_1 \int \frac{y_2 r}{W} \, dx + y_2 \int \frac{y_1 r}{W} \, dx \\
    &= -\cos(x) \int \sin(x)\csc(x) \, dx + \sin(x)\int \cos(x)\csc(x) \, dx \\
    &= -\cos(x) \int dx + \sin(x) \int \frac{\cos(x)}{\sin(x)} \, dx \\
    &= -x \cos(x) + \sin(x) \ln\left| x \right|
\end{align}


#### Boundary Conditions:


\begin{align}
y &= c_1 \cos(x) + c_2 \sin(x) + \sin(x) \ln\left| \sin(x) \right| - x \cos(x) \\
y' &= -c_1 \sin(x) + c_2 \cos(x) + \cos(x) (1 + \ln\left| \sin(x) \right|) + x \sin(x) - \cos(x)
\end{align}


\begin{align}
0 &= y \frac{\pi}{2} = c_2 \\
0 &= y' \frac{\pi}{2} = -c_1 + \frac{\pi}{2} \to c_1 = \frac{\pi}{2}
\end{align}



\[
\boxed{\displaystyle y = \left( \frac{\pi}{2} \right) \cos x + \sin x \ln \left| \sin x \right| - x \cos x}
\]
```
