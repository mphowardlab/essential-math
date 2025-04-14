# Derivatives
1. Differential multivariable calculus<br><br>
    A function f(x,y) has <ins>partial</ins> derivatives.<br>
        $\hspace{1cm}\left( \frac{\partial f}{\partial x \leftarrow Varied} \right)_{y \leftarrow Constant}  = \lim_{h \to 0}  \frac{f \left(x+h,y \right) - f \left( x,y \right)}{h}$ <br>
        <br>
        The second partial derivative may be "repeated" or "mixed"<br>
        $\hspace{1cm}\left( \frac{\partial^2 f}{\partial x^2} \right)_y  = \frac{\partial}{\partial x}\left[\left( \frac{\partial f}{\partial x} \right)_y \right]_y$ vs. $\left( \frac{\partial^2 f}{\partial x \partial y} \right) =  \frac{\partial}{\partial x} \left[\left( \frac{\partial f}{\partial y} \right)_x \right]_y$ <br><br>
        Ex: $f(x,y) = x^2 \cos \hspace{.1cm} y$<br>
        $\hspace{1cm}\left( \frac{\partial f}{\partial x} \right)_y = 2x \cos \hspace{.1cm}y$ <br>
        $\hspace{1cm}\left( \frac{\partial^2 f}{\partial x^2} \right)_y = 2 \cos \hspace{.1cm} y \hspace{1cm} \frac{\partial^2 f}{\partial x \partial y} = -2x \sin \hspace{.1cm} y$ <br><br>
        If all of f's second derivatives are continuous, the mixed second derivatives are symmetric. <br>
            $\hspace{1cm}\boxed{\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}}  \hspace{1cm}  \left(\frac{\partial f}{\partial y}\right) _x =-x^2 \sin \hspace{.1cm} y \hspace{1cm} \frac{\partial^2 f}{\partial x \partial y} = -2x \hspace{.1cm} \sin \hspace{.1cm} y \hspace{.1cm} \checkmark$<br><br>
            The <ins>total</ins> <ins>differential</ins> of f is the sum of partial derivatives<br><br>
            $\hspace{1cm}\boxed{df=\right(frac{\partial f}{\partial y}\left)_y dx + \left(frac{\partial f}{partial y}\right)_x dy }$<br>
            $\hspace{1cm}$ Ex: df = 2x cos y dx - $x^2$ sin y dy<br><br>
            The total differental can be used to form other derivatives, based on the dependencies of x and y.<br>
            $\hspace{1cm}Ex: x(t) and y(t) \rightarrow \frac{df}{dt} = 2x \hspace{.1cm} \cos \hspace{.1cm} y \frac{dx}{dt} - x^2 \hspace{.1cm} sin \hspace{.1cm} y \frac{dy}{dt}$<br>
            $\hspace{1.4cm}x(t,s) and y(t,s \rightarrow \left(\frac{\partial f}{\partial t}\right)_s = 2x \hspace{.1cm} \cos \hspace{.1cm} \right(\frac{\partial x}{\partial t})_s -x^2 \hspace{.1cm} \sin \hspace{.1cm} y \right(\frac{\patial y}{\partial t})_s$

