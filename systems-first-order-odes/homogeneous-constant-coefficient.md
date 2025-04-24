# Homogeneous linear first-order ODEs with constant coefficients

```{solution}
\begin{equation}
 A =
\begin{bmatrix}
2 & -2\\
2 & 2
\end{bmatrix}
\end{equation}

\begin{equation}
| A - \lambda I |
\begin{vmatrix}
2- \lambda & -2\\
2 & 2- \lambda
\end{vmatrix}
= (\lambda - 2)^2 + 4 = 0 \rightarrow \lambda _{1,2} = 2 \underscore{+} 2i
\end{equation}

$\lambda _{1} = 2+2i$ :
\begin{equation}

\begin{bmatrix}
-2 i & -2\\
2 & -2i
\end{bmatrix}
\underline{x} _1 = \underline{0} \rightarrow \underline{x} _1 = 
\begin{bmatrix}
i\\
1
\end{bmatrix}
\end{equation}

$\lambda _{1} = 2-2i$ :
\begin{equation}

\begin{bmatrix}
2 i & -2\\
2 & 2i
\end{bmatrix}
\underline{x} _{2} = 0 \rightarrow \underline{x} _{2} = 
\begin{bmatrix}
-i\\
1
\end{bmatrix}
\end{equation}

General Solutuion:
\begin{equation}
\underline{y} = c_{1} e^{(2+2i)t}
\begin{bmatrix}
i\\
1
\end{bmatrix}
+ c _{2} e^{(2-2i)t}
\begin{bmatrix}
-i\\
1
\end{bmatrix}
=e^{2t}
\left( c _{1} e^{2it}
\begin{bmatrix}
i\\
1
\end{bmatrix}
+ c _{2} e^{-2it} 
\begin{bmatrix}
-i\\
1
\end{bmatrix}
\right)
\end{equation}

Initial Condition
\begin{equation}
\begin{bmatrix}
1\\
0
\end{bmatrix}
=
\begin{bmatrix}
i & -i\\
1 & 1
\end{bmatrix}
\begin{bmatrix}
c_{1}\\
c_{2}
\end{bmatrix}
\end{equation}

\begin{equation}
\begin{bmatrix}
i & -i & 1\\
1 & 1 & 0
\end{bmatrix}
\rightarrow
\begin{bmatrix}
1 & 1 & 0\\
1 & -i 0
\end{bmatrix}
\rightarrow
\begin{bmatrix}
1 & 1 & 0\\
0 & -2i & 1
\end{bmatrix}
\rightarrow
\begin{bmatrix}
1 & 1 & 0\\
0 & 1 & \frac{-1}{2i}
\end{bmatrix}
\rightarrow
\begin{bmatrix}
1 & 1 & \frac{1}{2i}\\
0 & 1 & - \frac{1}{2i}
\end{matrix}

\end{equation}

\begin{equation}
c_{1} = \frac{1}{2i} = - \frac{i}{2}
\end{equation}

\begin{equation}
c_{2} = - \frac{1}{2i} = \frac{i}{2}
\end{equation}

Hence
\begin{equation}
\underline{y} = e^{2t} \left( - \frac{i}{2} e^{2it}
begin{bmatrix}
i\\
1
end{bmatrix}
+ \frac{i}{2} e{-2it}
begin{bmatrix}
-i\\
1
end{bmatrix}
\right)
\end{equation}

simplifying

\begin{equation}
\underline{y}= e{2t} \left( - \frac{1}{2} e^{2it}
begin{bmatrix}
-1\\
i
end{bmatrix}
+ \frac{1}{2}e{-2it}
begin{bmatrix}
1\\
i
end{bmatrix}
\right) = e^{2t}
begin{bmatrix}
\cos 2t\\
\sin 2t
end{bmatrix}
\rightarrow
\begin{matrix}
y_{1} = e^{2t} \cos 2t\\
y_{2} = e^{2t} \sin 2t
\end{matrix}
\underline{y} = \underline{0} is an unstable spiral because the eigenvalues are complex, and the real part is positive.

\end{equation}
```