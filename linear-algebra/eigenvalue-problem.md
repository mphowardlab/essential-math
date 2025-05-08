# Eigenvalue problem

For an n\timesn square matrix $\underline{\underline{A}$}  , there is a scalar \lambda 
and vector \underline{x} such that :


\begin{align}
\underline{\underline{A}}   \underline{x} =\lambda\underline{x} 
\end{align}







## Skill builder problems

Find the eigenvalues and eigenvectors

1. For:

   \begin{equation}
   \vv{A} = \begin{bmatrix} 4 & 2 \\ 0 & -4 \end{bmatrix}
   \end{equation}

   ```{solution}
   Since **A** is upper triangular, the eigenvalues are the diagonal entries,
   $\lambda_1 = 4$ and $\lambda_2 = -4$. Then, use these eigenvalues to find
   the eigenvectors that solve $(\vv{A}-\lambda \vv{I})\vv{x} = \vv{0}$.

   For $\lambda_1 = 4$,

   \begin{equation}
   \vv{A}-\lambda_1\vv{I} =
   \begin{bmatrix} 0 & 2 \\ 0 & -8 \end{bmatrix}
   \to \vv{x}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
   \end{equation}

   For $\lambda_2 = -4$,

   \begin{equation}
   \vv{A}-\lambda_2\vv{I} =
   \begin{bmatrix} 8 & 2 \\ 0 & 0 \end{bmatrix}
   \to \vv{x}_2 = \begin{bmatrix} 1 \\ -4 \end{bmatrix}
   \end{equation}
   ```

2. For:

   \begin{equation}
   \vv{A} = \begin{bmatrix} 5 & -2 \\ 9 & -6 \end{bmatrix}
   \end{equation}

   ```{solution}
   First, find the eigenvalues:

   \begin{align}
   |\vv{A}-\lambda \vv{I}|
   &= \begin{vmatrix} 5 - \lambda & -2 \\ 9 & -6 - \lambda \end{vmatrix} \\
   &= (\lambda - 5)(\lambda + 6) + 18 \\
   &= \lambda^2 + \lambda - 12 \\
   &= (\lambda - 3)(\lambda + 4) = 0
   \end{align}

   So, $\lambda_1 = 3$ and $\lambda_2 = -4$. For $\lambda_1 = 4$,

   \begin{equation}
   \vv{A}-\lambda_1\vv{I} =
   \begin{bmatrix} 2 & -2 \\ 9 & -9 \end{bmatrix}
   \to \vv{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
   \end{equation}

   For $\lambda_2 = -4$,

   \begin{equation}
   \vv{A}-\lambda_2\vv{I} =
   \begin{bmatrix} 9 & -2 \\ 9 & -2 \end{bmatrix}
   \to \vv{x}_2 = \begin{bmatrix} 2 \\ 9 \end{bmatrix}
   \end{equation}
   ```

3. For:

   \begin{equation}
   \vv{A} = \begin{bmatrix} 6 & 2 & -2 \\ 2 & 5 & 0 \\ -2 & 0 & 7 \end{bmatrix}
   \end{equation}

   ```{solution}
   First, find the eigenvalues:

   \begin{align}
   |\vv{A}-\lambda \vv{I}|
   &= \begin{vmatrix}
   6 - \lambda & 2 & -2 \\
   2 & 5 - \lambda & 0 \\
   -2 & 0 & 7 - \lambda
   \end{vmatrix} \\
   &= -2 \begin{vmatrix} 2 & -2 \\ 0 & 7 - \lambda \end{vmatrix} +
     (5 - \lambda)
     \begin{vmatrix} 6 - \lambda & -2 \\ -2 & 7 - \lambda \end{vmatrix} \\
   &= -2 \cdot 2(7 - \lambda) + (5 - \lambda)[(\lambda - 6)(\lambda - 7) - 4] \\
   &= -\lambda^3 + 18\lambda^2 - 99\lambda + 162 = 0
   \end{align}

   Solving for these roots numerically gives $\lambda_1 = 9$, $\lambda_2 = 6$,
   and $\lambda_3 = 3$.

   For $\lambda_1 = 9$, using row reduction gives

   \begin{equation}
   \vv{A}-\lambda_1\vv{I} =
   \begin{bmatrix}
   -3 & 2 & -2 \\
   2 & -4 & 0 \\
   -2 & 0 & -2
   \end{bmatrix}
   \to\to
   \begin{bmatrix}
   1 & 0 & 1 \\
   0 & 2 & 1 \\
   0 & 0 & 0
   \end{bmatrix}
   \end{equation}

   Choosing $x_3 = 2$ as the free variable gives

   \begin{equation}
   \vv{x}_1 = \begin{bmatrix} -2 \\ -1 \\ 2 \end{bmatrix}
   \end{equation}

   For $\lambda_2 = 6$, using row reduction gives

   \begin{equation}
   \vv{A}-\lambda_2\vv{I} =
   \begin{bmatrix}
   0 & 2 & -2 \\
   2 & -1 & 0 \\
   -2 & 0 & 1
   \end{bmatrix}
   \to\to
   \begin{bmatrix}
   -2 & 0 & 1 \\
   0 & 1 & -1 \\
   0 & 0 & 0
   \end{bmatrix}
   \end{equation}

   Taking $x_3 = 2$ as the free v ariable gives:

   \begin{equation}
   \vv{x}_2 = \begin{bmatrix} 1 \\ 2 \\ 2 \end{bmatrix}
   \end{equation}

   For $\lambda_3 = 3$, using row reduction gives

   \begin{equation}
   \vv{A}-\lambda_3\vv{I} =
   \begin{bmatrix}
   3 & 2 & -2 \\
   2 & 2 & 0 \\
   -2 & 0 & 4
   \end{bmatrix}
   \to\to
   \begin{bmatrix}
   1 & 0 & -2 \\
   0 & 1 & 2 \\
   0 & 0 & 0
   \end{bmatrix}
   \end{equation}

   Choosing $x_3 = 1$ as the free variable gives:

   \begin{equation}
   \vv{x}_3 = \begin{bmatrix} 2 \\ -2 \\ 1 \end{bmatrix}
   \end{equation}
   ```
