<<<<<<< HEAD
# Issue 41


Given the initial value problem

\begin{align}
y' &=-ky \\
y(0) &=2
\end{align}

Rearrange and apply Laplace transform

\begin{align}
y'+ky &= 0 \\
L[y'+ky] &= L[0] \\
SY-y(0)+kY &= 0 \\
(s+k)Y-2 &= 0 \\
Y &= 2\div(s+k)
\end{align}

Invert Laplace transform

\begin{equation}
y = L^{-1}[2\div(s+k)] = 2L^{-1}[1\div(s+k)] = 2 e^{-kt}
\end{equation}


Given this initial value problem apply Laplace Transfrom

\begin{align}
y'-y &= t
y(0) &= 1
\end{align}

Apply Laplace Transfrom

\begin{align}
L[y'-y] &= L[t]\\
SY-y(0)-Y &= 1\div(s^(2))\\
(s-1)Y-1 &= 1\div(s^(2))\\
y=1\div(s-1) + 1\div((s-1)(s^(2)))\\
\end{align}

The equation 1/(s-1) looks like it would be e^t however when solving for 1/((s-1)(s^(2))) it could be a number of different things.

The best method to narrow down the options would be to use fraction decomposition

\begin{align}
1\div((s-1)(s^(2))) &= A1\div(s-1) + A2\div(s) + A3\div(s^(2))\\
1\div(s-1)+A2\div(s) - A3\div(s^2)\\
A1 &= 1\div1^(1) &= 1\\
A3 &= 1\div (0-1) &= -1\\
\end{align}


\begin{align}
1 &= s^(2)+A2(s-1)s-(s-1)\\
s^(2): 0 &= 1+A2\\
A2 &= -1
\end {align}

\begin{align}
Y&=1\div(s-1) + ((1\div(s-1))-(1\div(s))-(1\div(s^(2))))\\
Y&=2\div(s-1)-1\div(s) - 1\div(s^(2))\\
\end{align}

\begin{equation}
y=L^(-1)[Y]=2L^(-1)[1\div(s-1)]-L^(-1)[1\div(s)]-L^(-1)[1\div(s^(2))]\\
y=2e^(t)-1-t\\
\end{equation}



