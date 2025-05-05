# Manipulating partial derivatives

We sometimes need to find derivatives we don't obtain easily from one of these
potentials. For this, we use some calculus rules.

---

The inversion rule states that the partial derivative of each variable with
respect to each other are reciprocals if the two variables are related through
an inverse function.

```{topic} Inversion rule
If $x(y, z)$ has an inverse function $y(x, z)$, then:

\begin{equation}
\td{}{x}{y}{z} = \frac{1}{(\partial y/\partial x)_z}
\end{equation}
```

To demonstrate use of this rule, consider two ways of calculating the partial
derivative $(\partial x/\partial y)_z$ for the function

\begin{equation}
x = \frac{y^2}{z}
\end{equation}

and the inverse function

\begin{equation}
y = \sqrt{xz}
\end{equation}

Evaluating the partial derivative of *x* with respect to *y* directly gives

\begin{equation}
\td{}{x}{y}{z} = \frac{2y}{z}
\end{equation}

while the partial derivative of *y* with respect to *x* is:

\begin{equation}
\td{}{y}{x}{z} = \frac{1}{2} \sqrt{\frac{z}{x}}
\end{equation}

Now, use the inversion rule and substitute $x(y,z)$ back in:

\begin{equation}
\frac{1}{(\partial y/\partial x)_z} = 2 \sqrt{\frac{x}{z}}
 = 2 \sqrt{\frac{y^2/z}{z}} = \frac{2y}{z}
\end{equation}

The results are the same!

---

When working with multivariable functions, we often want to compute the
derivative of one variable with respect to another, even when the relationship
between them is indirect. In such cases, the chain rule allows us to break down
the derivative into intermediate steps.

```{topic} Chain rule
If $x(w,z)$ depends on a variable $w(y,z)$ that depends on a variable *y*, then

\begin{equation}
\td{}{x}{y}{z} = \td{}{x}{w}{z} \td{}{w}{y}{z}
\end{equation}
```

To demonstrate use of this rule, let $w = yz$, which means that

\begin{equation}
x = \frac{y^2}{z} = \frac{w^2}{z^3}
\end{equation}

We will calculate the partial derivative of *x* with respect to *y* using the
chain rule, then show it gives the same as if we differentiated directly. First,
we need partial derivatives of *x* with respect to *w* and *w* with respect to
*y*:

\begin{equation}
\td{}{x}{w}{z} = \frac{2w}{z^3}, \qquad \td{}{w}{y}{z} = z
\end{equation}

Therefore, by the chain rule:

\begin{equation}
\td{}{x}{y}{z} = \left(\frac{2w}{z^3} \right)z = \frac{2yz}{z^2} = \frac{2y}{z}
\end{equation}

This matches our previous result for the derivative!

---

Sometimes, the variables that are held constant in a derivative are
inconvenient. The "triple product rule" (sometimes called the cyclic or *xyz*-1
rule) lets us replace such a derivative by two other derivatives of involving
that variable.

```{topic} Triple product rule

If $x(y, z)$, $y(x, z)$, and $z(x, y)$, then:

\begin{equation}
\td{}{x}{y}{z} \td{}{y}{z}{x} \td{}{z}{x}{y} = -1
\end{equation}

or equivalently:

\begin{equation}
\td{}{x}{y}{z} = -\frac{(\partial z/\partial y)_x}{(\partial z/\partial x)_y}
\end{equation}

using the inversion rule.
```

To demonstrate use of this rule, use $x = y^2/z$, which has the inverse functions
$y = \sqrt{xz}$ and $z = y^2/x$. Compute the relevant partial derivatives:

\begin{align}
\td{}{x}{y}{z} &= \frac{2y}{z} \\
\td{}{y}{z}{x} &= \frac{1}{2} \sqrt{\frac{x}{z}} \\
\td{}{z}{x}{y} &= -\frac{y^2}{x^2}
\end{align}

Now plug into the triple product rule, substituting the definition of *x*:

\begin{equation}
\left( \frac{2y}{z} \right)
\left( \frac{y}{2z} \right)
\left( -\frac{z^2}{y^2} \right) = -1
\end{equation}

This confirms the rule!

---

We can use these rules to manipulate thermodynamic derivatives. Choosing the
right rules to use is like solving a puzzle, and you'll get better at it with
practice.

```{example} Constant-volume heat capacity
Express $(\partial S/\partial T)_V$ for a pure substance using the
constant-volume heat capacity

\begin{equation}
c_v = \td{}{U}{T}{V}
\end{equation}

where *S* is the molar entropy, *T* is the temperature, *V* is the molar volume,
and *U* is the molar internal energy, given that

\begin{equation}
\d{U} = T\d{S} - P\d{V}
\end{equation}

---

Using the chain rule, we can introduce *U*, then invert the *S* derivative:

\begin{align}
\td{}{S}{T}{V} &= \td{}{S}{U}{V} \td{}{U}{T}{V} \\
  &= \frac{(\partial U/\partial T)_V}{(\partial U /\partial S)_V} \\
  &= \frac{c_V}{T}
\end{align}

The last line follows from the definition of the heat capacity.
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

## Skill builder problems

Given

\begin{equation}
\d{f} = p \d{x} - q \d{y}
\end{equation}

Evaluate the following for $f=\cos(4x+y^2)+x^2y$

1. $\displaystyle\td{}{x}{f}{y}$

   ```{solution}
   \begin{align}
   \td{}{x}{f}{y} &= \frac{1}{(\partial f/\partial x)_y} \\
   &= \frac{1}{p} \\
   &= \left(-4\sin(4x+y^2)+ 2xy\right)^{-1}
   \end{align}
   ```

2. $\displaystyle\td{}{f}{p}{y}$

   ```{solution}
   \begin{align}
   \td{}{f}{p}{y} &= \td{}{f}{x}{y} \td{}{x}{p}{y} \\
   &=\frac{(\partial f/\partial x)_y}{(\partial p/\partial x)_y} \\
   &=\frac{p}{(\partial p/\partial x)_y} \\
   &=\frac{-4 \sin(4x+y^2)+2xy}{-16 \cos(4x+y^2)+2y}
   \end{align}
   ```

3. $\displaystyle\td{}{x}{y}{f}$

   ```{solution}
   \begin{align}
   \td{}{x}{y}{f} & \td{}{y}{f}{x} \td{}{f}{x}{y} = -1 \\
   \td{}{x}{y}{f} &=
   -\frac{1}{(\partial y/\partial f)_x(\partial f/\partial x)_y} \\
   &= -\frac{(\partial f/\partial y)_x}{(\partial f/\partial x)_y} \\
   &= \frac{q}{p} \\
   &=\frac{2y\sin(4x+y^2)+x^2}{-4\sin(4x+y^2)+2xy}
   \end{align}
   ```
