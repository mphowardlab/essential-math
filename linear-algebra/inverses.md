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
>>>>>>> a3b634ea4739f0e15b13f0f220951b1c16e8c395

Then, evaluate $|\vv{A}|$ to check if an inverse exists:
A matrix is called *nonsingular* or *invertible* if it has an inverse, but
*singular* if it does not.

\begin{equation}
|\vv{A}| = (5 \cdot 4) - (-1 \cdot -2) = 18
\end{equation}
```{topic} Invertible matrix theorem

$|\vv{A}| \ne 0$, so an inverse can be found using the formula for a 2x2
matrix:

\begin{equation}
\vv{A}^{-1} = \frac{1}{18}
\begin{bmatrix}
5 & -2 \\
-1 & 4 
\end{bmatrix}
\end{equation}
**A** is invertible if and only if the determinant of **A** is nonzero.

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

Therefore, $x_1 = 2.5$ and $x_2 = -4.2$.
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

(b)

$$
x_1 + 4x_2 = 8
$$

$$
2x_1 + 8x_2 = 17 
$$

$$
A= \begin{bmatrix}
1 & 4 \\
2 & 8
\end{bmatrix}
$$

$$
b= \begin{bmatrix}
8 \\
17
\end{bmatrix}
$$

$$
det A = 1*8 - 2*4 = 0 
$$

A is singular because det A = 0, so it <ins>**cannot be inverted.**</ins>

(c) 

$$
x_2 + x_3 = -2
$$

$$
4x_2 + 6x_3 = -12
$$

$$
x_1 + x_2 + x_3 = 2
$$

$$
A= \begin{bmatrix}
0 & 1 & 1 \\
0 & 4 & 6 \\
1 & 1 & 1 
\end{bmatrix}
$$

$$
b= \begin{bmatrix}
-2 \\
-12 \\
2
\end{bmatrix}
$$

$$
det A= 0*\begin{bmatrix}
4 & 6 \\
1 & 1
\end{bmatrix}
-1*\begin{bmatrix}
0 & 6 \\
1 & 1
\end{bmatrix}
1*\begin{bmatrix}
0 & 4 \\
1 & 1
\end{bmatrix}
$$

$$
= -1*(0-6) + 1*(0-4) = 2
$$

Since det A does not equal 0, A is invertible. Use Gauss-Jordan elimination.

$$
\begin{bmatrix}
0 & 1 & 1 : & 1 & 0 & 0 \\
0 & 4 & 6 : & 0 & 1 & 0 \\
1 & 1 & 1 : & 0 & 0 & 1 
\end{bmatrix}
$$

$$
-->
$$

$$
\begin{bmatrix}
1 & 1 & 1 : & 0 & 0 & 1 \\
0 & 1 & 1 : & 1 & 0 & 0 \\
0 & 4 & 6 : & 0 & 1 & 0 
\end{bmatrix}
$$

reorder
$$
-->
$$

$$
\begin{bmatrix}
1 & 1 & 1 : & 0 & 0 & 1 \\
0 & 1 & 1 : & 1 & 0 & 0 \\
0 & 0 & 2 : & -4 & 1 & 0 
\end{bmatrix}
$$

-4 Row 2

$$
\begin{bmatrix}
1 & 1 & 1 : & 0 & 0 & 1 \\
0 & 1 & 1 : & 1 & 0 & 0 \\
0 & 0 & 1 : & -2 & 0.5 & 0 
\end{bmatrix}
$$

divide by 2

$$
-->
$$

$$
\begin{bmatrix}
1 & 1 & 0 : & 2 & -0.5 & 1 \\
0 & 1 & 0 : & 3 & -0.5 & 0 \\
0 & 0 & 1 : & -2 & 0.5 & 0 
\end{bmatrix}
$$

- Row 3
- Row 3

$$
-->
$$

$$
\begin{bmatrix}
1 & 0 & 0 : & -1 & 0 & 1 \\
0 & 1 & 0 : & 3 & -0.5 & 0 \\
0 & 0 & 1 : & -2 & 0.5 & 0 
\end{bmatrix}
$$

- Row 2

$$
A^{-1}=\begin{bmatrix}
-1 & 0 & 1 \\
3 & -0.5 & 0 \\
-2 & 0.5 & 0 
\end{bmatrix}
$$

$$
x = A^{-1}b =\begin{bmatrix}
-1 & 0 & 1 \\
3 & -0.5 & 0 \\
-2 & 0.5 & 0 
\end{bmatrix}
$$

$$
=\begin{bmatrix}
-2 \\
-12 \\
2
\end{bmatrix}
$$

= 
$$
x =\begin{bmatrix}
-1*-2 +  & 1*2 \\
3*-2 + & -0.5*-12 \\
-2*-2 + 0.5*-12
\end{bmatrix}
$$

=

$$
\begin{bmatrix}
4 \\
0 \\
-2
\end{bmatrix}
$$

$$
x_1 = 4
$$

$$
x_2 = 0
$$

$$
x_3 = -2
$$

(d)
 4x<sub>2</sub> + 4x<sub>3</sub> = 24
3x<sub>1</sub> - 11x<sub>2</sub> - 2x<sub>3</sub> = -6
6x<sub>1</sub> - 17x<sub>2</sub> + x<sub>3</sub> = 18
                           _          _
                          |   0   4  4 | 
<ins><ins>A</ins></ins> = |   3 -11 -2 |
                          |_  6 -17  1_|
                _   _ 
               | 24  |
<ins>b</ins> = | -6  |
               |_18 _|

det <ins><ins>A</ins></ins> = 0* | -11 -2 | - 4* | 3 -2 | + 4* | 3 -11 | = 
                                 | -17 1  |      | 6  1 |      | 6 -17 |
= -4(3*1 - 6*-2) + 4(3*-17 - 6*-11)  = -4*15 + 4*15  = 0
                                                                   ________________
Since det <ins><ins>A</ins></ins> = 0, <ins><ins>A</ins></ins> is | not invertible.|
                                                                  |________________|

(e)
2x<sub>1</sub> - x<sub>2</sub> - 3x<sub>3</sub> = -1
-4x<sub>1</sub> + 2x<sub>2</sub> - 6x<sub>3</sub> = 2

<ins><ins>A</ins></ins> =  _         _
                          |   2 -1 3  | 
                          |_ -4  2 -6_|
<ins>b</ins> =  _   _
               |  -1 |
               |_  2_|
                                                                         ________________
Since <ins><ins>A</ins></ins> is not square, <ins><ins>A</ins></ins> is | not invertible.|
                                                                        |________________|
