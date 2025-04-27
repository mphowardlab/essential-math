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

Then, evaluate $|\vv{A}|$ to check if an inverse exists:
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

## Skill builder problems

Solve the following using matrix inversion:

1. 

   \begin{align}
   5x_1 - 2x_2 &= 20.9 \\
   -x_1 + 4x_2 &= -19.3
   \end{align}
   
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

2. 
   
   \begin{align}
   x_1 + 4x_2 = 8 \\
   2x_1 + 8x_2 = 17 
   \end{align}

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

   A is singular because det A = 0, so it <ins>**cannot be inverted.**</ins>

3. 

   \begin{align}
   x_2 + x_3 = -2 \\
   4x_2 + 6x_3 = -12 \\
   x_1 + x_2 + x_3 = 2
   \end{align}

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
   |\vv{A}| = (0 \cdot )
   \begin{bmatrix}
   4 & 6 \\
   1 & 1
   \end{bmatrix}
   (-1 \codt )
   \begin{bmatrix}
   0 & 6 \\
   1 & 1
   \end{bmatrix}
   (1 \cdot )
   \begin{bmatrix}
   0 & 4 \\
   1 & 1
   \end{bmatrix}
   \end{align}

   \begin{equation}
   |\vv{A}| = (-1 \cdot (0-6)) - (1 \cdot (0-4)) = 2
   \end{equation}

   Since det A does not equal 0, A is invertible. Use Gauss-Jordan elimination.

   \being{align}
   \begin{bmatrix}
   0 & 1 & 1 : & 1 & 0 & 0 \\
   0 & 4 & 6 : & 0 & 1 & 0 \\
   1 & 1 & 1 : & 0 & 0 & 1 
   \end{bmatrix}
   \end{align}

   -->

   \being{align}
   \begin{bmatrix}
   1 & 1 & 1 : & 0 & 0 & 1 \\
   0 & 1 & 1 : & 1 & 0 & 0 \\
   0 & 4 & 6 : & 0 & 1 & 0 
   \end{bmatrix}
   \end{align}

   Reorder -->

   \being{align}
   \begin{bmatrix}
   1 & 1 & 1 : & 0 & 0 & 1 \\
   0 & 1 & 1 : & 1 & 0 & 0 \\
   0 & 0 & 2 : & -4 & 1 & 0 
   \end{bmatrix}
   \being{align}

   -4 Row 2

   \being{align}
   \begin{bmatrix}
   1 & 1 & 1 : & 0 & 0 & 1 \\
   0 & 1 & 1 : & 1 & 0 & 0 \\
   0 & 0 & 1 : & -2 & 0.5 & 0 
   \end{bmatrix}
   \being{align}

   divide by 2 -->

   \being{align}
   \begin{bmatrix}
   1 & 1 & 0 : & 2 & -0.5 & 1 \\
   0 & 1 & 0 : & 3 & -0.5 & 0 \\
   0 & 0 & 1 : & -2 & 0.5 & 0 
   \end{bmatrix}
   \being{align}

   - Row 3
   - Row 3 -->

   \being{align}
   \begin{bmatrix}
   1 & 0 & 0 : & -1 & 0 & 1 \\
   0 & 1 & 0 : & 3 & -0.5 & 0 \\
   0 & 0 & 1 : & -2 & 0.5 & 0 
   \end{bmatrix}
   \being{align}

   - Row 2

   \being{align}
   A^{-1}=\begin{bmatrix}
   -1 & 0 & 1 \\
   3 & -0.5 & 0 \\
   -2 & 0.5 & 0 
   \end{bmatrix}
   \being{align}

   \being{align}
   x = A^{-1}b =\begin{bmatrix}
   -1 & 0 & 1 \\
   3 & -0.5 & 0 \\
   -2 & 0.5 & 0 
   \end{bmatrix}
   \being{align}

   \being{align}
   =\begin{bmatrix}
   -2 \\
   -12 \\
   2
   \end{bmatrix}
   \being{align}

   = 

   \being{align}
   x =\begin{bmatrix}
   -1*-2 +  & 1*2 \\
   3*-2 + & -0.5*-12 \\
   -2*-2 + 0.5*-12
   \end{bmatrix}
   \end{align}

   =

   \being{align}
   \begin{bmatrix}
   4 \\
   0 \\
   -2
   \end{bmatrix}
   \being{align}

   \begin{equation}
   x_1 = 4
   \end{equation}

   \being{equation}
   x_2 = 0
   \end{equation}

   \being{equation}
   x_3 = -2
   \end{equation}

4. 
   \being{align}
   4x_2 + 4x_3 = 24 \\
   3x_1 - 11x_2 - 2x_3 = -6 \\
   6x_1 - 17x_2 + x_3 = 18
   \end{align}

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

   \begin{equation}
   |\vv{A}| = (5 \cdot 4) - (-1 \cdot -2) = 18
   \end{equation}

   $|\vv{A}| \ne 0$, so an inverse can be found using the formula for a 3x3 matrix: 

   \begin{equation}
   \begin{align}
   |\vv{A}| = (0 \cdot )
   \begin{bmatrix}
   -11 & -2 \\
   -17 & 1
   \end{bmatrix}
   (-4 \codt )
   \begin{bmatrix}
   3 & -2 \\
   6 & 1
   \end{bmatrix}
   (4 \cdot )
   \begin{bmatrix}
   3 & -11 \\
   6 & -17
   \end{bmatrix}
   \end{align}

   \begin{equation}
   = (-4 ((3 \cdot 1)) - (6 \cdot -2)) + (4 ((3 \cdot -17)) - ((6 \cdot -11))
   \end{equation}

   \begin{equation}
   = (-4 \cdot 15) + (4 \cdot 15)
   \end{equation}

   \begin{equation}
   = 0
   \end{equation}

   Since det A = 0, A is not invertible.

(e)

   \begin{align}
   2x_1 - x_2 - 3x_3 = -1 \\
   -4x_1 + 2x_2 - 6x_3 = 2
   \end{align}

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

   Since A is not square, A is not invertible.
