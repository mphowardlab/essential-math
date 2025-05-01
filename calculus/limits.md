# Limits
## One-sided limits
### 1. How do functions behave as you approach $x_0$ from a direction?

```{example} Old question
When you have boiling water touching its vapor, is there a step change in density?

What is the liquid density at the interface?
$lim_{z \to 0^-} \rho(z)$

What is the vapor density at the interface?
$lim_{z \to 0^+} \rho(z)$

Are these the same or not?
```

### 2. "Formal" definition of one-sided limits

If $f$ is defined on the interval $x_0 < x < b$ and $f(x)$ approaches arbitrarily close to $L$ as $x$ approaches $x_0$, then $f$ has a **right-hand limit** $L$ at $x_0$:

\begin{align}
$lim_{x \to x_0^+} f(x) = L$
\end{align}

This limit can also be written in $delta$-$varepsilon$ form.

The same can be done for the **left-hand limit** if $a < x < x_0$

\begin{align}
$lim_{x \to x_0^-} f(x) = L$
\end{align}

The **two-sided limit** exists if and only if both one-sided limits exist and have the same value:
\begin{align}
$lim_{x \to x_0} f(x) = L$ _if_ $lim_{x \to x_0^+} f(x) = L$ _and_  $lim_{x \to x_0^-} f(x) = L$
\end{align}

```{example} One-sided limit method
Solve $f(x) = \frac{x}{|x|}$ = 
\begin{cases}
-1, & x < 0 \\
1, & x > 0
\end{cases}

---

$lim_{x \to 0^+} f(x) = 1$
$lim_{x \to 0^-} f(x) = -1$

$lim_{x \to 0} f(x)$ **does not exist**.
```


