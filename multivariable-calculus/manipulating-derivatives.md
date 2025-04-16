# Manipulating Partial Derivatives

We sometimes need to find derivatives we don't obtain easily from one of these potentials. For this, we use some calculus rules:

#### Inversion

If \( x(y, z) \) and \( y(x, z) \), then:

```{math}
\left( \frac{\partial x}{\partial y} \right)_z = \frac{1}{\left( \frac{\partial y}{\partial x} \right)_z}

Let:
```{math}
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

\left( \frac{\partial x}{\partial y} \right)_z = \left( \frac{\partial x}{\partial w} \right)_z \left( \frac{\partial w}{\partial y} \right)_z

# Manipulating Partial Derivatives

We sometimes need to find derivatives we don't obtain easily from one of these potentials. For this, we use some calculus rules:

#### Inversion

If \( x(y, z) \) and \( y(x, z) \), then:

```{math}
\left( \frac{\partial x}{\partial y} \right)_z = \frac{1}{\left( \frac{\partial y}{\partial x} \right)_z}
