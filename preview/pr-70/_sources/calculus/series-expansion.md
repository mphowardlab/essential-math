# Series expansion
````{example} Find the Taylor Series Expansion of: 
\begin{align}
f(x) = xe^{(2x^2)}\\
 x(0)=0
\end{align}

\begin{align}
f'(x) &= x(e^{2x^2}4x) + e^{2x^2} \\
&= (4x^2 + 1)e^{2x^2} \\
\to f'(0) &= 1
\end{align}

\begin{align}
f''(x) &= (4x^2+1)(e^{2x^2}4x)+8xe^{2x^2} \\
&= (16x^3+12x)e^{2x^2} \\
\to f''(0) &= 0
\end{align}

\begin{align}
f'''(x) &= (16x^3+12x)(e^{2x^2}4x)+(48x^2+12)e^{2x^2} \\
&= (64x^4+96x^2+12)e^{2x^2} \\
\to f'''(0) &= 12
\end{align}

\begin{align}
f(x) \approx 0 + 1 \cdot x + \frac{1}{2} \cdot 0 \cdot x^2 + \frac{1}{6} \cdot 12 \cdot x^3 + \ldots = x + 2x^3 + \ldots
\end{align}