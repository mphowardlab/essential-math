# Manipulating Partial Derivatives

We sometimes need to find derivatives we don't obtain easily from one of these potentials. For this, we use some calculus rules:

#### Inversion

If \( x(y, z) \) and \( y(x, z) \), then:

```{math}
\left( \frac{\partial x}{\partial y} \right)_z = \frac{1}{\left( \frac{\partial y}{\partial x} \right)_z}

Let:

x = \frac{y^2}{z}
```

We can rearrange this to:
```{math}
y = \pm \sqrt{xz}
```

Compute:
```{math}
\left( \frac{\partial x}{\partial y} \right)_z = \frac{2y}{z}
```

Then:
```{math}
\left( \frac{\partial y}{\partial x} \right)_z = \frac{z}{2y}
```

And:
```{math}
\frac{1}{\left( \frac{\partial y}{\partial x} \right)_z} = \frac{2y}{z}
```
#### Chain Rule

\left( \frac{\partial x}{\partial y} \right)_z = \left( \frac{\partial x}{\partial w} \right)_z \left( \frac{\partial w}{\partial y} \right)_z

Define \( w = yz \), so \( y = \frac{w}{z} \)

Then:
```{math}
x = \frac{(w/z)^2}{z} = \frac{w^2}{z^3}
```

Now compute:
```{math}
\left( \frac{\partial x}{\partial w} \right)_z = \frac{2w}{z^3}
```

```{math}
\left( \frac{\partial w}{\partial y} \right)_z = z
```

Therefore:
```{math}
\left( \frac{\partial x}{\partial y} \right)_z = \frac{2w}{z^3} \cdot z = \frac{2w}{z^2} = \frac{2yz}{z^2} = \frac{2y}{z}
```

