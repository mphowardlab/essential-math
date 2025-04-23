# Partial fraction decomposition
**Skill Builder**\
Obtain general solutions to

**a.** $\displaystyle y' = \frac{2x+16}{x^2-16}$

$y = \int\frac{2x+16}{x^2-16}dx = \int(-\frac{1}{x+4}+\frac{3}{x-4})dx = -\ln(x+4)+3\ln(x-4)+c$

$\frac{2x+16}{(x+4)(x-4)} = \frac{A1}{x+4} + \frac{A2}{x-4} = -\frac{1}{x+4} + \frac{3}{x-4}$

Cover up:\
$A1 = \frac{2(-4)+16}{-4-4} = -1$\
$A2 = \frac{2(4)+16}{4+4} = 3$

**b.** $\displaystyle y' = \frac{8}{x^2+2x}$

$y = \int\frac{8}{x^2+2x}dx = \int(\frac{4}{x} - \frac{4}{x+2})dx = 4\ln(x) - 4\ln(x+2) +c$

$\frac{8}{x(x+2)} = \frac{A1}{x} + \frac{A2}{x+2} = \frac{4}{x} - \frac{4}{x+2}$

Cover up:\
$A1 = \frac{8}{0+2} = 4$\
$A2 = \frac{8}{-2} = -4$

**c.** $\displaystyle y' = \frac{5+12x^2-x^3}{x^2(x-9)(x-1)}$

$y = \int\frac{5+12x^2-x^3}{(x^2)(x-9)(x-1)}dx = \int(\frac{50}{81}\frac{1}{x} + \frac{5}{9}\frac{1}{x^2} + \frac{31}{81}\frac{1}{x-9} - \frac{2}{x-1})dx = \frac{50}{81}\ln(x) - \frac{5}{9}\frac{1}{x} + \frac{31}{81}\ln(x-5) - 2\ln(x-1) + c$

$\frac{5+12x^2-x^3}{x^2(x-9)(x-1)} = \frac{A1}{x} + \frac{A2}{x^2} + \frac{A3}{x-9} + \frac{A4}{x-1} = \frac{50}{81}\frac{1}{x} + \frac{5}{9}\frac{1}{x^2} + \frac{31}{81}\frac{1}{x-9} - \frac{2}{x-1}$

Cover up:\
$A2 = \frac{5+12(0^2)-0^3}{(0-9)(0-1)} = \frac{5}{9}$\
$A3 = \frac{5+12(9^2)-9^3}{9^2(9-1)} = \frac{31}{81}$\
$A4 = \frac{5+12(1^2)-1^3}{1^2(1-9)} = -2$

$5+12x^2-x^3 = A1x(x-9)(x-1) + \frac{5}{9}(x-9)(x-1) + \frac{31}{81}x^2(x-1) - 2x^2(x-9)$\
Plug in $x = -1$:\
$5+12(-1)^2-(-1)^3 = A1(-1)(-1-9)(-1-1) + \frac{5}{9}(-1-9)(-1-1) + \frac{31}{81}(-1)^2(-1-1) -2(-1)^2(-1-9)$\
$18 = -20A1 + \frac{100}{9} - \frac{62}{81} + 20$\
$A1 = \frac{50}{81}$