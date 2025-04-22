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

## Skill builder problems

Expand the following to two terms:

1. $f(x)=\cos(x)$ at $x=0$

   ```{solution}
   The function and its derivatives at $x=0$ are:

   \begin{align}
   f(x) &= \cos(x) & f(0) &= 1 \\
   f'(x) &= -\sin(x) & f'(0) &= 0 \\
   f''(x) &= -\cos(x) & f''(0) &= -1
   \end{align}

   So:

   \begin{equation}
   f(x) \approx 1-\frac{x^2}{2}
   \end{equation}
   ```

2. $f(x)=\sin(x)$ at $x=0$

   ```{solution}
   The function and its derivatives at $x=0$ are:

   \begin{align}
   f(x) &= \sin(x) & f(0) &= 0\\
   f'(x) &= \cos(x) & f'(0) &= 1 \\
   f''(x) &= -\sin(x) & f''(0) &= 0 \\
   f^{(3)}(x) &= -\cos(x) & f^{(3)}(0) &= -1
   \end{align}

   So:

   \begin{equation}
   f(x) \approx x-\frac{x^3}{6}
   \end{equation}
   ```

3. $f(x)=e^x$ at $x=0$

   ```{solution}
   The function and its derivatives at $x=0$ are:

   \begin{align}
   f(x)&=e^x & f(0) &= 1\\
   f'(x)&=e^x & f'(0) &= 1
   \end{align}

   So:

   \begin{equation}
   f(x) \approx 1+x
   \end{equation}
   ```

4. $f(x)=\ln(1+x)$ at $x=0$

   ```{solution}
   The function and its derivatives at $x=0$ are:

   \begin{align}
   f(x)&=\ln(1+x) & f(0) &= 0\\
   f'(x)&=\frac{1}{1+x} & f'(0) &= 1\\
   f''(x)&=-\frac{1}{(1+x)^2} & f''(0) &= -1
   \end{align}

   So:

   \begin{equation}
   f(x) \approx x-\frac{x^2}{2}
   \end{equation}
   ```

5. $f(x)=\frac{1}{1+x}$ at $x=0$

   ```{solution}
   The function and its derivatives at $x=0$ are:

   \begin{align}
   f(x)&=\frac{1}{1+x} & f(0) &= 1\\
   f'(x)&=-\frac{1}{(1+x)^2} & f'(0) &= 1
   \end{align}

   So:

   \begin{equation}
   f(x) \approx 1-x
   \end{equation}
   ```

6. $f(x)=\cos(4x)$ at $x=0$

   ```{solution}
   From problem 1 we found...
   \begin{equation}
   f(x)=cos(x) \approx 1-\frac{x^2}{2}
   \end{equation}

   So:

   \begin{equation}
   f(x)=\cos(4x) \approx 1-\frac{(4x)^2}{2} \approx 1-8x^2
   \end{equation}
   ```

7. $f(x)=\cos(x-\pi)$ at $x=\pi$

   ```{solution}
   \begin{equation}
   f(x)=cos(x) \approx 1-\frac{x^2}{2}
   \end{equation}

   So:

   \begin{equation}
   f(x)=\cos(x-\pi) \approx 1-\frac{(x-\pi)^2}{2}
   \end{equation}

   Note: There is a constant shift of $x$ and $x_0$
   ```

8. $f(x)=e^x \sin(x)$ at $x=0$

   ```{solution}
   $f(x)=e^x \approx 1+x$
   $f(x)=\sin(x) \approx x-\frac{x^3}{6}$

   So:

   \begin{equation}
   f(x) \approx (1+x+\dots)(x-\frac{x^3}{6}+\dots) \approx x+x^2
   \end{equation}
   ```

9. $f(x)=\cos(x)$ at $x=\pi$

   ```{solution}
   
   Note: Reuse derivatives in problem 1

   \begin{align}
   f(x) &= \cos(x) & f(\pi) &= -1 \\
   f'(x) &= -\sin(x) & f'(\pi) &= 0 \\
   f''(x) &= -\cos(x) & f''(\pi) &= 1
   \end{align}

   So:

   \begin{equation}
   f(x) \approx -1+\frac{1}{2}(x-\pi)^2
   \end{equation}
   ```

10. $f(x)=7x^2-6x+1$ at $x=2$

    ```{solution}
    \begin{align}
    f(x)&=7x^2-6x+1 & f(2) &= 17\\
    f'(x)&=14x-6 & f'(2) &= 22
    \end{align}

    So:

    \begin{equation}
    f(x) \approx 17+22(x-2)
    \end{equation}
    ```
