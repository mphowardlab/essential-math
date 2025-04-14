# Laplace transform

The Laplace transform is used in signals and controls.
It is also a way to solve **differential** equations using **algebra**. 
It is defined as: 
````{prf:theorem} Laplace Transform
:label: my-theorem
$$
\F\left\( s \right\) = ** L \left\[\ f \left\( t \right\) \right\] ** = \int_0^\infty \e^-st \f\left\( t \right\)
$$






The inverse Laplace transform of F(s) is \f\left\( t \right\)!

Many Laplace transforms are already known, but can be computed using integration by parts.

````{prf:example}


```{math}
$$
\f\left\( t \right\) = t \to L \left\[ f \right\] = \int_0^\infty \e^-st \f\left\( t \right\) = -\frac{te^-st}{s} \right\| _{0}{\infty} - \int_0^\infty \frac{e^-st}{s} \dt\
u = t   dv = e^-st\dt
du = dt v = \fract{-1}{s} \e^-st                \fract{-e^-st}{s^2} \right| _{0}^{\infty} = \left\[ \0 - (\frac{-1}{s^2}) \right\] = \frac{1}{s^2}
$$

$$
\f\left\( t \right\) = y' \left\( t \right\) \to L \left\[ y' \right\] = \int_0^\infty \e^-st \y' \left\( t \right\) 
                                            = -\frac{te^-st}{s} \right\| _{0}{\infty} - \int_0^\infty \ y \left\( frac{e^-st}{s} \right\) \dt\
 u = e^-st  dv = y' dt                      = \left\[ 0 - y \left\( 0 \right\) \right\] + s \int_0^\infty \e^-st y \dt\
 du = -se^-st   v = y                       = s L \left\[ f \right\] - y \left\( 0 \right\)
                                            = s Y \left\( s \right\) - y \left\( 0 \right\)
```
````

Reminder from integration by parts lecture

    F \left\( s \right\) = L \left\[ f \left\( t \right\) \right\] = \int_0^\infty \e^-st \f\left\( t \right\) dt











Remember from integration by parts lecture




These can be looked up in tables
