# Gauss–Jordan elimination
d) Skill builder Section\
$4x_{12}-11x_{3} = 24$\
$3x_{1}-11x_{2}-2x_{3}=-6$\
$6x_{1}-17x_{2}+x_{3}=18$\
>Convert system of equations into an augmented matrix.

$$\begin{bmatrix} 0 & 4 & 4 & 24 \\ 3 & -11 & -2 & -6 \\ 6 & - 17 & 1 & 18 \end{bmatrix}   
\to \begin{bmatrix} 3 & -11 & -2 & -6\\ 0 & -4 & 4 & 24\\ 6 & - 17 & 1 & 18 \end{bmatrix} 'reorder rows'
\to \begin{bmatrix} 3 & -11 & -2 & -6\\ 0 & 4 & 4 & 24\\ 0 & 5 & 5 & 30 \end{bmatrix}-2Row1$$


$$\to \begin{bmatrix} 3 & -11 & -2 & -6\\ 0 & 1 & 1 & 6\\ 0 & 1 & 1 & 6 \end{bmatrix} 
\to \begin{bmatrix} 3 & -11 & -2 & -6\\ 0 & 1 & 1 & 6\\ 0 & 0 & 0 & 0 \end{bmatrix}-Row2  \to \begin{bmatrix} 3 & -9 & 0 & 6\\ 0 & 1 & 1 & 6\\ 0 & 0 & 0 & 0 \end{bmatrix} +2Row2$$

$$\to \begin{bmatrix} 1 & -3 & 0 & 2\\ 0 & 1 & 1 & 6\\ 0 & 0 & 0 & 0 \end{bmatrix} divide by 3$$
$x_{1}-3x_{2}=2 \to x_1=2+3x_2$\
$x_{2}+x_{3}=6 \to x_3=6-x_2 (x_2 free)$\
e)\
$2x_{1}-x_{2}+3x_{3}=-1$\
$-4x_{1}+2x_{2}-6x_{3}=2$\
Convert System of Equations into an augmented matrix.
$$\begin{bmatrix} 2 & -1 & 3 & -1 \\ -4 & 2 & -6 & -2 \end{bmatrix} \to \begin{bmatrix} 2 & -1 & 3 & -1 \\ 0 & 0& 0 & 0 \end{bmatrix} +2Row1 $$
$2x_{1}-x_{2}+3x_{3}=-1 \to x_{2}=2x_{1}+3x_{3}+1  (x_{1},x_{3} free)$
