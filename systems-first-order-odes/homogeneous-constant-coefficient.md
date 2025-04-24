# Homogeneous linear first-order ODEs with constant coefficients

\begin{equation}
y' = Ay
\end{equation}

As an ansatz, assume a solution: 

\begin{align}
y &= e^{λt}x\\
y' &= λe^{λt}x
\end{align}

\begin{align}
λe^{λt}x &= Ae^{λt}x\\
λx &= Ax
\end{align}

This is an eigenvalus problem! lambda is an eigenvalue, and x is an eigenvector of A.


We know an n*n matrix has n eigenvalues. Let's suppose the corresponding eigenvectors are all independent. What do we do?


Superposition principle: For a linear ODE, if y1 and y2 are both solutions, then


\begin{equation}
y = (c_1 y_1) + (c_2 y_2) 
\end{equation}

is also a solution.

\begin{equation}
y = c_1 e^{λ_1 t} x_1 + c_2 e^{λ_2 t} x_2 + \dots + c_n e^{λ_n t} x_n
\end{equation}


There are some cases this fails, but we will not cover them.



## Example: Reaction Network

\begin{equation}
c' = A * c
\end{equation}

A =  \begin{bmatrix}  -k_1 & 0 & 0 \
 k_1 & -k_2 & 0 \
0 & k_2 & 0 
\end{bmatrix}

Matrix A is lower triangular, so

\begin{align}
λ1 &= -k_1  \rightarrow  \begin{bmatrix} 0 & 0 & 0\ 
k_1 & -k_2+k_1 & 0 \
 0 & k_2 & k_1 \end{bmatrix} \\
& \rightarrow  (k_1*x_1)-(k_2-k_1)*x_2 = 0 \\
& \rightarrow  (k_2*x_2)+(k_1*x_3) = 0 \\
& \rightarrow \rightarrow  x_1 = \begin{bmatrix} \frac{-k_2-k_1}{k_2} \ 
\frac{-k1}{k2} \ 
1 \end{bmatrix}
\end{align}

\begin{align}
λ2 &= -k2 \rightarrow  [k1-k2, 0, 0; k1, 0, 0; 0, k2, k2]  \\
& \rightarrow x2 = [0; -1; 1]  
\end{align}

\begin{align}
λ3 &= 0 \rightarrow  [-k1, 0, 0; k1, -k2, 0; 0, k2, 0] \\
& \rightarrow x3= [0; 0; 1] 
\end{align}

Hence,

\begin{equation}
 c = (a1 * e^{-k1*t} * x1) + (a2 * e^{-k2*t} * x2) + (a3 * x3) 
\end{equation}

Initial Condition:

\begin{align}
C(0) &= [CA0; 0; 0]; = [a1(-(k2-k1)/k2); -a1(k1/k2)-a2; a1+a2+a3] \\
%disp(C(0))
\rightarrow  a1 &= -CA0(k2/(k2-k1))  \\
\rightarrow  a2 &= -(k1/k2)a1 = CA0(k1/(k2-k1)) \\
\rightarrow  a3 &= -a1 - a2 = Ca0(k2/(k2-k1)) - CA0(k1/(k2-k1)) = CA0 
\end{align}

So,

\begin{align}
CA(t) &= a1(e^{-k1*t})(-(k2-k1)/k2) = CA0 * e^{-k1*t}  \\
CB(t) &= a1(e^{-k1*t})(-k1/k2) + a2(e^{-k2*t})(-1) = CA0 * (k1 / (k2 - k1)) * (e^{-k1*t} - e^{-k2*t}) \\
CC(t) &= a1(e^{-k1*t}) + a2(e^{-k2*t}) + a3 = CA0 * (1 - (k2 / (k2 - k1)) * e^{-k1*t}) + (k1 / (k2 - k1)) * e^{-k2*t}
\end{align}
$\rightarrow$ This matches our old answer!

