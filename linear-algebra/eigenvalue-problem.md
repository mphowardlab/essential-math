# Eigenvalue problem

## Multiple eigenvalues

An *n* x *n* matrix has *n* eigenvalues, but they may not be distinct! For
example, consider the matrix:

\begin{equation}
\vv{A} =
\begin{bmatrix}
-2 & 2 & -3 \\
2 & 1 & -6 \\
-1 & -2 & 0
\end{bmatrix}
\end{equation}

We need to evaluate the determinant:

\begin{align}
|\vv{A} - \lambda  \vv{I}| &=
\begin{vmatrix}
-2-\lambda & 2 & -3 \\
2 & 1-\lambda & -6 \\
-1 & -2 & -\lambda
\end{vmatrix} \\
&=

-1
\begin{vmatrix}
2 & -3 \\
1-\lambda & -6
\end{vmatrix}

-(-2)
\begin{vmatrix}
-2-\lambda & -3 \\
2 & -6
\end{vmatrix}

-\lambda
\begin{vmatrix}
-2-\lambda & 2 \\
2 & 1-\lambda
\end{vmatrix} \\

&= -[-12+3(1-\lambda)]+2[6(2+\lambda)+6]-\lambda[(\lambda+2)(\lambda-1)-4] \\
&= -\lambda^3-\lambda^2+21\lambda+45 = 0
\end{align}

The roots of this cubic polynomial are $\lambda_1 = 5$ and
$\lambda_2 = \lambda_3 = -3$. The eigenvector for $\lambda_1 = 5$ is obtained
from

\begin{equation}
\vv{A} - \lambda_1 \vv{I} =
\begin{bmatrix}
-7 & 2 & -3 \\
2 & -4 & -6 \\
-1 & -2 & -3
\end{bmatrix}
\to\to
\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 2 \\
0 & 0 & 0
\end{bmatrix}
\end{equation}

This matrix is equivalent to the system of equations:

\begin{align}
x_1 + x_3 &= 0 \\
x_2 + 2 x_3 &= 0
\end{align}

with $x_3$ free. Choosing $x_3 = -1$ gives

\begin{equation}
\vv{x}_1 =
\begin{bmatrix}
1 \\
2  \\
-1
\end{bmatrix}
\end{equation}

The eigenvectors for $\lambda_2 = \lambda_3 = -3$ are obtained from

\begin{equation}
\vv{A} - \lambda_2 \vv{I} =
\begin{bmatrix}
1 & 2 & -3 \\
2 & 4 & -6 \\
-1 & -2 & 3
\end{bmatrix}
\to\to
\begin{bmatrix}
1 & 2 & -3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
\end{equation}

This matrix is equivalent to

\begin{equation}
x_1 + 2x_2 - 3x_3 = 0
\end{equation}

with $x_2$ and $x_3$ free. Choosing $x_2 = 1$ and $x_3 = 0$ gives one
eigenvector

\begin{equation}
\vv{x}_2 =
\begin{bmatrix}
-2 \\
1 \\
0
\end{bmatrix}
\end{equation}

while choosing an independent combination $x_2 = 0$ and $x_3 = 1$ gives

\begin{equation}
\vv{x}_3 =
\begin{bmatrix}
3 \\
0 \\
1
\end{bmatrix}
\end{equation}

## Complex eigenvalues

Matrices may have complex eigenvaules. They always come in conjugate pairs!

$$
\\vv{A} =
\begin{bmatrix}
0 & 1 \\
-1 & 0
\end{bmatrix}
$$

$$
| \vv{A} - \lambda  \vv{I}| =
\begin{vmatrix}
-\lambda & 1 \\
-1 & \lambda
\end{vmatrix} =
\lambda^2 + 1 = 0 \to \lambda_1 =i , \lambda_2 = -i
$$

$$
\lambda_1 = i:
\begin{bmatrix}
-i & 1 \\
-1 & i
\end{bmatrix}
\to
\begin{bmatrix}
-i & 1 \\
0 & 0
\end{bmatrix}
$$

$$
-ix_1 + x_2 = 0
\to
\vv{x_1} =
\begin{bmatrix}
1 \\
i
\end{bmatrix}
$$

$$
\lambda_2 = -i:
\begin{bmatrix}
i & 1 \\
-1 & i
\end{bmatrix}
\to
\vv{x_2} =
\begin{bmatrix}
1 \\
-i
\end{bmatrix}
$$

## Useful tricks

- The eigenvaules of upper triangular matrices are the values on the diagonal.
  For example, the matrix

  \begin{equation}
  \begin{bmatrix}
  1 & 4 & 5 \\
  0 & 2 & 6 \\
  0 & 0 & 3
  \end{bmatrix}
  \end{equation}

  has $\lambda_1 = 1$, $\lambda_2 = 2$, and $\lambda_3 = 3$ as eigenvalues.

- The transpose $\vv{A}^{\rm T}$ has the same eigenvalues as $\vv{A}$. For
  example, the matrix:

  \begin{equation}
  \begin{bmatrix}
  1 & 0 & 0 \\
  4 & 2 & 0 \\
  5 & 6 & 3
  \end{bmatrix}
  \end{equation}

  also has $\lambda_1 = 1$, $\lambda_2 = 2$, and $\lambda_3 = 3$ as eigenvalues
  because it is the transpose of the matrix above.

  Note that this means that the eigenvalues of *lower* triangular matrices are
  also the values on the diagonal!

- If **A** is symmetric ($\vv{A}^{\rm T} = \vv{A}$), its eigenvalues are real.
- If **A** is skew-symmetric ($\vv{A}^{\rm T} = -\vv{A}$), its eigenvalues are
  purely imaginary.
