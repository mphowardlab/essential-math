# Root finding methods

## Fixed point iteration

If we want to numerically solve $f(x) = 0$, rearrange $f(x)$ to get $g(x) = x$.
Then, choose an inital guess $x_0$ and iterate:

\begin{equation}
x_{n+1} = g(x_n)
\end{equation}

until $x_{n+1} = x_n$ to the desired precision (error tolerance).

```{example} Using fixed point iteration
To solve

\begin{equation}
e^{-x^2} - x = 0
\end{equation}

First rearrange

\begin{align}
x = e^{-x^2} = g(x)
\end{align}

Then, guess $x_0 = 0$ and set up a table:

| $n$ | $x_n$ | $g(x_n)$ |
|-----|-------|----------|
| 0   | 0     | 1.000    |
| 1   | 1.000 | 0.368    |
| 2   | 0.368 | 0.873    |
| ... | ...   | ...      |
| 51  | 0.653 | 0.6528   |

At each iteration, $g(x_n)$ is used as the new $x_n$ until at $n = 5$, where
$x_n = 0.6530 \approx 0.6528 = g(x_n)$.
```

The choice of rearranging $f(x)$ is not unique, and some choices may be better
than others. For example, convergence is only guaranteed when
$|g'(x)| \le k < 1$ for all $x$ in an interval around the solution. Experience
will guide your choice of rearrangement.

```{example} Rearranging functions
To solve

\begin{equation}
e^x - x^3 = 0
\end{equation}

One possible rearrangement is

\begin{align}
e^x &= x^3 \\
x &= \ln(x^3) = 3 \ln x = g(x)
\end{align}
```

Note that this method may fail spectacularly! In that case, choosing a better
initial guess or rearrangement may help. Additionally, you can try to improve
the stability of the method by slowly "mixing" solutions:

<!-- markdownlint-disable MD037 -->
\begin{align}
x_{n+1}^* &= g(x_n) \\
x_{n+1} &= \alpha x_{n+1}^* + (1-\alpha) x_n
\end{align}
<!-- markdownlint-enable MD037 -->

where $\alpha$ is a mixing parameter. Smaller values of $\alpha$ mix more
slowly, which can be more stable but also requires more iterations.

## Bisection search

````{topic} Intermediate value theorem
If $f(x)$ is continuous on $a \le x \le b$, then it takes on all values from
$f(a)$ to $f(b)$ at some point in that interval. As a result, if $f(a) > 0$ and
$f(b) < 0$ (or vice versa), then $f(x) = 0$ somewhere in that interval!

```{image} ./_images/IVT_graph.svg
:alt: graphical depicition of the Intermediate Value Theorem
:width: 300px
:align: center
```
````

We can apply this concept to find roots using the following procedure, called
bisection search:

1. Chose $a_0$ and $b_0$ so $f(a)$ and $f(b)$ have opposite signs.
2. Starting at $n = 0$, evaluate $f(x_n)$ at the midpoint $x_n = (a_n + b_n)/2$.
3. If $f(x_n) \approx 0$ a solution is found within desired precision.
   Otherwise, if $f(a_n)$ and $f(x_n)$ have the same sign, $a_{n+1} = x_n$;
   else, $b_{n+1} = x_n$
4. Increase $n$ and repeat from step 2.

```{example} Using bisection search
To solve

\begin{equation}
e^{-x^2} - x = f(x) = 0
\end{equation}

Start with $a_0 = 0$ and $b_0 = 1$, then make a table to implement the
procedure:

| $n$  | $a_n$ | $b_n$ | $x_n$ | $f(a_n)$ | $f(b_n)$ | $f(x_n)$ |
|------|-------|-------|-------|----------|----------|----------|
| 0    | 0     | 1     | 0.5   | 1.0      | -0.632   | 0.279    |
| 1    | 0.5   | 1     | 0.75  | 0.275    | -0.632   | -0.180   |
| 2    | 0.5   | 0.75  | 0.625 | 0.275    | -0.1180  | 0.052    |
| ...  | ...   | ...   | ...   | ...      | ...      | ...      |
| 9    | 0.625 | 0.654 | 0.653 | 0.001    | -0.002   | -0.0007  |

When $n=0$, $f(x_0)$ > 0 so $a_1$ = $x_0$. Then, when $n=1$, $f(x_1)$ < 0
so $b_2$ = $x_1$. We continue this procedure until convergence.
```

## Newton-Raphson method

Although we cannot immediately solve the nonlinear equation $f(x) = 0$, we can
first *linearize* it, then solve the linear problem.

\begin{align}
f(x) &\approx f(x_0) + f'(x_0)(x - x_0) = 0 \\
x &\approx x_0 - \frac{f(x_0)}{f'(x_0)}
\end{align}

Iterating this process gives the Newton-Raphson method of root finding

```{math}
:label: newtonraphson
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
```

The algorithm for the Newton-Raphson method is:

1. Guess $x_0$ and set $n = 0$.
2. Compute $f(x_n)$ and $f'(x_n)$. If $f(x_n)$ is "close" to zero, stop.
3. Update $x_{n+1}$ using eq. {eq}`newtonraphson` then return to step 2.

```{image} ./_images/newtonraphson.svg
:alt: Newton-Raphson method
:width: 500px
:align: center
```

Note that this method can converge much more rapidly than the fixed-point or
bisection methods. However, it will fail if $f'(x_n) = 0$.

```{example} Newton-Raphson method
Solve $x^2 = 2$.

---

We can rewrite this as $f(x) = x^2-2 = 0$. We will also evaluate the derivative
$f'(x) = 2x$. Let the initial guess be $x_0 = 1$.

| $n$ | $x_n$ | $f(x_n)$ | $f'(x_n)$ | $x_{n+1}$ |
|------|--------:|-----------:|------------:|------------:|
| $0$    | $1.0$   | $-1.0$     | $2.0$       | $1.5$       |
| $1$    | $1.5$   | $0.25$      | $3.0$       | $1.417$       |
| $2$    | $1.417$   | $6.94 \times 10^{-3}$ | $2.833$ | $1.414$|

This is close to the known value of $\sqrt{2}$!
```

```{example} Newton-Raphson method 2
Solve $e^{-x^2} - x = 0$.

---

We define $f(x) = e^{-x^2} - x$ and calculate $f'(x) = -2x e^{-x^2} - 1$.
We choose an initial guess $x_0 = 0$.

| $n$ | $x_n$  | $f(x_n)$  | $f'(x_n)$  | $x_{n+1}$ |
|------:|---------:|-------------:|-------------:|------------:|
| $0$     | $0$    | $1.0$        | $-1.0$       | $1.0$       |
| $1$     | $1.0$    | $-0.6321$      | $-1.736$       | $0.6358$      |
| $2$     | $0.6358$   | $0.03164$      | $-1.849$       | $0.6529$    |

Note the rapid convergence compared to the methods above!

```

## Skill builder problems

Solve all roots of

\begin{equation}
\cos x - x = 0
\end{equation}

to 3 significant figures by:

1. Fixed-point iteration starting from $x_0 = 0.5$.

   ```{solution}
   Rearrange as

   \begin{equation}
   x = \cos(x) = g(x)
   \end{equation}

   | $n$ | $x_n$  |
   |-----|--------|
   | 0   | 0.500  |
   | 1   | 0.878  |
   | 2   | 0.639  |
   | 3   | 0.803  |
   | 4   | 0.695  |
   | 5   | 0.768  |
   | 6   | 0.719  |
   | 7   | 0.752  |
   | 8   | 0.730  |
   | 9   | 0.745  |
   | 10  | 0.735  |
   | 11  | 0.742  |
   | 12  | 0.737  |
   | 13  | 0.740  |
   | 14  | 0.738  |
   | 15  | 0.740  |
   | 16  | 0.739  |
   | 17  | 0.739  |

   Hence, $x \approx 0.739$.
   ```

2. Bisection search in $0 \le x \le 1$.

   ```{solution}
   | $n$    | $a_n$  | $b_n$  | $x_n$  | $f(a_n)$| $f(b_n)$| $f(x_n)$|
   |--------|---------|---------|---------|---------|---------|---------|
   |   0 | 0  |   1.00 |   0.500 |   1.00      |  -0.460       |  0.378       |
   |   1    | 0.500   | 1  |   0.750|0.378 | -0.460  | -0.0183 |
   |   2    | 0.500   |  0.750 | 0.625   |   0.378|  -0.0183 | 0.186  |
   |   3    | 0.625   | 0.750 | 0.688 | 0.186  |  -0.0183 |   0.0853 |
   |   4    | 0.688   | 0.750 | 0.719|   0.0853 | -0.0183  |  0.0339|
   |   5    | 0.719   | 0.750 |   0.734| 0.0839 |-0.0183  | 0.0079 |
   |   6    | 0.734 | 0.750 | 0. 742  | 0.0079|  -0.0183 | -0.0052 |
   |   7    | 0.734 | 0.742| 0.738 |  0.0079| -0.0052| 0.0013  |
   |   8    | 0.738| 0.742| 0.740| 0.0013 |-0.0052 | -0.0019   |
   |   9    | 0.738|0.740 | 0.739 |0.0013  | -0.0019 |  -0.0003 |
   |   10   | 0.738   |0.739 | 0.739 |  0.0013| -0.0003  |0.0005|

   Hence, $x \approx 0.739$.
   ```

3. Newton-Raphson method, starting from $x_0 = \pi/2$.

   ```{solution}
   For

   \begin{align}
   f(x) &= \cos x - x \\
   f'(x) &= -\sin x - 1
   \end{align}

   The Newton-Raphson update is:

   \begin{equation}
   x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
   \end{equation}
   ```
