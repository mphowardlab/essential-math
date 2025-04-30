# Integrating factor
## What do we do when an ODE is not exact?
**Example 1:**
\begin{align*} 
  -y , dx + x , dy &= 0 \
  P &= -y \
  \Q &= x \
  \frac{\partial P}{\partial y} &= -1 \
  \frac{\partial Q}{\partial x} &= 1 \
  &\Rightarrow\text{not exact!}
  \end{align*}

When solving ODEs, we take the partial derivatives of P and Q.
If the partial derivatives are not equal, the equation is **not exact**: 

---

## Finding the Integrating Factor

Multiply by a factor F to make the ODE exact. This is called the **integrating factor**.

$$
\begin{align*}
F &= \frac{1}{x^2} \\
(-y)\left( \frac{1}{x^2} \right) + x\left( \frac{1}{x^2} \right) &= -\frac{y}{x^2} + \frac{1}{x} = 0 \\
\frac{\partial ( F P)}{\partial y} &= -\frac{1}{x^2} \\
\frac{\partial (F Q)}{\partial x} &= -\frac{1}{x^2} \\
\end{align*}
$$


## How did we find F?

  Using this formula:
  
$$
\begin{align*}
R &= \frac{1}{Q} \left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right)
\end{align*}
$$

- If R depends only on x, the integrating factor is:
$$
\begin{align*}
F(x) &= \exp\left( \int R(x) \, dx \right) 
\end{align*}
$$

If not, check: 

$$
\begin{align*}
S &= \frac{1}{P} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) = -\frac{Q}{P} R 
\end{align*}
$$

- If S depends only on y, the integrating factor is: 
$$ 
\begin{align*}
F(y) &= \exp\left( \int S(y) \, dy \right) 
\end{align*}
$$

If neither R nor S are simple functions of only x or y:
> **You must guess an integrating factor.**

---
## Example 1 (continued)

**R Calculation:**
$$
\begin{align*}
R &= \frac{1}{x}(-1 - 1) = \frac{-2}{x}
\end{align*}
$$

Thus: 
$$
\begin{align*}
F(x) &= \exp\left( \int \frac{-2}{x} \, dx \right)
= \exp( -2 \ln(x))
= \left( e^{\ln(x)} \right)^{-2}
= \frac{1}{x^2}
\end{align*}
$$

**S Calculation:**
$$
\begin{align*}
S &= -\frac{Q}{P} \cdot R 
= -\frac{x}{-y} \cdot \left( \frac{-2}{x} \right)
 = \frac{-2}{y} \\
 \end{align*}
$$

Thus:
$$
\begin{align*}
F(y) &= \exp\left( \int \frac{-2}{y} \, dy \right) 
= \frac{1}{y^2}
\end{align*}
$$

$$
\boxed{
  \begin{aligned}
  F(x) &= \frac{1}{x^2} \\
  F(y) = \frac{1}{y^2}
  \end{aligned}
}
$$
**These are valid integrating factors.**


# Application to Linear First-Order ODEs:
A **linear first-order ODE** has the form: 
$$ 
\begin{align*}
y' + p(x) \, y = r(x)
\end{align*}
$$

Using an **integrating factor**, we can show that:

$$
\boxed{
  \begin{aligned}
   y(x) &= \frac{1}{F(x)} \left( \int F(x) \, r(x) \, dx + C \right) \\
F(x) &= e^{\int p(x) \, dx}
\end{aligned}}
$$


        





