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
![fishy](./images/MAtappunitcircle.png)
 Each quadrant of the unit circle corresponds to a positive trigonometric function as represented by "A(all)+", "T(tangent)+", "S(sine)+", "C(cosine)+".

The given unit circle has a triangle drawn within which represents how trigonometric functions are related to lengths and heights of the sides of right traingles. 
The circle has a radius and is centered at (0,0). A point on the circle is defined by angle \theta measured counterclockwise from the positive x-axis.
The trigonometric functions describe how the coordinates of a point on the unit circle relate to the angle \theta.
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

![fishy](./images/306090triangle.png)

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

![fishy](./images/454590triangle.png)

At $ \theta = 45^{\circ} $
\begin{align}
\sin(\theta)& = \frac{1}{\sqrt{2}}&
\cos(\theta)& = \frac{1}{\sqrt{2}}
\end{align}

What about $ \theta \ge 90^{\circ}(\frac{\pi}{2}) $?
Take the angle of $\theta$ relative to the x-axis, then apply the sign based on which quadrant the angle falls in.

```{example} <$\theta = 185^{\circ}$>
<![fishy](./images/Untitled-4.jpg)

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
![fishy](./images/1c668276-2784-41eb-b578-39232daf8748.png)

\begin{align}
y& = A\sin[(\frac{2\pi}{L})(x + x_{o})] + y_{o}
\end{align}
Where: A = amplitude, $\frac{2\pi}{L}$ = period, $x_{0}$ = horizontal shift, and $y_{o}$ = vertical shift
