# Gauss–Jordan elimination

To solve a system of linear equations like

\begin{align}
2x_1 + 5x_2 &= 2\\
13x_2 &= -26
\end{align}

Note that the second equation is easily solved for $x_2 = -2$, which can be
substituted in the first equation to give $x_1 = (2-5x_2)/2 = 6$. If we can
bring systems so that one variable is isolated, we can work backwards to solve
the others! How do we do this systematically for equations?

```{topic} Elementary operations

1. Swap the order of equations
2. Multiply one equation by a nonzero constant
3. Add one equation to another
```

Because of 2 and 3, we can also add a multiple of one equation to another.

```{topic} Row equivalency
Two systems of linear equations are row equivalent if one can be obtained from
another by elementary operations. Row-equivalent systems of linear equations
have the same set of solutions.
```

For example, suppose we instead started with the equations

\begin{align}
2x_1 + 5x_2 &= 2 \\
-4x_1 + 3x_2 &= -30
\end{align}

Adding twice the first equation to the second equation gives $13 x_2 = -26$,
from which we were able solve before!

This process can be tedious, particularly when there are more variables and
equations. Matrices provide a systematic approach to both performing elementary
operations to isolate variables, as well as to carry out subsequent
substitution. This entire procedure is called Gauss-Jordan elimination with
backsubstitution.

1. Rewrite the equations as $\vv{A}\vv{x} = \vv{b}$ using a matrix and vectors

   \begin{equation}
   \begin{bmatrix}2 5 \\ -4 3\end{bmatrix}
   \begin{bmatrix}x_1 \\ x_2\end{bmatrix} =
   \begin{bmatrix}2 \\ -30\end{bmatrix}
   \end{equation}

2. Form the "augmented" matrix $[\vv{A} \vv{b}]$

   \begin{equation}
   \mathbf{A} = \begin{bmatrix} 2 & 5 & 2\\ -4 & 3 & -30\end{bmatrix}
   \end{equation}

3. Perform elementary operations on rows to create "pivot" points in each row.
   The goal is to get a number on the *diagonals* and zeros below. It is OK to
   have a zero on the diagonal if there are no nonzero values underneath it.

   \begin{equation}
   \begin{bmatrix} 2 & 5 & 2 \\ -4 & 3 & -30 \end{bmatrix}
   \begin{matrix}\vphantom{R_1} \\ +2 R_1 \end{matrix}
   \to \begin{bmatrix} 2 & 5 & 2 \\ 0 & 13 & -26 \end{bmatrix}
   \end{equation}

   Here, we noted that we added twice Row 1 to Row 2 to eliminate the 4 under
   the first pivot point 2.

4. When you reach the bottom row, check there are no rows of zeros with a
   nonzero last column. This would be equivalent to a false equation
   (like $0=1$), meaning there is no solution and no further work is needed.

5. Work back up to turn pivot points into ones and get zeros above in each
   column

   \begin{align}
   \begin{bmatrix} 2 & 5 & 2 \\ 0 & 13 & -26 \end{bmatrix}
   \begin{matrix}\vphantom{R_1} \\ \div 13 \end{matrix}
   &\to \begin{bmatrix} 2 & 5 & 2 \\ 0 & 1 & -2 \end{bmatrix}
   \begin{matrix}-5 R_2 \\ \vphantom{R_2}\end{matrix} \\
   &\to \begin{bmatrix} 2 & 0 & 12 \\ 0 & 1 & -2 \end{bmatrix}
   \begin{matrix}\div 2 \\ \vphantom{R_2}\end{matrix} \\
   &\to \begin{bmatrix} 1 & 0 & 6 \\ 0 & 1 & -2 \end{bmatrix}
   \end{align}

6. The solution comes from reexpressing the augmented matrix as
   $\vv{A} \vv{x} = \vv{b}$.

   \begin{equation}
   \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
   \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} =
   \begin{bmatrix} 6 \\ -2 \end{bmatrix}
   \end{equation}

   Or, $x_1 = 6$ and $x_2 = -2$.

````{example} Pump circuit

Incompressible flow can be written analogous to an electrical circuit as

\begin{equation}
-\Delta P = RQ
\end{equation}

where $\Delta P$ is the pressure change, *R* is the resistance, and *Q* is the
volumetric flow rate. For the following pump "circuit":

```{image} ./_images/FluidCircuitImage.png
:alt: Fluid System Modeled as Circuit
:align: center
:width: 500px
```

The pressure and mass balances for the nodes and loop give:

\begin{align}
Q_1 &+ Q_3 = Q_2 \\
Q_2 &= Q_1 + Q_3 \\
80 &= 10Q_2 + 20Q_1 \\
90 &= 25Q_3 + 10Q_2
\end{align}

Find $Q_1$, $Q_2$, and $Q_3$.

---

First, rearrange the equations into consistent linear form:

\begin{align}
Q_1 - Q_2 + Q_3 &= 0 \\
Q_1 - Q_2 + Q_3 &= 0 \\
20Q_1 + 10Q_2 + 0Q_3 &= 80 \\
0Q_1 + 10Q_2 + 25Q_3 &= 90
\end{align}

Then, rewrite using matrix representation:

\begin{equation}
\begin{bmatrix}
1 & -1 & 1 \\
1 & -1 & 1 \\
20 & 10 & 0 \\
0 & 10 & 25
\end{bmatrix}
\begin{bmatrix}
Q_1 \\ Q_2 \\ Q_3
\end{bmatrix}
= \begin{bmatrix}
0 \\ 0 \\ 80 \\ 90
\end{bmatrix}
\end{equation}

Now, perform Gauss-Jordan elimination steps to solve for the unknown flow rates.
We form the augmented matrix, then use Row 1 to eliminate values in Rows 2 and
3:

\begin{equation}
\begin{bmatrix}
1 & -1 & 1 & 0 \\
-1 & 1 & -1 & 0 \\
20 & 10 & 0 & 80 \\
0 & 10 & 25 & 90
\end{bmatrix}
\begin{matrix}
\vphantom{R_1} \\ + R_1 \\ -20 R_1 \\ \vphantom{R_1}
\end{matrix}
\to
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 30 & -20 & 80 \\
0 & 10 & 25 & 90
\end{bmatrix}
\end{equation}

Row 2 is all zeros because it was a redundant equation to Row 1. Swap Rows 2 and
4, then use the new Row 2 to eliminate value in Row 3:

\begin{equation}
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 30 & -20 & 80 \\
0 & 0 & 0 & 0
\end{bmatrix}
\begin{matrix}
\vphantom{R_1} \\ \vphantom{R_1} \\ -3 R_2 \\ \vphantom{R_1}
\end{matrix}
\to \begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 0 & -95 & -190 \\
0 & 0 & 0 & 0
\end{bmatrix}
\end{equation}

Normalize Row 3 (divide by -95), then eliminate values above in Column 3:

\begin{equation}
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
\begin{matrix}
- R_3 \\ -25 R_3 \\ \vphantom{R_1} \\ \vphantom{R_1}
\end{matrix}
\to
\begin{bmatrix}
1 & -1 & 0 & -2 \\
0 & 10 & 0 & 40 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
\end{equation}

Normalize Row 2 (divide by 10), then eliminate values above in Column 2:

\begin{equation}
\begin{bmatrix}
1 & -1 & 0 & -2 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
\begin{matrix}
+ R_2 \\ \vphantom{R_1} \\ \vphantom{R_1} \\ \vphantom{R_1}
\end{matrix}
\to
\begin{bmatrix}
1 & 0 & 0 & 2 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
\end{equation}

Turning back into an equivalent system of equations gives the final solution,
$Q_1 = 2$, $Q_2 = 4$, and $Q_3 = 2$.
````

## Skill builder problems

1. Solve using Gauss-Jordan elimination

   \begin{align}
   5 x_1 - 2 x_2 &= 20.9 \\
   -x_1 + 4x_2 &= -19.3
   \end{align}

   ```{solution}
   Form the augmented matrix and perform row reduction:

   \begin{align}
   \begin{bmatrix} 5 & -2 & 20.9 \\ -1 & 4 & -19.3 \end{bmatrix}
   \begin{matrix} {\rm swap} \\ \vphantom{R_2}\end{matrix}
   &\to \begin{bmatrix} -1 & 4 & -19.3 \\ 5 & -2 & 20.9\end{bmatrix}
   \begin{matrix} \times -1 \\ \vphantom{R_2}\end{matrix} \\
   &\to \begin{bmatrix} 1 & -4 & 19.3 \\ 5 & -2 & 20.9\end{bmatrix}
   \begin{matrix} \vphantom{R_1} \\ -5 R_1 \end{matrix} \\
   &\to \begin{bmatrix} 1 & -4 & 19.3 \\ 0 & 18 & -75.6\end{bmatrix}
   \begin{matrix} \vphantom{R_1} \\ \div 18 \end{matrix} \\
   &\to \begin{bmatrix} 1 & -4 & 19.3 \\ 0 & 1 & -4.2\end{bmatrix}
   \begin{matrix} +4 R_2 \\ \vphantom{R_2} \end{matrix} \\
   &\to \begin{bmatrix} 1 & 0 & 2.5 \\ 0 & 1 & -4.2\end{bmatrix}
   \end{align}

   so $x_1 = 2.5$ and $x_2 = -4.2$.
   ```

2. Solve using Gauss-Jordan elimination

   \begin{align}
   x_1 + 4 x_2 = 8 \\
   2 x_1 + 8 x_2 = 17
   \end{align}

   ```{solution}
   \begin{align}
   \begin{bmatrix} 1 & 4 & 8 \\ 2 & 8 & 17 \end{bmatrix}
   \begin{matrix} \vphantom{R_1} \\ -2 R_1\end{matrix}
   &\to \begin{bmatrix} 1 & 4 & 8 \\ 0 & 0 & 1\end{bmatrix}
   \end{align}

   The equations do not have a solution because the last row is false.
   ```

3. Solve using Gauss-Jordan elimination

   \begin{align}
   x_1 + x_2 + x_2 = 2 \\
   4x_2 + 6 x_3 = -12 \\
   x_1 + x_2 + x_3 = 2
   \end{align}

   ```{solution}
   \begin{align}
   \begin{bmatrix}
   0 & 1 & 1 & -2 \\
   0 & 4 & 6 & -12 \\
   1 & 1 & 1 & 2
   \end{bmatrix}
   \begin{matrix}
   \vphantom{R_1} \\ \rm shuffle \\ \vphantom{R_3}
   \end{matrix}
   &\to \begin{bmatrix}
   1 & 1 & 1 & 2 \\
   0 & 1 & 1 & -2 \\
   0 & 4 & 6 & -12
   \end{bmatrix}
   \begin{matrix}
   \vphantom{R_1} \\ \vphantom{R_2} \\ \ -4 R_2
   \end{matrix} \\
   &\to \begin{bmatrix}
   1 & 1 & 1 & 2 \\
   0 & 1 & 1 & -2 \\
   0 & 0 & 2 & -4
   \end{bmatrix}
   \begin{matrix}
   \vphantom{R_1} \\ \vphantom{R_2} \\ \div 2
   \end{matrix} \\
   &\to \begin{bmatrix}
   1 & 1 & 1 & 2 \\
   0 & 1 & 1 & -2 \\
   0 & 0 & 1 & -2
   \end{bmatrix}
   \begin{matrix} -R_3 \\ -R_3 \\ \vphantom{R_3} \end{matrix} \\
   &\to \begin{bmatrix}
   1 & 1 & 0 & 4 \\
   0 & 1 & 0 & 0 \\
   0 & 0 & 1 & -2
   \end{bmatrix}
   \begin{matrix}
   -R_2 \\ \vphantom{R_2} \\ \vphantom{R_3}
   \end{matrix} \\
   &\to \begin{bmatrix}
   1 & 0 & 0 & 4 \\
   0 & 1 & 0 & 0 \\
   0 & 0 & 1 & -2
   \end{bmatrix}
   \end{align}

   so $x_1 = 4$, $x_2 = 0$, and $x_3 = -2$.
   ```
