# Numerical solution methods

Description: Many ordinary differential equations you will encounter are not solvable by any of the methods discussed thusfar. In such cases, a numerical solution method will result in a fairly accurate solution to the ODE. One such method is Euler's method. Through a series of iterations, Euler's method uses small steps to linearly approximate the solution based on the slope at each point. 

# Euler's Method

y' = f(t, y) \to y(t) + (\Delta T) = y(t) + f(t,y) (\Delta T )

"Just" Add Columns 

IMAGE (ask!!)

Mole Balance

```{math}
\begin{aligned}
\frac{dn_A}{dt} = \dot n_{\rm in} - \dot n_{\rm out} + r_A V \\
\dot n_{\rm in} = \dot V_{\rm in} c_in,A  \\
\frac{Vc_A}{dt} = \dot V_{\rm in} c_in,A - \dot V c_A - kc_AV \\
\dot n_{\rm out} = \dot V_{\rm out} c_A \\
V\frac{dc_A}{dt} + c_A\frac{dV}{dt} = 1 - 2c_A + kVc_A \\
\end{aligned}
```

Mass Balance

```{math}
\begin{aligned}
\frac{dm}{dt} = \dot m_{\rm in} - \dot m_{\rm out} \\
\dot m_{\rm in} = \dot V_{\rm in} (\delta h) \\
\frac{d(\delta h)V}{dt} = \dot V_{\rm in} (\delta h) - \dot V_{\rm in} (\delta h)\ \\
\dot m_{\rm out} = \dot V_{\rm in} \delta h
\(\delta h) frac{dV}{dt} = \dot V_{\rm in} (\delta h) \cdot \dot V_{\rm out} (\delta h) = 1 -2 = -1 
\end{aligned}
```

