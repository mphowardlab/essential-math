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
\T(\ubar{S}, \ubar{V}) = (\frac{\d{\ubar{U}}}{\d{\ubar{S}}})_{\ubar{V}}
\end{equation}
and
\begin{equation}
\P(\ubar{S}, \ubar{V}) = (\frac{\d{\ubar{U}}}{\d{\ubar{V}}})_{\ubar{S}}
\end{equation}

T(S̲, V̲)=$(\frac{\partial \underline{U}}{\partial \underline{S}})_{\underline{V}}$ and P(S̲, V̲)=-$(\frac{\partial \underline{U}}{\partial \underline{V}})_{\underline{S}}$ <br>
<br>
T and P are $\underline{functions}$ of S̲ and V̲! <br>
We can relate $\underline{measurable}$ quantities like T and P to the derivatives of an $\underline{unmeasurable}$ quantity like U̲! <br>
$\Delta$U̲ =$ \int_{\underline{V}_1}^{\underline{V}_2}$-PdV̲ @ constant S̲ (adiabatic) <br>
We can also relate quantities as mixed derivatives: <br>
$-(\frac{\partial \underline{P}}{\partial \underline{S}})_{\underline{V}}$ = $\frac{\partial ^2 \underline{U}}{\partial \underline{S} \partial \underline{V}}$ = $\frac{\partial ^2 \underline{U}}{\partial \underline{V} \partial \underline{S}}$ = $(\frac{\partial \underline{T}}{\partial \underline{V}})_{\underline{S}}$ (change in T with adiabatic compression) <br>

## 2. Swapping Variables and Derivatives (Legendre Transformation)

We say U̲ has S̲ and V̲ as "natural" variables because they are what appears in the differential first law. But, we do not like S̲ as a variable because we cannot measure it. We would love to use T instead. Can we swap the two? <br>
$\underline{Yes}$, if we define the Helmholtz free energy A̲ = U̲ - TS̲ <br>
U̲(S̲(T,V̲),V̲) and S̲(T,V̲) <br>
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