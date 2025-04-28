# Partial fraction decomposition
## Shortcut: Heaviside Cover-up Method

The Heaviside cover-up method is a simplified approach to finding the coefficients in partial fraction decomposition for linear factors. Its main advantage is avoiding cross-multiplication, which can be time-consuming, by covering up a factor and substituting the appropriate value into the expression.

### Example:
Given:
\begin{equation}
\frac{3x+11}{(x-3)(x+2)} = \frac{A_1}{x-3} + \frac{A_2}{x+2} 
\end{equation}

Multiply by a factor and take the limit to find $A_1$ and $A_2$:

\begin{equation}
\lim_{x\to 3} \left( \frac{3x+11}{x+2} = A_1 + \frac{A_2(x-3)}{x+2} \right) \\
\end{equation}

\begin{equation}
\frac{3(3)+11}{3+2} = A_1 \\
\end{equation}

$$
A_1 = 4  
$$

\begin{equaqtion}
\lim_{x\to -2} \left( \frac{3x+11}{x-3} = \frac{A_1(x+2)}{x-3} + A_2 \right) \\
\end{equation} 

\begin{equaqtion}
\frac{3(-2)+11}{-2-3} = A_2 \\
\end{equation} 

$$
A_2 = -1 
$$

The Heaviside cover-up method only works for the highest powers of linear factors.

### Example: Incomplete Decomposition
Given:
\begin{equation}
\frac{x^2-29x+5}{(x-4)^2 (x^2 +3)} = \frac{A_1}{x-4} + \frac{A_2}{(x-4)^2} + \frac{A_3x + B_3}{x^2 +3} 
\end{equation}

$A_2$ can be solved using the Heaviside cover-up method because it corresponds to $(x-4)^2$. 

\begin{equation}
\frac{(4)^2 - 29(4) + 5}{(4)^2 + 3} = A_2 \\
\end{equation}

$$
A_2 = -5 
$$

---
## Polynomial Division

Polynomial division is a method used to simplify rational functions when the degree of the numerator (P) is higher than the degree of the denominator (Q).

### Example:
Given:
\begin{equation}
y' = \frac{x^4 - 5x^3 + 6x^2 -18}{x^3 -3x^2} 
\end{equation}

P is a higher degree than Q, so polynomial division can be performed.

$$
\begin{array}{r}
x-2\\
x^3-3x^2{\overline{\smash{\big)}\, x^4-5x^3+6x^2-18}}
\\
\underline{-~(x^4-3x^3)}\phantom{+6x^2-18} \\
-2x^3+6x^2-18 \\
\underline{-~(-2x^3+6x^2)}\phantom{-18} \\
-18 \\
\end{array} 
$$

\begin{equation}
y'= x-2- \frac{18}{x^3-3x^2} 
\end{equation}

Use partial fraction decomposition for the term $\frac{-18}{x^3-3x^2}$:

\begin{align}
\frac{-18}{x^3-3x^2} = \frac{-18}{(x^2)(x-3)} = \frac{A_1}{x} + \frac{A_2}{x^2} + \frac{A_3}{x-3} 
\end{align}

Find $A_2$ by heaviside cover-up method:

\begin{align}
\frac{-18}{0-3}= A_2 \\
\end{align}

$$
A_2 = 6 
$$

Find $A_3$ by heaviside cover-up method:

\begin{align}
\frac{-18}{3^2} = A_3 \\
\end{align}

$$
A_3 = -2
$$

Find $A_1$ by substituting $A_2$ and $A_3$:

\begin{equation}
-18 = A_1x(x-3) + 6(x-3) - 2x^2 
\end{equation}

Plug in $x=1$:

\begin{align}
-18 = A_1(-2) + 6(-2) - 2 = -2A_1 - 14 \\
-4 = -2A_1 \\
\end{align}

$$
A_1 = 2 
$$

Integrate:

\begin{align}
y = \int (x - 2 + \frac{2}{x} + \frac{6}{x^2} - \frac{2}{x-3}) \, dx \\
= \frac{x^2}{2} -2x + 2\ln|x| - \frac{6}{x} - 2\ln|x-3| + C 
\end{align}