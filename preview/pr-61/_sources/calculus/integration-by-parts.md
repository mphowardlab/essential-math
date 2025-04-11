# Integration by parts
When solving seperable ODEs, we may need to integrate complicated functions\\
e.g., $$y'=xe^(-6x)$ \to $\int(dy)=\int(xe^-6xdx)$$\\
    Remember: $$\int(e^xdx)=(e^x+c)$$
              $$\int(xe^x^2dx)$ = $1/2(e^x^2)+c$$
                perform u-susstitution with $$u=x^2$$ and $$du=2x$$ \to $\int(xe^x^2dx)$ = $$\int(1/2e^udu)$$ = $$1/2(e^u)+c$$\\
  But what to do here?\\
Product rule: $$(fg)'=fg'+gf'$$\\
              $$\int(dfg)=\int(fg'dx)+\int(gf'dx)$$\\
          Let: $$u=fx$$       $$v=g(x)$$\\
               $$du=f'dx$$    $$dv=g'dx$$ \to $$uv = \int(udv) + \int(vdu)$$\\
                                              $$\int(udv) = uv - \int(vdu)&&\\ 
Apply to our example... $$\int(xe^-6xdx) = x(-e^-6x)/-6 -\int(-e^-6x/-6xdx) = xe^-6x/-6 + 1/6\int(e^-6xdx) = xe^-6x/-6 - e^-6x/36 + c$$\\
                        $$u=x$$     $$dv=e^-6xdx$$\\
                        $$du=dx$$   $$v=-1/6e^-6x$$