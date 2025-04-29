# Variation of parameters

```{example} Steady heat diffusion with internal source
We are solving the steady-state heat diffusion equation with an internal source:

\begin{equation}
\alpha \dd{2}{T}{x} + qx \sin x = 0
\end{equation}

where $\alpha$ is thermal diffusivity, and $qx \sin x$ is the heat source. The boundary conditions are:

\begin{equation}
T(-1) = T(1) = 1
\end{equation}

---

1. Find homogeneous solution:

   \begin{align}
   \alpha T_{\rm h}'' &= 0 \\
   \alpha \lambda^2 &= 0 \\
   \lambda &= 0
   \end{align}

   so,

   \begin{equation}
   T_{\rm h} = C_1 + C_2 x
   \end{equation}

2. Find particular solution using variation of parameters:

   \begin{align}
   y_1 &= 1, \quad y_2 = x \\
   y_1' &= 0, \quad y_2' = 1
   \end{align}

   so,

   \begin{align}
   W &= 1(1) - 0(x) = 1 \\
   r &= -\frac{qx \sin x}{\alpha}
   \end{align}

   Then, the particular solution is:

   \begin{align}
   T_{\rm p} &= -1 \int x \left( \frac{-q x \sin x}{\alpha} \right) \, \d{x}  + x \int \left( \frac{-q x \sin x}{\alpha} \right) \, \d{x} \\
   &= \frac{q}{\alpha} \int x^2 \sin x \, \d{x} - \frac{q}{\alpha} x \int x \sin x \, \d{x}
   \end{align}

   To evaluate $\int x^2 \sin x \, \d{x}$ first, let:

   \begin{align}
   u &= x^2, \quad dv = \sin x \, \d{x} \\
   du &= 2x \, \d{x}, \quad v = -\cos x
   \end{align}

   Then, using integration by parts:

   \begin{equation}
   \int x^2 \sin x \, \d{x} = -x^2 \cos x + \int 2x \cos x \, \d{x}
   \end{equation}

   Now, apply integration by parts again to $\int 2x \cos x \, \d{x}$:

   \begin{align}
   u &= 2x, \quad dv = \cos x \, \d{x} \\
   \du &= 2 \, \d{x}, \quad v = \sin x
   \end{align}

   Thus, 

   \begin{equation}
   \int 2x \cos x \, \d{x} = 2x \sin x - \int 2 \sin x \, \d{x} = 2x \sin x + 2 \cos x
   \end{equation}

   So, the first integral becomes:

   \begin{equation}
   \int x^2 \sin x \, \d{x} = -x^2 \cos x + 2x \sin x + 2 \cos x
   \end{equation}


Now evaluate $\int 2x \cos x \, dx$:

Let  
$u = 2x$, $\quad dv = \cos x \, dx$  
Then  
$du = 2\,dx$, $\quad v = \sin x$

$$
\int 2x \cos x \, dx = 2x \sin x - \int 2 \sin x \, dx = 2x \sin x + 2 \cos x
$$

So the first integral becomes:

$$
\int x^2 \sin x \, dx = -x^2 \cos x + 2x \sin x + 2 \cos x
$$

Substitute into the original expression:

$$
\frac{q}{α} \left[ -x^2 \cos x + 2x \sin x + 2 \cos x \right] - \frac{q}{α} x \int x \sin x \, dx
$$

Integration of $\int x \sin x \, dx$:

Let  
$u = x$, $\quad dv = \sin x \, dx$  
Then  
$du = dx$, $\quad v = -\cos x$

Then:

$$
\int x \sin x \, dx = -x \cos x + \int \cos x \, dx = -x \cos x + \sin x
$$

Substitute everything back:

$$
\frac{q}{α} \left[ -x^2 \cos x + 2x \sin x + 2 \cos x \right]
- \frac{q}{α} x \left[ -x \cos x + \sin x \right]
$$

Simplify:

$$
\frac{q}{α} \left[
  -x^2 \cos x + 2x \sin x + 2 \cos x
  + x^2 \cos x - x \sin x
\right]
$$

Result:

$$
\frac{q}{α} \left[
  2 \cos x + x \sin x
\right]
$$

3. Combine and apply boundary conditions.

$T = C_1 +C_2x + \frac{q}{α}(2cosx + xsinx)$

$1 = T(-1) = C_1 - C_2 + \frac{q}{α}[2cos(-1)-sin(-1)] = C_1 - C_2 + \frac{q}{α}[2cos1 + sin1]$

$1 = T(1) = C_1 + C_2 + \frac{q}{α}[2cos1 + sin1]$

--> $2 = 2C_1 + 2\frac{q}{α}(2cos1 + sin1)$ -> $C_1 = 1 - \frac{q}{α}(2cos1 + sin1)$

--> $C_2 = 1 - C_1 - \frac{q}{α}(2cos1 + sin1) = 0$

**Final Result:**

$T = 1 + \frac{q}{α}[2(cosx-cos1)+xsinx-sin1]$
