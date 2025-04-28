# Integration by parts

Integrals like

\begin{equation}
\int x e^{-6 x} \d{x}
\end{equation}

are not solvable by [substitution](integration-substitution.md), but they look
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

```{example} Integration by parts 1

Evaluate

\begin{equation}
\int(3x+5)\cos\left(\frac{x}{4}\right) \d{x}
\end{equation}

---

Let

\begin{align}
u &= 3x+5 & \d{v} &= \cos\left(\frac{x}{4}\right) \d{x} \\
\d{u} &= 3 \d{x} & v &= 4\sin\left(\frac{x}{4}\right)
\end{align}

so:

\begin{align}
\int(3x+5)\cos\left(\frac{x}{4}\right) \d{x}
&= (3x+5)\left[4\sin\left(\frac{x}{4}\right)\right]
 - \int 4 \sin \left(\frac{x}{4}\right) 3 \d{x} \\
&= (12x+20) \sin\left(\frac{x}{4}\right)
 - 12\int\sin\left(\frac{x}{4}\right) \d{x} \\
&= (12x+20) \sin\left(\frac{x}{4}\right) + 48\cos\left(\frac{x}{4}\right) + c
\end{align}
```

```{example} Integration by parts 2

Evaluate

\begin{equation}
\int \ln x \d{x}
\end{equation}

---

Let

\begin{align}
u &= \ln x & \d{v} &= \d{x} \\
\d{u} &= \frac{1}{x} \d{x} & v &= x
\end{align}

so:

\begin{align}
\int \ln x \d{x} &= x \ln x - \int\frac{1}{x} x \d{x} \\
&= x \ln x - \int \d{x} \\
&= x \ln x - x + c \\
\end{align}
```

```{example} Integration by parts 3

Evaluate

\begin{equation}
\int x^5 \sqrt{x^3+1} \d{x}
\end{equation}

---

Let

\begin{align}
u &= x^3 & \d{v} &= x^2\sqrt(x^3+1) \d{x} \\
\d{u} &= 3x^2 \d{x} & v &= \frac{2}{9}(x^3+1)^{\frac{3}{2}}
\end{align}

so:

\begin{align}
\int(x^5)(\sqrt(x^3+1))dx
&= x^3\frac{2}{9}(x^3+1)^{\frac{3}{2}}
 - \int(\frac{2}{9}(x^3+1)^{\frac{3}{2}})3x^2dx \\
&= \frac{2}{9}x^3(x^3+1)^{\frac{3}{2}}
 - \frac{2}{9}\frac{2}{5}(x^3+1)^{\frac{5}{2}} + c \\
&= \frac{2}{9}x^3(x^3+1)^{\frac{3}{2}} - \frac{4}{45}(x^3+1)^{\frac{5}{2}} + c
\end{align}
```

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

| $u$    | $\d{v}$                |
|-------|-------------------|
| $x^4$   | $e^{x/2}$   |
| $4x^3$  | $2e^{\frac{x}{2}}$  |
| $12x^2$ | $4e^{\frac{x}{2}}$  |
| $24x$   | $8e^{\frac{x}{2}}$  |
| $24$    | $16e^{\frac{x}{2}}$ |
| $0$     | $32e^{\frac{x}{2}}$ |

For this shortcut make a chart like depicted above and then starting from the
first u, go down one row diagonally and multiply the u and the dv together and
then continue this all the way to 0 starting positive and switching signs each one.

Your answer will look like this:

$$\int(x^4e^{\frac{x}{2}}dx)
= (x^4)(2e^{\frac{x}{2}}) - (4x^3)(4e^{\frac{x}{2}})
+ (12x^2)(8e^{\frac{x}{2}}) - (24x)(16e^{\frac{x}{2}}) + (24)(32e^{\frac{x}{2}})$$

Simplified this will give the final answer of:

$$\int(x^4e^{\frac{x}{2}}dx) = 2x^4e^{\frac{x}{2}} - 16x^3e^{\frac{x}{2}}
+ 96x^2e^{\frac{x}{2}} - 384xe^{\frac{x}{2}} + 768e^{\frac{x}{2}}$$
