# 1. Homogeneous linear first-order ODEs with constant coefficients
%
%
\begin{equation}
y'=A*y
\end{equation}
\begin{align}
As an ansatz, assume a solution: 
\begin{equation}
y=(exp^lambda*t)*x 
\end{equation}
\begin{equation}
y'=\lambda*(\e^(\lambda*t))*x
\lambda*(\e^(\lambda*t))*x=A*(\e^(\lambda*t)*x) 
\end{equation}
\begin{equation}
\lambda*x=A*x
\end{equation}
%
 This is an eigenvalus problem! lambda is an eigenvalue, and x is an eigenvector of A.
\end{alaign}
%
\begin{align}
% We know an n*n matrix has n eigenvalues. Let's suppose the corresponding eigenvectors are all independent. What do we do?
% -> Superposition principle: For a linear ODE, if y1 and y2 are both solutions, then 
\begin{equation}
y=(c1*y1)+(c2*y2)
\end{equation}
% is also a solution
\begin{equation}
y=(c1*(e^(lambda1*t))*x1)+(c2*(e^(lambda2*t))*x2)+...+(cn*(e^(lambdan*t))*xn)
\end{equation}
% (There are some cases this fails, but we will not cover them.)
\end{align}
%
%
# 2. Example: Reaction Network
c' = A*c
A = [-k1 0 0, k1 -k2 0, 0 k2 0]
disp(A)
% A is lower triangular, so
lambda1 = -k1 
l1 = [0 0 0, k1 -k2+k1 0, 0 k2 k1]
x1 = [(-(k2-k1)/k2), -k1/k2, 1]
lambda2 = -k2
l2 = [k1-k2 0 0, k1 0 0, 0 k2 k2]
x2 = [0, -1, 1]
lambda3 = 0
l3 = [-k1 0 0, k1 -k2 0, 0 k2 0])
x3= [0, 0, 1]
% Hence,
$c=(a1*(e^(-k1*t*x1)))+(a2*(e^(-k2*t*x2)))+(a3(e^(*t*x3)))
% Initial Condition
C(0) = [CA0, 0, 0] = [a1*(-(k2-k1)/k2), -a1*(k1/k2)-a2, a1+a2+a3]
$a1=-CA0*(k2/(k2-k1))
$a2=-(k1/k2)*a1=CA0*(k1/(k2-k1))
$a3=-a1-a2=Ca0*(k2/(k2-k1))-CA0*(k1/(k2-k1))=CA0
% So,
$CA(t) = a1*(e^(-k1*t*(-(k2-k1)/k2)))=CA0*(e^(-k1*t))
$CB(t) = a1*(e^(-k1*t))*(-k1/k2)+a2*(e^(-k2*t))*(-1)=CAo*(k1/(k2-k1))*((e^(-k1*t))-(e^(-k2*t)))
$CC(t)=a1*(e^(-k1*t))+a2*(e^(-k2*t))+a3 = CA0*(1-(k2/(k2-k1))*(e^(-k1*t))+(k1/(k2-k1))*(e^(-k2*t)))
% This matches our old answer!