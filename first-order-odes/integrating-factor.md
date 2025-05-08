# Integrating factor

## What do we do when an ODE is not exact?
**Example 1:**

$$
\begin{align}
  -y \, dx + x \, dy &= 0 \quad \text{(given)} \\
  P &= -y, \quad Q = x \\
  \frac{\partial P}{\partial y} &= -1, \quad \frac{\partial Q}{\partial x} = 1 \\
  &\Rightarrow \text{Not exact!}
\end{align}
$$

When solving ODEs, we take the partial derivatives of P and Q.
If the partial derivatives are not equal, the equation is **not exact**: 

---

## Finding the Integrating Factor

Multiply by a factor F to make the ODE exact. This is called the **integrating factor**.

Let: 

$$
\begin{equation}
F = \frac{1}{x^2}
\end{equation}
$$

Now multiply the terms:

$$
\begin{align}
(-y)\left( \frac{1}{x^2} \right) + x\left( \frac{1}{x^2} \right) &= -\frac{y}{x^2} + \frac{1}{x} \\
&= 0 \quad \text{(exact!)}
\end{align}
$$

Check the partial derivatives: 

$$
\begin{align}
\frac{\partial ( F P)}{\partial y} &= -\frac{1}{x^2} \\
\frac{\partial (F Q)}{\partial x} &= -\frac{1}{x^2} \\
\end{align}
$$

### Now the equation is exact.


---


## How did we find F?

  Using this formula:
  
$$
\begin{equation}
R(x) = \frac{1}{Q} \left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right)
\end{equation}
$$

- If R depends only on x, the integrating factor is:

$$
\begin{equation}
F(x) = \exp\left( \int R(x) \, dx \right) 
\end{equation}
$$

If not, check: 

$$
\begin{equation}
S = \frac{1}{P} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) = -\frac{Q}{P} R 
\end{equation}
$$

- If S depends only on y, the integrating factor is: 

$$ 
\begin{equation}
F(y) &= \exp\left( \int S(y) \, dy \right) 
\end{equation}
$$

If neither R nor S are simple functions of only x or y:
> **You must guess an integrating factor.**

---
## Example 1 (continued)

**R Calculation:**

$$
\begin{align}
R &= \frac{1}{x}(-1 - 1) = \frac{-2}{x}
\end{align}
$$

**Thus:**

$$
\begin{align}
F(x) &= \exp\left( \int \frac{-2}{x} \, dx \right)
= \exp( -2 \ln(x)) = \left( e^{\ln(x)} \right)^{-2} = \frac{1}{x^2}
\end{align}
$$

**S Calculation:**

$$
\begin{align}
S &= -\frac{Q}{P} \cdot R = -\frac{x}{-y} \cdot \left( \frac{-2}{x}\right) = \frac{-2}{y} 
\end{align}
$$

**Thus:** 

$$
\begin{align}
F(y) &= \exp\left( \int \frac{-2}{y} \, dy \right) 
= \frac{1}{y^2}
\end{align}
$$

$$
\boxed{
  \begin{aligned}
  F(x) &= \frac{1}{x^2} \\
  F(y) = \frac{1}{y^2}
  \end{aligned}
}
$$


**These are valid integrating factors.**


## Application to Linear First-Order ODEs:

A **linear first-order ODE** has the form: 

$$ 
\begin{equation}
y' + p(x)y = r(x)
\end{equation}
$$

Using an **integrating factor**, we can show that:

$$
\begin{equation}
   y(x) = \frac{1}{F(x)} \left( \int F(x)\,r(x) \, dx + C \right)
\end{equation}
$$

where the integrating factor is: 

$$ 
\begin{equation}
F(x) = e^{\int p(x) \, dx}
\end{equation}
$$

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
