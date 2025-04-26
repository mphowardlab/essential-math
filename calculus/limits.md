# Limits
## 1. What is a limit?

What is the behavior of a function as its argument approaches a certain value? Useful for:

- Understanding $f$ near holes/boundaries of its domain.
- Understanding physics in "extreme" cases (e.g., the size of a body gets very small).

Let $f(x)$ be defined on an open interval around $x_0$, except possibly at $x_0$ itself. If $f(x)$ is arbitrarily close to $L$ for all $x$ sufficiently close to $x_0$, we say $f$ approaches the limit $L$ as $x$ approaches $x_0$.

\begin{equation}
\lim_{x \to x_0} f(x) = L
\end{equation}

---

```{example} Some functions have limits:

Given: 
\begin{equation}
f(x) = \frac{x^2 - 1}{x - 1}
\end{equation}

Domain: $x \neq 1$

Factor:
\begin{equation}
f(x) = \frac{(x+1)(x-1)}{x-1} = x+1 \quad (x \neq 1)
\end{equation}

| $x$    | $f(x)$ |
|--------|--------|
| 0.9    | 1.9    |
| 0.99   | 1.99   |
| 0.999  | 1.999  |
| 1.001  | 2.001  |
| 1.01   | 2.01   |
| 1.1    | 2.1    |

Thus,
\begin{equation}
\lim_{x \to 1} f(x) = 2
\end{equation}
\begin{tikzpicture}
\begin{axis}[
    width=10cm,
    height=8cm,
    axis lines=middle,
    xlabel={$x$},
    ylabel={$f(x)$},
    xmin=0, xmax=2,
    ymin=-2, ymax=6,
    samples=200,
    domain=0:2,
    grid=both,
    legend style={at={(0.5,-0.15)},anchor=north},
]
\addplot[
    blue,
    thick,
    domain=0:0.99,
] {(x^2-1)/(x-1)};
\addplot[
    blue,
    thick,
    domain=1.01:2,
] {(x^2-1)/(x-1)};
\addplot[dashed, red] coordinates {(1,-2) (1,6)};
\addplot[
    mark=*, 
    mark options={fill=white}, 
    only marks, 
    mark size=2.5pt
] coordinates {(1,2)};
\legend{$f(x) = \frac{x^2-1}{x-1}$, Hole at $x=1$}
\end{axis}
\end{tikzpicture}

```

```{example} Some functions do **not** have limits:
\begin{equation}
f(x) = \frac{1}{x}, \quad x \neq 0
\end{equation}

| $x$    | $f(x)$  |
|--------|---------|
| 0.1    | 10      |
| 0.01   | 100     |
| -0.01  | -100    |
| -0.1   | -10     |

\begin{equation}
\text{No limit as } x \to 0
\end{equation}

The function blows up to $+\infty$ from the right and $-\infty$ from the left, so no single limit exists at $x=0$.

\begin{tikzpicture}
\begin{axis}[
    width=10cm,
    height=8cm,
    axis lines=middle,
    xlabel={$x$},
    ylabel={$f(x)$},
    xmin=-2, xmax=2,
    ymin=-6, ymax=6,
    samples=200,
    domain=-2:-0.05,
    domain y=-6:6,
    grid=both,
    legend style={at={(0.5,-0.15)},anchor=north},
]
\addplot[
    blue,
    thick,
    domain=-2:-0.05,
] {1/x};
\addplot[
    blue,
    thick,
    domain=0.05:2,
] {1/x};
\addplot[dashed, red] coordinates {(0,-6) (0,6)};
\legend{$f(x) = \frac{1}{x}$, Asymptote at $x=0$}
\end{axis}
\end{tikzpicture}

```
