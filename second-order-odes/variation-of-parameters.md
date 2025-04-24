# Variation of Parameters
## Skill Builder

### Problem (d)

$y'' + y = \csc(y)$, with initial conditions $y\left(\frac{\pi}{2}\right) = y'\left(\frac{\pi}{2}\right) = 0$

````{dropdown} Solution
:open: false

#### Homogeneous:

```{math}
\begin{aligned}
y' + y &= 0 \\
\lambda^2 + 1 &= 0 \Rightarrow \lambda_{1,2} = \pm i \\
y_n &= c_1 \underbrace{\cos x}_{\substack{\uparrow \\ y_1}} + c_2 \underbrace{\sin x}_{\substack{\uparrow \\ y_2}}
\end{aligned}
```

#### Particular:

```{math}
y_1 = \cos(x), \quad y_2 = \sin(x)
```

```{math}
y_1' &= -\sin(x) \\
y_2' &= \cos(x)
```

```{math}
\begin{aligned}
W &= y_1 y_2' - y_2 y_1' \\
  &= \cos^2(x) + \sin^2(x) \\
  &= 1
\end{aligned}
```

```{math}
\begin{aligned}
y_p &= -y_1 \int \frac{y_2 r}{W} \, dx + y_2 \int \frac{y_1 r}{W} \, dx \\
    &= -\cos(x) \int \sin(x)\csc(x) \, dx + \sin(x)\int \cos(x)\csc(x) \, dx \\
    &= -\cos(x) \int dx + \sin(x) \int \frac{\cos(x)}{\sin(x)} \, dx \\
    &= -x \cos(x) + \sin(x) \ln\left| x \right|
\end{aligned}
```