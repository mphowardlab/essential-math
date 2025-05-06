# Linearity
```{example} Reaction network

We are analyzing a simple reaction sequence:
\begin{equation}
A \xrightarrow{k_1} B \xrightarrow{k_2} C
\end{equation}

At $t = 0$, only species *A* is present at concentration  $c_{{\rm A},0}$. We set up the differential equations:
\begin{align}
\dd{}{c_{\rm A}}{t} &= -k_{1} c_{\rm A} \\
\dd{}{c_{\rm B}}{t} &= k_{1} c_{\rm A} - k_{2} c_{\rm B} \\
\dd{}{c_{\rm C}}{t} &= k_{2} c_{\rm B}
\end{align}

The equations can be represented in matrix form:
\begin{equation}
\vv{c}' = \begin{bmatrix} -k_1 & 0 & 0 \\ k_1 & -k_2 & 0 \\ 0 & k_2 & 0 \end{bmatrix} \vv{c}, \quad
\vv{c}(0) = \begin{bmatrix} c_{{\rm A},0} \\ 0 \\ 0 \end{bmatrix}
\end{equation}
---

How do we solve this? Hard in general, but in this case, we can work in order!
1. First, solve $\dd{}{c_{\rm A}}{t}$:
   \begin{equation}
   \dd{}{c_{\rm A}}{t} = -k_{1} c_{\rm A}
   \end{equation}
   Integrating both sides:
   \begin{align}
   \int \frac{\d{c_{\rm A}}}{c_{\rm A}} &= \int -k_{1} \d{t} \\
   \ln c_{\rm A} &= -k_1 t + K
   \end{align}
   So,
   \begin{equation}
   c_{\rm A} = c_{{\rm A}, 0} e^{-k_1 t}
   \end{equation}

2. Next, solve $\dd{}{c_{\rm B}}{t}$ by substituting in $c_{\rm B}$:
   \begin{align}
   \dd{}{c_{\rm B}}{t} = k_{1} c_{A,0}e^{-k_{1}t} -k_{2} C_{B}
\begin{align}


$\quad$ $\frac{dc_B}{dt} + k_{2} c_{B}=k_{1} c_{A,0}e^{-k_{1}t}$

$\qquad$ Integrating factor: $F= e^{\int p\ dt} = e^{\int k_{2}\ dt} = e^{k_{2}t}$\
 $\qquad$ $\int Fr\ dt = \int e^{k_{2}t}k_{1}c_{A,0}e^{-k_{1}t}\ dt= k_{1}c_{A,0} \int e^{(k_{2}-k_{1})t}\ dt = \frac{k_{1}c_{A,0}}{k_{2}-k_{1}} e^{(k_{2}-k_{1})t}$

$\qquad$ $C_{B}= e^{-k_{2}t}[\frac{k_{1}C_{A,0}}{k_{2}-k_{1}} e^{(k_{2}-k_{1})t}+K]= c_{A,0} \frac{k_{1}}{k_{2}-k_{1}}(e^{-k_{1}t}-e^{-k_{2}t})= c_B$\
$\qquad$ $0=c_{B}(0)=\frac{k_{1}c_{A,0}}{k_{2}-k_{1}} + K$ $\xrightarrow{}$ $K=-\frac{k_{1}c_{A,0}}{k_{2}-k_{1}}$

(3) $\frac{dC_C}{dt}= k_{2} c_{B}=\frac{k_{1}k_{2}c_{A,0}}{k_{2}-k_{1}}(e^{-k_{1}t}-e^{-k_{2}t})$\
$\quad$ $c_{C}=\frac{k_{1}k_{2}c_{A,0}}{k_{2}-k_{1}} \int_0^t (e^{-k_{1}t}-e^{-k_{2}t})\ dt = c_{A,0}(1- \frac{k_2}{k_{2}-k_{1}}e^{-k_{1}t}+\frac{k_1}{k_{2}-k_{1}}e^{-k_{2}t})$

### What if $k_{1}=k_{2}$?
Cannot just evaluate since there would be 0/0, so use limits

$\lim_{k_{2} \to k_{1}} C_{B}= C_{A,0}k_{1} \lim_{k_{2} \to k_{1}} \frac{e^{-k_{1}t}-e^{-k_{2}t}}{k_{2}-k_{1}}= C_{A,0}k_{1}\lim_{k_{2} \to k_{1}}\frac {\frac{\partial}{\partial k_{2}}(e^{-k_{1}t}-e^{-k_{2}t})}{\frac{\partial}{\partial k_{2}}(k_{2}-k_{1})}$\
$\qquad$ $\qquad$ $\quad$ $= C_{A,0}k_{1}\lim_{k_{2} \to k_{1}} \frac {te^{-k_{2}t}}{1}= C_{A,0}k_{1}te^{-k_{1}t}$
