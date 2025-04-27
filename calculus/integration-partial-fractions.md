# Partial fraction decomposition


Some ODEs give rise to integrals like:


\begin{equation}
y' = \frac{3x+11}{x^2-x-6} \to y = \int \frac{3x+11}{x^2-x-6} \, dx
\end{equation}





This cannot be done with u-substitution... how to take it?

\begin{equation}
\frac{3x+11}{x^2-x-6} =\frac{3x+11}{(x-3)(x+2)} = \frac{A_1}{x-3} + \frac{A_2}{x+2}
\end{equation}

 

\begin{align}
3x+11 &= A_1(x+2) + A_2(x-3) \\
&= (A_1 + A_2)x + (2A_1 - 3A_2) \\
\end{align}

$ A_1  + A_2 = 3$

$2A_1 - 3A_2 = 11$

\begin{bmatrix} 1 & 1 & 3\\ 2 & -3 & 11 \end{bmatrix} \to \begin{bmatrix} 1 & 1 & 3\\ 0 & -5 & 5 \end{bmatrix} \to \begin{bmatrix} 1 & 1 & 3\\ 0 & 1 & -1 \end{bmatrix} \to \begin{bmatrix} 1 & 0 & 4\\ 0 & 1 & -1 \end{bmatrix}

$A_1=4$  $A_2=-1$

\begin{align}  
y&=\int\left( \frac{4}{x-3}-\frac{1}{x+2} \right)dx \\ 
&= 4\ln| x-3 | - \ln|x+2| + C  
\end{align}

```{topic} 
###Partial Fraction Decomposition
```
\begin{align}
Procedure: For a rational polynomial  \frac{P(x)}{Q(x)} where Q is expressed using either linear \left(ax+b)\right or irreducible quadratic \left(ax^2 + bx + c)\right factors and the degree of P is less than Q 
\end{align}

\begin{align}
$ax+b$ $\to$ $\frac{A}{ax+b}$

$(ax+b)^k \to \frac{A_1}{ax+b} + \frac{A_2}{(ax+b)^2}+ ...+ \frac{A_k}{(ax+b)^k}$

$ax^2 + bx + c \to \frac{Ax+B}{ax^2+bx+c}$

$(ax^2 + bx+c)^k $: repeat like for linear factor 
\end{align}

\begin{equation}
y'= \frac{x^2-29x+5}{(x-4)^2(x^2+3)}
\end{equation}


\begin{equation}
\frac{x^2-29x+5}{(x-4)^2(x^2+3)} = \frac{A_1}{x-4} + \frac{A_2}{(x-4)^2} + \frac{A_3x+ B_3}{x^2+3}
\end{equation}

\begin{equation}
x^2-29x+5 = A_1(x-4)(x^2+3) + A_2(x^2+3)+(A_3x+B_3)(x-4)^2
\end{equation}

\begin{equation}
=A_1(x^3-4x^2+3x-12)+A_2(x^2+3)+A_3x+B_3)(x^2-8x+16)
\end{equation}

\begin{equation}
=(A_1+A_3)x^3+(-4A_1+A_2-8A_3+B_3)x^2 + (3A_1+16A_3-8B_3)x+(-12A_1+3A_2+16B_3)
\end{equation}


\begin{equation}
A_1+A_3 = 0
\end{equaiton}

\begin{equation}
-4A_1 + A_2-8A_3 + B _3 =1
\end{equaiton}


\begin{equation}
3A_1 + 16A_3 - 8B_3 = -29
\end{equaiton}


\begin{equation}
$-12A_1+3A_2+16B_3 =5
\end{equation}


$\begin{bmatrix} 1 & 0 & 1 & 0\\ -4 & 1 & -8 & 1\\ 3 & 0 & 16 & -8\\ -12 & 3 & 0 & 16 \end{bmatrix} \begin{bmatrix} A_1 \\ A_2\\ A_3\\ B_3 \end{bmatrix} = \begin{bmatrix} 0\\ 1\\ -29 \\ 5 \end{bmatrix}$ $\to$ $A_1 = 1, A_2 = -5, A_3 = -1, B_3 =2$

\begin{equation}
 y= \int(\frac{1}{x-3}-\frac{5}{(x-4)^2}-\frac{x}{x^2+3}+\frac{2}{x^2+3}) dx
 \end{equation}

  \begin{equation}                          
y= \int (\frac{1}{+x^2}) dx = \arctanx
\end{equation}

\begin{equation}
= \ln|x-4|+\frac{5}{x-4} -\frac{1}{2}ln (x^2 + 3)+\frac{2}{\sqrt{3}} \arctan(\frac{x}{\sqrt{3}}) + C
\end{equation}




