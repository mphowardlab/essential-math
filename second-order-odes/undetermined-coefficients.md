# Undetermined coefficients

### Skill Builder - Method of Undetermined Coefficients 

**Solve the differential equation:**

$$
y'' - y' - 12y = 144x^3 + \frac{25}{2}
$$

**with initial conditions:**

$$
y(0) = 5, \quad y'(0) = -\frac{1}{2}
$$

---

### Homogeneous Solution:
$$
y'' - y' - 12y = 0 
$$ 

$$
\lambda^2 - \lambda - 12 = 0
$$

$$
(\lambda - 4)(\lambda + 3) = 0
$$

$$
\lambda_1 = 4, \quad \lambda_2 = -3
$$

$$
y_h = C_1 e^{4x} + C_2 e^{-3x}
$$

---

### Particular Solution:

Guess:

$$
y_p = k_1 x^3 + k_2 x^2 + k_3 x + k_4
$$

$$
y_p' = 3k_1x^2 + 2k_2x + k_3
$$

$$
y_p'' = 6k_1x + 2k_2
$$

$$
(6k_1x + 2k_2) - (3k_1x^2 + 2k_2x + k_3) - 12(k_1x^3 + k_2x^2 + k_3x + k_4)
$$

$$
= -12k_1x^3 + (-3k_1 - 12k_2)x^2 + (6k_1 - 2k_2 - 12k_3)x + (2k_2 - k_3 - 12k_4)
$$

  $$
  -12k_1 = 144 \quad \Rightarrow \quad k_1 = -12
  $$

  $$
  -3k_1 - 12k_2 = 0
  $$
  
  $$
  36 - 12k_2 = 0 \quad \Rightarrow \quad k_2 = 3
  $$

  $$
  6k_1 - 2k_2 - 12k_3 = 0 \quad \Rightarrow \quad k_3 = \frac{6k_1 -2k_2}{12} = -\frac{13}{2}
  $$

  $$
2k_2 - k_3 - 12k_4 = \frac{25}{2} \quad \Rightarrow \quad 12k_4 = 2(-3) - ('\frac{13}{2}) - \frac{25}{2} = 0 \quad \Rightarrow \quad k_4 = 0
  $$

  $$
**y_p = -12x_3 + 3x^2 - \frac{13}{2}x**
  $$
  
---

### Boundary Conditions:
 $$
 y = C_1 e^{4x} + C_2 e^{-3x} - 12x^3 + 3x^2 - \frac{13}{2}x
$$

$$
y' = 4C_1 e^{4x} - 3C_2e^{-3X} - 36x^2 + 6x - \frac{13}{2}
$$

$$
5 = y(0) = C_1 + C_2 \quad \Rightarrow \quad C_1 + C_2 = 5
$$

$$
-\frac{1}{2} = y'(0) = 4C_1 - 3C_2 - \frac{13}{2} \quad \Rightarrow \quad 4C_1 - 3C_2 = 6
$$

$$\begin{equation}
\begin{bmatrix} 1 & 1 & 5 \\\ 4 & -3 & 6 \end{bmatrix} \quad \Rightarrow
\begin{bmatrix} 1 & 1 & 5 \\\ 0 & -7 & 14 \end{bmatrix} \quad \Rightarrow
\begin{bmatrix} 1 & 1 & 5 \\\ 0 & 1 & 12  \end{bmatrix} \quad \Rightarrow
\begin{bmatrix} 1 & 0 & 3 \\\ 0 & 1 & 12  \end{bmatrix}
\end{equation}$$

---

### Final Answer:

$$
\boxed{y = 3e^{4x} + 2e^{-3x} - 12x^3 + 3x^2 - \frac{13}{2}x}
$$




