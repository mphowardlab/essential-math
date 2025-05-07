# Product, quotient, and chain rule

## Product rule

The product rule is used to differentiate functions that can be written as the
product of two smaller functions.

```{topic} Product rule
If $f(x) = u(x) v(x)$, then

\begin{align}
f'(x) &= u v' + v u ' \\
&= u \dd{}{v}{x} + v \dd{}{u}{x}
\end{align}
```

To demonstrate this rule, consider $f(x) = (x-3)(x-1)$.
Previously, we would have needed to expand this function before differentiating:

\begin{align}
f(x) &= x^2 - 4x + 3 \\
f'(x) &= 2x - 4
\end{align}

With the product rule, instead we recognize

\begin{align}
u &= x-3 &  v &= x-1 \\
u' &= 1 & v' &= 1
\end{align}

so

\begin{equation}
f'(x) = uv' + vu' = (x-3) \cdot 1 + (x-1) \cdot 1 = 2x - 4
\end{equation}

This example is a little silly, but the product rule is a life saver for
functions that are hard to expand!

1. $f(x) = (x+1)(2x^2 + 5)(5x^3-4)$

   Identify:

   \begin{equation}
   u = x+1  \qquad v = (2x^2+5)(5x^3-4)
   \end{equation}

   so

   \begin{equation}
   f'(x) = (x+1)v' + (2x^2 +3)(5x^3-4)(1)
   \end{equation}

   The derivative $v'$ can be evaluated by a second product rule!

   \begin{align}
   u &= 2x^2+5 & v &= 5x^3-4 \\
   u' &= 4x & v' &= 15x^2
   \end{align}

   finally giving

   <!--markdownlint-disable MD011 -->
   \begin{align}
   f'(x) &= (x+1)[(2x^2+3)(15x^2) + (5x^3-4)(4x)] \\
   &+ (2x^2+5)(5x^3-4)
   \end{align}
   <!--markdownlint-enable MD011 -->

2. $f(x) = \dfrac{1}{x} e^x$

   Identify:

   \begin{align}
   u &= \frac{1}{x} & v &= e^x   \\
   u' &= -\frac{1}{x^2} & v' &= e^x
   \end{align}

   so

   \begin{align}
   f'(x) &= \frac{1}{x}e^x + e^x(-\frac{1}{x^2}) \\
   &= e^x\left(\frac{1}{x} - \frac{1}{x^2}\right)
   \end{align}

3. $f(x) = (x^2+3)\ln x$

   Identify:

   \begin{align}
   u &= x^2+3 &  v &= \ln(x)   \\
   u' &= 2x & v' &= \frac{1}{x}
   \end{align}

   so

   \begin{align}
   f'(x) &= (x^2+3)\cdot\frac{1}{x} + (\ln x)(2x) \\
   &= \frac{x^2+3}{x} + 2x\ln x
   \end{align}

## Chain rule

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

## Skill builder problems

1. $f(x) = 3 \cos x + \sin x$

   ```{solution}
   \begin{align}
   f'(x) &= 3 \dd{}{}{x}(\cos x) + 4 \dd{}{}{x}(\sin x)\\
   &= -3\sin{x} + 4\cos{x}
   \end{align}
   ```

2. $f(x) = 2 \sin x \cos x$

   ```{solution}
   Use the product rule with:

   \begin{align}
   u &= \sin x & v &= \cos x\\
   u' &= \cos x & v' &= -\sin x
   \end{align}

   \begin{align}
   f'(x) &= 2[\sin x(-\sin x) + \cos x(\cos x)] \\
   &= 2(\cos^2 x-\sin^2 x) \\
   &= 2 \cos 2x\\
   \end{align}
   ```

3. $f(x) = \sin 2x$

   ```{solution}
   Use the chain rule with

   \begin{align}
   u &= 2x & f &= \sin u \\
   u' &= 2 & f' = \cos u
   \end{align}

   so

   \begin{equation}
   f'(x) = \cos{u} \cdot 2 = 2 \cos 2 x
   \end{equation}
   ```

4. $f(x) = \tan{x^{2}+2x+3}

```{solution}
Use the chain rule with 

\begin{align}
u &= x^{2}+2x+3 \quad f(u) = \tan{u}\\
u^{'} &= 2x+2 \quad f^{'}(u) = \sec^{2}{u}\\
\end{align}

so 

\begin{align}
f^{'}(x) &= \sec^{2}{u}u^{'}\\
&= (2x+2)\sec^{2}{(x^{2}+2x+3)}\\
\end{align}
```

\begin{align}
(5) \quad f(x) &= e^{\cos^{2}{x}}\\
u &= \cos^{2}{x} \quad f(u) = e^{u}\\
u^{'}(x) &= \frac{d}{dx}(\cos^{2}{x}) \quad f^{'}(u) = e^{u}\\
f^{'}(x) &= e^{u}u^{'} = e^{\cos^{2}{x}}\frac{d}{dx}(\cos^{2}{x})\\
u &= \cos{x} \quad f(u) = u^{2}\\
u^{'}(x) &= -\sin{x} \quad f^{'}(u) = 2u\\
&= e^{\cos^{2}{x}}(2uu^{'})\\
&= e^{\cos^{2}{x}}(2\cos{x}\cdot-\sin{x})\\
&= -2\sin{x}\cos{x}e^{\cos^{2}{x}}\\
\end{align}
