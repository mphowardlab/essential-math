# Numerical solution methods
## Boundary value problems : shooting method


 We can solve *initial* value problems for second-order ODEs by converting to a system and using methods we know. What about BVPs?

Let's say we want to solve:  

\begin{equation}  
y'' + y = 0, \quad y(0) = 0, \quad y(\frac{\pi}{6}) = 4  
\end{equation}  

Using normal approach:  

\begin{align}  
y &= c_1 \cos x + c_2 \sin x \\  
0 &= y(0) = c_1 \\  
4 &= y(\frac{\pi}{6}) = c_2 \frac{1}{2} \\  
c_2 &= 8  
\end{align}  

so,  

\begin{equation}  
y = 8 \sin x  
\end{equation}  

What if we needed to do this numerically? Try converting to system:  

\begin{equation}  
y_1 = y \quad y_2 = y' \quad y'' = -y  
\end{equation}  

Then, 

\begin{align}  
y_1' &= y_2 & y_1(0) &= 0 \\  
y_2' &= -y_1 & y_2(0) &= a  
\end{align}  

where *a* is unknown value that we need to figure out so $y(\frac{\pi}{6}) = 4$. We can write:  

\begin{equation}  
\vv{y}' = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \vv{y}, 
\quad \vv{y}(0) = \begin{bmatrix} 0 \\ a \end{bmatrix}  
\end{equation}  


How do we do this when we have only numbers? *Shooting method*.

```{image} ./_images/graph_of_lines.jpg  
:alt: Graph of Lines  
:align: center  
:width: 200px 

![](./images/grapofline3.jpg)
- Formuate system of ODEs with () *initial* condtion is know


- Use a root finding method to solve for *unknown* initial condition in order to satisify remaining boundary condtion.


    → Bisection is good choice here!

```{example} Reaction-diffusion with second-order reaction  
We are solving a reaction-diffusion problem with a second-order reaction:  

\begin{equation}  
D \dd{2}{c}{x} - k c^2 = 0, \quad c(0) = c_0, \quad -D c'(L) = 0  
\end{equation}  

---  

formulate&nbsp; &nbsp; &nbsp; $y'=C$ &nbsp; &nbsp; &nbsp; $y_2=C_2$ &nbsp; &nbsp; &nbsp; $C''=\frac{K}{D}C^2$


$$
\left\{
\begin{array}{l}
y_1'=y_2\quad\quad\quad\quad y_1(0)=C_0\\
y_2'=\frac{K}{D}y_1'\quad\quad\quad y_2(0)=a
\end{array}
\right.
$$

$$
\left\{

y_1'=y_2\quad\quad\quad\quad y_1(0)=C_0\\
y_2'=\frac{K}{D}y_1'\quad\quad\quad y_2(0)=a

\right.
$$
vary a and solve numerically for $\underline{y}(L)$ until $y_2(L)=0$!