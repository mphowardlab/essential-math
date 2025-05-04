# Numerical solution methods
\documentclass{article}
\usepackage{amsmath}
\usepackage{booktabs}
\usepackage{geometry}
\geometry{margin=1in}

\begin{document}

\section*{Euler's Method to Solve a System of First Order ODEs}

Determine \( y_1(5) \) and \( y_2(5) \) for the system:
\[
\begin{aligned}
    y_1' &= \frac{2}{3}y_1 - \frac{4}{3}y_1 y_2, \quad y_1(0) = 1.5, \\
    y_2' &= y_1 y_2 - y_2, \quad y_2(0) = 1.0
\end{aligned}
\]
with timestep \( \Delta t = 0.5 \).

Define the functions:
\[
\begin{aligned}
    f_1 &= \frac{2}{3}y_1 - \frac{4}{3}y_1 y_2, \\
    f_2 &= y_1 y_2 - y_2
\end{aligned}
\]

Euler's method update formula:
\[
y(t + \Delta t) = y(t) + f(t, y)\Delta t
\]

\subsection*{Numerical Results}

\begin{center}
\begin{tabular}{cccccc}
\toprule
\( n \) & \( t \) & \( y_1 \) & \( y_2 \) & \( f_1 \) & \( f_2 \) \\
\midrule
0  & 0.0 & 1.5   & 1.0   & -1.000 & 0.005 \\
1  & 0.5 & 1.0   & 1.25  & -1.000 & 0.000 \\
2  & 1.0 & 0.5   & 1.25  & -0.500 & -0.625 \\
3  & 1.5 & 0.25  & 0.938 & -0.146 & -0.703 \\
4  & 2.0 & 0.177 & 0.586 & -0.020 & -0.482 \\
5  & 2.5 & 0.167 & 0.345 & 0.035  & -0.287 \\
6  & 3.0 & 0.184 & 0.201 & 0.073  & -0.164 \\
7  & 3.5 & 0.221 & 0.120 & 0.112  & -0.093 \\
8  & 4.0 & 0.277 & 0.073 & 0.158  & -0.053 \\
9  & 4.5 & 0.356 & 0.046 & 0.215  & -0.030 \\
10 & 5.0 & 0.464 & 0.032 &        &        \\
\bottomrule
\end{tabular}
\end{center}

\subsection*{Results}

\begin{itemize}
    \item Euler's method gives:
    \[
    y_1(5) = 0.464, \quad y_2(5) = 0.032
    \]
    \item MATLAB's \texttt{ode45} gives:
    \[
    y_1(5) = 0.888, \quad y_2(5) = 0.165
    \]
    \item Absolute errors:
    \[
    \begin{aligned}
        \text{Error in } y_1 &= |0.888 - 0.464| = 0.424 \\
        \text{Error in } y_2 &= |0.165 - 0.032| = 0.133
    \end{aligned}
    \]
\end{itemize}

\end{document}

