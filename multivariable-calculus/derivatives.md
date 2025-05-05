# Derivatives

A function $f(x,y)$ has *partial* derivatives:

\begin{equation}
\td{}{f}{x}{y} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}
\end{equation}

where *x* (in the denominator) indicates what is varied and *y* (outside the
parentheses) indicates what is held constant.

The second partial derivative may be "repeated"

\begin{equation}
\td{2}{f}{x}{y} = \pp{}{}{x}\left[ \td{}{f}{x}{y} \right]_y
\end{equation}

or "mixed"

\begin{equation}
\frac{\partial^2 f}{\partial x \partial y} = \pp{}{}{x}\left[ \td{}{f}{y}{x} \right]_y
\end{equation}

Mixed partial derivatives are read from right to left by convention.

Partial derivatives can be taken using the normal procedures for single-variable
calculus if you treat the constant variables as such

```{example} Taking partial derivatives
For the function $f(x,y) = x^2 \cos y$, evaluate $(\partial f/\partial x)_y$,
$(\partial^2 f/\partial x^2)_y$, and $\partial^2 f/\partial y \partial x$.

---

The first partial derivative with respect to *x* (treating *y* as a constant) is

\begin{equation}
\td{}{f}{x}{y} = 2 x \cos y
\end{equation}

The second (repeated) partial derivative with respect to *x* (again, treating
*y* as a constant) is

\begin{equation}
\td{2}{f}{x}{y} = \pp{}{}{x}\left[ \td{}{f}{x}{y} \right]_y
= \pp{}{}{x}\left( 2 x \cos y \right)_y = 2 \cos y
\end{equation}

The second (mixed) partial derivative with respect to *x* then *y* is

\begin{equation}
\frac{\partial^2 f}{\partial y \partial x} = \pp{}{}{y}\left[ \td{}{f}{x}{y} \right]_x
= \pp{}{}{y} \left( 2 x \cos y \right)_x = -2x \sin y
\end{equation}

```

```{topic} Mixed second partial derivatives
If all the second partial derivatives of a multivariable function *f* are
continuous, the mixed second partial derivatives are symmetric,

\begin{equation}
\frac{\partial^2 f}{\partial x \partial y}
= \frac{\partial^2 f}{\partial y \partial x}
\end{equation}
```

```{example} Order of mixed second partial derivatives
Show the order of the mixed derivatives does not matter for the example function
given above.

---

The first partial derivative with respect to $y$ is

\begin{equation}
\td{}{f}{x}{y} = -x^2 \sin y
\end{equation}

So, the second (mixed) partial derivative with respect to *y* then *x* is

\begin{equation}
\frac{\partial^2 f}{\partial x \partial y} = \pp{}{}{x}\left[ \td{}{f}{y}{x} \right]_y
= \pp{}{}{x} \left( -x^2 \sin y \right)_y = -2x \sin y
\end{equation}
```

## Skill builder problems

Given:
\begin{align}
f &= \cos(4x+y^2) + x^2y\\
x &= 2ut\\
y &= t^2
\end{align}

Evaluate:
\begin{align}
(a)\ \left(\frac{\partial f}{\partial x}\right)_y &= -4\sin(4x+y^2) + 2xy\\
\\
(b)\ \left(\frac{\partial f}{\partial y}\right)_x &= -2y\sin(4x+y^2) + x^2\\
\\
(c)\ \left(\frac{\partial^2 f}{\partial x^2}\right)_y &= -16\cos(4x+y^2) + 2y \quad \text{(differentiate (a))}\\
\\
(d)\ \left(\frac{\partial^2 f}{\partial y^2}\right)_x &= -4y^2\cos(4x+y^2) - 2\sin(4x+y^2) \quad \text{(differentiate (b))}\\
\\
(e)\ \left(\frac{\partial^2 f}{\partial x \partial y}\right) &= -8y\cos(4x+y^2) + 2x \quad \text{(differentiate (b))}\\
\\
(f)\ \left(\frac{\partial^2 f}{\partial y \partial x}\right) &= -8y\cos(4x+y^2) + 2x \quad \text
{(same as (e), or differentiate (b))}\\
\\
\end{align}
