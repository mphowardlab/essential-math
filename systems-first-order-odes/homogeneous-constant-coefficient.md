# Homogeneous linear first-order ODEs with constant coefficients

4. Example: diffusion Cell

Consider a diffusion cell consisting of two compartments with solute concentrations (c_1) and (c_2).
The concentrations change according to
\begin{align}
\frac{dc_1}{dt} &= -0.1c_1 + 0.1c_2 \\
\frac{dc_2}{dt} &= 0.1c_1 - 0.1c_2
\end{align}

\begin{align}
\frac{d\mathbf{c}}{dt} = A \mathbf{c}, \quad \text{where} \quad A = \begin{bmatrix} -0.1 & 0.1 \\ 0.1 & -0.1 \end{bmatrix}
\end{align}
Since A is symmetric, it has real eigenvalues.

\begin{align}
\det(A - \lambda I) = 0
\end{align}

\begin{align}
\begin{vmatrix} -0.1 - \lambda & 0.1 \\ 0.1 & -0.1 - \lambda \end{vmatrix} = (\lambda + 0.1)^2 - (0.1)^2 = \lambda^2 + 0.2\lambda = 0
\end{align}

The eigenvalues are

\begin{align}
\lambda_1 = 0, \quad \lambda_2 = -0.2
\end{align}

To find the eigenvectors 

\begin{align}
A = \begin{bmatrix} -0.1 & 0.1 \\ 0.1 & -0.1 \end{bmatrix}
\end{align}

$\lambda_1 = 0$

\begin{align}
\quad \begin{bmatrix} -0.1 & 0.1 \\ 0.1 & -0.1 \end{bmatrix} \begin{bmatrix} x_1  \end{bmatrix} = \begin{bmatrix} 0 \end{bmatrix} \Rightarrow \quad \mathbf{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
\end{align}

\begin{align}
\left( A - 0I \right) \mathbf{x}_1 = 0 \quad \Rightarrow \quad \mathbf{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
\end{align}

$\lambda_2 = -0.2$
\begin{align}
\left( A + 0.2I \right) \mathbf{x}_2 = 0 \quad \Rightarrow \quad \mathbf{x}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{align}

The general solution is

\begin{align}
\mathbf{c}(t) = a_1 e^{0t} \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 e^{-0.2t} \begin{bmatrix} 1 \\ -1 \end{bmatrix}
= a_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 e^{-0.2t} \begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{align}

For C(0)

\begin{align}
\mathbf{c}(0) = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
= a_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 \begin{bmatrix} 1 \\ -1 \end{bmatrix}
= \begin{bmatrix} a_1 + a_2 \\ a_1 - a_2 \end{bmatrix}
\end{align}

\begin{align}
a_1 = a_2 = 1/2
\end{align}
\begin{align}
\mathbf{c}(t) = \frac{1}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix} + \frac{1}{2} e^{-0.2t} \begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{align}

Therefore, the solution is 

\begin{align}
c_1(t) &= 0.5(1 + e^{-0.2t}) \\ 
c_2(t) &= 0.5(1 - e^{-0.2t})
\end{align}

Notice 
\begin{align}
c_2(t) = 1 - c_1(t)
\end{align}