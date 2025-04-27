# Integrating factor. 

## 4. Example:
Mole balance on a tank with increasing inlet/outlet flow rate.

```{image} ./_images/Integrating_factors_image.jpg
:alt: Tank with inlet and outlet flows and varying concentrations
```

\begin{align}
\dot{n}_{A} &= \dot{n}_{A,\text{in}} - \dot{n}_{A,\text{out}}, \quad \dot{n}_{A,\text{in}} = C_{f,A} \dot{q}t \\
\dot{n}_{A} &= C_{f,A}\dot{q}t - \frac{n_A}{V} \dot{q}t \\
\dot{n}_{A,\text{out}} &= \frac{n_A}{V}\dot{q}t \\
\end{align}

````{dropdown} 4. Solution
Rewrite: 
```{math}
\begin{align}
\dot{n}_{A} + \frac{\dot{q}t}{V} n_{A} &= C_{f,A} \dot{q}t \\
p(t) &= \frac{\dot{q}t}{V}, \quad r(t) = C_{f,A}  \dot{q}t \\
F(t) &= exp[\int{p(t)dt}] = exp(\int{\frac{\dot{q}t}{v}dt}) = exp(\frac{1}{2}\frac{\dot{q}{V^{2}}})\\
\int{F(t)r(t)dt} &= \int{exp(\frac{1}{2}\frac{\dot{q}}{V}t^{2})C_{f,A}\dot{q}tdt} = \int{e^{u}C_{f,A}Vdu} = C_{f,A}Vexp(\frac{1}{2}\frac{\dot{q}}{v}t^{2}) \\
u &= \frac{1}{2}\frac{\dot{q}}{v}t^{2}\\
du &= \frac{\dot{q}}{V}tdt \to \dot{q}tdt = Vdu\\
n_{A}(t) &= exp(-\frac{1}{2}\frac{\dot{q}}{V}t^{2})[C_{f,A}Vexp(\frac{1}{2}\frac{\dot{q}}{v}t^{2})+C]\\
n_{A}(o) &= n_A,o = C_{f,A}V+C \to{C = n_{A,o} - C_{f,A}V}
\end{align}
```

```{math}
\to{\boxed{n_{A}(t) = C_{f,A}V + (n_{A,o} - C_{f,A}V)exp{(-\frac{1}{2}\frac{\dot{q}}{v}t^{2})}}}\\
````

5. Example: Hormone level (again)
`````{dropdown} 5. Solution
We had

```{math}
\begin{align}
C^{'} + Kc &= A + B\cos{(\frac{\pi t}{12})} \quad with \quad c(o) = c_{o}\\
p &= Kc \quad r = A + B\cos{(\frac{pi t}{12})}\\
\end{align}
```

```{math}
\begin{align}
F(t) &= exp{(\int{kdt})} = e^{kt}\\
\int{F(t)r(t)dt} &= \int{e^{kt}[A+B\cos{\frac{pi t}{12}}]dt}\\
\end{align}
```
`````
