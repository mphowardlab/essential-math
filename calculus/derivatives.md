# Derivatives
A *tangent line* touches a curve exactly once

```{image} ./_images/Ball moving example.png
:alt: Ball with constant velocity example
```

How to estimate slope of line at $x_0$? 
\begin{itemize}
    \Evaluate $f(x_0)$ at the point
    \Evaluate $f(x_1)$ at another point
    \Make $x_1$ very close to $x_0$!
\end{itemize}

\begin{equation}
f'(x_0)=m \approx \frac{f(x_1)-f(x_0)}{x_1-x_0}
\end{equation}

We call the slope of the tangent at $x$ the *derivative* and define it as a limit 

\begin{equation}
f'(x_0)= \lim_{h\to \infty} \frac{f(x+h)-f(x)}{h}
\end{equation}
other notations: $\frac{df}{dx}$, $\mathbf{f}$

\begin{align}
\x_0 &=x \\
\x_1 &=x+h
\end{align} \
$\to$ h is distance between $x_0$ and $x_1$, make *small*

The derivative represents how fast the function is changing *(rate of change)* \
Ex: Ball moving with constant velocity $v$

\begin{equation}
\x(t) = x_0 + v\cdot t 
\end{equation}

Where position $\to x(t)$
start $\to x_0$
velocity $\to v$ and 
time $\to t$

```{image} ./_images/Ball moving example.png
:alt: Ball with constant velocity example
```

\begin{align}
x'(t) &= \lim_{h\to \infty} \frac{x(t+h)-x(t)}{h} \\
&= \lim_{h\to \infty} \frac{[x_0+v(t+h)]-[x_0+vt]}{h} \\
&=\lim_{h\to \infty} \frac{vh}{h} \\
&= v
\end{align}

The *velocity* is the rate of change of *position*