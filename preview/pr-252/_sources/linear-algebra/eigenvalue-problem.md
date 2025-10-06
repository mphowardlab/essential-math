# Eigenvalue problem

For an *n* x *n* square matrix **A**, we seek a scalar $\lambda$ and vector
**x** such that:

\begin{align}
\vv{A} \vv{x} = \lambda \vv{x}
\end{align}

We want a *nontrivial* solution ($\vv{x} \ne \vv{0}$). This pair represents a
vector **x** that, when multiplied into **A**, does not change its direction.
However, it may adopt a new magnitude $\lambda$. Borrowing from a German word
for "own", we call **x** an *eigenvector* and $\lambda$ an *eigenvalue* of
**A**.

To find the eigenvalues of **A**, rearrange:

\begin{align}
\vv{A} \vv{x} - \lambda \vv{x} &= \vv{0} \\
(\vv{A} - \lambda \vv{I}) \vv{x} &= \vv{0}
\end{align}

If $\vv{A} - \lambda \vv{I}$ is invertible, we have only $\vv{x} = \vv{0}$ as a
solution. Hence, we require this matrix to be singular! This occurs when its
[determinant](./determinants.md) is zero:

\begin{align}
|\vv{A}- \lambda \vv{I}| = 0
\end{align}

This equation creates a characeristic polynomial of degree *n* for $\lambda$
that can be solved. Then, the eigenvector **x** that corresponds to each root
$\lambda$ can be determined. For example, to find the eigenvalues of:

\begin{equation}
\vv{A} = \begin{bmatrix} -5 & 2\\ 2 & -2 \end{bmatrix}
\end{equation}

First compute the determinant:

\begin{align}
|\vv{A} -\lambda \vv{I}|
&= \begin{vmatrix} -5-\lambda & 2 \\ 2 & -2-\lambda \end{vmatrix} \\
&= (-5 -\lambda)(-2-\lambda) - 2 \cdot 2 \\
&= \lambda^2 +7\lambda + 6 \\
&= (\lambda +1)(\lambda +6) = 0
\end{align}

Hence, the eigenvalues of **A** are $\lambda_1 = -1$ and $\lambda_2 = -6$. Note
that the particular ordering of the eigenvalues is not important, and we are
only labeling them to make it convenient to refer to a particular eigenvalue
later.

Next, we seek the eigenvector $\vv{x}_1$ that corresponds to $\lambda_1$. This
vector must solve the system:

\begin{align}
(\vv{A} - \lambda_1 \vv{I}) \vv{x}_1 &= \vv{0} \\
\begin{bmatrix} -4 & 2 \\ 2 & -1 \end{bmatrix} \vv{x}_1 &= \vv{0}
\end{align}

We can solve for $\vv{x}_1$ using row reduction. Since the last column of the
augmented matrix would be only zeros, it is not necessary to include it, and we
row reduce only the matrix itself:

\begin{equation}
\begin{bmatrix}
-4 & 2 \\
2 & -1
\end{bmatrix}
\begin{matrix}\vphantom{R_1} \\ +R_2/2 \end{matrix}
\to \begin{bmatrix}
-4 & 2 \\
0 & 0
\end{bmatrix}
\begin{matrix} \div -2 \\ \vphantom{R_2} \end{matrix}
\to
\begin{bmatrix}
1 & -1/2 \\
0 & 0
\end{bmatrix}
\end{equation}

Note that this reduced matrix is equivalent to $x_1 = x_2/2$ (using *x* to
represent elements of $\vv{x}_1$ for convenience) with $x_2$ being free. This
means that the eigenvector is not unique, which makes sense both from the
original equation we are trying to solve and us forcing the matrix to be
singular! Equivalently, eigenvectors can be scaled up or down by an arbitrary
nonzero constant. We may then choose $x_2$ so that the eigenvector has either
nice values (like like integers) or a nice norm (1 is conventional). For
example, choosing $x_2 = 2$ gives:

\begin{equation}
\vv{x}_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}
\end{equation}

```{tip}
For a 2x2 matrix, if the eigenvalue $\lambda$ has been found correctly, one row
of $\vv{A}-\lambda\vv{I}$ will always be a multiple of the other. This means
the eigenvector can be determined using only one row. Moreover, the solution
for **x** can be obtained by swapping the entries in a row and changing the sign
of one of them! For example, we had

\begin{equation}
\begin{bmatrix}
-4 & 2 \\
2 & -1
\end{bmatrix}
\end{equation}

so using the second row, we find:

\begin{equation}
\vv{x}_1 = \begin{bmatrix}-(-1) \\ 2\end{bmatrix} = \begin{bmatrix}1 \\ 2\end{bmatrix}
\end{equation}

However, we could also have negated the other entry:

\begin{equation}
\vv{x}_1 = \begin{bmatrix}-1\\ -2\end{bmatrix}
\end{equation}

or used the first row:

\begin{equation}
\vv{x}_1 = \begin{bmatrix}2 \\ 4\end{bmatrix}
\end{equation}

Both of these are also valid eigenvectors because they are multiples of the one
we found already.
```

Let's use the same strategy to get the eigenvector for $\lambda_2 = -6$. We'll
jump straight to the matrix we need:

\begin{align}
(\vv{A} - \lambda_2 \vv{I}) = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}
\to \vv{x}_2 = \begin{bmatrix}2 \\ -1 \end{bmatrix}
\end{align}

using the swapping trick on the first row.

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
