# Undetermined coefficients

If the ODE has constant coefficients so that $y''+ay'+by=r(x)$, we can "guess"
a solution as follows:

| $r(x)$ | $y_p(x)$ |
| :---: | :---:  |
| $k e^{\gamma x}$| $k e^{\gamma x}$ |
| $k x^n (n=0,1,\ldots)$ | $k_n x^n + k_{n-1} x^{n-1} + \cdots + k_1 x + k_0$|
<!-- markdownlint-disable MD013 -->
|$k e^{\alpha x} \cos{\omega x}$ | $e^{\alpha x}(k_1 \cos{\omega x} + k_2 \sin{\omega x})$ |
|$k e^{\alpha x} \sin{\omega x}$ | $e^{\alpha x}(k_1 \cos{\omega x} + k_2 \sin{\omega x})$ |
<!-- markdownlint-disable MD013 -->

- If *r* has multiple terms, add guesses for each together.
- If the guess for $y_{\rm p}$ is a homogeneous solution $y_{\rm h}$, multiply
  by *x* unless this solution is a repeated root - then multiply by $x^2$!

```{example} Undetermined coefficients
Find the solution to
\begin{equation}
y'' + y = 0.001 x^2
\end{equation}
given $y(0) = 0$ and $y'(0) = 1.5$.

---

1. Find $y_{\rm h}$:

   \begin{align}
   y_{\rm h}'' + y_{\rm h} &= 0 \\
   y_{\rm h} &= c_1 \cos x +c_2 \sin x
   \end{align}

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

4. Combine solutions and solve IVP:

   \begin{align}
   y &= y_{\rm h} + y_{\rm p} = c_1  \cos x + c_2  \sin x  + 0.001x^2 - 0.002 \\
   y' &= -c_1 \sin x + c_2 \cos x + 0.002x
   \end{align}

   Substituting in the first boundary condition:

   \begin{align}
   0 &= y(0) = c_1 - 0.002 \\
   c_1 &= 0.002
   \end{align}

   and in the second boundary condition

   \begin{equation}
   1.5 = y'(0) = c_2
   \end{equation}

   Hence,

   \begin{equation}
   y = 0.002 \cos x + 1.5 \sin x + 0.001x^2 - 0.002
   \end{equation}
```

Ex. $y''+3y'+2.25y=-10e^-1.5x+cosx$

1. Find $y_n$: $y{_n}''+3y{_n}'+2.25y_n =0 -> \lambda^2 +3\lambda+2.25 =(\lambda+1.5)^2 = 0 -> \lambda=-1.5 -> y_n = (c_1 + c{_2}x)e^{-1.5x}$
2. Guess $y_p$: $y_p = k_1 x^2 e^{-1.5 x} + (k_2 \cos(x) +k_3 \sin(x))$
