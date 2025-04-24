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

## Newton-Raphson Method
The idea is to *linearize* the nonlinear system, then solve the linear problem.
This will converge quickly for many functions.

\begin{equation}
f(x) \approx f(x_0) + f'(x_0)(x - x_0)
\end{equation}

Using the first-order Taylor series expansion about $x_n$:

\begin{equation}
f(x_{n+1}) \approx f(x_n) + f'(x_n)(x_{n+1} - x_n)
\end{equation}

We want to find the root, so we set $f(x_{n+1}) = 0$:

\begin{equation}
0 = f(x_n) + f'(x_n)(x_{n+1} - x_n)
\end{equation}

Solving for $\displaystyle x_{n+1}$: 

\begin{equation}
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
\end{equation}


```{image} ./_images/newtonraphson.svg
:alt: The figure shows how the method iteratively converges to the root by using the tangent line at the current guess to find a better approximation.
:width: 500px
:align: center
```


The algorithm for the Newton-Raphson method is:
1. Guess $x_0$ and set $n = 0$.
2. Compute $f(x_n)$ and $f'(x_n)$. If $f(x_n)$ is ``close'' to zero, stop.
3. item Update $x_{n+1}$ using $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ then return to step 2.

Note that this method can converge much more rapidly than the fixed-point or bisection methods.

It will fail when $f'(x_n) = 0$.

````{example} Solve $\displaystyle x^2 = 2$
We can rewrite this as:

$\displaystyle f(x) = x^2 - 2$

$\displaystyle f'(x) = 2x$

Let the initial guess be $x_0 = 1$.

| $n$ | $x_n$ | $f(x_n)$ | $f'(x_n)$ | $x_{n+1}$ |
|------|--------:|-----------:|------------:|------------:|
| $0$    | $1.0$   | $-1.0$     | $2.0$       | $1.5$       |
| $1$    | $1.5$   | $0.25$      | $3.0$       | $1.417$       |
| $2$    | $1.417$   | $6.94 \times 10^{-3}$ | $2.833$ | $1.414$ ✓|
````

````{example} Solve $e^{-x^2} - x = 0$
We define $f(x) = e^{-x^2} - x$

$f'(x) = -2x e^{-x^2} - 1$

Using an initial guess $x_0 = 0$.

| $n$ | $x_n$  | $f(x_n)$  | $f'(x_n)$  | $x_{n+1}$ |
|------:|---------:|-------------:|-------------:|------------:|
| $0$     | $0$    | $1.0$        | $-1.0$       | $1.0$       |
| $1$     | $1.0$    | $-0.6321$      | $-1.736$       | $0.6358$      |
| $2$     | $0.6358$   | $0.03164$      | $-1.849$       | $0.6529$   ✓  |

````
