# Eigenvalue problem


For an *n* x *n* square matrix $ \vv{A} $  , there is a scalar $\lambda$ 
and vector $\underline{x}$ such that :



\begin{align}
\vv{A}   \underline{x} =\lambda\underline{x} 
\end{align}

We want $\underline{nontrivial}$ solutions $(\underline{x} \ne \underline{0})$. To find them:

\begin{align}
\vv{A} \underline{x} - \lambda \underline{x} = \underline{0} \\

\vv{A} \underline{x} - \lambda \vv{I} \underline{x} = \underline{0} \\

(\vv{A} - \lambda \vv{I} )\underline{x} =  \underline{0}
\end{align}

If $\vv{A} - \lambda \vv{I}$ is invertible, we have only $\lambda = \underline{0}$ as a solution. Hence, we want this to be singular! This occurs when the determinant is zero:

\begin{align}
|\vv{A}- \lambda \vv{I}= 0
\end{align}

This determinant creates a $\underline{ characteristic polynomial}$ for $\lambda$ that can be solved. Then, the $\underline{x}$ that corresponds to a given $\lambda$ can be determined.

Ex:
\begin{align}
\vv{A} = \begin{bmatrix} -5 & 2\\ 2 & 2 \end{bmatrix}  
\\
|\vv{A} -\lambda \vv{I} = \begin{bmatrix} -5-\lambda & 2 \\ 2 & -2-\lambda \end{bmatrix} = (-5 -\lambda)(-2-\lambda)-2\cdot2 =(\lambda + 5)(\lambda +2) -4
\\
=\lambda^2 +7\lambda + 6 = (\lambda +1)(\lambda +6)=0 \to \underline{\lambda = -1, -6}
\end{align}

$\lambda=-1$:
\begin{align}
\begin{bmatrix} -5 -(-1) & 2 \\ 2 & -2-(-1) \end{bmatrix} \underline{x}= \begin{bmatrix} -4 & 2 \\ 2 & 1 \end{bmatrix} \underline{x} =0 
\\
\begin{bmatrix} -4 & 2 & 0 \\ 2 & 1 & 0 \end{bmatrix} \to \begin{bmatrix} -4 & 2 & 0 \\ 0 & 0 & 0 \end{bmatrix} \to \begin{bmatrix} 1 & -1/2 & 0 \\ 0 & 0 & 0 \end{bmatrix} \to x_1 -x_2 /2 =0 \\
x_2 free
\end{align}

This solution is not unique, which makes sense from the equation. We may then choose x_1 or x_2 so that the eigenvector has a nice norm or values. e.g.,
\begin{align}
x_1 =1, x_2 = 2 \to \underline{x}= \begin{bmatrix} 1 \\ 2 \end{bmatrix}
\end{align}

Repeat for $\lambda = -6$:
\begin{align}
\begin{bmatrix} -5 -(-6) & 2 \\ 2 & -2-(-6) \end{bmatrix} \underline{x} = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}\underline{x} =0
\end{align}

Row 2 is 2x Row 1, so we can just use Row 1!(This will be a pattern for 2x2 matricies).

\begin{align}
x_1 +2x_2 =0 \to \underline{x}=\begin{bmatrix} 2 \\ -1 \end{bmatrix}
\end{align}

Hence, the eigenvalues and eigenvectors are:
\begin{align}
\lambda_1 = -1 , \underline{x_1}= \begin{bmatrix} 1 \\ 2 \end{bmatrix} \, \text{and} \, \lambda_2 = -6, \underline{x_2}= \begin{bmatrix} 2 \\ -1 \end{bmatrix}
\end{align}


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
For example, for the matrix:

\begin{equation}
\vv{A} =
\begin{bmatrix}
0 & 1 \\
-1 & 0
\end{bmatrix}
\end{equation}

We evaluate the determinant:

\begin{align}
|\vv{A} - \lambda  \vv{I}|
&= \begin{vmatrix}
-\lambda & 1 \\
-1 & \lambda
\end{vmatrix} \\
&= \lambda^2 + 1 = 0 \\
\lambda_{1,2} = \pm i
\end{align}

For $\lambda_1 = i$:

\begin{equation}
\vv{A} - \lambda_1 \vv{I}
= \begin{bmatrix}
-i & 1 \\
-1 & i
\end{bmatrix}
\to
\begin{bmatrix}
-i & 1 \\
0 & 0
\end{bmatrix}
\end{equation}

This matrix is equivalent to

\begin{equation}
-ix_1 + x_2 = 0
\end{equation}

with $x_2$ free. Choosing $x_2 = i$ gives

\begin{equation}
\vv{x}_1 = \begin{bmatrix} 1 \\ i\end{bmatrix}
\end{equation}

For $\lambda_2 = -i$:

\begin{equation}
\vv{A} - \lambda_1 \vv{I}
= \begin{bmatrix}
i & 1 \\
-1 & i
\end{bmatrix}
\to
\begin{bmatrix}
i & 1 \\
0 & 0
\end{bmatrix}
\end{equation}

This matrix is equivalent to

\begin{equation}
i x_1 + x_2 = 0
\end{equation}

with $x_2$ free. Choosing $x_2 = -i$ gives

\begin{equation}
\vv{x}_2 =\begin{bmatrix} 1 \\ -i \end{bmatrix}
\end{equation}

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
