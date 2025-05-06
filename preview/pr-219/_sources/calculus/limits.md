# Limits

```{topic} Limit Laws
Constant:
\begin{equation}
\lim_{x \to c} k = k
\end{equation}

Identity:
\begin{equation}
\lim_{x \to c} x = c
\end{equation}

Continuous Function:
\begin{equation}
\lim_{x \to c} f(x) = f(c)
\end{equation}

- If f is "continuous" at x (no jumps or holes).

<u>If $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$ , then</u>

Sum:
\begin{equation}
\lim_{x \to c} f(x) + g(x) = L + M
\end{equation}

Difference:
\begin{equation}
\lim_{x \to c} f(x) - g(x) = L - M
\end{equation}

Product:
\begin{equation}
\lim_{x \to c} f(x)g(x) = LM
\end{equation}

Quotient:
\begin{equation}
\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M}
\end{equation}

- If $M \neq 0$

Power:
\begin{equation}
\lim_{x \to c} f(x)^{\frac{r}{s}} = L^{\frac{r}{s}}
\end{equation}

- Where $r$ and $s$ are integers, $s \neq 0$, and $L > 0$ if s is even

```

**Taking Limits**

"Nice" functions can be evaluated directly

\begin{align}
\lim_{x \to -1} x^3 + 4x^2 -3 &= (-1)^3 + 4(-1)^2 -3 \\
&= -1 + 4 -3 \\
&= 0
\end{align}

This works even if they are complicated

\begin{align}
\lim_{x \to 4} \left(\frac{x^2 + 9}{x + 1} \right)^{\frac{1}{2}} &= \left(\frac{4^2 + 9}{4 + 1} \right)^{\frac{1}{2}} \\
&= (\frac{25}{5})^(\frac{1}{2}) \\
&= \sqrt{5}
\end{align}

Limits are most useful when functions have "holes" (function is not defined at $x_{\text{0}}$)

\begin{align}
\lim_{x \to 1} \frac{x^2 + x -2}{x^2 - x} &= \lim_{x \to 1} \frac{(x+2)(x+1)}{x(x+1)} \\
&= \lim_{x \to 1} \frac{x+2}{x} \\
&= 3
\end{align}

```{note}
$\lim_{x \to 1} \frac{x^2 + x -2}{x^2 - x} = \frac{0}{0}$. To remove this hole, we can simplify the equation by <u>factoring</u>.
```

This works even if the factors are "ugly"

\begin{align}
\lim_{x \to 4} \frac{4x - x^2}{2 - \sqrt{x}} &= \lim_{x \to 4} \frac{x(4 - x)}{2 - \sqrt{x}} \\
&= \lim_{x \to 4} \frac{x(2 + \sqrt{x})(2 - \sqrt{x})}{2 - \sqrt{x}} \\
&= \lim_{x \to 4} x(2 + \sqrt{x}) \\
&= 4(2 + \sqrt{4}) \\
&= 16
\end{align}

```{note}
$\lim_{x \to 4} \frac{4x - x^2}{2 - \sqrt{x}} = \frac{0}{0}$ so we <u>factor</u> and use <u>difference of squares</u> to remove the hole.
- Difference of Squares: $a^2 - b^2 = (a + b)(a - b)$
```

Another useful trick is to multiply by a factor of "1" that makes a difference of squares (multiple by $\frac{reciprocal}{reciprocal}$)

\begin{align}
\lim_{x \to 0} \frac{\sqrt{3x + 1} - 1}{x} &= \lim_{x \to 0} \frac{(\sqrt{3x + 1} - 1)(\sqrt{3x + 1} + 1)}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{(\sqrt{3x + 1})^2 - (1)^2}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{3x + 1 - 1}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{3}{\sqrt{3x + 1} + 1} \\
&= \frac{3}{2}
\end{align}


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
