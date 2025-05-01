# Product, quotient, and chain rule

## Product Rule
If $f(x) = u(x)  v(x)$ then:

$$f' = uv' + vu'$$

"u-dv plus v-du"
"first-derivative-of-second plus second-derivative of-first"

### Example 1:
$f(x) = (x-3)(x-1)$

**Old way:** Expand The Polynomial 
<br>
$f(x) = x^2 - 4x + 3$  
$f'(x) = 2x - 4$

**New way:** 
$u = x-3$ and  $v = x-1$
<br>
$u' = 1$ and $v' = 1$
  
 $f'(x) =  \underbrace{(x-3)}_u\underbrace{(1)}_{v'}+ \underbrace{(x-1)}_v\underbrace{(1)}_{u'}= 2x - 4$

This example is a little silly, but the product rule is a life saver for functions that are hard to expand!

$f(x) = \underbrace{(x+1)}_u \cdot \underbrace{(2x^2+5)(5x^3-4)}_v$

$u = x+1$   and  $v = (2x^2+5)(5x^3-4)$
<br>
$u' = 1$ and $v' = ?$ Product Rule Again!

$f'(x) = (x+1)v' + (2x^2 +3)(5x^3-4)(1)$

$u = 2x^2+5$ and $v = 5x^3-4$
<br>
$u' = 4x$ and $v' = 15x^2$


$f'(x) = (x+1)[(2x^2+3)(15x^2) + (5x^3-4)(4x)] + (2x^2+5)(5x^3-4)$

*...simplify as much as you like*



### Example 2:
$f(x) = \frac{1}{x} e^x$

$u = \frac{1}{x}$ and $v = e^x$
<br>
$u' = -\frac{1}{x^2}$ and $v' = e^x$


$f'(x) = \frac{1}{x}e^x + e^x(-\frac{1}{x^2}) = e^x(\frac{1}{x} - \frac{1}{x^2})$

### Example 3:
$f(x) = (x^2+3)\ln(x)$

$u = x^2+3$ so $v = \ln(x)$ 
<br>
$u' = 2x$ so $v' = \frac{1}{x}$

$f'(x) = (x^2+3)(\frac{1}{x}) + \ln(x)(2x) = \frac{x^2+3}{x} + 2x\ln(x)$

