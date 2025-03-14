# Calculus
# Conservation

**(Rate of change)**  
Accumulation = In – Out + Generation – Consumption  

$$
\frac{dA}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}} + g_{\text{gen}} - g_{\text{cons}}
$$

---

## **Example 1: Water Draining from a Bucket**

![Water draining from a bucket](./image.png)

$$
\frac{dm}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}} + g_{\text{gen}} - g_{\text{cons}}
$$

For **mass balance**:

$$
\frac{dm}{dt} = \dot{m}_{\text{in}} - 10
$$

---

## **Example 2: Continuous Stirred Tank Reactor (CSTR)**

![CSTR Diagram](./image.png)

Reaction:

$$
r_A = -kC_A V
$$

**Assumption:**  
Mass density is constant.

---

### **Mass Balance**
$$
\frac{dm}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}}
$$

Since density \( \rho \) is constant:

$$
\frac{d(\rho V)}{dt} = \rho \frac{dV}{dt} = 0
$$

Thus:

$$
\rho \frac{dV}{dt} = 0 \Rightarrow \frac{dV}{dt} = 0
$$

---

### **Mole Balance**
$$
\frac{d(n_A)}{dt} = \dot{n}_{A,\text{in}} - \dot{n}_{A,\text{out}} + g_{\text{gen}} - g_{\text{cons}}
$$

Expanding:

$$
\frac{d(C_A V)}{dt} = C_{A0} \dot{V} - C_A \dot{V} - k C_A V
$$

Rearranging:

$$
C_A \frac{dV}{dt} + V \frac{dC_A}{dt} = (C_{A0} - C_A) \dot{V} - k C_A V
$$

Since \( \frac{dV}{dt} = 0 \):

$$
V \frac{dC_A}{dt} = (C_{A0} - C_A) \dot{V} - k C_A V
$$

At **steady state** where \( \frac{dC_A}{dt} = 0 \):

$$
0 = (C_{A0} - C_A) \dot{V} - k C_A V
$$

Rearrange:

$$
C_A ( \dot{V} + kV ) = C_{A0} \dot{V}
$$

Solving for \( C_A \):

$$
C_A = \frac{C_{A0} \dot{V}}{\dot{V} + kV}
$$


```{tableofcontents}
```
