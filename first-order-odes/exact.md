# Exact differential equations
### Skill Builders
Obtain general solutions to:

\begin{align}
-2xysin(x^2)dx + cos(x^2)dy = 0 \\
P = -2xysin(x^2) \\
Q = cos(x^2) \\
\frac{\partial P}{\partial y} = -2xsin(x^2) \\
\frac{\partial Q}{\partial x} = -2xsin(x^2) \\
\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} \\
f(x,y) = \int cos(x^2)dy = ycos(x^2) + k(x) \\
\frac{\partial f}{\partial x} = -2xysin(x^2) + k' = -2xysin(x^2) \\
k' = 0, k = c^* \\
ycos(x^2) + c^* = C \\
y = \frac{C}{cos(x^2)}
\end{align}

\begin{align}
y' = \frac{x^4 + y^2}{xy} \\
(x^4 + y^2)dx - xydy = 0 \\
P = x^4 + y^2 \\
Q = -xy \\
\frac{\partial P}{\partial y} = 2y \\
\frac{\partial Q}{\partial x} = -y \\
\frac{\partial P}{\partial y} \ne \frac{\partial Q}{\partial x} \\
R = \frac{1}{-xy}(2y-(-y)) = \frac{3y}{-xy} = \frac{-3}{x} \\
F = e^{\int \frac{-3}{x}} = e^{-3ln(x)} = x^{-3} \\
x^{-3}(x^4+y^2)dx - x^{-3}xydy = 0 \\
(x+\frac{y^2}{x^{-3}})dx - \frac{y}{x^2}dy = 0 \\
f(x,y) = \int -\frac{y}{x^2}dy = -\frac{1}{2}\frac{y^2}{x^2}+k(x) \\
\frac{\partial f}{\partial x} = \frac{y^2}{x^3} + k'(x) = x + \frac{y^2}{x^3} \\
k'(x) = x \\
\int xdx = \frac{x^2}{2} + C^* \\
\frac{x^2}{2} - \frac{y^2}{2x^2} + C^* = C \\
\frac{x^2}{2} - \frac{y^2}{2x^2} + = C
\end{align}