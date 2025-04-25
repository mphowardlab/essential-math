# Integrating factor. 

## 4. Example:
Mole balance on a tank with increasing inlet/outlet flow rate.

```{image} ./_Integrating_factors_image.jpg
:alt: Flash distillation process
```

\begin{align}
\dot{n}_{A} &= \dot{n}_{A,\text{in}} - \dot{n}_{A,\text{out}}, \dot{n}_{A,\text{in}}&=C_{f,A} \cdot \dot{q}t \\
\dot{n}_{A} &= C_{f,A}\dot{q}t - \frac{n_A}{V} \cdot \dot{q}t \\
\dot{n}_{A,\text{out}} &= \frac{n_A}{V} \cdot \dot{q}t \\
\end{align}

````{dropdown} 4. Solution
Rewrite: 
\begin{align}
\dot{n}_{A} + \frac{\dot{q}t}{V} \cdot n_{A} &= C_{f,A} \cdot \dot{q}t \\
p(t) &= \frac{\dot{q}t}{V}, r(t) &= C_{f,A} \cdot \dot{q}t \\
\end{align}

```{math}
\begin{align}
F(t) &= \exp{[\int{p(t)dt}]} &= 
\end{align}
```