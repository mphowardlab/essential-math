# Derivatives


The Derivative is also a function!

![Graph](../images/MathAppsECPic.png)

$$
\begin{aligned}
f(x) &= x^2 \\
f'(x) &= \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} \\
    &= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} \\
    &= \lim_{h \to 0} \frac{2xh + h^2}{h} \\
    &= \lim_{h \to 0} (2x + h) = 2x
\end{aligned}
$$

Example: Differentiate

$$
\begin{aligned}
(1) f(x) &= (x - 1)^2 + 1 \\
f'(x) &= \lim_{h \to 0} \frac{[(x + h - 1)^2 + 1] - [(x - 1)^2 + 1]}{h} \\
    &= \lim_{h \to 0} \frac{(x - 1)^2 + 2(x - 1)h + h^2 + 1 - (x - 1)^2 - 1}{h} \\
    &= \lim_{h \to 0} \frac{2(x - 1)h + h^2}{h} \\
    &= 2(x - 1)
\end{aligned}
$$

$$
\begin{aligned}
(2) f(x) &= \frac{1}{x} \\
f'(x) &= \lim_{h \to 0} \frac{\frac{1}{x+h} - \frac{1}{x}}{h} \\
    &= \lim_{h \to 0} \frac{\frac{x - (x + h)}{x(x+h)}}{h}  \\
    &= \lim_{h \to 0} \frac{\frac{- h}{x(x+h)}}{h}  \\
    &= \lim_{h \to 0} \frac{-1}{(x+h)x} = \frac{-1}{x^2}
\end{aligned}
$$
