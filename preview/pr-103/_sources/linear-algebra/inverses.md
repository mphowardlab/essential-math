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

```{example} Pump circuit
We will resolve the problem we used [Gauss-Jordan elimination](gauss-jordan.md)
for, but now using the matrix inverse. As a reminder, the equations to solve
were

\begin{align}
Q_1 - Q_2 + Q_3 &= 0 \\
Q_1 - Q_2 + Q_3 &= 0 \\
20Q_1 + 10Q_2 + 0Q_3 &= 80 \\
0Q_1 + 10Q_2 + 25Q_3 &= 90
\end{align}

We need a square matrix to calculate the inverse, and we know the second
equation is redundant of the first. We write this in matrix form **Ax** = **b**
with

\begin{equation}
\vv{A} = \begin{bmatrix} 1 & -1 & 1 \\ 20 & 10 & 0 \\ 0 & 10 & 25\end{bmatrix}
\qquad
\vv{b} = \begin{bmatrix} 0 \\ 80 \\ 90 \end{bmatrix}
\end{equation}

First, compute the determinant to make sure **A** is invertible

\begin{align}
|\vv{A}| &= -10 \begin{vmatrix} 1 & 1 \\ 20 & 0 \end{vmatrix} +
25 \begin{vmatrix} 1 & -1 \\ 20 & 10\end{vmatrix} \\
&= 10 (0-20) + 25 (10+20) = 950
\end{align}

The determinant is nonzero, so $\vv{A}^{-1}$ exists. Form the augmented matrix we
need to compute, then use a similar sequence of row operations as when we used
Gauss-Jordan elimination to solve directly:

\begin{align}
&\begin{bmatrix}
1 & -1 & 1 & 1 & 0 & 0 \\
20 & 10 & 0 & 0 & 1 & 0 \\
0 & 10 & 25 & 0 & 0 & 1
\end{bmatrix}
\begin{matrix}
\vphantom{R_1} \\ -20 R_1 \\ \vphantom{R_1}
\end{matrix} \\
\to &\begin{bmatrix}
1 & -1 & 1 & 1 & 0 & 0 \\
0 & 30 & -20 & -20 & 1 & 0 \\
0 & 10 & 25 & 0 & 0 & 1
\end{bmatrix}
\begin{matrix}
\vphantom{R_1} \\ {\rm swap}\,R_3 \\ \vphantom{R_1}
\end{matrix} \\
\to &\begin{bmatrix}
1 & -1 & 1 & 1 & 0 & 0 \\
0 & 10 & 25 & 0 & 0 & 1 \\
0 & 30 & -20 & -20 & 1 & 0
\end{bmatrix}
\begin{matrix}
\vphantom{R_1} \\ \vphantom{R_1} \\ -3 R_2
\end{matrix} \\
\to &\begin{bmatrix}
1 & -1 & 1 & 1 & 0 & 0 \\
0 & 10 & 25 & 0 & 0 & 1 \\
0 & 0 & -95 & -20 & 1 & -3
\end{bmatrix}
\begin{matrix}
\vphantom{R_1} \\ \div 10 \\ \div -95
\end{matrix} \\
\end{align}

<!---
\[
\left[ \begin{array}{ccc|c}
1 & -1 & 1 & 1 & 0 & 0 \\
0 & 1 & 2.5 & 0 & 0 & 0.1 \\
0 & 0 & 1 & .211 & -.10 & 0.32 \\
\end{array} \right]
\]
\[
\left[ \begin{array}{ccc|c}
1 & -1 & 0 & 0.789 & 0.010 & -0.032 \\
0 & 1 & 0 & -0.528 & 0.025 & 0.020 \\
0 & 0 & 1 & .211 & -.10 & 0.32 \\
\end{array} \right]
\]
\[
\left[ \begin{array}{ccc|c}
1 & 0 & 0 & 0.261 & 0.035 & -0.012 \\
0 & 1 & 0 & -0.528 & 0.025 & 0.020 \\
0 & 0 & 1 & .211 & -.10 & 0.32 \\
\end{array} \right]
\]
--->
```
