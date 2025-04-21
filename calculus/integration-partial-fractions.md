# Partial fraction decomposition
## Shortcut: Heaviside Cover-up Method

$$ 
\frac{3x+11}{(x-3)(x+2)} = \frac{A_1}{x-3} + \frac{A_2}{x+2} 
$$

Multiply by a factor and take limit:

$$
\lim_{x\to 3} \left( \frac{3x+11}{x+2} = A_1 + \frac{A_2(x-3)}{x+2} \right) 
$$

$$
\frac{3(3)+11}{3+2} = A_1 
$$

$$
 A_1 = 4 
$$

$$ 
\lim_{x\to -2} \left( \frac{3x+11}{x-3} = \frac{A_1(x+2)}{x-3} + A_2 \right) 
$$

$$ 
\frac{3(-2)+11}{-2-3} = A_2 
$$

$$
A_2 = -1 
$$

The Heaviside cover-up method only works for the highest powers of linear factors.

$$ 
\frac{x^2-29x+5}{(x-4)^2 (x^2 +3)} = \frac{A_1}{x-4} + \frac{A_2}{(x-4)^2} + \frac{A_3x + B_3}{x^2 +3} 
$$

$$
\frac{(4)^2 - 29(4) + 5}{(4)^2 + 3} = A_2 
$$

$$
A_2 = -5 
$$

---
## Polynomial division

$$
y' = \frac{x^4 - 5x^3 + 6x^2 -18}{x^3 -3x^2} 
$$

P is a higher degree than Q

$$
\begin{array}{r}
x-2\phantom{)} \
x^3-3x^2{\overline{\smash{\big)}\, x^4-5x^3+6x^2-18\phantom{)}}} \
\underline{-~\phantom{(}(x^4-3x^3)\phantom{-b)}} \
-2x^3+6x^2-18\phantom{)} \
\underline{-~\phantom{()}(-2x^3+6x^2)} \
-18\phantom{)} \
\end{array} 
$$

$$
y'= x-2- \frac{18}{x^3-3x^2} 
$$

$$
\frac{-18}{x^3-3x^2} = \frac{-18}{(x^2)(x-3)} = \frac{A_1}{x} + \frac{A_2}{x^2} + \frac{A_3}{x-3} 
$$

$$
\frac{-18}{0-3}= A_2 
$$

$$ 
A_2 = 6 
$$

$$ 
\frac{-18}{3^2} = A_3 
$$

$$ 
A_3 = -2 
$$

$$ 
-18 = A_1x(x-3) + 6(x-3) - 2x^2 
$$

Plug in $$x=1$$:

$$ 
-18 = A_1(-2) + 6(-2) - 2 = -2A_1 - 14 
$$

$$ 
-4 = -2A_1 
$$

$$ 
A_1=2 
$$

$$ 
y = \int (x - 2 + \frac{2}{x} + \frac{6}{x^2} - \frac{2}{x-3}) \, dx 
$$

$$
= \frac{x^2}{2} -2x + 2\ln|x| - \frac{6}{x} - 2\ln|x-3| + C 
$$