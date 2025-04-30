# Variation of Parameters
## Skill builder problems

(d)

$y'' + y = \csc(y)$, with initial conditions $y\left(\frac{\pi}{2}\right) = y'\left(\frac{\pi}{2}\right) = 0$

```{solution}

#### Homogeneous:


\begin{align}
y' + y &= 0 \\
\lambda^2 + 1 &= 0 \Rightarrow \lambda_{1,2} = \pm i \\
y_n &= c_1 \underbrace{\cos x}_{\substack{\uparrow \\ y_1}} + c_2 \underbrace{\sin x}_{\substack{\uparrow \\ y_2}}
\end{align}


#### Particular:


\begin{align}
y_1 &= \cos(x), \quad y_2 = \sin(x) \\
y_1' &= -\sin(x), \quad y_2'= \cos(x)
\end{align}



\begin{align}
W &= y_1 y_2' - y_2 y_1' \\
  &= \cos^2(x) + \sin^2(x) \\
  &= 1
\end{align}



\begin{align}
y_p &= -y_1 \int \frac{y_2 r}{W} \, dx + y_2 \int \frac{y_1 r}{W} \, dx \\
    &= -\cos(x) \int \sin(x)\csc(x) \, dx + \sin(x)\int \cos(x)\csc(x) \, dx \\
    &= -\cos(x) \int dx + \sin(x) \int \frac{\cos(x)}{\sin(x)} \, dx \\
    &= -x \cos(x) + \sin(x) \ln\left| x \right|
\end{align}


#### Boundary Conditions:


\begin{align}
y &= c_1 \cos(x) + c_2 \sin(x) + \sin(x) \ln\left| \sin(x) \right| - x \cos(x) \\
y' &= -c_1 \sin(x) + c_2 \cos(x) + \cos(x) (1 + \ln\left| \sin(x) \right|) + x \sin(x) - \cos(x)
\end{align}


\begin{align}
0 &= y \frac{\pi}{2} = c_2 \\
0 &= y' \frac{\pi}{2} = -c_1 + \frac{\pi}{2} \to c_1 = \frac{\pi}{2}
\end{align}



\boxed{y = \left( \frac{\pi}{2} \right) \cos x + \sin x \ln |\sin x| - x \cos x}
```