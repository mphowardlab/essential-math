# Integrating factor
## What do we do when an ODE is not exact?
**Example 1:**
$$  
  -y \, dx + x \, dy = 0
$$
where: 
$$
    P = -y, \quad Q = x
$$

When solving ODEs, we take the partial derivatives of \(P\) and \(Q\).
If the partial derivatives are not equal, the equation is **not exact**: 

$$
\frac{\partial P}{\partial y} = -1, \quad \frac{\partial Q}{\partial x} = 1 \quad \longrightarrow \quad \text{Not exact!}
$$

---

## Finding the Integrating Factor

Multiply by a factor \(F\) to make the ODE exact. This is called the **integrating factor**.

Choosing: 
$$ 
F = \frac{1}{x^2}
$$

Now multiply through:
$$
\left( -y \right) \left( \frac{1}{x^2} \right) + \left( x \right) \left( \frac{1}{x^2} \right) = 0
\quad \Rightarrow \quad
-\frac{y}{x^2} + \frac{1}{x} = 0
$$

Check the partial derivatives:
$$ 
\frac{\partial (F P)} {\partial y} = - \frac{1}{x^2}, \quad
\frac{\partial (F Q)}{\partial x} = -\frac{1}{x^2}$
\quad \longrightarrow \quad \text{Exact!}
$$


## How did we find \(F\)?

  Using this formula:
  

  $$
  R = \frac{1}{Q} \left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right)
  $$

- If \( R(x) \) depends only on \( x \), the integrating factor is:
$$
F(x) = \exp\left( \int R(x) \, dx \right)
$$

If not, check: 

$$
S = \frac{1}{P} \ left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) = -\frac{Q}{P} R
$$

- If \( S(y) \) depends only on \( y \), the integrating factor is: 
$$ 
F(y) = \exp\left( \int S(y) \, dy \right)
$$

If neither \( R \) nor \( S \) are simple functions of only \( x \) or \( y \):
> **You must guess an integrating factor.**

---
## Example 1 (continued)

Calculate \( R \):
$$
R = \frac{1}{x} \left(-1 - 1 \right) = \frac{-2}{x}
$$

Thus: 
$$
F(x) = \exp\left( \int \frac{-2}{x} \, dx \right)
= \exp\left( -2 \ln(x) \right)
= \left( e^{\ln(x)} \right)^{-2}
= \frac{1}{x^2}
$$

Alternatively, calculate \( S \):
$$
S = -\frac{Q}{P} \, R = -\frac{x}{-y} \times \left( \frac{-2}{x} \right) = \frac{-2}{y}
$$

Thus:
$$
F(y) = \exp\left( \int \frac{-2}{y} \, dy \right) = \frac{1}{y^2}
$$

**Both** \( F(x) = \frac{1}{x^2} \) **and** \( F(y) = \frac{1}{y^2} \) **are valid integrating factors.**


# Application to Linear First-Order ODEs:
A **linear first-order ODE** has the form: 
$$ 
y' + p(x) \, y = r(x)
$$

Using an **integrating factor**, we can show that:

$$
\boxed{ y(x) = \frac{1}{F(x)} \left( \int F(x) \, r(x) \, dx + C \right) 
\quad \text{and} \quad
F(x) = e^{\int p(x) \, dx}}
$$


        





