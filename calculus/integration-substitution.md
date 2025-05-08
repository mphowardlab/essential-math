# Integration using substitution

When we know an integral

\begin{equation}
\int e^x \d{x} = e^x + c
\end{equation}

we can evaluate related integrals like:

\begin{equation}
\int e^{-x} \d{x} = -e^{-x} + c
\end{equation}

by making a *substitution*. Specifically, we define a new variable *u*,
calculate its differential, and then replace both. For example, in this case,
let $u = -x$. Then, $\d{u} = -\d{x}$. Equivalently, $x = -u$ and
$\d{x} = -\d{u}$ so

\begin{equation}
\int e^{-x} \d{x} = -\int e^u \d{u} = -e^u + c = -e^{-x} + c
\end{equation}

```{example} *u*-substitution
Evaluate the integral

\begin{equation}
\int x e^{x^2} \d{x}
\end{equation}

---

Let $u=x^2$ so $\d{u} = 2x \d{x}$. Then,

\begin{align}
\int e^{x^2} x\d{x} =  \int e^u \cdot \frac{1}{2}\d{u} = \frac{1}{2} e^u + c
\end{align}

Plugging *u* back in gives the final answer:
\begin{equation}
\int xe^{x^2} \d{x} = \frac{1}{2}e^{x^2} + c
\end{equation}
```

## Skill Builder
### Find General Solutions for:
(1) $y' = (x+2)\ln(x)$

```{solution}
\begin{equation}
y = \int (x+2)\ln(x) \, dx
\end{equation}

Select $u$ and $dv$ to find $du$ and $v$:

\begin{align}
u &= \ln(x), & dv &= (x+2)\,dx \\
du &= \frac{1}{x}\,dx, & v &= \frac{x^2}{2} + 2x
\end{align}

Apply integration by parts: $uv - \int vdu$

\begin{align}
y &=\left( \frac{x^2}{2} + 2x \right)\ln(x) - \int \left( \frac{x^2}{2} + 2x \right) \frac{1}{x} \, dx \\
\end{align}

Solve the integral, don't forget $+C$

\begin{equation}
y = \left( \frac{x^2}{2} + 2x \right)\ln(x) - \frac{x^2}{4} - 2x + C
\end{equation}

```

(2) $y' = x^5\sin(x)$

```{solution}

\begin{align}
y = \int x^5 \sin(x) \, dx
\end{align}

Since $x^5$ is to the fifth order, integration by parts must be used 5 times. Use a table for this. Take derivatives of $u$, and integrate $dv$ until $u$ is zero. 

**Integration by parts table:**  

| $u$ | $dv$ |
| --- | --- |
| $x^5$ | $\sin(x)$ |
| $5x^4$ | $-\cos(x)$ |
| $20x^3$ | $-\sin(x)$ |
| $60x^2$ | $\cos(x)$ |
| $120x$ | $\sin(x)$ |
| $120$ | $-\cos(x)$ |
| $0$ | $-\sin(x)$ |

Multiply down the diagonals and add your +C

\begin{align}
y &= -x^5 \cos(x) + 5x^4 \sin(x) + 20x^3 \cos(x) - 60x^2 \sin(x) \\
  &\quad - 120x \cos(x) + 120 \sin(x) + C \\
\end{align}

To make the solution look cleaner, you can factor out cos(x) and sin(x). 

\begin{align}
  &= (-x^5 + 20x^3 - 120x) \cos(x) + (5x^4 - 60x^2 + 120) \sin(x) + C
\end{align}



```

(3) $y' = e^x\cos(x)$ 

```{solution}  

\begin{equation}
y = \int e^xcos(x)dx 
\end{equation}

Assign values for $u$ and $dv$ to find values for $du$ and $v$. 

\begin{align}
u &= \cos(x), & dv &= e^x\,dx \\
du &= -\sin(x)\,dx, & v &= e^x
\end{align}

Apply integration by parts: $uv - \int vdu$

\begin{align}
\int e^xcos(x)dx = e^xcos(x) + \int e^x(sin(x))dx
\end{align}

Assign new values for u and dv, find du and v again.
\begin{align}
u &= \sin(x), & dv &= e^x\,dx \\  
du &= \cos(x)\,dx, & v &= e^x  
\end{align}

Apply integration by parts: $uv - \int vdu$

\begin{align}
\int e^xcos(x)dx = e^xcos(x)+[e^xsin(x)-\int e^xcos(x)dx]
\end{align}

$ \int e^xcos(x)dx$ appears again, so we can add them together to get:

\begin{align}
2\int e^xcos(x)dx = e^xcos(x)+e^xsin(x)  
\end{align}

Divide both sides by 2, and don't forget +C

\begin{align}
\int e^x \cos(x)dx = \frac{e^x}{2}(\cos(x) + \sin(x)) + C
\end{align}
```
