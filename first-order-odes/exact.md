# 1. Exact differential equations
$Remember that a function f(x,y) has the **total** **differential**: 
$\[df=\(frac{\partial f}{\partial x})_{y}\dx \+ \(frac{\partial f}{\partial y})_{x}\dy\] \
$If f=c (a constant), then df=0 
***
$How does this apply to ODEs? 
$Suppose we can rewrite our ODE as 
$P(x,y)dx + Q(x,y)dy = 0
$If we can show that \[P=\(frac{\partial f}{\partial x})\] and \[Q=\(frac{\partial f}{\partial y})\] for some f, then we know that f(x,y)=c is an **implicit** **solution** of the ODE. 
***
$How do we figure that out?
$If \[P=\(frac{\partial f}{\partial x})\] and \[Q=\(frac{\partial f}{\partial y})\], then \[\frac{\partial P}{\partial y}=\[\frac{\partial Q}{\partial x}] because \[\frac{\partial^2 f}{\partial y\partial x})=\frac{\partial^2 f}{\partial x\partial y}\]!
$Example: \cos(x+y)dx + [3y^2 + 2y + \cos(x+y)]dy=0
            $ \to P                 \to Q
$ \[\frac{\partial P}{\partial y}=-\sin(x+y) 
$ \[\frac{\partial Q}{\partial x}=-\sin(x+y)
***
$If an ODE is exact, we can integrate P or Q to get f, then solve for the integration constant with Q or P.
$f=\int Pdx = \int \cos(x+y)dx = sin(x+y) + k(y)
$ \[\frac{\partial f}{\partial y}/=/cos(x+y)+k’=Q=3y^2+2y+\cos(x+y)\]
$k’=3y^2+2y
$\int dk=\int 3y^2+2y dy
$k=y^3+y^2+c^*
