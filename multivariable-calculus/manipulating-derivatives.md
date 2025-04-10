# Manipulating partial derivatives
### 1. Derivatives as Functions
First law of thermodynamics: dU̲ = TdS̲ - PdV̲ <br>
$\underline{Exact}$ differential for U̲(S̲,V̲). Mathematically, we also have : <br>
dU̲=$(\frac{\partial \underline{U}}{\partial \underline{S}})_{\underline{V}}d \underline{S} + (\frac{\partial \underline{U}}{\partial \underline{V}})_{\underline{S}}d \underline{V}$ <br>
Hence, <br>
$T(S̲, V̲)=$(\frac{\partial \underline{U}}{\partial \underline{S}})_{\underline{V}}$ and P(S̲, V̲)=$-(\frac{\partial \underline{U}}{\partial \underline{V}})_{\underline{S}}$ <br>
<br>
T and P are $\underline{functions}$ of S̲ and V̲! <br>
We can relate $\underline{measurable}$ quantities like T and P to the derivatives of a $\underline{unmeasurable}$ quantity like U̲! <br>
$\Delta$U̲$= \int_{\underline{V}_1}^{\underline{V}_2}$-PdV̲ @ constant S̲ (adiabatic) <br>
We can also relate quantities as mixed derivatives: <br>
$-(\frac{\partial \underline{P}}{\partial \underline{S}})_{\underline{V}}$ = $\frac{\partial ^2 \underline{U}}{\partial \underline{S} \partial \underline{V}}$ = $\frac{\partial ^2 \underline{U}}{\partial \underline{V} \partial \underline{S}}$ = $(\frac{\partial \underline{T}}{\partial \underline{V}})_{\underline{S}}$ (change in T with adiabatic compression) <br>

### 2. Swapping Variables and Derivatives (Legendre Transformation)

We say U̲ has S̲ and V̲ as "natural" variables because they are what appears in the differential first law. But, we do not like S̲ as a variable because we cannot measure it. We would love to use T instead. Can we swap the two? <br>
$\underline{Yes}$, if we define the Helmholtz free energy A̲ = U̲ - TS̲ <br>
U̲(S̲(T,V̲),V̲) and S̲(T,V̲) <br>
dA̲ = dU̲ - TdS̲ - S̲dT = TdS̲ - PdV̲ - TdS̲ - S̲dT <br>
dA̲ = -S̲dT - PdV̲ <br>
<br>
$(\frac{\partial \underline{A}}{\partial T})_{\underline{V}}=-\underline{S}$ and $(\frac{\partial \underline{A}}{\partial \underline{V}})_T=-P$ and $(\frac{\partial \underline{S}}{\partial \underline{V}})_T = (\frac{\partial P}{\partial T})_\underline{V}$ <br>