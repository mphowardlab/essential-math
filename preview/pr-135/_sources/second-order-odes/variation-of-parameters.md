# Example: Steady heat diffusion with internal source
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

 $ = \frac{q}{α}\int x^2sinxdx - \frac{q}{α}x\int xsinxdx$

Evaluate $\int x^2sinxdx$:

Let  
$u = x^2$, $\quad dv = \sin x \, dx$  
Then  
$du = 2x\,dx$, $\quad v = -\cos x$

Using integration by parts:

$$
\int x^2 \sin x \, dx = -x^2 \cos x + \int 2x \cos x \, dx
$$


Now evaluate $\int 2x \cos x \, dx$:

Let  
$u = 2x$, $\quad dv = \cos x \, dx$  
Then  
$du = 2\,dx$, $\quad v = \sin x$

$$
\int 2x \cos x \, dx = 2x \sin x - \int 2 \sin x \, dx = 2x \sin x + 2 \cos x
$$

So the first integral becomes:

$$
\int x^2 \sin x \, dx = -x^2 \cos x + 2x \sin x + 2 \cos x
$$

Substitute into the original expression:

$$
\frac{q}{α} \left[ -x^2 \cos x + 2x \sin x + 2 \cos x \right] - \frac{q}{α} x \int x \sin x \, dx
$$

Integration of $\int x \sin x \, dx$:

Let  
$u = x$, $\quad dv = \sin x \, dx$  
Then  
$du = dx$, $\quad v = -\cos x$

Then:

$$
\int x \sin x \, dx = -x \cos x + \int \cos x \, dx = -x \cos x + \sin x
$$

Substitute everything back:

$$
\frac{q}{α} \left[ -x^2 \cos x + 2x \sin x + 2 \cos x \right]
- \frac{q}{α} x \left[ -x \cos x + \sin x \right]
$$

Simplify:

$$
\frac{q}{α} \left[
  -x^2 \cos x + 2x \sin x + 2 \cos x
  + x^2 \cos x - x \sin x
\right]
$$

Result:

$$
\frac{q}{α} \left[
  2 \cos x + x \sin x
\right]
$$

**3. Combine**

$T = C_1 +C_2x + \frac{q}{α}(2cosx + xsinx)$

$1 = T(-1) = C_1 - C_2 + \frac{q}{α}[2cos(-1)-sin(-1)] = C_1 - C_2 + \frac{q}{α}[2cos1 + sin1]$

$1 = T(1) = C_1 + C_2 + \frac{q}{α}[2cos1 + sin1]$

--> $2 = 2C_1 + 2\frac{q}{α}(2cos1 + sin1)$ -> $C_1 = 1 - \frac{q}{α}(2cos1 + sin1)$

--> $C_2 = 1 - C_1 - \frac{q}{α}(2cos1 + sin1) = 0$

**Final Result:** 

$T = 1 + \frac{q}{α}[2(cosx-cos1)+xsinx-sin1]$