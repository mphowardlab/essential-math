# Series expansion

```{example} Taylor series
Find the two-term Taylor series for

\begin{equation}
f(x) = xe^{2 x^2}
\end{equation}

about $x = 0$.

---

We will evaluate the required derivatives. This will be a series of
[product rule](derivative-rules.md) calculations.

The value of the function is $f(0) = 0$. The first derivative is:

\begin{align}
f'(x) &= x(e^{2x^2}4x) + e^{2x^2} \\
&= (4x^2 + 1)e^{2x^2}
\end{align}
so $f'(0) = 1$. The second derivative is:

\begin{align}
f''(x) &= (4x^2+1)(e^{2x^2}4x)+8xe^{2x^2} \\
&= (16x^3+12x)e^{2x^2}
\end{align}
so $f''(0) = 0$. This means we need to keep going! The third derivative is:

\begin{align}
f'''(x) &= (16x^3+12x)(e^{2x^2}4x)+(48x^2+12)e^{2x^2} \\
&= (64x^4+96x^2+12)e^{2x^2}
\end{align}
so $f'''(0) = 12$.

Putting it all together,

\begin{equation}
f(x) \approx 0 + 1 \cdot x + \frac{1}{2} \cdot 0 \cdot x^2
+ \frac{1}{6} \cdot 12 \cdot x^3 + \cdots = x + 2x^3 + \cdots
\end{equation}

````

## Combining series

Some of these calculations can sometimes be avoided by combining series
together. For example, the Taylor series for $e^x$ is well known

\begin{equation}
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2} + \cdots
\end{equation}

The argument of *e* in *f* is $2x^2$, which is also zero when *x* is zero, so we
can substitute it in the known series to obtain

\begin{equation}
e^{2x^2} \approx 1 + 2x^2 + \frac{(2x^2)^2}{2} + \cdots
\end{equation}

Finally, inserting this series into *f* and expanding

\begin{align}
f(x) &= x e^{2x^2} \approx x (1 + 2x^2 + 2x^4 + \cdots) \\
&= x + 2x^3 + \cdots
\end{align}

When doing this process, it can be helpful to keep track of dropped terms using
$O$-notation

\begin{align}
e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x +  \frac{x^2}{2} + O(x^3) \\
e^{2x^2} &= 1 + 2x^2 + 2x^4 + O(x^6) \\
xe^{2x^2} &= x + 2x^3 + O(x^5)
\end{align}
