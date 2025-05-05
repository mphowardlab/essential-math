# Homogeneous linear second-order ODEs with constant coefficients
````{example} Spring and dashpot
```{image} ./_images/Spring_and_Dashpot.jpg
```
We are analyzing how the drag force affects the spring oscilations. This is a mechanics example, but models like this are also used for the rheology of viscoelastic materials

The governing equation for the system is:

\begin{equation}
m x'' + \gamma x' + k x = 0
\end{equation}

where:
- $m x''$ = mass $\times$ acceleration
- $\gamma x'$ = drag force
- $k x$ = spring force

1. When will the spring oscillate?

  To answer this, solve this equation:

  \begin{align}
  &m \lambda^2 + \gamma \lambda + k = 0 \\
  \lambda_{1,2} &= \frac{ -\gamma \pm \sqrt{\gamma^2 - 4mk}}{2m}
  \end{align}

  If $4mk > \gamma^2$, $\lambda_{1,2}$ will be complex, and you will get oscillations:

  \begin{equation}
  \lambda_{1,2} = -\frac{\gamma}{2m} \pm \frac{i}{2m}\sqrt{4mk - \gamma^2}
  \end{equation}

  Then, the solution is:
  \begin{equation}
  y(t) = \exp\left(-\frac{\gamma}{2m} t \right) \left [ C_1 \cos(\omega t ) + C_2 \sin(\omega t) \right]
  \end{equation}

  where $\omega = \sqrt{4mk - \gamma^2}$.


2. What does $\gamma$ do to the solution?
- $\gamma$ dampens the oscillations to decay to zero. Without it, oscillations go on forever and are always present
- $\gamma$ also changes frequency of oscillations
````