# Manipulating partial derivatives

We sometimes need to find derivatives we don't obtain easily from one of these potentials. For this, we use some calculus rules.

---

``` {topic} Inversion Rule
The inversion rule states that the partial derivative of each variable with respect to each other are recipricols, if the two variables are related trough a function.
If  x(y, z)  and  y(x, z), then:

\begin{equation}
(\frac{\partial x}{\partial y})_z = \frac{1}({frac{\partial y}{\partial x}})_z
\end{equation}
```

```{example}
In this example, we aim to demonstrate two ways of calculating the partial derivative
\begin{equation}
(\frac{\partial x}{\partial y})_z  
\end{equation}
for the function
\begin{equation}
x = \frac{y^2}{z}
\end{equation}
We will compute (\frac{\partial x}{\partial y})_z directly, then find \frac{1}({frac{partial y}{partial x}})_z by inverting the expression for y in terms of x, and confirm that the results are consistent through inversion.


Start with:
\begin{equation}
x = \frac{y^2}{z}
\end{equation}
Take the partial derivative of x with respect to y at constant z:
\begin{equation}
(\frac{\partial x}{\partial y})_z = \frac{2y}{z}
\end{equation}


Now we will solve $(\frac{\partial x}{\partial y})_z$ using the inversion rule.
We first solve for y in terms of x:
\begin{align}
x = \frac{y^2}{z} \\
y = \pm \sqrt{xz}
\end{align}

Now compute the partial derivative of y with respect to x at constant z. We'll first write the derivative explicitly before simplifying:
\begin{equation}
(\frac{\partial y}{\partial x})_z = (\frac{1}{2})(sqrt{\frac{z}{x}})
\end{equation}

Since $x = \frac{y^2}{z}$, we substitute back:
\begin{equation}
(\frac{1}{2})(sqrt{\frac{z}{\frac{y^2}{z}}}) = \frac{z}{2y}
\end{equation}


Finally, verify that the inverse derivative gives the original:
\begin{equation}
\frac{1}{\frac{\partial y}{\partial x}_z} = \frac{1}{ \frac{z}{2y}} = \frac{2y}{z} = ( \frac{\partial x}{\partial y})_z
\end{equation}


```

``` {topic} Chain Rule
When working with multivariable functions, we often want to compute the derivative of one variable with respect to another, even when the relationship between them is indirect. In such cases, the chain rule allows us to break down the derivative into intermediate steps.

Suppose we have a variable x that depends on another variable w, and w itself depends on a variable y. Then, x depends on y through w, and we can write:
\begin{equation}
x = x(w), \quad w = w(y)
\end{equation}

In this situation, we apply the chain rule for partial derivatives to compute how x changes with respect to y, while keeping z constant:
\begin{equation}
( \frac{\partial x}{\partial y})_z = (( \frac{\partial x}{\partial w})_z) (( \frac{\partial w}{\partial y})_z)
\end{equation}

```{example}

Define $w = yz$ 
so, $y = \frac{w}{z}$

Then, given that
\begin{equation}
x = \frac{y^2}{z}
\end{equation}

We can plug $y = \frac{w}{z}$ in for y
\begin{equation}
x = \frac{(w/z)^2}{z} = \frac{w^2}{z^3}
\end{equation}

Now compute:
\begin{equation}
( \frac{\partial x}{\partial w})_z = \frac{2w}{z^3}
|end{equation}

And:
\begin{equation}
( \frac{\partial w}{\partial y})_z = z
|end{equation}

Therefore:
\begin{align}
(( \frac{\partial x}{\partial w})_z)(( \frac{\partial w}{\partial y})_z) = (\frac{2w}{z^3})z = \frac{2w}{z^2} = \frac{2yz}{z^2} = \frac{2y}{z}
\end{align}
```

## Derivatives as functions

The first law of thermodynamics for a pure substance is:

\begin{equation}
\d{U} = T\d{S} - P \d{V}
\end{equation}

where *U* is the molar internal energy, *T* is the temperature, *S* is the molar
entropy, *P* is the pressure, and *V* is the molar volume. This is an *exact*
differential for $U(S,V)$. Mathematically, we also have the total differential:

\begin{equation}
\d{U} = \td{}{U}{S}{V} \d{S} + \td{}{U}{V}{S} \d{V}
\end{equation}

By comparing the two, we see that

\begin{equation}
T = \td{}{U}{S}{V} \qquad P = -\td{}{U}{V}{S}
\end{equation}

This shows that *T* and *P* are *functions* of *S* and *V*! Their derivatives
can be computed and manipulated using rules of multivariable calculus in order
to relate *measurable* quantities like *T* and *P* to the derivatives of
an *unmeasurable* quantities like *U*! For example, the change in internal
energy for an adiabatic process (constant *S*) is:

\begin{equation}
\Delta U = \int_{V_1}^{V_2} \td{}{U}{V}{S} \d{V} = \int_{V_1}^{V_2} -P \d{V}
\end{equation}

We can also relate quantities as mixed derivatives. For example, the entropy
derivative of the pressure cannot be measured easily, but it is related to the
temperature change during adiabatic compression:

\begin{equation}
-\td{}{P}{S}{V} = \frac{\partial ^2 U}{\partial S \partial V}
= \frac{\partial^2 U}{\partial V \partial S} = \td{}{T}{V}{S}
\end{equation}

## Swapping variables and derivatives

We say *U* has *S* and *V* as "natural" variables because they are what appears
in the differential first law. But, we do not like *S* as a variable because we
cannot measure it. We would love to use *T* instead. Can we swap the two?

*Yes*, if we define the Helmholtz free energy:

\begin{equation}
A = U - T S
\end{equation}

where *S* is now a function of *T* and *V* and so is *U* as a result. The total
differential for *A* confirms this:

\begin{align}
\d{A} &= \d{U} - (T \d{S} + S \d{T}) \\
&= (T \d{S} -P \d{V}) - T \d{S} - S \d{T} \\
&= -S \d{T} -P \d{V}
\end{align}

As a result,

\begin{align}
S &= -\td{}{A}{T}{V} \\
P &= - \td{}{A}{V}{T} \\
\td{}{S}{V}{T} &= \td{}{P}{T}{V}
\end{align}

Other quantities can be defined to use different sets of natural variables.

- Enthalpy *H*

  \begin{align}
  H &= U + P V \\
  \d{H} &= T \d{S} + V \d{P}
  \end{align}

- Gibbs free energy *G*

  \begin{align}
  G &= A + P V = U - T S + P V \\
  \d{G} &= - S \d{T} + V \d{P}
  \end{align}

The reasons for making these definitions are based on a concept called a
Legendre transformation and this has important implications in thermodynamics
(e.g., why $\Delta G < 0$ for a spontaneous process at constant *T* and *P*).

```{example} Change in internal energy
We want to compute the change in molar internal energy $\Delta U$ of a
substance as we vary the temperature *T* and pressure *P* in terms of quantities
we can measure. In addition to *T* and *P*, these quantities are the molar
volume *V*, the thermal expansion coefficient $\alpha_V$, the isothermal
compressibility $\kappa_T$, and the constant-pressure heat capacity $c_P$:

\begin{align}
\alpha_V &= \frac{1}{V} \td{}{V}{T}{P} \\
\kappa_T &= -\frac{1}{V} \td{}{V}{P}{T} \\
c_P &= \td{}{H}{T}{P}
\end{align}

where $H$ is the molar enthalpy. The following total differentials are known
from thermodynamics:

\begin{align}
\d{U} &= T \d{S} - P \d{V} \\
\d{H} &= T \d{S} + V \d{P} \\
\d{G} &= -S \d{T} + V \d{P}
\end{align}

where *S* is the molar entropy and $G$ is the molar Gibbs free energy.

---

First, we express the total differential for *U* as a function of *T* and *P*:

\begin{equation}
\d{U} = \td{}{U}{T}{P} \d{T} + \td{}{U}{P}{T} \d{P}
\end{equation}

Next, we form the derivatives using the given total differential for *U*:

\begin{align}
\td{}{U}{T}{P} &= T \td{}{S}{T}{P} - P \td{}{V}{T}{P} \\
\td{}{U}{P}{T} &= T \td{}{S}{P}{T} - P \td{}{V}{P}{T}
\end{align}

Then, we go about replacing what we don't like because we can't measure it with
things that we can. For $(\partial S/ \partial T)_P$, use the chain rule
followed by the inversion rule:

\begin{align}
\td{}{S}{T}{P} &= \td{}{S}{H}{P} \td{}{H}{T}{P} \\
&= \frac{ (\partial H/\partial T)_P }{ (\partial H/\partial S)_P } \\
&= \frac{c_P}{T}
\end{align}

where the last step used the total differential for $H$ to replace the
derivative in the denominator. Additionally using the definition of $\alpha_V$
gives

\begin{align}
\td{}{U}{T}{P} &= T \left( \frac{c_P}{T} \right) - P V \alpha_V \\
&= c_P - P V \alpha_V
\end{align}

For $(\partial S/\partial P)_T$, use the total differential for $G$ and equate
its mixed second derivatives:

\begin{equation}
-\td{}{S}{P}{T} = \td{}{V}{T}{P} = V\alpha_V
\end{equation}

Additionally using the definition of $\kappa_T$ gives

\begin{align}
\td{}{U}{P}{T} &= T (-V \alpha_V) - P(-V\kappa_T) \\
&= P V \kappa_T - T V \alpha_V
\end{align}

Putting it all together:

\begin{equation}
\d{U} = (c_P - PV\alpha_V)\d{T} + V(P\kappa_T - T\alpha_V)\d{P}
\end{equation}

This total differential is now suitable for integration with respect to *T*
and *P* using only measurable quantities!
```
