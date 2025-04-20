# Example: Steady heat diffusion with internal source
$α(d^2T/dx^2) + qxsinx = 0$ , Initial conditions: $T(-1) = T(1) = 1$

- $α$ represents thermal diffusivity
 - $(q*x*sinx)$ represents the internal heat source

**Three different steps can be taken to solve this problem:**

**1. Find the homogenous solution of the given second-order ODE.**

$α*(Tn") = 0$
- Tn" represents the second derivative of Temperature with respect to x

    $α*λ^2 = 0$
- substituting $λ$ in for derivatives of Tn

  Solving this homogenous ODE gives us $λ1 = λ2 = 0$.
- So our homogenous solution yields $Tn = C1 + C2x$, where C1 and C2 are constants

**2. Find the particular solution of the second-order ODE using variation of parameters**
 
 We will use variation of parameters as the second-order ODE does not contain constant coefficients, nor is our r(x) expression contained in the table to solve for the particular solution (yp(x))

 From the given equations for our particular solution (yp(x)) and Wronskian value:
 - $yp(x) = -y1*(integral((y2*r)/W)dx) + y2*(integral((y1*r)/W)dx)$

 - $W = (y1*y2') - (y2*y1')$

 We can determine a particular for T by defining y1 and y2.
 - $y1 = 1$ -> $y1' = 0$
 - $y2 = x$ -> $y2' = 1$
 
 Solving for W -> $W = 1$.

 Using our W and r value for the problem, $r = (-q/α)xsinx$, we can solve for our particular solution for Temperature.

 Particular solution (Tp) = $-1*(integral(x*((-q/α)*x*sinx))dx) + x*(integral((-q/α)*x*sinx))dx
 - Reducing this function down to $(q/α)*(integral((x^2)*sinx)dx) - (q/α)*x*(integral((x*sinx)dx))$
 
 - From here, we can use integration by parts on both integral expressions, yielding the resulting expression: 
  $(q/α)*(((-x^2)cosx) + 2xsinx + 2cosx) - ((q/α)*x)*(-xcosx + sinx)$

Cancelling out terms, we get a particular solution for temperature as $Tp = (q/α)*(2cosx + xsinx)$

**3. Combine and apply initial conditions**
 - Combining our homogenous solution and particular solution, we obtain the expression for Temperature: $T = C1 + C2x + (q/α)*(2cosx + xsinx)$

 - As stated in the problem statement, our initial condtions are $T(-1) = T(1) = 1$.

 Plugging in these initial condtions, we obtain the equations:

- $1 = T(-1) = C1 - C2 + (q/α)*[2cos(-1)-sin(-1)] = C1 - C2 + (q/α)*[2cos(1)+sin(1)]$ (equation 1)
- $1 = T(1) = C1 + C2 + (q/α)*[2cos(1)+sin(1)]$ (equation 2)

C1 and C2 can be solved through a system of equations:

 First solving for C1 by plugging in C2 found from equation 1: 
  - $2 = 2C1 + 2*(q/α)*(2cos1 + sin1)$ -> $C1 = 1 - (q/α)*(2cos1 + sin1)$

Then solving for C2:
 - $C2 = 1 - C1 - (q/α)*(2cos1 + sin1) = 0$

A final equation can then be obtained for the Temperature of a steady heat diffusion with internal source by plugging in found expressions for C1 and C2: 

$T = 1 + (q/α)[2(cosx-cos1)+xsinx-sin1]$
