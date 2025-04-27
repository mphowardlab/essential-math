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

General Solution: \
\begin{equation}
\vv{x_{\underline{y}} = C_1 e^{-2t} \begin{bmatrix} 1 \\ 0 \end{bmatrix} + C_2 e^{-2t} \begin{bmatrix} 0 \\ 1 \end{bmatrix}
\end{equation}


Initial Condition: 

\begin{equation}
\begin{bmatrix} 1 \\ 0\end{bmatrix} = \vv{\underline{y}(0)} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} C_1 \\ C_2 \end{bmatrix}
\end{equation}

\begin{align} 
C_{1} = 1 \qquad C_{2} =0 
\end{align}

Hence, \vv{\underline{y}} =e^2t
\begin{bmatrix} 1 \\ 0 \end{bmatrix} 
or y_{1}(t) = e^-2t y_{2}(t) = 0

$\underline{y}$ = 0 is a *stable proper node* because $\lambda_{1}$ = $\lambda_{2}$ $\l$ 0 and **A** is a multiple of **I**. \

(b) 
\begin{equation} \vv{A} = \begin{bmatrix} 0 & 3 \\ 12 & 0 \end{bmatrix} \end{equation} \
| **A** - $\lambda$ **I** | = 
