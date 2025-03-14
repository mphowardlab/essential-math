<!-- # Calculus -->

# Calculus

# Conservation

### (Rate of Change)

Accumulation = In – Out + Generation – Consumption

```
dA/dt = ṁ_in - ṁ_out + g_gen - g_cons
```

______________________________________________________________________

## **Example 1: Water Draining from a Bucket**

![Water draining from a bucket](./image.png)

```
dm/dt = ṁ_in - ṁ_out + g_gen - g_cons
```

For **mass balance**:

```
dm/dt = ṁ_in - 10
```

______________________________________________________________________

## **Example 2: Continuous Stirred Tank Reactor (CSTR)**

![CSTR Diagram](./image.png)

**Reaction:**

```
r_A = -kC_A V
```

**Assume mass density is constant.**

______________________________________________________________________

### **Mass Balance**

```
dm/dt = ṁ_in - ṁ_out
```

Since density (ρ) is constant:

```
d(ρV)/dt = ρ dV/dt = 0
```

Thus:

```
ρ dV/dt = 0  →  dV/dt = 0
```

______________________________________________________________________

### **Mole Balance**

```
d(n_A)/dt = ṁ_A,in - ṁ_A,out + g_gen - g_cons
```

Expanding:

```
d(C_A V)/dt = C_A0 ṁ_V - C_A ṁ_V - k C_A V
```

Rearranging:

```
C_A dV/dt + V dC_A/dt = (C_A0 - C_A) ṁ_V - k C_A V
```

Since `dV/dt = 0`:

```
V dC_A/dt = (C_A0 - C_A) ṁ_V - k C_A V
```

At **steady state**, where `dC_A/dt = 0`:

```
0 = (C_A0 - C_A) ṁ_V - k C_A V
```

Rearrange:

```
(C_A0 - C_A) ṁ_V = k C_A V
```

Solving for `C_A`:

```
dC_A/dt = ((C_A0 - C_A) ṁ_V) / V - k C_A
```

At **steady state**, this simplifies further:

```
C_A (ṁ_V + kV) = C_A0 ṁ_V
```

Final expression:

```
C_A = (C_A0 ṁ_V) / (ṁ_V + kV)
```
