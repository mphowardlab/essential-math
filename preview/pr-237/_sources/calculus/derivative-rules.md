# Product, quotient, and chain rule

## Chain Rule

The chain rule is used to differentiate composite functions, when the "inside"
of the function is more complicated than what we know.

```{topic} Chain rule
If a function $f(x)$ can be written as $f(u(x))$, then:
\begin{equation}
f'(x) = \dd{}{f}{u} \dd{}{u}{x} = f'(u) u'(x)
\end{equation}
```

To demonstrate this rule, consider $f(x) = (x-1)^2$. Previously, we would have
needed to expand this function before differentiating:

\begin{align}
f(x) &= x^2 - 2x + 1 \\
f'(x) &= 2x - 2
\end{align}

With the chain rule, instead we recognize

\begin{align}
u &= x - 1  &  f &= u^2 \\
u' &= 1  &  f' &= 2u
\end{align}

so

\begin{equation}
f'(x) = \dd{}{f}{u} \dd{}{u}{x} = 2u \dd{}{u}{x} = 2(x-1) \cdot 1 = 2x - 2
\end{equation}

The results match! Some additional examples:

1. $f(x) = e^{x^2}$

   Make the replacement $u = x^2$:

   \begin{align}
   u &= x^2  &  f &= e^u \\
   u' &= 2x  &  f' &= e^u
   \end{align}

   so

   \begin{equation}
   f'(x) = \dd{}{f}{u} \dd{}{u}{x} = e^{u} \dd{}{u}{x} = e^{x^2} \cdot 2x
   \end{equation}

2. $f(x) = \ln(1 + 2x)$

   Make the replacement $u = 1+2x$:

   \begin{align}
   u &= 1 + 2x  & f &= \ln u \\
   u' &= 2  &  f' &= \frac{1}{u}
   \end{align}

   so

   \begin{equation}
   f'(x) = \dd{}{f}{u} \dd{}{u}{x} = \frac{1}{u} \dd{}{u}{x} = \frac{2}{1 + 2x}
   \end{equation}

3. $f(x) = \dfrac{2}{1 + 2x}$

   Make the replacement $u = 1+2x$:

   \begin{align}
   u &= 1 + 2x  & f &= 2u^{-1} \\
   u' &= 2  &  f' &= -2u^{-2}
   \end{align}

   so

   \begin{equation}
   f'(x) = \dd{}{f}{u} \dd{}{u}{x} = -2u^{-2} \cdot \dd{}{u}{x} =
     \frac{-4}{(1 + 2x)^2}
   \end{equation}


  ## Derivatives of Trigonometric Functions
| $f(x)$     | $f'(x)$    | $f(x)$    | $f'(x)$            |
|------------|------------|-----------|--------------------|
| $\sin(x)$  | $\cos(x)$  | $\csc(x)$ | $-\csc(x) \cot(x)$ |
| $\cos(x)$  | $-\sin(x)$ | $\sec(x)$ | $\sec(x) \tan(x)$   |
| $\tan(x)$  | $\sec^2(x)$| $\cot(x)$ | $-\csc^2(x)$        |

All of these follow from knowing only two derivatives: $\sin(x)$ and $\cos(x)$!

\mathbf{Proof of derivative of \tan(x)}

\begin{align}
f(x) = \tan(x) \frac{\sin(x)}{\cos(x)} \\
u = \sin(x) \; v = \cos(x) \\
u' = \cos(x) \; v' = -\sin(x) \\ 
f'(x) = \frac{\cos(\cos(x)) - \sin(-\sin(x))}{\cos^2(x)} = \frac{\sin^2(x) + \cos^2(x)}{\cos^2(x)} = \frac{1}{\cos^2(x)} = \sec^2(x)
\end{align}

\mathbf{Proof of derivative of \csc(x)}

\begin{align}
f(x) = \csc(x) = (\sin(x))^{-1} \\
u = \sin(x) \; f(u) = u^{-1} \\
u'(x) = \cos(x) \; f'(u) = -u^{-2} \\
f'(x) = -u^{-2} u' = -\cos (\sin(x))^{-2} = \frac{-1}{\sin(x)} \frac{\cos(x)}{\sin(x)} = -\csc(x) \cot(x)
\end{align}


