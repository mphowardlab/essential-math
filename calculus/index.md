
**Rate of Change** Accumulation = In – Out + Generation – Consumption

$$
\frac{dA}{dt} = \dot{m}_{in} - \dot{m}_{out} + g_{gen} - g_{cons}
$$

______________________________________________________________________

## **Example: Water Draining from a Bucket**

![Water draining from a bucket](./image.png)

$$
\frac{dm}{dt} = \dot{m}_{in} - \dot{m}_{out} + g_{gen} - g_{cons}
$$

For **mass balance**:

$$
\frac{dm}{dt} = \dot{m}_{in} - 10
$$ -->

______________________________________________________________________

## **Example: Continuous Stirred Tank Reactor (CSTR)**

![CSTR Diagram](./image.png)

**Reaction:** \$$

r_A = -k C_A V \$\$

**Assume mass density is constant.**

______________________________________________________________________

### **Mass Balance**

$$
\frac{dm}{dt} = \dot{m}_{in} - \dot{m}_{out}
$$

Since density ( \\rho ) is constant:

$$
\frac{d(\rho V)}{dt} = \rho \frac{dV}{dt} = 0
$$

Thus:

$$
\rho \frac{dV}{dt} = 0 \quad \Rightarrow \quad \frac{dV}{dt} = 0
$$

______________________________________________________________________

### **Mole Balance**

$$
\frac{d(n_A)}{dt} = \dot{n}_{A,in} - \dot{n}_{A,out} + g_{gen} - g_{cons}
$$

Expanding:

$$
\frac{d(C_A V)}{dt} = C_{A0} \dot{V} - C_A \dot{V} - k C_A V
$$

Rearranging:

$$
C_A \frac{dV}{dt} + V \frac{dC_A}{dt} = (C_{A0} - C_A) \dot{V} - k C_A V
$$

Since ( \\frac\{dV}\{dt} = 0 ):

$$
V \frac{dC_A}{dt} = (C_{A0} - C_A) \dot{V} - k C_A V
$$

At **steady state**, where ( \\frac\{dC_A}\{dt} = 0 ):

$$
0 = (C_{A0} - C_A) \dot{V} - k C_A V
$$

Rearrange:

$$
(C_{A0} - C_A) \dot{V} = k C_A V
$$

Solving for ( C_A ):

$$
C_A = \frac{C_{A0} \dot{V}}{\dot{V} + kV}
$$

