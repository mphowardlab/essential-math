# Product, quotient, and chain rule

5 Examples:

\begin{align}
(1) \quad f(x) &= 3\cos{x}+\sin{x}\\
f^{'}(x) &= 3\frac{d}{dx}(\cos{x})+4\frac{d}{dx}(\sin{x})\\
&= -3\sin{x} + 4\cos{x}\\
\end{align}

\begin{align}
(2) \quad f(x) &= 2\sin{x}\cos{x}\\
u &= \sin{x} \quad v = \cos{x}\\
u^{'} &= \cos{x} \quad v^{'} = -\sin{x}\\
&= 2[\sin{x}(-\sin{x})+\cos{x}(\cos{x})]\\
\end{align}

\begin{align}
(3) \quad f(x) &= \sin{2x}\\
u &= 2x \quad f(u) = \sin{u}\\
u^{'}(x) &= 2 \quad f^{'}(u) = \cos{u}\\
f^{'}(x) &= \cos{u}u^{'}\\
\quad &= 2\cos{2x}\\
\end{align}

\begin{align}
(4) \quad f(x) &= \tan{(x^{2}+2x+3)}\\
u &= x^{2}+2x+3 \quad f(u) = \tan{u}\\
\end{align}
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
