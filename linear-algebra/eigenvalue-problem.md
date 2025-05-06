# Eigenvalue problem

Find the eigenvalues and eigenvectors of the following matrices:

1. \begin{equation}
\vv{A} = \begin{bmatrix} 4 & 2 \\ 0 & -4 \end{bmatrix}
\end{equation}

```{solution}
Since A is **upper triangular**, the eigenvalues are the diagonal entries:

\begin{align}
\lambda_1 &= 4 \\ 
\lambda_2 &= -4
\end{align}

Then, use these eigenvalues to find the eigenvectors:

\begin{equation}
\lambda_1 = 4: \begin{bmatrix} 0 & 2 \\ 0 & -8 \end{bmatrix} x_1 = 0 
\longrightarrow
x_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
\end{equation}

\begin{equation}
\lambda_2 = -4: \begin{bmatrix} 8 & 2 \\ 0 & 0 \end{bmatrix} x_2 = 0 
\longrightarrow
x_2 = \begin{bmatrix} 1 \\ -4 \end{bmatrix}
\end{equation}

So.
\begin{align}
\lambda_1 &= 4 \\
x_1 &= \begin{bmatrix} 1 \\ 0 \end{bmatrix} \\
\lambda_2 &= -4 \\
x_2 &= \begin{bmatrix} 1 \\ -4 \end{bmatrix}
\end{align}
````

````{example} b. 2x2 General Matrix

Find the eigenvalues and eigenvectors of the following matrix:
\begin{equation}
\vv{A} = \begin{bmatrix} 5 & -2 \\ 9 & -6 \end{bmatrix}
\end{equation}

First, find the eigenvalues:

\begin{equation}
|A-\lambda I| = \begin{bmatrix} 5 - \lambda & -2 \\ 9 & -6 - \lambda \end{bmatrix} 
\end{equation}

\begin{equation}
(\lambda - 5)(\lambda + 6) + 18 = \lambda^2 + \lambda - 12 = (\lambda + 4)(\lambda - 3) = 0
\end{equation}

\begin{align}
\lambda_1 &= 3 \\
\lambda_2 &= -4
\end{align}

Then, use these eigenvalues to find the eigenvectors:

\begin{equation}
\lambda_1 = 3: \begin{bmatrix} 2 & -2 \\ 9 & -9 \end{bmatrix} x_1 = 0 
\longrightarrow
x_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
\end{equation}

\begin{equation}
\lambda_2 = -4: \begin{bmatrix} 9 & -2 \\ 9 & -2 \end{bmatrix} x_2 = 0 
\longrightarrow
x_2 = \begin{bmatrix} 2 \\ 9 \end{bmatrix}
\end{equation}
````

````{example} c. 3x3 Matrix

Find the eigenvalues and eigenvectors of the following matrix:

\begin{equation}
\vv{A} = \begin{bmatrix} 6 & 2 & -2 \\ 2 & 5 & 0 \\ -2 & 0 & 7 \end{bmatrix}
\end{equation}

First, find the eigenvalues:

\begin{equation}
|A-\lambda I| = \begin{bmatrix} 6 - \lambda & 2 & -2 \\ 2 & 5 - \lambda & 0 \\ -2 & 0 & 7 - \lambda \end{bmatrix} = -2 \begin{bmatrix} 2 & -2 \\ 0 & 7 - \lambda \end{bmatrix} + (5 - \lambda) \begin{bmatrix} 6 - \lambda & -2 \\ -2 & 7 - \lambda \end{bmatrix}
\end{equation}

\begin{equation}
(-2)(2)(7 - \lambda) + (5 - \lambda)[(\lambda - 6)(\lambda - 7) - 4] = -\lambda^3 + 18\lambda^2 - 99\lambda + 162 = 0
\end{equation}

\begin{align}
\lambda_1 &= 9 \\
\lambda_2 &= 6 \\
\lambda_3 &= 3
\end{align}

Then, use these eigenvalues to find the eigenvectors:

\begin{equation}
\lambda_1 = 9: \begin{bmatrix} -3 & 2 & -2 \\ 2 & -4 & 0 \\ -2 & 0 & -2 \end{bmatrix} x_1 = 0
\end{equation}
Reduce the row and choose: 
\begin{align} 
x_3 &= 2 
\end{align}
\begin{equation}
\begin{bmatrix} 1 & -2 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 0 \end{bmatrix} x_1 = 0
\longrightarrow
x_1 = \begin{bmatrix} -2 \\ -1 \\ 2 \end{bmatrix}
\end{equation}

\begin{equation}
\lambda_2 = 6: \begin{bmatrix} 0 & 2 & -2 \\ 2 & -1 & 0 \\ -2 & 0 & 1 \end{bmatrix} x_2 = 0
\end{equation}
Reduce the row and choose: 
\begin{align} 
x_3 &= 2 
\end{align}
\begin{equation}
\begin{bmatrix} -2 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix} x_2 = 0
\longrightarrow
x_2 = \begin{bmatrix} 1 \\ 2 \\ 2 \end{bmatrix}
\end{equation}

\begin{equation}
\lambda_3 = 3: \begin{bmatrix} 3 & 2 & -2 \\ 2 & 2 & 0 \\ -2 & 0 & 4 \end{bmatrix} x_3 = 0
\end{equation}
Reduce the row and choose: 
\begin{align} 
x_3 &= 1 
\end{align}
\begin{equation}
\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{bmatrix} x_3 = 0
\longrightarrow
x_3 = \begin{bmatrix} 2 \\ -2 \\ 1 \end{bmatrix}
\end{equation}
````