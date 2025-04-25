# Homogeneous linear first-order ODEs with constant coefficients





## Skill Builder
$C)
A = \begin{bmatrix}
0 & 4 \\
-4 & 0
\end{bmatrix}
; IC = \begin{bmatrix}
1 \\
0
\end{bmatrix}
$

```{dropdown} **General Solution**
To find the eigenvalues:
$
|A - \lambda I| = \begin{vmatrix} -\lambda & 4 \\ -4 & -\lambda \end{vmatrix} = \lambda^2 + 16 = 0 \Rightarrow \lambda_{1,2} = \pm 4i
$


For \( λ = 4i \):

\begin{bmatrix} -4i & 4 \\ -4 & -4i \end{bmatrix} x_1 = 0 
\Rightarrow x_1 = \begin{bmatrix} -i \\ 1 \end{bmatrix}


For \( $\lambda_2$ = -4i \):

\begin{bmatrix} 4i & 4 \\ -4 & 4i \end{bmatrix} x_2 = 0 
\Rightarrow x_2 = \begin{bmatrix} i \\ 1 \end{bmatrix}


**General Solution:**
$
y = c_1 e^{4it} \begin{bmatrix} -i \\ 1 \end{bmatrix} + c_2 e^{-4it} \begin{bmatrix} i \\ 1 \end{bmatrix}
$
```

```{dropdown} **Particular Solution**
**Initial Conditions:**

$$
\begin{bmatrix} 1 \\ 0 \end{bmatrix} = y(0) = 
\begin{bmatrix} -i & i \\ 1 & 1 \end{bmatrix}
\begin{bmatrix} c_1 \\ c_2 \end{bmatrix}
$$

Solving for $c_1$ and $c_2$:

$$
\left[
\begin{array}{cc|c}
-i & i & 1 \\
1 & 1 & 0
\end{array}
\right]
\rightarrow
\left[
\begin{array}{cc|c}
1 & -1 & -i \\
1 & 1 & 0
\end{array}
\right]
\rightarrow
\left[
\begin{array}{cc|c}
0 & 2 & -i \\
1 & 1 & 0
\end{array}
\right]
\rightarrow
\left[
\begin{array}{cc|c}
1 & 0 & -\frac{i}{2} \\
0 & 1 & \frac{i}{2}
\end{array}
\right]
$$

So:

$$
c_1 = -\frac{i}{2}, \quad c_2 = \frac{i}{2}
$$

---

**Hence:**

$$
\boxed{
y = \frac{1}{2} e^{4it} \begin{bmatrix} -i \\ 1 \end{bmatrix} 
- \frac{1}{2} e^{-4it} \begin{bmatrix} i \\ 1 \end{bmatrix}
}
$$

$$
\text{This is acceptable.}
$$

Using Euler's formula:

$$
e^{ix} = \cos x + i \sin x, \quad e^{-ix} = \cos x - i \sin x
$$

Then:

$$
y = \frac{1}{2} e^{4it} \begin{bmatrix} -i \\ 1 \end{bmatrix} 
- \frac{1}{2} e^{-4it} \begin{bmatrix} i \\ 1 \end{bmatrix}
$$

$$
= -\frac{1}{2} \left( \cos 4t + i \sin 4t \right) \begin{bmatrix} i \\ -1 \end{bmatrix} 
- \frac{1}{2} \left( \cos 4t - i \sin 4t \right) \begin{bmatrix} -i \\ -1 \end{bmatrix}
$$

$$
= \begin{bmatrix} \cos 4t \\ -\sin 4t \end{bmatrix}
\Rightarrow
\boxed{y_1 = \cos 4t, \quad y_2 = -\sin 4t}
$$

---

\(y = 0\) is a **center** because the eigenvalues are purely imaginary.