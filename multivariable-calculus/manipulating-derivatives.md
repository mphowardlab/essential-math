# Manipulating partial derivatives

````{example} Change in internal energy with temperature and pressure

We want to compute $\Delta U$ as a function of $T$ and $P$, so we need to determine:

\begin{equation}
\d{U} = \td{}{U}{T}{P} \d{T} + \td{}{U}{P}{T} \d{P}
\end{equation}

---

Given that the thermal expansion coefficient $\alpha_V$, the isothermal
compressibility $\kappa_T$, and the constant-pressure heat capacity $c_P$ are
defined as:
\begin{align}
\alpha_V &= \frac{1}{V} \td{}{V}{T}{P} \\
\kappa_T &= -\frac{1}{V} \td{}{V}{P}{T} \\
c_P &= \td{}{H}{T}{P}
\end{align}
where $V$ is the volume and $H$ is the enthalpy and that the following total
differentials are known:
\begin{align}
\d{U} &= T \d{S} - P \d{V} \\
\d{H} &= T \d{S} + V \d{P} \\
\d{G} &= -S \d{T} + V \d{P}
\end{align}
where $S$ is the entropy and $G$ is the Gibbs free energy.
Express $\d{U}$ using only the "measurables", $T$, $P$, $V$, $\alpha_V$,
$\kappa_T$, and $c_P$.

---

Form the derivatives using the given $\d{U}$, then replace what we don't like:

\begin{align}
\td{}{U}{T}{P} &= T \td{}{S}{T}{P} - P \td{}{V}{T}{P} \\
&= T \left( \frac{c_P}{T} \right) - P V \alpha_V \\
&= c_P - P V \alpha_V
\end{align}

\begin{align}
\td{}{S}{T}{P}
&= \td{}{S}{H}{P} \td{}{H}{T}{P} \\
&= \frac{ \td{}{H}{T}{P} }{ \td{}{H}{S}{P} } \\
&= \frac{c_P}{T}
\end{align}

\begin{align}
\td{}{U}{P}{T}
&= T \td{}{S}{P}{T} - P \td{}{V}{P}{T} \\
&= -T V \alpha_V - P(-V\kappa_T) \\
&= P V \kappa_T - T V \alpha_V
\end{align}

\begin{equation}
-\td{}{S}{P}{T} = \td{}{V}{T}{P} = V\alpha_V
\end{equation}

\begin{equation}
\to \boxed{\d{U} = (c_P - PV\alpha_V)\d{T} + V(P\kappa_T - T\alpha_V)\d{P}}
\end{equation}
