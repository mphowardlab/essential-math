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

## Skill builder problems

Given

\begin{equation}
\d{f} = p \d{x} - q \d{y}
\end{equation}

Express the following:

1. $\displaystyle\td{}{f}{x}{y}$

   ```{solution}
   Based on differential:
   \begin{equation}
   \td{}{f}{x}{y} = p
   \end{equation}
   ```

2. $\displaystyle\td{}{f}{y}{x}$

   ```{solution}
   Based on differential:
   \begin{equation}
   \left(\frac{\partial f}{\partial y}\right)_x = -q
   \end{equation}
   ```

3. $\displaystyle\td{2}{f}{x}{y}$

   ```{solution}
   \begin{align}
   \left(\frac{\partial^2 f}{\partial x^2}\right)_y = \frac{\partial }{\partial x}
     \left(\left(\frac{\partial f}{\partial x}\right)_y \right)_y =
   \left(\frac{\partial p}{\partial x}\right)_y
   \end{align}
   ```

4. $\displaystyle\td{2}{f}{y}{x}$

   ```{solution}
   \begin{align}
   \left(\frac{\partial^2 f}{\partial y^2}\right)_x = \frac{\partial }{\partial y}
     \left(\left(\frac{\partial f}{\partial y}\right)_x \right)_x =
   \left(\frac{\partial (-q)}{\partial y}\right)_x =
    -\left(\frac{\partial q}{\partial y}\right)_x
   \end{align}
   ```

5. $\displaystyle\frac{\partial^2 f}{\partial x \partial y}$

   ```{solution}
   \begin{align}
   \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial }{\partial x}
     \left(\left(\frac{\partial f}{\partial y}\right)_x \right)_y =
   -\left(\frac{\partial q}{\partial x}\right)_y
   \end{align}
   ```

6. $\displaystyle\frac{\partial^2 f}{\partial y \partial x}$

   ```{solution}
   \begin{align}
   \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial }{\partial y}
     \left(\left(\frac{\partial f}{\partial x}\right)_y \right)_x =
   \left(\frac{\partial p}{\partial y}\right)_x
   \end{align}
   ```

---

Given:

\begin{align}
f &= \cos(4x+y^2) + x^2y\\
x &= 2ut\\
y &= t^2
\end{align}

Evaluate:

7. $\displaystyle\td{}{f}{t}{u}$

   ```{solution}
   ```

8. $\displaystyle\td{}{f}{u}{t}$

   ```{solution}
   ```

\begin{align}
(g)\ \left(\frac{\partial f}{\partial t}\right)_u &= \left(\frac{\partial f}{\partial x}\right)_y\left(\frac{\partial x}{\partial t}\right)_u + \left(\frac{\partial f}{\partial y}\right)_x\left(\frac{\partial y}{\partial t}\right)_u\\
\\
&= \left[-4\sin(4x+y^2)+2xy\right](2u) + \left[-2y\sin(4x+y^2)+x^2\right](2t)\\
\\
&= \left[-4\sin(8ut+t^4)+4ut^3\right](2u) + \left[-2t^2\sin(8ut+t^4)+4u^2t^2\right](2t)\\
\\
&= -4(2u+t^3)\sin(8ut+t^4) + 16u^2t^3\\
\\
(h)\ \left(\frac{\partial f}{\partial u}\right)_t &= \left(\frac{\partial f}{\partial x}\right)_y\left(\frac{\partial x}{\partial u}\right)_t + \left(\frac{\partial f}{\partial y}\right)_x\left(\frac{\partial y}{\partial u}\right)_t\\
\\
&= \left[-4\sin(4x+y^2)+2xy\right](2t)\\
\\
&= 2t\left[-4\sin(8ut+t^4)+4ut^3\right]
\end{align}
