# Integrating factor


## Skill Builder
```{problem}
(c) Solve the differential equation:

```math
y' = -\frac{e^{x+y} + ye^y}{x e^y - 1}
```

This can be rewritten as:

```math
(e^{x+y} + ye^y) \, dx + (x e^y - 1) \, dy = 0
```

Check if the differential equation is exact:

Let 
```math
P(x, y) = e^{x+y} + ye^y, \quad Q(x, y) = x e^y - 1
```

```math
\frac{\partial P}{\partial y} = e^{x+y} + y e^y + e^y, \quad \frac{\partial Q}{\partial x} = e^y
```

These are not equal, so the equation is not exact. Find integrating factor:

Let 
```math
\mu(y) = e^{\int -dy} = e^{-y}
```

Multiply the equation by \( e^{-y} \):

```math
e^{-y}(e^{x+y} + ye^y) \, dx + e^{-y}(x e^y - 1) \, dy = 0
```

Simplifying:

```math
(e^x + y) \, dx + (x - e^{-y}) \, dy = 0
```

Now the equation is exact

```math
\frac{\partial f}{\partial x} = e^x + y \Rightarrow f(x, y) = e^x + xy + k(y)
```

Now differentiate \( f(x, y) \) with respect to \( y \):

```math
\frac{\partial f}{\partial y} = x + k'(y)
```

Set equal to the second term from the exact equation:

```math
x + k'(y) = x - e^{-y} \Rightarrow k'(y) = -e^{-y}
```

Integrate:

```math
k(y) = \int -e^{-y} \, dy = -e^{-y} + c
```

```math
f(x, y) = e^x + xy - e^{-y} + c
```

```{math}
\boxed{e^x + xy - e^{-y} = c}
```