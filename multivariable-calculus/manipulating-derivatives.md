# Manipulating partial derivatives
## Derivatives as Functions

First law of thermodynamics:

\begin{equation}
\d{\ubar{U}} = T\d{\ubar{S}} - P \d{\ubar{V}}
\end{equation}

*Exact* differential for $\ubar{U}(\ubar{S},\ubar{V})$. Mathematically, we also have:

\begin{equation}
\d{\ubar{U}} = \td{}{\ubar{U}}{\ubar{S}}{\ubar{V}} \d{\ubar{S}} + \td{}{\ubar{U}}{\ubar{V}}{\ubar{S}} \d{\ubar{V}}
\end{equation}

Hence,

\begin{align}
\ T(\ubar{S}, \ubar{V}) = \td{}{\ubar{U}}{\ubar{S}}{\ubar{V}} \\
\ P(\ubar{S}, \ubar{V}) = - \td{}{\ubar{U}}{\ubar{V}}{\ubar{S}}
\end{align}

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

\begin{align}
\ d \ubar{A} = d \ubar{U} - Td \ubar{S} - \ubar{S} dT = Td \ubar{S} - Pd \ubar{V} - Td \ubar{S} - \ubar{S} dT \\
\ d \ubar{A} = - \ubar{S} dT - Pd \ubar{V}
\end{align}

\begin{align}
\td{}{\ubar{A}}{T}{\ubar{V}} = - \ubar{S} \\
\td{}{\ubar{A}}{\ubar{V}}{T} = -P \\
\td{}{\ubar{S}}{\ubar{V}}{T} = \td{}{P}{T}{\ubar{V}}
\end{align}


Additional Ones: 
Enthalpy  
\begin{align}
\ubar{H} = \ubar{U} + P \ubar{V} \\
\ d \ubar{H} = Td \ubar{S} + \ubar{V} dP
\end{align}



Gibbs Free Energy
\begin{align}
\ubar{G} = \ubar{A} + P \ubar{V} = \ubar{U} - T \ubar{S} + P \ubar{S} \\
\ d \ubar{G} = - \ubar{S} dT + \ubar{V} dP
\end{align}

The reasons for these definitions are based on something called a Legendre Transformation and this has important implications in thermodynamics (e.g., why $\Delta G < 0$ for a spontaneous process at constant $T$ and $P$). You will learn more about this later!


