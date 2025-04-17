# Laplace transform
3. Example: Hormone Level \
The concentration of a hormone in the blood varies due to sinusoidal production by the thyroid and continuous removal according to: \
$c' = A + Bcos([\frac{\pi t}{12}]) - kc$  \
The concentration is $c_0$ at 6 AM (t = 0). What is the average concentration between 6 PM and 6 AM the same day? \
To solve, rearrange and use the Laplace transform: \
$c' + kc = A + Bcos(\frac{\pi t}{12})$ \
$[sC(s) - c_0] + kC(s) = \mathcal{L}\left\{A + B\cos\left(\frac{\pi t}{12}\right)\right\} = \frac{A}{s} + \frac{Bs}{s^2 + \left(\frac{\pi}{12}\right)^2}$ \
$C(s) = (\frac{1}{s+k})[c_0 + \frac{A}{s} + \frac{Bs}{s^2 + (\frac{\pi}{12})^2}]$ \
$C(s) = \frac{c_0}{s + k} + \frac{A}{s(s+k)} + \frac{Bs}{(s^2 + (\frac{\pi}{12})^2)(s+k)}$    \
Using partial fraction decomposition to simplify: \
$\frac{A}{s(s+k)} = \frac{1}{s(s+k)} = \frac{c_1}{s} + \frac{c_2}{s+k}$    \
$c_1 = \frac{1}{k}    \
c_2 = \frac{-1}{k}$   \
Same process for the next term:   \
$\frac{Bs}{(s^2 + (\frac{\pi}{12})^2)(s+k)} = \frac{s}{(s^2 + (\frac{\pi}{12})^2)(s+k)} = \frac{c_1 s + c_2}{(s^2 + (\frac{\pi}{12})^2)} + \frac{c_3}{s+k}$    \
$s = (c_1 s + c_2)(s + k) + c_3[s_2 + (\frac{\pi}{12})^2] = c_1 s^2 + (c_1 k + c_2)s + c_2 k + c_3 s^2 + c_3 (\frac{\pi}{12})^2 = (c_1 + c_3)s^2 + (c_1 k + c_2)s + c_2 k + c_3 (\frac{\pi}{12})^2$     \
$c_1 + c_3 = 0$  \
$c_1 k + c_2 = 1$  \
$c_2 k + c_3 (\frac{\pi}{12})^2$   \
$c_3 = \frac{-k}{k^2 + (\frac{\pi}{12})^2}$    \
$c_1 = -c_3 = \frac{k}{k^2 + (\frac{\pi}{12})^2} $  \
$c_2 = \frac{-(\frac{\pi}{12})^2}{k} c_3 = \frac{(\frac{\pi}{12})^2}{k^2 + (\frac{\pi}{12})^2}$