# Systems of first-order ordinary differential equations

#### ODES involving second derviatives appear often in engineering because of their role in physical processes!


- Newton's second law : $F=ma$
    * $a = acceleration$
    * $a = v'$
    * $a=x''$
- Hence, solving kinematic equations according to Newtonian mechanisms requires a second-order ODE in time. 

$$
~~m~~\frac{d^2x}{dt^2}=-~~m~~g
$$
$$ 
v=\frac{dx}{dt}
$$

$$
\frac{d}{dt}(\frac{dx}{dt})=\frac{dv}{dt}=-g \to \int \,dv = \int-g\,dt  \to v = \frac{dx}{dt} = -gt + C_1
$$

$$\int\ dx = \int\ (-gt+C_1) dt \to x(t) = (-1/2)gt^2 +c_1t +c_2
$$

- If the initial position is $x(0) = x_0$ and initial velocity is $v(0)=x(0)=v_0$,
$$x_0= (-1/2)g\cdot0^2 +c_1\cdot0 +c_2$$
$$x'(t) = -gt + c_1\to v_0 = x'(0) = -g\cdot0 +c_1$$
$$x(t) = (-1/2)gt^2 +v_0t +x_0$$



![IMG_0719](https://github.com/user-attachments/assets/930ddb5e-2a97-4cd4-879f-9327d1f38099)

