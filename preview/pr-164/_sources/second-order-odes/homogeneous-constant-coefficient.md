# Homogeneous linear second-order ODEs with constant coefficients
\documentclass{article}
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{physics}
\usepackage{geometry}
\geometry{margin=1in}

\begin{document}
\section*{Solve the following:}

\subsection*{(a) $y'' - 2y' - 3y = 0$, $y(0) = 2$, $y'(0) = 14$}

\begin{align*}
\lambda^2 - 2\lambda - 3 &= 0 \\
(\lambda - 3)(\lambda + 1) &= 0 \\
\lambda_1 &= 3, \lambda_2 = -1
\end{align*}

The general solution is:
\begin{align*}
y &= c_1 e^{3t} + c_2 e^{-t} \\
y' &= 3c_1 e^{3t} - c_2 e^{-t}
\end{align*}

Using the initial conditions:
\begin{align*}
2 &= y(0) = c_1 + c_2 \\
14 &= y'(0) = 3c_1 - c_2
\end{align*}

Solving the system:
\begin{align*}
\begin{bmatrix} 1 & 1 \\ 3 & -1 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} &= \begin{bmatrix} 2 \\ 14 \end{bmatrix} \\
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} &= \begin{bmatrix} 4 \\ -2 \end{bmatrix}
\end{align*}

Therefore:
\begin{align*}
\boxed{y = 4e^{3t} - 2e^{-t}}
\end{align*}

\subsection*{(b) $y'' + 2y' + y = 0$, $y(0) = 4$, $y'(0) = -6$}

\begin{align*}
\lambda^2 + 2\lambda + 1 &= 0 \\
(\lambda + 1)^2 &= 0 \\
\lambda &= -1 \text{ (repeated root)}
\end{align*}

The general solution is:
\begin{align*}
y &= (c_1 + c_2 t) e^{-t} \\
y' &= (c_1 + c_2 t)(-e^{-t}) + c_2 e^{-t} = (-c_1 - c_2 t + c_2)e^{-t}
\end{align*}

Using the initial conditions:
\begin{align*}
4 &= y(0) = c_1 \\
-6 &= y'(0) = -c_1 + c_2 \Rightarrow c_2 = -2
\end{align*}

Therefore:
\begin{align*}
\boxed{y = (4 - 2t)e^{-t}}
\end{align*}

\subsection*{(c) $10y'' - 50y' + 65y = 0$, $y(0) = \frac{3}{2}$, $y'(0) = \frac{3}{2}$}

\begin{align*}
10\lambda^2 - 50\lambda + 65 &= 0 \\
\lambda_{1,2} &= \frac{50 \pm \sqrt{50^2 - 4 \cdot 10 \cdot 65}}{20} \\
&= \frac{50 \pm \sqrt{2500 - 2600}}{20} \\
&= \frac{50 \pm \sqrt{-100}}{20} \\
&= \frac{50 \pm 10i}{20} \\
&= \frac{5 \pm i}{2}
\end{align*}

The general solution is:
\begin{align*}
y &= e^{\frac{5t}{2}} \left( c_1 \cos\frac{t}{2} + c_2 \sin\frac{t}{2} \right) \\
y' &= e^{\frac{5t}{2}} \left( -\frac{c_1}{2} \sin\frac{t}{2} + \frac{c_2}{2} \cos\frac{t}{2} \right) + \frac{5}{2}e^{\frac{5t}{2}} \left( c_1 \cos\frac{t}{2} + c_2 \sin\frac{t}{2} \right)
\end{align*}

Using the initial conditions:
\begin{align*}
\frac{3}{2} &= y(0) = c_1 \\
\frac{3}{2} &= y'(0) = \frac{c_2}{2} + \frac{5}{2}c_1 \Rightarrow c_2 = -\frac{9}{2}
\end{align*}

Therefore:
\begin{align*}
\boxed{y = e^{\frac{5t}{2}} \left( \frac{3}{2} \cos\frac{t}{2} - \frac{9}{2} \sin\frac{t}{2} \right)}
\end{align*}

\subsection*{(d) $y'' + \pi y' = 0$, $y(0) = 3$, $y'(0) = -\pi$}

\begin{align*}
\lambda^2 + \pi\lambda &= 0 \\
\lambda(\lambda + \pi) &= 0 \\
\lambda_1 &= 0, \lambda_2 = -\pi
\end{align*}

The general solution is:
\begin{align*}
y &= c_1 + c_2 e^{-\pi t} \\
y' &= -c_2 \pi e^{-\pi t}
\end{align*}

Using the initial conditions:
\begin{align*}
3 &= y(0) = c_1 + c_2 \\
-\pi &= y'(0) = -c_2 \pi \Rightarrow c_2 = 1
\end{align*}

Therefore:
\begin{align*}
c_1 &= 3 - c_2 = 3 - 1 = 2 \\
\boxed{y = 2 + e^{-\pi t}}
\end{align*}

\end{document}

