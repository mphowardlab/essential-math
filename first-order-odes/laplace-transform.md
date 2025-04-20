# Laplace transform

```{example} Laplace transform
Solve the initial value problem

\begin{equation}
y' =-ky, \quad y(0) =2
\end{equation}

---

Rearrange, apply Laplace transform $Y = L[y]$, and solve for $Y$:

\begin{align}
y'+ ky &= 0 \\
L[y'+ky] &= L[0] \\
L[y']+kL[y] &= L[0] \\
sY - y(0) + k Y &= 0 \\
(s+k) Y - 2 &= 0 \\
Y &= \frac{2}{s+k}
\end{align}

Invert Laplace transform:

\begin{equation}
y = L^{-1}\left[\frac{2}{s+k}\right] = 2L^{-1}\left[\frac{1}{s+k}\right] = 2 e^{-kt}
\end{equation}
```

```{example} Laplace transform with partial fractions
Solve the initial value problem:

\begin{align}
y'-y &= t\\

y(0) &= 1\\
\end{align}

---

Apply Laplace Transfrom

\begin{align}
L[y'-y] &= L[t]\\

SY-y(0)-Y &= \frac{1}{s^2}\\

(s-1) Y-1 &= \frac{1}{s^2}\\

y=\frac{1}{s-1} + \frac{1}{s^2(s-1)}
\end{align}


The best method to narrow down this equation would be to use fraction decomposition

\begin{equation}
\frac{1}{(s-1)(s^2)} = \frac{A_1}{s-1} + \frac{A_2}{s} + \frac{A_3}{s^2}=\frac{1}{s-1}+\frac{A_2}{s} - \frac{A_3}{s^2}
\end{equation}

$A_1$ and $A_3$ can be found using the coverup method:

\begin{align}
A_1 &= \frac{1}{1^2} = 1\\
A_3 &= \frac{1}{0-1} = -1
\end{align}

Set all of the s-squared variables equal to each other and solve for $A_2$
\begin{align}
1 &= s^2+A_2(s-1)s-(s-1)
\end{align}

\begin{equation}
1+A_2 = 0 = A_2= -1
\end{equation}

Plug in values and solve for $Y$

\begin{align}
Y&=\frac{1}{s-1} + \frac{1}{s-1}-\frac{1}{s}-\frac{1}{s^2}\\

Y&=\frac{2}{s-1}-\frac{1}{s} - \frac{1}{s^2}
\end{align}

Solve for $y$ by applying the Inverse Laplace Tansform

\begin{align}  
y &=L^{-1}[Y]\\  
  &=2L^{-1}\left[\frac{1}{(s-1)}\right]-L^{-1}\left[\frac{1}{s}\right]-L^{-1}\left[\frac{1}{s^2}\right]\\  
  &=2e^t-1-t  
\end{align} 
```
