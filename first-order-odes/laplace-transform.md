# Laplace transform
3. Example: Hormone Level \
The concentration of a hormone in the blood varies due to sinusoidal production by the thyroid and continuous removal according to: \
$c' = A + Bcos([\frac{\pi t}{12}]) - kc$  \
The concentration is $c_0$ at 6 AM (t = 0). What is the average concentration between 6 PM and 6 AM the same day? \
To solve, rearrange and use the Laplace transform: \
$c' + kc = A + Bcos(\frac{\pi t}{12})$ \
$[sC(s) - c_0] + kC(s) = \mathcal{L}\{A + Bcos(\frac{\pi t}{12})} = \frac{A}{s} + \frac{Bs}{s^2 + (\frac{\pi}{12})^2}$  \
$C(s) = (\frac{1}{s+k})[c_0 + \frac{A}{s} + \frac{Bs}{s^2 + (\frac{\pi}{12})^2}]$ \
$C(s) = \frac{c_0}{s + k} + \frac{A}{s(s+k)} + \frac{Bs}{(s^2 + (\frac{\pi}{12})^2)(s+k)}$    \
Using partial fraction decomposition to simplify: \
$\frac{A}{s(s+k)} = \frac{1}{s(s+k)} = \frac{c_1}{s} + \frac{c_2}{s+k}$    \
$c_1 = \frac{1}{k} and c_2 = \frac{-1}{k}$   \
$\frac{Bs}{(s^2 + (\frac{\pi}{12})^2)(s+k)} = \frac{s}{(s^2 + (\frac{\pi}{12})^2)(s+k)} = \frac{c_1 s + c_2}{(s^2 + (\frac{\pi}{12})^2)} + \frac{c_3}{s+k}$    \
