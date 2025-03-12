# Calculus

This module covers topics in differential and integral calculus of one variable.

# Conservation Principles and Mass Balance

![Conservation Notes](./image.png)

## 1. Conservation (Rate of Change)

The general conservation equation:

$$
\text{Accumulation} = \text{In} - \text{Out} + \text{Generation} - \text{Consumption}
$$

For a general quantity ( A ):

$$
\frac{dA}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}} + g_{\text{gen}} - g_{\text{cons}}
$$

![Water draining from a bucket](./image.png)

$$
\frac{dm}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}} + g_{\text{gen}} - g_{\text{cons}}
$$

Since no generation or consumption occurs:

$$
\frac{dm}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}}
$$

![Continuous Stirred Tank Reactor (CSTR)](./image.png)

$$
A \rightarrow B
$$

$$
r_A = -k C_A
$$

$$
\frac{dm}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}}
$$

Since **mass density is constant**, we assume:

$$
\frac{dV}{dt} = 0 \quad \Rightarrow \quad \frac{d\rho}{dt} = 0
$$

$$
\frac{d(C_A V)}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}} + g_{\text{gen}} - g_{\text{cons}}
$$

$$
C_A \frac{dV}{dt} + V \frac{dC_A}{dt} = \dot{m}_{\text{in}} C_{A0} - \dot{m}_{\text{out}} C_A - k C_A V
$$

Since ( \\frac\{dV}\{dt} = 0 ), we simplify:

$$
V \frac{dC_A}{dt} = \dot{m}_{\text{in}} C_{A0} - \dot{m}_{\text{out}} C_A - k C_A V
$$

At **steady state**, where ( \\frac\{dC_A}\{dt} = 0 ):

$$
0 = \dot{m}_{\text{in}} C_{A0} - \dot{m}_{\text{out}} C_A - k C_A V
$$

$$
C_A \left( \dot{m}_{\text{out}} + kV \right) = \dot{m}_{\text{in}} C_{A0}
$$

$$
C_A = \frac{\dot{m}_{\text{in}} C_{A0}}{\dot{m}_{\text{out}} + kV}
$$

![Conservation and Mass Balance Notes](./image.png)

```{tableofcontents}
```
