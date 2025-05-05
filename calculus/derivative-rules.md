# Product, quotient, and chain rule
```` 2. Quotient Rule 

If the quotient rule you wish to know, it's "low-d-high less high-d-low" then draw the line and down below, denominator squared will go.

\begin{equation}
If $f(x) = \frac{u(x)}{v(x)}$ and $v(x) \ne 0$, then
$f'(x) = \frac{v u' - u v'}{v^2}$
\end{equation}

````{A ( continued) example:}

\begin{align} 
$f(x) = \frac{x-1}{x}$
Old Way: $f(x) = 1 - \frac{1}{x} \Rightarrow f' = 0 + \frac{1}{x^2} = \frac{1}{x^2}$
New Way: $f' = \frac{ x(1) - (x-1)(1)}{x^2} = \frac{1}{x^2}$ =\begin{cases} 
u = x^2 -1 & v = x \\ 
u' = 1 & v' = 1 
\end{cases} 

This was obviously harder than the old way, but there are other cases where it is helpful to do the quotient rule!
````

````Example 1:
$f(x) = \frac{x^2 -1}{x^4 + 2}$ =\begin{cases} 
u = x^2 -1 & v = x^4 +2 \\
u' = 2x & v' 4x^3
\end{cases}
$f'(x) = \frac{ (X^4 + 2) \times (2x) - (x^2 - 1) \times (4x^3)}{(x^4 +2)^2} = \frac{2x^5 + 4x^2 - 4x^5 +4x^3}{x^8 + 2x^4 + 4}$
````

````Example 2: 
$f(x) = \frac{\exp(x)}{1 + x}$ =\begin{cases} 
u = \exp(x) & v = 1 + x \\ 
u' = \exp(x) & v' = 1 
\end{cases}
$f'(x) = \frac{(1 + x) \times \exp(x) - \exp(x) \times 1}{(1 + x)^2} = \frac{x \times \exp(x)}{(1 + x)^2}$
````
````Example 3:
$f(x) = \frac{(x - 1) \times (x^2 - 2x)}{x^4}$ =\begin{cases}
u = $(x -1) \times (x^2 -2x)$ \\
u' = $(x - 1) \times (2x-2)$
\end{cases}

$f'(x) = \frac{x^4 \times (x - 1) \times (2x - 2) - (x - 1) \times (x^2 -2x) \times (4x^3)}{x^8}$ 

v.s 

$f(x) = \frac{1}{x^4} \ times x^3 -3x^2 +2x = x^-1 -3x^-2 +2x^-3$
$f'(x) = -\frac{1}{x^2} + \frac{6}{x^3} - \frac{6}{x^4}$
Fastest way depends on the problem! 
````
 