# Root finding methods
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

```{image} ./_images/NRGraph.png
:alt: The figure shows how the method iteratively converges to the root by using the tangent line at the current guess to find a better approximation.
:width: 300px
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