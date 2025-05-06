# Homogeneous linear first-order ODEs with constant coefficients

```{example} Diffusion cell

Consider a diffusion cell consisting of two compartments with solute concentrations $c_1$ and $c_2$. The concentrations change according to

```{image} ./_images/name_of_image.jpg
:alt: <Diffusion cell>
:align: center
:width: 200px
```

\begin{align}
c_1' &= -0.1c_1 + 0.1c_2 \\
c_2' &= 0.1c_1 - 0.1c_2
\end{align}

\begin{equation}
\vv{c}' = \vv{A} \vv{c}, \quad \text{where}
\quad \vv{A} = \begin{bmatrix} -0.1 & 0.1 \\ 0.1 & -0.1 \end{bmatrix}
\end{equation}
Since A is symmetric, it has real eigenvalues.

\begin{align}
\det(A - \lambda I) = 0
\end{align}

\begin{align}
\begin{vmatrix} -0.1 - \lambda & 0.1 \\ 0.1 & -0.1 - \lambda \end{vmatrix} = (\lambda + 0.1)^2 - (0.1)^2 = \lambda^2 + 0.2\lambda = 0
\end{align}

So, the eigenvalues are

\begin{align}
\lambda_1 = 0, \quad \lambda_2 = -0.2
\end{align}

TNext, we find eigenvectors:
\begin{align}
\lambda_1 &= 0: \begin{bmatrix} -0.1 & 0.1 \\ 0.1 & -0.1 \end{bmatrix} \vv{x_1}
 = \vv{0} \\
\lambda_2 &= -0.2: \begin{bmatrix} 0.1 & 0.1 \\ 0.1 & 0.1 \end{bmatrix} \vv{x_2}
 = \vv{0}  
\end{align}
so, 
\begin{equation}
\vv{x}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad \vv{x}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{equation}

The general solution is:
\begin{align}
\vv{c}(t) &= a_1 e^{0t} \begin{bmatrix} 1 \\ 1 \end{bmatrix} +
a_2 e^{-0.2t} \begin{bmatrix} 1 \\ -1 \end{bmatrix} \\
&= a_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 e^{-0.2t}
\begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{align}

Apply the initial conditions:

\begin{align}
\vv{c}(0) &= \begin{bmatrix} 1 \\ 0 \end{bmatrix}
= a_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 \begin{bmatrix} 1 \\ -1 \end{bmatrix} \\
&= \begin{bmatrix} a_1 + a_2 \\ a_1 - a_2 \end{bmatrix}
= \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
\begin{bmatrix} a_1 \\ a_2 \end{bmatrix}
\end{align}

Solving this system gives:

\begin{equation}
a_1 = a_2 = \frac{1}{2}
\end{equation}

Substituting back, the general solution for \(\vv{c}(t)\) becomes:

\begin{align}
\vv{c}(t) &= \frac{1}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix}
+ \frac{1}{2} e^{-0.2t} \begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{align}

Notice
\begin{equation}
c_2(t) = 1 - c_1(t)
\end{equation}
```