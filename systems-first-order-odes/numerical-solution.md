# Numerical solution methods

Description: Many ordinary differential equations you will encounter are not solvable by any of the methods discussed thusfar. In such cases, a numerical solution method will result in a fairly accurate solution to the ODE. One such method is Euler's method. Through a series of iterations, Euler's method uses small steps to linearly approximate the solution based on the slope at each point. 

### Euler's Method

$ y' = f(t, y) \hspace{1cm} \to \hspace{1cm} y(t + (\Delta t)) = y(t) + f(t,y) (\Delta t)$

"Just" Add Columns 

```{image} ./_images/euler_diagram.png
:alt: Euler Diagram
:align: center
:width: 300px
```

Mole Balance

```{math}
\begin{align}
\frac{dn_A}{dt} = \dot n_{\rm in} - \dot n_{\rm out} + r_A V \hspace{1cm} \dot n_{\rm in} = \dot V_{\rm in} c_in,A  \\
\frac{Vc_A}{dt} = \dot V_{\rm in} c_in,A - \dot V c_A - kc_AV \hspace{1cm} \dot n_{\rm out} = \dot V_{\rm out} c_A \\
\end{align}
```

```{math}
V\frac{dc_A}{dt} + c_A\frac{dV}{dt} = 1 - 2c_A + kVc_A
```

Mass Balance

```{math}
\begin{align}
\frac{dm}{dt} = \dot m_{\rm in} - \dot m_{\rm out} \hspace{1cm} \dot m_{\rm in} = \dot V_{\rm in} (\rho) \\
\frac{d(\rho)V}{dt} = \dot V_{\rm in} (\rho) - \dot V_{\rm in} (\rho) \hspace{1cm} \dot m_{\rm out} = \dot V_{\rm in} (\rho) \\
\rho\frac{dV}{dt} = \dot V_{\rm in} (\rho) \cdot \dot V_{\rm out} (\rho) = 1 -2 = -1 \hspace{1cm} \dot m = V \rho
\end{align}
```

```{math}
\begin{align}
\frac{dc_A}{dt} = \frac{1}{V} [1 - c_A - 0.5Vc_A]  \hspace{1cm} c_A(0) = 1 \hspace{1cm}  y_1 = c_A \\
\frac{dV}{dt} = -1             \hspace{1cm}             V(0) = 10 \hspace{1cm}  y_2 = V \\
\end{align}
```

What is c_A and V after 1 minute?

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
n & t & c_A = y_1 & V = y_2 & f_1 & f_2 \\
\hline
0 & 0 & 1 & 10 & -0.5 & -1 \\
\hline
1 & 1 & 0.5 & 9 &  &  \\
\hline
\end{array}
$$



