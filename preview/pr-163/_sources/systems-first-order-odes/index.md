# Systems of first-order ordinary differential equations

## ODES involving second derviatives appear often in engineering because of their role in physical processes

- Newton's second law : $F=ma$
    - $a = acceleration$
    - $a = v'$
    - $a=x''$
- Hence, solving kinematic equations according to Newtonian mechanisms requires a second-order ODE in time. 

<div align="left">

$$
\begin{aligned}
&m\frac{d^2x}{dt^2}=-mg \\
&v=\frac{dx}{dt} \\
&\frac{dv}{dt}=-g \Rightarrow \int\ dv = \int -g\ dt \Rightarrow v = \frac{dx}{dt} = -gt + C_1 \\
&\int dx = \int (-gt + C_1)\ dt \Rightarrow x(t) = -\frac{1}{2}gt^2 + C_1t + C_2
\end{aligned}
$$

</div>

If the initial position is $x(0) = x_0$ and initial velocity is $v(0)=x(0)=v_0$,

$$
\begin{aligned}
&m\frac{d^2x}{dt^2} = -mg \\
&v = \frac{dx}{dt} \\
&\frac{d}{dt} \left( \frac{dx}{dt} \right) = \frac{dv}{dt} = -g 
\Rightarrow \int dv = \int -g\ dt 
\Rightarrow v = \frac{dx}{dt} = -gt + C_1 \\
&\int dx = \int (-gt + C_1)\ dt 
\Rightarrow x(t) = -\frac{1}{2}gt^2 + C_1t + C_2
\end{aligned}
$$


Ex: Incompressible flow in a cylinder (momentum transport)
- Navier-Stokes equation reduces to
<img src="https://github.com/user-attachments/assets/cc9937aa-c09f-46ed-a159-edaad1f20dc6" alt="Your Image" width="500"/>


$$
\begin{aligned}
&\mu \frac{1}{r} \frac{d}{dr} \left( r \frac{du_z}{dr} \right) = -\frac{\Delta P}{L} \\
&v = r \frac{du_z}{dr} \\
&\int dv = \int \frac{-1}{\mu} \frac{\Delta P}{L} r\,dr 
\Rightarrow v = r \frac{du_z}{dr} = -\frac{1}{2\mu} \frac{\Delta P}{L} r^2 + C_1 \ln(r) + C_2 \\
&\int du_z = \int \left( -\frac{1}{2\mu} \frac{\Delta P}{L} r + \frac{C_1}{r} \right) dr 
\Rightarrow u_z = -\frac{1}{4\mu} \frac{\Delta P}{L} r^2 + C_1 \ln(r) + C_2
\end{aligned}
$$

We want no slip $u_z(R)= 0$, so $$0=u_z(R) = -\frac{1}{4μ}\frac{△P}{L}r^2+C_1(ln(r))+C_2 \to C_2 = -\frac{1}{4μ}\frac{△P}{L}R^2-C_1(ln(r))$$

We also know 
$$u_z(0)$$ 
is finite -or- that u has radial symmetry, so $$\frac{du_z}{dr}=0  \to @r=0$$.

Either way, 
    $$C_1 = 0$$. So,
    $$u_z(r)=\frac{1}{4μ}\frac{△P}{L}(R^2-r^2)$$
