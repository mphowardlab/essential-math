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
