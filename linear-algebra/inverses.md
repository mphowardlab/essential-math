# Matrix inversion
Gauss-Jordan elimination works well for solving \( Ax = b \) but the process needs to be repeated for every new b.

Is there an alternative if we need to solve \( Ax = b \) for many different b?

Matrix inverse. For a square (nxn) matrix A, the inverse A^{-1} satisfies

\(A*A^{-1}= A^{-1}*A = I \) where I is the nxn identity matrix 

begin{array}{ccc}
1 & 0 \\
0 & 1
\end{array}
\right]

A matrix is "nonsingular" if it has an inverse, and "singular" if it does not.

If the inverse exists, it is unique and can be used to solve \( Ax = b \)

\( Ax = b \) \( A \rightarrow B \) \((A^{-1}A)x = A^(-1)b\) \( A \rightarrow B \) 
\[
\boxed{x=A^{-1}b}
\]

(\(Ib = b\) if the multiplication is defined.)



Two questions:
1. How do we know if A^{-1} exists (A is non singular)?
 \( A \rightarrow B \) Determinants

2. How do we compute A^{-1}?
\( A \rightarrow B \) Gauss-Jordan elimination




2. Inverse

Finding the inverse of a is usually hard. There is a general definition using coafactors that we will not cover becuase it is hard to apply. There are also serveral numeric techniques, but we will not cover them because they are computationally intensive. Instead we will cover two options:

For a 2x2 matrix 

A = \[
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\],

\[
\boxed{A^{-1} = \frac{1}{|A|} \[
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\]}\]

(flip a+d, change signs of b+c)

Ex: 

A = \[
\begin{bmatrix}
3 & 1 \\
2 & 4
\end{bmatrix}
\]

\[A^{-1} = \frac{1}{10}
\begin{bmatrix}
4 & -1 \\
-2 & 3
\end{bmatrix}
=
\begin{bmatrix}
0.4 & -0.1 \\
-0.2 & 0.3
\end{bmatrix}
\]

|A| = 12-2 = 10

Verify:

\[
A \cdot A^{-1} = \frac{1}{10}
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
12-2 & 4-4 \\
-6+6 & -2+12
\end{bmatrix}
=
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\]

For bigger matricies, use the Gauss-Jordan methos to solve 

\( A \cdot A^{-1} = I \) (generalization of \( Ax = b \))

\begin{itemize}
  \item Form augmentd matrix \[
[A \; | \; I]
\] (nx2n)
  \item Perform row operations to bring left side to I, so \[
[I \; | \; A^{-1}]
\]
  \item May be helpful to check \[
|A| \neq 0
\] first in case A is not invertable. 
\end{itemize}