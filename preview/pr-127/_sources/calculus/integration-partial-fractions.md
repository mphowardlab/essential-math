# Partial fraction decomposition

## Heaviside cover-up method

The Heaviside cover-up method is a simplified approach to finding the
coefficients in partial fraction decomposition for linear factors. Its main
advantage is avoiding cross-multiplication, which can be time-consuming, by
covering up a factor and substituting the appropriate value into the expression.

We will demonstrate the approach by example. Given the decomposition:

\begin{equation}
\frac{3x+11}{(x-3)(x+2)} = \frac{A_1}{x-3} + \frac{A_2}{x+2}
\end{equation}

Multiply by both sides by the first factor and take the limit to find $A_1$:

\begin{align}
\lim_{x\to 3} \left( \frac{3x+11}{x+2} \right)
&= \lim_{x \to 3} \left( A_1 + \frac{A_2(x-3)}{x+2} \right) \\
\frac{3(3)+11}{3+2} &= A_1 \\
A_1 &= 4
\end{align}

You can do the same for the second factor to get $A_2$:

\begin{align}
\lim_{x\to -2} \left( \frac{3x+11}{x-3}\right)
&= \lim_{x\to -2} \left( \frac{A_1(x+2)}{x-3} + A_2 \right) \\
\frac{3(-2)+11}{-2-3} &= A_2 \\
A_2 &= -1
\end{align}

This procedure can be implemented conveniently by "covering up" the relevant
factor in the original fraction!

```{topic} Heaviside cover-up method
To evaluate the unknown coefficient of the **highest power of a linear factor**
in a partial fraction decomposition, cover-up the factor in the original
fraction, then evaluate the fraction with the value of *x* that makes the factor
zero.
```

Note that this procedure only works for the highest powers of linear factors,
but it can be used in combination with other techniques to more easily obtain
the remaining factors.

For example, given:

\begin{equation}
\frac{x^2-29x+5}{(x-4)^2 (x^2 +3)}
= \frac{A_1}{x-4} + \frac{A_2}{(x-4)^2} + \frac{A_3x + B_3}{x^2 +3}
\end{equation}

$A_2$ can be solved for using the Heaviside cover-up method because it
corresponds to the highest power of the factor $x-4$.

\begin{equation}
A_2 = \frac{4^2 - 29 \cdot 4 + 5}{4^2 + 3} = -5
\end{equation}

Cross-multiplication must be used to solve for $A_1$, $A_3$, and $B_3$.

## Polynomial division

Polynomial division is a method used to simplify rational functions when the
degree of the numerator $P$ is higher than the degree of the denominator $Q$.
The remaineder from the division should then be suitable for partial fraction
decomposition.

For example, to integrate:

\begin{equation}
\int \frac{x^4 - 5x^3 + 6x^2 -18}{x^3 -3x^2} \d{x}
\end{equation}

Partial fraction decomposition seems useful, but the degree of the numerator
$P$ is 4 but the degree of denominator $Q$ is 3, so we must carry out polynomial
division first.

$$
\begin{array}{r}
x-2 \phantom{5x^3+6x^2-18}\\
x^3-3x^2{\overline{\smash{\big)}\, x^4-5x^3+6x^2-18}}
\\
\underline{-~(x^4-3x^3)}\phantom{+6x^2-18} \\
-2x^3+6x^2-18 \\
\underline{-~(-2x^3+6x^2)}\phantom{-18} \\
-18 \\
\end{array}
$$

The result is

\begin{equation}
\frac{x^4 - 5x^3 + 6x^2 -18}{x^3 -3x^2} = x - 2 - \frac{18}{x^3-3x^2}
\end{equation}

Use partial fraction decomposition for the fractional term:

\begin{equation}
\frac{-18}{x^2 (x-3)} = \frac{A_1}{x} + \frac{A_2}{x^2} + \frac{A_3}{x-3}
\end{equation}

Find $A_2$ and $A_3$ using the Heaviside cover-up method:

\begin{align}
A_2 &= \frac{-18}{0-3} = 6 \\
A_3 &= \frac{-18}{3^2} = -2
\end{align}

Find $A_1$ by substituting $A_2$ and $A_3$, then cross-multiplying:

\begin{equation}
-18 = A_1 x (x-3) + 6(x-3) - 2x^2
\end{equation}

We could collect powers of *x*, but plugging in $x=1$ then solving for $A_1$
is a little easier:

\begin{align}
-18 &= A_1 \cdot 1 \cdot -2 + 6 \cdot -2 - 2 = -2A_1 - 14 \\
A_1 &= 2
\end{align}

Last, integrate:

\begin{align}
&\int \frac{x^4 - 5x^3 + 6x^2 -18}{x^3 -3x^2} \d{x} \\
&= \int \left(x - 2 + \frac{2}{x} + \frac{6}{x^2} - \frac{2}{x-3} \right) \d{x} \\
&= \frac{x^2}{2} -2x + 2\ln|x| - \frac{6}{x} - 2\ln|x-3| + c
\end{align}
