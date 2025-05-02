# Homogeneous linear second-order ODEs with constant coefficients

````{example} Spring and dashpot
We are analyzing how the drag force affects the spring oscilations. This is a
mechanics example, but models like this are also used for the rheology of
viscoelastic materials.

A mass *m* is attached to a Hookean spring with spring constant *k* and
experiences a drag force as it moves with drag coefficient $\gamma$.

```{image} ./_images/Spring_and_Dashpot.jpg
:width: 300px
```

If *x* is the displacement of the spring, the governing equation for *x* is
given by Newton's equations:

\begin{equation}
m x'' + \gamma x' + k x = 0
\end{equation}

The first term represents the acceleration of the mass, the second term is the
drag force, and the third term is the spring force.

For what values of $\gamma$ will the mass oscillate after it is stretched?

---

To answer this, first solve the roots of the characteristic polynomial for this
second-order ODE:

\begin{align}
&m \lambda^2 + \gamma \lambda + k = 0 \\
\lambda_{1,2} &= \frac{ -\gamma \pm \sqrt{\gamma^2 - 4mk}}{2m}
\end{align}

You will only get oscillations if $\lambda_{1,2}$ is complex, which only occurs
when $\gamma^2 < 4mk$. In this case:

\begin{equation}
\lambda_{1,2} = -\frac{\gamma}{2m} \pm \frac{i}{2m}\sqrt{4mk - \gamma^2}
\end{equation}

so the general solution for *x* is:

\begin{equation}
x(t) = \exp\left(-\frac{\gamma}{2m} t \right)
\left [ c_1 \cos(\omega t)+ c_2 \sin(\omega t) \right]
\end{equation}

where $\omega = \sqrt{4mk - \gamma^2}$. What does $\gamma$ do to the solution?

- $\gamma$ dampens the oscillations to decay to zero. The decay time $2m/\gamma$
  increases as $\gamma$ decreases, and without it, oscillations go on forever.
- $\gamma$ also changes the frequency of the oscillations through $\omega$.

````

Second-order ODEs also come up frequently in steady-state transport problems
involving diffusion.

````{example} Steady-state reaction-diffusion
A first-order reaction is occuring in a liquid film of thickness *L*. The
reactant concentration at $x = 0$ is fixed to the bulk value $c_0$, while
a solid substrate at $x=L$ prevents any mass flux.

```{image} ./_images/Reaction_diffuse.svg
:alt: One-dimensional reaction-diffusion
:width: 300px
:align: center
```

At steady-state, the reactant concentration *c* can be modeled by:

\begin{align}
D \dd{2}{c}{x} -k c = 0, \quad  c(L) = c_0, \quad -D c'(0) = 0
\end{align}

where *D* is the reactant's diffusion coefficient and *k* is the reaction rate
constant. Determine $c(x)$.

---

First, rewrite in standard form:

\begin{equation}
c'' - \frac{k}{D} c = 0
\end{equation}

The characteristic polynomial is

\begin{align}
\lambda^2 - \frac{k}{D} &= 0
\lambda &= \pm \sqrt{\frac{k}{D}}
\end{align}

The general solution and its first derivative are:

\begin{align}
c &= a_1 e^{x \sqrt{k/D}} + a_2 e^{-x\sqrt{k/D}} \\
c' &= a_1 \sqrt{\frac{k}{D}} e^{x \sqrt{k/D}} -
  a_2 \sqrt{\frac{k}{D}} e^{-x\sqrt{k/D}}
\end{align}

Evaluating the boundary conditions:

\begin{align}
c(0) &= a_1 + a_2 = 0 \\
c'(L) &= a_1 \sqrt{\frac{k}{D}} e^{L \sqrt{k/D}} -
  a_2 \sqrt{\frac{k}{D}} e^{-L \sqrt{k/D}} = 0
\end{align}

This is a linear system of equations. Solving for $a_1$ and $a_2$ simultaneously
gives

\begin{equation}
a_1 = \frac{c_0}{1+e^{2L\sqrt{k/D}}} \qquad a_2 = \frac{c_0}{1+e^{-2L\sqrt{k/D}}}
\end{equation}

Thus, 

\begin{align}
c = c_0\Biggl(\frac{e^{x\sqrt{k/D}}}{1+e^{2L\sqrt{k/D}}}
  +\frac{e^{x\sqrt{k/D}}}{1+e^{-2L\sqrt{k/D}}}\Biggr)
\end{align}
````
