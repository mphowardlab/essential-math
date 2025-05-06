# LHopital Rule
# L'Hopital's Rule

'''{topic} L'Hopital's Rule

This method allows you to calculate limits of certain forms using derivatives.

\begin{align}
\lim_{x\to a} \frac{f(x)}{g(x)} = \lim_{x\to a} \frac{f'(x)}{g'(x)}
\end{align}

Two scenarios can occur:
if f(a) = g(a) = 0, then the limit becomes $\frac{0}{0}$
if f(a) $\to\pm\infty$ and g(a) $\to\pm\infty$ as x $\to$ a, then $\frac{\infty}{\infty}$

In order to fix this problem, we will keep differentating the numerator and denominator until the above situations will no longer apply.

We will consider some example of how to use this method to solve limits. 


## Examples

To solve: 

\begin{align}
\lim_{x\to 0} \frac{sin(x)}{x} = \frac{0}{0}
\end{align}

Differentiate the numerator and denominator:

\begin{align}
\lim_{x\to 0} \frac{cos(x)}{1} = cos(0) = 1
\end{align}

'''

To solve:
\begin{align}
\lim_{x\to 0} \frac{x-sin(x)}{x^3} = \frac{0}{0}
\end{align}

Differentiate the numerator and denominator until $\frac{0}{0} does not occur:
\begin{align}
\lim_{x\to 0} \frac{1-cos(x)}{3x^2} = \frac{0}{0} \\
\lim_{x\to 0} \frac{sin(x)}{6x} = \frac{1}{6}
\end{align}

'''

To solve:

\begin{align}
\lim_{x\to \infty} \frac{\ln(x)}{2\sqrt{x}} = \frac{\infty}{\infty}
\end{align}

Begin by differentiating the numerator and denominator until \frac{\infty}{\infty} does not occur:
\begin{align}
\lim_{x\to \infty} \frac{1/x}{1/\sqrt{x}} = \frac{\infty}{\infty}\\
\lim_{x\to \infty} \frac{1}{\sqrt{x}} = 0
\end{align}

'''

To solve:

\begin{align}
\lim_{x\to \infty} \frac{e^x}{x^2} = \frac{\infty}{\infty}
\end{align}

Begin by differentiating the numerator and denominator until \frac{\infty}{\infty} does not occur:

\begin{align}
\lim_{x\to \infty} \frac{e^x}{2x} = \frac{\infty}{\infty} \\
\lim_{x\to \infty} \frac{e^x}{2} = \infty
\end{align}

Other forms can also sometimes be made $\frac{0}{0}$ or $\frac{\infty}{0}

To solve:
\begin{align}
\lim_{x\to \infty} xsin(\frac{1}{x}) = \infty \cdot 0 \\
\lim_{x\to \infty} \frac{sin/x}{\frac{1}{x}} = \frac{0}{0} \\
\lim_{x\to \infty} \frac{cos(\frac{1}{x})\frac{-1}{x^2}}{\frac{-1}{x^2}} = 1 \\
\end{align}

Another option to solve this problem is, is to treat $y=\frac{1}{x}$:
\begin{align}
\lim_{y\to 0} \frac{sin(y)}{y} = 1


