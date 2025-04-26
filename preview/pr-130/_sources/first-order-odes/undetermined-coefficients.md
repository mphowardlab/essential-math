# Undetermined coefficients

## Nonhomogeneous linear second-order ODEs

\begin{equation}
y'' + p(x)y'+q(x)y = r(x)
\end{equation}

The general solution is:

\begin{equation}
y = y_{n} + y_{p}
\end{equation}

$y_n$: general solution of _homogenous_ ODE $y''+p(x)y'+q(x)y=0$

$y_p$: particular solution of _nonhomogeous_ ODE $y''+p(x)y'+q(x)y=r(x)$

The coefficients in $y_n$ are used to "correct" the initial/boundary values of $y_p$ to satisfy the IVP/BVP. But how do we find $y_p$?
* * *
## Method of undetermined coefficients
If the ODE has constant coefficients so that $y''+ay'+by=r(x)$, we can "guess" a solution as follows: 
| $r(x)$ | $y_p(x)$ |
| :---: | :---:  |
| $k e^{\gamma(x)}$| $k e^{\gamma(x)}$ |
| $k x^n (n=0,1,\ldots)$ | $k_n x^n + k_{n-1} x^{n-1} + \cdots + k_1 x + k_0$|
|$k e^{\alpha x} \cos{\omega x}$ | $e^{\alpha x}(k_1 \cos{\omega x} + k_2 \sin{\omega x})$ |
|$k e^{\alpha x} \sin{\omega x}$ | $e^{\alpha x}(k_1 \cos{\omega x} + k_2 \sin{\omega x})$ |

- If *r* has multiple terms, add guesses for each together.
* If the guess for $y_p$ is a homogenous solution $y_n$, multiply by x unless this solution is a repeated root- then mutliply by $x^2$!
***
Ex. $y''+y=0.001x^2$ $y(0)=0$ $y'(0)=1.5$
1) Find $y_n$: $y_n''+y_n = 0$ -> $y_n = c_1cosx+c_2sinx$
2) Guess $y_p$:$y_p=k_2x^2+k_1x+k_0$
3) Solve for coefficients in $y_p$: $y_p' = 2k_2 x + k_1 -> y_p''+ 2k_2 -> y_p'' + y_p' = 2k_2 + k_2 x^2 + k_1 x + k_0 = 0.001x^2 -> k_2 = 0.001, k_1 = 0 -> 2k_2 + k_0 -> k_0 = -0.002$
4) Combine solutions and solve IVP: $y=y_n +y_p = c_1 \cos(x) + c_2 \sin(x) +0.001x^2 - 0.002 -> 0 = y(0) = c_1 -0.002 _> c_1 = 0.002 ->$

$y' = -0.002\sin(x) +c_2 \cos(x) +0.002x -> 1.5 = y'(0) = c_2 -> y=0.002\cos(x) + 1.5sin(x) +0.001x^2 -0.002$
***
Ex. $y''+3y'+2.25y=-10e^-1.5x+cosx$
1) Find $y_n$: $y{_n}''+3y{_n}'+2.25y_n =0 -> \lambda^2 +3\lambda+2.25 =(\lambda+1.5)^2 = 0 -> \lambda=-1.5 -> y_n = (c_1 + c{_2}x)e^{-1.5x}$
2) Guess $y_p$: $y_p = k_1 x^2 e^{-1.5 x} + (k_2 \cos(x) +k_3 \sin(x))$

* note that $x^2$ indicates a double root, and the $\cos(x)$ can give cos or sin. 
