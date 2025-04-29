# Homogeneous linear first-order ODEs with constant coefficients
Solve $\underline{y}$'= **A** $\underline{y}$ with 

\begin{equation}
\vv{\underline{y}(0)}= 
\begin{bmatrix} 1 & 0 \end{bmatrix}^{\rm T} 
\end{equation}

\begin{equation}
\vv{A} = \begin{bmatrix} -2 & 0  \\ 0 & -2  \end{bmatrix} 
\end{equation}


**A** is upper triangular, so its eigen values are on its diagonal 
\begin{align} 
\lambda_{1} = \lambda_{2} = -2 
\end{align}

Its eigen vectors are 

\begin{equation}
\vv{x_{1}} = \begin{bmatrix} 1 \\ 0  \end{bmatrix} \qquad
\vv{x_{2}} = \begin{bmatrix} 0  \\  1  \end{bmatrix}
\end{equation}

since **A** - $\lambda$ **I** = 0. 

General Solution: 
\begin{equation}
\vv{\underline{y}} = C_{1} e^{-2t} \begin{bmatrix} 1 \\ 0 \end{bmatrix} + C_{2} e^{-2t} \begin{bmatrix} 0 \\ 1 \end{bmatrix}
\end{equation}


Initial Condition: 

\begin{equation}
\begin{bmatrix} 1 \\ 0\end{bmatrix} = \vv{\underline{y}(0)} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} C_1 \\ C_2 \end{bmatrix}
\end{equation}

\begin{align} 
C_{1} = 1 \qquad C_{2} =0 
\end{align}

Hence, 
\begin{equation}
\vv{\underline{y}} =e^{-2t}
\begin{bmatrix} 1 \\ 0 \end{bmatrix} 
\end{equation}
\begin{align} 
or \qquad y_{1}(t)=e^{-2t} \qquad y_{2}(t) = 0
\end{align}

$\underline{y}$ = 0 is a *stable proper node* because $\lambda_{1}$ = $\lambda_{2}$ $\lt$ 0 and **A** is a multiple of **I**. 
 
\begin{equation} 
\vv{A} = \begin{bmatrix} 0 & 3 \\ 12 & 0 \end{bmatrix} 
\end{equation} 

\begin{equation}
\vv{|A-\lambda I|}= 
\begin{bmatrix} 
-\lambda & 3  \\ 12 & -\lambda \end{bmatrix} = \lambda^{2}-36=0. 
\end{equation}

\begin{align} 
\lambda_{1} = 6 \qquad \lambda_{2} = -6
\end{align} 
 
$\lambda_{1}$ = 6:
\begin{equation} 
\begin{bmatrix} -6 & 3 \\ 12 & -6 \end{bmatrix} \underline{x_{1}} = 0 
\end{equation} \qquad
\underline{x_{1}} = \begin{bmatrix} = 1 \\ 2 \end{bmatrix} 


General Solution: 

\begin{equation}
\vv{\underline{y}} = C_{1} e^{-6t} \begin{bmatrix} 1 \\ 2 \end{bmatrix} + C_{2} e^{-6t} \begin{bmatrix} 1 \\ -2 \end{bmatrix}
\end{equation}

Initial Condition: 

\begin{equation}
\begin{bmatrix} 1 \\ 0\end{bmatrix} = \vv{\underline{y}(0)} = \begin{bmatrix} 1 & 1 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} C_1 \\ C_2 \end{bmatrix}
\end{equation}

Hence, 
\begin{equation}
\vv{\underline{y}} = \frac{1}{2}e^{-6t} \begin{bmatrix} 1 \\ 2 \end{bmatrix} + \frac{1}{2}e^{-6t} \begin{bmatrix} 1 \\ -2 \end{bmatrix}
\end{equation}
\begin{align} 
or \qquad y_{1}=\frac{1}{2}(e^{6t}+e^{-6t}) \qquad y_{2} = e^{6t}+e^{-6t}
\end{align}
