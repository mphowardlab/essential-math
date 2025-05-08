# Integrating factor

What do we do when an ODE is not exact? For example,

\begin{equation}
-y \d{x} + x \d{y} = 0
\end{equation}

has

\begin{align}
P &= -y  & Q &= x \\
\pp{}{P}{y} &= -1 & \pp{}{Q}{x} &= 1
\end{align}

so it is not exact. However, we may be able to make it exact if we multiply by
an *integrating factor*. For example, let's try a factor $F = 1/x^2$.
Multiplying through by *F*:

\begin{align}
-\frac{y}{x^2} \d{x} + \frac{1}{x} \d{y} = 0
\end{align}

so

\begin{align}
P &= -\frac{y}{x^2}  & Q &= \frac{1}{x} \\
\pp{}{P}{y} &= -\frac{1}{x^2} & \pp{}{Q}{x} &= -\frac{1}{x}^2
\end{align}

Now the ODE is exact and can be solved using techniques we learned previously.

## Finding the integrating factor

```{topic} General integrating factor
To find an integrating factor for a generic ODE that is not exact

\begin{equation}
P \d{x} + Q \d{y} = 0
\end{equation}

Calculate:

\begin{equation}
R = \frac{1}{Q} \Biggl( \frac{\partial P}{\partial y} -
  \frac{\partial Q}{\partial x} \Biggr)
\end{equation}

If *R* depends only on *x*, the integrating factor is:

\begin{equation}
F = \exp\left( \int R \d{x} \right)
\end{equation}

If not, calculate

\begin{equation}
S = \frac{1}{P} \Biggl( \frac{\partial Q}{\partial x} -
  \frac{\partial P}{\partial y} \Biggr) = -\frac{Q}{P} R
\end{equation}

If *S* depends only on *y*, the integrating factor is:

\begin{equation}
F = \exp\left( \int S \d{y} \right)
\end{equation}

If neither works, you can try guessing, but this can be difficult.
```

Let's use these formulas to arrive at the integrating factor we used above:

\begin{equation}
R = \frac{1}{x}(-1 - 1) = -\frac{2}{x}
\end{equation}

is a function of only *x* so

\begin{align}
F(x) &= \exp\left( \int -\frac{2}{x} \d{x} \right) \\
&= \exp\left( -2 \ln x\right) \\
&= \left( e^{\ln x} \right)^{-2} \\
&= \frac{1}{x^2}
\end{align}

Note that this is not the only suitable integrating factor! Let's try the *S*
route for fun:

\begin{equation}
S = -\frac{Q}{P} R = -\frac{x}{-y} \left( -\frac{2}{x}\right) = -\frac{2}{y}
\end{equation}

*S* is a function of only *y* so

\begin{equation}
F = \exp\left( \int -\frac{2}{y} \d{y} \right) = \frac{1}{y^2}
\end{equation}

is another suitable integrating factor.

## Application to linear first-order ODEs

```{topic} Integrating factor for linear first-order ODEs
For linear first-order ODES,

\begin{equation}
y' + p(x)y = r(x)
\end{equation}

Use of an integrating factor *F* gives the general solution:

\begin{align}
y(x) &= \frac{1}{F} \left( \int F r \d{x} + c \right) \\
F &= \exp\left(\int p \d{x}\right)
\end{align}
```

````{example} Mole balance on a tank with increasing inlet/outlet flow rate.

A stream with concentration $c_{{\rm f},{\rm A}}$ of solute A flows into a tank
with initial volume *V* at a continuously increasing volumetric flow rate
$Q = \dot q t$, where $\dot q$ is the rate of increase in the flow rate and
*t* is time. A well-mixed stream is withdrawn from the tank at the same rate.

```{image} ./_images/Integrating_factors_image.jpg
:alt: Tank with inlet and outlet flows and varying concentrations
:width: 300px
:align: center
```

If there are initial $n_{{\rm A},0}$ moles of the solute, derive an expression
for the number of moles in the tank $n_{\rm A}$ as a function of time.

---

Formulate overall mole balances based on entering and exit streams.

$$
\dd{}{n_{\rm A}}{t} = \dot{n}_{{\rm A},\rm{in}} - \dot{n}_{{\rm A},\rm{out}}
$$

Replace the molar flowrates with the equivalent concentrations and volumetric
flow rates

\begin{align}
\dot{n}_{{\rm A},\rm{in}} &= c_{{\rm f},{\rm A}} Q =
  c_{{\rm f},{\rm A}} \dot{q}t \\
\dot{n}_{{\rm A},\rm{out}} &= \frac{n_{\rm A}}{V} Q =
  \frac{n_{\rm A}}{V} \dot{q}
\end{align}

so the initial value problem is

\begin{equation}
\dot{n}_{\rm A} = c_{{\rm f},{\rm A}}\dot{q}t - \frac{n_{\rm A}}{V} \dot{q}t,
\quad n_{\rm A}(0) = n_{{\rm A},0}
\end{equation}

Rewrite in standard form

\begin{equation}
\dot{n}_{A} + \left(\frac{\dot{q}t}{V}\right) n_{\rm A} = c_{{\rm f},{\rm A}} \dot{q}t
\end{equation}

This is a linear first-order ODE with

\begin{equation}
p = \frac{\dot{q}t}{V} \qquad r = c_{{\rm f},{\rm A}} \dot{q}t
\end{equation}

that can be solved using an integrating factor:

\begin{equation}
F = e^{\int p \d{t}} = \exp\left(\int{\frac{\dot{q}t}{V} \d{t}}\right) =
  \exp\left(\frac{1}{2}\frac{\dot{q} t^2}{V}\right)
\end{equation}

Then, evaluate the integral

\begin{align}
\int F r \d{t} &= \int \exp\left(\frac{1}{2}\frac{\dot{q} t^2}{V}\right)
  c_{{\rm f},{\rm A}}\dot{q}t \d{t} \\
&= \int{e^{u}c_{{\rm f},{\rm A}}Vdu} \\
&= c_{{\rm f},{\rm A}}V e^u \\
&= c_{{\rm f},{\rm A}}V \exp\left(\frac{1}{2}\frac{\dot{q}t^2}{V}\right)
\end{align}

using the *u* substitution:

\begin{align}
u &= \frac{1}{2}\frac{\dot{q} t^2}{V} \\
\d{u} &= \frac{\dot{q} t}{V} \d{t}
\end{align}

Last, combine the results:

\begin{align}
n_{\rm A}(t) &= \frac{1}{F} \left(\int F r \d{t} + c \right) \\
&= c_{{\rm f},{\rm A}} V + c \exp\left(-\frac{1}{2}\frac{\dot{q}t^2}{V}\right)
\end{align}

Use the inital conditions to evaluate the integration constant:

\begin{align}
n_{\rm A}(0) &= c_{{\rm f},{\rm A}}V + c = n_{{\rm A},0} \\
c &= n_{{\rm A}, 0} - c_{{\rm f},{\rm A}} V
\end{align}

The final result is:

\begin{equation}
n_{\rm A}(t) = c_{{\rm f},{\rm A}}V + (n_{{\rm A},0} - c_{{\rm f},{\rm A}}V) \exp\left(-\frac{1}{2}\frac{\dot{q}t^2}{V}\right)
\end{equation}
````

````{example} Hormone level (again)
We had

\begin{equation}
c' + kc = A + B\cos\left(\frac{\pi t}{12}\right), \quad c(0) = c_0
\end{equation}

This is a linear first-order ODE with:
\begin{equation}
p = kc \qquad r = A + B\cos\left(\frac{\pi t}{12}\right)
\end{equation}

that can be solved using an integrating factor:

\begin{equation}
F = e^{\int k \d{t}} = e^{kt}
\end{equation}

Then, evaluate the integral using the table of integrals or integration by parts
to evaluate the second integral in the equation

\begin{align}
\int F r \d{t} &= \int e^{kt}
  \left[A+B\cos\left(\frac{\pi t}{12}\right)\right]\d{t} \\
&= A\int e^{kt} \d{t} + B \int e^{kt} \cos\left(\frac{\pi t}{12}\right)\d{t} \\
&= \frac{A}{k} e^{kt} + B \frac{e^{kt}}{k^{2}+(\pi/12)^2}
  \Biggl[k \cos{(\frac{\pi t}{12})} +
  \frac{\pi}{12}\sin{\left(\frac{\pi t}{12}\right)}\Biggr]
\end{align}

The general solution is:

\begin{align}
c(t) &= \frac{1}{F} \left(\int F r \d{t} + c^* \right) \\
     &= \frac{A}{k} + \frac{B}{k^{2}+(\pi/12)^2}
  \Biggl[k \cos\left(\frac{\pi t}{12}\right)
         + \frac{\pi}{12}\sin{\left(\frac{\pi t}{12}\right)}\Biggr]
  + c^* e^{-kt}
\end{align}

Use the inital condition to evaluate the integration constant:

\begin{align}
c(0) &= \frac{A}{k} + \frac{B}{k^{2}+(\pi/12)^2} k + c^* = c_0 \\
c^* &= c_0 - \frac{A}{k} - \frac{B}{k^{2}+(\pi/12)^2} k
\end{align}

The final solution is:

\begin{align}
c(t) &= \frac{A}{k}
  + \frac{B}{k^{2}+(\pi/12)^2} \Biggl[k \cos\left(\frac{\pi t}{12}\right) +
  \frac{\pi}{12}\sin{\left(\frac{\pi t}{12}\right)}\Biggr] \\
  &+ \Biggl[c_0 - \frac{A}{k} - \frac{Bk}{k^{2}+(\pi/12)^2} \Biggr] e^{-kt}
\end{align}

````
