# Limits

## Limits at infinity

How do functions behave when x gets "big"? For example, if the independent
variable is time, the behavior after waiting a long time may be a "steady state".

::::{grid}
:::{grid-item-card} Population dynamics

```{image} ./_images/carrying_capacity.jpg
:alt: Population carrying capacity
:width: 300px
:align: center
```

This may represent, for example, a population with limited resources.
:::

:::{grid-item-card} Proportional-integral control

```{image} ./_images/set_point.jpg
:alt: Controller response
:width: 300px
:align: center
```

This may represent, for example, the response of a servo or valve over time.
:::
::::

```{topic} Limit at infinity
\begin{equation}
\lim_{x \to \infty} f(x) = L
\end{equation}

if for every $\epsilon > 0$, there exists a value *M* such that for all *x*,
if $x > M$, $|f(x) - L| < \epsilon$.
```

i.e., f gets close to L when x is "big".

Some important limits at infinity:

- $\displaystyle\lim_{x \to \pm\infty} k = k$

- $\displaystyle\lim_{x \to \pm\infty} \dfrac{1}{x} = 0$

- $\displaystyle\lim_{x \to -\infty} e^x = 0$

Other limit laws (sum, quotient, etc.) also hold at infinity! If function is
already in a convenient form, use known limits to evaluate unknown ones. For
example,

\begin{equation}
\lim_{x \to \infty} 5 + \frac{1}{x} =
  \lim_{x \to \infty} 5 + \lim_{x \to \infty} \frac{1}{x} =
  5 + 0 = 5
\end{equation}

For rational functions $f(x) = p(x) / q(x)$, divide by largest power of *x* in
denominator:

<!--markdownlint-disable MD013 -->
\begin{equation}
\lim_{x \to -\infty} \frac{11x + 2}{2x^3-1} =
  \lim_{x \to -\infty} \frac{ \dfrac{11x}{x^3} + \dfrac{2}{x^3} }{ \dfrac{2x^3}{x^3} + \dfrac{1}{x^3}}
  = \frac{0 + 0}{2 - 0} = 0
\end{equation}

\begin{equation}
\lim_{x \to \infty} \frac{5x^2+8x-3}{3x^2+4} =
  \lim_{x \to \infty} \frac{ 5 + \dfrac{8}{x} - \dfrac{3}{x^2} }{ 3 + \dfrac{2}{x^2} } =
  \frac{5+0-0}{3 - 0} = \frac{5}{3}
\end{equation}
<!--markdownlint-enable MD013 -->

Not all functions have limits at infinity. Some "blow up"!

<!--markdownlint-disable MD013 -->
\begin{equation}
\lim_{x \to \infty} \frac{2x^2-3}{7x+4} = \lim_{x \to \infty} \frac{ 2x - \frac{3}{x} }{ 7 + \frac{4}{x} }
\end{equation}
<!--markdownlint-enable MD013 -->

This limit does not exist. A helpful shortcut for rational polynomials: check
coefficients of highest powers in numerator and denominator!

## One-sided limits
**1. How do functions behave as you approach $x_0$ from a direction?**

````{example} Old question
When you have boiling water touching its vapor, is there a step change in density?

```{image} ./_images/liquid_vapor_graph.png
:width: 400px
:align: center
```

What is the liquid density at the interface?  $lim_{z \to 0^-} \rho(z)$

What is the vapor density at the interface?  $lim_{z \to 0^+} \rho(z)$
````

**2. "Formal" definition of one-sided limits**

If $f$ is defined on the interval $x_0 < x < b$ and $f(x)$ approaches arbitrarily close to $L$ as $x$ approaches $x_0$, then $f$ has a right-hand limit $L$ at $x_0$:

\begin{align}
lim_{x \to x_0^+} f(x) = L
\end{align}

This limit can also be written in $\delta- \varepsilon$ form.

The same can be done for the left-hand limit if $a < x < x_0$

\begin{align}
lim_{x \to x_0^-} f(x) = L
\end{align}

The two-sided limit exists if and only if both one-sided limits exist and have the same value:
\begin{align}
lim_{x \to x_0} f(x) = L \textbf{ if } lim_{x \to x_0^+} f(x) = L \textbf{ and } lim_{x \to x_0^-} f(x) = L
\end{align}

```{example} One-sided limit method
Solve $f(x) = \frac{x}{|x|} = \begin{cases}
-1, & x<0\\
1, & x>0
\end{cases}$

---

We find that the $lim_{x \to 0^+} f(x) = 1$

We also find that the $lim_{x \to 0^-} f(x) = -1$

Thus, the $lim_{x \to 0} f(x)$ does not exist.
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
$\frac{|x + 2|}{x + 2} =
\begin{cases}
1, & x > -2 \\
-1, & x < -2
\end{cases}
$

````{example} Challenge problem

```{image} ./_images/limit_image.png
From the graph:

Since the $lim_{x \to 1^-} f(x) = 0$ and the $lim_{x \to 1^+} f(x) = 1$, the $lim_{x \to 1} f(x)$ does not exist.

The $lim_{x \to 2^-} f(x) = 1$ and the $lim_{x \to 2^+} f(x) = 1$, so the $lim_{x \to 2} f(x) = 1$.

(even though $f(2) = 2$)
````
