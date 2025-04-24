# Gauss–Jordan elimination

Gauss(-Jordan) Elimination with Back Substitution

\begin{align}
Solve 2x_1 + 5x_2 = 2 --> x_1 = 1/2(2-5x_2) = 6 \\
13x_2 = -26 --> x_2 = -2   <ins>Back Substitution</ins> \\
\end{align}

<ins>Idea</ins>: If we can bring systems so that one variable is isolated, we 
can work backwards to solve the others! How do we do this?

Elementary operations: \begin{align} 
*Swap equations order
*Multiply one equation by a nonzero constant
*Add one equation to another
end{align}
Two linear systems are <ins>row-equivalent</ins> if one can be obtained from 
another by elementary operations.
 *Row-equivalent linear systems have the <ins>same</ins> set of solutions

Solve 
\begin{align}
2x_1 + 5x_2 = 2 --> 2x_1 + 5x_2 = 2 \\
-4x_1 + 3x_2 = -30 --> -4x_1 + 3x_2 = -30 \\
+2(2x_1 + 5x_2 = 2) --> 13x_2 = -26 &#10003; \\
\end{align}

How do we do this systematically? Matrices!
1. Form the "augmented" matrix 
\begin{equation}
\vv{A} = \begin{bmatrix} 2 & 5 \\ -4 & 3 \end{bmatrix} \qquad
\vv{b} = \begin{bmatrix} 2 \\ -30 \end{bmatrix}
\end{equation}
2. Perform elementary operations on rows on "pivot" points in each row.
The goal is to get a number in $a_11$, $a_22$, $a_33$, etc. and zeros <ins>below</ins>
in each column.
\begin{equation}
\begin{bmatrix} 2 & 5 & 2 \\ -4 & 3 & -30 \end{bmatrix} \qquad
\begin{bmatrix} 2 & 5 & 2 \\ 0 & 13 & -26 \end{bmatrix} + 2 Row 1
\end{equation}

3. Check there are no rows of zeros with a nonzero last column. (False equation)
If yes, <ins>no solution</ins>.

4. Work back up to turn pivots into 1 and get zeros <ins>above</ins> in each
column


5. The solution comes from reexpressing as <ins>A</ins> <ins>x</ins> = <ins>b</ins>
\begin{equation}
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \qquad
 \begin{bmatrix} $x_1$ \\ $x_2$ \end{bmatrix}
= \begin{bmatrix}

\end{equation}





