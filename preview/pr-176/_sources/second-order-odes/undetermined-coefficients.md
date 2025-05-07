# Undetermined coefficients

```{topic} Undetermined coefficients
If a nonhomogeneous linear second-order ODE has constant coefficients

\begin{equation}
y'' + a y' + b y = r(x)
\end{equation}

we can "guess" a solution as follows:

<!-- markdownlint-disable MD013 -->
| $r$                            | $y_{\rm p}$                                             |
|--------------------------------|---------------------------------------------------------|
| $k e^{\gamma x}$               | $k e^{\gamma x}$                                        |
| $k x^n (n=0,1,\ldots)$         | $k_n x^n + k_{n-1} x^{n-1} + \cdots + k_1 x + k_0$      |
|$k e^{\alpha x} \cos{\omega x}$ | $e^{\alpha x}(k_1 \cos{\omega x} + k_2 \sin{\omega x})$ |
|$k e^{\alpha x} \sin{\omega x}$ | $e^{\alpha x}(k_1 \cos{\omega x} + k_2 \sin{\omega x})$ |
<!-- markdownlint-enable MD013 -->

- If *r* has multiple terms, add guesses for each together.
- If the guess for $y_{\rm p}$ is a homogeneous solution $y_{\rm h}$, multiply
  by *x* unless this solution is a repeated root - then multiply by $x^2$!
```

For example, to solve:

\begin{equation}
y'' + y = 0.001 x^2, \quad y(0) = 0, \quad y'(0) = 1.5
\end{equation}

Use the following steps:

1. Find $y_{\rm h}$:

   \begin{align}
   y_{\rm h}'' + y_{\rm h} &= 0 \\
   \lambda^2 + 1 &= 0
   \end{align}

   so $\lambda = \pm i$ and

   \begin{equation}
   y_{\rm h} = c_1 \cos x +c_2 \sin x
   \end{equation}

2. Guess $y_{\rm p}$ and solve for undetermined coefficients:

   \begin{align}
   y_{p} &= k_2 x^2 + k_1 x + k_0 \\
   y_{\rm p}' &= 2k_2 x + k_1 \\
   y_{\rm p}'' &= 2k_2
   \end{align}

   So

   \begin{equation}
   y_{\rm p}'' + y_{p} = 2 k_2 + k_2 x^2 + k_1 x + k_0 = 0.001x^2
   \end{equation}

   Equating coefficients of like powers of *x* gives the system

   \begin{align}
   k_2 &= 0.001 \\
   k_1 &= 0 \\
   2k_2 + k_0 &= 0 \\
   \end{align}

   which gives $k_0 = -0.002$.

3. Combine solutions and solve IVP.

   The general solution and its first derivative are:

   \begin{align}
   y &= y_{\rm h} + y_{\rm p} = c_1  \cos x + c_2  \sin x  + 0.001x^2 - 0.002 \\
   y' &= -c_1 \sin x + c_2 \cos x + 0.002x
   \end{align}

   Substituting in the first boundary condition:

   \begin{align}
   y(0) &= c_1 - 0.002 = 0\\
   y'(0) &= c_2 = 1.5
   \end{align}

   Hence, $c_1 = 0.002$, $c_2 = 1.5$, and

   \begin{equation}
   y = 0.002 \cos x + 1.5 \sin x + 0.001x^2 - 0.002
   \end{equation}

---

As a more complex example, let's find the form of the particular solution for:

\begin{equation}
y'' + 3y' + 2.25y = -10e^-1.5x + \cos x
\end{equation}

1. Find $y_{\rm h}$:

   \begin{align}
   y_{\rm h}''+3y_{\rm h}'+2.25y_{\rm h} &= 0 \\
   \lambda^2 +3\lambda+2.25 = 0 \\
   (\lambda+1.5)^2 &= 0 \\
   \end{align}

   so $\lambda = -1.5$. This is a real repeated root, so

   \begin{equation}
   y_{\rm h} = (c_1 + c_2 x)e^{-1.5x}
   \end{equation}

2. Guess $y_{\rm p}$:

   We should add guesses for both terms in *r*. Our first term is an
   exponential, but it needs to be multiplied by $x^2$ because it is the same
   as the homogeneous solution, which is a real repeated root. Our second
   term is a sum of cosine and sine.

   \begin{align}
   y_{\rm p} = k_1 x^2 e^{-1.5 x} + (k_2 \cos x  +k_3 \sin x)
   \end{align}

## Skill builder problems

1. Solve:

   \begin{equation}
   y'' + 3y' + 2y = 30e^{2x}, \quad y(0) = 1, \quad y'(0) = 0
   \end{equation}

   ```{solution}
    1. Find homogeneous solution $y_{\rm h}$:

       \begin{align}
       y_{\rm h}'' + 3y_{\rm h}' + 2y_{\rm h} &= 0 \\
       \lambda^{2} + 3\lambda + 2 &= 0 \\
       (\lambda + 1)(\lambda + 2) &= 0
       \end{align}

       so $\lambda_1 = -1$ and $\lambda_2 = -2$. Then,

       \begin{equation}
       y_{\rm h} = c_1 e^{x} + c_2 e^{-2x}
       \end{equation}

    2. Find particular solution $y_{\rm p}$:

       \begin{align}
       y_{\rm p} &= ke^{2x} \\
       y_{\rm p}' &= 2ke^{2x}  \\
       y_{\rm p}'' &= 4ke^{2x}
       \end{align}

       Combine and solve for *k*:

       \begin{align}
       4ke^{2x} e^{2x} &+ 6ke^{2x} e^{2x} + 2ke^{2x} e^{2x} = 30e^2x e^{2x} \\
       12k &= 30
       \end{align}

       so $k = 5/2$ and

       \begin{equation}
       y_{\rm p} = \frac{5}{2} e^{2x}
       \end{equation}

    3. Combine and apply initial conditions:

       The general solution and its first derivative are

       \begin{align}
       y &= c_1 e^{-x} + c_2 e^-{2x} + \frac{5}{2} e^{2x} \\
       y' &= -c_1 e^{-x} - 2c_2 e^{-2x} + 5e^{2x}
       \end{align}

       Plugging in initial conditions

       \begin{align}
       y(0) &= c_1 + c_2 + \frac{5}{2} = 1 \\
       y'(0) &= -c_1 - 2c_2 + 5 = 0
       \end{align}

       This is a system of linear equations:

       \begin{align}
       c_1 + c_2 &= -\frac{3}{2} \\
       c_1 + 2c_2 &= 5 \\
       \end{align}

       that can be solved to give $c_1 = -8$ and $c_2 = 13/2$.

   The final solution is:

   \begin{equation}
   y = -8e^{-x} + \frac{13}{2} e^{-2x} = \frac{5}{2} e^{2x}
   \end{equation}
   ```

2. Solve:

   \begin{equation}
   y'' + 4y = 16 \cos 2x , \quad y(0), \quad y'(0) = 0
   \end{equation}

   ```{solution}
   1. Find homogeneous solution $y_{\rm h}$:

      \begin{align}
      y_{\rm h}'' + 4y_{\rm h} &= 0 \\
      \lambda^{2} + 4 &= 0  \\
      \end{align}

      so $\lambda_{1,2} = \pm 2i$ and

      \begin{equation}
      y_{\rm h} = c_1 \cos 2x + c_2 \sin 2x
      \end{equation}

   2. Find the particular solution $y_{\rm p}$:

      \begin{align}
      y_{\rm p} &= x(k_1 \cos 2x + k_2 \sin 2x) \\
      y_{\rm p}' &= x(-2k_1 \sin 2x + 2k_2 \cos 2x) +
        (k_1 \cos 2x + k_2 \sin 2x) \\
      y_{\rm p}'' &= x(-4k_1 \cos 2x - 4k_2 \sin 2x) +
        2(-2k_1 \sin 2x + 2k_2 \cos 2x)
      \end{align}

      Combine:

      \begin{equation}
      y_{\rm p}'' + 4y_{\rm p} = 2(-2k_1 \sin 2x + 2k_2 \cos 2x) = 16\cos 2x
      \end{equation}

      Comparing terms gives $k_1 = 0$ and $k_2 = 4$.

   3. Combine and apply initial conditions:

      The general solution and its first derivative are

      \begin{align}
      y &= c_1 \cos 2x + c_2 \sin 2x + 4x \sin 2x \\
      y' &= -2c_1 \sin 2x + 2c_2 \cos 2x + 4x(2 \cos 2x) + 4 \sin 2x
      \end{align}

      Plugging in the initial conditions:

      \begin{align}
      y(0) &= c_1 = 0 \\
      y'(0) &= 2c_2 = 0
      \end{align}

      gives $c_1 = 0$ and $c_2 = 0$.

   The final solution is:

   \begin{equation}
   y = 4x \sin 2x
   \end{equation}
   ```

**Solve the differential equation:**

  \begin{equation}
y'' - y' - 12y = 144x^3 + \frac{25}{2}
  \end{equation}

**with initial conditions:**

\begin{equation}
y(0) = 5, \quad y'(0) = -\frac{1}{2}
\end{equation}

---
```{solution}


Homogeneous solution:

\begin{equation}
y'' - y' - 12y = 0 
\end{equation}
\begin{equation}
\lambda^2 - \lambda - 12 = 0
\end{equation}

\begin{equation}
(\lambda - 4)(\lambda + 3) = 0
\end{equation}

\begin{equation}
\lambda_1 = 4, \quad \lambda_2 = -3
\end{equation}

\begin{equation}
y_h = C_1 e^{4x} + C_2 e^{-3x}
\end{equation}

---

Particular Solution:

Guess:

\begin{equation}
y_p = k_1 x^3 + k_2 x^2 + k_3 x + k_4
\end{equation}

\begin{equation}
y_p' = 3k_1x^2 + 2k_2x + k_3
\end{equation}

\begin{equation}
y_p'' = 6k_1x + 2k_2
\end{equation}

\begin{equation}
(6k_1x + 2k_2) - (3k_1x^2 + 2k_2x + k_3) - 12(k_1x^3 + k_2x^2 + k_3x + k_4)
\end{equation}

\begin{equation}
= -12k_1x^3 + (-3k_1 - 12k_2)x^2 + (6k_1 - 2k_2 - 12k_3)x + (2k_2 - k_3 - 12k_4)
\end{equation}

\begin{equation}
  -12k_1 = 144 \quad \Rightarrow \quad k_1 = -12
  \end{equation}

\begin{equation}
  -3k_1 - 12k_2 = 0
  \end{equation}
  
\begin{equation}
  36 - 12k_2 = 0 \quad \Rightarrow \quad k_2 = 3
  \end{equation}

\begin{equation}
  6k_1 - 2k_2 - 12k_3 = 0 \quad \Rightarrow \quad k_3 = \frac{6k_1 -2k_2}{12} = -\frac{13}{2}
  \end{equation}

\begin{equation}
2k_2 - k_3 - 12k_4 = \frac{25}{2} \quad \Rightarrow \quad 12k_4 = 2(-3) - ('\frac{13}{2}) - \frac{25}{2} = 0 \quad \Rightarrow \quad k_4 = 0
  \end{equation}

\begin{equation}
y_p = -12x_3 + 3x^2 - \frac{13}{2}x
\end{equation}
  
---

Boundary Conditions:

\begin{equation}
 y = C_1 e^{4x} + C_2 e^{-3x} - 12x^3 + 3x^2 - \frac{13}{2}x
\end{equation}

\begin{equation}
y' = 4C_1 e^{4x} - 3C_2e^{-3X} - 36x^2 + 6x - \frac{13}{2}
\end{equation}

$$\begin{alignat*}{4}
5 &= y(0) &&= C_1 + C_2 &&\Rightarrow  C_1 + C_2 &= 5 \\
-\frac{1}{2} &= y'(0) &&= 4C_1 - 3C_2 - \frac{13}{2} &&\Rightarrow  4C_1 - 3C_2 &= 6
\end{alignat*}$$

$$\begin{equation}
\begin{bmatrix} 1 & 1 & 5 \\\ 4 & -3 & 6 \end{bmatrix} \quad \Rightarrow
\begin{bmatrix} 1 & 1 & 5 \\\ 0 & -7 & 14 \end{bmatrix} \quad \Rightarrow
\begin{bmatrix} 1 & 1 & 5 \\\ 0 & 1 & 12  \end{bmatrix} \quad \Rightarrow
\begin{bmatrix} 1 & 0 & 3 \\\ 0 & 1 & 12  \end{bmatrix}
\end{equation}$$

---

Final Answer:

\begin{equation}
\boxed{y = 3e^{4x} + 2e^{-3x} - 12x^3 + 3x^2 - \frac{13}{2}x}
\end{equation}
```
