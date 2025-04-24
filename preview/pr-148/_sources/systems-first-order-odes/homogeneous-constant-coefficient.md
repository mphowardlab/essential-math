# Homogeneous linear first-order ODEs with constant coefficients





## Skill Builder
C)


$
A = \begin{bmatrix}
0 & 4 \\
-4 & 0
\end{bmatrix}
$

To find the eigenvalues:
$
|A - λI| = 
\(
\left| \begin{array}{cc}
-\lambda & 4 \\
-4 & -\lambda
\end{array} \right|
= \lambda^2 + 16 = 0 \Rightarrow \lambda_{1,2} = \pm 4i
\)

For \( λ = 4i \):

\(
\begin{bmatrix}
-4i & 4 \\
-4 & -4i
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}
= \mathbf{0} \Rightarrow \mathbf{x}_1 = \begin{bmatrix} -i \\ 1 \end{bmatrix}
\)


For \( $\lambda_2$ = -4i \):
$
\begin{bmatrix}
4i & 4 \\
-4 & 4i
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}
= 0 ⟹ x₂ = [ i, 1 ]ᵀ

**General Solution:**
$
\mathbf{y} = c_1 e^{4it} \begin{bmatrix}
-i \\
1
\end{bmatrix}
+ c_2 e^{-4it} \begin{bmatrix}
i \\
1
\end{bmatrix}
$