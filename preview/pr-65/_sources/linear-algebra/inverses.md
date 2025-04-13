# Matrix inversion
Gauss-Jordan elimination works well for solving  Ax = b  but the process needs to be repeated for every new b.

Is there an alternative if we need to solve  Ax = b  for many different b?

Matrix inverse. For a square (nxn) matrix A, the inverse \(A^{-1}\) satisfies

\[
A A^{-1} = A^{-1} A = I
\] where I is the nxn identity matrix 

\[
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\]

A matrix is "nonsingular" if it has an inverse, and "singular" if it does not.

If the inverse exists, it is unique and can be used to solve  Ax = b 

\[
Ax = b \quad \Rightarrow \quad (A^{-1} \cdot A) x = A^{-1} \cdot b \quad \Rightarrow \quad \boxed{x = A^{-1} b}
\]

(\(Ib = b\) if the multiplication is defined.)



Two questions:
1. How do we know if A^{-1} exists (A is non singular)?
 \( \rightarrow Determinants \) 

2. How do we compute A^{-1}?
\( \rightarrow Gauss-Jordan elimination \) 





2: Inverse

Finding the inverse of a is usually hard. There is a general definition using coafactors that we will not cover becuase it is hard to apply. There are also serveral numeric techniques, but we will not cover them because they are computationally intensive. Instead we will cover two options:

For a 2x2 matrix 

A = \[
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\],

\begin{itemize}
    \item For a $2 \times 2$ matrix $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$,
    \[
    A^{-1} = \frac{1}{|A|} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
    \quad \text{(flip $a$ and $d$, change signs of $b$ and $c$)}
    \]
\end{itemize}

\textbf{Example:} 
\[
A = \begin{bmatrix} 3 & 1 \\ 2 & 4 \end{bmatrix}
\]

\[
|A| = 3 \cdot 4 - 2 \cdot 1 = 12 - 2 = 10
\] 
\[
A^{-1} = \frac{1}{10} \begin{bmatrix} 4 & -1 \\ -2 & 3 \end{bmatrix}
= \begin{bmatrix} 0.4 & -0.1 \\ -0.2 & 0.3 \end{bmatrix}
\]


\textbf{Verify:}
\[
A^{-1}A = \frac{1}{10} 
\begin{bmatrix}
4 & -1 \\
-2 & 3
\end{bmatrix}
\begin{bmatrix}
3 & 1 \\
2 & 4
\end{bmatrix}
= \frac{1}{10}
\begin{bmatrix}
4 \cdot 3 + (-1) \cdot 2 & 4 \cdot 1 + (-1) \cdot 4 \\
-2 \cdot 3 + 3 \cdot 2 & -2 \cdot 1 + 3 \cdot 4
\end{bmatrix}
= \frac{1}{10}
\begin{bmatrix}
12 - 2 & 4 - 4 \\
-6 + 6 & -2 + 12
\end{bmatrix}
= \frac{1}{10}
\begin{bmatrix}
10 & 0 \\
0 & 10
\end{bmatrix}
=
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\]

For larger matrices, use the \textbf{Gauss-Jordan method} to solve
\[
AA^{-1} = I \quad \text{(Generalization of } Ax = b \text{)}
\]

\begin{itemize}
    \item Form augmented matrix $\left[ A \,|\, I \right]$ \quad (an $n \times 2n$ matrix)
    \item Perform row operations to bring the left side to $I$, so that:
    \[
    \left[ I \,|\, A^{-1} \right]
    \]
    \item It may be helpful to check that $|A| \neq 0$ first, in case $A$ is not invertible.
\end{itemize}