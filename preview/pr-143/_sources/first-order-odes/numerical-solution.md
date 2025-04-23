# Numerical solution methods

1. Numerical Solutions of First Order ODE's
   
   Some ODE's are hard(or impossible!) to solve analytically... or maybe you just don't want to! Numerical approximation to solution can be very valuable in these cases

   Euler's Method: Approximate y(t) by a Taylor Series
   y(t+\Delta t)~ y(t)+f(t,y)\Delta t

   This update can be applie multiple times, starting from the initial condition y(0), to reach a desired final time!

Ex: y'-y=x
\to y'=f(x,y)=x+y
Use step size \Delta x=.2
\begin{array}{ccc}
n & x_n & yn+\Delta xf(x_n,y_n) & =y_(n+1) & Exact & Error \\
0 & 0 & 0 & 0 & =0 & 0 & 0 \\
1 & 0.2 & 0 & 0.04 & =0.04 & 0.021 & 0.021 \\
2 & 0.4 & 0.04 & 0.088 & =0.128 & 0.092 & 0.052 \\
3 & 0.6 & 0.1128 & 0.146 & 0.274 & 0.222 & 0.094\\
4 & 0.8 & 0.274 & 0.215 & 0.489 & 0.426 & 0.152 \\
5 & 1.0 & 0.489 & & & 0.718 & 0.229
\end{array}
\right]
