# Total differential

The total differential of *f* is the sum of partial derivatives and differential
changes for each variable:

\begin{equation}
\d{f} = \td{}{f}{x}{y} \d{x} + \td{}{f}{y}{x} \d{y}
\end{equation}

For example if $f = x^2 \cos y$, then
\begin{equation}
\d{f} = 2x \cos y \d{x} - x^2 \sin y \d{y}
\end{equation}

The total differential tells us how *f* will change in response to small
changes in one or more of its variables. The expression above is for functions
of two variables, but it generalizes immediately to more.

The total differental can also be used to form other derivatives with respect
to variables that *f* does not explicitly depend on. For example, suppose $x(t)$
and $y(t)$ both depend on one variable $t$; then, *f* is effectively a function
of only *t* through its dependencies on *x* and *y*. Its orderinary derivative
can be calculated using the total differential to apply the chain rule:

\begin{equation}
\dd{}{f}{t} = 2x \cos y \dd{}{x}{t} - x^2 \sin y \dd{}{y}{t}
\end{equation}

Similarly, if $x(t,s)$ and $y(t,s)$ depend on multiple variables *t* and *s*,
partial derivatives can be formed in the same way:

\begin{equation}
\td{}{f}{t}{s} = 2x \cos y \td{}{x}{t}{s} - x^2 \sin y \td{}{y}{t}{s}
\end{equation}

$$
Given:
\begin{align}
f &= \cos(4x+y^2) + x^2y\\
x &= 2u+t\\
y &= t^2
\end{align}
$$
$$
Evaluate:
\begin{align}
(g)\ \left(\frac{\partial f}{\partial t}\right)_u &= \left(\frac{\partial f}{\partial x}\right)_y\left(\frac{\partial x}{\partial t}\right)_u + \left(\frac{\partial f}{\partial y}\right)_x\left(\frac{\partial y}{\partial t}\right)_u\\
\\
&= \left[-4\sin(4x+y^2)+2xy\right](1) + \left[-2y\sin(4x+y^2)+x^2\right](2t)\\
\\
&= \left[-4\sin(8u+4t+t^4)+4ut^2\right](1) + \left[-2t^2\sin(8u+4t+t^4)+(2u+t)^2\right](2t)\\
\\
&= -4\sin(8u+4t+t^4) + 4ut^2 - 4t^3\sin(8u+4t+t^4) + 4t(2u+t)^2\\
\\
&= -4(1+t^2)\sin(8u+4t+t^4) + 16ut^3\\
\\
(h)\ \left(\frac{\partial f}{\partial u}\right)_t &= \left(\frac{\partial f}{\partial x}\right)_y\left(\frac{\partial x}{\partial u}\right)_t + \left(\frac{\partial f}{\partial y}\right)_x\left(\frac{\partial y}{\partial u}\right)_t\\
\\
&= \left[-4\sin(4x+y^2)+2xy\right](2) + \left[-2y\sin(4x+y^2)+x^2\right](0)\\
\\
&= 2\left[-4\sin(4x+y^2)+2xy\right]\\
\\
&= 2\left[-4\sin(8u+4t+t^4)+2(2u+t)t^2\right]\\
\\
&= 2\left[-4\sin(8u+4t+t^4)+4ut^2\right]
\end{align}
