# L'Hôpital's Rule

L'Hôpital's rule is a method that allows you to calculate limits of certain
indeterminate forms using derivatives.

```{topic} L'Hôpital's Rule

If $\lim_{x\to a} f(x) = \lim_{x \to a} g(x) = 0$ or $\pm \infty$, then

\begin{equation}
\lim_{x\to a} \frac{f(x)}{g(x)} = \lim_{x\to a} \frac{f'(x)}{g'(x)}
\end{equation}

This process can be repeated until the above situation no longer applies or
the limit is found not to exist.
```

Let's work some examples:

1. $\displaystyle \lim_{x\to 0} \frac{\sin x}{x}$

   The limits of the numerator and denominator are both zero, so:

   \begin{equation}
   \lim_{x\to 0} \frac{\sin x}{x} = \lim_{x\to 0} \frac{\cos x}{1} = 1
   \end{equation}

2. $\displaystyle \lim_{x\to 0} \frac{x-\sin x}{x^3}$

   The limits of the numerator and denominator are both zero, so:

   \begin{align}
   \lim_{x\to 0} \frac{x-\sin x}{x^3}
     &= \lim_{x\to 0} \frac{1-\cos x}{3x^2} \\
     &= \lim_{x\to 0} \frac{\sin x}{6x} \\
     &= \frac{1}{6} \lim_{x\to 0} \frac{\sin x}{x} = \frac{1}{6}
   \end{align}

   where we used L'Hôpital's rule twice, then used the result from the first
   example.

3. $\displaystyle \lim_{x\to \infty} \frac{\ln(x)}{2\sqrt{x}}$

   The limits of the numerator and denominator are both $\infty$, so:

   \begin{align}
   \lim_{x\to \infty} \frac{\ln x}{2\sqrt{x}}
     &= \lim_{x\to \infty} \frac{1/x}{1/\sqrt{x}} \\
     &= \lim_{x\to \infty} \frac{1}{\sqrt{x}} = 0
   \end{align}

   where the last limit is obtained by simplification.

4. $\displaystyle \lim_{x\to \infty} \frac{e^x}{x^2}$

   The limits of the numerator and denominator are both $\infty$, so:

   \begin{align}
   \lim_{x\to \infty} \frac{e^x}{x^2}
   &= \lim_{x\to \infty} \frac{e^x}{2x} \\
   &= \lim_{x\to \infty} \frac{e^x}{2} = \infty
   \end{align}

   Here, we used L'Hôpital's rule twice, but then ultimately found that the
   limit does not exist.

5. $\displaystyle \lim_{x\to \infty} x\sin(1/x)$

   This limit is not in a form that's immediately suitable for L'Hôpital's rule,
   but it can be made so.

   \begin{align}
   \lim_{x\to \infty} x\sin(1/x)
   &= \lim_{x\to \infty} \frac{\sin(1/x)}{1/x} \\
   &= \lim_{x\to \infty} \frac{\cos(1/x)(-1/x^2)}{-1/x^2} \\
   &= \lim_{x\to \infty} \cos(1/x) = 1
   \end{align}

   Another option in this case would be to substitute in $y = 1/x$, then note
   that $y \to 0$ as $x \to \infty$ so we have

   \begin{equation}
   \lim_{y\to 0} \frac{\sin y}{y} = 1
   \end{equation}

   which we already solved!
