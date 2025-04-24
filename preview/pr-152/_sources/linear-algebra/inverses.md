# Matrix inversion

## Motivation and definition

Gauss-Jordan elimination works well for solving  **Ax** = **b**, but the process
needs to be repeated for every new **b**. Is there an alternative if we need to
solve **Ax** = **b** for many different **b**?

```{topic} Matrix inverse
For a square (*n* x *n*) matrix **A**, the inverse $\vv{A}^{-1}$ satisfies

\begin{equation}
\vv{A} \vv{A}^{-1} = \vv{A}^{-1} \vv{A} = \vv{I}
\end{equation}

where **I** is the *n* x *n* identity matrix.
```

A matrix is called *nonsingular* or *invertible* if it has an inverse, but
*singular* if it does not.

```{topic} Invertible matrix theorem

**A** is invertible if and only if the determinant of **A** is nonzero.

(There are many more such conditions!)
```

If the inverse of **A** exists, it is unique and can be used to
solve **Ax** = **b**.

\begin{align}
\vv{A} \vv{x} &= \vv{b} \\
\vv{A}^{-1} \vv{A} \vv{x} &= \vv{A}^{-1} \vv{b} \\
\vv{x} &= \vv{A}^{-1} \vv{b}
\end{align}

Finding the inverse of **A** is usually hard. There is a general definition
based on cofactors, as well as advanced numerical methods, that we will not
cover. Instead, we focus on two options: a formula for 2 x 2 matrices, and
use of Gauss-Jordan elimination for larger matrices.

## Inverse of a 2 x 2 matrix

For a 2 x 2 matrix,

\begin{equation}
\vv{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix},
\end{equation}

the matrix inverse is

\begin{equation}
\vv{A}^{-1} = \frac{1}{|\vv{A}|} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
\end{equation}

(Flip *a* and *d*, change the signs of *b* and *c*.)

```{example} 2 x 2 inverse
To find the inverse of

\begin{equation}
\vv{A} = \begin{bmatrix} 3 & 1 \\ 2 & 4 \end{bmatrix}
\end{equation}

First, compute its determinant:

\begin{equation}
|\vv{A}| = 3 \times 4 - 2 \times 1 = 12 - 2 = 10
\end{equation}

Then, compute its inverse

\begin{equation}
\vv{A}^{-1} = \frac{1}{10} \begin{bmatrix} 4 & -1 \\ -2 & 3 \end{bmatrix}
= \begin{bmatrix} 0.4 & -0.1 \\ -0.2 & 0.3 \end{bmatrix}
\end{equation}
```

## Inverses using Gauss-Jordan elimination

For larger matrices, we can use [Gauss–Jordan elimination](gauss-jordan.md) to
solve $\vv{A} \vv{A}^{-1} = \vv{I}$ as a generalization of **Ax** = **b**.

- Check that $|\vv{A}| \ne 0$ (i.e., **A** is invertible).

- Form the 2*n* x *n* augmented matrix $[ \vv{A} \, | \, \vv{I} ]$

- Perform row operations to bring to $[ \vv{I} \, | \, \vv{A}^{-1} ]$.
