# Derivatives
3. Differentiability 

To be differentiable, this limit must exist. A function would not be differentiable at a jump, cusp, coner, or vertical tangent

*insert graph*

4. Higher order derivatives

Differentiating f' gives f'', the second derivative. This process can be repeated for higher order(e.g. third) derivatives.

Example:

\begin{equation}
f(x)=x^2, f'(x)=2x
\end{equation}

\begin{align}
f''(x)=lim_{h \to 0}{\frac{f'(x+h)-f'(x)}{h}} \\
&= lim_{h \to 0}{\frac{(2(x+h)-2x)}{h}} \\
&= lim_{h \to 0}{\frac{2h}{2}} \\
= 2
\end{align}

The second derivative tells us how to find the first derivative changes.

\begin{align}
position \to velocity \to acceleration \\
x & x' & x'' \\
0 & v & v' \\
0 & 0 & a
\end{align}

```{example} Ballistic motion

*insert graph*

\begin{align}
x(t) &= u_ot & v &= y' &= v_o -gt \\
y(t) &= v_ot - \frac{1}{2}gt^2 & a &= &= v' &= y''&= -g 
\end{align}

Newton's law: $F = ma = -mg (gravity!)

