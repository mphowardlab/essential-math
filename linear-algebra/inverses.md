# Matrix inversion
## SkillBuilder
Solve the following using matrix inversion:

(a) 

$$
5x_1 - 2x_2 = 20.9
$$  

$$
-x_1 + 4x_2 = -19.3
$$

$$
A= \begin{bmatrix}
5 & -2 \\
-1 & 4 
\end{bmatrix}
$$

$$
b= \begin{bmatrix}
20.9 \\
-19.3
\end{bmatrix}
$$

A*x=b 
x = A^{-1}b

$$
det A = 5*4-(-1)(-2) = 18
$$

$$
A^{-1} = \frac{1}{18} * 
\begin{bmatrix}
5 & -2 \\
-1 & 4 
\end{bmatrix}
$$

$$
x = \frac{1}{18} *
\begin{bmatrix}
5 & -2 \\
-1 & 4 
\end{bmatrix}
\begin{bmatrix}
20.9 \\
-19.3
\end{bmatrix}
$$

=

$$
x = \frac{1}{18} *
\begin{bmatrix}
4*20.9 +  & 2*-19.3 \\
1*20.9 + & 5*-19.3
\end{bmatrix}
$$

=

$$
\begin{bmatrix}
2.5 \\
-4.2
\end{bmatrix}
$$

$$ 
x_1 = 2.5
$$

$$
x_2 = -4.2
$$

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
