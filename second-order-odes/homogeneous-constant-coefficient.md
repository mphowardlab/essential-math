# Homogenous linear second-order ODEs with constant coefficients 
Equations of the form

\being{equation}
y'' + ay' + by = 0
\end{equation}

come up often so it is important to know how to solve them!
  * Mechanics
  * Heat/Mass Diffusion (steady)
  * Solving partial differential equations for unsteady processes

Solution: Try $y=e^x$ as an ansatz: \
\begin{equation}
    y = e^{\lambda x} \
    y' = \lambda{e^\lambda x} \
    y'' = \lambda^2 e^{\lambda x}
\end{equation}

We can solve this characteristic polynomial for $\lambda_1$ and $\lambda_2$ and use superposition. There are 3 cases:

(1) $\lambda_1 $ and $ \lambda_2 $ are real and distinct: $y = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$

(2) $\lambda_{1,2} = \alpha \pm i \omega$ are complex: $ y = e^{\omega x} (c_1 cos \omega x + c_2 sin \omega x) $

(3) $\lambda_1 = \lambda_2 = \lambda $ is real and repeated: $ y=(c_1 + c_2 x) e^{\lambda x} $

***2. Examples*** \
```{example} 
(1) $y'' + y' - 2y = 0 \quad y(0)=4 \quad y'(0)=-5 $\
    $\lambda^2 + \lambda -2 = 0 \to (\lambda+2)(\lambda+1)=0 \to \lambda_1 =-2$ and $\lambda_2 =1$ \
    $y = c_1 e^{-2x} + c_2 e^{x} \qquad 4=y(0)=c_1 + c_2$ \
    $y' = -2c_1 e^{-2x} + c_2 e^{x} \qquad -5=y'(0)=-2c_1 + c_2$

\begin{equation}
\begin{bmatrix}
1 & 1 & 4 \\
-2 & 1 & -5
\end{bmatrix}
\to
\begin{bmatrix}
1 & 1 & 4 \\
0 & 3 & 3 
\end{bmatrix}
\to
\begin{bmatrix}
1 & 1 & 4 \\
0 & 1 & 1
\end{bmatrix}
\to 
\begin{bmatrix}
1 & 0 & 3 \\
0 & 1 & 1
\end{bmatrix}
\end{equation}


c_1 = 3 \ \qquad c_2 = 1 \

y = 3 e^{-2x} + e^{x}\
```

```{example} Using fixed point iteration
(2) y'' + 0.4y' + 9.04y = 0 \quad y(0)=0 \quad y'(0)=3 \
\lambda^{2} + 0.4\lambda + 9.04 =0 \to \lambda_{1,2} = \frac{-0.4\pm\sqrt{0.4^2-4\times9.04}}{2} = -0.2\pm 3i \

y = e^{-0.2x}(c_1\cos3x + c_2\sin3x) \qaud 0=y(0)=c_1 \
y' = e^{-0.2x}(3c_2\cos3x) - 0.2e^{-0.2x}c_2\sin3x \quad 3=y'(0) = 3c_2 \to c_2 =1 \
y = e^{-0.2x}\sin3x \
```

```{example} Using fixed point iteration
(3) y'' + y' + \frac{1}{4}y=0 \quad y(0)=3 \quad y'(0)= -\frac{7}{2} \
\lambda^2 + \lambda + \frac{1}{4} = 0 \to (\lambda + \frac{1}{2})^2 = 0 \to \lambda=-\frac{1}{2} \
y=(c_1 + c_2x)e^{-\frac{x}{2}} \quad 3=y(0)=c_1 \
y'=(c_1 + c_2x)(-\frac{1}{2}e^{-\frac{x}{2}}) + c_2 e^{-\frac{x}{2}} \quad -\frac{7}{2}=y'(0)= -\frac{c_1}{2} + c_2 \to c_2 = -2 \

y = (3-2x)e^{\frac{-x}{2}}
```

















