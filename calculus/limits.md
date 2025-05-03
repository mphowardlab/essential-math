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

This is applicable if f is "continuous" at x (no jumps or holes).

If $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$ , then

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

If $M \neq 0$

Power:
\begin{equation}
\lim_{x \to c} f(x)^{\frac{r}{s}} = L^{\frac{r}{s}}
\end{equation}

'r' and 's' are integers, $s \neq 0$, and L>0 if s is even
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

Limits are most useful when functions have "holes" (not definited at $$x_{\text{0}}$$)

\begin{align}
\lim_{x \to 1} \frac{x^2 + x -2}{x^2 - x} &= \lim_{x \to 1} \frac{(x+2)(x+1)}{x(x+1)} \\
&= \lim_{x \to 1} \frac{x+2}{x} \\
&= 3
\end{align}

If we evaluate $\lim_{x \to 1} \frac{x^2 + x -2}{x^2 - x}$ we get $\frac{0}{0}$. To remove this hole, we can simplify the equation by <u>factoring</u>.

This works even if the factors are "ugly"

\begin{align}
\lim_{x \to 4} \frac{4x - x^2}{2 - \sqrt{x}} &= \lim_{x \to 4} \frac{x(4 - x)}{2 - \sqrt{x}} \\
&= \lim_{x \to 4} \frac{x(2 + \sqrt{x})(2 - \sqrt{x})}{2 - \sqrt{x}} \\
&= \lim_{x \to 4} x(2 + \sqrt{x}) \\
&= 4(2 + \sqrt{4}) \\
&= 16
\end{align}

$\lim_{x \to 4} \frac{4x - x^2}{2 - \sqrt{x}} = \frac{0}{0}$ so we factor and use difference of squares to remove the hole.

Another useful trick is to multiply by a factor of "1" that makes a difference of squares (multiple by $\frac{reciprocal}{reciprocal}$)

\begin{align}
\lim_{x \to 0} \frac{\sqrt{3x + 1} - 1}{x} &= \lim_{x \to 0} \frac{(\sqrt{3x + 1} - 1)(\sqrt{3x + 1} + 1)}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{(\sqrt{3x + 1})^2 - (1)^2}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{3x + 1 - 1}{x(\sqrt{3x + 1} + 1)} \\
&= \lim_{x \to 0} \frac{3}{\sqrt{3x + 1} + 1} \\
&= \frac{3}{2}
\end{align}

