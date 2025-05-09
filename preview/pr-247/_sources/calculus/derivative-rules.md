# Rules for derivatives

## Product rule

The product rule is used to differentiate functions that can be written as the
product of two smaller functions.

```{topic} Product rule
If $f(x) = u(x) v(x)$, then

\begin{align}
f' &= u v' + v u ' \\
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

   ```{solution}
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
   ```

2. $f(x) = \dfrac{1}{x} e^x$

   ```{solution}
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
   ```

3. $f(x) = (x^2+3)\ln x$

   ```{solution}
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
   ```

## Quotient Rule

```{topic} Quotient Rule
If a function $f(x) = u(x) / v(x)$ and $v(x) \ne 0$, then:

\begin{equation}
f' = \frac{v u' - u v'}{v^2}
\end{equation}
```

```{hint}
One mnemonic that may or may not help remember this:

If the quotient rule you wish to know, it's "low-d-high less high-d-low"... then
draw the line and, down below, denominator squared will go.
```

To demonstrate this rule, consider $f(x) = (x-1)/x$. Previously, we would
have needed to separate the numerator before differentiating:

\begin{align}
f(x) &= 1 - \frac{1}{x} \\
f'(x) &= \frac{1}{x^2}
\end{align}

With the qoutient rule, instead we recognize

\begin{align}
u &= x - 1 & v &= x \\
u' &= 1 & v' &= 1
\end{align}

so

\begin{equation}
f' = \frac{ x \cdot 1 - (x-1) \cdot 1}{x^2} = \frac{1}{x^2}
\end{equation}

This was obviously harder than the old way, but there are other cases where it
is helpful to do the quotient rule!

1. $\displaystyle f(x) = \frac{x^2 -1}{x^4 + 2}$

   ```{solution}
   \begin{align}
   u &= x^2 -1 & v &= x^4 +2 \\
   u' &= 2x & v' &= 4x^3
   \end{align}

   so

   \begin{align}
   f'(x) &= \frac{ (x^4 + 2) \cdot (2x) - (x^2 - 1) \cdot (4x^3)}{(x^4 +2)^2}\\
    &= \frac{2x^5 + 4x^2 - 4x^5 +4x^3}{x^8 + 2x^4 + 4}
   \end{align}
   ```

2. $\displaystyle f(x) = \frac{e^{x}}{1 + x}$

   ```{solution}
   \begin{align}
   u &= e^{x} & v &= 1 + x \\
   u' &= e^{x} & v' &= 1
   \end{align}

   so

   \begin{align}
   f'(x) &= \frac{(1 + x) \cdot e^{x} - e^{x} \cdot 1}{(1 + x)^2} \\
   &= \frac{x e^{x}}{(1 + x)^2}
   \end{align}
   ```

3. $\displaystyle f(x) = \frac{(x - 1)(x^2 - 2x)}{x^4}$

   ```{solution}
   \begin{align}
   u &=  & v &= x^4\\
   u' &= 3x^2 - 6x + 2 & v' &= 4x^3 \\
   \end{align}

   so

   \begin{align}
   f'(x) &= \frac{x^4 \cdot (3x^2-6x+2) - (x^3 -3x^2 +2x) \cdot 4x^3}{x^8} \\
     &= \frac{-x^6 + 6x^5 - 6x^4}{x^8} \\
     &= -\frac{1}{x^2} + \frac{6}{x^3} - \frac{6}{x^4}
   \end{align}

   Note, though, that in this case we could also have expanded the numerator,
   divided through by $x^8$, and differentiated term-by-term to arrive at the
   same answer. The faster route depends on the problem!
   ```

## Chain rule

The chain rule is used to differentiate composite functions, when the "inside"
of the function is more complicated than what we know.

```{topic} Chain rule
If a function $f(x)$ can be written as $f(u(x))$, then:
\begin{equation}
f' = \dd{}{f}{u} \dd{}{u}{x} = f'(u(x)) u'(x)
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

   ```{solution}
   Make the replacement $u = x^2$:

   \begin{align}
   u &= x^2  &  f &= e^u \\
   u' &= 2x  &  f' &= e^u
   \end{align}

   so

   \begin{equation}
   f'(x) = \dd{}{f}{u} \dd{}{u}{x} = e^{u} \dd{}{u}{x} = e^{x^2} \cdot 2x
   \end{equation}
   ```

2. $f(x) = \ln(1 + 2x)$

   ```{solution}
   Make the replacement $u = 1+2x$:

   \begin{align}
   u &= 1 + 2x  & f &= \ln u \\
   u' &= 2  &  f' &= \frac{1}{u}
   \end{align}

   so

   \begin{equation}
   f'(x) = \dd{}{f}{u} \dd{}{u}{x} = \frac{1}{u} \dd{}{u}{x} = \frac{2}{1 + 2x}
   \end{equation}
   ```

3. $f(x) = \dfrac{2}{1 + 2x}$

   ```{solution}
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
   ```

## Trigonometric functions

| $f(x)$    | $f'(x)$    | $f(x)$    | $f'(x)$            |
|-----------|------------|-----------|--------------------|
| $\sin x$  | $\cos x$   | $\csc x$ | $-\csc x \cot x$ |
| $\cos x$  | $-\sin x$  | $\sec(x)$ | $\sec x \tan x$  |
| $\tan x$  | $\sec^2 x$ | $\cot x$ | $-\csc^2 x$       |

All of these follow from knowing only two derivatives: $\sin x$ and $\cos x$!
For example, to find the derivative of $\tan x$, use the quotient rule:

\begin{align}
f(x) &= \tan x = \frac{\sin x}{\cos x} \\
f'(x) &= \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} \\
  &= \frac{\sin^2 x + \cos^2 x}{\cos^2 x}\\
  &= \frac{1}{\cos^2 x} \\
  &= \sec^2 x
\end{align}

Or, to find the derivative of $\csc x$, use the chain rule:

\begin{align}
f(x) &= \csc x = (\sin x)^{-1} \\
f'(x) &= -(\sin x)^{-2} \dd{}{}{x}(\sin x) \\
  &= (\sin x)^{-2} \cdot (-\cos x) \\
  &= \frac{-1}{\sin x} \frac{\cos x}{\sin x} \\
  &= -\csc x \cot x
\end{align}

````{example} Harmonic oscillator
A harmonic oscillator is a mass *m* on a Hookean spring. The spring force is
$F = -kx$, where *k* is the spring constant and *x* is the displacement of the
mass.

```{image} ./_images/oscillating-diagram.png
:alt: Harmonic oscillator
:width: 300px
:align: center
```

If the mass is initially displaced to $x(0)$, it will then move according to:

\begin{equation}
x(t) = x(0) \cos\left(\frac{2\pi t}{T}\right)
\end{equation}

where

\begin{equation}
T = \frac{1}{2\pi} \sqrt{\frac{m}{k}}
\end{equation}

```{image} ./_images/oscillating-graph.png
:alt: Oscillator displacement
:width: 300px
:align: center
```

How fast is the oscillator moving at any given time? When is the oscillator
moving fastest?

---

We want to calculate the velocity $v = x'(t)$. Use the chain rule with:

\begin{align}
u &= \frac{2\pi t}{T} & f &= x(0) \cos u \\
u' &= \frac{2\pi}{T} & f' &= -x(0) \sin u
\end{align}

so

\begin{align}
v &= \dd{}{x}{t} = f'(u) \cdot u' \\
  &= -x(0) \sin u \cdot u' \\
  &= -\frac{2\pi x(0)}{T} \sin\left(\frac{2\pi t}{T}\right)
\end{align}

A function is at an *extrema* when its derivative is zero. If the function is
velocity, this derivative is the acceleration *a* and is equal to zero,
$a = v' = 0$. This means the mass is not accelerating! Using the chain rule
again:

\begin{equation}
a = v' =
  -\left(\frac{2\pi}{T}\right)^2 x(0) \cos\left(\frac{2\pi t}{T}\right) = 0
\end{equation}

The roots occur at $t = T/4$ or $3T/4$, when $x = 0$ and the spring is no longer
stretched. All potential energy has been converted to kinetic energy!
````

1. $f(x) = 3 \cos x + \sin x$

   ```{solution}
   \begin{align}
   f' &= 3 \dd{}{}{x}(\cos x) + 4 \dd{}{}{x}(\sin x)\\
   &= -3\sin x + 4\cos x
   \end{align}
   ```

2. $f(x) = 2 \sin x \cos x$

   ```{solution}
   Use the product rule with:

   \begin{align}
   u &= \sin x & v &= \cos x\\
   u' &= \cos x & v' &= -\sin x
   \end{align}

   so

   \begin{align}
   f' &= 2[\sin x(-\sin x) + \cos x(\cos x)] \\
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
   f' = \cos{u} \cdot 2 = 2 \cos 2 x
   \end{equation}
   ```

4. $f(x) = \tan({x^2+2x+3})$

   ```{solution}
   Use the chain rule with

   \begin{align}
   u &= x^2+2x+3 & f = \tan u\\
   u' &= 2x+2 & f' = \sec^2 u\\
   \end{align}

   so

   \begin{align}
   f' &= \sec^2 u \cdot u'\\
   &= (2x+2)\sec^2(x^2+2x+3)\\
   \end{align}
   ```

5. $f(x) = e^{\cos^2 x}$

   ```{solution}
   Use the chain rule with

   \begin{align}
   u &= \cos^2 x & f = e^{u}\\
   u' &= \dd{}{}{x}(\cos^2 x) & f' = e^{u}
   \end{align}

   So

   \begin{equation}
   f' = e^{u} u' = e^{\cos^2 x} \dd{}{}{x}(\cos^2 x)
   \end{equation}

   Use the chain rule again with

   \begin{align}
   u &= \cos x & f = u^{2}\\
   u' &= -\sin x & f' = 2u\\
   \end{align}

   So

   \begin{align}
   f' &= e^{\cos^2 x}(2uu')\\
   &= e^{\cos^2 x}(2\cos x \cdot -\sin x)\\
   &= -2 \sin x \cos x e^{\cos^2 x}\\
   \end{align}
   ```
