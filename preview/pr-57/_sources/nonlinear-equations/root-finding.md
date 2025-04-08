# Root finding methods
### Fixed Point Iteration
 If we want to numerically solve f(x) = 0, rearrange f(x) to get g(x) = x. Then choose an inital guess $x_(o)$ and iterate: 
    $x{sub}'n+1' = g(x{sub}'n')$ \
 until $x{sub}'n+1' = x{sub}'n'$ to the desired precision (error tolerance).\
 
 Example: $f(x) = e^(-x^2) - x = 0$
            $e^(-x^2) = x$ 
            where $g(x) = e^(-x^2)$ \
    Guess $x{sub}'o' = 0$, then set up a table: 

    |n | $x{sub}'n'$ | $g(x{sub}'n'$) |
    | --- | --- | --- |
    |0 | 0 | 1.0 |
    |1 | 1.0 | 0.368 |
    |2 | 0.368 | 0.873 | 
    |. | | |
    |. | | | 
    |5 | 0.6530 | 0.6528 | 

    for each iteration, $g(x{sub}'n')$ is used as the new $x{sub}'n'$ \ 
    at $n = 5, 0.6530 \approx 0.6528% \

Example: $f(x) = e^(x) - x^(3) = 0$
        $e^(x) = x^(3)$ 
        $x = ln(x^(3)) = 3ln(x)$ 
        where $g(x) = 3ln(x)$ \

Notes for this method:
    * This may fail spectacularly! Convergence is only guaranteed when $|g'(x)| \le k < 1$ for all x in an interval around the solution.
    * Can try to help by slowly "mixing" solutions:
        $x{sub}'n+1'{sup}'*' = g(x{sub}'n')$ 
        $x{sub}'n+1' = \alpha x{sub}'n+1'{sup}'*' + (1-\alpha)x{sub}'n'$ \


### Bisection Search 
Intermediate Value Theorem: If F is continuous on $a \le x \le b$, then it takes on all values from f(a) to f(b). 
    If f(a) > 0 and f(b) < 0 (or vice versa), the f(x) = 0 somewhere in between! \ 
    insert picture here
Procedure for using Bisection Search: 
    1. Chose $a{sub}'o'$ and $b{sub}'o'$ so f(a) and f(b) have opposite signs
    2. Evaluate $f(x{sub}'n')$ at the midpoint: $x{sub}'n' = \frac{a{sub}'n' + b{sub}'n'}{2}$
    3. If $f(x{sub}'n') \approx 0$, a solution is found (within desired precision) 
       Otherwise, if $f(a{sub}'n')$ and $f(c{sub}'n')$ have the same sign: $a{sub}'n+1' = x{sub}'n'$. Else, $b{sub}'n+1' = x{sub}'n'$
    4. Repeat from step 2 \

Example: $f(x) = e^(-x^(2)) - x$  use $a{sub}'o' = 0$, $b{sub}'o' = 1$ at first 

    |n | $a{sub}'n'$ | $b{sub}'n'$ | $x{sub}'n'$ | $f(a{sub}'n')$ | $f(b{sub}'n')$ | $f(x{sub}'n')$ |
    | --- | --- | --- | --- | --- | --- | --- |
    |0 | 0 | 1 | 0.5 | 1.0 | -0.632 | 0.279 | 
    |1 | 0.5 | 1 | 0.75 | 0.275 | -0.632 | -0.180 | 
    |2 | 0.5 | 0.75 | 0.625 | 0.275 | -0.1180 | 0.052 |
    |. | | | | | | | 
    |. | | | | | | |
    |9 | 0.625 | 0.654 | 0.653 | 0.001 | -0.002 | -0.0007 | 

Continue until $f(x{sub}'n') \approx 0$, and $x{sub}'n'$ is the answer.


