# 4. Example: Steady heat diffusion with internal source
$α\frac{d^2T}{dx^2} + qxsinx = 0$ 

$T(-1) = T(1) = 1$

- $α$ represents thermal diffusivity
 - $qxsinx$ represents the heat source

**1. Homogenous Solution**

$αT_n" = 0$  ->  $αλ^2 = 0$  ->  $λ = 0$

so, $T_n = C_1 + C_2x$

**2. Particular solution (variation of parameters)**
 
 $y_1 = 1$ &nbsp; $y_2 = x$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $W = 1*1-0*x = 1$
 
 $y_1' = 0$ &nbsp; $y_2' = 1$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $r = -\frac{qxsinx}{α}$

 $T_p = -1\int x(\frac{-qxsinx}{α})dx - x\int \frac{-qxsinx}{α}dx$

 $ = \frac{q}{α}\int x^2sinxdx$

 From the given equations for our particular solution (yp(x)) and Wronskian value:
 - $yp(x) = -y1*(integral((y2*r)/W)dx) + y2*(integral((y1*r)/W)dx)$

 - $W = (y1*y2') - (y2*y1')$

 We can determine a particular for T by defining y1 and y2.
 - $y1 = 1$ -> $y1' = 0$
 - $y2 = x$ -> $y2' = 1$
 
 Solving for W -> $W = 1$.

 Using our W and r value for the problem, $r = \frac{q}{α}xsinx$, we can solve for our particular solution for Temperature.

 Particular solution (Tp) = $-1*(integral(x*(-\frac{q}{α}*x*sinx))dx) + x*(integral(-\frac{q}{α}*x*sinx))dx$
 - Reducing this function down to $\frac{q}{α}*(integral((x^2)*sinx)dx) - \frac{q}{α}*x*(integral((x*sinx)dx))$
 
 - From here, we can use integration by parts on both integral expressions, yielding the resulting expression: 
  $\frac{q}{α}*(((-x^2)cosx) + 2xsinx + 2cosx) - (\frac{q}{α}*x)*(-xcosx + sinx)$

Cancelling out terms, we get a particular solution for temperature as $Tp = \frac{q}{α}*(2cosx + xsinx)$

**3. Combine and apply initial conditions**
 - Combining our homogenous solution and particular solution, we obtain the expression for Temperature: $T = C1 + C2x + \frac{q}{α}*(2cosx + xsinx)$

 - As stated in the problem statement, our initial condtions are $T(-1) = T(1) = 1$.

 Plugging in these initial condtions, we obtain the equations:

- $1 = T(-1) = C1 - C2 + \frac{q}{α}*[2cos(-1)-sin(-1)] = C1 - C2 + \frac{q}{α}*[2cos(1)+sin(1)]$ (equation 1)
- $1 = T(1) = C1 + C2 + \frac{q}{α}*[2cos(1)+sin(1)]$ (equation 2)

C1 and C2 can be solved through a system of equations:

 First solving for C1 by plugging in C2 found from equation 1: 
  - $2 = 2C1 + 2*\frac{q}{α}*(2cos1 + sin1)$ -> $C1 = 1 - \frac{q}{α}*(2cos1 + sin1)$

Then solving for C2:
 - $C2 = 1 - C1 - \frac{q}{α}*(2cos1 + sin1) = 0$

A final equation can then be obtained for the Temperature of a steady heat diffusion with internal source by plugging in found expressions for C1 and C2: 

$T = 1 + \frac{q}{α}[2(cosx-cos1)+xsinx-sin1]$
