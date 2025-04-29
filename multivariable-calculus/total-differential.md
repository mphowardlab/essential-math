# Total differential
$$
Given:
\begin{align}
f &= \cos(4x+y^2) + x^2y\\
x &= 2u+t\\
y &= t^2
\end{align}
$$
Evaluate:
\begin{align}
(g)\ \left(\frac{\partial f}{\partial t}\right)_u &= \left(\frac{\partial f}{\partial x}\right)_y\left(\frac{\partial x}{\partial t}\right)_u + \left(\frac{\partial f}{\partial y}\right)_x\left(\frac{\partial y}{\partial t}\right)_u\\
\\
&= \left[-4\sin(4x+y^2)+2xy\right](1) + \left[-2y\sin(4x+y^2)+x^2\right](2t)\\
\\
&= \left[-4\sin(8u+4t+t^4)+4ut^2\right](1) + \left[-2t^2\sin(8u+4t+t^4)+(2u+t)^2\right](2t)\\
\\
&= -4\sin(8u+4t+t^4) + 4ut^2 - 4t^3\sin(8u+4t+t^4) + 4t(2u+t)^2\\
\\
&= -4(1+t^2)\sin(8u+4t+t^4) + 16ut^3\\
\\
(h)\ \left(\frac{\partial f}{\partial u}\right)_t &= \left(\frac{\partial f}{\partial x}\right)_y\left(\frac{\partial x}{\partial u}\right)_t + \left(\frac{\partial f}{\partial y}\right)_x\left(\frac{\partial y}{\partial u}\right)_t\\
\\
&= \left[-4\sin(4x+y^2)+2xy\right](2) + \left[-2y\sin(4x+y^2)+x^2\right](0)\\
\\
&= 2\left[-4\sin(4x+y^2)+2xy\right]\\
\\
&= 2\left[-4\sin(8u+4t+t^4)+2(2u+t)t^2\right]\\
\\
&= 2\left[-4\sin(8u+4t+t^4)+4ut^2\right]
\end{align}
