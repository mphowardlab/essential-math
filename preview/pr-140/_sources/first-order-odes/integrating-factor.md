# Integrating factor.  

## 4. Example: 
Mole balance on a tank with increasing inlet/outlet flow rate. 
````{example} 

```{image}

\begin{align}
\dot n_A &= \dot n_A,in  -  \dot n_A,out
\dot n_A,in &= C_f,A * \dot q * t
\dot n_A &= C_f,A * \dot q * t. - (n_A \ v) * \dot q * t
\end{align}

Rewrite: 
\begin{align}
\dot n_A + ((\dot q * t)\v)_n_A &= C_f,A * \dot q * t
P(t) &= ((\dot q * t) / v).  r(t) &= C_f,A * \dot q * t
\end{align}

\begin{aligh}
F(t) &=  \exp(\int p(t) * dt) &= \exp(\int ((\dotq * t)/v)) * dt &= \exp(1/2 * \dotq * t^2)
\int F(t)* r(t) dt &= \int \exp(1/2 * \dotq / v * t^2) * C_f,A * \dotq * t* dt &= \int \exp(u) * C_f,A*V*du &= C_f,A*V*\exp(1/2)*\dotq/v*t^2
u &= 1/2 * \dotq/v * t^2
du &= \dotq/v * t* dt \to \dotq*t*dt &= V*du
n_A * (t) &= \exp(-1/2 * \dotq/v * t^2) * [C_f,A*V*\exp(1/2 * \dotq/v *t^2) + C]
n_A*(0) &= n_A,o &= C_f,A * V + C \to C &= n_A,o -C_f,A*V
\to (\underline{n_A*(t) &= C_f,A*V + (n_A,o - C_f,A*V)*\exp(-1/2*\dotq/v*t^2)})
\end{align}


### 5. Example:
Hormone level (again)
\begin{align}
We had c' + kc &= A + B*\cos((\pi*t)/12) with c(0) &= C_o
p &= kc   r &= A + B*\cos((\pi*t)/12)
F(t) = \exp(\int k*dt) &= \exp(kt)
\int F(t)*r(t)*dt &= \int \exp(kt)*[A + B*\cos((\pi*t)/12)]*dt
                 &= A * \int \exp(kt)*dt + B * \int \exp(kt)* \cos((\pi*t)/12)*dt
                 \to Table of integrals, or by parts 
                 &= A/k * \exp(kt) + B * (\exp(kt)/(k^2 + (\pi/12)^2))*[K*\cos((\pi*t)/12) + \pi/12 * \sin((\pi*t)/12)]
\to C(t) &= \exp(-kt)* (A/k * \exp(kt) + B * (\exp(kt)/(k^2 + (\pi/12)^12))* [k * \cos((\pi*t)/12) + \pi/12*\sin((/pi*t)/12)]+c^*)
\end{align}



