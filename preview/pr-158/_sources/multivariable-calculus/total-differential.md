# Total differential
Given:
\begin{align}
f &= \cos(4x+y^2) + x^2y\\
x &= 2u+t\\
y &= t^2
\end{align}

Evaluate:
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
