# Linearity
1. Systems of ODEs


Many dynamic processes can occur simultaneously, giving more than one ODE.

## Example
''''{example} Concentration Change Over Time

'''{image} ./Images/Image-issue47.png
:alt: Concentrations in Tanks Flow
'''


In the image, tank one has concentration one (C1) and tank two has concentration two (C2). Tank one is flowing to tank two. Tank two is flowing to a pump. The pump exit stream is flowing back to tank one. 


How do the concentrations C1 and C2 in these tanks evovle?


C2H4 + 0.5 O2 => C2H4O


C2H4 + 3 O2 => 2 CO2 + 2 H2O


How do the amounts of each species change over time?


General form: 


y(1)' = f(1) * (t, y(1), ....., y(n))

.

.

.                                                  

.

.

y(n)' = f(n) * (t, y(1), ....., y(n))
 
 =====>  y' = f(t,y)

 ## Definition 

A system of first-oder ODEs is linear if y' = A(t)y + g(t).


Linear systems have unique solutions and special properties we will discuss later. 


An important special case is the homogeneous linear system with constant coefficients y' = A*y.


We will focus on solving these types of problems because they come up a lot in chemical engineering problems and future courses (e.x. controls).  
