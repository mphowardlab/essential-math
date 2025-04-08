# Gauss–Jordan elimination
Example: Incompressible flow can be written analogous to an electrical circuit as:

$$
-ΔP = RQ
$$

where \( ΔP \) is the pressure change, \( R \) is the resistance to flow, and \( Q \) is the volumetric flow rate. 

We can represent the system of equations as follows:

$$
\begin{aligned}
{Q_1} + {Q_3} &= {Q_2}  &\xrightarrow{} \\
{Q_1} - {Q_2} + {Q_3} &= 0 &\\
20{Q_1} + 10{Q_2} &= 80 &\\
10{Q_2} + 25{Q_3} &= 90 &
\end{aligned}

\begin{aligned}
{Q_1} + {Q_3} - {Q_2} &= 0 \\
{Q_1} - {Q_2} + {Q_3} &= 0 \\
20{Q_1} + 10{Q_2}  &= 80 \\
10{Q_2} + 25{Q_3}  &= 90
\end{aligned}
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

Next, we apply row operations to simplify the matrix:

1. Add row 1 to row 2 and subtract 20 times row 1 from row 3:
   $$ 
   \xrightarrow{\text{Row operations: } R_2 + R_1 \rightarrow R_2, \, R_3 - 20R_1 \rightarrow R_3}
   $$

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 30 & -20 & 80 \\
0 & 10 & 25 & 90
\end{bmatrix}
$$

2. Swap rows 2 and 4:

$$
\xrightarrow{\text{Swap rows: } R_2 \leftrightarrow R_4}
$$

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 30 & -20 & 80 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

3. Subtract 3 times row 2 from row 3:

$$
\xrightarrow{R_3 - 3R_2 \rightarrow R_3}
$$

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 0 & -95 & -190 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

4. Divide row 3 by -95:

$$
\xrightarrow{R_3 \div -95 \rightarrow R_3}
$$

$$
\begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 10 & 25 & 90 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

5. Subtract row 3 from row 1 and subtract 25 times row 3 from row 2:

$$
\xrightarrow{\text{Row operations: } R_1 - R_3 \rightarrow R_1, \, R_2 - 25R_3 \rightarrow R_2}
$$

$$
\begin{bmatrix}
1 & -1 & 0 & -2 \\
0 & 10 & 0 & 40 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

6. Divide row 2 by 10:

$$
\xrightarrow{R_2 \div 10 \rightarrow R_2}
$$

$$
\begin{bmatrix}
1 & -1 & 0 & -2 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

7. Add row 2 to row 1:

$$
\xrightarrow{R_1 + R_2 \rightarrow R_1}
$$

$$
\begin{bmatrix}
1 & 0 & 0 & 2 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

The solution to the system is:

$$
Q_1 = 2, \quad Q_2 = 4, \quad Q_3 = 2
$$
---