# Separable differential equations
> ### Example 1
The iceman Ötzi was found to have 52.5% of the C^{14} of a living organism.  
If the half-life of the C^{14} is 5715 years, how long ago did Ötzi die if C^{14} disappears by the first-order reaction?

```math
\frac{dc}{dt} = -kc
```

---

### Solution:

Assume at death:  
`t = 0`, and `c(0) = c_0`.

Solve the ODE:

```math
\int \frac{1}{c} \, dc = \int -k \, dt \Rightarrow \ln(c) = -kt + B
```

Rewriting the solution:

```math
c = A e^{-kt}
```

Apply the initial condition:

```math
c(0) = c_0 = A \Rightarrow c(t) = c_0 e^{-kt}
```

It is known that:

```math
c(5715) = 0.5 c_0, \quad c(t) = 0.525 c_0
```

Take the ratio of the two equations:

```math
\frac{0.525 c_0}{0.5 c_0} = \frac{e^{-kt}}{e^{-k(5715)}}
```

Simplify:

```math
\frac{0.525}{0.5} = e^{k(5715 - t)}
```

Take the natural log:

```math
\ln\left(\frac{0.525}{0.5}\right) = k(5715 - t)
```

Solve for `t`:

```math
t = 5715 - \frac{\ln(0.525 / 0.5)}{k}
```

Since:

```math
k = \frac{\ln(2)}{5715}
```

Then:

```math
t = 5715 \cdot \frac{\ln(0.5)}{\ln(0.525)} \approx 5310 \text{ years}
```

---

### Final Answer:

**Ötzi died approximately 5310 years ago.**
 > ### Example 2
 Newtons law of cooling 
Estimate the temperature in an office building at 6 a.m. if the heat goes off at 10 p.m.,  
when the building is 70°F and the outside temperature is 45°F.

We are given:
- Initial temperature: `T(0) = 70°F` at 10 p.m.
- Outside air temperature: `T_{\text{outside}} = 45°F`
- Cooling constant: `k = 0.05 \, \text{hr}^{-1}`
- Time: `t = 8` hours later (6 a.m.)

---

Use Newton’s Law of Cooling:

```math
\frac{dT}{dt} = -k (T - T_{\text{outside}})
```

Separate variables and integrate:

```math
\int \frac{1}{T - T_{\text{outside}}} \, dT = \int -k \, dt
\Rightarrow \ln(T - T_{\text{outside}}) = -kt + C
```

Solve for temperature:

```math
T = T_{\text{outside}} + C e^{-kt}
```

Use the initial condition `T(0) = 70`:

```math
70 = 45 + C \Rightarrow C = 25
```

So:

```math
T(t) = 45 + 25 e^{-0.05t}
```

Evaluate at `t = 8`:

```math
T(8) = 45 + 25 e^{-0.05 \cdot 8} \approx 45 + 25(0.6703) \approx 61.76°F
```

---

**Final Answer:**  
**The temperature at 6 a.m. is approximately 62°F.**
### Example 3
Torcelli's Law 
A 1 cm hole opens at the bottom of a 1 m tall cylindrical tank.  
If the tank initially contains 2 meters of water, how long will it take to fully drain?

---

We use Torricelli’s Law for the outflow velocity:

```math
v_2 = \sqrt{2 g h}
```

Let:
- `D_1` = diameter of the tank
- `D_2` = diameter of the hole
- `h(t)` = height of water in the tank at time `t`

Volume of the tank:

```math
V(t) = \frac{\pi D_1^2}{4} h(t)
```

Mass balance:

```math
\frac{dm}{dt} = -\dot{m}_{\text{out}}
```

With constant density:

```math
\frac{dh}{dt} = -\left( \frac{D_2}{D_1} \right)^2 \sqrt{2g h}
```

Separate and integrate:

```math
\int \frac{1}{\sqrt{h}} \, dh = -\left( \frac{D_2}{D_1} \right)^2 \sqrt{2g} \int dt
```

Integrate:

```math
2 \sqrt{h} = -\left( \frac{D_2}{D_1} \right)^2 \sqrt{2g} \, t + C
```

Initial condition `h(0) = h_0` gives:

```math
C = 2 \sqrt{h_0}
```

So the general solution is:

```math
\sqrt{h} = \sqrt{h_0} - \frac{1}{2} \left( \frac{D_2}{D_1} \right)^2 \sqrt{2g} \, t
```

Solve for time when `h = 0`:

```math
0 = \sqrt{h_0} - \frac{1}{2} \left( \frac{D_2}{D_1} \right)^2 \sqrt{2g} \, t
```

Rearranged:

```math
t = 2 \left( \frac{D_1}{D_2} \right)^2 \cdot \frac{\sqrt{h_0}}{\sqrt{2g}}
```

---

### Plug in Known Values:

- `D_1 = 1 \, \text{m}`
- `D_2 = 0.01 \, \text{m}`
- `h_0 = 2 \, \text{m}`
- `g = 9.81 \, \text{m/s}^2`

```math
t = 2 \left( \frac{1}{0.01} \right)^2 \cdot \frac{\sqrt{2}}{\sqrt{2 \cdot 9.81}}
\approx 2 \cdot 10^4 \cdot \frac{1.4142}{4.429} \approx 6400.5 \, \text{seconds}
```

Convert to hours:

```math
t \approx \frac{6400.5}{3600} \approx 1.8 \, \text{hours}
```

---

**Final Answer:**  
**The tank will be empty after approximately 1.8 hours.**