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
