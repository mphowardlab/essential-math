# Series Expansion
- Nonlinear functions can be nasty, but polynomials are the "nicest" version.
    - *How can we turn a general, nonlinear equation into a polynomial?*

## Taylor Series
### Suppose we have some function $f(x)$ that we want to approximate as a **power series**:

  $f(x) = \sum_{n=0}^{\infty} c_n(x-x_0)^n = c_0 + c_1(x-x_0) + c_2(x-x_0)^2 + c_3(x-x_0)^3 + ...$

  - What is $f(x_0)$?
      - $f(x_0) = c_0$
  - What is $f`(x_0)$?
     - $f`(x) = c_1 + 2c_2(x-x_0) + 3c_3(x-x_0)^2 + ...$
     - $f`(x_0) = c_1$
  - What is $f``(x_0)$?
      - $f``(x) = 2c_2 + 3\cdot2c_3(x-x_0) + ...$
      - $f``(x_0) = 2c_2$
  - What is $f```(x_0)$?
      - $f```(x_0) = 3\cdot2c_3$
### Hence,

  $f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}\cdot(x_0)}{n!}\cdot(x-x_0)^n$
  - This is the **Taylor Series** for $f$ about $x=x_0$
    - There are some limitations on when this works, but that is for a math class.
- A Taylor Series about $x=0$ is sometimes called a Maclaurin Series.

### Example:
- Taylor Series for $f(x) = ln(x)$ about $x_0 = 2$

  $f(x) = ln(x)\quad \to \quad f(x) \approx ln(2) + \frac{1}{2}(x-2)-\frac{1}{2}\cdot\frac{1}{4}(x-2)^2 + ...$
    $f'(x) = \frac{1}{x} \qquad f`(2) = \frac{1}{2}$
