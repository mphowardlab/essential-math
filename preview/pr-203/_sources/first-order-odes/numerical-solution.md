# Numerical solution methods
Determine y(1) for  Solving y' = y + 5 sin(2πt) using Euler's Method

We are given the initial value problem:
$$
\[
y' = y + 5\sin(2\pi t), \quad y(0) = 1
\]
$$

Using the **Euler method**, we compute approximations for \( y(1) \) using two step sizes:

---

Step size $$\( \Delta t = 0.1 \)$$

Let \( f(t, y) = y + 5\sin(2\pi t) \)

| \( n \) | \( t_n \) | \( y_n \) | \( f(t_n, y_n) \) |
|--------:|----------:|----------:|------------------:|
| 0       | 0.0       | 1.000     | 1.000             |
| 1       | 0.1       | 1.100     | 4.039             |
| 2       | 0.2       | 1.504     | 6.257             |
| 3       | 0.3       | 2.130     | 6.895             |
| 4       | 0.4       | 2.818     | 5.757             |
| 5       | 0.5       | 3.394     | 3.394             |
| 6       | 0.6       | 3.733     | 0.795             |
| 7       | 0.7       | 3.813     | -0.942            |
| 8       | 0.8       | 3.719     | -1.037            |
| 9       | 0.9       | 3.615     | 0.676             |
| 10      | 1.0       | **3.683** | —                 |

Hence, for \( \Delta t = 0.1 \), the Euler approximation gives:
\[
y(1) \approx 3.683
\]

---

## Step size \( \Delta t = 0.2 \)

| \( n \) | \( t_n \) | \( y_n \) | \( f(t_n, y_n) \) |
|--------:|----------:|----------:|------------------:|
| 0       | 0.0       | 1.000     | 1.000             |
| 1       | 0.2       | 1.200     | 6.955             |
| 2       | 0.4       | 2.591     | 5.330             |
| 3       | 0.6       | 3.657     | 0.576             |
| 4       | 0.8       | 3.772     | -1.155            |
| 5       | 1.0       | **3.322** | —                 |

Therefore, for \( \Delta t = 0.2 \):
\[
y(1) \approx 3.322
\]

---

### Conclusion

Comparing the results:

- Smaller step size \( \Delta t = 0.1 \) yields a more accurate result: \( y(1) \approx 3.683 \)
- Larger step size \( \Delta t = 0.2 \) underestimates the value: \( y(1) \approx 3.322 \)

