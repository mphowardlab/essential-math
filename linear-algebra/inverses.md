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

\to &\begin{bmatrix}
1 & -1 & 1 & 1 & 0 & 0 \\
0 & 1 & 2.5 & 0 & 0 & 0.1 \\
0 & 0 & 1 & .211 & -.010 & 0.032
\end{bmatrix}
\begin{matrix}
-R_3 \\ -2.5 R_3 \\ \vphantom{R_3}
\end{matrix} \\

\to &\begin{bmatrix}
1 & -1 & 0 & 0.789 & 0.010 & -0.032 \\
0 & 1 & 0 & -0.528 & 0.025 & 0.020 \\
0 & 0 & 1 & 0.211 & -0.010 & 0.032
\end{bmatrix}
\begin{matrix}
+R_2 \\ \vphantom{R_2} \\ \vphantom{R_3}
\end{matrix} \\

\to &\begin{bmatrix}
1 & 0 & 0 & 0.261 & 0.035 & -0.012 \\
0 & 1 & 0 & -0.528 & 0.025 & 0.020 \\
0 & 0 & 1 & 0.211 & -0.010 & 0.032
\end{bmatrix}
\end{align}

Solve:
\begin{equation}
\vv {Q}= \vv{A}^{-1}{b} = \begin{bmatrix}
0.261 & 0.035 & -0.012 \\
-0.528 & 0.025 & 0.020 \\
0.211 & -0.010 & 0.032
\end{bmatrix}
\begin{bmatrix}
0 \\
80 \\
90
\end{bmatrix}
=
\begin{bmatrix}
1.72 \\
3.80 \\
2.08
\end{bmatrix}
\end{equation}

This is close to the solution we found before, with some errors due to rounding.
```

## Skill builder problems

1. Solve using matrix inversion or explain why this is not possible:

   \begin{align}
   5x_1 - 2x_2 &= 20.9 \\
   -x_1 + 4x_2 &= -19.3
   \end{align}

   ```{solution}
   First, write in matrix form **Ax** = **b** with:
   \begin{equation}
   \vv{A} = \begin{bmatrix}
   5 & -2 \\
   -1 & 4
   \end{bmatrix}
   \qquad
   \vv{b} = \begin{bmatrix}
   20.9 \\
   -19.3
   \end{bmatrix}
   \end{equation}

   Then, evaluate $|\vv{A}|$ to check if an inverse exists:

   \begin{equation}
   |\vv{A}| = (5 \cdot 4) - (-1 \cdot -2) = 18
   \end{equation}

   $|\vv{A}| \ne 0$, so an inverse can be found using the formula for a 2x2
   matrix:

   \begin{equation}
   \vv{A}^{-1} = \frac{1}{18}
   \begin{bmatrix}
   5 & -2 \\
   -1 & 4
   \end{bmatrix}
   \end{equation}

   Last, solve for **x**:

   \begin{align}
   \vv{x} = \vv{A}^{-1}\vv{b} &= \frac{1}{18}
   \begin{bmatrix}
   5 & -2 \\
   -1 & 4
   \end{bmatrix}
   \begin{bmatrix}
   20.9 \\
   -19.3
   \end{bmatrix} \\
   &= \frac{1}{18}
   \begin{bmatrix}
   4 \cdot 20.9 +  2 \cdot -19.3 \\
   1 \cdot  20.9 + 5 \cdot -19.3
   \end{bmatrix} \\
   &= \begin{bmatrix}
   2.5 \\
   -4.2
   \end{bmatrix}
   \end{align}

   Therefore, $x_1 = 2.5$ and $x_2 = -4.2$.
   ```

2. Solve using matrix inversion or explain why this is not possible:

   \begin{align}
   x_1 + 4x_2 = 8 \\
   2x_1 + 8x_2 = 17
   \end{align}

   ```{solution}
   First, write in matrix form **Ax** = **b** with:
   \begin{equation}
   \vv{A} = \begin{bmatrix}
   1 & 4 \\
   2 & 8
   \end{bmatrix}
   \qquad
   \vv{b} = \begin{bmatrix}
   8 \\
   17
   \end{bmatrix}
   \end{equation}

   Then, evalaute $|\vv{A}|$ to check if an inverse exists:

   \begin{equation}
   |\vv{A}| = (1 \cdot 8) - (2 \cdot 4) = 0
   \end{equation}

   **A** is singular because $|\vv{A}| = 0$, so these equations cannot be solved
   using an inverse.
   ```

3. Solve using matrix inversion or explain why this is not possible:

   \begin{align}
   x_2 + x_3 = -2 \\
   4x_2 + 6x_3 = -12 \\
   x_1 + x_2 + x_3 = 2
   \end{align}

   ```{solution}
   First, write in matrix form **Ax** = **b** with:
   \begin{equation}
   \vv{A} = \begin{bmatrix}
   0 & 1 & 1 \\
   0 & 4 & 6 \\
   1 & 1 & 1
   \end{bmatrix}
   \qquad
   \vv{b} = \begin{bmatrix}
   -2 \\
   -12 \\
   2
   \end{bmatrix}
   \end{equation}

   Then, evaluate $|\vv{A}|$ to check if an inverse exists:

   \begin{align}
   |\vv{A}| =
   0 \cdot \begin{vmatrix}
   4 & 6 \\
   1 & 1
   \end{vmatrix}
   -1 \cdot
   \begin{vmatrix}
   0 & 6 \\
   1 & 1
   \end{vmatrix}
   + 1 \cdot
   \begin{vmatrix}
   0 & 4 \\
   1 & 1
   \end{vmatrix}
   \end{align}

   \begin{equation}
   |\vv{A}| = -1 \cdot (0-6) + 1 \cdot (0-4) = 2
   \end{equation}

   Since $|\vv{A}| \ne 0$, **A** is invertible. Use Gauss-Jordan elimination
   to find the inverse. Start with the augmented matrix $[\vv{A} | \vv{I}]$,
   then rearrange the rows

   \begin{align}
   \begin{bmatrix}
   0 & 1 & 1 & 1 & 0 & 0 \\
   0 & 4 & 6 & 0 & 1 & 0 \\
   1 & 1 & 1 & 0 & 0 & 1
   \end{bmatrix}
   &\to \begin{bmatrix}
   1 & 1 & 1 & 0 & 0 & 1 \\
   0 & 1 & 1 & 1 & 0 & 0 \\
   0 & 4 & 6 & 0 & 1 & 0
   \end{bmatrix}
   \begin{matrix}
   \vphantom{R_1} \\ \vphantom{R_1} \\ -4 R_1
   \end{matrix} \\
   &\to \begin{bmatrix}
   1 & 1 & 1 & 0 & 0 & 1 \\
   0 & 1 & 1 & 1 & 0 & 0 \\
   0 & 0 & 2 & -4 & 1 & 0
   \end{bmatrix}
   \begin{matrix}
   \vphantom{R_1} \\ \vphantom{R_1} \\ \div 2
   \end{matrix} \\
   &\to \begin{bmatrix}
   1 & 1 & 1 & 0 & 0 & 1 \\
   0 & 1 & 1 & 1 & 0 & 0 \\
   0 & 0 & 1 & -2 & 0.5 & 0
   \end{bmatrix}
   \begin{matrix}
   -R_3 \\ -R_3 \\ \vphantom{R_1}
   \end{matrix} \\
   &\to \begin{bmatrix}
   1 & 1 & 0 & 2 & -0.5 & 1 \\
   0 & 1 & 0 & 3 & -0.5 & 0 \\
   0 & 0 & 1 & -2 & 0.5 & 0
   \end{bmatrix}
   \begin{matrix}
   -R_2 \\ \vphantom{R_1} \\ \vphantom{R_1}
   \end{matrix} \\
   &\to \begin{bmatrix}
   1 & 0 & 0 & -1 & 0 & 1 \\
   0 & 1 & 0 & 3 & -0.5 & 0 \\
   0 & 0 & 1 & -2 & 0.5 & 0
   \end{bmatrix}
   \end{align}

   Hence,

   \begin{align}
   \vv{A}^{-1} = \begin{bmatrix}
   -1 & 0 & 1 \\
   3 & -0.5 & 0 \\
   -2 & 0.5 & 0
   \end{bmatrix}
   \end{align}

   and

   \begin{align}
   \vv{x} = \vv{A}^{-1} \vv{b} &=
   \begin{bmatrix}
   -1 & 0 & 1 \\
   3 & -0.5 & 0 \\
   -2 & 0.5 & 0
   \end{bmatrix}
   \begin{bmatrix}
   -2 \\
   -12 \\
   2
   \end{bmatrix} \\
   & = \begin{bmatrix}
   -1 \cdot -2 + 1 \cdot 2 \\
   3 \cdot -2 + -0.5 \cdot -12 \\
   -2 \cdot -2 + 0.5 \cdot -12
   \end{bmatrix} \\
   &= \begin{bmatrix}
   4 \\
   0 \\
   -2
   \end{bmatrix}
   \end{align}

   So, $x_1 = 4$, $x_2 = 0$, and $x_3 = -2$.
   ```

4. Solve using matrix inversion or explain why this is not possible:

   \begin{align}
   4x_2 + 4x_3 = 24 \\
   3x_1 - 11x_2 - 2x_3 = -6 \\
   6x_1 - 17x_2 + x_3 = 18
   \end{align}

   ```{solution}
   First, write in matrix form **Ax** = **b** with:
   \begin{equation}
   \vv{A} = \begin{bmatrix}
   0 & 4 & 4 \\
   3 & -11 & -2 \\
   6 & -17 & 1
   \end{bmatrix}
   \qquad
   \vv{b} = \begin{bmatrix}
   24 \\
   -6 \\
   18
   \end{bmatrix}
   \end{equation}

   Then, evaluate $|\vv{A}|$ to check if an inverse exists:

   \begin{align}
   |\vv{A}| =
   0 \cdot \begin{vmatrix}
   -11 & -2 \\
   -17 & 1
   \end{vmatrix}
   -4 \cdot
   \begin{vmatrix}
   3 & -2 \\
   6 & 1
   \end{vmatrix}
   + 4 \cdot
   \begin{vmatrix}
   3 & -11 \\
   6 & -17
   \end{vmatrix}
   \end{align}

   \begin{align}
   |\vv{A}| &= -4 (3 \cdot 1 - 6 \cdot -2) + 4 (3 \cdot -17 - 6 \cdot -11) \\
   &= -4 \cdot 15 + 4 \cdot 15 \\
   &= 0
   \end{align}

   Since $|\vv{A}| = 0$, **A** is not invertible.

5. Solve using matrix inversion or explain why this is not possible:

   \begin{align}
   2x_1 - x_2 + 3x_3 = -1 \\
   -4x_1 + 2x_2 - 6x_3 = 2
   \end{align}

   ```{solution}
   First, write in matrix form **Ax** = **b** with:
   \begin{equation}
   \vv{A} = \begin{bmatrix}
   2 & -1 & 3 \\
   -4 & 2 & -6
   \end{bmatrix}
   \qquad
   \vv{b} = \begin{bmatrix}
   -1 \\
   2
   \end{bmatrix}
   \end{equation}

   Since **A** is not square, **A** is not invertible.
   ```
