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
   
    so the Wronskian is $W =(1 + 2x) \cdot e^{4x} - 2x \cdot e^{4x} = e^{4x}$. The right-hand side
    function is

    \begin{equation}
    r = x^{2} e^{x}
    \end{equation}

    so the particular solution is:
    \begin{equation}
    y_{\rm p} = -e^{2x} \int \frac{x e^{2x} (x^{2} e^{2x})}{e^{4x}} \, dx + x e^{2x} \int \frac{e^{2x} (x^{2} e^{2x})}{e^{4x}} \, dx
    \end{equation}
   
    Simplifying both integrals gives
    \begin{equation}
    y_{\rm p} = -e^{2x} \int x^{3} e^{-x} \, dx + x e^{2x} \int x^{2} e^{-x} \, dx
    \end{equation}
   
    These integrals can both be evaluated by parts using the tabular method:
   
    For the first

    | sign | $u$     | $\d{v}$     |
    |------|---------|-------------|
    |      |         | $e^{-x}$    |
    |  $+$ | $x^3$   | $-e^{-x}$   |
    |  $-$ | $3x^2$  | $e^{-x}$    |
    |  $+$ | $6x$    | $-e^{-x}$   |
    |  $-$ | $6$     | $e^{-x}$    |
    |      | $0$     | $-e^{-x}$   |

    so
 
    \begin{equation}
    \int x^3 e^{-x} \, \d{x} = -x^3 e^{-x} - 3x^2 e^{-x} - 6x e^{-x}- 6 e^{-x}
    \end{equation}

    For the second
 
    | sign | $u$     | $\d{v}$     |
    |------|---------|-------------|
    |      |         | $e^{-x}$    |
    |  $+$ | $x^2$   | $-e^{-x}$   |
    |  $-$ | $2x$    | $e^{-x}$    |
    |  $+$ | $2$     | $-e^{-x}$   |
    |      | $0$     | $e^{-x}$    |

    so
    
    \begin{equation}
    \int x^2 \e^{-x} \, \d{x} = -x^2 \e^{-x} - 2x \e^{-x} - 2 \e^{-x}
    \end{equation}
    
    Substitute everything back:
    \begin{align}
    y_{\rm p} &= -e^{2x} \left( -x^3 e^{-x} - 3x^2 e^{-x} - 6x e^{-x} - 6 e^{-x} \right) \\
    &\quad + x e^{2x} \left( -x^2 e^{-x} - 2x e^{-x} - 2 e^{-x} \right)
    \end{align}

     Simplifying:

     \begin{equation}
     y_{\rm p} = (x^2 + 4x + 6) e^x
     \end{equation}

   3. Combine and apply initial conditions
  
      The general solution is

      \begin{equation}
      y=(C_1 + C_2 x) e^{2x}+(x^{2}+4x+6)e^{x}
      \end{equation}

     Taking the first derivative gives
      \begin{equation}
      y'=2(C_1 + C_2 x) e^{2x}+C_2e^{2x}+(x^{2}+4x+6)e^{x}+(2x+4)e^{x}
      \end{equation}


     Plugging in intial conditions gives

      \begin{equation}
      0=y(0)=(C_1+C_2(0))e^{2(0)}
      \end{equation}
      \begin{equation}
      0=y'(0)=2(C_1 + C_2(0)) e^{2(0)}+C_2e^{2(0)}+(0^{2}+4(0)+6)e^{0}+(2(0)+4)e^{0}
      \end{equation}

    $$
    C_1 = -6 \quad C_2 = 2
    $$

    This final solution is
    \begin{equation}
     y=(2 x - 6) e^{2x}+(x^{2}+4x+6)e^{x}
    \end{equation}

   ```
