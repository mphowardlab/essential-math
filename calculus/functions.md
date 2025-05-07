# Functions

## Manipulating functions

::::{grid}
:gutter: 2

:::{grid-item-card} Horizontal shift
:columns: 6

- $f(x+a)$ shifts *f* left by *a*.
- $f(x-a)$ shifts *f* right by *a*.

```{image} ./_images/Shifting_X_direction.jpg
:alt: Shifting in X direction
:width: 300px
:align: center
```

:::

:::{grid-item-card} Vertical shift
:columns: 6

- $f(x)+b$ shifts *f* up by *b*.
- $f(x)-b$ shifts *f* down by *b*.

```{image} ./_images/Shifting_Y_direction.jpg
:alt: Shifting in Y direction
:width: 300px
:align: center
```

:::

:::{grid-item-card} Horizontal scaling
:columns: 6

- Scaling $f(cx)$ compresses *f* horizontally by *c*.
- Scaling $f(x/c)$ stretches *f* horizontally by *c*.

```{image} ./_images/Horizontal_Compression.jpg
:alt: Horizontal Compression
:width: 300px
:align: center
```

:::

:::{grid-item-card} Vertical scaling
:columns: 6

- Scaling $f(x)/c$ compresses *f* vertically by *c*.
- Scaling $cf(x)$ streches *f* vertically by *c*.

```{image} ./_images/Vertical_Stretch.jpg
:alt: Vertical Stretch
:width: 300px
:align: center
```

:::
::::

## Evaluating and Manipulating Trigonometric Functions
```{image} ./_images/MAtappunitcircle66.png
:alt: Unit Circle
:width: 300px
:align: center
```
 Each quadrant of the unit circle corresponds to a positive trigonometric function as represented by "A(all)+", "T(tangent)+", "S(sine)+", "C(cosine)+".

The given unit circle has a triangle drawn within which represents how trigonometric functions are related to lengths and heights of the sides of right traingles. 
The circle has a radius and is centered at (0,0). A point on the circle is defined by angle $\theta$ measured counterclockwise from the positive x-axis.
The trigonometric functions describe how the coordinates of a point on the unit circle relate to the angle $\theta$.
\begin{align}
\sin(\theta)& = \frac{y}{r}& 
\cos(\theta)& = \frac{x}{r}& 
\tan(\theta)& = \frac{y}{x}\\
\csc(\theta)& = \frac{r}{y}&
\sec(\theta)& = \frac{r}{x}&
\cot(\theta)& = \frac{x}{y}\\
\end{align}

Angles can be measured in degrees of radians
\begin{align}
\theta(rad.)& = \theta(deg.)(\frac{\pi}{180^{\circ}})
\end{align}

### Special Angles
\begin{align}
\theta& = 30^{\circ} \frac{\pi}{6}& \theta& = 60^{\circ} \frac{\pi}{3}
\end{align}

```{image} ./_images/306090triangle.png
:alt: 30 60 90 Traingle
:width: 300px
:align: center
```

At $ \theta = 30^{\circ} $:
\begin{align}
\sin(\theta)& = \frac{1}{2}& 
\cos(\theta)& = \frac{\sqrt{3}}{2}
\end{align}

At $ \theta = 60^{\circ} $:
\begin{align}
\sin(\theta)& = \frac{\sqrt{3}}{2}&
\cos(\theta)& = \frac{1}{2}& 
\end{align}

```{image} ./_images/454590triangle.png
:alt: 45 45 90 Traingle
:width: 300px
:align: center
```

At $ \theta = 45^{\circ} $
\begin{align}
\sin(\theta)& = \frac{1}{\sqrt{2}}&
\cos(\theta)& = \frac{1}{\sqrt{2}}
\end{align}

What about $ \theta \ge 90^{\circ}(\frac{\pi}{2}) $?
Take the angle of $\theta$ relative to the x-axis, then apply the sign based on which quadrant the angle falls in.

```{example} <$\theta = 185^{\circ}$>
```{image} ./_images/Untitled-4png.png
:width: 300px
:align: center
```

The graph shows $\theta = \frac{3\pi}{4}$ and $\theta' = \frac{\pi}{4}$ so:
\begin{align}
\sin(\theta')& = \frac{1}{\sqrt{2}}&
\cos(\theta')& = \frac{1}{\sqrt{2}}
\end{align}

In quadrant two sine is positive so:
\begin{align}
\sin(\theta)& = \frac{1}{\sqrt{2}}&
\cos(\theta)& = -\frac{1}{\sqrt{2}}
\end{align}>

Trigonometric functions represent waves. The properties of the wave can be encoded by manipulating the function.
```{image} ./_images/Triggraph.png
:alt: Trigonometric Function
:width: 300px
:align: center
```

\begin{align}
y& = A\sin[(\frac{2\pi}{L})(x + x_{o})] + y_{o}
\end{align}
Where: A = amplitude, $\frac{2\pi}{L}$ = period, $x_{0}$ = horizontal shift, and $y_{o}$ = vertical shift

## Identities

### Trigonmetric functions

\begin{align}
\sin \theta &= \frac{y}{r} & \csc \theta &= \frac{r}{x} = \frac{1}{\cos \theta} \\
\cos \theta &= \frac{x}{r} & \sec \theta &= \frac{r}{x} = \frac{1}{\cos \theta} \\
\tan \theta &= \frac{y}{x} = \frac{\sin \theta}{\cos \theta} &
\cot \theta &= \frac{x}{y} = \frac{\cos \theta}{\sin \theta}
\end{align}

\begin{align}
\sin^2 \theta + \cos^2 \theta = 1 \\
1 + \tan^2 \theta = \sec^2 \theta \\
1 + \cot^2 \theta = \csc^2 \theta
\end{align}

\begin{align}
\cos(A+B) = \cos A \cos B - \sin A \sin B \\
\sin(A+B) = \sin A \cos B - \cos A \sin B
\end{align}

\begin{align}
\cos 2 \theta = \cos^2 \theta - \sin^2 \theta \\
\sin 2 \theta = 2 \sin \theta \cos \theta
\end{align}

\begin{align}
\cos^2 \theta = \frac{1 + \cos 2 \theta}{2} \\
\sin^2 \theta = \frac{1 - \cos 2 \theta}{2}
\end{align}

\begin{align}
\sin(\theta + 2 \pi) = \sin \theta \\
\cos(\theta + 2 \pi) = \cos \theta
\end{align}

\begin{align}
\sin(- \theta) = - \sin \theta \\
\cos(- \theta) = cos \theta
\end{align}

### Exponential functions

\begin{align}
a^x a^y &= a^{x+y} \\
\frac{a^x}{a^y} &= a^{x-y} \\
(a^x)^y = (a^y)^x &= a^{xy} \\
a^x b^x &= (ab)^x \\
\frac{a^x}{b^x} &= \left (\frac{a}{b} \right)^x
\end{align}

### Logarithmic functions

Definition:

\begin{align}
y &= \log_{a}x \\
x &= a^y
\end{align}

Natural Log:

\begin{equation}
\ln x = \log_{e} x
\end{equation}

Common log:

\begin{equation}
\log x = \log_{10} x
\end{equation}

\begin{align}
\ln(bx) &= \ln(b) + \ln(x) \\
\ln\left(\frac{b}{x}\right) &= \ln(b) - \ln(x) \\
\ln(x^r) &= r \ln(x) \\
\log_{a}x &= \frac{\ln(x)}{\ln(a)} \\
\end{align}
