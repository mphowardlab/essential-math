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

\begin{align}  
 A_1  + A_2 &= 3 \\  
 2A_1 - 3A_2 &= 11  
\end{align} 

\begin{bmatrix} 1 & 1 & 3\\ 2 & -3 & 11 \end{bmatrix} \to \begin{bmatrix} 1 & 1 & 3\\ 0 & -5 & 5 \end{bmatrix} \to \begin{bmatrix} 1 & 1 & 3\\ 0 & 1 & -1 \end{bmatrix} \to \begin{bmatrix} 1 & 0 & 4\\ 0 & 1 & -1 \end{bmatrix}

\begin{align}
A_1=4  A_2=-1
\end{align}

\begin{align}  
y&=\int\left( \frac{4}{x-3}-\frac{1}{x+2} \right)dx \\ 
&= 4\ln| x-3 | - \ln|x+2| + C  
\end{align}


## Partial Fraction Decomposition


Procedure: For a rational polynomial $ \frac{P\left(x\right)}{Q\left(x\right)}$ where Q is expressed using either linear $\left(ax+b \right)$ or irreducible quadratic $\left(ax^2 + bx + c\right)$ factors and the degree of P is less than Q 



\begin{align}
ax+b \to \frac{A}{ax+b}
\end{align}

\begin{align}
\left(ax+b \right)^k \to \frac{A_1}{ax+b} + \frac{A_2}{\left(ax+b \right)^2}+ ...+ \frac{A_k}{\left(ax+b \right)^k}
\end{align}

\begin{align}
ax^2 + bx + c \to \frac{Ax+B}{ax^2+bx+c}
\end{align}

\begin{align}
\left(ax^2 + bx+c \right)^k \text{: repeat like for linear factors}  
\end{align} 
 

```{example} Using Partial Fraction Decomposition

To solve

\begin{equation}
y'= \frac{x^2-29x+5}{\left(x-4 \right)^2 \left(x^2+3 \right)}
\end{equation}

First, expand the denominator and put placeholder coefficient terms in the numerator.

\begin{equation}
\frac{x^2-29x+5}{\left(x-4 \right)^2 \left(x^2+3 \right)} = \frac{A_1}{x-4} + \frac{A_2}{(x-4)^2} + \frac{A_3x+ B_3}{x^2+3}
\end{equation}

Next, make a common denominator.

\begin{equation}
x^2-29x+5 = A_1 \left(x-4 \right) \left(x^2+3 \right) + A_2 \left(x^2+3 \right)+ \left(A_3x+B_3 \right) \left(x-4 \right)^2
\end{equation}

Then, group like terms. 

\begin{equation}
=A_1 \left(x^3-4x^2+3x-12 \right)+A_2 \left(x^2+3 \right)+\left(A_3x+B_3 \right)\left(x^2-8x+16 \right)
\end{equation}


\begin{equation}
=\left(A_1+A_3\right)x^3+\left(-4A_1+A_2-8A_3+B_3\right)x^2 + \left(3A_1+16A_3-8B_3\right)x+\left(-12A_1+3A_2+16B_3\right)
\end{equation}

Finally, solve system of equations.

\begin{align}  
A_1+A_3 &= 0 \\  
-4A_1 + A_2-8A_3 + B_3 &=1 \\  
3A_1 + 16A_3 - 8B_3 &= -29 \\  
-12A_1+3A_2+16B_3 &=5 \\  
\end{align}  


$\begin{bmatrix} 1 & 0 & 1 & 0\\ -4 & 1 & -8 & 1\\ 3 & 0 & 16 & -8\\ -12 & 3 & 0 & 16 \end{bmatrix} \begin{bmatrix} A_1 \\ A_2\\ A_3\\ B_3 \end{bmatrix} = \begin{bmatrix} 0\\ 1\\ -29 \\ 5 \end{bmatrix}$ $\to$ $A_1 = 1, A_2 = -5, A_3 = -1, B_3 =2$

\begin{equation}
 y= \int\left(\frac{1}{x-4}-\frac{5}{\left(x-4\right)^2}-\frac{x}{x^2+3}+\frac{2}{x^2+3}\right) dx
 \end{equation}

\begin{equation}                          
\arctan(x)= \int \left(\frac{1}{1+x^2}\right)dx  
\end{equation}



\begin{equation}
= \ln|x-4|+\frac{5}{x-4} -\frac{1}{2}ln (x^2 + 3)+\frac{2}{\sqrt{3}} \arctan\left( \frac{x}{\sqrt{3}} \right) + C  
\end{equation}




