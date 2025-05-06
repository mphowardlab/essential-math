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

How do functions behave as you approach a point $x_0$ from a direction? One
physical example of this is an old question in statistical mechanics: when you
have vapor-liquid phase coexistence, does the density change stepwise or
continuously at the interface?

```{image} ./_images/liquid_vapor_graph.png
:width: 300px
:align: center
```

If the density as a function of distance from the interface is $\rho(z)$,
the liquid density can be denoted as $\lim_{z \to 0^-} \rho(z)$, while the
vapor density can be denoted as $\lim_{z \to 0^+} \rho(z)$.

```{topic} One-sided limit

If *f* is defined on the interval $x_0 < x < b$ and $f(x)$ approaches
arbitrarily close to $L$ as $x$ approaches $x_0$, then $f$ has a right-hand
limit $L$ at $x_0$:

\begin{equation}
\lim_{x \to x_0^+} f(x) = L
\end{equation}

(This limit can also be written more formally in $\delta$-$\epsilon$ form.)
The same can be done for the left-hand limit if $a < x < x_0$

\begin{equation}
\lim_{x \to x_0^-} f(x) = L
\end{equation}

The two-sided limit exists if and only if both one-sided limits exist and have
the same value:
\begin{equation}
\lim_{x \to x_0} f(x) = L \Leftrightarrow
\lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) = L
\end{equation}
```

For example, if

\begin{equation}
f(x) = \frac{|x|}{x} = \begin{cases}
-1, & x<0\\
1, & x>0
\end{cases}
\end{equation}

We see that $\lim_{x \to 0^+} f(x) = 1$ (the value from the right), while
$\lim_{x \to 0^-} f(x) = -1$ (the value from the left). Thus,
$\lim_{x \to 0} f(x)$ does not exist.

Normal limit laws also still apply to one-sided limits:

\begin{equation}
\lim_{x \to -2^+} \left( \frac{x}{x+1} \right) \left( \frac{2x + 5}{x^2 + x} \right)
= \left( \frac{-2}{-2 + 1} \right) \left( \frac{-4 + 5}{4 - 2} \right) = 1
\end{equation}

However, be careful about which piece of the function applies:

\begin{align}
\lim_{x \to -2^-} (x + 3) \frac{|x + 2|}{x + 2}
&= \left( \lim_{x \to -2^-} x + 3 \right)
\left( \lim_{x \to -2^-} \frac{|x + 2|}{x + 2} \right) \\
&= (-2 + 3)(-1) = -1
\end{align}

where we used the limit we already found of $f(x) = |x|/x$ above to evaluate
the second limit.

````{example} One-sided limit challenge

Using

```{image} ./_images/limit_image.png
:alt: One-sided limit function
:width: 300px
:align: center
```

Find the limits at $x = 1$ and $x = 2$.

---

From the graph, $\lim_{x \to 1^-} f(x) = 0$ and $\lim_{x \to 1^+} f(x) = 1$, so
$\lim_{x \to 1} f(x)$ does not exist.

However, $\lim_{x \to 2^-} f(x) = 1$ and $\lim_{x \to 2^+} f(x) = 1$, so
$\lim_{x \to 2} f(x) = 1$, even though $f(2) = 2$.
````
