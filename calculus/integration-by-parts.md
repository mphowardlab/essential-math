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

- **L**ogarithmic  (best choice of *u*)
- **I**nverse
- **A**lgebraic
- **T**rigonometric
- **E**xponential  (worst choice of *u*)

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
u &= x^3 & \d{v} &= x^2\sqrt{x^3+1} \d{x} \\
\d{u} &= 3x^2 \d{x} & v &= \frac{2}{9}(x^3+1)^{3/2}
\end{align}

so:

\begin{align}
\int(x^5)(\sqrt(x^3+1))dx
&= x^3\frac{2}{9}(x^3+1)^{3/2}
 - \int\left[\frac{2}{9}(x^3+1)^{3/2}\right]3x^2dx \\
&= \frac{2}{9}x^3(x^3+1)^{3/2}
 - \frac{2}{9}\cdot\frac{2}{5}(x^3+1)^{5/2} + c \\
&= \frac{2}{9}x^3(x^3+1)^{3/2} - \frac{4}{45}(x^3+1)^{5/2} + c
\end{align}
```

## Tabular method

To integrate

\begin{equation}
\int x^4 e^{x/2} \d{x}
\end{equation}

by parts, let

\begin{align}
u &= x^4 & \d{v} &= e^{x/2} \\
\d{u} &= 4x^3 \d{x} & v &= 2e^{x/2}
\end{align}

which allows:

\begin{equation}
\int x^4e^{x/2} \d{x} = 2 x^4 e^{x/2} - \int 8 x^3 e^{x/2} \d{x}
\end{equation}

We will need to integrate by parts again, and again, and again... but there is
a shortcut! Make a staggered table. Differentiate *u* repeatedly until you get
a 0 in the last row. Then, integrate $\d{v}$ repeatedly until you reach the
last nonzero row for *u*. Multiply across rows using opposite signs.

| sign | $u$     | $\d{v}$     |
|------|---------|-------------|
|      |         | $e^{x/2}$   |
|  $+$ | $x^4$   | $2e^{x/2}$  |
|  $-$ | $4x^3$  | $4e^{x/2}$  |
|  $+$ | $12x^2$ | $8e^{x/2}$  |
|  $-$ | $24x$   | $16e^{x/2}$ |
|  $+$ | $24$    | $32e^{x/2}$ |
|      | $0$     |             |

The result is:

\begin{align}
\int x^4 e^{x/2} \d{x} &= x^4 (2e^{x/2}) - 4x^3 (4e^{x/2}) \\
&+ 12x^2 (8e^{x/2}) - 24x (16e^{x/2}) + 24 (32e^{x/2}) \\
&= (2x^4 - 16x^3 + 96x^2 - 384x + 768) e^{x/2}
\end{align}

## Skill builder problems

Evaluate the following

1. $\displaystyle \int (x+2)\ln x \d{x}$

   ```{solution}
   Select the following parts:

   \begin{align}
   u &= \ln x & \d{v} &= (x+2)\d{x} \\
   \d{u} &= \frac{1}{x}\d{x} & v &= \frac{x^2}{2} + 2x
   \end{align}

   so

   \begin{align}
   \int (x+2)\ln x \d{x} &= \left( \frac{x^2}{2} + 2x \right)\ln x -
     \int \left( \frac{x^2}{2} + 2x \right) \frac{1}{x} \d{x} \\
     &= \left( \frac{x^2}{2} + 2x \right)\ln x -
     \int \left( \frac{x}{2} + 2 \right) \d{x} \\
     &= \left( \frac{x^2}{2} + 2x \right)\ln x - \frac{x^2}{4} - 2x + c
   \end{align}
   ```

2. $\displaystyle \int x^5\sin x \d{x}$

   ```{solution}
   Since $x^5$ is to the fifth order, integration by parts must be used 5 times.
   Use the tabular method for this.

   | sign | $u$     | $\d{v}$   |
   |------|---------|-----------|
   |      |         | $\sin x$  |
   |  $+$ | $x^5$   | $-\cos x$ |
   |  $-$ | $5x^4$  | $-\sin x$ |
   |  $+$ | $20x^3$ | $\cos x$  |
   |  $-$ | $60x^2$ | $\sin x$  |
   |  $+$ | $120x$  | $-\cos x$ |
   |  $-$ | $120$   | $-\sin x$ |
   |      | $0$     |           |

   so

   \begin{equation}
   \int x^5\sin x \d{x} = -x^5 \cos x + 5x^4 \sin x + 20x^3 \cos x -
     60x^2 \sin x - 120x \cos x + 120 \sin x + c
   \end{equation}

   To make the solution look cleaner, you can factor out $\cos x$ and $\ sin x$.

   \begin{equation}
   \int x^5\sin x \d{x} = (-x^5 + 20x^3 - 120x) \cos x +
     (5x^4 - 60x^2 + 120) \sin x + c
   \end{equation}
   ```

3. $\displaystyle \int e^x\cos x \d{x}$

   ```{solution}
   Select the following parts:

   \begin{align}
   u &= \cos x & \d{v} &= e^x\d{x} \\
   \d{u} &= -\sin x\d{x} & v &= e^x
   \end{align}

   so

   \begin{equation}
   \int e^x \cos x \d{x} = e^x \cos x + \int e^x \sin x \d{x}
   \end{equation}

   To evaluate this integral, select new parts:

   \begin{align}
   u &= \sin x, & \d{v} &= e^x\d{x} \\
   \d{u} &= \cos x\d{x} & v &= e^x
   \end{align}

   so

   \begin{equation}
   \int e^x \cos x \d{x} = e^x \cos x+ \left[e^x \sin x - \int e^x \cos x \d{x}\right]
   \end{equation}

   The same integral appears on both sides! Add them together and solve:

   \begin{align}
   2 \int e^x \cos x \d{x} &= e^x \cos x + e^x \sin x \\
   \int e^x \cos x \d{x} &= \frac{e^x}{2}(\cos x + \sin x) + c
   \end{align}
   ```
