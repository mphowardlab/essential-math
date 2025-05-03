# Homogeneous linear second-order ODEs with constant coefficients

Equations of the form:

\begin{equation}
y'' + ay' + by = 0
\end{equation}

come up often in chemical engineering, particularly in steady-state heat and
mass diffusion, so it is important to know how to solve them!

Guess a solution $y=e^{\lambda x}$, then substitute into the differential
equation:

\begin{align}
\lambda^2 e^{\lambda x} + a (\lambda e^{\lambda x}) + b e^{\lambda x} &= 0\\
\lambda^2 + a \lambda + b &= 0
\end{align}

This *characteristic polynomial* has two roots $\lambda_1$ and $\lambda_2$, and
the general solution for *y* is obtained by superposition of both.

```{topic} Homogeneous linear second-order ODEs with constant coefficients

For ODEs of the form

\begin{equation}
y'' + ay' + by = 0
\end{equation}

The roots of the characteristic polynomial

\begin{equation}
\lambda^2 + a \lambda + b = 0
\end{equation}

give the solution type:

1. $\lambda_1$ and $\lambda_2$ are real and distinct:

   \begin{equation}
   y = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}
   \end{equation}

2. $\lambda_{1,2} = \alpha \pm i \omega$ are complex:

   \begin{equation}
   y = e^{\omega x} \left[c_1 \cos(\omega x) + c_2 \sin(\omega x)\right]
   \end{equation}

3. $\lambda_1 = \lambda_2 = \lambda $ is real and repeated:

   \begin{equation}
   y=(c_1 + c_2 x) e^{\lambda x}
   \end{equation}
```

For example, to solve

\begin{equation}
y'' + y' - 2y = 0, \quad y(0)=4, \quad y'(0)=-5
\end{equation}

First write and solve the characteristic polynomial,

\begin{align}
\lambda^2 + \lambda -2 &= 0 \\
(\lambda + 2)(\lambda + 1) &= 0
\end{align}

so $\lambda_1 = -2$ and $\lambda_2 =1$. The general solution and its first derivative are:

\begin{align}
y &= c_1 e^{-2x} + c_2 e^{x}  \\
y'&= -2c_1 e^{-2x} + c_2 e^{x} \qquad
\end{align}

So applying the initial conditions:

\begin{align}
y(0) &= c_1 + c_2 = 4 \\
y'(0) &= -2c_1 + c_2 = -5
\end{align}

These coefficients can be solved by Gauss-Jordan elimination:

\begin{align}
\begin{bmatrix}
1 & 1 & 4 \\
-2 & 1 & -5
\end{bmatrix}
\begin{matrix}\vphantom{R_1} \\ +2 R_1 \end{matrix}
&\to
\begin{bmatrix}
1 & 1 & 4 \\
0 & 3 & 3
\end{bmatrix}
\begin{matrix}\vphantom{R_1} \\ \div 3 \end{matrix} \\
&\to
\begin{bmatrix}
1 & 1 & 4 \\
0 & 1 & 1
\end{bmatrix}
\begin{matrix} -R_2 \\ \vphantom{R_1} \end{matrix} \\
&\to
\begin{bmatrix}
1 & 0 & 3 \\
0 & 1 & 1
\end{bmatrix}
\end{align}

so $c_1 = 3$ and $c_2 = 1$. The final solution is:

\begin{equation}
y = 3 e^{-2x} + e^x
\end{equation}

---
The following example uses complex roots. Follow a similar procedure as the example shown above.

\begin{equation}
y'' + 0.4y' + 9.04y = 0, \quad y(0)=0, \quad y'(0)=3
\end{equation}

Write and solve the characteristic polynomial,

\begin{align}
\lambda^{2} + 0.4\lambda + 9.04 =0 \to \lambda_{1,2} = \frac{-0.4\pm\sqrt{0.4^2-4\times9.04}}{2} = -0.2\pm 3i
\end{align}

Once values of $\lambda$ are known, write out the general solution and plug in the first initial condition to solve for $c_1$.

\begin{align}
y &= e^{-0.2x}(c_1\cos3x + c_2\sin3x) \\
y(0) &= 1(c_1 + 0) \\
c_1 &= 0
\end{align}

In order to solve for $c_2$, write out the derivative and plug in the second condition:

\begin{align}
y' &= e^{-0.2x}(3c_2\cos3x) - 0.2e^{-0.2x}c_2\sin3x \\
y'(0) &= 3 = 3c_2 \\
c_2 &= 1
\end{align}

Since is $c_2=1$, the final solution is:

\begin{equation}
y = e^{-0.2x}\sin3x 
\end{equation}

---
The next example contains real and repeated roots. To solve, start by writing the characterisitc polynomial,

\begin{align}
y'' + y' + \frac{1}{4}y=0, \quad y(0)=3, \quad y'(0)= -\frac{7}{2}
\end{align}

\begin{align}
\lambda^2 + \lambda + \frac{1}{4} = 0 
\end{align}

Solve for $\lambda$ by factoring:

\begin{align}
(\lambda + \frac{1}{2})^2 = 0 \to \lambda=-\frac{1}{2} 
\end{align}

Since $\lambda$ is a real and repeated root, write out the general equation and its derivative,

\begin{align}
y &=(c_1 + c_2x)e^{-\frac{x}{2}} \\
y' &=(c_1 + c_2x)(-\frac{1}{2}e^{-\frac{x}{2}}) + c_2 e^{-\frac{x}{2}}
\end{align}

Use the given conditions to solve for $c_1$ and $c_2$:

\begin{align}
y(0) &= c_1 = 3 \\
y'(0) &= -\frac{c_1}{2} + c_2 = -\frac{7}{2} \\
c_2 &= -2 
\end{align}

The final solution is:

\begin{equation}
y = (3-2x)e^{\frac{-x}{2}}
\end{equation}

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
