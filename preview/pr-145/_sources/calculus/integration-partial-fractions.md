# Partial fraction decomposition

Integrals like

\begin{equation}
\int \frac{3x+11}{x^2-x-6} \d{x}
\end{equation}

can be evaluated by breaking them apart into simpler integrals. Let's try to
break the integrand up into the factors of its denominator:

\begin{equation}
\frac{3x+11}{x^2-x-6} = \frac{3x+11}{(x-3)(x+2)} = \frac{A_1}{x-3} + \frac{A_2}{x+2}
\end{equation}

To find $A_1$ and $A_2$, first cross multiply to eliminate the denominator, then
combine like powers of *x*:

\begin{align}
3x + 11 &= A_1(x+2) + A_2(x-3) \\
3x + 11 &= (A_1 + A_2)x + (2A_1 - 3A_2) \\
\end{align}

If our proposed form will work, all the coefficients of *x* must match on both
sides, so

\begin{align}
A_1  + A_2 &= 3 \\
2A_1 - 3A_2 &= 11
\end{align}

This is a system of linear equations that can be solved, e.g., using a matrix
technique. Form the augmented matrix then perform Gauss-Jordan elimination:

\begin{align}
\begin{bmatrix} 1 & 1 & 3\\ 2 & -3 & 11 \end{bmatrix}
\begin{matrix}\vphantom{R_1} \\ -2 R_1 \end{matrix}
&\to \begin{bmatrix} 1 & 1 & 3\\ 0 & -5 & 5 \end{bmatrix}
\begin{matrix}\vphantom{R_1} \\ \div -5 \end{matrix} \\
&\to \begin{bmatrix} 1 & 1 & 3\\ 0 & 1 & -1 \end{bmatrix}
\begin{matrix} -R_2 \\ \vphantom{R_2} \end{matrix} \\
&\to \begin{bmatrix} 1 & 0 & 4\\ 0 & 1 & -1 \end{bmatrix}
\end{align}

so $A_1 = 4$ and $A_2 = -1$. Once you have coefficients, you can integrate:

\begin{align}
\int \frac{3x+11}{x^2-x-6} \d{x}
&= \int\left(\frac{4}{x-3}-\frac{1}{x+2} \right) \d{x} \\
&= 4\ln| x-3 | - \ln|x+2| + c
\end{align}

We can formalize this technique, called *partial fraction decomposition*.

```{topic} Partial fraction decomposition
For a rational polynomial $P(x)/Q(x)$ where *Q* is expressed using either
linear or irreducible quadratic factors and the degree of *P* is less than *Q*,
propose the following decomposition:

- Linear factor $ax+b$

  \begin{equation}
  \frac{A}{ax+b}
  \end{equation}

- Repeated linear factor $(ax+b)^k$

  \begin{equation}
  \frac{A_1}{ax+b} + \cdots + \frac{A_k}{(ax+b)^k}
  \end{equation}

- Irreducible quadratic factor $ax^2 + bx + c$

  \begin{equation}
  \frac{Ax+B}{ax^2+bx+c}
  \end{equation}

- Repeated irreducible quadratic factor $(ax^2 + bx+c)^k$

  \begin{equation}
  \frac{A_1 x + B_1}{ax^2+bx+c} + \cdots + \frac{A_k x + B_k}{(ax^2+bx+c)^k}
  \end{equation}

```

To demonstrate this technique, let's try to take the integral

\begin{equation}
\int \frac{x^2-29x+5}{(x-4)^2 (x^2+3)} \d{x}
\end{equation}

First, expand the denominator and put placeholder coefficient terms in the numerator.

\begin{equation}
\frac{x^2-29x+5}{\left(x-4 \right)^2 \left(x^2+3 \right)}
= \frac{A_1}{x-4} + \frac{A_2}{(x-4)^2} + \frac{A_3x+ B_3}{x^2+3}
\end{equation}

Next, cross multiply, expand, and collect like powers of *x*:

\begin{align}
x^2-29x+5 &= A_1 \left(x-4 \right) \left(x^2+3 \right) +
 A_2 \left(x^2+3 \right) \\
 &\quad + \left(A_3x+B_3 \right) \left(x-4 \right)^2 \\
&= A_1 \left(x^3-4x^2+3x-12 \right) + A_2 \left(x^2+3 \right) \\
 &\quad +\left(A_3x+B_3 \right)\left(x^2-8x+16 \right) \\
&=\left(A_1+A_3\right)x^3+\left(-4A_1+A_2-8A_3+B_3\right)x^2 \\
 &\quad + \left(3A_1+16A_3-8B_3\right)x+\left(-12A_1+3A_2+16B_3\right)
\end{align}

Finally, form the linear system of equations for the coefficients of *x*:

\begin{align}
A_1+A_3 &= 0 \\
-4A_1 + A_2-8A_3 + B_3 &=1 \\
3A_1 + 16A_3 - 8B_3 &= -29 \\
-12A_1+3A_2+16B_3 &=5 \\
\end{align}

These linear equations can be written using a matrix and vectors

\begin{equation}
\begin{bmatrix}
1 & 0 & 1 & 0\\
-4 & 1 & -8 & 1\\
3 & 0 & 16 & -8\\
-12 & 3 & 0 & 16
\end{bmatrix}
\begin{bmatrix} A_1 \\ A_2\\ A_3\\ B_3 \end{bmatrix}
= \begin{bmatrix} 0\\ 1\\ -29 \\ 5 \end{bmatrix}
\end{equation}

Solving numerically gives $A_1 = 1$, $A_2 = -5$, $A_3 = -1$, and $B_3 =2$.
Finally,

\begin{align}
\int &\frac{x^2-29x+5}{(x-4)^2 (x^2+3)} \d{x} \\
&= \int\Biggl(\frac{1}{x-4}-\frac{5}{(x-4)^2}
  -\frac{x}{x^2+3}+\frac{2}{x^2+3}\Biggr) \d{x} \\
&= \ln|x-4|+\frac{5}{x-4} -\frac{1}{2} \ln|x^2 + 3| +
  \frac{2}{\sqrt{3}} \arctan\left( \frac{x}{\sqrt{3}} \right) + c
\end{align}

using *u* substitution in

\begin{equation}
\int \frac{\d{x}}{1+x^2} = \arctan x
\end{equation}

to evaluate the last integral.

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
*P* is 4 but the degree of denominator *Q* is 3, so we must carry out polynomial
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

##Skill builder problems\
Obtain general solutions to

1. $y' = \frac{2x+16}{x^2-16}$

```{solution}
Fractional decomposition:

\begin{equation}
\frac{2x+16}{(x+4)(x-4)} = \frac{A_1}{x+4} + \frac{A_2}{x-4} = -\frac{1}{x+4} + \frac{3}{x-4}
\end{equation}

Cover up:

\begin{align}
A_1 = \frac{2(-4)+16}{-4-4} = -1 \\
A_2 = \frac{2(4)+16}{4+4} = 3
\end{align}

\begin{equation}
\frac{2x+16}{(x+4)(x-4)} = -\frac{1}{x+4} + \frac{3}{x-4}
\end{equation}

Integrate:

\begin{align}
y &= \int\frac{2x+16}{x^2-16}dx \\
&= \int\left( -\frac{1}{x+4}+\frac{3}{x-4} \right)dx \\
&= -\ln|x+4|+3\ln|x-4|+c
\end{align}
```


2. $y' = \frac{8}{x^2+2x}$

\begin{equation}
\frac{8}{x(x+2)} = \frac{A1}{x} + \frac{A2}{x+2} = \frac{4}{x} - \frac{4}{x+2}
\end{equation}

Cover up:\
\begin{align}
A1 = \frac{8}{0+2} = 4\
A2 = \frac{8}{-2} = -4
\end{align}

\begin{equation}
y = \int\frac{8}{x^2+2x}dx = \int(\frac{4}{x} - \frac{4}{x+2})dx = 4\ln(x) - 4\ln(x+2) + c
\end{equation}

3. $y' = \frac{5+12x^2-x^3}{x^2(x-9)(x-1)}$

\begin{equation}
\frac{5+12x^2-x^3}{x^2(x-9)(x-1)} = \frac{A1}{x} + \frac{A2}{x^2} + \frac{A3}{x-9} + \frac{A4}{x-1} = \frac{50}{81}\frac{1}{x} + \frac{5}{9}\frac{1}{x^2} + \frac{31}{81}\frac{1}{x-9} - \frac{2}{x-1}
\end{equation}

Cover up:\
\begin{align}
A2 = \frac{5+12(0^2)-0^3}{(0-9)(0-1)} = \frac{5}{9}\
A3 = \frac{5+12(9^2)-9^3}{9^2(9-1)} = \frac{31}{81}\
A4 = \frac{5+12(1^2)-1^3}{1^2(1-9)} = -2
\end{align}

\begin{equation}
5+12x^2-x^3 = A1x(x-9)(x-1) + \frac{5}{9}(x-9)(x-1) + \frac{31}{81}x^2(x-1) - 2x^2(x-9)
\end{equation}\
Plug in $x = -1$:\
\begin{align}
5+12(-1)^2-(-1)^3 = A1(-1)(-1-9)(-1-1) + \frac{5}{9}(-1-9)(-1-1) + \frac{31}{81}(-1)^2(-1-1) -2(-1)^2(-1-9)\
18 = -20A1 + \frac{100}{9} - \frac{62}{81} + 20\
A1 = \frac{50}{81}
\end{align}

\begin{equation}
y = \int\frac{5+12x^2-x^3}{(x^2)(x-9)(x-1)}dx
\end{equation}\
\begin{equation}
=\int(\frac{50}{81}\frac{1}{x} + \frac{5}{9}\frac{1}{x^2} + \frac{31}{81}\frac{1}{x-9} - \frac{2}{x-1})dx
\end{equation}\
\begin{equation}
=\frac{50}{81}\ln(x) - \frac{5}{9}\frac{1}{x} + \frac{31}{81}\ln(x-5) - 2\ln(x-1) + c
\end{equation}
