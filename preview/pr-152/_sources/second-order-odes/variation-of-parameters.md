# Variation of Parameters
## Skill Builder

### Problem (d)

$y'' + y = \csc(y)$, with initial conditions $y\left(\frac{\pi}{2}\right) = y'\left(\frac{\pi}{2}\right) = 0$

````{dropdown} Solution

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
\begin{aligned}
y_1 &= \cos(x), \quad y_2 = \sin(x) \\
y_1' &= -\sin(x), \quad y_2'= \cos(x)
\end{aligned}
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

#### Boundary Conditions:

```{math}
\begin{aligned}
y = c_1 \cos(x) + c_2 \sin(x) + \sin(x) \ln\left| \sin(x) \right| - x \cos(x) \\
y' = -c_1 \sin(x) + c_2 \cos(x) + \cos(x) (1 + \ln\left| \sin(x) \right|) + x \sin(x) - \cos(x)
\end{aligned}
```
```{math}
\begin{aligned}
0 = y \frac{\pi}{2} = c_2 \\
0 = y' \frac{\pi}{2} = -c_1 + \frac{\pi}{2} \to c_1 = \frac{\pi}{2}
\end{aligned}
```

```{math}
\boxed{y = \left( \frac{\pi}{2} \right) \cos x + \sin x \ln |\sin x| - x \cos x}
```