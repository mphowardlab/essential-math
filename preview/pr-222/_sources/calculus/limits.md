# Limits

## Motivation

What is the behavior of a function as its argument approaches a certain value?
For example, what happens to a function near boundaries of its domain? Near
"holes"? Under "extreme" cases, such as when something gets very small?

```{topic} Limit (informal)
Let $f(x)$ be defined on an open interval around $x_0$, except possibly at $x_0$
itself. If $f(x)$ is arbitrarily close to $L$ for all $x$ sufficiently close to
$x_0$, we say $f$ approaches the limit $L$ as $x$ approaches $x_0$:

\begin{equation}
\lim_{x \to x_0} f(x) = L
\end{equation}
```

Some functions have limits. For example:

\begin{equation}
f(x) = \frac{x^2 - 1}{x - 1}
\end{equation}

is not defined when $x=1$. What happens to it near 1? First, let's factor and
simplify:

\begin{equation}
f(x) = \frac{(x+1)(x-1)}{x-1} = x+1, \quad x \neq 1
\end{equation}

So, we expect that *f* should be well-behaved and have a value that approaches
2 as x approaches 1! Let's verify numerically:

| $x$    | $f$    |
|--------|--------|
| 0.9    | 1.9    |
| 0.99   | 1.99   |
| 0.999  | 1.999  |
| 1.001  | 2.001  |
| 1.01   | 2.01   |
| 1.1    | 2.1    |

and also looking at a graph

```{image} ./_images/fx_x+1.png
:alt: Limit Exists
:width: 300px
:align: center
```

However, some functions do not have limits. For example:

\begin{equation}
f(x) = \frac{1}{x}
\end{equation}

is not defined at $x = 0$. As *x* approaches zero from the positive or negative
side, the function "blows up" to $\pm\infty$. The sign depends on whether *x*
is positive or negative.

| $x$    | $f(x)$  |
|--------|---------|
| 0.1    | 10      |
| 0.01   | 100     |
| -0.01  | -100    |
| -0.1   | -10     |

This divergence is clear on a plot:

```{image} ./_images/fx_1_x.png
:alt: No Limit Exists
:width: 300px
:align: center
```

We say that such a limit does not exist.

## Formal definition

```{topic} Limit (formal)
The limit of $f$ as $x$ approaches $x_0$ is *L*, denoted

\begin{equation}
\lim_{x \to x_0} f(x) = L
\end{equation}

if for every $\epsilon > 0$ there exists $\delta > 0$ such that for all *x*,
if $0 < |x-x_0| < \delta$ then $|f(x)-L| < \epsilon$.
```

$\epsilon$ is a *tolerance* setting how close *f* needs to be to *L*. Given
any $\epsilon$, we need to find a "window" of *x* values within $\delta$ of
$x_0$ so that *f* stays within $\epsilon$ of *L*. For example, consider the
following:

```{image} ./_images/First.jpg
:alt: Limit Graph
:width: 300px
:align: center
```

Based on this plot, if $\epsilon = 1$, $3 < f < 5$ if $3 < x < 5$
(i.e., $\delta = 1$). For a general $\epsilon$,
$4 - \epsilon < f < 4 + \epsilon$ if $4 - \delta < x < 4 + \delta$ or
equivalently, $|x-4| < \epsilon$. We hence identify $\delta = \epsilon$ and
have proven that

\begin{equation}
\lim_{x \to 4} f = 4
\end{equation}

However, such a $\delta$ cannot always be found for all $\epsilon$ for certain
functions! There, the limit does not exist. For example, consider

\begin{equation}
f(x) = \begin{cases}
x,& x < 4 \\
x-2,& x \ge 4
\end{cases}
\end{equation}

```{image} ./_images/Second.jpg
:alt: Limit Graph 2
:width: 300px
:align: center
```

Does the limit

\begin{equation}
\lim_{x \to 4} f(x) = 3
\end{equation}

exist? If \epsilon = 0.5, there is no $\delta$ that contains *f* around
$x_0 = 4$. Therefore, this limit does not exsit

This math formalism is powerful, but clunky to apply. We will now move onto
using rules (limit laws) that have been proven using them!

## Limit laws

There are some simple limits and rules for combining them that are convenient
to know because they can be used to evaluate limits of more complicated
functions:

- Constant

  \begin{equation}
  \lim_{x \to c} k = k
  \end{equation}

- Identity

  \begin{equation}
  \lim_{x \to c} x = c
  \end{equation}

- Continuous function

  \begin{equation}
  \lim_{x \to c} f(x) = f(c)
  \end{equation}

  if $f(x)$ is continuous at *x* (no jumps or holes).

- Sum

  \begin{equation}
  \lim_{x \to c} \left(f(x) + g(x)\right) =
    \lim_{x \to c} f(x) + \lim_{x \to c} g(x)
  \end{equation}

- Difference

  \begin{equation}
  \lim_{x \to c} \left(f(x) - g(x)\right) =
    \lim_{x \to c} f(x) - \lim_{x \to c} g(x)
  \end{equation}

- Product

  \begin{equation}
  \lim_{x \to c} f(x)g(x) =
    \left(\lim_{x \to c} f(x)\right)\left(\lim_{x \to c} g(x)\right)
  \end{equation}

- Quotient

  \begin{equation}
  \lim_{x \to c} \frac{f(x)}{g(x)} =
    \dfrac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}
  \end{equation}

- Power

  \begin{equation}
  \lim_{x \to c} f(x)^{r/s} = \left(\lim_{x \to c} f(x)\right)^{r/s}
  \end{equation}

  where *r* and $s \ne 0$ are integers. The limit of *f* must be positive if
  *s* is even.

## Taking limits

"Nice" functions can be evaluated directly

\begin{align}
\lim_{x \to -1} x^3 + 4x^2 -3 &= (-1)^3 + 4(-1)^2 -3 \\
&= -1 + 4 -3 \\
&= 0
\end{align}

This works even if they are complicated

\begin{align}
\lim_{x \to 4} \left(\frac{x^2 + 9}{x + 1} \right)^{1/2}
&= \left(\frac{4^2 + 9}{4 + 1} \right)^{1/2} \\
&= \left(\frac{25}{5}\right)^{1/2} \\
&= \sqrt{5}
\end{align}

Limits are most useful when functions have "holes" (function is not defined at
$x_0$)

\begin{align}
\lim_{x \to 1} \frac{x^2 + x -2}{x^2 - x}
&= \lim_{x \to 1} \frac{(x+2)(x+1)}{x(x+1)} \\
&= \lim_{x \to 1} \frac{x+2}{x} \\
&= 3
\end{align}

Note that this function had a "hole" at $x = 1$ that we removed by factoring.
This works even if the factors are "ugly":

\begin{align}
\lim_{x \to 4} \frac{4x - x^2}{2 - \sqrt{x}}
&= \lim_{x \to 4} \frac{x(4 - x)}{2 - \sqrt{x}} \\
&= \lim_{x \to 4} \frac{x(2 + \sqrt{x})(2 - \sqrt{x})}{2 - \sqrt{x}} \\
&= \lim_{x \to 4} x(2 + \sqrt{x}) \\
&= 4(2 + \sqrt{4}) \\
&= 16
\end{align}

Here, we made use of the difference of squares identity:

\begin{equation}
a^2 - b^2 = (a + b)(a - b)
\end{equation}

Another useful trick is to multiply by a factor of "1" that makes a difference
of squares (multiply by conjugate)

\begin{align}
\lim_{x \to 0} \frac{\sqrt{3x + 1} - 1}{x}
&= \lim_{x \to 0}
  \frac{(\sqrt{3x + 1} - 1)(\sqrt{3x + 1} + 1)}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{(\sqrt{3x + 1})^2 - 1^2}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{3x + 1 - 1}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{3}{\sqrt{3x + 1} + 1} \\
&= \frac{3}{2}
\end{align}

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

## Infinite limits

Some functions tend to $\pm\infty$ at a value, even if they do not have a limit.

::::{grid}

:::{grid-item-card}

$$
f(x) = 1/x^2
$$

```{image} ./_images/fx_plot_infinite_limits.png
:alt: Infinite limit exists
:align: center
:width: 300px
```

Limit exists and is $+\infty$.

:::

:::{grid-item-card}

$$
g(x) = 1/x
$$

```{image} ./_images/gx_plot_infinite_limits.png
:alt: Infinite limit does not exist
:align: center
:width: 300px
```

Limit does not exist.

:::

::::

```{topic} Infinite limits
$f(x)$ approaches $\infty$ as *x* approaches $x_0$

\begin{equation}
\lim_{x\to\infty}f(x) = \infty
\end{equation}

if for every real *B* there exists $\delta > 0$ such that for all *x* if
$0 < |x - x_0| < \delta$ then $f(x) >$ B. There is an analogous definition
for functions that approach $-\infty$.
```

This behavior can be used to define a *vertical asymptote* of a function:

```{topic} Vertical asymptote
A line $x = a$ is a vertical asymptote of $y = f(x)$ if

\begin{equation}
\lim_{x \to a^+}f(x) = \pm\infty \quad {\rm or} \quad \lim_{x \to a^-}f(x) = \pm\infty
\end{equation}
```
