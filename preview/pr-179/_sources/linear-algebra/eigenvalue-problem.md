# Eigenvalue Problems

````{example} Upper Triangular Matrix

Find the eigenvalues and eigenvectors of the following matrix:
\begin{equation}
\vv{A} = \begin{bmatrix} 4 & 2 \\ 0 & -4 \end{bmatrix}
\end{equation}

Since A is **upper triangular**, the eigenvalues are the diagonal entries:

\begin{align}
\lambda_1 &= 4 \\ 
\lambda_2 &= -4
\end{align}

\begin{equation}
\lambda_1: \begin{bmatrix} 0 & 2 \\ 0 & -8 \end{bmatrix} x_1 = 0 /RightArrow
x_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\end{equation}

For \( \lambda_2 = -4 \):

\[
A - \lambda_2 I = \begin{bmatrix} 8 & 2 \\ 0 & 0 \end{bmatrix}
\quad \Rightarrow \quad \vec{x}_2 = \begin{bmatrix} 1 \\ -4 \end{bmatrix}
\]
````

### (b) 2x2 General Matrix

Let

\[
A = \begin{bmatrix} 5 & -2 \\ 9 & -6 \end{bmatrix}
\]

Compute the characteristic polynomial:

\[
\det(A - \lambda I) = 
\begin{vmatrix} 5 - \lambda & -2 \\ 9 & -6 - \lambda \end{vmatrix}
= \lambda^2 + \lambda - 12 = (\lambda - 3)(\lambda + 4)
\]

\[
\Rightarrow \lambda_1 = 3, \quad \lambda_2 = -4
\]

**Eigenvectors:**

For \( \lambda_1 = 3 \):

\[
A - 3I = \begin{bmatrix} 2 & -2 \\ 9 & -9 \end{bmatrix}
\quad \Rightarrow \quad \vec{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
\]

For \( \lambda_2 = -4 \):

\[
A + 4I = \begin{bmatrix} 9 & -2 \\ 9 & -2 \end{bmatrix}
\quad \Rightarrow \quad \vec{x}_2 = \begin{bmatrix} 2 \\ 9 \end{bmatrix}
\]

---

### (c) 3x3 Symmetric Matrix

Let

\[
A = \begin{bmatrix}
6 & 2 & -2 \\
2 & 5 & 0 \\
-2 & 0 & 7
\end{bmatrix}
\]

The characteristic polynomial is:

\[
\det(A - \lambda I) = -\lambda^3 + 18\lambda^2 - 99\lambda + 162
\]

\[
\Rightarrow \lambda_1 = 9, \quad \lambda_2 = 6, \quad \lambda_3 = 3
\]

**Eigenvectors:**

For \( \lambda_1 = 9 \):

\[
A - 9I = \begin{bmatrix} -3 & 2 & -2 \\ 2 & -4 & 0 \\ -2 & 0 & -2 \end{bmatrix}
\quad \Rightarrow \quad \vec{x}_1 = \begin{bmatrix} -2 \\ -1 \\ 2 \end{bmatrix}
\]

For \( \lambda_2 = 6 \):

\[
A - 6I = \begin{bmatrix} 0 & 2 & -2 \\ 2 & -1 & 0 \\ -2 & 0 & 1 \end{bmatrix}
\quad \Rightarrow \quad \vec{x}_2 = \begin{bmatrix} 1 \\ 2 \\ 2 \end{bmatrix}
\]

For \( \lambda_3 = 3 \):

\[
A - 3I = \begin{bmatrix} 3 & 2 & -2 \\ 2 & 2 & 0 \\ -2 & 0 & 4 \end{bmatrix}
\quad \Rightarrow \quad \vec{x}_3 = \begin{bmatrix} 2 \\ -2 \\ 1 \end{bmatrix}
\]