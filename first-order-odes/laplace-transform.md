# Laplace transform

## Definition and properties

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

\begin{align}
L[y'(t)] &= \int_0^\infty e^{-st} y'(t) \d{t} \\
  &= \left.e^{-st} y(t)\right|_0^\infty -
    \int_0^\infty y(t) \left(-s e^{-st}\right) \d{t} \\
  &= [0 - y (0)] + s \int_0^\infty e^{-st} y \d{t} \\
  &= -y(0) + s L[y(t)] \\
  &= s Y(s) - y(0)
\end{align}

using $u = e^{-st}$ and $\d{v} = y'(t) \d{t}$. Some common Laplace transforms
are:

| $f(t)$             | $F(s) = L[f(t)]$                |
|--------------------|---------------------------------|
| $t^n$, $n=0, 1, 2, \cdots$ | $\dfrac{n!}{s^{n+1}}$   |
| $e^{at}$           | $\dfrac{1}{s - a}$              |
| $\sin(at)$         | $\dfrac{a}{s^2 + a^2}$          |
| $\cos(at)$         | $\dfrac{s}{s^2 + a^2}$          |
| $e^{at} \sin(bt)$  | $\dfrac{b}{(s - a)^2 + b^2}$    |
| $e^{at} \cos(bt)$  | $\dfrac{s - a}{(s - a)^2 + b^2}$|

The Laplace transform is a linear operator, so

\begin{align}
L[kf] &= kL[f] \\
L[f + g] &= L[f] + L[g]
\end{align}

## Solving first-order ODEs

Nonhomogeneous, first-order ODEs with constant coefficients are nice to solve
with Laplace transforms:

\begin{equation}
y' + by = r(t), \quad y(0) = y_0
\end{equation}

Apply the Laplace transform to both sides of the equation:

\begin{align}
L[y' + by] &= L[r] \\
L[y'] + bL[y] &= L[r]\\
\left(sY - y_0\right) + bY &= R\\
Y &= \frac{y_0 + R}{s+b}
\end{align}

where $Y = L[y(t)]$ and $R = L[r(t)]$. If we can invert $y = L^{-1}[Y]$ using
tables, we have a solution!

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

<!-- markdownlint-disable MD013 -->

```{example} Hormone level
The concentration of a hormone in the blood *c* varies due to sinusoidal
production by the thyroid and continuous removal according to:

\begin{equation}
c' = A + B\cos\left(\frac{\pi t}{12}\right) - kc
\end{equation}

The concentration is $c_0$ at 6 AM ($t = 0$). What is the average concentration
between 6 PM and 6 AM the same day?

---

To solve, rearrange and use the Laplace transform:

\begin{align}
c' + kc &= A + B\cos\left(\frac{\pi t}{12}\right) \\
[sC(s) - c_0] + kC(s) &= L\left[A + B\cos\left(\frac{\pi t}{12}\right)\right] \\
(s+k) C - c_0 &= \frac{A}{s} + \frac{Bs}{s^2 + (\pi/12)^2} \\
C(s) &= \left(\frac{1}{s + k}\right)\left[c_0 + \frac{A}{s} + \frac{Bs}{s^2 + (\pi/12)^2}\right] \\
 &= \frac{c_0}{s + k} + \frac{A}{s(s + k)}
 + \frac{Bs}{[s^2 + (\pi/12)^2](s + k)}
\end{align}

Use partial fraction decomposition on both fractions. The first one is:

\begin{equation}
\frac{1}{s(s + k)} = \frac{c_1}{s} + \frac{c_2}{s + k}
\end{equation}

and the cover-up method gives $c_1 = 1/k$ and $c_2 = -1/k$. For the next one:

\begin{equation}
\frac{s}{[s^2 + (\pi/12)^2](s + k)}
  = \frac{c_1 s + c_2}{s^2 + (\pi/12)^2} + \frac{c_3}{s + k}
\end{equation}

The cover-up method gives

\begin{equation}
c_3 = \frac{-k}{k^2 + (\pi/12)^2}
\end{equation}

while cross-multiplying and matching coefficients gives

\begin{align}
s &= (c_1 s + c_2)(s + k) + c_3\left[s^2 + (\pi/12)^2\right] \\
s &= (c_1 + c_3)s^2 + (c_1 k + c_2)s + c_2 k + c_3(\pi/12)^2
\end{align}

so

\begin{align}
c_1 + c_3 &= 0 \\
c_1 k + c_2 &= 1 \\
c_2 k + c_3 (\pi/12)^2 &= 0
\end{align}

Using our solution for $c_3$ in the first equation gives $c_1$ and in the third
equation gives $c_2$:

\begin{equation}
c_1 = \frac{k}{k^2 + \left(\frac{\pi}{12}\right)^2}, \quad
c_2 = \frac{(\pi/12)^2}{k^2 + (\pi/12)^2}
\end{equation}

All together,

\begin{align}
C(s) &= \frac{c_0}{s + k} + \frac{A}{k} \left[\frac{1}{s} - \frac{1}{s+k} \right] \\
 &+ \frac{B}{k^2 + (\pi/12)^2}
 \left[\frac{ks}{s^2 + (\pi/12)^2} + \frac{(\pi/12)^2}{s^2 + (\pi/12)^2} - \frac{k}{s+k} \right]
\end{align}

Invert the Laplace transforms term by term:

\begin{align}
c(t) &= c_0 e^{-kt} + \frac{A}{k} \left(1 - e^{-kt}\right) \\
 &+ \frac{B}{k^2 + (\pi/12)^2} \left[k \cos\left(\frac{\pi t}{12}\right) + \frac{\pi}{12} \sin\left(\frac{\pi t}{12}\right) - k e^{-kt}\right] \\
  &= \frac{A}{k} + \frac{B}{k^2 + (\pi/12)^2} \left[k \cos\left(\frac{\pi t}{12}\right) + \frac{\pi}{12} \sin\left(\frac{\pi t}{12}\right)\right] \\
  &+ \left[c_0 - \frac{A}{k} - \frac{Bk}{k^2 + \left(\frac{\pi}{12}\right)^2}\right] e^{-kt}
\end{align}

The average concentration is:

\begin{align}
\langle c \rangle &= \frac{1}{t_1-t_0} \int_{t_0}^{t_1} c(t) \d{t} \\
&= \frac{1}{24 - 12} \int_{12}^{24} \Biggl( \frac{A}{k} + \frac{B}{k^2 + (\pi/12)^2} \left[k \cos\left(\frac{\pi t}{12}\right) + \frac{\pi}{12} \sin\left(\frac{\pi t}{12}\right)\right] \\
  &+ \left[c_0 - \frac{A}{k} - \frac{Bk}{k^2 + (\pi/12)^2}\right] e^{-kt} \Biggr) \d{t} \\
&= \frac{1}{12} \Biggl[ \frac{A}{k} t + \frac{B}{k^2 + (\pi/12)^2} \left( \frac{12k}{\pi} \sin\left( \frac{\pi t}{12} \right) - \cos\left( \frac{\pi t}{12} \right) \right) \\
&+ \frac{1}{k} \left( \frac{A}{k} + \frac{Bk}{k^2 + (\pi/12)^2} \right) e^{-kt} \Biggr]_{12}^{24} \\
&= \frac{A}{k} - \frac{1}{6} \frac{B}{k^2 + (\pi/12)^2} - \frac{1}{12}\left[\frac{A}{k^2} + \frac{B}{k^2 + (\pi/12)^2}\right] (e^{-12k} - e^{-24k})
\end{align}
```
<!-- markdownlint-enable MD013 -->

## Skill builder problems

Solve the following IVPs using Laplace transforms:

1. $y' + 4y = e^{4x}$, $y(0) = 0$

   ```{solution}

   \begin{align}
   L[y' + 4y] &= L[e^{4x}] \\
   sY - y(0) + 4Y &= \frac{1}{s-4} \\
   (s+4) Y &= \frac{1}{s-4} \\
   Y &= \frac{1}{(s+4)(s-4)}
   \end{align}

   Use partial fractions

   \begin{equation}
   \frac{1}{(s+4)(s-4)} = \frac{A_1}{s+4} + \frac{A_2}{s-4}
   \end{equation}

   and cover up to find $A_1 = -1/8$ and $A_2 = 1/8$.

   Solve by inverting the Laplace transforms:

   \begin{align}
   Y &= \frac{1}{8} \left(\frac{1}{s-4} - \frac{1}{s+4} \right) \\
   y = L^{-1}[Y]
     &= \frac{1}{8}\left( L^{-1}\left[\frac{1}{s-4}\right] -
       L^{-1}\left[\frac{1}{s+4}\right] \right) \\
     &= \frac{1}{8}(e^{4x} - e^{-4x})
   \end{align}
   ```

2. $y' + 2y = 8$, $y(0) = 1$

   ```{solution}

   \begin{align}
   L[y' + 2y] &= L[8] \\
   sY - y(0) + 2Y &= \frac{8}{s} \\
   (s+2) Y - 1 &= \frac{8}{s} \\
   Y &= \frac{1}{s+2} + \frac{8}{s(s+2)}
   \end{align}

   Use partial fractions and the cover-up method for the second fraction:

   \begin{equation}
   \frac{8}{s(s+2)} = \frac{A_1}{s} + \frac{A_2}{s+2}
   \end{equation}

   to find $A_1 = 4$ and $A_2 = -4$.  Solve by simplifying and inverting the
   Laplace transforms:

   \begin{align}
   Y &= \frac{4}{s} - \frac{3}{s+2} \\
   y = L^{-1}[Y]
     &= 4L^{-1}\left[\frac{1}{s}\right] - 3L^{-1}\left[\frac{1}{s+2}\right] \\
     &= 4 - 3e^{-2x}
   \end{align}
   ```
Solve the following:

3. $y' - y = 1 - 2x + \sin(3x), \quad y(0) = -1 $

   ```{solution}
   \begin{align}
   L[y' - y] &= L[1 - 2x + \sin(3x)] \\
   sY - y(0) - Y &= \frac{1}{s} - \frac{2}{s^2} + \frac{3}{s^2 + 9} \\
   (s-1)Y &= -1 + \frac{1}{s} - \frac{2}{s^2} + \frac{3}{s^2 + 9} 
   \end{align}
   
   Use partial fractions:
   
   \begin{align}
   Y &= -\frac{1}{s - 1} + \frac{1}{s(s - 1)} - \frac{2}{s^2(s - 1)} + \frac{3}{(s^2 + 9)(s - 1)} \\
   &= -\frac{1}{s - 1} + \left(\frac{A_1}{s} + \frac{A_2}{s-1}\right) + \left(\frac{A_3}{s} + \frac{A_4}{s^2} + \frac{A_5}{s - 1}\right) + \left(\frac{A_6s + B_6}{s^2 + 9} + \frac{A_7}{s - 1}\right)
   \end{align}
   
   Cover up to find:
   
   \begin{align}
   A_1 &=\frac{1}{0-1} = -1 \\ 
   A_2 &=\frac{1}{1} = 1 \\ 
   A_4 &= \frac{-2}{0 - 1} = 2 \\ 
   A_5 &= \frac{-2}{1} = -2 \\ 
   A_7 &= \frac{3}{1^2 + 9} = \frac{3}{10} 
   \end{align}
   
   Finish the rest:

   \begin{align}
   2 &= A_3s(s-1) + 2(s-1) - 2s^2 \\
   2 &= A_3(-1)(-1-1) + 2(-1-1) - 2(-1)\\
   2 &= 2A_3 - 4 + 2 \\
   A_3 &= 2
   \end{align}

   \begin{align}
   3 &= (A_6s + B_6s)(s-1) + \frac{3}{10}(s^2+9) \\
   s^2 &: A_6 + \frac{3}{10} = 0   \\
   s^0 &: -B_6 + \frac{27}{10} = 3 \\
   \end{align}

   \begin{align}
   A_6 &= -\frac{3}{10} \\
   B_6 &= -\frac{3}{10} \\
   \end{align}

   Simplify your y:

   \begin{align}
   y &= -\frac{1}{s-1} - \frac{1}{s} + \frac{1}{s-1} + \frac{2}{s} + \frac{2}{s^2} - \frac{2}{s-1} - \frac{3}{10} \frac{s+1}{s^2+9} + \frac{3}{10} \frac{1}{s-1} \\
   &= \frac{1}{s} + \frac{2}{s^2} - \frac{17}{10} \frac{1}{s-1} - \frac{3}{10} \frac{1}{s^2+9} - \frac{3}{10} \frac{s}{s^2+9} \\
   \end{align}

   Apply inverse laplace across the equation:

   \begin{equation}
   y = L^{-1}[\frac{1}{s}]
   + 2 L^{-1}[\frac{1}{s^2} ]
   - \frac{17}{10} L^{-1}[\frac{1}{s - 1}]
   - \frac{1}{10} L^{-1}[\frac{3}{s^2 + 9}]
   - \frac{3}{10} L^{-1}[\frac{s}{s^2 + 9}]
    \end{equation}

   So, the solution is

   \begin{equation}
   y = 1 + 2x - \frac{17}{10} e^x - \frac{1}{10} \sin(3x) - \frac{3}{10} \cos(3x)
   \end{equation}
   ```

