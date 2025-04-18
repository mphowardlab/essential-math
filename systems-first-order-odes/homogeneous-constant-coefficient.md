# Homogeneous linear first-order ODEs with constant coefficients
$
\begin{equation}y'=A*y\end{equation}

As an ansatz, assume a solution: 

\begin{align}
\begin{equation}y=(\exp^\lambda*t)*x \rightarrow y'=\lambda*(\exp^\lambda*t)*x  \end {equation}

\begin{equation}\lambda*(\exp^\lambda*t)*x=A*(\exp^\lambda*t)*x\end{equation} 

\rightarrow \begin{equation}\lambda*x=A*x\end{equation}
\end{align}

 This is an eigenvalus problem! lambda is an eigenvalue, and x is an eigenvector of A.

We know an n*n matrix has n eigenvalues. Let's suppose the corresponding eigenvectors are all independent. What do we do?

Superposition principle: For a linear ODE, if y1 and y2 are both solutions, then

\begin{align} 
\begin{equation}y=(c1*y1)+(c2*y2)\end{equation}
\end{align}

is also a solution.

\begin{align}
\begin{equation}y=(c1*(\exp^(\lambda1*t))*x1)+(c2*(\exp^(\lambda2*t))*x2)+...+(cn*(\exp^(\lambdan*t))*xn) \end{equation}
\end{align}

(There are some cases this fails, but we will not cover them.)


## Example: Reaction Network

\begin{align}
\begin{equation}c' = A*c \end{equation}

\begin{equation}A = \begin{bmatrix}[-k1 0 0, k1 -k2 0, 0 k2 0]\end{bmatrix}\end{equation}
\end{align}

A is lower triangular, so

\begin{align}
\begin{equation}\lambda1 = -k1 \rightarrow \begin{bmatrix} [0 0 0, k1 -k2+k1 0, 0 k2 k1] \end{bmatrix}\end{equation}

\rightarrow \begin{equation}(k1*x1)-(k2-k1)*x2=0 \end{equation}

\rightarrow \begin{equation}(k2*x2)+(k1*x3)=0\end{equation}

\rightarrow \rightarrow \begin{equation} x1 = \begin{bmatrix}[(-(k2-k1)/k2), -k1/k2, 1]\end{bmatrix} \end{equation}

\begin{equation}\lambda2 = -k2 \rightarrow \begin{bmatrix} [k1-k2 0 0, k1 0 0, 0 k2 k2] \end{bmatrix} \end{equation}

\rightarrow \begin{equation}x2 = \begin{bmatrix}[0, -1, 1]\end{bmatrix} \end{equation}

\begin{equation}\lambda3 = 0 \rightarrow \begin{bmatrix} [-k1 0 0, k1 -k2 0, 0 k2 0]\end{bmatrix}\end{equation}

\rightarrow \begin{equation}x3= [0, 0, 1]\end{equation} 
\end{align}

Hence,

\begin{align}
\begin{equation}c=(a1*(\exp^(-k1*t*x1)))+(a2*(\exp^(-k2*t*x2)))+(a3(\exp^(*t*x3)))\end{equation}
\end{align}

Initial Condition:

\begin{align}
\begin{equation}C(0) = \begin{Comatrix}[CA0, 0, 0]\end{Comatrix} = \begin{zmatrix}[a1*(-(k2-k1)/k2), -a1*(k1/k2)-a2, a1+a2+a3] \end{zmatrix}\end{equation} 

\rightarrow \begin{equation}a1=-CA0*(k2/(k2-k1))\end{equation}

\rightarrow \begin{equation}a2=-(k1/k2)*a1=CA0*(k1/(k2-k1))\end{equation}

\rightarrow \begin{equation}a3=-a1-a2=Ca0*(k2/(k2-k1))-CA0*(k1/(k2-k1))=CA0\end{equation}
\end{align}

So,

\begin{align}
\begin{equation}CA(t) = a1*(\exp^(-k1*t*(-(k2-k1)/k2)))=CA0*(\exp^(-k1*t))\end{equation}

\begin{equation}CB(t) = a1*(\exp^(-k1*t))*(-k1/k2)+a2*(\exp^(-k2*t))*(-1)=CA0*(k1/(k2-k1))*((\exp^(-k1*t))-(\exp^(-k2*t)))\end{equation}

\begin{equation}CC(t)=a1*(\exp^(-k1*t))+a2*(\exp^(-k2*t))+a3 = CA0*(1-(k2/(k2-k1))*(\exp^(-k1*t))+(k1/(k2-k1))*(\exp^(-k2*t)))\end{equation} \rightarrow This matches our old answer!
\end{align}