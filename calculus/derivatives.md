# Derivatives
$$
\begin{array}{lll}
\text{Rule} & f(x) & f'(x) \\
\hline
\text{Constant} & k & 0 \\
\text{Power} & x^n & nx^{n-1} \\
\text{Multiple} & k u(x) & k u'(x) \\
\text{Sum} & u(x) + v(x) & u'(x) + v'(x) \\
\text{Difference} & u(x) - v(x) & u'(x) - v'(x) \\
\text{Exponential} & a^x & \frac{a^x}{\ln a} \\
\text{Logarithm} & \log_a x & \frac{1}{x \ln a} \\
\end{array}
$$

text{(1) } f(x) = x^3 \quad \rightarrow \quad f'(x) = 3x^{3-1} = 3x^2

\text{(2) } f(x) = -x^2 + 3 \quad \rightarrow \quad f'(x) = \frac{d}{dx}(-x^2) + \frac{d}{dx}(3) \\
= -\frac{d}{dx}(x^2) + \frac{d}{dx}(3) \\
= -2x^{2-1} + 0 \\
= -2x

\text{(3) } f(x) = \frac{4x^3}{3} - x + 2e^x \quad \rightarrow \quad f'(x) = \frac{4}{3}\frac{d}{dx}(x^3) - \frac{d}{dx}(x) + 2\frac{d}{dx}(e^x) \\
= \frac{4}{3}(3x^2) -1 + 2e^x \\
= 4x^2 -1 +2e^x

\text{(4) } f(x) = \frac{3}{x^2} + \sqrt{x} \quad \rightarrow \quad f'(x) = 3\frac{d}{dx}(x^{-2}) + \frac{d}{dx}(x^{1/2}) \\
= 3(-2x^{-3}) + \frac{1}{2}x^{-1/2} \\
= \frac{-6}{x^3} + \frac{1}{2\sqrt{x}}

\text{(5) } f(x) = \log(4x) \quad \rightarrow \quad f'(x) = \frac{d}{dx}[\log 4 + \log x] \\
= \frac{d}{dx}(\log 4) + \frac{d}{dx}(\log x) \\
= 0 + \frac{1}{x \ln 10} \\
= \frac{1}{x \ln 10}