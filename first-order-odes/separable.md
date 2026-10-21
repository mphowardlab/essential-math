# Separable differential equations

## Separation of variables

If a first-order ODE can be **separated** so that $y$ and $x$ are on different
sides, it can be solved by integration:

\begin{align}
\dd{}{y}{x} &= \frac{f(x)}{g(y)} \\
\int g(y)\d{y} &= \int f(x) \d{x}
\end{align}

For example, to solve:

\begin{equation}
\dd{}{y}{x} = xy
\end{equation}

Separate the variables and integrate:

\begin{align}
\int \frac{\d{y}}{y} &= \int x \d{x} \\
\ln y &= \frac{x^2}{2} + c
\end{align}

At this point, we have a solution for $\ln y$ that contains a constant $c$.
We can obtain an explicit solution for $y$ by solving for it:

\begin{align}
y &= e^{x^2/2 + c} \\
y &= C e^\frac{x^2}{2}
\end{align}

Finding a particular solution from here is straightforward if we know an initial
condition: substitute your initial condition and solve for $C$!

```{warning}
In this example, we were careful to denote the redefinition of the
unknown constant ($C = e^{c}$). This step is frequently glossed over,
but you may need to be careful if you are applying an initial condition because
you must make sure you determine the value of the "right" definition of the
constant.
```

````{trythis}
To practice separation of variables, solve the following initial value problems.

1. $y'+(x+2)y^2 = 0, \quad y(1) = 1$

   ```{dropdown} Check your work

   Separate and integrate:

   \begin{align}
   \dd{}{y}{x} &= -(x+2)y^2 \\
   \int\frac{\d{y}}{y^2} &= -\int (x+2) \d{x} \\
   -\frac{1}{y} &= -\left(\frac{x^2}{2} + 2x\right) + c
   \end{align}

   Apply initial condition $y(1) = 1$:

   \begin{equation}
   -1 = -\left(\frac{1}{2} + 2 \right) + c
   \end{equation}

   so $c = 3/2$. Hence,

   \begin{equation}
   y = \frac{2}{x^2+4x-3}
   \end{equation}
   ```

2. $yy'+4x = 0, \quad y(0) = 3$

   ```{dropdown} Check your work

   Separate and integrate:

   \begin{align}
   y \frac{dy}{dx} &= -4x \\
   \int y \d{y} &= \int-4x \d{x} \\
   -\frac{y^2}{2} &= -2x^2 + c \\
   \end{align}

   Apply initial condition $y(0) = 3$:

   \begin{equation}
   -\frac{9}{2} = c
   \end{equation}

   so

   \begin{align}
   y^2 &= 9-4x^2 \\
   y &= \pm \sqrt{9-4x^2}
   \end{align}

   The negative root does not satisfy the initial condition, so choose the
   positive root:

   \begin{equation}
   y = \sqrt{9-4x^2}
   \end{equation}
   ```

3. $\displaystyle y' = \frac{x-1}{y}e^{-y^2}, \quad y(0) = 1$

   ```{dropdown} Check your work

   Separate and integrate:

   \begin{align}
   \int y e^{y^2} \d{y} &= \int (x-1) \d{x} \\
   \frac{1}{2} e^{y^2} &= \frac{x^2}{2} - x + c
   \end{align}

   Apply initial condition $y(0) = 1$:

   \begin{equation}
   \frac{1}{2} e = c
   \end{equation}

   Hence,

   \begin{align}
   e^{y^2} &= x^2 - 2x + e \\
   y^2 &= \ln(x^2 - 2x + e) \\
   y &= \pm \sqrt{\ln(x^2 - 2x + e)}
   \end{align}

   The negative root again does not meet the initial condition, so choose the
   positive one:

   \begin{equation}
   y = \sqrt{\ln(x^2 - 2x + e)}
   \end{equation}
   ```
````

## Applications

We will now work through three applications of first-order ODEs in chemical
engineering that can be solved using separation of variables.

### Chemical reaction kinetics

We previously talked about a [batch reactor](./index.md) as an example of a
first-order ODE. Let's revisit that example and try solving it.

```{example} Batch reactor
The concentration of A, $c_{\rm A}$, for a first-order reaction in a batch
reactor follows the first-order ODE:

\begin{equation}
\dd{}{c_{\rm A}}{t} = -k c_{\rm A}
\label{eq:first-order-odes:separable:batch}
\end{equation}

where $k$ is the reaction rate constant. If the initial concentration of A
was 1.0 M and the concentration of A after 1 hour is measured to be 0.70 M, what
is the value of the rate constant?

---

This differential equation is first-order and separable. First, separate the
variables and integrate to obtain a general solution:

\begin{align}
\int \frac{1}{c_{\rm A}} \d{c_{\rm A}} &= \int -k \d{t} \\
\ln c_{\rm A} &= -k t + B
\end{align}

where $B$ is an unknown constant. Next, apply the initial condition that
$c_{\rm A}(0) = 1$ to determine $B$:

\begin{equation}
\ln 1 = -k \cdot 0 + B \to B = 0
\end{equation}

Hence, the particular solution is:

\begin{equation}
\ln c_{\rm A} = -k t
\end{equation}

We know that $c_{\rm A}(1) = 0.70$ so substituting into the particular solution
and rearranging to solve for $k$ gives:

\begin{equation}
k = -\frac{\ln 0.7}{1\,{\rm h}} = 0.36\,{\rm h}^{-1}
\end{equation}
```

Does our answer make sense? We can check in two ways.

First, we can verify that $k$ has the right dimensions. Both sides of the ODE
must have dimensions of concentration per time, so since $k$ multiplies
$c_{\rm A}$, it must have dimensions of per time. Our answer of
$0.36\,{\rm h}^{-1}$ is dimensionally consistent.

Second, we can obtain a solution for $c_{\rm A}(t)$ and verify that it has the
right behavior. Rearranging gives

\begin{equation}
c_{\rm A}(t) = e^{-0.36\,{\rm h}^{-1} \, t}
\end{equation}

Substituting $t = 0\,{\rm h}$ gives 1.0 and $t = 1\,{\rm h}$ gives 0.7, which
are the two points we knew. Further, a plot of $c_{\rm A}(t)$ (see below)
decreases with time, which is what we expect for a reactant that is being
consumed.

````{trythis}
The plot below shows the {span .text-mpl-blue}`concentration of A` in the
reactor over time for rate constant $k$ and initial concentration
$c_{{\rm A},0}$ affect. You can change $k$ and $c_{{\rm A},0}$ using the
sliders.

1. Predict what will happen to the concentration curve if $k$ is increased with
   $c_{{\rm A},0}$ held constant and if $c_{{\rm A}, 0}$ is increased with $k$
   held constant. Use the sliders to test your predictions.

2. Set $c_{{\rm A}, 0} = 1\,{\rm M}$. Find a value of $k$ that makes
   $c_{\rm A} = 0.5\,{\rm M}$ after 2 hours.

```{anywidget} ./_widgets/batch-reactor.mjs
:css: /_styles/widget.css
```

After you are done, answer the following questions:

1. Solve for the value of $k$ that makes $c_{\rm A} = 0.5\,{\rm M}$ after 2
   hours when $c_{{\rm A}, 0} = 1.5\,{\rm M}$.

   ```{dropdown} Check your work

   Use the general solution with the new initial condition:

   \begin{equation}
   \ln 1.5 = -k \cdot 0 + B \to B = \ln 1.5
   \end{equation}

   then insert $c_{\rm A}(2) = 0.5$ and solve for $k$:

   \begin{align}
   \ln 0.5 &= -k \cdot 2 + \ln 1.5 \\
   k &= \ln 3 / 2 = 0.55
   \end{align}

   The rate constant is $0.55\,{\rm h}^{-1}$. You can also use the sliders to
   confirm!

   ```

2. The long-time value of $c_{\rm A}$ is 0 M, regardless of $c_{{\rm A}, 0}$.
   Explain why using (1) a physical reason and (2) a mathematical reason.

   ```{dropdown} Check your work

   Physically, we have only a forward reaction so if we wait long enough, all A
   should convert to B and the concentration of A must go to 0 M regardless of
   how much A you start with.

   Mathematically, we first determine the solution for the initial condition
   $c_{\rm A}(0) = c_{{\rm A}, 0}$:

   \begin{equation}
   \ln c_{{\rm A}, 0} = -k \cdot 0 + B \to B = \ln c_{{\rm A}, 0}
   \end{equation}

   so

   \begin{equation}
   c_{\rm A}(t) = c_{{\rm A}, 0} e^{-kt}
   \end{equation}

   The long-time behavior can be evaluated as a limit:

   \begin{equation}
   \lim_{t \to \infty} c_{\rm A}(t) = 0
   \end{equation}

   which is zero regardless of $c_{{\rm A}, 0}$.

   ```

````

### Heat transfer

Similarly to unsteady mole balances, unsteady *energy* balances can be
formulated to study heat transfer processes. These balances account for the
amount of energy that is stored in a system compared to the amount that is
transferred in and out of its boundary or generated internally. They also give
rise to first-order ODEs with respect to time.

We will try an example that uses **Newton's law of cooling**, which states that
the rate of heat loss from an object is proportional to the temperature
difference with its environment.

````{trythis}

Estimate the temperature $T$ in an office building at 6 a.m. if the heat goes
off at 10 p.m. when the building is 70°F and the outside temperature $T_\infty$
is 45°F. The rate of change of $T$ can be modeled as:

\begin{equation}
\dd{}{T}{t} = -k(T - T_\infty)
\end{equation}

where $k = 0.05\,{\rm h}^{-1}$ is a physical parameter accounting for the
effective heat transfer coefficient and the thermal mass of the building. The
outside temperature can be assumed to be roughly constant during this time.

---

This differential equation is first-order and separable. Separate and integrate:

```{dropdown} Check your work

\begin{align}
\int \frac{1}{T - T_\infty} \d{T} &= \int -k \d{t} \\
\ln(T - T_\infty) &= -kt + c
\end{align}
```

Rearrange your solution explicitly for $T$:

```{dropdown} Check your work

\begin{align}
T - T_\infty &= c e^{-kt} \\
T &= T_\infty + c e^{-kt}
\end{align}

Note that here we have implicitly redefined our unknown constant:
```

Determine the value of $c$ if we call 10 p.m. the time where $t = 0$.

```{dropdown} Check your work

\begin{equation}
70 = T(0) = 45 + c \to c = 25
\end{equation}
```

Evaluate the temperature at 6 a.m.:

```{dropdown} Check your work

6 a.m. is 8 hours later, so $t = 8$:

\begin{equation}
T(8) = 45 + 25 e^{-0.05 \cdot 8} = 62
\end{equation}

The temperature in the building is approximately 62°F.
```
````

### Fluid mechanics

Imbalances in mass flow rates cause process equipment to fill or drain over
time, for example, during startup or shutdown of a process or when there is
damage to equipment.

Here, we will study what happens when there is a small hole in the bottom of a
tank that causes it to leak. The velocity of the liquid leaving the hole will
depend on how much liquid is above it exerting a pressure. If the hole is small,
fluid mechanics can be used to show that the velocity is $v = \sqrt{2 g h}$,
where $g$ is the acceleration due to gravity and $h$ is the height of liquid
above the hole. This result is called **Toricelli's law**.

We can use this velocity to formulate an unsteady mass balance on the tank to
model how it drains. A few facts from fluid mechanics that are useful to know:

- The volumetric flow rate $\dot{V}$ through an area $A$ can be calculated from
  the velocity as $\dot{V} = v A$.
- The mass flow rate $\dot{m}$ of a stream with volumetric flow rate $\dot{V}$
  is $\dot{m} = \rho \dot{V}$, where $\rho$ is the mass density of the
  stream.
- Similarly, the mass $m$ contained in a volume $V$ is $m = \rho V$.

Now, let's try our problem!

```{example} Leak from a tank
A 1 cm hole opens at the bottom of a cylindrical tank with a 1 m diameter.
Water exits the hole with a velocity that can be modeled using Toricelli's law.
If the initial height of water in the tank is 2 m, how long does it take to
drain?

---

Start from the unsteady balance on the mass of water $m$ in the tank:

\begin{equation}
\dd{}{m}{t} = \dot{m}_{\rm in} -\dot{m}_{\rm out}
\end{equation}

The mass of water is:

\begin{equation}
m = \rho V = \rho \frac{\pi D_1^2}{4} h
\end{equation}

where $\rho$ is the density of water, $V$ is the volume of water in the tank,
and $D_1 = 1\,{\rm m}$ is the diameter of the tank. $V$ is replaced using the
volume of a cylinder.

There is no mass flow rate in, so $\dot{m}_{\rm in} = 0$.

The mass flow rate out is:

\begin{equation}
\dot m_{\rm out} = \rho \dot V = \rho A v = \rho \frac{\pi D_2^2}{4} \sqrt{2gh}
\end{equation}

where $\dot V$ is the volumetric flow rate out of the hole, which we compute
from the cross-sectional area of the hole (a circle with diameter
$D_2 = 0.01\,{\rm m}$) and Toricelli's law for the velocity.

Inserting both into the unsteady balance, applying rules of differentiation, and
simplifying gives

\begin{align}
\dd{}{}{t}\left(\rho \frac{\pi D_1^2}{4} h\right)
 &= -\rho \frac{\pi D_2^2}{4} \sqrt{2gh} \\
\rho \frac{\pi D_1^2}{4} \dd{}{h}{t} &= -\rho \frac{\pi D_2^2}{4} \sqrt{2gh} \\
\frac{dh}{dt} &= -\left(\frac{D_2}{D_1}\right)^2 \sqrt{2gh}
\end{align}

This differential equation is first-order and separable:

\begin{align}
\int \frac{1}{\sqrt{h}} \d{h}
  &= \int -\left(\frac{D_2}{D_1}\right)^2 \sqrt{2g} \d{t} \\
2\sqrt{h} &= -t \left(\frac{D_2}{D_1}\right)^2 \sqrt{2g} + c
\end{align}

Find the integration constant *c* using the initial condition, which is
$h = 2\,{\rm m}$ when $t = 0\,{\rm s}$. We don't have an explicit solution for
$h$, but we can still substitute these values in the implicit solution:

\begin{equation}
2 \sqrt{2} = c
\end{equation}

The tank drains when $h = 0$, so substitute this, *c*, and numerical values
using SI units:

\begin{align}
0 &= -t \left(\frac{0.01}{1}\right)^2 \sqrt{2 \cdot 9.8} + 2 \sqrt{2} \\
t &= 2 \left(\frac{1}{0.01}\right)^2 \sqrt{\frac{2}{2 \cdot 9.8}} = 6400
\end{align}

The tank drains in about 1.8 hours.
```
