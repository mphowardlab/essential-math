# Homogeneous linear first-order ODEs with constant coefficients

###4. Example: Diffusion Cell

We consider a diffusion cell consisting of two compartment with solute concentrations (c_1) and (c_2).
The consentrations change according to:
\begin{align}
\frac{dc_1}{dt} &= -0.1c_1 + 0.1c_2 \\
\frac{dc_2}{dt} &= 0.1c_1 - 0.1c_2
\end{align}
Or, in matrix form:
\[
\frac{d\mathbf{c}}{dt} = A \mathbf{c}, \quad \text{where} \quad A = \begin{bmatrix} -0.1 & 0.1 \\ 0.1 & -0.1 \end{bmatrix}
\]
Since \( A \) is symmetric, it has real eigenvalues. We solve:
\[
\det(A - \lambda I) = 0
\]
\[
\begin{vmatrix} -0.1 - \lambda & 0.1 \\ 0.1 & -0.1 - \lambda \end{vmatrix} = (\lambda + 0.1)^2 - (0.1)^2 = \lambda^2 + 0.2\lambda = 0
\]
Thus, the eigenvalues are:
\[
\lambda_1 = 0, \quad \lambda_2 = -0.2
\]

Eigenvectors: 
