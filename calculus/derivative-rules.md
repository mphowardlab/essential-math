# Product, quotient, and chain rule

## Product Rule
If $f(x) = u(x)  v(x)$ then:

$$f' = uv' + vu'$$

"u-dv plus v-du"
"first-derivative-of-second plus second-derivative-of-first"

### Example 1:
\begin{equation}
f(x) = (x-3)(x-1)
\end{equation}
**Old way:** Expand The Polynomial 

\begin{align}
f(x) &= x^2 - 4x + 3 \\
f'(x) &= 2x - 4
\end{align}

**New way:** 

\begin{align}
u &= x-3 &  v &= x-1 \\
u' &= 1 & v' &= 1
\end{align}
  
 so
 
 \begin{equation}
 f'(x) =  (x-3) \cdot 1 + (x-1) \cdot 1 = 2x - 4
 \end{equation}

This example is a little silly, but the product rule is a life saver for functions that are hard to expand!
\begin{equation}
f(x) = \underbrace{(x+1)}_u \cdot \underbrace{(2x^2+5)(5x^3-4)}_v
\end{equation}
\begin{align}
u &= x+1   and  v &= (2x^2+5)(5x^3-4) \\
u' &= 1 and v' &= ? Product Rule Again!
\end{align}

\begin{equation}
f'(x) = (x+1)v' + (2x^2 +3)(5x^3-4)(1)
\end{equation}

\begin{align}
u &= 2x^2+5 and v &= 5x^3-4 \\
u' &= 4x and v' &= 15x^2
\end{align}
\begin{equation}
f'(x) = (x+1)[(2x^2+3)(15x^2) + (5x^3-4)(4x)] + (2x^2+5)(5x^3-4)
\end{equation}
*...simplify as much as you like*



### Example 2:
\begin{equation}
f(x) = \frac{1}{x} e^x
\end{equation}

\begin{align}
u &= \frac{1}{x} and v &= e^x   \\ 
u' &= -\frac{1}{x^2} and v' &= e^x
\end{align}
\begin{equation}
f'(x) = \frac{1}{x}e^x + e^x(-\frac{1}{x^2}) = e^x(\frac{1}{x} - \frac{1}{x^2})
\end{equation}

### Example 3:
\begin{equation}
f(x) = (x^2+3)\ln(x)
\end{equation}
\begin{align}
u &= x^2+3 and  v &= \ln(x)   \\ 
u' &= 2x and v' = \frac{1}{x}
\end{align}

\begin{equation}
f'(x) = (x^2+3)(\frac{1}{x}) + \ln(x)(2x) = \frac{x^2+3}{x} + 2x\ln(x)
\end{equation}
=======
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
