# Integrating factor

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

Use the inital conditions to evaluate the integration constant.:

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

\begin{align}
C^{'} + Kc &= A + B\cos{(\frac{\pi t}{12})} \quad with \quad c(o) = c_{o}\\
p &= Kc \quad r = A + B\cos{(\frac{\pi t}{12})}\\
\end{align}
Set up the integral based upon the integration factor formula.

\begin{align}
F(t) &= exp{(\int{kdt})} = e^{kt}\\
\int{F(t)r(t)dt} &= \int{e^{kt}[A+B\cos{\frac{\pi t}{12}}]dt}\\
&= A\int{e^{kt}dt} + B\int{e^{kt}\cos{(\frac{\pi t}{12})}dt}
\end{align}

table of integrals, or by parts

\begin{align}
&= \frac{A}{k}e^{kt} +
B\frac{e^{kt}}{k^{2}+(\frac{\pi}{12})^{2}}[Kcos{(\frac{\pi t}{12})} +
\frac{\pi}{12}\sin{(\frac{\pi t}{12})}]\\
\end{align}

\begin{align}
\to{c(t) = e^{-kt}(\frac{A}{k}e^{kt} + B\frac{e^{kt}}{k^{2} +
(\frac{\pi}{12})^{2}}[k\cos{(\frac{\pi t}{12})} +
 \frac{\pi}{t}\sin{(\frac{\pi t}{12})}] + C^{*})}
\end{align}

````
