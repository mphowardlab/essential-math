# Reduction of order
```{topic} Finding a basis
It can be hard to find $y_1$ and $y_2$ in general, but some techniques can help. We will learn how to get $y_2$ if a $y_1$ is found (e.g, by guessing).
```
If a solution $y_1$ of $y'' + P(x)y' + Q(x)y = 0$ is known, then 

$$
y_2 = y_1\int u\,dx 
$$

$$
u = \frac{1}{y_1^2}\ e^{-\int P\,dx}
$$


````{example}
\begin{equation}
(x^2 - x)y'' - xy' + y = 0 
\end{equation}

---

Looking at this, $y_1 = x$ is a solution because $y_1' = 1$ and $y_1'' = 0$. Use reduction of order to find $y_2$:

\begin{equation}
y_2 - \frac{x}{x^2 - x}\ y_1 + \frac{1}{x^2-x}y = 0
\end{equation}

\begin{equation}
y'' + \frac{1}{1-x}y'\ + \frac{1}{x^2-x}y=0
\end{equation}

---

\begin{align}
u &= \frac{1}{x^2}\ e^{-\int \frac{1}{1-x} dx} \\
  &= \frac{1}{x^2}\ e^{\ln(1-x)} = \frac{1-x}{x^2} \\ 
  &= \frac{1}{x^2}\ - \frac{1}{x}\ 
  \end{align}


\begin{equation}
\int u\,dx = -\frac{1}{x}\ - \ln{x}
\end{equation}

\begin{equation}
y_2 = x(-\frac{1}{x}-\ln{x}) = -(1 + x\ln{x})
\end{equation}

The General Solution becomes:

\begin{equation}
y = C_1 x + C_2 (1 + \ln x)
\end{equation}
````
