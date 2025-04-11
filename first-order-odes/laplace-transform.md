<<<<<<< HEAD
# Laplace Transform



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
Y &= \frac{2}{s+k}\\
\end{align}

Invert Laplace transform

\begin{equation}
y = L^{-1}[\frac{2}{s+k}] = 2L^{-1}[\frac{1}{s+k}] = 2 e^{-kt}
\end{equation}


Given this initial value problem apply Laplace Transfrom

\begin{align}
y'-y &= t\\
y(0) &= 1\\
\end{align}

Apply Laplace Transfrom

\begin{align}
L[y'-y] &= L[t]\\
SY-y(0)-Y &= \frac{1}{s^2}\\
(s-1)Y-1 &= \frac{1}{s^2}\\
y=\frac{1}{(s-1)} + \frac{1}{(s-1)(s^2)}\\
\end{align}


The best method to narrow down this equation would be to use fraction decomposition

\begin{align}
\frac{1}{(s-1)(s^2)} &= \frac{A1}{(s-1)} + \frac{A2}{(s)} + \frac{A3}{(s^2)}\\
&=\frac{1}{(s-1)}+\frac{A2}{(s)} - \frac{A3}{(s^2)}\\
A1 &= \frac{1}{1^(1)} &= 1\\
A3 &= \frac{1}{(0-1)} &= -1\\
\end{align}


\begin{align}
1 &= s^2+A2(s-1)s-(s-1)\\
s^2\\
0 &= 1+A2\\
A2 &= -1\\
\end {align}

\begin{align}
Y&=\frac{1}{(s-1)} + \frac{1}{(s-1)}-\frac{1}{s}-\frac{1}{s^(2)}\\
Y&=\frac{2}{(s-1)}-\frac{1}{s} - \frac{1}{(s^(2))}\\
\end{align}

\begin{align}
y&=L^{-1}[Y]&=2L^{-1}[\frac{1}{(s-1)}]-L^{-1}[\frac{1}{s}]-L^{-1}[\frac{1}{s^2}]\\
y&=2e^t-1-t\\
\end{align}



