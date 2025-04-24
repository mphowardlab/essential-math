# Numerical solution methods

Description: Many ordinary differential equations you will encounter are not solvable by any of the methods discussed thusfar. In such cases, a numerical solution method will result in a fairly accurate solution to the ODE. One such method is Euler's method. Through a series of iterations, Euler's method uses small steps to linearly approximate the solution based on the slope at each point. 
***
# Euler's Method
y' = f(t, y) \to y(t + \(\Delta \)T) = y(t) + f(t,y)\(\Delta \)T \
** "Just" Add Columns ** \\
IMAGE (ask!!) \\
** Mole Balance ** \\
$\dfrac{dn_A}{dt} = n\.\_in - n\.\_out + \r_A\V\$
n\.\in = V\.\_in c_in,A \\
\dfrac{Vc_A}{dt} = V\._in c_in,A - V\. c_A - kc_AV
n\.\_out = V\._out c_A \\
$V\dfrac{c_A}{dt} + c_A\dfrac{dV}{dt} = 1 - 2c_A + kVc_A $ \\
** Mass Balance **
$\dfrac{dm}{dt} = m\._in - m\._out
m\.\_in = V\.\_in \(\daleth) \\
$dfrac{d\(\deltah)V}{dt} = V\.\_in \(\deltah) - V\.\_out \(\deltah)\ \\
m\.\_out = V\.\_out \(\deltah)
$\(\deltah) dfrac{dV}{dt} = V\.\_in \(\deltah) \cdot V \.\_out \(\deltah)\ = 1 -2 = -1
