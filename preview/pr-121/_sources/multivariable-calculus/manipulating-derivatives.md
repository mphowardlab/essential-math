# Manipulating partial derivatives

We sometimes need to find derivatives we don't obtain easily from one of these potentials. For this, we use some calculus rules:

#### Inversion

If \ x(y, z) \ and \ y(x, z) \, then


\left( \frac{\partial x}{\partial y} \right)_z = \frac{1}{\left( \frac{\partial y}{\partial x} \right)_z}
$$

````{example}
Let 
$$
x = \frac{y^2}{z}
$$

We can rearrange this to form:  
$$
y = \pm \sqrt{xz}
$$

Then:
$$
\left( \frac{\partial x}{\partial y} \right)_z = \frac{2y}{z}
$$

And:
$$
\left( \frac{\partial y}{\partial x} \right)_z = \frac{1}{2} \cdot \frac{z}{\sqrt{xz}} = \frac{z}{2y}
$$

Thus:
$$
\frac{1}{\left( \frac{\partial y}{\partial x} \right)_z} = \frac{2y}{z}
$$

Define \( w = yz \), so \( y = \frac{w}{z} \)

Then:
$$
x = \frac{(w/z)^2}{z} = \frac{w^2}{z^3}
$$

Now compute:
$$
\left( \frac{\partial x}{\partial w} \right)_z = \frac{2w}{z^3}, \quad \left( \frac{\partial w}{\partial y} \right)_z = z
$$

Therefore:
$$
\left( \frac{\partial x}{\partial y} \right)_z = \left( \frac{2w}{z^3} \right) z = \frac{2w}{z^2} = \frac{2yz}{z^2} = \frac{2y}{z}
$$
