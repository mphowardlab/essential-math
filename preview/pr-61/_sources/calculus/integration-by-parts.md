# Integration by parts

Integrals like

\begin{equation}
\int x e^{-6 x} \d{x}
\end{equation}

are not solvably by [substitution](integration-substitution.md), but they look
like they are related closely enough that you may be able to! What to do here?
Recall the [product rule](derivative-rules.md) for two functions *u* and *v*,
then integrate:

\begin{align}
(uv)' &= uv' + v u' \\
uv &= \int u \d{v} + \int v \d{u}
\end{align}

Rearranging gives the familiar form:

```{topic} Integration by parts
\begin{equation}
\int u \d{v} = uv - \int v \d{u}
\end{equation}

To apply this technique, identify a *u* and a $\d{v}$. Differentiate $u$ and
integrate $\d{v}$, then apply the formula.
```

Let's try this for the integral above with
\begin{align}
u &= x & \d{v} &= e^{-6x} \d{x} \\
\d{u} &= \d{x} & v &= -\frac{e^{-6x}}{6}
\end{align}

so

\begin{align}
\int x e^{-6x} \d{x} 
&= x\frac{-e^{-6x}}{6} - \int\frac{-1}{6} e^{-6x} \d{x} \\
&= -\frac{xe^{-6x}}{6} + \frac{1}{6} \int e^{-6x} \d{x} \\
&= -\frac{xe^{-6x}}{6} - \frac{e^{-6x}}{36} + c
\end{align}

## Choosing parts

The heart of the technique is making a suitable choice for *u* and $\d{v}$.
The acronym L.I.A.T.E. can help make this choice:

- **L**ogarithmic  (best choice of u)
- **I**nverse
- **A**lgebraic
- **T**rigonometric
- **E**xponential  (worst choice of u)

Example 1:

$$\int(3x+5)\cos{\frac{x}{4}}dx = ?$$ 

Let

\begin{align}
u &= 3x+5 & \d{v} &= \cos{\frac{x}{4}} \d{x} \\
\d{u} &= 3 \d{x} & v &= 4\sin{\frac{x}{4}}
\end{align}

Which allows:

\begin{align}
\int(3x+5)\cos{\frac{x}{4}}dx 

&= (3x+5)[4\sin{\frac{x}{4}}] - \int4\sin{\frac{x}{4}}3dx \\

&= (12x+20)[\sin{\frac{x}{4}}] - 12\int\sin{\frac{x}{4}}dx \\

&= (12x+20)[4\sin{\frac{x}{4}}] + 48\cos{\frac{x}{4}} + c \\
\end{align}

So...

$$\int(3x+5)\cos{\frac{x}{4}}dx = (12x+20)[4\sin{\frac{x}{4}}] + 48\cos{\frac{x}{4}} + c$$

---

Example 2:

$$\int(lnxdx) = ?$$

Let 

\begin{align}
u &= lnx & \d{v} &= dx \\
\d{u} &= \frac{1}{x} \d{x} & v &= x
\end{align}

Which allows:

\begin{align}
\int(lnx) 

&= xlnx - \int(\frac{1}{x}xdx) \\

&= xlnx - x + c \\
\end{align}

So...

$$\int(lnx) = xlnx - x + c$$

---

Example 3:

$$\int(x^5)(\sqrt(x^3+1))dx = ?$$

Let 

\begin{align}
u &= x^3 & \d{v} &= x^2\sqrt(x^3+1) \d{x} \\
\d{u} &= 3x^2 \d{x} & v &= \frac{2}{9}(x^3+1)^{\frac{3}{2}}
\end{align}

Which allows:

\begin{align}
\int(x^5)(\sqrt(x^3+1))dx 

&= x^3\frac{2}{9}(x^3+1)^{\frac{3}{2}} - \int(\frac{2}{9}(x^3+1)^{\frac{3}{2}})3x^2dx \\

&= \frac{2}{9}x^3(x^3+1)^{\frac{3}{2}} - \frac{2}{9}\frac{2}{5}(x^3+1)^{\frac{5}{2}} + c \\

&= \frac{2}{9}x^3(x^3+1)^{\frac{3}{2}} - \frac{4}{45}(x^3+1)^{\frac{5}{2}} + c \\
\end{align}

So...

$$\int(x^5)(\sqrt(x^3+1))dx = \frac{2}{9}x^3(x^3+1)^{\frac{3}{2}} - \frac{4}{45}(x^3+1)^{\frac{5}{2}} + c$$

## Tabular method

$$\int(x^4e^{\frac{x}{2}}dx) = ?$$

Let 

\begin{align}
u &= x^4 & \d{v} &= e^{\frac{x}{2}} \\
\d{u} &= 4x63 \d{x} & v &= 2e^{\frac{x}{2}}
\end{align}

Which allows:

\begin{align}
\int(x^4e^{\frac{x}{2}}dx) 

&= x^4(2e^{\frac{x}{2}}) - \int2e^{\frac{x}{2}}(4x^3)dx \\
\end{align}

We will need to integrate by parts again but there is a shortcut!!

| u     | dv                |
|-------|-------------------|
| x^4   | e^{\frac{x}{2}}   |
| 4x^3  | 2e^{\frac{x}{2}}  |
| 12x^2 | 4e^{\frac{x}{2}}  |
| 24x   | 8e^{\frac{x}{2}}  |
| 24    | 16e^{\frac{x}{2}} |
| 0     | 32e^{\frac{x}{2}} |


For this shortcut make a chart like depicted below and then starting from the first u, go down one row diagonally and multiply the u and the dv together and then continue this all the way to 0.

Your answer will look like this:

$$\int(x^4e^{\frac{x}{2}}dx) 
= (x^4)(2e^{\frac{x}{2}}) - (4x^3)(4e^{\frac{x}{2}}) + (12x^2)(8e^{\frac{x}{2}}) - (24x)(16e^{\frac{x}{2}}) + (24)(32e^{\frac{x}{2}})$$

Simplified this will give the final answer of:

$$\int(x^4e^{\frac{x}{2}}dx) = 2x^4e^{\frac{x}{2}} - 16x^3e^{\frac{x}{2}} + 96x^2e^{\frac{x}{2}} - 384xe^{\frac{x}{2}} + 768e^{\frac{x}{2}}$$
