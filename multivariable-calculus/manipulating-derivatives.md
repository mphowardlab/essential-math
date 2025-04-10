## Example:

We want to compute $\Delta U$ as a function of $T$ and $P$, so we need to determine:

$$
dU = \left( \frac{\partial U}{\partial T} \right)_P dT + \left( \frac{\partial U}{\partial P} \right)_T dP
$$

***

### Given that:

$$
\alpha_V = \frac{1}{V} \left( \frac{\partial V}{\partial T} \right)_P
$$

$$
\kappa_T = -\frac{1}{V} \left( \frac{\partial V}{\partial P} \right)_T
$$

$$
c_P = \left( \frac{\partial H}{\partial T} \right)_P
$$

$$
dU = T dS - P dV
$$

$$
dH = T dS + V dP
$$

$$
dG = -S dT + V dP
$$

### Express $dU$ using only the "measurables", $T$, $P$, $V$, $\alpha_V$, $\kappa_T$, and $c_P$.

***

#### Form the derivatives using the given $dU$, then replace what we don't like:

$$
\left( \frac{\partial U}{\partial T} \right)_P = T \left( \frac{\partial S}{\partial T} \right)_P - P \left( \frac{\partial V}{\partial T} \right)_P 
= T \left( \frac{c_P}{T} \right) - P V \alpha_V = c_P - P V \alpha_V
$$

$$
\left( \frac{\partial S}{\partial T} \right)_P 
= \left( \frac{\partial S}{\partial H} \right)_P \left( \frac{\partial H}{\partial T} \right)_P 
= \frac{ \left( \frac{\partial H}{\partial T} \right)_P }{ \left( \frac{\partial H}{\partial S} \right)_P } = {\frac{c_P}{T}}
$$

$$
\left( \frac{\partial U}{\partial P} \right)_T = T \left( \frac{\partial S}{\partial P} \right)_T - P \left( \frac{\partial V}{\partial P} \right)_T 
=  -T V \alpha_V - P(-V\kappa_T) = P(-V\kappa_T)  - T V \alpha_V
$$

$$
-\left( \frac{\partial S}{\partial P} \right)_T = \left( \frac{\partial V}{\partial T} \right)_P = V\alpha_V
$$

$$
\to \boxed{dU = (c_P - PV\alpha_V)dT + V(P\kappa_T - T\alpha_V)dP}
$$
