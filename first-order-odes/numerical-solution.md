## 1. Numerical Solutions of First Order ODEs

Some ODEs are hard (or impossible!) to solve analytically... or maybe you just don't want to! Numerical approximations to the solution can be very valuable in these cases.

**Euler's Method:** Approximate \( y(t) \) using a Taylor series expansion:

```{math}
:label: euler-method
y(t + \Delta t) \approx y(t) + f(t, y) \Delta t
```

This update can be applied repeatedly, starting from the initial condition \( y(0) \), to approximate the solution at later times.

---

**Example:**  
Given the differential equation:

```{math}
y' - y = x \quad \Rightarrow \quad y' = f(x, y) = x + y
```

Use Euler's method with a step size \( \Delta x = 0.2 \) to approximate the solution.

---

```{note}
Initial condition: \( y(0) = 0 \)
```

### Euler's Method Table

|   n  |    x_n   | y_n +  | \Delta X f(x_n,y_n)| =y_n+1| Exact  | Error (y_n-y)|
| ---- | -------- | ------ | ------------------ | ----- | ------ | ------------ |
| 0    | 0        | 0      | 0                  | 0     | 0      | 0            |
| 1    | 0.2      | 0      | 0.04               | 0.04  | 0.021  | 0.021        |
| 2    | 0.4      | 0.04   | 0.088              | 0.128 | 0.092  | 0.052        |
| 3    | 0.6      | 0.1128 | 0.146              | 0.274 | 0.222  | 0.094        |
| 4    | 0.8      | 0.274  | 0.215              | 0.489 | 0.426  | 0.152        |
| 5    | 1.0      | 0.489  |                    |       | 0.718  | 0.229        |

