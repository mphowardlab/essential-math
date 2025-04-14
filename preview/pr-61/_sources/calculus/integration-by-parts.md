# Integration by parts

When solving seperable ODEs, we may need to integrate complicated functions

````{example} Example
$$y'=xe^{-6x} \to \int1dy=\int(xe^{-6x}dx)$$

Remember:

$$\int(e^xdx)=e^x+c

\intxe^{x^2} = \frac{1}{2}e^{x^2}+c$$

We can solve this by u-substitution: $u=x^2$ , $du=2xdx$

\begin{align}
\intxe^{x^2}dx = 
\int\frac{1}{2}e^udu =
\frac{1}{2}e^u+c
\end{align}
