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

## Trigonometric functions

The given unit circle has a triangle drawn within which represents how
trigonometric functions are related to lengths and heights of the sides of right
triangles.

```{image} ./_images/MAtappunitcircle66.png
:alt: Unit Circle
:width: 300px
:align: center
```

The circle has a radius and is centered at (0,0). A point on the circle is
defined by angle $\theta$ measured counterclockwise from the positive *x*-axis.
Angles can be measured in degrees or radians:

\begin{equation}
\theta({\rm rad.}) = \theta({\rm deg.}) \left( \frac{\pi}{180^{\circ}} \right)
\end{equation}

The trigonometric functions describe how the coordinates of a point on the unit
circle relate to the angle $\theta$:

\begin{align}
\sin(\theta)& = \frac{y}{r}&
\cos(\theta)& = \frac{x}{r}&
\tan(\theta)& = \frac{y}{x}\\
\csc(\theta)& = \frac{r}{y}&
\sec(\theta)& = \frac{r}{x}&
\cot(\theta)& = \frac{x}{y}\\
\end{align}

Each quadrant of the unit circle corresponds to a positive trigonometric
function: **A**ll, **S**ine, **T**angent, and **C**osine.

```{tip}
A mnemonic to remember this order is "All Students Take Calculus".
```

### Special angles

::::{grid}

:::{grid-item-card} 30-60-90 triangle

A right triangle with $30^\circ$ ($\pi/6$) and $60^\circ$ ($\pi/3$) angles
has the following side lengths:

```{image} ./_images/306090triangle.png
:alt: 30 60 90 triangle
:width: 300px
:align: center
```

:::

:::{grid-item-card} 45-45-90 triangle

A right triangle with $45^\circ$ ($\pi/4$) angles has the following side lengths:

```{image} ./_images/454590triangle.png
:alt: 45 45 90 triangle
:width: 300px
:align: center
```

:::
::::

and so

| $\theta$  |         | $\sin \theta$  | $\cos \theta$ |
|------------|---------|----------------|---------------|
| $30^\circ$ | $\pi/6$ | $1/2$          | $\sqrt{3}/2$  |
| $45^\circ$ | $\pi/4$ | $1/\sqrt{2}$   | $1/\sqrt{2}$  |
| $60^\circ$ | $\pi/3$ | $\sqrt{3}/2$   | $1/2$         |

What about angles greater than $90^\circ$? Take the angle of $\theta$ relative
to the *x*-axis, then apply the sign based on which quadrant the angle falls in.

```{image} ./_images/supplementary_angles.png
:width: 300px
:align: center
```

For example, if $\theta = 135^\circ = 3\pi/4$, then the angle relative to the
*x*-axis is $\theta' = 45^\circ = \pi/4$. Hence,

\begin{align}
\sin \theta' &= \frac{1}{\sqrt{2}} & \cos \theta' &= \frac{1}{\sqrt{2}} \\
\sin \theta &= \frac{1}{\sqrt{2}} & \cos \theta &= -\frac{1}{\sqrt{2}}
\end{align}

### Physical meaning

In addition to their geometric significance, trigonometric functions typically
represent physical waves.

```{image} ./_images/Triggraph.png
:alt: Trigonometric Function
:width: 300px
:align: center
```

The properties of the wave can be encoded by manipulating the function.

\begin{equation}
y = A\sin\left[ \frac{2\pi}{L}(x + x_0) \right] + y_0
\end{equation}

where *A* is the amplitude of the wave, *L* is the period of the wave, $x_0$ is
a horizontal (phase) shift, and $y_0$ is a vertical shift.

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
