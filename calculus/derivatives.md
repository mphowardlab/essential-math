# Derivatives

# Tangent line and rate of change

A *tangent line* touches a curve exactly once.

```{image} ./_images/tangent.png
:alt: Graph of tangent line as slope of curve
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

We call the slope of the tangent at $x$ the *derivative* and define it as a limit. 

```{topic} Derivative as a limit
\begin{equation}
f'(x_0)= \lim_{h\to \infty} \frac{f(x+h)-f(x)}{h}
\end{equation}

other notations: $\frac{df}{dx}$, $\mathbf{f}$

---

\begin{align}
\x_0 &=x \\
\x_1 &=x+h
\end{align} \
$\to$ h is distance between $x_0$ and $x_1$, make *small*
```

The derivative represents how fast the function is changing *(rate of change)*. 
````{example} Ball moving with constant velocity $v$
\begin{equation}
\x(t) = x_0 + v\cdot t 
\end{equation}

Where position $\to x(t)$
start $\to x_0$
velocity $\to v$ and 
time $\to t$

```{image} ./_images/ball example.png
:alt: Ball with constant velocity example```

\begin{align}
x'(t) &= \lim_{h\to \infty} \frac{x(t+h)-x(t)}{h} \\
&= \lim_{h\to \infty} \frac{[x_0+v(t+h)]-[x_0+vt]}{h} \\
&=\lim_{h\to \infty} \frac{vh}{h} \\
&= v
\end{align}

The *velocity* is the rate of change of *position*
````

## Formal definition

The derivative is also a function!

```{image} ./_images/derivative_function.png
:alt: Function and derivative
:align: center
:width: 300px
```

For example, if $f(x) = x^2$,
\begin{align}
f'(x) &= \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} \\
    &= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} \\
    &= \lim_{h \to 0} \frac{2xh + h^2}{h} \\
    &= \lim_{h \to 0} (2x + h) \\
    &= 2x
\end{align}

This function represents how the slope of the line tangent to *f* is changing
with *x*. For this function, the slope continually increases! Some additional
examples:

1. $f(x) = (x - 1)^2 + 1$

   \begin{align}
   f'(x) &= \lim_{h \to 0} \frac{[(x + h - 1)^2 + 1] - [(x - 1)^2 + 1]}{h} \\
       &= \lim_{h \to 0} \frac{(x - 1)^2 +
          2(x - 1)h + h^2 + 1 - (x - 1)^2 - 1}{h} \\
       &= \lim_{h \to 0} \frac{2(x - 1)h + h^2}{h} \\
       &= \lim_{h \to 0} 2(x - 1) + h \\
       &= 2(x - 1)
   \end{align}

2. $f(x) = 1/x$

   \begin{align}
   f'(x) &= \lim_{h \to 0} \frac{\dfrac{1}{x+h} - \dfrac{1}{x}}{h} \\
       &= \lim_{h \to 0} \frac{\dfrac{x - (x + h)}{x(x+h)}}{h}  \\
       &= \lim_{h \to 0} \frac{\dfrac{- h}{x(x+h)}}{h}  \\
       &= \lim_{h \to 0} \frac{-1}{(x+h)x} \\
       &= \frac{-1}{x^2}
   \end{align}
