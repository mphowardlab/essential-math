# Variation of parameters
Solve the differential equation

\begin{equation}
y'' - 4y' + 4y = x^{2} e^{x}
\end{equation}

**Homogeneous:**

\begin{equation}
y'' - 4y' + 4y = 0
\end{equation}

\begin{equation}
\lambda^2 - 4\lambda + 4 = 0 \Rightarrow (\lambda - 2)^2 = 0 \Rightarrow \lambda = 2
\end{equation}

\begin{equation}
y = (C_1 + C_2 x) e^{2x}
\end{equation}

**Particular:**

\begin{align}
y_1   &= e^{2x}          &\quad\quad& y_2   &= x e^{2x} \\
y_1'  &= 2 e^{2x}        &         & y_2'  &= (1 + 2x) e^{2x}
\end{align}

\[
W = \begin{matrix}
y_1 & y_2 \\
y_1' & y_2'
\end{matrix}
= \begin{matrix}
e^{2x} & x e^{2x} \\
2 e^{2x} & (1 + 2x) e^{2x}
\end{matrix}
= (1 + 2x) e^{4x} - 2x e^{4x} = e^{4x}
\]

\begin{equation}
y_p = -e^{2x} \int \frac{x e^{2x} (x^{2} e^{2x})}{e^{4x}} \, dx + x e^{2x} \int \frac{e^{2x} (x^{2} e^{2x})}{e^{4x}} \, dx
\end{equation}

\begin{equation}
y_p = -e^{2x} \int x^{3} e^{-x} \, dx + x e^{2x} \int x^{2} e^{-x} \, dx
\end{equation}

\begin{align}
\text{u} & \quad \text{dv} \quad & \quad \quad \text{u} & \quad \text{dv} \\
x^{3}   & \quad e^{-x}  & \quad x^{2} & \quad e^{-x} \\
3x^{2}  & \quad -e^{-x} & \quad 2x    & \quad -e^{-x} \\
6x      & \quad e^{-x}  & \quad 2     & \quad e^{-x} \\
6       & \quad -e^{-x} & \quad 0     & \quad -e^{-x} \\
0       & \quad e^{-x}  & \quad 0     & \quad e^{-x} \\
\end{align}