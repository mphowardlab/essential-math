# Homogeneous linear first-order ODEs with constant coefficients

\begin{equation}
\vv{y}' = \vv{A} \vv{y} 
\end{equation}

As an ansatz, assume a solution: 

\begin{align}
\vv{y} &= e^{\lambda t} \vv{x} \\  
\vv{y}' &= \lambda e^{\lambda t} \vv{x} 
\end{align}

\begin{align}
\lambda e^{\lambda t} \vv{x} &= \vv{A} e^{\lambda t}\\
\lambda \vv{x} &= \vv{A} \vv{x}  
\end{align}

This is an eigenvalus problem! lambda is an eigenvalue, and $\vv{x}$ is an eigenvector of $\vv{A}$.

We know an *n* x *n* matrix has *n* eigenvalues. Let's suppose the corresponding eigenvectors are all independent. What do we do?

Superposition principle: For a linear ODE, if $\vv{y}_1$ and $\vv{y}_2$ are both solutions, then:

\begin{equation}
\vv{y} = (c_1\vv{y_1}) + (c_2\vv{y_2}) 
\end{equation}

is also a solution.

\begin{equation}
\vv{y} = c_1 e^{\lambda_1 t}\vv{x}_1 + c_2 e^{\lambda_2 t}\vv{x}_2 + \dots + c_n e^{\lambda_n t}\vv{x}_n
\end{equation}

There are some cases this fails, but we will not cover them.

```{example} Reaction Network  
We are solving a linear system of ODEs arising from a reaction network:  

\begin{equation}  
\vv{c}' = \vv{A} \vv{c}  
\end{equation}  

where:  

\begin{equation}  
\vv{A} = \begin{bmatrix} -k_1 & 0 & 0 \\ k_1 & -k_2 & 0 \\ 0 & k_2 & 0 \end{bmatrix}  
\end{equation}  

Matrix $\vv{A}$ is lower triangular, so its eigenvalues are:  

\begin{equation}  
\lambda_1 = -k_1, \quad \lambda_2 = -k_2, \quad \lambda_3 = 0  
\end{equation}  

We need to find the corresponding eigenvectors. Starting with $\lambda_1 = -k_1$: 

\begin{equation}  
\begin{bmatrix} 0 & 0 & 0 \\ k_1 & -k_2 + k_1 & 0 \\ 0 & k_2 & k_1 \end{bmatrix}  
\end{equation}  

From this, we obtain two equations:  

\begin{align}  
k_1 \vv{x}_1 - (k_2 - k_1) \vv{x}_2 &= 0 \\  
k_2 \vv{x}_2 + k_1 \vv{x}_3 &= 0  
\end{align}  

Solving this system gives:  

\begin{equation}  
\vv{x}_1 = \begin{bmatrix} \frac{-k_2 - k_1}{k_2} \\ \frac{-k_1}{k_2} \\ 1 \end{bmatrix}  
\end{equation}  

Next, we will solve with $\lambda_2 = -k_2$, which gives:

\begin{equation}
\vv{x}_2 = \begin{bmatrix} 0 \\
-1 \\
1 \end{bmatrix}  
\end{equation}

Finally, we solve with $\lambda_3 = 0$ to obtain:

\begin{equation}
\vv{x}_3 = \begin{bmatrix} 0\\
0 \\
1 \end{bmatrix} 
\end{equation}

Hence,

\begin{equation}
\vv{c} = a_1e^{-k_1t}\begin{bmatrix} \frac{-k_2 - k_1}{k_2} \\ \frac{-k_1}{k_2} \\ 1 \end{bmatrix}  + {a_2}e^{-k_2t}\begin{bmatrix} 0 \\ -1 \\ 1 \end{bmatrix} + a_3e^{0 t}\begin{bmatrix} 0\\ 0 \\ 1 \end{bmatrix}
\end{equation}

Which simplifies to:

$\vv{c} = a_1e^{-k_1t}\begin{bmatrix} \frac{-k_2 - k_1}{k_2} \\ \frac{-k_1}{k_2} \\ 1 \end{bmatrix}  + {a_2}e^{-k_2t}\begin{bmatrix} 0 \\ -1 \\ 1 \end{bmatrix} + a_3{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$

Initial Condition:

\begin{align}
\vv{C}(0) &= \begin{bmatrix} C_{A0}\\
0 \\
0 \end{bmatrix} = \begin{bmatrix} a_1\frac{-k_2-k_1}{k_2} \\
 -a_1\frac{k_1}{k_2}-a_2 \\
a_1+a_2+a_3 \end{bmatrix} \\

Thus, 

a_1 &= -C_{A0}\frac{k_2}{k_2-k_1}  \\
a_2 &= -\frac{k_1}{k_2}a_1 \\
&= C_{A0}\frac{k_1}{k_2-k_1} \\
a_3 &= -a_1 - a_2 = C_{A0}\frac{k_2}{k_2-k_1} - C_{A0}\frac{k_1}{k_2-k_1} \\
&= C_{A0} 
\end{align}

So,

\begin{align}
C_A(t) &= a_1e^{-k_1t}\frac{-k_2-k_1}{k_2} 
&= C_{A0}e^{-k_1t}  \\
C_B(t) &= a_1e^{-k_1t}\frac{-k_1}{k_2} + a_2e^{-k_2t}(-1) \\
&= C_{A0}\frac{k_1}{k_2 - k_1}(e^{-k_1t} - e^{-k_2t}) \\
C_C(t) &= a_1e^{-k_1t} + a_2e^{-k_2t} + a_3 \\
&= C_{A0}(1 - \frac{k_2}{k_2 - k_1} e^{-k_1t} + \frac{k_1}{k_2 - k_1} e^{-k_2t})
\end{align}
$\rightarrow$ This matches our old answer!
```
