# Determinants

For a square *n*x*n* matrix **A**, the determinant is denoted in a few different ways:

\begin{equation}
\det \vv{A} =|\vv{A}|=\begin{vmatrix}
A_{11} & \cdots & A_{1n} \\
\vdots &     & \vdots \\
A_{n1} & \cdots & A_{nn}
\end{vmatrix}
\end{equation}

The determinant is defined in a recursive way.For  $n=1$, $|\vv{A}|= A_{11}$
 ( the matrix element)
For $n \ge 2$, |\vv{A}|$ is defined as:

\begin{equation}
|\vv{A}|= \sum_{j=1}^n A_{ij} C_{ij} = \sum_{j=1}^n (-1)^{i+j} A_{ij} M_{ij}
\end{equation}

where *i* is any row of **A**, $C_{ij}$ is the *cofactor* of **A**:

\begin{equation}
C_{ij} = (-1)^{i+j} M_{ij},
\end{equation}

and $M_{ij}$ is the *minor* of **A**. The minor is the determinant of the matrix
obtained by removing row *i* and column *j* from **A**. Equivalently,

\begin{equation}
|\vv{A}| = \sum_{i=1}^n A_{ij} C_{ij} = \sum_{i=1}^n (-1)^{i+j} A_{ij} M_{ij}
\end{equation}

where now *j* is any column of **A**.

## 2x2 matrix

```{topic} 2x2 determinant
The determinant of a 2x2 matrix is:

The determinant of a 2x2 matrix is:
\begin{equation}
\begin{vmatrix}a & b \\ c & d\end{vmatrix} = a d - bc
\end{equation}
```

\begin{equation}
\begin{vmatrix}a & b \\ c & d\end{vmatrix} = a d - bc
\end{equation}
```

We will use the definition of the determinant to show this must be the case!
Let's use the first definition and pick the first row $i=1$:

\begin{align}
\begin{vmatrix}a & b \\ c & d\end{vmatrix}
&= (-1)^{1+1} \cdot A_{11} M_{11} + (-1)^{1+2} A_{12} M_{12} \\
&= a \begin{vmatrix} \phantom{a} & \phantom{b} \\ \phantom{c} & d \end{vmatrix} -
 b \begin{vmatrix} \phantom{a} & \phantom{b} \\ c & \phantom{d} \end{vmatrix} \\
&= a d - b c
\end{align}

## Larger matrices

The determinants of larger matrices can be computed by reducing them to sums
of 2x2 determinants. To do this quickly, it can be helpful to envision
$(-1)^{i+j}$ as a checkerboard of signs, then visualize the minors.

For example, to evaluate

\begin{equation}
\begin{vmatrix}1 & 3 & 0 \\ 2 & 6 & 4 \\ -1 & 0 & 2 \end{vmatrix}
\end{equation}

The sign matrix is:

\begin{equation}
\begin{bmatrix}+ & - & + \\ - & + & - \\ + & - & + \end{bmatrix}
\end{equation}

Even faster, start from the plus sign in the upper left corner, then alternate
until you get to your chosen row or column! Let's use row 3:

\begin{align}
|\vv{A}| &= + (-1) \cdot \begin{vmatrix} 3 & 0 \\ 6 & 4 \end{vmatrix} -
 0 \cdot \begin{vmatrix}1 & 0 \\ 2 & 4 \end{vmatrix} +
 2 \cdot \begin{vmatrix}1 & 3 \\ 2 & 6 \end{vmatrix} \\
 &= -(3 \cdot 4 - 0 \cdot 6) + 2(1 \cdot 6 - 2 \cdot 3) \\
 &= -12
\end{align}

Note that the same result could be achieved using any row or column. For
example, column 3 gives:

$$ |A|= +(0)*\begin{bmatrix}2 & 6 \\ -1 & 0 \end{bmatrix} -(4)*\begin{bmatrix}1 & 3 \\ -1 & 0 \end{bmatrix}+(2)*\begin{bmatrix}1 & 3 \\ 2 & 6 \end{bmatrix} 
\\
=-4*(0+3)+2*(6-6)= -12$$

It's usually a good idea to expand along the row or column with the most zeros!
For example, let's evaluate

\begin{align}
\begin{vmatrix}1 & -2 & 0 & 0 \\ 4 & 3 & 5 & 0 \\ 0 &2 & 7 & 5 \\ 0 & 0 & 2 & 0 \end{vmatrix}
&= -2 \cdot \begin{vmatrix}1 & -2 & 0 \\ 4 & 3 & 0 \\ 0 &2 & 5 \end{vmatrix} \\
&= -2 \cdot 5 \cdot \begin{vmatrix}1 & -2 \\ 4 & 3 \end{vmatrix} \\
&= -10 (3+8) \\
&= -110
\end{align}

where we chose row 4, then column 3 to do the calculation faster!
