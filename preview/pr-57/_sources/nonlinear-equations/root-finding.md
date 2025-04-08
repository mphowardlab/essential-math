# Root finding methods
### Fixed Point Iteration
 If we want to numerically solve f(x) = 0, rearrange f(x) to get g(x) = x. Then, choose an inital guess $x_o$ and iterate:<br>
    $x_{n+1} = g(x_n)$ <br>
 until $x_{n+1} = x_n$ to the desired precision (error tolerance).<br>
 
 Example: $f(x) = e^{-x^2} - x = 0$ <br>
             $e^{-x^2} = x$ <br>
             where $g(x) = e^{-x^2}$ <br>  
    Guess $x_o = 0$, then set up a table: <br>

    |  n |  $x_n$ | $g(x_n)$ | 
    |:---|:------:|---------:|
    |  0 |   0    |    1.0   | 
    |  1 | 1.0    |   0.368  | 
    |  2 | 0.368  |  0.873   |
    |  0 |   0    |     0    | 
    |  0 |   0    |     0    |
    |  5 | 0.6530 |  0.6528  | 


    for each iteration, $g(x_n)$ is used as the new $x_n$ <br>
    at $n = 5, 0.6530 \approx 0.6528$ <br>

Example: $f(x) = e^x - x^3 = 0$ <br>
        $e^x = x^3$ <br>
        $x = ln(x^3) = 3ln(x)$ <br>
        where $g(x) = 3ln(x)$ <br>

Notes for this method:<br>
    This may fail spectacularly! Convergence is only guaranteed when $|g'(x)| \le k < 1$ for all x in an interval around the solution. <br>
    Can try to help by slowly "mixing" solutions:<br>
        $x_{n+1}^* = g(x_n)$ <br>
        $x_{n+1} = \alpha x_{n+1}^* + (1-\alpha)x_n$ <br>
   


### Bisection Search 
Intermediate Value Theorem: If f is continuous on $a \le x \le b$, then it takes on all values from f(a) to f(b). <br>
    If f(a) > 0 and f(b) < 0 (or vice versa), then f(x) = 0 somewhere in between! <br> 
    insert picture here <br>

Procedure for using Bisection Search: <br>
    1. Chose $a_o$ and $b_o$ so f(a) and f(b) have opposite signs <br>
    2. Evaluate $f(x_n)$ at the midpoint: $x_n = \frac{a_n + b_n}{2}$<br>
    3. If $f(x_n) \approx 0$, a solution is found (within desired precision) <br>
       Otherwise, if $f(a_n)$ and $f(c_n)$ have the same sign: $a_{n+1} = x_n$. Else, $b_{n+1} = x_n$ <br>
    4. Repeat from step 2 <br>

Example: $f(x) = e^{-x^2} - x$  use $a_o = 0$, $b_o = 1$ <br>

    |n|$a_n$|$b_n$|$x_n$|$f(a_n)$|$f(b_n)$|$f(x_n)$| 
    |:---|:---:|:---:|:---:|:---:|:---:|---:|
    |0|0|1|0.5|1.0|-0.632|0.279| 
    |1|0.5|1|0.75|0.275|-0.632|-0.180| 
    |2|0.5|0.75|0.625|0.275|-0.1180|0.052| 
    |0|0|0|0|0|0|0|
    |0|0|0|0|0|0|0|
    |9|0.625|0.654|0.653|0.001|-0.002|-0.0007| 

Continue until $f(x_n) \approx 0$


