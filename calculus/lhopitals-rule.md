
## L'Hopital's Rule

L'Hopital's rule is a method that allows you to calculate limits of certain forms using derivatives.

```{topic} L'Hopital's Rule

\begin{equation}
\lim_{x\to a} \frac{f(x)}{g(x)} = \lim_{x\to a} \frac{f'(x)}{g'(x)}
\end{equation}

Two scenarios can occur: 
- If f(a) = g(a) = 0, then the limit becomes $\frac{0}{0}$ 
- If f(a) $\to\pm\infty$ and g(a) $\to\pm\infty$ as x $\to$ a, then $\frac{\infty}{\infty}$

To solve, differentate the numerator and denominator until the above situations no longer apply.

```
## Examples

1. $\lim_{x\to 0} \frac{\sin(x)}{x}$

\begin{align}
\lim_{x\to 0} \frac{\sin(x)}{x} &= \frac{0}{0} \\
\lim_{x\to 0} \frac{\cos(x)}{1} &= \cos(0) = 1
\end{align}

2. $\lim_{x\to 0} \frac{x-\sin(x)}{x^3}$

\begin{align}
\lim_{x\to 0} \frac{x-\sin(x)}{x^3} &= \frac{0}{0} \\
\lim_{x\to 0} \frac{1-\cos(x)}{3x^2} &= \frac{0}{0} \\
\lim_{x\to 0} \frac{\sin(x)}{6x} &= \frac{1}{6}
\end{align}

3. $\lim_{x\to \infty} \frac{\ln(x)}{2\sqrt{x}}$

\begin{align}
\lim_{x\to \infty} \frac{\ln(x)}{2\sqrt{x}} &= \frac{\infty}{\infty} \\
\lim_{x\to \infty} \frac{1/x}{1/\sqrt{x}} &= \frac{\infty}{\infty}\\
\lim_{x\to \infty} \frac{1}{\sqrt{x}} &= 0
\end{align}

4. $\lim_{x\to \infty} \frac{e^x}{x^2}$

\begin{align}
\lim_{x\to \infty} \frac{e^x}{x^2} &= \frac{\infty}{\infty} \\
\lim_{x\to \infty} \frac{e^x}{2x} &= \frac{\infty}{\infty} \\
\lim_{x\to \infty} \frac{e^x}{2} &= \infty
\end{align}

5. $\lim_{x\to \infty} x\sin(\frac{1}{x})$

Other forms can also sometimes be made: $\frac{0}{0}$ or $\frac{\infty}{0}$.

\begin{align}
\lim_{x\to \infty} x\sin(\frac{1}{x}) &= \infty \cdot 0 \\
\lim_{x\to \infty} \frac{\sin({\frac{1}{x}})}{\frac{1}{x}} &= \frac{0}{0} \\
\lim_{x\to \infty} \frac{\cos(\frac{1}{x})\frac{-1}{x^2}}{\frac{-1}{x^2}} &= 1 \\
\end{align}

Another option to solve this problem is to substitute in $y=\frac{1}{x}$:

\begin{align}
\lim_{y\to 0} \frac{\sin(y)}{y} &= 1
\end{align}