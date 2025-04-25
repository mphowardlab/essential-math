# Homogeneous linear first-order ODEs with constant coefficients

\begin{equation}
\vv{y'} = \vv{Ay}
\end{equation}

As an ansatz, assume a solution: 

\begin{align}
y &= e^{λt}\vv{x}\\
y' &= λe^{λt}\vv{x}
\end{align}

\begin{align}
λe^{λt}x &= Ae^{λt}\vv{x}\\
λ\vv{x} &= \vv{Ax}
\end{align}

This is an eigenvalus problem! lambda is an eigenvalue, and $\vv{x}$ is an eigenvector of $\vv{A}$.


We know an n*n matrix has n eigenvalues. Let's suppose the corresponding eigenvectors are all independent. What do we do?


Superposition principle: For a linear ODE, if $y_1$ and $y_2$ are both solutions, then:


\begin{equation}
\vv{y} = (c_1\vv{y_1}) + (c_2\vv{y_2}) 
\end{equation}

is also a solution.

\begin{equation}
\vv{y} = c_1 e^{λ_1t}\vv{x_1} + c_2 e^{λ_2t}\vv{x_2} + \dots + c_n e^{λ_nt}\vv{x_n}
\end{equation}


There are some cases this fails, but we will not cover them.



## Example: Reaction Network

\begin{equation}
\vv{c'} = \vv{Ac}
\end{equation}

\begin{equation}
\vv{A} =  \begin{bmatrix}  -k_1 & 0 & 0 \\
 k_1 & -k_2 & 0 \\
0 & k_2 & 0 
\end{bmatrix}
\end{equation}

Matrix $\vv{A}$ is lower triangular, so

\begin{align}
λ_1 &= -k_1  \rightarrow  \begin{bmatrix} 0 & 0 & 0 \\ 
k_1 & -k_2+k_1 & 0 \\
 0 & k_2 & k_1 \end{bmatrix} \\
& \rightarrow  (k_1\vv{x_1})-(k_2-k_1)\vv{x_2} = 0 \\
& \rightarrow  (k_2\vv{x_2})+(k_1\vv{x_3}) = 0 \\
& \rightarrow \rightarrow  \vv{x_1} = \begin{bmatrix} \frac{-k_2-k_1}{k_2} \\ 
\frac{-k1}{k2} \\ 
1 \end{bmatrix}
\end{align}

\begin{align}
λ_2 &= -k_2 \rightarrow  \begin{bmatrix} k_1-k_2 & 0 & 0 \\
k1 & 0 & 0 \\
0 & k_2 & k_2  \end{bmatrix} \\
& \rightarrow \vv{x_2} = \begin{bmatrix} 0 \\
-1 \\
1 \end{bmatrix}  
\end{align}

\begin{align}
λ_3 &= 0 \rightarrow  \begin{bmatrix} -k_1 & 0 & 0 \\
k_1 & -k_2 & 0 \\
0 & k_2 & 0 \end{bmatrix} \\
& \rightarrow \vv{x_3} = \begin{bmatrix} 0\\
0 \\
1 \end{bmatrix} 
\end{align}

Hence,

\begin{equation}
\vv{c} = (a_1e^{-k_1t}\vv{x_1}) + ({a_2}e^{-k_2t}\vv{x_2}) + (a_3\vv{x_3}) 
\end{equation}

Initial Condition:

\begin{align}
C_{(0)} &= \begin{bmatrix} C_{A0}\\
0 \\
0 \end{bmatrix} = \begin{bmatrix} a_1\frac{-k_2-k_1}{k_2} \\
 -a_1\frac{k_1}{k_2}-a_2 \\
a_1+a_2+a_3 \end{bmatrix} \\
\rightarrow  a_1 &= -C_{A0}\frac{k_2}{k_2-k_1}  \\
\rightarrow  a_2 &= -\frac{k_1}{k_2}a_1 = C_{A0}\frac{k_1}{k_2-k_1} \\
\rightarrow  a_3 &= -a_1 - a_2 = C_{A0}\frac{k_2}{k_2-k_1} - C_{A0}\frac{k_1}{k_2-k_1} = C_{A0} 
\end{align}

So,

\begin{align}
C_A(t) &= a_1(e^{-k_1t})\frac{-k_2-k_1}{k_2} = C_{A0}e^{-k_1t}  \\
C_B(t) &= a_1(e^{-k_1t})\frac{-k_1}{k_2} + a_2(e^{-k_2t})(-1) = CA0\frac{k_1}{k_2 - k_1}(e^{-k_1t} - e^{-k_2t}) \\
C_C(t) &= a_1(e^{-k_1t}) + a_2(e^{-k_2t}) + a_3 = CA0(1 - \frac{k_2}{k_2 - k_1} e^{-k_1t}) + \frac{k_1}{k_2 - k_1} e^{-k_2t}
\end{align}
$\rightarrow$ This matches our old answer!

