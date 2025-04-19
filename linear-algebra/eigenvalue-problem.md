# Eigenvalue problem
2. Multiple Eigenvalues
   
An nxn matrix has n eigenvalues, but they may not be distinct!

$$
\underline{\underline{A}} = 
\begin{bmatrix}
-2 & 2 & -3 \\
2 & 1 & -6 \\
-1 & -2 & 0
\end{bmatrix}
$$

$$
| \underline{\underline{A}} - \lambda  \underline{\underline{I}}| =
\left|\begin{matrix}
-2-\lambda & 2 & -3 \\
2 & 1-\lambda & -6 \\
-1 & -2 & -\lambda
\end{matrix} \right|
$$ 

=
 
$$
-1
\left|\begin{matrix}
2 & -3 \\
1-\lambda & -6
\end{matrix} \right|
$$ 

$$
-(-2)
\left|\begin{matrix}
-2-\lambda & -3 \\
2 & -6
\end{matrix} \right|
$$

$$
-\lambda
\left|\begin{matrix}
-2-\lambda & 2 \\
2 & 1-\lambda 
\end{matrix} \right|
$$


$= -[-12+3(1-\lambda)]+2[6(2+\lambda)+6]-\lambda[(\lambda+2)(\lambda-1)-4]$

$= (3\lambda+9)+(12\lambda+36)-\lambda(\lambda^2+\lambda-6) = -\lambda^3-\lambda^2+21\lambda+45 $

$= -(\lambda-5)(\lambda+3)^2 = 0 \to \lambda_1 = 5, \lambda_2 = \lambda_3 = -3 $

$\lambda_1 = 5:$

$$
\begin{bmatrix}
-7 & 2 & -3 \\
2 & -4 & -6 \\
-1 & -2 & -3
\end{bmatrix}
$$

$\to\to$

$$
\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 2 \\
0 & 0 & 0
\end{bmatrix}
$$

$x_1 + x_3 = 0$

$x_2 +2x_3 = 0$

$x_3$ free

$$
\underline{x_1} =
\begin{bmatrix}
1 \\
2  \\
-1
\end{bmatrix}
$$

$\lambda_2 = \lambda_3 = -3: $

$$
\begin{bmatrix}
1 & 2 & -3 \\
2 & 4 & -6 \\
-1 & -2 & 3
\end{bmatrix}
$$

$\to\to$

$$
\begin{bmatrix}
1 & 2 & -3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$

$x_1 + 2x_2 - 3x_3 = 0$

$x_2, x_3$ free

$x_2 = 1, x_3 = 0 \to$

$$
\underline{x_2} =
\begin{bmatrix}
-2 \\
1 \\
0
\end{bmatrix}
$$

$x_2 = 0, x_3 = 1 \to$

$$
\underline{x_3} =
\begin{bmatrix}
3 \\
0 \\
1
\end{bmatrix}
$$

3. Complex Eigenvalues

Matrices may have complex eigenvaules. They always come in conjugate pairs!

$$
\underline{\underline{A}} =
\begin{bmatrix}
0 & 1 \\
-1 & 0
\end{bmatrix}
$$

$$
| \underline{\underline{A}} - \lambda  \underline{\underline{I}}| =
\left|\begin{matrix}
-\lambda & 1 \\
-1 & \lambda
\end{matrix} \right| =
\lambda^2 + 1 = 0 \to \lambda_1 =i , \lambda_2 = -i
$$

$$
\lambda_1 = i: 
\begin{bmatrix}
-i & 1 \\
-1 & i
\end{bmatrix}
\to
\begin{bmatrix}
-i & 1 \\
0 & 0
\end{bmatrix}
$$

$$
-ix_1 + x_2 = 0 
\to
\underline{x_1} =
\begin{bmatrix}
1 \\
-i
\end{bmatrix}
$$


