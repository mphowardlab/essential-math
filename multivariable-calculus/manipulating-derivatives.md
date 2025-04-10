# Manipulating partial derivatives

````{example} Change in internal energy with temperature and pressure

We want to compute $\Delta U$ as a function of $T$ and $P$, so we need to determine:

\begin{equation}
\d{U} = \left( \frac{\partial U}{\partial T} \right)_P \d{T} + \left( \frac{\partial U}{\partial P} \right)_T \d{P}
\end{equation}

---

Given that:

\begin{equation}
\alpha_V = \frac{1}{V} \left( \frac{\partial V}{\partial T} \right)_P
\end{equation}

\begin{equation}
\kappa_T = -\frac{1}{V} \left( \frac{\partial V}{\partial P} \right)_T
\end{equation}

\begin{equation}
c_P = \left( \frac{\partial H}{\partial T} \right)_P
\end{equation}

\begin{equation}
\d{U} = T \d{S} - P \d{V}
\end{equation}

\begin{equation}
\d{H} = T \d{S} + V \d{P}
\end{equation}

\begin{equation}
\d{G} = -S \d{T} + V \d{P}
\end{equation}

Express $\d{U}$ using only the "measurables", $T$, $P$, $V$, $\alpha_V$, $\kappa_T$, and $c_P$.

---

Form the derivatives using the given $\d{U}$, then replace what we don't like:

\begin{equation}
\left( \frac{\partial U}{\partial T} \right)_P = T \left( \frac{\partial S}{\partial T} \right)_P - P \left( \frac{\partial V}{\partial T} \right)_P 
= T \left( \frac{c_P}{T} \right) - P V \alpha_V = c_P - P V \alpha_V
\end{equation}

\begin{equation}
\left( \frac{\partial S}{\partial T} \right)_P 
= \left( \frac{\partial S}{\partial H} \right)_P \left( \frac{\partial H}{\partial T} \right)_P 
= \frac{ \left( \frac{\partial H}{\partial T} \right)_P }{ \left( \frac{\partial H}{\partial S} \right)_P } = {\frac{c_P}{T}}
\end{equation}

\begin{equation}
\left( \frac{\partial U}{\partial P} \right)_T = T \left( \frac{\partial S}{\partial P} \right)_T - P \left( \frac{\partial V}{\partial P} \right)_T 
=  -T V \alpha_V - P(-V\kappa_T) = P(-V\kappa_T)  - T V \alpha_V
\end{equation}

\begin{equation}
-\left( \frac{\partial S}{\partial P} \right)_T = \left( \frac{\partial V}{\partial T} \right)_P = V\alpha_V
\end{equation}

\begin{equation}
\to \boxed{\d{U} = (c_P - PV\alpha_V)\d{T} + V(P\kappa_T - T\alpha_V)\d{P}}
\end{equation}
