# Product, quotient, and chain rule

```` 2. Quotient Rule 

If the quotient rule you wish to know, it's "low-d-high less high-d-low" then draw the line and down below, denominator squared will go.

\begin{equation}
If $f(x) = \frac{u(x)}{v(x)}$ and $v(x) \ne 0$, then
$f'(x) = \frac{v u' - u v'}{v^2}$
\end{equation}

````{A ( continued) example:}

\begin{align} 
$f(x) = \frac{x-1}{x}$
Old Way: $f(x) = 1 - \frac{1}{x} \Rightarrow f' = 0 + \frac{1}{x^2} = \frac{1}{x^2}$
New Way: $f' = \frac{ x(1) - (x-1)(1)}{x^2} = \frac{1}{x^2}$ =\begin{cases} 
u = x^2 -1 & v = x \\ 
u' = 1 & v' = 1 
\end{cases} 

This was obviously harder than the old way, but there are other cases where it is helpful to do the quotient rule!
````

````Example 1:
$f(x) = \frac{x^2 -1}{x^4 + 2}$ =\begin{cases} 
u = x^2 -1 & v = x^4 +2 \\
u' = 2x & v' 4x^3
\end{cases}
$f'(x) = \frac{ (X^4 + 2) \times (2x) - (x^2 - 1) \times (4x^3)}{(x^4 +2)^2} = \frac{2x^5 + 4x^2 - 4x^5 +4x^3}{x^8 + 2x^4 + 4}$
````

````Example 2: 
$f(x) = \frac{\exp(x)}{1 + x}$ =\begin{cases} 
u = \exp(x) & v = 1 + x \\ 
u' = \exp(x) & v' = 1 
\end{cases}
$f'(x) = \frac{(1 + x) \times \exp(x) - \exp(x) \times 1}{(1 + x)^2} = \frac{x \times \exp(x)}{(1 + x)^2}$
````
````Example 3:
$f(x) = \frac{(x - 1) \times (x^2 - 2x)}{x^4}$ =\begin{cases}
u = $(x -1) \times (x^2 -2x)$ \\
u' = $(x - 1) \times (2x-2)$
\end{cases}

$f'(x) = \frac{x^4 \times (x - 1) \times (2x - 2) - (x - 1) \times (x^2 -2x) \times (4x^3)}{x^8}$ 

v.s 

$f(x) = \frac{1}{x^4} \ times x^3 -3x^2 +2x = x^-1 -3x^-2 +2x^-3$
$f'(x) = -\frac{1}{x^2} + \frac{6}{x^3} - \frac{6}{x^4}$
Fastest way depends on the problem! 
````

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
