# Manipulating partial derivatives

We sometimes need to find derivatives we don't obtain easily from one of these potentials. For this, we use some calculus rules.

---

``` {topic} Inversion Rule

If  x(y, z)  and  y(x, z), then:

\begin{equation}
\left( \frac{\partial x}{\partial y} \right)_z = \frac{1}{\left( \frac{\partial y}{\partial x} \right)_z}
\end{equation}
```

```{example}

```{math}
Let:
x = \frac{y^2}{z}
```

We can rearrange this to:
```{math}
y = \pm \sqrt{xz}
```

Now compute:
```{math}
\left( \frac{\partial x}{\partial y} \right)_z = \frac{2y}{z}
```

Then:
```{math}
\left( \frac{\partial y}{\partial x} \right)_z = \frac{z}{2y}
```

And confirm the inversion:
```{math}
\frac{1}{\left( \frac{\partial y}{\partial x} \right)_z} = \frac{2y}{z}
```

``` {topic} Chain Rule

```{math}
\left( \frac{\partial x}{\partial y} \right)_z = \left( \frac{\partial x}{\partial w} \right)_z \left( \frac{\partial w}{\partial y} \right)_z
```
```{example}

```{math}
  w = yz  
```
 So,   
 ```{math}
 y = \frac{w}{z}
 ```
Then:
```{math}
x = \frac{(w/z)^2}{z} = \frac{w^2}{z^3}
```

Now compute:
```{math}
\left( \frac{\partial x}{\partial w} \right)_z = \frac{2w}{z^3}
```

And:
```{math}
\left( \frac{\partial w}{\partial y} \right)_z = z
```

Therefore:
```{math}
\begin{align}
\left( \frac{\partial x}{\partial y} \right)_z = \frac{2w}{z^3} \cdot z = \frac{2w}{z^2} = \frac{2yz}{z^2} = \frac{2y}{z}
\end{align}
```

```{example} Change in internal energy
We want to compute the change in molar internal energy $\Delta U$ of a
substance as we vary the temperature $T$ and pressure $P$ in terms of quantities
we can measure. In addition to $T$ and $P$, these quantities are the molar
volume $V$, the thermal expansion coefficient $\alpha_V$, the isothermal
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

where $S$ is the molar entropy and $G$ is the molar Gibbs free energy.

---

First, we express the total differential for $U$ as a function of $T$ and $P$:

\begin{equation}
\d{U} = \td{}{U}{T}{P} \d{T} + \td{}{U}{P}{T} \d{P}
\end{equation}

Next, we form the derivatives using the given total differential for $U$:

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

This total differential is now suitable for integration with respect to $T$
and $P$ using only measurable quantities!
```
