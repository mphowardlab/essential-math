# Homogeneous linear first-order ODEs with constant coefficients

y'=A*y


As an ansatz, assume a solution: 

\begin{align}
y=(\exp^t\lambda)x \rightarrow y'=\lambda(\exp^(t\lambda))x  \\
\lambda(\exp^t\lambda)x=A(\exp^t\lambda)x \rightarrow \lambda*x=Ax
\end{align}

This is an eigenvalus problem! lambda is an eigenvalue, and x is an eigenvector of A.


We know an n*n matrix has n eigenvalues. Let's suppose the corresponding eigenvectors are all independent. What do we do?

     Superposition principle: For a linear ODE, if y1 and y2 are both solutions, then 

\begin{align}
y=(c1y1)+(c2y2) 
\end{align}
is also a solution. 

\begin{align}
\rightarrow y=(c1(\exp^\lambda1t)x1)+(c2(\exp^(\lambda2t))x2)+...+(cn(\exp^(\lambda(n)t))xn)$
\end{align}
(There are some cases this fails, but we will not cover them.)



## Example: Reaction Network

\begin{equation}
A= [-k1 0 0;k1 -k2 0;0 k2 0]
\end{equation}

c' = A*c
%\disp{A}


The matrix is lower triangular, so

\begin{align}
\lambda1 = -k1 \rightarrow  [0 0 0; k1 -k2+k1 0; 0 k2 k1] \\
\rightarrow (k1*x1)-(k2-k1)*x2=0 \\
\rightarrow (k2*x2)+(k1*x3)=0 \\
\rightarrow \rightarrow x1 = [(-(k2-k1)/k2); -k1/k2; 1] \\
\lambda2 &= -k2 \rightarrow  [k1-k2 0 0; k1 0 0; 0 k2 k2]  \\
\rightarrow x2 = [0; -1; 1]  \\
\lambda3 = 0 \rightarrow  [-k1 0 0; k1 -k2 0; 0 k2 0] \\
\rightarrow x3= [0; 0; 1] \\
\end{align}

Hence,

\begin{align}
c=(a1(\exp^-k1t)x1)+(a2(\exp^-k2t)x2)+(a3(\exp^0t)x3)
\end{align}

Initial Condition:

\begin{align}
C(0) = [CA0; 0; 0] = [a1(-(k2-k1)/k2); -a1(k1/k2)-a2; a1+a2+a3] \\
\rightarrow a1=-CA0(k2/(k2-k1)) \\
\rightarrow a2=-(k1/k2)a1=CA0(k1/(k2-k1)) \\
\rightarrow a3=-a1-a2=Ca0(k2/(k2-k1))-CA0(k1/(k2-k1))=CA0
\end{align}

So,

\begin{align}
CA(t) = a1(\exp^t(-k1)(-(k2-k1)/k2))=CA0(\exp^t(-k1)) \\
CB(t) = a1(\exp^t(-k1))(-k1/k2)+a2(\exp^t(-k2))(-1)=CA0(k1/(k2-k1))((\exp^t(-k1))-(\exp^t(-k2))) \\
CC(t)=a1(\exp^t(-k1)+a2(\exp^t(-k2)+a3 = CA0(1-(k2/(k2-k1))(\exp^t(-k1))+(k1/(k2-k1))(\exp^t(-k2))) \rightarrow This matches our old answer!
\end{align}