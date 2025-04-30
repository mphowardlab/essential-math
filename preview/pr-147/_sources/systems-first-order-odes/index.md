# Systems of first-order ordinary differential equations

This module covers topics in solving systems of first-order ordinary
differential equations.

```{tableofcontents}
```


```{example} Solve the IVP 

\begin{align}
y_1' = 1-2y_1 \\
y_1(0) = 0 
\end{align}

\begin{align}
y_2' = 2y_1 - y_1y_2 \\
y_2(0) = 0 
\end{align}
```{solution}

We begin by solving for $y_1$ in terms of x. Recognizing that the function is separable and therefore can be solved using separation of variables. 

\begin{align}
\int \frac{dy_1}{1-2y_1} &= \int dx \\
-\frac{1}{2} \ln{\left(1-2y_1\right)} &= x + C_0 \\
\ln{\left(1-2y_1\right)} &= -2x + C_1 \\
1 - 2y_1 &= C_2e^{-2x} \\
y_1 &= \frac{1}{2} \left(1-C_2e^{-2x}\right) \\
\end{align}

Now, knowing $y_1(0)= 0$ We can solve for C

\begin{align}
0 = y_1(0) = \frac{1}{2}\left(1-C_2\right) \\
C_2 = 1 \\
\end{align}
So, our final answer for $y_1$ will be: 
\begin{align}
y_1 = \frac{1}{2} \left(1-e^{-2x}\right)
\end{align}

Next, we solve for $y_2$ knowing $y_1$ and recognizing that $y_2$ can also be solved via separation of variables
\begin{align}
y_2' &= y_1\left(2-y_2\right) \\
\int \frac{dy_2}{2-y_2} &= \int y_1dx = \int \frac{1}{2}\left(1-e^{-2x}\right)dx \\
-\ln{\left(2-y_2\right)} &= \frac{1}{2}\left(x + \frac{1}{2}e^{-2x}\right) +C_0\\
2 - y_2 &= C_1 \exp\left(-\frac{1}{2}\left(x+ \frac{1}{2}e^{-2x}\right)\right) \\
y_2 &= 2 - C_1 \exp\left(-\frac{1}{2}\left(x+\frac{1}{2}e^{-2x}\right)\right) \\
\end{align}

And again, knowing $y_2(0)= 0$, we can solve for C
\begin{align}
0 = y_2(0) &= 2 - C_1 e^{-\frac{1}{4}} \\
C_1 &= 2e^{\frac{1}{4}} \\
\end{align}

Therefore, 
\begin{align}
y_2 = 2\left[1-\exp\left(\frac{1}{4}-\frac{x}{2}-\frac{1}{4}e^{-2x}\right)\right]
\end{align}

Making our final answer for the IVP: 

\begin{align}
y_1 &= \frac{1}{2} \left(1-e^{-2x}\right) \\
\text{and} \\
y_2 &= 2\left[1-\exp\left(\frac{1}{4}-\frac{x}{2}-\frac{1}{4}e^{-2x}\right)\right] \\
\end{align}

````