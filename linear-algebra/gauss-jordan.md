# Gauss–Jordan elimination
Example: Incompressible flow can be written analogous to an electrical circuit as:

$$
 -ΔP = RQ     
$$

where \( ΔP \) is the pressure change, \( R \) is the resistance to flow, and \( Q \) is the volumetric flow rate. 

```{image} ./_images/Gauss Jordan Ex.jpg
:alt: Fluid System Modeled as Circuit
```

We can represent the system of equations as follows:

$$
\begin{align*}
\begin{aligned}
Q_1 + Q_3 &= Q_2 \\
Q_1 - Q_2 + Q_3 &= 0 \\
20Q_1 + 10Q_2 &= 80 \\
10Q_2 + 25Q_3 &= 90
\end{aligned}
\quad
\xrightarrow{\text{rearrange}}
\quad
\begin{aligned}
Q_1 + Q_3 - Q_2 &= 0 \\
Q_1 - Q_2 + Q_3 &= 0 \\
20Q_1 + 10Q_2 &= 80 \\
10Q_2 + 25Q_3 &= 90
\end{aligned}
\end{align*}
$$
These equations can be written in matrix form as:

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
-1 & 1 & -1 & 0 \\
20 & 10 & 0 & 80 \\
0 & 10 & 25 & 90
\end{bmatrix}
$$

Next we apply row operations to simplify the matrix

 Gauss-Jordan Elimination Steps

Start with the augmented matrix:

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
-1 & 1 & -1 & 0 \\
0 & 30 & -20 & 80 \\
0 & 10 & 25 & 90
\end{bmatrix}
$$

 Step 1: Row Operations
Elimination of a redundant row and removal of first pivot column
$
R_2 + R_1 \rightarrow R_2, \quad R_3 - 20R_1 \rightarrow R_3
$

Resulting matrix:

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 30 & -20 & 80 \\
0 & 10 & 25 & 90
\end{bmatrix}
$$

 Step 2: Swap Rows
$$
R_2 \leftrightarrow R_4
$$

Matrix after swapping:

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 30 & -20 & 80 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

 Step 3: Eliminate below diagonal

$$
R_3 - 3R_2 \rightarrow R_3
$$

Resulting matrix:

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 0 & -95 & -190 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

 Step 4: Simplify Row 3
$$
R_3 \div -95 \rightarrow R_3
$$

Matrix after division:

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

 Step 5: Eliminate the Third Column

$$
R_1 - R_3 \rightarrow R_1, \quad R_2 - 25R_3 \rightarrow R_2
$$

Resulting matrix:

$$
\begin{bmatrix}
1 & -1 & 0 & -2 \\
0 & 10 & 0 & 40 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

 Step 6: Simplify Row 2
$$
R_2 \div 10 \rightarrow R_2
$$

Matrix after division:

$$
\begin{bmatrix}
1 & -1 & 0 & -2 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

 Step 7: Final Elimination
$$
R_1 + R_2 \rightarrow R_1
$$

Final matrix:

$$
\begin{bmatrix}
1 & 0 & 0 & 2 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

 Final Solution:

The solution to the system is:

$$
Q_1 = 2, \quad Q_2 = 4, \quad Q_3 = 2
$$