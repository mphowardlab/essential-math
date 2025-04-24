# Homogeneous linear second-order ODEs with constant coefficients
1. Homogenous linear second-order ODEs with constant coefficients
***
Equations of the form

{math}`y'' + ay' + by = 0`


come up often so it is important to know how to solve them!
  * Mechanics
  * Heat/Mass Diffusion (steady)
  * Solving partial differential equations for unsteady processes

Solution: Try y=e^x as an ansatz
    $y = e^{\lambda x}$
    $y' = \lambda{e^\lambda x}$
    $y'' = \lambda^2 e^{\lambda x} $

We can solve this characteristic polynomial for $\lambda_1& and $\lambda_2$ and use superposition. There are 3 cases:

(1) $\lambda_1 $ and $ \lambda_2 $ are real and distinct: $y = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$

 (2) $\lambda_{1,2} = \alpha \pm i \omega$ are complex: $ y = e^{\omega x} (c_1 cos \omega x + c_2 sin \omega x) $

(3) $\lambda_1 = \lambda_2 = \lambda $ is real and repeated: $ y=(c_1 + c_2 x) e^{\lambda x} $








