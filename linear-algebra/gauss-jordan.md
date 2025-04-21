# Gauss–Jordan elimination
Solve the following using Gauss-Jordan Elimination 
(a)

$$
5x₁ - 2x₂ = 20.9
$$
$$
-x₁ + 4x₂ = -19.3
$$ 

$$
\begin{bmatrix} 5 & -2 &| + 20.9 \\ -1 & 4 &| -19.3  
\end{bmatrix}  
→  
\begin{bmatrix} 5 & -2 &| + 20.9 \\ -1 & 4 &| -19.3  
\end{bmatrix} \quad \text{Exchange rows and negate}

$$ 


  
$$
→  
\begin{bmatrix} 1 & -4 &| + 19.3 \\ 0 & 18 &| -75.6  
\end{bmatrix} \quad \text{-5 Row 1}
→  
\begin{bmatrix} 1 & -4 &| + 19.3 \\ 0 & 1 &| -4.20  
\end{bmatrix} \quad \text{Divide by 5}
$$

$$
→  
\begin{bmatrix} 1 & 0 &| + 2.5 \\ 0 & 1 &| -4.2  
\end{bmatrix} \quad \text{+4 Row 2}
$$
$$
 x₁ = 2.5 \\
x₂ = -4.2
$$
(b)

$$
x₁ + 4x₂ = 8 \\
2x₁ + 8x₂ = 17
$$

$$
\begin{bmatrix} 1 & 4 &| + 8 \\ 2 & 8 &| +17  
\end{bmatrix} 
→  
\begin{bmatrix} 1 & 4 &| + 8 \\ 10 & 0 &| +1  
\end{bmatrix} \quad \text{-2 Row 1}
$$


The equations do not have a solution because the system is false.

(c)


$$
x₁ + x₂ + x₃ = 2 \\
4x₂ + 6x₃ = -12 \\
x₁ + x₂ + x₃ = 2
$$

$$
\begin{bmatrix} 0 & 1 & 1&| - 2 \\ 0 & 4 & 6  &| -12  \\ 1 & 1 & 1 &| +2
\end{bmatrix} 
→  
\begin{bmatrix} 1 & 1 & 1&| +2 \\ 0 & 1 & 1  &| -2  \\ 0 & 4 & 6 &| -12
\end{bmatrix} \quad \text{Shuffle Rows}
$$
$$
→  
\begin{bmatrix} 1 & 1 & 1&| +2 \\ 0 & 1 & 1  &| -2  \\ 0 & 0 & 2 &| -4
\end{bmatrix} \quad \text{-4 Row 2}
→  
\begin{bmatrix} 1 & 1 & 1&| +2 \\ 0 & 1 & 1  &| -2  \\ 0 & 0 & 1 &| -2
\end{bmatrix} \quad \text{Divide by 2}
→  
\begin{bmatrix} 1 & 1 & 0&| +4 \\ 0 & 1 & 0  &| 0  \\ 0 & 0 & 1 &| -2
\end{bmatrix} \quad \text{-Row 3} 
$$

$$
→  
\begin{bmatrix} 1 & 0 & 0&| +4 \\ 0 & 1 & 0  &| 0  \\ 0 & 0 & 1 &| -2
\end{bmatrix} 
$$
$$
 x₁ = 4 \\
 x₂ = 0 \\
x₃ = -2
$$