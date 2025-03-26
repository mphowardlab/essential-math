### **Mole Balance**

$$
\frac{d(n_A)}{dt} = \dot{n}_{A,in} - \dot{n}_{A,out} + r_{gen} - r_{cons}
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
