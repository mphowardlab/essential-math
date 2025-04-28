# Integrating factor
## What do we do when an ODE is not exact?
**Example 1:**
$  
  -y \, dx + x \, dy = 0
$
where: 
$
    P = -y$, $Q = x
$

When solving ODEs, we take the partial derivatives of \(P\) and \(Q\).
If the partial derivatives are not equal, the equation is **not exact**: 

$$
\frac{\partial P}{\partial y} = -1, \quad \frac{\partial Q}{\partial x} = 1 \quad \longrightarrow \quad \text{Not exact!}
$$

---

## Finding the Integrating Factor

Multiply by a factor \(F\) to make the ODE exact. This is called the **integrating factor**.

Choosing: 
$ 
F = \frac{1}{x^2}
$

Now multiply through:
$
\left( -y \right) \left( \frac{1}{x^2} \right) + \left( x \right) \left( \frac{1}{x^2} \right) = 0$
$\quad \Rightarrow \quad
-\frac{y}{x^2} + \frac{1}{x} = 0
$

Check the partial derivatives:
$ 
\frac{\partial (F P)} {\partial y} = - \frac{1}{x^2}$,
$\quad
\frac{\partial (F Q)}{\partial x} = -\frac{1}{x^2}$
$\quad \longrightarrow \quad$ **Exact!**


## How did we find \(F\)?

  Using this formula:
  

  $$
  R = \frac{1}{Q} \left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right)
  $$

    What if R(x) is not only a function of x, but also includes a y in the product?
      S = 1/P * ((∂Q/∂x) - (∂P/∂y)) = -(Q/P) * R
      If S(y) is only a function of y, use this is find the integrating factor.
      F(y) = exp[∫S(y) dy]
What if R is not a function of only x, and S is not a function of only y? 
      Guess!!

      Example 1 (continued): 
        R = 1/Q * ((∂P/∂y) - (∂Q/∂x)) --->   R = 1/x * (-1 - 1) = -2/x
        F(x) = exp[∫ - 2/x dx] = exp[-2*ln(x)] = [exp(ln(x))]^(-2) = 1/x^2

        S = -(Q/P) * R ---> S = -(x / -y) * (-2/x) = -2/y
        F(y) = exp[∫(-2/y) dy] = 1/y^2
F(x) and F(y) are both acceptable integrating factors here.  

# Application to Linear First-Order ODEs:
A linear first-order ODE is in the form: 
  y' + p(x) * y = r(x)

        





