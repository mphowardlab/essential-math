# Root finding methods
## Newton-Raphson Method
The idea is to *linearize* the nonlinear system, then solve the linear problem.
$\displaystyle f(x) \approx f(x_0) + f'(x_0)(x - x_0)$.
This will converge quickly for many functions.

Using the first-order Taylor series expansion about $x_n$:
$\displaystyle f(x_{n+1}) \approx f(x_n) + f'(x_n)(x_{n+1} - x_n)$
We want to find the root, so we set $f(x_{n+1}) = 0$:
$\displaystyle 0 = f(x_n) + f'(x_n)(x_{n+1} - x_n)$

Solving for $\displaystyle x_{n+1}$: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$

\begin{align}
\includegraphics[width=.5in]{newton_raphson_graph.png}
\end{align}
The figure shows how the method iteratively converges to the root by using the tangent line at the current guess to find a better approximation.
    
The algorithm for the Newton-Raphson method is:

\begin{enumerate}
    \item Guess x_0 and set n = 0.
    \item Compute $f(x_n)$ and $f'(x_n)$. If $\f(x_n)$ is ``close'' to zero, stop.
    \item Update $x_{n+1}$ using $\x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ then return to step 2.
\end{enumerate}

````{example} Solve $\displaystyle x^2 = 2$
We can rewrite this as:
$\displaystyle f(x) = x^2 - 2, \quad f'(x) = 2x\$
Let the initial guess be \( x_0 = 1 \).

\begin{center}
\begin{tabular}{c|c|c|c|c}
    n & x_n & f(x_n) & f'(x_n) & x_{n+1}\\
    0 & 1.000 & -1.000 & 2.000 & 1.500\\
    1 & 1.500 & 0.250 & 3.000 & 1.417\\
    2 & 1.417 & $6.94 \times 10^{-3}$ & 2.833 & 1.414 \checkmark
\end{tabular}
\end{center}
````

````{example} Solve \( e^{-x^2} - x = 0 \)
We define $\displaystyle f(x) = e^{-x^2} - x, \quad f'(x) = -2x e^{-x^2} - 1\$
Using an initial guess \( x_0 = 0 \).
\begin{center}
\begin{tabular}{c|c|c|c|c}
    $n$ & $x_n$ & $f(x_n)$ & $f'(x_n)$ & $x_{n+1}$\\
    0 & 0.000 & 1.000 & -1.000 & 1.000\\
    1 & 1.000 & -0.6321 & -1.736 & 0.6358\\
    2 & 0.6358 & 0.03164 & -1.949 & 0.6529 \checkmark
\end{tabular}
\end{center}
````

Note that this method can converge much more rapidly than the fixed-point or bisection methods.

It will fail when f'(x_n) = 0.