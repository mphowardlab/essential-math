# Numerical solution methods
Determine y_1(5) and y_2(5) for 

\begin{equation}
y'_1 = \frac{2}{3} y_1 - \frac{4}{3} y_1 y_2 \hspace{1cm} y(0) = 1.5
\end{equation}

\begin{equation}
y'_2 = y_1 y_2 - y_2 \hspace{1cm} y(0) = 1 
\end{equation}

using the Euler method with $\Delta t = 0.5$. Compare to ode45.

\begin{equation}
f_1 = \frac{2}{3} y_1 - \frac{4}{3} y_1 y_2 \hspace{.5cm} f_2 = y_1 y_2 - y_2 \hspace{.5cm} \vv{y}(t+\Delta t) \approx \vv{y}(t) + \vv{f}(t, \vv{y}) \Delta tn
\end{equation}

| $n$ | $t$ | $y_1$ | $y_2$ | $f_1$ | $f_2$ |
|-----|-----|-------|-------|-------|-------|
| 0   | 0   | 1.500 | 1.000 |-1.000 | 0.500 |
| 1   | 0.5 | 1.000 | 1.250 |-1.000 | 0.000 |
| 2   | 1.0 | 0.500 | 1.250 |-0.500 |-0.625 |
| 3   | 1.5 | 0.250 | 0.938 |-0.146 |-0.703 |
| 4   | 2.0 | 0.177 | 0.586 |-0.020 |-0.482 |
| 5   | 2.5 | 0.167 | 0.345 | 0.035 |-0.287 |
| 6   | 3.0 | 0.184 | 0.201 | 0.073 |-0.164 |
| 7   | 3.5 | 0.221 | 0.120 | 0.112 |-0.093 |
| 8   | 4.0 | 0.277 | 0.073 | 0.158 |-0.053 |
| 9   | 4.5 | 0.356 | 0.046 | 0.215 |-0.030 |
| 10  | 5.0 | 0.464 | 0.032 |       |       |

\begin{equation}
y_1(5) = 0.464 \hspace{1cm} y_2(5) = 0.032
\end{equation}

MATLAB(see attached) gives $y_1(5) = 0.888$ and $y_2(5) = 0.165$.
Hence, the absolute errors are 0.424 and 0.133 for $y_1$ and $y_2$ respectively.
