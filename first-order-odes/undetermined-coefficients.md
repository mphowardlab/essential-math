# Undetermined coefficients

### Nonhomogenous linear second-order ODEs

$$y''+p(x)y'+q(x)y=r(x)$$]

The general solution is $y=y_n + y_p$
$y_n: general solution of \underline{homogenous} ODE y''+p(x)y'+q(x)y=0$
$y_p: particular solution of \underline{nonhomogeous}$

The coefficients in y_n are used to "correct" the initial/boundary values of y_p to satisfy the IVP/BVP.. But how do we find y_p?
* * *
### Method of undetermined coefficients
If the ODE has constant coefficients so $y''+ay'+by=r(x)$, we can "guess" a solution as follows: 
| r(x) | y_p(x) |
| :--- | :---   |
| $ke^\gamma\times x $| $ke^\gamma\times x$ |
continue table after checking formatting
* If r has multiple terms, add guesses for each together. 
* If the guess for y_p is a homogenous solution y_n, multiply by x unless this solution is a repeated root- then mutliply by x^2!
Ex. $y''+y=0.001x^2$ $y(0)=0$ $y'(0)=1.5$
1) Find y_n: $y_n''+y_n = 0$ -> $y_n = c_1cosx+c_2sinx
2) Guess y_p: $y_p=k_2x^2+k_1x+k_0$
3) Solve for coefficients in y_p: ADD IN MATHS
4) Combine solutions and solve IVP: MORE MATH
***
Ex. $y''+3y'+2.25y=-10e^-1.5x+cosx$
1) Find y_n: MATH
2) Guess y_p: MATH