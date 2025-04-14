# Derivatives
1. Differential multivariable calculus<br>
    A function f(x,y) has <ins>partial</ins> derivatives.<br>
        $\left( \frac{\partial f}{\partial x \leftarrow Varied} \right)_y \leftarrow Constant  = \lim_{h \to 0}  \frac{f \left(x+h,y \right) - f \left( x,y \right)}{h}$ <br>
        <br>
        The second partial derivative may be "repeated" or "mixed"<br>
        $\left( \frac{\partial^2 f}{\partial x^2} \right)_y  = \frac{\partial}{\partial x}\left[\left( \frac{\partial f}{\partial x} \right)_y \right]_y$ vs. $\left( \frac{\partial^2 f}{\partial x \partial y} \right) =  \frac{\partial}{\partial x} \left[\left( \frac{\partial f}{\partial y} \right)_x \right]_y$ <br><br>
        Ex: $f(x,y) = x^2 cos y$<br>
        $\left( \frac{\partial f}{\partial x} \right)_y = 2x cos y$ <br>
        $\left( \frac{\partial^2 f}{\partial x^2} \right)_y = 2 cos y      \frac{\partial^2 f}{\partial x \partial y} = -2x sin y$ <br>
        If all of f's second derivatives are continuous, the mixed second deviants are symmetric. <br>
            $\boxed{\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}}    $
