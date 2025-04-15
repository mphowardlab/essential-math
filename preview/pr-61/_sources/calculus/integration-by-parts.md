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

$$\int(3x+5)\cos{\frac{x}{4}}dx = ?$$ 

Let $u=3x+5$ , which makes $du=3dx$ , and $dv=\cos{\frac{x}{4}}dx$ , which makes $v=4\sin{\frac{x}{4}}$

Which allows:

$$\int(3x+5)\cos{\frac{x}{4}}dx = (3x+5)[4\sin{\frac{x}{4}}] - \int4\sin{\frac{x}{4}}3dx = (12x+20)[\sin{\frac{x}{4}}] - 12\int\sin{\frac{x}{4}}dx = (12x+20)[4\sin{\frac{x}{4}}] + 48\cos{\frac{x}{4}} + c$$

So...

$$\int(3x+5)\cos{\frac{x}{4}}dx = (12x+20)[4\sin{\frac{x}{4}}] + 48\cos{\frac{x}{4}} + c$$
````

````{example} 1.6.3

$$\int(x^4e^{\frac{x}{2}}dx) = ?$$

Let $u=x^4$ , which makes $du=4x^3$ , and $dv=e^{\frac{x}{2}}dx$ , which makes $v=2e^{\frac{x}{2}}$

$$\int(x^4e^{\frac{x}{2}}dx) = x^4(2e^{\frac{x}{2}}) - \int2e^{\frac{x}{2}}(4x^3)dx$$

We will need to integrate by parts again but there is a shortcut!!

| u     | dv                |
|-------|-------------------|
| x^4   | e^{\frac{x}{2}}   |
| 4x^3  | 2e^{\frac{x}{2}}  |
| 12x^2 | 4e^{\frac{x}{2}}  |
| 24x   | 8e^{\frac{x}{2}}  |
| 24    | 16e^{\frac{x}{2}} |
| 0     | 32e^{\frac{x}{2}} |


For this shortcut make a chart like depicted below and then starting from the first u, go down one row diagonally and multiply the u and the dv together and then continue this all the way to 0.

Your answer will look like this:

$$\int(x^4e^{\frac{x}{2}}dx) = (x^4)(2e^{\frac{x}{2}}) - (4x^3)(4e^{\frac{x}{2}}) + (12x^2)(8e^{\frac{x}{2}}) - (24x)(16e^{\frac{x}{2}}) + (24)(32e^{\frac{x}{2}})$$

Simplified this will give the final answer of:

$$\int(x^4e^{\frac{x}{2}}dx) = 2x^4e^{\frac{x}{2}} - 16x^3e^{\frac{x}{2}} + 96x^2e^{\frac{x}{2}} - 384xe^{\frac{x}{2}} + 768e^{\frac{x}{2}}$$
````

````{example} 1.6.4

$$\int(lnxdx) = ?$$

Let $u=lnx$, which makes $du=\frac{1}{x}$, and $dv=dx$, which makes $v=x$

Which allows:

$$\int(lnx) = xlnx - \int(\frac{1}{x}xdx) = xlnx - x + c$$

So...

$$\int(lnx) = xlnx - x + c$$
````

````{example} 1.6.5

$$\int(x^5)