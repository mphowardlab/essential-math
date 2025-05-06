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

```{example}
Physics example: harmonic oscillator
![oscillating-diagram](https://github.com/user-attachments/assets/60229bb0-22b3-4fbd-8623-379b5c04ec02)

\begin{align}
F=-kx
\end{align}

x(t)=x(0)\cos{{2 \pi t} / T} 
\end{align}

\begin{align}
T = {1/2 \pi}{\sqrt{m/k}}
\end{align}

![oscillating-graph](https://github.com/user-attachments/assets/2f3fcafe-22fb-4b06-a299-5203723eebca)

How fast is the oscillator moving?

\begin{align}
v(t)=x'(t)=x(0)\sin(u)u' \\
u={2 \pi t} / T \\
f(u)=x(0)cos(u) \\
u'-{2 \pi}/T \\
f'(u)=-x(0)sin(u)\\
-x(0)sin{{2 \pi t} / T} {2 \pi}/T
\end{align}

\begin{align}
v(t)={{-2 \pi x(0)}/T}{sin{{2 \pi t}/T}
\end{align}

When is the oscillator moving *fastest*?

A function is at an *extrema* when its derivative is zero. If the function is velocity, this is
\begin{equation}
a=v'=0
\end{equation}
i.e., it's not accelerating!

\begin{align}
a=v'-{-{{2 \pi}/T}^2}{x(0)cos{{2 \pi t}/T} = 0 \\
t= {T/4} or {3T/4}
\end{align}

This is when
\begin{equationn}
x(t)=0  
\end{equation}
and the spring is not stretched!

Under these conditions, all of the potential energy is kinetic energy. 
```
