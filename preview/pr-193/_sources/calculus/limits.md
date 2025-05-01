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

```{example} Some functions have limits

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

```{image} 
  :alt: Limit Exists
  :width: 300px
  :align: center
  ```

```

```{example} Some functions do **not** have limits
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

```{image} 
  :alt: No Limit Exists
  :width: 300px
  :align: center
  ```

```
