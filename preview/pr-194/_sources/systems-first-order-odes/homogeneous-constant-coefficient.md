# Homogeneous linear first-order ODEs with constant coefficients

Example 4: Diffusion Cell

We consider a diffusion cell consisting of two compartment with solute concentrations (c_1) and (c_2).
The consentrations change according to:
\begin{align}
\frac{dc_1}{dt} &= -0.1c_1 + 0.1c_2 \\
\frac{dc_2}{dt} &= 0.1c_1 - 0.1c_2
\end{align}



\begin{align}
\frac{d\mathbf{c}}{dt} = A \mathbf{c}, \quad \text{where} \quad A = \begin{bmatrix} -0.1 & 0.1 \\ 0.1 & -0.1 \end{bmatrix}
\end{align}
Since A is symmetric, it has real eigenvalues. We solve:

\begin{align}
\det(A - \lambda I) = 0
\end{align}

\begin{vmatrix} -0.1 - \lambda & 0.1 \\ 0.1 & -0.1 - \lambda \end{vmatrix} = (\lambda + 0.1)^2 - (0.1)^2 = \lambda^2 + 0.2\lambda = 0

The eigenvalues are:

\begin{align}
\lambda_1 = 0, \quad \lambda_2 = -0.2
\end{align}

To find the eigenvectors: 

For ( \lambda_1 = 0)

\begin{align}
\left( A - 0I \right)  \mathbf{x}_1 = 0 \quad \Rightarrow \quad \mathbf{x}_1 = \begain{bmatrix} 1 \\ 1 \end{bmatrix} \end{align}

For ( \lambda_2 = -0.2)

\begin{align}
\left( A - -0.2I \right)  \mathbf{x}_1 = 0 \quad \Rightarrow \quad \mathbf{x}_1 = \begain{bmatrix} 1 \\ -1 \end{bmatrix} \end{align} = \mathbf{x}(t) = a_1 exp^{0t} \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 exp^{-0.2t} \begin{bmatrix} 1 \\ -1 \end{bmatrix}
 \end{align}

The general solution is

\begin{align}
\mathbf{c}(t) = a_1 exp^{0t} \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 exp^{-0.2t} \begin{bmatrix} 1 \\ -1 \end{bmatrix}
= a_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 exp^{-0.2t} \begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{align}