# Undetermined coefficients

## Nonhomogenous linear second-order ODEs

\begin{equation}
y''+p(x)y'+q(x)y=r(x)$$
\end{equation}

The general solution is 

\begin{equation
y=y_{n} + y_{p}
\end{equation}

- $y_{n}$: general solution of *homogeneous* ODE:
  
  \begin{equation}
  y'' + p(x)y' + q(x)y = 0
  \end{equation}
  
- $y_{p}$: particular solution of *nonhomogeneous* ODE:
  
  \begin{equation}
  y'' + p(x)y' + q(x)y = r(x)
  \end{equation}

The coefficients in $y_{n}$ are used to "correct" the initial/boundary values of $y_{p}$ to satisfy the IVP/BVP. But how do we find $y_{p}$?
* * *
### Method of undetermined coefficients
If the ODE has constant coefficients so that $y''+ay'+by=r(x)$, we can "guess" a solution as follows: 
| $r(x)$ | $y_p(x)$ |
| :---: | :---:  |
| $k e^{\gamma x}$| $k e^{\gamma x}$ |
| $k x^n (n=0,1,\ldots)$ | $k_n x^n + k_{n-1} x^{n-1} + \cdots + k_1 x + k_0$|
|$k e^{\alpha x} \cos{\omega x}$ | $e^{\alpha x}(k_1 \cos{\omega x} + k_2 \sin{\omega x})$ |
|$k e^{\alpha x} \sin{\omega x}$ | $e^{\alpha x}(k_1 \cos{\omega x} + k_2 \sin{\omega x})$ |

- If r has multiple terms, add guesses for each together. 
- If the guess for $y_{p}$ is a homogenous solution $y_{n}$, multiply by x unless this solution is a repeated root- then multiply by $x^2$!
***

 ```{example} Undetermined coefficients
Find the solution to 
\begin{equation}
y'' + y = 0.001 x^2
 \end{equation}
given $y(0) = 0$ and $y'(0) = 1.5$.
---
Step 1. Find $y_n$:
\begin{align}
y_{n}'' + y_{n} &= 0 \\
y_{n} &= c_{1} \cos(x)+c_{2} \sin(x)
\end{align}

Step 2. Guess $y_p$:

\begin{equation}
y_{p} = k_{2} x^2 + k_{1} x + k_{0}
\end{equation}
   
Step 3. Solve for coefficients in $y_{p}$:
 
\begin{align}
y_{p}' &= 2k_{2} x + k_{1} \\
y_{p}'' &=2k_{2} \\
y_{p}'' + y_{p} &= 2k_{2} + k_{2} x^2 + k_{1} x + k_0 = 0.001x^2 \\
k_{2} &= 0.001 \\
k_1 &= 0 \\
2k_{2} + k_{0} &= 0 \\
k_{0} &= -0.002
\end{align}
   
Step 4. Combine solutions and solve IVP: 
   
\begin{align}
y &= y_{n} + y_{p} = c_{1}  \cos(x) + c_{2}  \sin(x)  + 0.001x^2 - 0.002 \\
0 &= y(0) = c_{1} -0.002 \\
c_{1} &= 0.002 \\
y' &= -0.002 \sin(x) + c_{2} \cos(x) + 0.002x \\
1.5 &= y'(0) = c_{2} \\
y &= 0.002 \cos(x) + 1.5 \sin(x) + 0.001x^2 - 0.002
\end{align}
```
```{example} Undetermined Coefficients
Find the solution to

\begin{equation}
$y''+3y'+2.25y=-10e^-1.5x+cosx$
\end{equation}
---
Step 1. Find $y_n$:

\begin{align}
y{_n}''+3y{_n}'+2.25y_n =0 \\
lambda^2 +3\lambda+2.25 =(\lambda+1.5)^2 = 0 \\
\lambda=-1.5 -> y_n = (c_1 + c{_2}x)e^{-1.5x}
\end{align}

Step 2. Guess $y_p$:

\begin{equation}
y_p = k_1 x^2 e^{-1.5 x} + (k_2 \cos(x) +k_3 \sin(x))
\end{equation}

* note that $x^2$ indicates a double root, and the $\cos(x)$ can give cos or sin.
```
