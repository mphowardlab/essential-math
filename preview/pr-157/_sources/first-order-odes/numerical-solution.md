## 1. Numerical Solutions of First Order ODEs

Some ODEs are hard (or impossible!) to solve analytically... or maybe you just don't want to! Numerical approximations to the solution can be very valuable in these cases.

**Euler's Method:** Approximate $y(t)$ using a Taylor series expansion:

```{math}
:label: euler-method
y(t + \Delta t) \approx y(t) + f(t, y) \Delta t
```

This update can be applied repeatedly, starting from the initial condition $y(0)$, to approximate the solution at later times.

---

**Example:**  
Given the differential equation:

```{math}
y' - y = x \quad \Rightarrow \quad y' = f(x, y) = x + y
```

Use Euler's method with a step size $\Delta x = 0.2$ to approximate the solution.

---

```{note}
Initial condition: \( y(0) = 0 \)
```

 Euler's Method Table

|   n  |  $x_n$   |$y_n+$  | $\Delta$x $f(x_n,y_n)$| =$y_(n+1)$| Exact  | Error $(y_(n-y))$|
| ---- | -------- | ------ | --------------------- | --------- | ------ | ---------------- |
| 0    | 0        | 0      | 0                     | 0         | 0      | 0                |
| 1    | 0.2      | 0      | 0.04                  | 0.04      | 0.021  | 0.021            |
| 2    | 0.4      | 0.04   | 0.088                 | 0.128     | 0.092  | 0.052            |
| 3    | 0.6      | 0.1128 | 0.146                 | 0.274     | 0.222  | 0.094            |
| 4    | 0.8      | 0.274  | 0.215                 | 0.489     | 0.426  | 0.152            |
| 5    | 1.0      | 0.489  |                       |           | 0.718  | 0.229            |

---
Compare to Exact Solution

```{math}
F(x) = e^{\int -1 \, dx} = e^{-x}
```

```{math}
\int x e^{-x} dx = -x e^{-x} + \int e^{-x} dx = -(x + 1) e^{-x}
```

```{math}
y(x) = e^x \left[ - (x + 1) e^{-x} + C \right] = e^x - (x + 1)
```

```{math}
0 = y(0) = -1 + C \Rightarrow C = 1
```

```{math}
:label: exact-final
y(x) = e^x - (x + 1)
```
### 2. Error in approximation

Because we are using trunkated Taylor series, we accrue an error:

image 

Ther error in a single step is O(\Delta t^2). This is called the \underline{local}) error. To cover a finite time t, t/ \Delta t steps are required so the \underline{global}) (total error is O(\Delta t). To improve accuracy, you should \underline{decrease}) \Delta t, but this takes more work. Some \Delta t will totally fail! This is the field of numerical stability (not covered here).


