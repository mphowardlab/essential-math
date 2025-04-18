# Homogeneous linear first-order ODEs with constant coefficients

\begin{equation}
y'=A*y
\end{equation}

As an ansatz, assume a solution: 

$\begin{align}$
$y=(\exp^\lambda*t)*x$ $\rightarrow$ $y'=\lambda*(\e^(\lambda*t))*x$\\
$\lambda*(\e^(\lambda*t))*x=A*(\e^(\lambda*t)*x)$ $\rightarrow$ $\lambda*x=A*x$
$\end{align}$

 This is an eigenvalus problem! lambda is an eigenvalue, and x is an eigenvector of A.

We know an n*n matrix has n eigenvalues. Let's suppose the corresponding eigenvectors are all independent. What do we do?
Superposition principle: For a linear ODE, if y1 and y2 are both solutions, then

$\begin{align}$
$y=(c1*y1)+(c2*y2)$\\
is also a solution\\
$y=(c1*(\e^(\lambda1*t))*x1)+(c2*(\e^(\lambda2*t))*x2)+...+(cn*(\e^(\lambdan*t))*xn)$\\
(There are some cases this fails, but we will not cover them.)
$\end{align}$


Example: Reaction Network

$\begin{align}$
$\begin{equation}
c' = A*c 
\end{equation}$
$\begin{equation}
 A = \begin{Amatrix}[-k1 0 0, k1 -k2 0, 0 k2 0]\end{Amatrix}
\end{equation}$

A is lower triangular, so
$\begin{equation}
\lambda1 = -k1 \rightarrow \begin{bmatrix} [0 0 0, k1 -k2+k1 0, 0 k2 k1] \end{bmatrix}
\rightarrow (k1*x1)-(k2-k1)*x2=0
\rightarrow (k2*x2)+(k1*x3)=0
\rightarrow \rightarrow x1 = \begin{x1matrix}[(-(k2-k1)/k2), -k1/k2, 1]\end{x1matrix}
\end{equation}$
$\begin{equation}
\lambda2 = -k2 \rightarrow \begin{cmatrix} [k1-k2 0 0, k1 0 0, 0 k2 k2] \end{cmatrix}
\rightarrow x2 = \begin{x2matrix}[0, -1, 1]\end{x2matrix}
\end{equation}$
$\begin{equation}
\lambda3 = 0 \rightarrow \begin{dmatrix} [-k1 0 0, k1 -k2 0, 0 k2 0]\end{dmatrix}
\rightarrow x3= [0, 0, 1]
\end{equation}

Hence,

$\begin{equation}$
$c=(a1*(\e^(-k1*t*x1)))+(a2*(\e^(-k2*t*x2)))+(a3(\e^(*t*x3)))
\end{equation}$

Initial Condition:
$\begin{equation}
C(0) = \begin{Comatrix}[CA0, 0, 0]\end{Comatrix} = \begin{zmatrix}[a1*(-(k2-k1)/k2), -a1*(k1/k2)-a2, a1+a2+a3] \end{zmatrix}
\end{equation}$
$\rightarrow$ $a1=-CA0*(k2/(k2-k1))$
$\rightarrow$ $a2=-(k1/k2)*a1=CA0*(k1/(k2-k1))$
$\rightarrow$ $a3=-a1-a2=Ca0*(k2/(k2-k1))-CA0*(k1/(k2-k1))=CA0$

So,

$\begin{equation}
CA(t) = a1*(\e^(-k1*t*(-(k2-k1)/k2)))=CA0*(\e^(-k1*t))$
$CB(t) = a1*(\e^(-k1*t))*(-k1/k2)+a2*(\e^(-k2*t))*(-1)=CA0*(k1/(k2-k1))*((\e^(-k1*t))-(\e^(-k2*t)))$
$CC(t)=a1*(\e^(-k1*t))+a2*(\e^(-k2*t))+a3 = CA0*(1-(k2/(k2-k1))*(\e^(-k1*t))+(k1/(k2-k1))*(\e^(-k2*t))) \rightarrow This matches our old answer!
\end{align}