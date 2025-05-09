# Functions

## 1. What is a function?

$A rule "f" that assigns a \textbf{unique} value f(x) to an input x$

```{image} ./_images/x_to_f(x).jpg
:alt: Unique Value
:width: 300px
```

\begin{align}
\text{x: independent variable} \hspace{2cm} \text{domain: all possible x}\\
\text{y: dependent variable} \hspace{2cm} \text{range: all possible y}
\end{align}

A function can be represented by:
- An equation:
$f(x) = x^2$

- A table:
```{image} ./_images/x_f(x)_table.jpg
:alt: x vs f(x) Table
:width: 150px
```

- A graph:
```{image} ./_images/quadratic_graph.jpg
:alt: x vs f(x) Graph
:width: 150px
```
- A description: "square x"

$\textbf{Not all curves are functions!} f must uniquely map x$

$x^2 + y^2 = 4$

$\textbf{Vertical line test:} a vertical line cannot intersect a function twice$

## 2. Common functions

### Linear functions
\begin{align}
y = mx + b \text{ ("lines")}
\end{align}
- m: slope
- b: intercept

### Power functions
\begin{align}
y = kx^a \text{ ("power law")}
\end{align}
- k: prefactor
- a: power

### Polynomials
\begin{align}
y = a_n x^n + a_{n-1}x^{n-1} + \ldots + a_1x + a_0
\end{align}
- n: degree

\begin{align}
n=1&: \text{linear}\\  
n=2&: \text{quadratic}\\  
n=3&: \text{cubic}
\end{align}

### Exponential
\begin{align}
y = a^x \text{ (a > 0, a \neq 1)}
\end{align}
- a: base

Special case: a = e (≈ 2.718...) = Euler's number

### Logarithmic
\begin{align}
y = \log_a x \text{ (a > 0, a \neq 1)}
\end{align}

Special cases:
\begin{align}
a = e &\Rightarrow \log_e = \ln = \text{natural logarithm}\\
a = 10 &\Rightarrow \log_{10} = \log = \text{common logarithm}
\end{align}

### Trigonometric
\begin{align}
\sin x \hspace{1cm} \csc x\\  
\cos x \hspace{1cm} \sec x\\  
\tan x \hspace{1cm} \cot x
\end{align}

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
