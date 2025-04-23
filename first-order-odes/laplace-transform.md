# Laplace transform

The Laplace transform is used in signals/controls.
It is also a way to solve **differential** equations using **algebra**. 

It is defined as: 

\begin{equation}
F(s) = L[f(t)] = \int_0^\infty e^-st \f(t)
\end{equation}
$$
F(s) = \mathcal{L}[f(t)] = \int_0^\infty e^{-st} f(t)\,dt
$$

The inverse Laplace transform of **F(s)** is **f(t)**!

Many Laplace transforms are already known, but can be computed using integration by parts.

````{example}

\begin{equation}
\f(t) = t \to L[f] = \int_0^\infty \e^-st \f(t) = -\frac{te^-st}{s}| _{0}{\infty} - \int_0^\infty \frac{e^-st}{s} \dt \\
\u = t   dv = e^-st\dt\\
\du = dt v = \fract{-1}{s} \e^-st\\  
            
\fract{-e^-st}{s^2}| _{0}^{\infty} = [\0 - (\frac{-1}{s^2})dt]\\ 
= \frac{1}{s^2}
\end{equation}

\begin{equation}
\f(t) = y'(t) \to L[y'] = \int_0^\infty \e^-st \y' \left\(t) 
\= -\frac{te^-st}{s}| _{0}{\infty} - \int_0^\infty \ y \(\frac{e^-st}{s})dt \
\u = e^-st  dv = y' dt \                      
\ du = -se^-st   v = y \                       
= [ 0 - y ( 0 )] + s \int_0^\infty \e^-st y \dt\
= s L [ f ] - y( 0 )
= s Y( s ) - y( 0 )
\end{equation}

''''
Reminder from integration by parts

\begin{equation}
\F( s ) = L [ f( t )] = \int_0^\infty \e^-st \f( t ) dt\
\end{equation}

:::{table} Laplace Transforms
| **Function**                | **Laplace Transform**                 |
|-----------------------------|---------------------------------------|
| \( f(t) = 1 \)              | \( F(s) = \frac{1}{s} \)              |
| \( f(t) = t \)              | \( F(s) = \frac{1}{s^2} \)           |
| \( f(t) = e^{at} \)         | \( F(s) = \frac{1}{s - a} \)         |
| \( f(t) = \sin(at) \)       | \( F(s) = \frac{a}{s^2 + a^2} \)     |
| \( f(t) = \cos(at) \)       | \( F(s) = \frac{s}{s^2 + a^2} \)     |
| \( f(t) = t^n \)            | \( F(s) = \frac{n!}{s^{n+1}} \)      |
| \( f(t) = e^{at} \sin(bt) \) | \( F(s) = \frac{b}{(s - a)^2 + b^2} \) |
| \( f(t) = e^{at} \cos(bt) \) | \( F(s) = \frac{s - a}{(s - a)^2 + b^2} \) 

:::

The Laplace transform is a linear operator, so

\begin{equation}
\L = [kf] = kL[f] = kf\\
\L = [f + g] = L[f] + L[g] = F + G
\end{equation}

***

## 2. Solving first-order ODEs

The nonhomogeneous, first-order ODE with constant coefficients is nice to solve with Laplace transoforms

\begin{equation}
\y' + by = r(t)\\
\end{equation} 

y' and b must be constant coefficients
r(t) must be nonhomogeneous (if r \ne 0)

Apply Laplace transform to both sides of the equation

\begin{align}
\L[y' + by] = L[r(t)]
\L[y'] + bL[y] = L[r(t)]\\
\sY(s) - y(0) + bY(s)= R(s)\\
\(s + b)Y(s) = y(o) + R(s)\\
\y(s) = \frac{y(o) + R(s)}{s+b}\\
\end{align}

If we can invert y(t) = L^-1 [y(s)] usijng tables, we have a solution!
lll