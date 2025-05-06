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
