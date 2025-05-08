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

## Skill builder problems

Solve the following differential equations:

1. $\displaystyle y' = \frac{x^4 + y^2}{xy}$

   ```{solution}
   This ODE is not in the standard form, so we need to first rearrange:

   \begin{align}
   xy \d{y} = (x^4+y^2) \d{x} \\
   (x^4 + y^2) \d{x} - xy \d{y} = 0
   \end{align}

   so:

   \begin{align}
   P &= x^4 + y^2 \\
   Q &= -xy
   \end{align}

   Check to see if the ODE is exact:

   \begin{align}
   \td{}{P}{y}{x} &= 2y \\
   \td{}{Q}{x}{y} &= -y
   \end{align}

   The two partial derivatives are not equal, so the ODE is not exact. In
   order to make it exact, we need to find an integrating factor *F*. First,
   compute:

   \begin{align}
   R &= \frac{1}{Q}\left[\td{}{P}{y}{x} - \td{}{Q}{x}{y} \right] \\
     &=\frac{1}{-xy}(2y-(-y)) \\
     &= -\frac{3}{x}
   \end{align}

   *R* is a function of only *x*, so use it to compute *F*

   \begin{equation}
   F = \exp\left(\int \frac{-3}{x} \d{x}\right) = e^{-3\ln(x)} = x^{-3}
   \end{equation}

   Apply the integrating factor to the original ODE:

   \begin{align}
   x^{-3}(x^4+y^2) \d{x} - x^{-3}(xy) \d{y} &= 0 \\
   \left(x+\frac{y^2}{x^{-3}}\right) \d{x} - \frac{y}{x^2} \d{y} &= 0
   \end{align}

   Integrate the *Q* of our exact ODE with respect to *y*:

   \begin{equation}
   f(x,y) = \int -\frac{y}{x^2} \d{y} = \frac{-y^2}{2x^2}+k(x)
   \end{equation}

   where *k* is an unknown function of *x*. Then, differentiate *f* with respect
   to *x* and compare to *P* of the exact ODE:

   \begin{align}
   \td{}{f}{x}{y} = \frac{y^2}{x^3} + k'(x) &= P = x + \frac{y^2}{x^3} \\
   k'(x) &= x \\
   \end{align}

   This ODE for *k* can be integrated directly (neglecting the integration
   constant)

   \begin{equation}
   k = \int x \d{x} = \frac{x^2}{2}
   \end{equation}

   Putting it all together,

   \begin{align}
   f = \frac{-y^2}{2x^2} + \frac{x^2}{2} = c
   \end{align}

   is an implicit solution of the ODE.
   ```

2. $\displaystyle y' = -\frac{e^{x+y} + ye^y}{x e^y - 1}$

   ````{solution}
   ```{math}
   y' = -\frac{e^{x+y} + ye^y}{x e^y - 1}
   ```

   This can be rewritten as:

   ```{math}
   (e^{x+y} + ye^y) \d{x} + (x e^y - 1) \d{y} = 0
   ```

   Check if the differential equation is exact:

   Let
   ```{math}
   P(x, y) = e^{x+y} + ye^y, \quad Q(x, y) = x e^y - 1
   ```

   ```{math}
   \frac{\partial P}{\partial y} = e^{x+y} + y e^y + e^y, \quad
   \frac{\partial Q}{\partial x} = e^y
   ```

   These are not equal, so the equation is not exact. Find integrating factor:

   Let
   ```{math}
   \mu(y) = e^{\int -dy} = e^{-y}
   ```

   Multiply the equation by \( e^{-y} \):

   ```{math}
   e^{-y}(e^{x+y} + ye^y) \, dx + e^{-y}(x e^y - 1) \, dy = 0

   (e^x + y) \, dx + (x - e^{-y}) \, dy = 0
   ```

   Now the equation is exact

   ```{math}
   \frac{\partial f}{\partial x} = e^x + y \Rightarrow f(x, y) = e^x + xy + k(y)
   ```

   Now differentiate \( f(x, y) \) with respect to \( y \):

   ```{math}
   \frac{\partial f}{\partial y} = x + k'(y)
   ```

   Set equal to the second term from the exact equation:

   ```{math}
   x + k'(y) = x - e^{-y} \Rightarrow k'(y) = -e^{-y}
   ```

   Integrate:

   ```{math}
   k(y) = \int -e^{-y} \, dy = -e^{-y} + c
   ```

   ```{math}
   f(x, y) = e^x + xy - e^{-y} + c
   ```

   ```{math}
   \boxed{e^x + xy - e^{-y} = c}
   ```
   ````

3. $y' = y + 1 - 2x$

   ````{solution}
   Rewrite in linear form:

   ```{math}
   y' - y = 1 - 2x
   ```

   ```{math}
   p(x) = -1, \quad r(x) = 1 - 2x
   ```

   Find integrating factor:

   ```{math}
   F = e^{\int -1 \, dx} = e^{-x}
   ```

   Multiply through by the integrating factor:

   ```{math}
   e^{-x} y' - e^{-x} y = e^{-x}(1 - 2x)
   ```

   Left-hand side becomes the derivative of \( e^{-x} y \):

   ```{math}
   \frac{d}{dx}(e^{-x} y) = e^{-x}(1 - 2x)
   ```

   ```{math}
   \int \frac{d}{dx}(e^{-x} y) \, dx = \int e^{-x}(1 - 2x) \, dx
   ```

   Use integration by parts

   ```{math}
   \int e^{-x}(1 - 2x) \, dx = -(1 - 2x)e^{-x} + 2e^{-x}
   ```

   ```{math}
   e^{-x} y = -(1 - 2x)e^{-x} + 2e^{-x} + c
   ```

   ```{math}
   y = e^x \left[ -(1 - 2x)e^{-x} + 2e^{-x} + c \right] = 1 + 2x + c e^x
   ```

   Final solution:

   ```{math}
   \boxed{y = 1 + 2x + c e^x}
   ```
   ````
