# Systems of first-order ordinary differential equations

This module covers topics in solving systems of first-order ordinary
differential equations.

```{tableofcontents}
```


```{example} Solve the IVP 

\begin{align}
y_1' = 1-2y_1 \\
y_1(0) = 0 
\end{align}

\begin{align}
y_2' = 2y_1 - y_1y_2 \\
y_2(0) = 0 
\end{align}

\begin{align}
\int \frac{dy_1}{1-2y_1} = \int dx \\
-\frac{1}{2} \ln{1-2y_1} = x + C_0 \\
\ln{1-2y_1} = -2x + C_1 \\
1 - 2y_1 = C_2e^{-2x} \\
y_1 = \frac{1}{2} (1-C_2e^{-2x}) \\
0 = y_1(0) = \frac{1}{2}(1-C_2) \\
C_2 = 1 \\
y_1 = \frac{1}{2} (1-e^{-2x})
\end{align}

Then, solve for y_2 knowing y_1
\begin{align}
y_2' = y_1(2-y_2)
\int \frac{dy_2}{2-y_2} = \int y_1dx = \int \frac{1}{2}(1-e^{-2x})dx \\
-\ln{2-y_2} = \frac{1}{2}(x + \frac{1}{2}e^{-2x}) +C_0\\
2 - y_2 = C_1 exp([-\frac{1}{2}(x+ \frac{1}{2}e^{-2x})]) \\
y_2 = 2 - C_1 exp([-\frac{1}{2}(x+\frac{1}{2}e^{-2x})]) \\
0 = y_2(0) = 2 - C_1 e^{-\frac{1}{4}} \\
C_1 = 2e^{\frac{1}{4}} \\
y_2 = 2[1-exp(\frac{1}{4}-\frac{x}{2}-\frac{1}{4}e^{-2x})]
\end{align}