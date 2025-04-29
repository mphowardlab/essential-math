# Homogeneous linear first-order ODEs with constant coefficients





## Skill Builder Problems
---

\( C) \quad A = \begin{bmatrix} 0 & 4 \\ -4 & 0 \end{bmatrix}; \quad IC = \begin{bmatrix} 1 \\ 0 \end{bmatrix} \)



``` {Solution}
1. Find the eigenvalues:
$
|A - \lambda I| = \begin{vmatrix} -\lambda & 4 \\ -4 & -\lambda \end{vmatrix} = \lambda^2 + 16 = 0 \Rightarrow \lambda_{1,2} = \pm 4i
$



2. Solve for \( $\lambda_1$ = 4i \):

\begin{bmatrix} -4i & 4 \\ -4 & -4i \end{bmatrix} x_1 = 0 
\Rightarrow x_1 = \begin{bmatrix} -i \\ 1 \end{bmatrix}


3. Solve for \( $\lambda_2$ = -4i \):

\begin{bmatrix} 4i & 4 \\ -4 & 4i \end{bmatrix} x_2 = 0 
\Rightarrow x_2 = \begin{bmatrix} i \\ 1 \end{bmatrix}


$$
{General Solution:} \quad 
y = C_1 e^{4it} \begin{bmatrix} -i \\ 1 \end{bmatrix} + C_2 e^{-4it} \begin{bmatrix} i \\ 1 \end{bmatrix}
$$

---

Initial Conditions:

$$
\begin{bmatrix} 1 \\ 0 \end{bmatrix} = y(0) = 
\begin{bmatrix} -i & i \\ 1 & 1 \end{bmatrix}
\begin{bmatrix} C_1 \\ C_2 \end{bmatrix}
$$

4. Solve for $C_1$ and $C_2$:

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
1 & 1 & 0 \\
-i & i & 1
\end{array}
\right]
\rightarrow
\left[
\begin{array}{cc|c}
1 & 1 & 0 \\
0 & 2i & 1
\end{array}
\right]
\rightarrow
\left[
\begin{array}{cc|c}
1 & 1 & 0 \\
0 & 1 & \frac{1}{2i}
\end{array}
\right]
\rightarrow
\left[
\begin{array}{cc|c}
1 & 0 & -\frac{1}{2i} \\
0 & 1 & \frac{1}{2i}
\end{array}
\right]
$$

So:

$$
C_1 = -\frac{1}{2i} = \frac{i}{2}, \quad C_2 = \frac{1}{2i} = -\frac{i}{2}
$$

Hence:

$$
\boxed{
y = \frac{i}{2} e^{4it} \begin{bmatrix} -i \\ 1 \end{bmatrix} 
- \frac{i}{2} e^{-4it} \begin{bmatrix} i \\ 1 \end{bmatrix}
}
$$

$$
\text{This is acceptable.}
$$

5. Using Euler's formula:

$$
e^{ix} = \cos x + i \sin x, \quad e^{-ix} = \cos x - i \sin x
$$

Then:

$$
y = \frac{1}{2} e^{4it} \begin{bmatrix} 1 \\ i \end{bmatrix} 
- \frac{1}{2} e^{-4it} \begin{bmatrix} -1 \\ i \end{bmatrix}
$$

$$
= \frac{1}{2} \left( \cos 4t + i \sin 4t \right) \begin{bmatrix} 1 \\ i \end{bmatrix} 
- \frac{1}{2} \left( \cos 4t - i \sin 4t \right) \begin{bmatrix} -1 \\ i \end{bmatrix}
$$

$$
= \begin{bmatrix} \cos 4t \\ -\sin 4t \end{bmatrix}
\Rightarrow
\boxed{y_1 = \cos 4t, \quad y_2 = -\sin 4t}
$$

$$
y = 0 \quad \text{is a center because the eigenvalues are purely imaginary.}
$$
```