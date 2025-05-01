# Limits
## One-sided limits
**1. How do functions behave as you approach $x_0$ from a direction?**

```{example} Old question
When you have boiling water touching its vapor, is there a step change in density?

What is the liquid density at the interface?  $lim_{z \to 0^-} \rho(z)$

What is the vapor density at the interface?  $lim_{z \to 0^+} \rho(z)$

Are these the same or not?
```

**2. "Formal" definition of one-sided limits**

If $f$ is defined on the interval $x_0 < x < b$ and $f(x)$ approaches arbitrarily close to $L$ as $x$ approaches $x_0$, then $f$ has a **right-hand limit** $L$ at $x_0$:

\begin{align}
lim_{x \to x_0^+} f(x) = L
\end{align}

This limit can also be written in \(\delta\)-\(\varepsilon\) form.

The same can be done for the **left-hand limit** if $a < x < x_0$

\begin{align}
lim_{x \to x_0^-} f(x) = L
\end{align}

The **two-sided limit** exists if and only if both one-sided limits exist and have the same value:
\begin{align}
lim_{x \to x_0} f(x) = L \text{if} lim_{x \to x_0^+} f(x) = L \text{and} lim_{x \to x_0^-} f(x) = L
\end{align}

```{example} One-sided limit method
Solve $f(x) = \frac{x}{|x|}$ = \begin{cases}
-1 & x<0\\
1 & x>0
\end{cases}

---

We find that the $lim_{x \to 0^+} f(x) = 1$

We also find that the $lim_{x \to 0^-} f(x) = -1$

Thus, the $lim_{x \to 0} f(x)$ **does not exist**.
```

**3. Taking One-Sided Limits**

Normal limit laws still apply. However, be careful about which piece of the function applies.

\begin{align}
\lim_{x \to -2^+} \left( \frac{x}{x+1} \right) \left( \frac{2x + 5}{x^2 + x} \right) 
= \left( \frac{-2}{-2 + 1} \right) \left( \frac{-4 + 5}{4 - 2} \right) 
= \left( \frac{-2}{-1} \right) \left( \frac{1}{2} \right) = 1
\end{align}

\begin{align}
\lim_{x \to -2^-} (x + 3) \cdot \frac{|x + 2|}{x + 2}
= \left( \lim_{x \to -2^-} x + 3 \right) 
\left( \lim_{x \to -2^-} \frac{|x + 2|}{x + 2} \right)
= (-2 + 3)(-1) = -1
\end{align}

Note:  
\[
\frac{|x + 2|}{x + 2} =
\begin{cases}
1, & x > -2 \\
-1, & x < -2
\end{cases}
\]

````{example} Challenge problem

```{image} ./_images/limit_image.png
:width: 300px
:align: center
```

From the graph:

Since the $lim_{x \to 1^-} f(x) = 0$ and the $lim_{x \to 1^+} f(x) = 1$, the $lim_{x \to 1} f(x)$ does not exist.

The $lim_{x \to 2^-} f(x) = 1$ and the $lim_{x \to 2^+} f(x) = 1$, so the $lim_{x \to 2} f(x) = 1$.

(even though $f(2) = 2$)
````

