# Homogeneous linear first-order ODEs with constant coefficients
Solve $\underline{y}$'= **A** $\underline{y}$ with 

\begin{equation}
\vv{\underline{y}(0)}= 
\begin{bmatrix} 1 & 0 \end{bmatrix}^{\rm T} 
\end{equation}

\begin{equation}
\vv{A} = \begin{bmatrix} -2 & 0  \\ 0 & -2  \end{bmatrix} 
\end{equation}


**A** is upper triangular, so its eigen values are on its diagonal \
    \begin{align} $\lambda_{1}$ = $\lambda_{2}$ = -2 \end{align}

Its eigen vectors are 

\begin{equation}
\vv{x_{1}} = \begin{bmatrix} 1 \\ 0  \end{bmatrix} \qquad
\vv{x_{2}} = \begin{bmatrix} 0  \\  1  \end{bmatrix}
\end{equation}

since **A** - $\lambda$ **I** = 0. 

General Solution: 
$\underline{y}$ = C_{1}e^-2t \begin{matrix} 1 \\ 0  \end{bmatrix} + C_{2}e^-2t \begin{matrix} 0 \\ 1  \end{bmatrix} \

Initial Condition: 

\begin{equation}
\vv{\underline{y}(0)}= 
\begin{bmatrix} 1 \ 0 \end{bmatrix} =  \begin{bmatrix} 1 & 0 \ 0 & 1 \end{bmatrix} \begin{bmatrix} C_1 \ C_2 \end{bmatrix}
\end{equation}

$C_{1}$ = 1  $C_{2}$ =0
