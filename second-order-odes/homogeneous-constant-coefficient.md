# Homogeneous linear second-order ODEs with constant coefficients

Second order differential equations can be useful for diffusion-style problems. 

````{example} Steady-state Reaction Diffusion
You are analyzing how the concentration changes over the length of a pipe.

```{image} ./_images/Reaction_diffuse.svg
```
\begin{align}
D\frac{d^2c}{dx^2}-kc &= 0
\end{align}

The concentration is described by this equation with boundary conditions of:
\begin{align}
C(0)=C_0 \\
-D\frac{dc}{dx}=0
\end{align}

Replacing c' with $\lambda$ yields 

\begin{align} 
D\lambda^2 - k &= 0
\end{align}
Which, when factored yields $\displaystyle\lambda_{1,2} = \pm \sqrt{\frac{k}{D}}$ (note that the units of $\lambda$ are $\frac{1}{m}$, so it is a length scale)

We can assume a solution of the form $\displaystyle y=C_1e^{a_1x}+C_2e^{a_2x}$ 

c= a_1e^{x\sqrt{k/D}}+a_2e^{-x\sqrt{k/D}}\\
c'=a_1\sqrt{k/D}e^{x\sqrt{k/D}-a_2\sqrt{k/D}e^{-x\sqrt{k/D}}

Solving for the initial conditions yields 

\begin{align}
a_1&= \frac{C_0}{1+e^{2L\sqrt{k/D}}} \qquad
a_2= \frac{C_0}{1+e^{-2L\sqrt{k/D}}}
\end{align}

Thus, 

\begin{align}
C=C_0\left(\frac{e^{x\sqrt{k/D}}}{1+e^{2L\sqrt{k/D}}}+\frac{e^{x\sqrt{k/D}}}{1+e^{-2L\sqrt{k/D}}}\right)
\end{align}

This can be simplified using a common denominator and the identities $\displaystyle cosh(x)= \frac{e^{x}+e^{-x}}{2}$ and $\displaystyle sinh(x)= \frac{e^{x}-e^{-x}}{2}$, which yields 

\begin{align}
C=C_0\frac{cosh\left[(L-x)sqrt{k/D}\right]}{cosh(L\sqrt{k/D})}
\end{align}