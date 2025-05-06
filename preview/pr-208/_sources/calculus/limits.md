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
