# Homogeneous linear second-order ODEs with constant coefficients

Second order differential equations can be useful for diffusion-style problems. 

````{example} Steady-state Reaction Diffusion
You are analyzing how the concentration changes over the length of a pipe.

```{image} ./_images/flash.svg
```
\begin{align}
D\frac{d'c}{dx^2}-kc &= 0
\end{align}

The concentration is described by this equation with boundary conditions of:
\begin{align}
C(0)&=C_0 \\
-D\frac{dc/dx}&=0
\end{align}

Replacing c' with \lambda yields 

\begin{align} 
D\lambda^2 - k &= 0
\end{align}
Which, when factored yields $\displaystyle\lambda_{1,2} = \pm \sqrt{\frac{k}{D}}$. (note that the units of $\lambda$ are $\frac{1}{m}$, so it is a length scale)

We can assume a solution of the form $\displaystyle y=C_1\exp{a_1x}+C_2\exp{a_2x}

\begin{align}
c&= a_1\exp{x\sqrt{\frac{k}{D}}}+a_2\exp{-x\sqrt{\frac{k}{D}}}//
c'&=a_1\sqrt{\frac{k}{D}}\exp{x\sqrt{\frac{k}{D}}}-a_2\sqrt{\frac{k}{D}}\exp{-x\sqrt{\frac{k}{D}}}
\end{align}
Solving for the initial conditions yields 
