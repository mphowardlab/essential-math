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
````
5. Example: Hormone level (again)
`````{dropdown} 5. Solution
```{math}
\begin{align}
We \quad had \quad C^{'} + Kc &= A + B\cos{\frac{\pi t}{12}} \quad with \quad c(o) = c_{o}\\
p &= Kc, \quad r = A+B\cos{\frac{\pi t}{12}}\\
F(t) &= \exp{(\int{Kdt})} = e^{kt}\\
\int{F(t)r(t)dt} &= \int{e^{kt}[A + B\cos{(\frac{\pi t}{12})}]dt}\\
&= A\int{e^{kt}dt} + B\int{e^{kt}\cos{(\frac{\pi t}{12})}dt}\\
```
\to Table of integrals, or by parts
```{math}
&= \frac{A}{k} + B\frac{e^{kt}{K^{2}+(\frac{\pi}{12})^{2}}[K\cos(\frac{\pi t}{12})+\frac{\pi}{12}\sin{\frac{\pi t}{12}}]}\\
\to c(t) &= e^{-kt}(\frac{A}{k}e^{kt}+B\frac{e^{kt}{K^{2}+(\frac{\pi}{12})^{2}}}+[k\cos{(\frac{\pi t}{12})}\frac{\pi}{12}\sin{(\frac{\pi t}{12})}]+C^{*})\\
\end{align}
```
