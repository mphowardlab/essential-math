# Integration using substitution
## Skill Builder
### Find General Solutions for:
(a) $y' = (x+2)\ln(x)$

```{solution}
\begin{equation}
y = \int (x+2)\ln(x) dx
\end{equation}
    
\begin{align}
u = \ln(x)&, \ dv = (x+2)dx \\
du = \frac{1}{x}dx&, \ v = \frac{x^2}{2} + 2x
\end{align}
    
\begin{align}
y =\left( \frac{x^2}{2} + 2x \right)\ln(x) \ -& \int \left( \frac{x^2}{2} + 2x \right) \frac{1}{x}\ dx \\
\to \left( \frac{x^2}{2} + 2x \right)\ln(x) \ -&\frac{x^2}{4}-2x+C
\end{align}
```

(b) $y' = x^5sin(x)$<br>

  $y = \int x^5sin(x) \ dx$

  $u: \ x^5 \ 5x^4 \ 20x^3 \ 60x^2 \ 120x \ 120 \ 0$ <br>
  $dv: \ sin(x) \\ -cos(x) \\ -sin(x) \\ cos(x) \\ sin(x) \\ -cos(x) \\ -sin(x)$  
  <br>
  $=-x^5cos(x)+5x^4sin(x)+20x^3cos(x)-60x^2sin(x)-120xcos(x)+120sin(x)+C$
  
  $\to (-x^5+20x^3-120x)cos(x)+(5x^4-60x^2+120)sin(x)+C$  
<br>
<br>

(c) $y' = e^xcos(x)$ 
  
  $y = \int e^xcos(x)dx$ <br>  
  
  $u = cos(x)$ $dv = e^x dx$  
  $du = -sin(x)dx$  $v = e^x$   
  
  $= e^xcos(x) + \int e^x(sin(x))dx$

  $u = sin(x)$ $dv = e^x dx$  
  $du = cos(x)$ $v = e^x$  

$= e^xcos(x)+[e^xsin(x)-\int e^xcos(x)dx]$

$= 2\int e^xcos(x)dx = e^xcos(x)+e^xsin(x)$  

$\to \int e^x \cos(x)dx = \frac{e^x}{2}(\cos(x) + \sin(x)) + C$
