# Numerical solution methods
\begin{align}
Euler's Method to Solve a System of First Order ODEs
\end{align}
\begin{align}
Determine y1(5) and y2(5) for 
\end{align}
y1' = (2/3)y1 - (4/3)y1*y2 \qquad y1(0) = 1.5
y2' = y1*y2 - y2 \qquad y2(0) = 1.0
\end{align}
\begin{align}
timestep dt = 0.5 compare to ode45.
\end{align}
f1 = (2/3)y1 - (4/3)y1*y2
f2 = y1*y2 - y2
y(t+dt) = y(t) + f(t,y)*dt
n      t      y1     y2    . f1     f2
0     0.0    1.5    1.0    -1.000  0.005
1     0.5    1.0    1.25   -1.000  0.000
2     1.0    0.5    1.25   -0.500 -0.625
3     1.5    0.25   0.938  -0.146 -0.703
4     2.0    0.177  0.586  -0.020 -0.482
5     2.5    0.167  0.345   0.035 -0.287
6     3.0    0.184  0.201   0.073 -0.164
7     3.5    0.221  0.120   0.112 -0.093
8     4.0    0.277  0.073   0.158 -0.053
9     4.5    0.356  0.046   0.215 -0.030
10    5.0    0.464  0.032 
  
  y1(5) = 0.464   y2(5) = 0.032

Matlab gives y1(5) = 0.888 and y2(5) = 0.165. Hence, the absolute
errors are 0.424 and 0.133 for y1 and y2 respectively. 
