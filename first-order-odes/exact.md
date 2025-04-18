# Exact differential equations

## Skill Builders

Obtain general solutions to:

````{example} -2xysin($x^2$)dx + cos($x^2$)dy = 0

\begin{align}
P = -2xysin(x^2) \\
Q = cos(x^2) \\
\end{align}

Check to see if the function is exact:

\begin{align}
\frac{\partial P}{\partial y} = -2xsin(x^2) \\
\frac{\partial Q}{\partial x} = -2xsin(x^2) \\
\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} \\
\end{align}

The function is exact, so you can proceed directly to integration.

\begin{align}
f(x,y) = \int cos(x^2)dy \\
f(x,y) = ycos(x^2) + k(x) \\
\frac{\partial f}{\partial x} = -2xysin(x^2) + k' = P \\
-2xysin(x^2) + k' = -2xysin(x^2) \\
k' = 0, k = C^* \\
ycos(x^2) + C^* = C \\
y = \frac{C}{cos(x^2)}
\end{align}
````

````{example} y' = $\frac{x^4 + y^2}{xy}$

\begin{align}
(x^4 + y^2)dx - xydy = 0 \\
P = x^4 + y^2 \\
Q = -xy \\
\end{align}

Check to see if the function is exact:

\being{align}
\frac{\partial P}{\partial y} = 2y \\
\frac{\partial Q}{\partial x} = -y \\
\frac{\partial P}{\partial y} \ne \frac{\partial Q}{\partial x} \\
\end{align}

The function is not exact, so we need to find an integrating factor:

\begin{align}
R = \frac{1}{-xy}(2y-(-y)) = \frac{3y}{-xy} = \frac{-3}{x} \\
F = e^{\int \frac{-3}{x}} = e^{-3ln(x)} = x^{-3} \\
x^{-3}(x^4+y^2)dx - x^{-3}(xy)dy = 0 \\
(x+\frac{y^2}{x^{-3}})dx - \frac{y}{x^2}dy = 0 \\
f(x,y) = \int -\frac{y}{x^2}dy = \frac{-y^2}{2x^2}+k(x) \\
\frac{\partial f}{\partial x} = \frac{y^2}{x^3} + k'(x) = x + \frac{y^2}{x^3} \\
k'(x) = x \\
\int xdx = \frac{x^2}{2} + C^* \\
\frac{x^2}{2} - \frac{y^2}{2x^2} + C^* = C \\
\frac{x^2}{2} - \frac{y^2}{2x^2} + = C
\end{align}
````