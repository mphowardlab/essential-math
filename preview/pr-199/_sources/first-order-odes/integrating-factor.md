# Integrating factor
What do we do when an ODE is not exact?

$$
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
$$


    Example 1:  -y dx + x dy = 0
    P = -y
    Q = x

In this equation, we can consider our P = -y and our Q = x. Remember, when solving ODEs, we take the partial derivative of P and Q... 
If partial derivatives are not equal, the equation is not exact. 

$$
    ∂P/∂y = -1       ∂Q/∂x = 1       ----> not exact!!
$$

Let's multiply by a factor, F, to make this ODE exact. This is the integrating factor. The integrating factor transforms the ODE into an exact differential equation.

    F = 1/(x^2)  --> -y * (1/(x^2)) + x * (1/(x^2)) = 0 --> -y/x^2 + 1/x = 0

    ∂(FP)/∂y = -1/x^2     ∂(FQ)/∂x = -1/x^2  ----> exact!! 

How did we know the integrating factor would work? How did we find it?

    Let's try this:
      R = 1/Q * ((∂P/∂y) - (∂Q/∂x)) 
      If R(x) is only a function of x, use this to find the integrating factor. 
      F(x) = exp[∫R(x) dx]

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

        





