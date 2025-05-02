# Linearity
## 2. Example: Reaction Network
A $\xrightarrow{k_1}$ B $\xrightarrow{k_2}$ C , only A at t=0 with concentration C<sub>A,0</sub> 

$\frac{dC_A}{dt}= -k_{1} C_{A}$

$\frac{dC_B}{dt}= k_{1} C_{A} -k_{2} C_{B}$   $\qquad$  $\qquad$       $\xrightarrow{}$ $\qquad$ $\underline{C'}$=$
\begin{bmatrix}
-k_{1} & 0 & 0 \\
k_{1} & -k_{2} & 0 \\
0 &  k_{2} & 0
\end{bmatrix}$ $\underline{C}$

$\frac{dC_C}{dt}= k_{2} C_{B}$ $\qquad$ $\qquad$ $\underline{C}(0)=C_{0}$=$
\begin{bmatrix}
C_{A,0} \\
0  \\
0 
\end{bmatrix}$

### How do we solve this? Hard in general, but in this case we can work in order!
(1) $\frac{dC_A}{dt}= -k_{1} C_{A}$   $\xrightarrow{}$   $\int \frac{1}{C_A}\ dC_{A}$ = $\int -k_{1}\ dt$ $\xrightarrow{}$ $C_{A} =C_{A,0}e^{-k_{1}t}$\
 $\qquad$  $\qquad$  $\qquad$  $\qquad$ $\ln{C_A} = -k_{1}t + K$
 
(2) $\frac{dC_B}{dt}= k_{1} C_{A} -k_{2} C_{B} = \frac{dC_B}{dt}= k_{1} C_{A,0}e^{-k_{1}t} -k_{2} C_{B}$\
$\quad$ $\frac{dC_B}{dt} + k_{2} C_{B}=k_{1} C_{A,0}e^{-k_{1}t}$

$\qquad$ Integrating factor: $F= e^{\int p\ dt} = e^{\int k_{2}\ dt} = e^{k_{2}t}$\
 $\qquad$ $\int Fr\ dt = \int e^{k_{2}t}k_{1}C_{A,0}e^{-k_{1}t}\ dt= k_{1}C_{A,0} \int e^{(k_{2}-k_{1})t}\ dt = \frac{k_{1}C_{A,0}}{k_{2}-k_{1}} e^{(k_{2}-k_{1})t}$

$\qquad$ $C_{B}= e^{-k_{2}t}[\frac{k_{1}C_{A,0}}{k_{2}-k_{1}} e^{(k_{2}-k_{1})t}+K]= C_{A,0} \frac{k_{1}}{k_{2}-k_{1}}(e^{-k_{1}t}-e^{-k_{2}t})= C_B$\
$\qquad$ $0=C_{B}(0)=\frac{k_{1}C_{A,0}}{k_{2}-k_{1}} + K$ $\xrightarrow{}$ $K=-\frac{k_{1}C_{A,0}}{k_{2}-k_{1}}$

(3) $\frac{dC_C}{dt}= k_{2} C_{B}=\frac{k_{1}k_{2}C_{A,0}}{k_{2}-k_{1}}(e^{-k_{1}t}-e^{-k_{2}t})$\
$\quad$ $C_{C}=\frac{k_{1}k_{2}C_{A,0}}{k_{2}-k_{1}} \int_0^t (e^{-k_{1}t}-e^{-k_{2}t})\ dt = C_{A,0}(1- \frac{k_2}{k_{2}-k_{1}}e^{-k_{1}t}+\frac{k_1}{k_{2}-k_{1}}e^{-k_{2}t})$

### What if $k_{1}=k_{2}$?
Cannot just evaluate since there would be 0/0, so use limits

$\lim_{k_{2} \to k_{1}} C_{B}= C_{A,0}k_{1} \lim_{k_{2} \to k_{1}} \frac{e^{-k_{1}t}-e^{-k_{2}t}}{k_{2}-k_{1}}= C_{A,0}k_{1}\lim_{k_{2} \to k_{1}}\frac {\frac{\partial}{\partial k_{2}}(e^{-k_{1}t}-e^{-k_{2}t})}{\frac{\partial}{\partial k_{2}}(k_{2}-k_{1})}$\
$\qquad$ $\qquad$ $\quad$ $= C_{A,0}k_{1}\lim_{k_{2} \to k_{1}} \frac {te^{-k_{2}t}}{1}= C_{A,0}k_{1}te^{-k_{1}t}$
