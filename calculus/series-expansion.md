# Series expansion
````{example} Find the Taylor Series Expansion of: 
\begin{flalign}
f(x) = xe^{(2x^2)}\\
 x(0)=0&&
\end{flalign}

\begin{flalign}
f'(x) &= x(e^{2x^2}4x) + e^{2x^2} \\
&= (4x^2 + 1)e^{2x^2} \\
\to f'(0) &= 1 &&
\end{flalign}

\begin{flalign}
f''(x) &= (4x^2+1)(e^{2x^2}4x)+8xe^{2x^2} \\
&= (16x^3+12x)e^{2x^2} \\
\to f''(0) &= 0 &&
\end{flalign}

\begin{flalign}
f'''(x) &= (16x^3+12x)(e^{2x^2}4x)+(48x^2+12)e^{2x^2} \\
&= (64x^4+96x^2+12)e^{2x^2} \\
\to f'''(0) &= 12 &&
\end{flalign}

\begin{flalign}
f(x) \approx 0 + 1 \cdot x + \frac{1}{2} \cdot 0 \cdot x^2 + \frac{1}{6} \cdot 12 \cdot x^3 + \ldots = x + 2x^3 + \ldots &&
\end{flalign}

''''

````{example} Difficult Series can be computed more easily by breaking them apart


\begin{align}
\text{Ex: } f(x)= xe^{2x^2} = xg(2x^2) \\
\text{where } g(x)= e^x 
\end{align}

\begin{align}
\text{Taylor Series for } e^x  \text{ at } x(0) = 0 \text{ is}\\
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2} + \ldots \\
\text{Hence, } g(2x^2) \approx 1 +2x^2 + \frac{(2x^2)^2}{2} + \ldots \\
\text{and } f(x) = xg(2x^2) \approx x(1+2x^2 +2x^4 + \ldots ) \\
= x + 2x^3+ \ldots 
\end{align}

It can be helpful to keep track of dropped terms using 0 notation 

\begin{align}
e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x +  \frac{x^2}{2} + 0(x^3) \\
e^{2x^2} &= 1 + 2x^2 + 2x^4 + 0(x^6) \\
xe^{2x^2} &= x + 2x^3 + 0(x^5) 
\end{align}
''''