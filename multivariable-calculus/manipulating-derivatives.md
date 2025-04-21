# Manipulating partial derivatives
## Derivatives as Functions

First law of thermodynamics

\begin{equation}
\d{\ubar{U}} = T\d{\ubar{S}} - P \d{\ubar{V}}
\end{equation}

*Exact* differential for $\ubar{U}(\ubar{S},\ubar{V})$

\begin{equation}
\d{\ubar{U}} = \td{}{\ubar{U}}{\ubar{S}}{\ubar{V}} \d{\ubar{S}} + \td{}{\ubar{U}}{\ubar{V}}{\ubar{S}} \d{\ubar{V}}
\end{equation}

Hence,

\begin{equation}
\ T(\ubar{S}, \ubar{V}) = \td{}{\ubar{U}}{\ubar{S}}{\ubar{V}}
\end{equation}

and

\begin{equation}
\ P(\ubar{S}, \ubar{V}) = - \td{}{\ubar{U}}{\ubar{V}}{\ubar{S}}
\end{equation}

T and P are *functions* of $\ubar{S}$ and $\ubar{V}$!
We can relate *measurable* quantities like T and P to the derivatives of an *unmeasurable* quantity like $\ubar{U}$!

\begin{equation}
\ \Delta\ubar{U} = \int_{\ubar{V}_1}^{\ubar{V}_2} - P d\ubar{V}
\end{equation}
At constant $\ubar{S}$ (adiabatic)

We can also relate quantities as mixed derivatives:

\begin{equation}
\ -\td{}{\ubar{P}}{\ubar{S}}{\ubar{V}} = \frac{\partial ^2 \underline{U}}{\partial \underline{S} \partial \underline{V}} = \frac{\partial ^2 \underline{U}}{\partial \underline{V} \partial \underline{S}} = \td{}{T}{\ubar{V}}{\ubar{S}}
\end{equation}
(Change in T with aidiabatic compression)

## Swapping Variables and Derivatives (Legendre Transformation)

We say $\ubar{U}$ has $\ubar{S}$ and $\ubar{V}$ as "natural" variables because they are what appears in the differential first law. But, we do not like $\ubar{S}$ as a variable because we cannot measure it. We would love to use $T$ instead. Can we swap the two?

*Yes*, if we define the Helmholtz free energy

\begin{equation}
\ubar{A} = \ubar{U} - T \ubar{S}
\end{equation}
$\ubar{U}(\ubar{S}(T,\ubar{V}),\ubar{V})$ and $\ubar{S}(T,\ubar{V})$

\begin{equation}
\ d \ubar{A} = d \ubar{U} - Td \ubar{S} - \ubar{S} dT = Td \ubar{S} - Pd \ubar{V} - Td \ubar{S} - \ubar{S} dT
\end{equation}

\begin{equation}
\ d \ubar{A} = - \ubar{S} dT - Pd \ubar{V}
\end{equation}

\begin{equation}
\dt{}{\ubar{A}}{T}{\ubar{V}} = - \ubar{S}
\end{equation}
and
\begin{equation}
\dt{}{\ubar{A}}{\ubar{V}}{T} = -P
\end{equation}
and
\begin{equation}
\dt{}{\ubar{S}}{\ubar{V}}{T} = \dt{}{P}{T}{\ubar{V}}
\end{equation}


dA̲ = dU̲ - TdS̲ - S̲dT = TdS̲ - PdV̲ - TdS̲ - S̲dT <br>
dA̲ = -S̲dT - PdV̲ <br>
<br>
$(\frac{\partial \underline{A}}{\partial T})_{\underline{V}}$=-$\underline{S}$  and  $(\frac{\partial \underline{A}}{\partial \underline{V}})_T$=-$P$  and  $(\frac{\partial \underline{S}}{\partial \underline{V}})_T $=$ (\frac{\partial P}{\partial T})_\underline{V}$ <br>
<br>
Additional Ones: Enthalpy   H̲ = U̲ + PV̲ <br>
                           dH̲ = TdS̲ + V̲dP <br>
<br>
        Gibbs Free Energy   G̲ = A̲ + PV̲ = U̲ - TS̲ + PV̲ <br>
                           dG̲ = -S̲dT + V̲dP <br>
<br>
The reasons for these definitions are based on something called a Legendre Transformation and this has important implications in thermodynamics (e.g., why $\Delta$G $<$ 0 for a spontaneous process @ const. T and P). You will learn more about this later!


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
