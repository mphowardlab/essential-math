# Homogeneous linear first-order ODEs with constant coefficients

$y'=A*y


As an ansatz, assume a solution: 

\begin{align}
y=(\exp^\(lambda*t))x \rightarrow y'=\lambda(\exp^\lambdat)x  \\
\lambda(\exp^\lambdat)x=A(\exp^\lambdat)x \rightarrow \lambdax=Ax
\end{align}

This is an eigenvalus problem! lambda is an eigenvalue, and x is an eigenvector of A.

We know an n*n matrix has n eigenvalues. Let's suppose the corresponding eigenvectors are all independent. What do we do?

\begin{align} 
Superposition principle: For a linear ODE, if y1 and y2 are both solutions, then \\

y=(c1y1)+(c2y2) \\

is also a solution. \\

\rightarrow y=(c1(\exp^(\lambda1t))x1)+(c2(\exp^(\lambda2t))x2)+...+(cn(\exp^(\lambda(n)t))xn) \\

(There are some cases this fails, but we will not cover them.)
\end{align}


## Example: Reaction Network


c' =  \begin{bmatrix}[-k1 0 0, k1 -k2 0, 0 k2 0]\end{bmatrix} * c

The matrix is lower triangular, so

\begin{align}
\lambda1 = -k1 \rightarrow \begin{bmatrix} [0 0 0, k1 -k2+k1 0, 0 k2 k1] \end{bmatrix} \\
\rightarrow (k1*x1)-(k2-k1)*x2=0 \\
\rightarrow (k2*x2)+(k1*x3)=0 \\
\rightarrow \rightarrow x1 = \begin{bmatrix}[(-(k2-k1)/k2), -k1/k2, 1]\end{bmatrix} \\
\lambda2 &= -k2 \rightarrow \begin{bmatrix} [k1-k2 0 0, k1 0 0, 0 k2 k2] \end{bmatrix} \\
\rightarrow \begin{equation}x2 = \begin{bmatrix}[0, -1, 1]\end{bmatrix}  \\
\lambda3 = 0 \rightarrow \begin{bmatrix} [-k1 0 0, k1 -k2 0, 0 k2 0]\end{bmatrix} \\
\rightarrow x3= [0, 0, 1] \\
\end{align}

Hence,

\begin{align}
c=(a1*(\exp^(-k1*t*x1)))+(a2*(\exp^(-k2*t*x2)))+(a3(\exp^(*t*x3)))
\end{align}

Initial Condition:

\begin{align}
C(0) &= \begin{Comatrix}[CA0, 0, 0]\end{Comatrix} = \begin{zmatrix}[a1*(-(k2-k1)/k2), -a1*(k1/k2)-a2, a1+a2+a3] \end{zmatrix} \\
\rightarrow a1=-CA0*(k2/(k2-k1)) \\
\rightarrow a2=-(k1/k2)*a1=CA0*(k1/(k2-k1)) \\
\rightarrow a3=-a1-a2=Ca0*(k2/(k2-k1))-CA0*(k1/(k2-k1))=CA0
\end{align}

So,

\begin{align}
CA(t) = a1*(\exp^(-k1*t*(-(k2-k1)/k2)))=CA0*(\exp^(-k1*t)) \\
CB(t) = a1*(\exp^(-k1*t))*(-k1/k2)+a2*(\exp^(-k2*t))*(-1)=CA0*(k1/(k2-k1))*((\exp^(-k1*t))-(\exp^(-k2*t))) \\
CC(t)=a1*(\exp^(-k1*t))+a2*(\exp^(-k2*t))+a3 = CA0*(1-(k2/(k2-k1))*(\exp^(-k1*t))+(k1/(k2-k1))*(\exp^(-k2*t))) \rightarrow This matches our old answer!
\end{align}