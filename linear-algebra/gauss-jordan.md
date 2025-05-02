# Gauss–Jordan elimination

Gauss(-Jordan) Elimination with Back Substitution

\begin{align}
Solve 2x_1 + 5x_2 = 2 \to x_1 = 1/2(2-5x_2) = 6 \\
13x_2 = -26 \to x_2 = -2   \underline{Back Substitution} \\
\end{align}

\underline{Idea}: If we can bring systems so that one variable is isolated, we 
can work backwards to solve the others! How do we do this?

Elementary operations: \begin{align} 
-Swap equations order
-Multiply one equation by a nonzero constant
-Add one equation to another
\end{align}
Two linear systems are \underline{row-equivalent} if one can be obtained from 
another by elementary operations.
 *Row-equivalent linear systems have the \underline{same} set of solutions

Solve 
\begin{align}
2x_1 + 5x_2 = 2 \to 2x_1 + 5x_2 = 2 \\
-4x_1 + 3x_2 = -30 \to -4x_1 + 3x_2 = -30 \\
+2(2x_1 + 5x_2 = 2) \to 13x_2 = -26 ✔️ \\
\end{align}

How do we do this systematically? Matrices!
1. Form the "augmented" matrix 
\begin{equation}
\mathbf{A} = \begin{bmatrix} 2 & 5 \\ -4 & 3 \end{bmatrix} \qquad
\mathbf{b} = \begin{bmatrix} 2 \\ -30 \end{bmatrix}
\end{equation}
2. Perform elementary operations on rows on "pivot" points in each row.
The goal is to get a number in $a_11$, $a_22$, $a_33$, etc. and zeros \underline{below}
in each column.
\begin{equation}
\begin{bmatrix} 2 & 5 & 2 \\ \box{-4} & 3 & -30 \end{bmatrix} \qquad
\begin{bmatrix} 2 & 5 & 2 \\ 0 & 13 & -26 \end{bmatrix} + 2 Row 1
\end{equation}

3. Check there are no rows of zeros with a nonzero last column. (False equation)
If yes, \underline{no solution}.

4. Work back up to turn pivots into 1 and get zeros \underline{above} in each
column
\begin{equation}
\begin{bmatrix} 2 & \box{5} & 2 \\ 0 & 1 & -2 \end{bmatrix} Divide by 13 \to
\begin{bmatrix} 2 & 0 & 12 \\ 0 & 1 & -2 \end{bmatrix} -5 Row 2 \to 
\begin{bmatrix} 1 & 0 & 6 \\ 0 & 1 & -2 \end{bmatrix} Divide by 2

5. The solution comes from reexpressing as \underline{\underline{A}} \underline{x} = \underline{b}
\begin{equation}
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \qquad
 \begin{bmatrix} $x_1$ \\ $x_2$ \end{bmatrix}
= \begin{bmatrix} 6 \\ -2 \end{bmatrix} \to x_1 = 6 & x_2 = -2
\end{equation}

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
