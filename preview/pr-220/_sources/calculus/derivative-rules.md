# Product, quotient, and chain rule
# Chain Rule

The chain rule is used to differentiate composite functions, when the "inside" of the function is more complicated than what we know. 

If a function $f(x)$ can be written as $f(u(x))$, then:
\begin{equation}
f'(x) = f'(u) \cdot u'(x)
\end{equation}

Or more explicitly:

If $y = f(u)$ and $u = g(x)$, then:
\begin{equation}
f'(x)= \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = f'(u) \cdot u'(x)
\end{equation}

'''{example} Differentiate the Function
Given: $f(x) = (x - 1)^2$

**Old method**: Expand the function before differentiating.
\begin{align}
f(x) &= x^2 - 2x + 1 \\
f'(x) &= 2x - 2
\end{align}

**Using the Chain Rule**:
\begin{align}
u &= x - 1 \\
f(u) &= u^2 \\
u'(x) &= 1 \\
f'(u) &= 2u \\
f'(x) &= f'(u) \cdot u'(x) = 2(x - 1) \cdot 1 = 2x - 2
\end{align}
'''

'''{example} Differentiate the Function
Given: $f(x) = e^{x^2}$

\begin{align}
u &= x^2 \\
f(u) &= e^u \\
u'(x) &= 2x \\
f'(u) &= e^u \\
f'(x) &= f'(u) \cdot u'(x) = e^{x^2} \cdot 2x
\end{align}
'''

'''{example} Differentiate the Function
Given: $f(x) = \ln(1 + 2x)$

\begin{align}
u &= 1 + 2x \\
f(u) &= \ln u \\
u'(x) &= 2 \\
f'(u) &= \frac{1}{u} \\
f'(x) &= \frac{1}{1 + 2x} \cdot 2 = \frac{2}{1 + 2x}
\end{align}
'''

'''{example} Differentiate the Function
Given: $f(x) = \frac{2}{1 + 2x} = 2(1 + 2x)^{-1}$

\begin{align}
u &= 1 + 2x \\
f(u) &= 2u^{-1} \\
u'(x) &= 2 \\
f'(u) &= -2u^{-2} \\
f'(x) &= -2(1 + 2x)^{-2} \cdot 2 = \frac{-4}{(1 + 2x)^2}
\end{align}
'''