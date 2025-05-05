# Undetermined coefficients

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

Ex. $y''+3y'+2.25y=-10e^-1.5x+cosx$

1. Find $y_n$: $y{_n}''+3y{_n}'+2.25y_n =0 ->
   \lambda^2 +3\lambda+2.25 =(\lambda+1.5)^2 = 0 ->
   \lambda=-1.5 -> y_n = (c_1 + c{_2}x)e^{-1.5x}$
2. Guess $y_p$: $y_p = k_1 x^2 e^{-1.5 x} + (k_2 \cos(x) +k_3 \sin(x))$
