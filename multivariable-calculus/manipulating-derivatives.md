# Manipulating partial derivatives

We sometimes need to find derivatives we don't obtain easily from one of these potentials. For this, we use some calculus rules:

####Inversion:

If x(y,z) and y(x,z) then

{\frac{\partial x}{\partial y}}_z = \frac{1}{{\frac{partial y}{partial x}}_z}

````{example}
x = \frac{y^2}{z}

We can rearrange this to form y = \pm \sqrt{xz}

{\frac{\partial x}{\partial y}}_z = \frac{2y}{z}

{\frac{\partial y}{\partial x}}_z = {\frac{1}{2}}{\sqrt{\fract{2}{x}}} = {\frac{1}{2}}{\sqrt{\fract{z}{\frac{y^2}{z}}}} = \frac{x}{2y}

\frac{1}{{partial y}{partial x}_z} = \frac{2y}{z}
````

####Chain Rule:

If x(y,z) then 

{\frac{\partial x}{\partial y}}_z = {{\frac{\partial x}{\partial w}}_z}{{\frac{partial w}{\partial y}}_z}

where {\frac{\partial x}{\partial w}}_z is x(w,z) and {\frac{partial w}{\partial y}}_z is w(y,z)

````{example}
Define w = yz so y = w/z

x = \frac{{w/z}^2}{z} = \frac{w^2}{z^3}

{{\frac{\partial x}{\partial w}}_z} = \frac{2w}{z^3} and {\frac{partial w}{\partial y}}_z = z

{{\frac{\partial x}{\partial w}}_z}{\frac{partial w}{\partial y}}_z = {\frac{2w}{z^3}}z = \frac{2w}{z^2} = \frac{2yz}{z^2} = \frac{2y}{z}
