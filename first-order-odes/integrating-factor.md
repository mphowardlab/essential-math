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

## Skill Builder
```{problem}
1.Solve the differential equation:
   \begin{align}
y' = -\frac{e^{x+y} + ye^y}{x e^y - 1}
   \end{align}

   ```{solution}
```math
y' = -\frac{e^{x+y} + ye^y}{x e^y - 1}
```

This can be rewritten as:

```math
(e^{x+y} + ye^y) \, dx + (x e^y - 1) \, dy = 0
```

Check if the differential equation is exact:

Let 
```math
P(x, y) = e^{x+y} + ye^y, \quad Q(x, y) = x e^y - 1
```

```math
\frac{\partial P}{\partial y} = e^{x+y} + y e^y + e^y, \quad \frac{\partial Q}{\partial x} = e^y
```

These are not equal, so the equation is not exact. Find integrating factor:

Let 
```math
\mu(y) = e^{\int -dy} = e^{-y}
```

Multiply the equation by \( e^{-y} \):

```math
e^{-y}(e^{x+y} + ye^y) \, dx + e^{-y}(x e^y - 1) \, dy = 0

(e^x + y) \, dx + (x - e^{-y}) \, dy = 0
```

Now the equation is exact

```math
\frac{\partial f}{\partial x} = e^x + y \Rightarrow f(x, y) = e^x + xy + k(y)
```

Now differentiate \( f(x, y) \) with respect to \( y \):

```math
\frac{\partial f}{\partial y} = x + k'(y)
```

Set equal to the second term from the exact equation:

```math
x + k'(y) = x - e^{-y} \Rightarrow k'(y) = -e^{-y}
```

Integrate:

```math
k(y) = \int -e^{-y} \, dy = -e^{-y} + c
```

```math
f(x, y) = e^x + xy - e^{-y} + c
```

```{math}
\boxed{e^x + xy - e^{-y} = c}
```
