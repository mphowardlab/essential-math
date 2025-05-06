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

2. Next, use the equation of $c_{\rm A}$ to solve $\dd{}{c_{\rm B}}{t}$:
   \begin{align}
   \dd{}{c_{\rm B}}{t} &= k_{1} c_{\rm A,0}e^{-k_{1}t} -k_{2} c_{\rm B} \\
   \dd{}{c_{\rm B}}{t} + k_{2} c_{\rm B}&=k_{1} c_{\rm A,0}e^{-k_{1}t}
   \end{align}

Apply the integrating factor:
   \begin{align}
   F &= e^{\int p \d{t}} \\
   c_{\rm B} &=\int Fr\ d{t}
   \end{align}
such that:
   \begin{align}
   p &=k_{2}\\
   r &=k_{1} c_{\rm A,0}e^{-k_{1}t}
   \end{align}
So,
   \begin{align}
   F &=e^{\int k_{2}\ d{t}}\\
   F &=e^{k_{2}t}\\
   c_{\rm B} &=\int e^{k_{2}t}k_{1}c_{\rm A,0}e^{-k_{1}t} \d{t}\\
    &=k_{1}c_{\rm A,0} \int e^{(k_{2}-k_{1})t} \d{t}\\
    &=\frac{k_{1}c_{\rm A,0}}{k_{2}-k_{1}}e^{(k_{2}-k_{1})t} + K
   \end{align}

Plug in the initial value of $c_{\rm B}$:
   \begin{align}
   c_{\rm B}(0)=0$=\frac{k_{1}c_{\rm A,0}}{k_{2}-k_{1}} + K\\
   K&=-\frac{k_{1}c_{\km A,0}}{k_{2}-k_{1}}\\
   c_{\rm B} &=\frac{k_{1}c_{\rm A,0}}{k_{2}-k_{1}}e^{(k_{2}-k_{1})t} -\frac{k_{1}c_{\rm A,0}}{k_{2}-k_{1}}
   \end{align}

3. Finally, use the equation of $c_{\rm B}$ to solve $\dd{}{c_{\rm C}}{t}$:
   \begin{align}
   \dd{}{c_{\rm C}}{t} $= k_{2} c_{\rm B} \\
    $=\frac{k_{1}k_{2}c_{\rm A,0}}{k_{2}-k_{1}}(e^{-k_{1}t}-e^{-k_{2}t})
   \end{align}

   Integrate both sides and apply initial value of $c_{\rm C}$:
   \begin{align}
   c_{\rm C} &=\frac{k_{1}k_{2}c_{\rm A,0}}{k_{2}-k_{1}} \int_0^t (e^{-k_{1}t}-e^{-k_{2}t})\ d{t}\\
   &= c_{\rm A,0}(1- \frac{k_2}{k_{2}-k_{1}}e^{-k_{1}t}+\frac{k_1}{k_{2}-k_{1}}e^{-k_{2}t})
   \end{align}


### What if $k_{1}=k_{2}$?
Cannot just evaluate since there would be 0/0, so use limits

$\lim_{k_{2} \to k_{1}} C_{B}= C_{A,0}k_{1} \lim_{k_{2} \to k_{1}} \frac{e^{-k_{1}t}-e^{-k_{2}t}}{k_{2}-k_{1}}= C_{A,0}k_{1}\lim_{k_{2} \to k_{1}}\frac {\frac{\partial}{\partial k_{2}}(e^{-k_{1}t}-e^{-k_{2}t})}{\frac{\partial}{\partial k_{2}}(k_{2}-k_{1})}$\
$\qquad$ $\qquad$ $\quad$ $= C_{A,0}k_{1}\lim_{k_{2} \to k_{1}} \frac {te^{-k_{2}t}}{1}= C_{A,0}k_{1}te^{-k_{1}t}$
