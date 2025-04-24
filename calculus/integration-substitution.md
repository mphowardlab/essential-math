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
let 
$$u = -x$$ 
Then, 
$$\d{u} = -\d{x}$$
Equivalently, 
$$x = -u$$
 and
$$\d{x} = -\d{u}$$

so

\begin{equation}
\int e^{-x} \d{x} 
&= -\int e^u \d{u} \\
&= -e^u + c = -e^{-x} + c \\
\end{equation}

```{example} *u*-substitution
Evaluate the integral

\begin{equation}
\int x e^{x^2} \d{x} = \frac{1}{2} e^{x^2} + c
\end{equation}

---

Let 

$$u=x^2$$

so 

$$\d{u} = 2x \d{x}$$

Then,

\begin{align}
\int e^{x^2} x\d{x} =  \int e^u \cdot \frac{1}{2}\d{u} = \frac{1}{2} e^u + c
\end{align}

Plugging *u* back in gives the final answer:

\begin{equation}
\int xe^{x^2} \d{x} = \frac{1}{2}e^{x^2} + c
\end{equation}
```
