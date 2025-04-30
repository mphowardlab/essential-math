# Limits

1. How do functions behave when x gets "big"?

    If x is time, this represents waiting a long time to reach a "steady state".

    Ex: Population dynamics
    [insert image] 

    Proportional-integral control (e.g., of servo, value, etc.)
    [insert image]

2. Formal definition

    $$
    \lim_{x \to \infty} f(x) = L
    $$
    
    if for every $\sum_$ > 0, there exists a value M such that for all x, if x > M, $\left| f(x) - L \right| < \sum_$.

    i.e., f gets close to L when x is "big" :)

    Important limits at infinity:

    $$
    \lim_{x \to \pm\infty} k = k
    $$

    $$
    \lim_{x \to \pm\infty} \frac{1}{x} = 0
    $$

    $$
    \lim_{x \to -\infty} e^x = 0
    $$

    Other limit laws (sum, quotient, etc.) also hold at infinity!

3. Taking limits at infinity

    If function is already in a convenient form, use known limits

    $$
    \lim_{x \to \infty} 5 + \frac{1}{x} = \lim_{x \to \infty} 5 + \lim_{x \to \infty} \frac{1}{x} = 5 + 0 = 5
    $$

    For rational functions \frac{P(x)}{Q(x)}, divide by largest power of x in denominator

    $$
    \lim_{x \to -\infty} \frac{11x + 2}{2x^3-1} = \lim_{x \to -\infty} \frac{ \frac{11x}{x^3} + \frac{2}{x^3} }{ \frac{2x^3}{x^3} + \frac{1}{x^3}} = \frac{0 + 0}{2 - 0} = 0
    $$

    $$
    \lim_{x \to \infty} \frac{5x^2+8x-3}{3x^2+4} = \lim_{x \to \infty} \frac{ 5 + \frac{8}{x} - \frac{3}{x^2} }{ 3 + \frac{2}{x^2} } = \frac{5+0-0}{3 - 0} = \frac{5}{3}
    $$

    Not all functions have limits at infinity. Some "blow up"!

    $\lim_{x \to \infty} \frac{2x^2-3}{7x+4} = \lim_{x \to \infty} \frac{ 2x - \frac{3}{x} }{ 7 + \frac{4}{x} }$ = does not exist

    Shortcut: check coefficients of highest powers in numerator and denominator!
    






