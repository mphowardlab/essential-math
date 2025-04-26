# Integrating factor. 

## 4. Example:
Mole balance on a tank with increasing inlet/outlet flow rate.

```{image} ./_Integrating_factors_image.jpg
:alt: Flash distillation process
```

\begin{align}
\dot{n}_{A} &= \dot{n}_{A,\text{in}} - \dot{n}_{A,\text{out}}, \quad \dot{n}_{A,\text{in}} = C_{f,A} \dot{q}t \\
\dot{n}_{A} &= C_{f,A}\dot{q}t - \frac{n_A}{V} \dot{q}t \\
\dot{n}_{A,\text{out}} &= \frac{n_A}{V}\dot{q}t \\
\end{align}

````{dropdown} 4. Solution
Rewrite: 
\begin{align}
\dot{n}_{A} + \frac{\dot{q}t}{V} n_{A} &= C_{f,A} \dot{q}t \\
p(t) &= \frac{\dot{q}t}{V}, \quad r(t) = C_{f,A}  \dot{q}t \\
\end{align}

\begin{align}
F(t) &= \exp{[\int{p(t)dt}]} = \exp{(\int{\frac{\dot{q}t}{V}dt)}} = \exp{(\frac{1}{2}\frac{\dot{q}}{v^{2}})}\\
\int{F(t)r(t)dt} &= \int{\exp{(\frac{1}{2}\frac{\dot{q}{v}}t^{2})}C_{f,A}\dot{q}tdt} = \int{e^{u}C_{f,A}vdu} = C_{f,A}V\exp{(\frac{1}{2}\frac{\dot{q}}{v}t^{2})}\\
u &= \frac{1}{2}\frac{\dot{q}}{v}t^{t}\\
du &= \frac{\dot{q}}{v}tdt \to \dot{q}tdt = Vdu \\
n_{A}(t) &= \exp{(-\frac{1}{2}\frac{\dot{q}}{v}t^{2})}[C_{f,A}V\exp{(\frac{1}{2}\frac{\dot{q}}{V}t^{t})}+C]\\
n_{A}(o) &= n_{A,o} = C_{f,A}V+c \to c = n_{A,o}-C_{f,A}V\\
\to \fbox{n_{A}(t) &= C_{f,A}V+(n_{A,o}-C_{f,A}V)\exp{-\frac{1}{2}\frac{\dot{q}}{v}t^{2}}}\\
\end{align}
