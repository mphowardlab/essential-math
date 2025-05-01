# Systems of first-order ordinary differential equations

## ODES involving second derviatives appear often in engineering because of their role in physical processes

- Newton's second law : $F=ma$
    - $a = acceleration$
    - $a = v'$
    - $a=x''$
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

-Ex: Incompressible flow in a cylinder (momentum transport)
   -Navier-Stokes equation reduces to
![IMG_0719](https://github.com/user-attachments/assets/930ddb5e-2a97-4cd4-879f-9327d1f38099)

$$
μ(1/r)\frac{d}{dr}(r\frac{du_z}{dr})=-△P/L
$$
$$
v=r\frac{du_z}{dr}
$$
$$
\int\(dv)=\int\(-1/μ)(△P/L)rdr \to v=r\frac\{du_z}{dr}=(-1/2μ)(△P/L)r^2+C_1(ln(r))+C_2
$$
$$
\int\(du_z)=\int\((-1/2μ)(△P/L)r+C_1/r)dr \to u_z = (-1/4μ)(△P/L)r^2+C_1(ln(r))+C_2
$$
- We want no slip $$u_z(R)= 0$$, so $$0=u_z(R) = (-1/4μ)(△P/L)r^2+C_1(ln(r))+C_2 \to C_2 = (-1/4μ)(△P/L)R^2-C_1(ln(r))$$
- We also know $$u_z(0)$$ is finite -or- that ++u++ has radial symmetry so $$\int\{du_z}{dr}=0 @r=0$$
   - Either way, $$C_1 = 0$$. so,
   _ $$u_z(r)=(1/4μ)(△P/L)(R^2-r^2)$$
