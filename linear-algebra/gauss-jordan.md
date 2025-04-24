## Types of systems you may encounter for a $mxn$ matrix $ \underline{\underline{A}} $
 - **Overdetermined**: More equations (rows) than unknowns (columns); $ m>n  \leftarrow $ **May not be solvable**
- **Determined**: $m = n \leftarrow $ **May not be solvable**
- **Underetermined**: $ m<n \leftarrow $ **No unique solution**

## So, how many solutions do we have?
- **No solution if there's a row of zeroes with a nonzero last column.** 

```{math}
Example

\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix} 


