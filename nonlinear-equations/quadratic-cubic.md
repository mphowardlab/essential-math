# Quadratic and cubic polynomials

A polynomial of degree $n$

\begin{equation}
a_n x^n + \cdots + a_1 x_1 + a_0 = 0
\end{equation}

has $n$ roots, which may be real or complex. Real roots may be distinct or
repeated. Complex roots always come in *conjugate pairs*, $a \pm bi$, where
*a* is called the real part, $\pm b$ is called the imaginary part, and
$i = \sqrt{-1}$ is the imaginary unit.

## Quadratic polynomials

Quadratic polynomials can have three types of roots:

- Two real roots
- One (repeated) root
- Two complex roots

Graphically, two real roots occur as two intersections of a parabola with the
*y*-axis. For example, the roots of $x^2 - 1 = 0$ occur at $x = \pm 1$:

```{image} ./_images/Two_Real_Solutions.png
:alt: Two Real Solutions
:align: center
:width: 200px
```

One repeated root occurs as a single point of a parabola (its minimum or
maximum) touching the *y*-axis. For example, the root of $(x-1)^2 = 0$ occurs at
$x = 1$:

```{image} ./_images/One_Duplicate_Solution.png
:alt: One Duplicate Solution
:align: center
:width: 200px
```

Complex roots do not appear as intersections on a graph. For example, the roots
of $x^2 + 1 = 0$ are $x = \pm i$:

```{image} ./_images/Complex_Solution.png
:alt: Complex Solution
:align: center
:width: 200px
```

There are several strategies that can be used to find roots of quadratic
polynomials:

- Factoring

  \begin{equation}
  x^2 + 8 x - 9 = (x+9)(x-1) = 0
  \end{equation}

  This equation will be true if either factor is zero, so the roots are
  $x = -9$ or $x = 1$.

- Completing the square

  \begin{align}
  x^2 + 8x &= 9 \\
  x^2 + 8x + 16 &= 9 + 16 \\
  (x+4)^2 &= 25 \\
  x + 4 &= \pm \sqrt{25}
  x = -4 \pm 5
  \end{align}

  This gives the same roots!

- Quadratic formula

  ```{topic} Quadratic formula
  The roots of the general quadratic polynomial $ax^2 + bx + c = 0$ are

  \begin{equation}
  x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
  \end{equation}

  ```

  For the polynomial $x^2 + 8x - 9 = 0$,

  \begin{align}
  x &= \frac{-8 \pm \sqrt{8^2 - 4 \cdot 1 \cdot -9}}{2 \cdot 1} \\
    &= \frac{-8 \pm \sqrt{100}}{2} \\
    &= -4 \pm 5
  \end{align}

```{example} Box optimization
An open-top box will be made from an 8.5" x 11" piece of paper by cutting out a
square from each corner and folding the flaps. What size square should be cut
to make the biggest box?

---

The volume of the box that will be obtained by cutting a square of edge length
*x* is:

\begin{equation}
V(x) = (8.5 - 2x)(11-2x)x = 4x^3 - 39x^2 + 93.5x
\end{equation}

The volume will be at an extremum with respect to *x* if $V'(x) = 0$:

\begin{equation}
V'(x) = 12x^2 - 78x + 93.5 = 0
\end{equation}

The roots of this quadratic polynomial are:

\begin{align}
x &= \frac{78 \pm \sqrt{(-78)^2 - 4 \cdot 12 \cdot -93.5}}{2 \cdot 12} \\
  &= 1.59\, 4.91
\end{align}

Only the first root, 1.59", is physical because there is not enough material
to remove 4.91" from two corners!
```

```{example} Complex roots
Find the roots of

\begin{equation}
x^2 - 10x + 34 = 0
\end{equation}

---

I will use the technique of completing the square:

\begin{align}
x^2 - 10x &= -34 \\
x^2 - 10x + 25 &= -34 + 25 \\
(x - 5)^2 &= -9 \\
x - 5 &= \pm \sqrt{-9} \\
x &= 5 \pm 3\sqrt{-1} \\
x &= 5 \pm 3i
\end{align}
```

## Cubic (and higher) polynomials

General formulas for roots of cubic and quartic polynomials are known but
complicated. No such formula exists for higher-order polynomials. In these
cases, numerical methods are needed!

## Skill builder problems

Solve all roots to 3 significant figures.

1. $x^2 + 2x + 1 = 0$, by factoring.

   ```{solution}
   \begin{align}
   x^2 + 2x + 1 &= 0 \\
   (x + 1)^2 &= 0 \\
   x &= -1
   \end{align}
   ```

2. $x^2 - 8x + 5 = 0$, by completing the square.

   ```{solution}
   \begin{align}
   x^2 - 8x &= -5 \\
   x^2 - 8x + 16 &= -5 + 16 \\
   (x - 4)^2 &= 11 \\
   x &= 4 \pm \sqrt{11} \\
   x &\approx 0.683,\, 7.32
   \end{align}
   ```

3. $x^2 - 7x + 12 = 0$, by quadratic formula.

   ```{solution}
   \begin{align}
   x &= \frac{7 \pm \sqrt{(-7)^2 - 4 \cdot 2 \cdot 12}}{2 \cdot 2} \\
   x &= \frac{7 \pm \sqrt{49 - 96}}{4} \\
   x &= \frac{7 \pm \sqrt{-47}}{4} \\
   x &= \frac{7}{4} \pm \frac{\sqrt{47}}{4}i \\
   x &\approx 1.75 \pm 1.71i
   \end{align}
   ```
