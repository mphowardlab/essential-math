# Separable differential equations

```{topic} Separable first-order ODEs
If a first-order ODE can be separated so that *y* and *x* are on each side, it
can be solved by integration:

\begin{align}
y' &= \frac{f(x)}{g(y)} \\
\int g(y)\d{y} &= \int f(x) \d{x} + c
\end{align}
```

For example, to solve $y' = xy$, separate the variables and integrate:

\begin{align}
\int \frac{\d{y}}{y} &= \int x \d{x} \\
\ln y &= \frac{x^2}{2} + c_0 \\
y &= e^{x^2/2 + c_0} \\
y &= c e^\frac{x^2}{2}
\end{align}

Note that here, we are being careful to denote the redefinition of the
integration constant ($c = e^{c_0}$). This detail may be glossed over at times.

```{example} Chemical reaction kinetics
A substance is disappearing according to a first-order reaction, so its
concentration follows

\begin{equation}
\dd{}{c}{t} = -k c
\end{equation}

where $k$ is the reaction rate constant. If the initial concentration of the
reactant was 1.0 M and the concentration after 1 hour has passed is 0.70 M,
what is the reaction rate constant?

---

First, solve the differential equation using separation of variables

\begin{align}
\int \frac{1}{c} \d{c} &= \int -k \d{t} \\
\ln c &= -k t + B
\end{align}

where *B* is an unknown integration constant. Apply the initial condition that
$c(0) = 1$

\begin{equation}
\ln 1 = -k \cdot 0 + B \to B = 0
\end{equation}

Hence,

\begin{equation}
k = -\frac{\ln c}{t}
\end{equation}

We know that $c(1) = 0.70$ so

\begin{equation}
k = -\frac{\ln 0.7}{1\,{\rm h}} = 0.36\,{\rm h}^{-1}
\end{equation}
```

```{example} Newton's law of cooling
Estimate the temperature *T* in an office building at 6 a.m. if the heat goes
off at 10 p.m. when the building is 70°F and the outside temperature $T_\infty$
is 45°F if the *T* follows

\begin{equation}
\dd{}{T}{t} = -k(T - T_\infty)
\end{equation}

where $k = 0.05\,{\rm h}^{-1}$.

---

Separate the differential equation and integrate

\begin{align}
\int \frac{1}{T - T_\infty} \d{T} &= \int -k \d{t} \\
\ln(T - T_\infty) &= -kt + c \\
T - T_\infty &= C e^{-kt} \\
T &= T_\infty + C e^{-kt}
\end{align}

Call 10 p.m. the time where $t = 0$. Then,

\begin{equation}
70 = T(0) = 45 + C \to C = 25
\end{equation}

Last, evaluate the temperature at 6 a.m. when $t = 8$:

\begin{equation}
T(8) = 45 + 25 e^{-0.05 \cdot 8} = 62
\end{equation}

The temperature is approximately 62°F.
```

````{example} Toricelli's Law
A 1 cm hole opens at the bottom of a 1 m cylindrical tank. Water exits the
hole with velocity that follows Toricelli's, $\sqrt{2gh}$ where *g* is the
acceleration due to gravity and *g* is the height of water above the hole.

```{image} ./_images/toricelli.jpg
:alt: Tank draining through a pinhole
:width: 200px
:align: center
```

If there is 2 m of water in the tank initially, when does it drain?

---

Start from the unsteady balance on the mass of water *m* in the tank

\begin{equation}
\dd{}{m}{t} = -\dot m_{\rm out}
\end{equation}

The mass of water is

\begin{equation}
m = \rho V = \rho \frac{\pi D_1^2}{4} h
\end{equation}

where $\rho$ is the density of water, *V* is the volume of water in the tank,
and $D_1$ = 1 m is the diameter of the tank. *V* is replaced using the volume of
a cylinder.

The mass flow rate out is

\begin{equation}
\dot m_{\rm out} = \rho \dot V = \rho \frac{\pi D_2^2}{4} \sqrt{2gh}
\end{equation}

where $\dot V$ is the volumetric flow rate out of the hole, which we compute
from the cross-sectional area of the hole (a circle with diameter $D_2$
= 0.01 m) and the model for the velocity leaving it.

Inserting both into the unsteady balance, applying rules of differentiation, and
simplifying gives

\begin{align}
\dd{}{}{t}\left(\rho \frac{\pi D_1^2}{4} h\right)
 &= -\rho \frac{\pi D_2^2}{4} \sqrt{2gh} \\
\rho \frac{\pi D_1^2}{4} \dd{}{h}{t} &= -\rho \frac{\pi D_2^2}{4} \sqrt{2gh} \\
\frac{dh}{dt} &= -\left(\frac{D_2}{D_1}\right)^2 \sqrt{2gh}
\end{align}

This is a separable differential equation

\begin{align}
\int \frac{1}{\sqrt{h}} \d{h}
  &= \int -\left(\frac{D_2}{D_1}\right)^2 \sqrt{2g} \d{t} \\
2\sqrt{h} &= -t \left(\frac{D_2}{D_1}\right)^2 \sqrt{2g} + c
\end{align}

Find the integration constant *c* using the initial condition

\begin{equation}
2 \sqrt{2} = c
\end{equation}

The tank drains when $h = 0$, so substitute this, *c*, and numerical values:

\begin{align}
0 &= -t \left(\frac{0.01}{1}\right)^2 \sqrt{2 \cdot 9.8} + 2 \sqrt{2} \\
t &= 2 \left(\frac{1}{0.01}\right)^2 \sqrt{\frac{2}{2 \cdot 9.8}} = 6400
\end{align}

This time is in seconds because all units are SI, so the tank drains in about
1.8 hours.
````
