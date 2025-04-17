# Laplace transform
3. Example: Hormone Level \
The concentration of a hormone in the blood varies due to sinusoidal production by the thyroid and continuous removal according to: \
$c' = A + Bcos([\frac{\pi t}{12}]) - kc$  \
The concentration is $c_0$ at 6 AM (t = 0). What is the average concentration between 6 PM and 6 AM the same day? \
To solve, rearrange and use the Laplace transform: \
$c' + kc = A + Bcos([\frac{\pi t}{12}])$ \
$ [sC(s) - c_0] + kC(s) = \mathcal{L}\{A + Bcos([\frac{\pi t}{12}])} = \frac{A}{s} + \frac{Bs}{s^2 + (\frac{pi}{12})^2}$  \
$ C(s) = (\frac{1}{s+k})[c_0 + \frac{A}{s} + \frac{Bs}{s^2 + (\frac{pi}{12})^2}]  \