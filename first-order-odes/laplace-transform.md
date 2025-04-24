# Laplace transform

The Laplace transform is used in signals/controls. It is also a way to solve
*differential* equations using *algebra*. It is defined as:

\begin{equation}
F(s) = L[f(t)] = \int_0^\infty e^{-st} f(t) \d{t}
\end{equation}

The inverse Laplace transform of *F* is *f*, i.e., $f(t) = L^{-1}[F(s)]$. The
Laplace transform of many functions can be computed using integration by parts.
For example, the Laplace transform of $f(t) = t$ is:

\begin{align}
L[t] &= \int_0^\infty e^{-st} t \d{t} \\
  &= \left.-\frac{te^{-st}}{s}\right|_0^\infty
     + \int_0^\infty \frac{e^{-st}}{s} \d{t} \\
  &= -\left.\frac{e^{-st}}{s^2}\right|_0^\infty \\
  &= \frac{1}{s^2}
\end{align}

Importantly, the Laplace transform of the first derivative of an unknown
function $f(t) = y'(t)$ is:

\begin{equation}
\f(t) = y'(t) \to L[y'] = \int_0^\infty \e^-st \y' \d{t}
\= -\frac{te^-st}{s}|_{0}{\infty} - \int_0^\infty \ y \(\frac{e^-st}{s})dt \
\u = e^-st  dv = y' dt \
\ du = -se^-st   v = y \
= [ 0 - y ( 0 )] + s \int_0^\infty \e^-st y \dt\
= s L [ f ] - y( 0 )
= s Y( s ) - y( 0 )
\end{equation}

Reminder from integration by parts

\begin{equation}
\F( s ) = L [ f( t )] = \int_0^\infty \e^-st \f( t ) dt\
\end{equation}

:::{table} Laplace Transforms

| **Function**                | **Laplace Transform**                 |
|-----------------------------|---------------------------------------|
| \( f(t) = 1 \)              | \( F(s) = \frac{1}{s} \)              |
| \( f(t) = t \)              | \( F(s) = \frac{1}{s^2} \)           |
| \( f(t) = e^{at} \)         | \( F(s) = \frac{1}{s - a} \)         |
| \( f(t) = \sin(at) \)       | \( F(s) = \frac{a}{s^2 + a^2} \)     |
| \( f(t) = \cos(at) \)       | \( F(s) = \frac{s}{s^2 + a^2} \)     |
| \( f(t) = t^n \)            | \( F(s) = \frac{n!}{s^{n+1}} \)      |
| \( f(t) = e^{at} \sin(bt) \) | \( F(s) = \frac{b}{(s - a)^2 + b^2} \) |
| \( f(t) = e^{at} \cos(bt) \) | \( F(s) = \frac{s - a}{(s - a)^2 + b^2} \)|

:::

The Laplace transform is a linear operator, so

\begin{equation}
\L = [kf] = kL[f] = kf\\
\L = [f + g] = L[f] + L[g] = F + G
\end{equation}

## Solving first-order ODEs

The nonhomogeneous, first-order ODE with constant coefficients is nice to solve
with Laplace transoforms

\begin{equation}
\y' + by = r(t)\\
\end{equation}

y' and b must be constant coefficients
r(t) must be nonhomogeneous (if r \ne 0)

Apply Laplace transform to both sides of the equation

\begin{align}
\L[y' + by] = L[r(t)]
\L[y'] + bL[y] = L[r(t)]\\
\sY(s) - y(0) + bY(s)= R(s)\\
\(s + b)Y(s) = y(o) + R(s)\\
\y(s) = \frac{y(o) + R(s)}{s+b}\\
\end{align}

If we can invert y(t) = L^-1 [y(s)] usijng tables, we have a solution!

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
