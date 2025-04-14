# Integration by parts

When solving seperable ODEs, we may need to integrate complicated functions

ex: 

$$y'=xe^{-6x} \to \int1dy=\int(xe^{-6x}dx)$$

Remember:

$$\int(e^xdx)=e^x+c 

\int(xe^{x^2}dx) = \frac{1}{2}e^{x^2}+c$$ (2)

We can solve this by u-substitution: $u=x^2$ , $du=2xdx$

\begin{align}
\int(xe^{x^2}dx) =

\int\frac{1}{2}e^udu =

\frac{1}{2}e^u+c
\end{align}

Then plug u back in and get the final answer:

$$\int(xe^{x^2}dx) = \frac{1}{2}e^{x^2}+c$$ (same as above)

But what to do here?

Product rule:

$$(fg)'=fg'+gf'

\int(d(fg)) = \int(fg'dx) + \int(gf'dx)$$

Let $u=f(x)$ , $du=f'dx$ , $v=g(x)$ , and $dv=g'dx$

This then goes to:

$$uv=\int(udv)+\int(vdu) 

\int(udv)=uv-\int(vdu)$$

Apply this to the example above:

````{example} 1.6.1

$$\int(xe^{-6x}dx)$$

Let $u=x$ , which gives $du=dx$ , and $dv=e^{-6x}dx$ , which gives $v=\frac{-1}{6}e^{-6x}$. 

Then,

$$\int(xe^{-6x}dx) = x\frac{-e^{-6x}}{6} - \int\frac{-e^{-6x}}{6}dx = x\frac{-e^{-6x}}{6} + \frac{-1}{6}\int(e^{-6x}dx) = x\frac{-e^{-6x}}{6} - \frac{-e^{-6x}}{36} + c$$
````

How do we choose u vs. v?

L.I.A.T.E

Logarithmic  (best choice of u)

Inverse

Algebraic

Trigonometric

Exponential  (worst choice of u)

````{example} 1.6.2

$$\int(3x+5)\cos{\frac{x}{4}}dx$$ 

Let $u=3x+5$ , which makes $du=3dx$ , and $dv=\cos{\frac{x}{4}}dx$ , which makes $v=4\sin{\frac{x}{4}}$

Which allows:

$$\int(3x+5)\cos{\frac{x}{4}}dx = (3x+5)[4\sin{\frac{x}{4}}] - \int4\sin{\frac{x}{4}}3dx = (12x+20)[4\sin{\frac{x}{4}}] - 12\int\sin{\frac{x}{4}}dx = (12x+20)[4\sin{\frac{x}{4}}] + 48\cos{\frac{x}{4}} + c$$