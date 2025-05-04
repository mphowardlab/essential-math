# Numerical solution methods

\begin{equation}
y'_1 = \frac{2}{3} y_1 - \frac{4}{3} y_1 y_2 \hspace{1cm} y(0) = 1.5 \

y'_2 = y_1 y_2 - y_2 \hspace{1cm} y(0) = 1 
\end{equation}

using the Euler method with $\Delta t = 0.5$. Compare to ode45 

\begin{equation}
f_1 = \frac{2}{3} y_1 - \frac{4}{3} y_1 y_2 &= f_2 = y_1 y_2 - y_2 &= vv{y}(t+\Delta t) \approx \vv{y}(t) + \vv{f}(t, \vv{y}) \Delta tn
\end{equation}

