# Integration using substitution
## Find General Solutions for:
(a) $y' = (x+2)ln(x)$

  $y = \int \(x+2)\ln(x) \ dx$  
    
  $u = ln(x)$ $dv = (x+2)dx$
  $du = \frac{1}{x}dx$  $v = \frac{x^2}{2} + 2x$
    
 $=(\frac{x^2}{2} + 2x)ln(x)- \int (\frac{x^2}{2} + 2x) \frac{1}{x}\ dx$    
 <br> $=(\frac{x^2}{2} + 2x)ln(x)-\frac{x^2}{4}-2x+C$  

(b) $y' = x^5sin(x)$<br>

  $y = \int x^5sin(x) \ dx$

  $u: \ x^5 \ 5x^4 \ 20x^3 \ 60x^2 \ 120x \ 120 \ 0$ <br>
  $dv: \ sin(x) \\ -cos(x) \\ -sin(x) \\ cos(x) \\ sin(x) \\ -cos(x) \\ -sin(x)$  
  <br>
  $=-x^5cos(x)+5x^4sin(x)+20x^3cos(x)-60x^2sin(x)-120xcos(x)+120sin(x)+C$  
  $=(-x^5+20x^3-120x)cos(x)+(5x^4-60x^2+120)sin(x)+C$

  
