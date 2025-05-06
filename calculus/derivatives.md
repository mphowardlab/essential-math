# Derivatives

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

## Differentiability 

To be differentiable, this limit must exist. A function would not be differentiable at a jump, cusp, coner, or vertical tangent

```{image} ./_images/IMG_0484.jpeg
:alt: Function and derivative
:align: center
:width: 300px
```

## Higher order derivatives

Example:

\begin{equation}
f(x)=x^2, f'(x)=2x
\end{equation}

\begin{align}
f''(x) &= lim_{h \to 0}{\frac{f'(x+h)-f'(x)}{h}} \\
    &= lim_{h \to 0}{\frac{(2(x+h)-2x)}{h}} \\
    &= lim_{h \to 0}{\frac{2h}{2}} \\
    &= 2
\end{align}

The second derivative tells us how to find the first derivative changes.

| Position | Velocity | Acceleration |
|----------|----------|--------------|
|    x     |    x'    |      x''     |
|          |    v     |      v'      |
|          |          |      a       |

```{example} Ballistic motion

```{image} ./_images/IMG_0484.jpeg
:alt: Function and derivative
:align: center
:width: 300px
```

\begin{align}
x(t) &= u_ot & v &= y' &= v_o -gt \\
y(t) &= v_ot - \frac{1}{2}gt^2 & a &= &= v' &= y''&= -g 
\end{align}

Newton's law: $F = ma = -mg (gravity!)
```
