## Types of systems you may encounter for a $mxn$ matrix $ \underline{\underline{A}} $
 - #### Overdetermined: More equations (rows) than unknowns (columns); $ m>n  \leftarrow $ May not be solvable
- #### Determined: $m = n \leftarrow $ May not be solvable
- #### Undetermined: $ m<n \leftarrow $ No unique solution

## So, how many solutions do we have?
- #### No solution if there's a row of zeroes with a nonzero last column.

Example: 
$$ \begin{aligned}
&\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
2 & 1 & 1 & 0 \\
6 & 2 & 4 & 6           
\end{array}\right]
\xrightarrow{ R_2 - \frac{2}{3} \cdot R_1}
\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
0 & -\frac{1}{3} & \frac{1}{3} & -2 \\
6 & 2 & 4 & 6
\end{array}\right]
\xrightarrow{ 3 \cdot R_2} \\
&\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
0 & -1 & 1 & -6 \\
6 & 2 & 4 & 6
\end{array}\right]
\xrightarrow{ R_3 - 2R_1}
\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
0 & -1 & 1 & -6 \\
0 & -2 & 2 & 0
\end{array}\right] 
\xrightarrow{ R_3 - 2R_2} \\

&\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
0 & -1 & 1 & -6 \\
\color{red}{0} & \color{red}{0} & \color{red}{0} & \color{red}{12}
\end{array}\right]
\rightarrow \boxed{False \ Row: 0 \ne 12}
\end{aligned}
$$

- #### One solution if there are $ n $ pivots.
Example: 
$$ \begin{aligned}
&\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
2 & 1 & 1 & 0 \\
6 & 2 & 4 & 6           
\end{array}\right]
\xrightarrow{ R_2 - \frac{2}{3} \cdot R_1}
\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
0 & -\frac{1}{3} & \frac{1}{3} & -2 \\
6 & 2 & 4 & 6
\end{array}\right]
\xrightarrow{ 3 \cdot R_2} \\
&\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
0 & -1 & 1 & -6 \\
6 & 2 & 4 & 6
\end{array}\right]
\xrightarrow{ R_3 - 2R_1}
\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
0 & -1 & 1 & -6 \\
0 & -2 & 2 & 0
\end{array}\right] 
\xrightarrow{ R_3 - 2R_2} \\

&\left[\begin{array}{ccc|c}
3 & 2 & 1 & 3 \\
0 & -1 & 1 & -6 \\
0 & 0 & 0 & 12
\end{array}\right]
\rightarrow \boxed{False \ Row: 0 \ne 12}
\end{aligned}
$$