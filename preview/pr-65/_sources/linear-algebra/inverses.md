# Matrix inversion
Gauss-Jordan elimination works well for solving  $Ax = b$  but the process needs to be repeated for every new b.

Is there an alternative if we need to solve  Ax = b  for many different b?

Matrix inverse. For a square (nxn) matrix A, the inverse $A^{-1}$ satisfies

\[
$A$ $A^{-1}$ = $A^{-1}$ $A$ = I
\] where I is the nxn identity matrix 


\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}


A matrix is "nonsingular" if it has an inverse, and "singular" if it does not.


If the inverse exists, it is unique and can be used to solve $Ax = b$.

$$
Ax = b 
\xrightarrow{} (A^{-1}A)x = A^{-1}b 
\xrightarrow{} \boxed{x = A^{-1}b}
$$

(*Note: \(Ib = b\) if the multiplication is defined.*)

**Two questions:**

1. How do we know if \( A^{-1} \) exists (i.e., \( A \) is nonsingular)?  
   ⇒ Determinants

2. How do we compute \( A^{-1} \)?  
   ⇒ Gauss-Jordan Elimination





2: Inverse

Finding the inverse of a is usually hard. There is a general definition using coafactors that we will not cover becuase it is hard to apply. There are also serveral numeric techniques, but we will not cover them because they are computationally intensive. Instead we will cover two options:

Inverse of a $2 \times 2$ Matrix

For a $2 \times 2$ matrix  
$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix},
$$  
the inverse is given by  
$$
A^{-1} = \frac{1}{\lvert A \rvert} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
$$  
*(Flip $a$ and $d$, change the signs of $b$ and $c$)*


---
 Example:

Let  
$
A = \begin{bmatrix} 3 & 1 \\ 2 & 4 \end{bmatrix}
$

Compute the determinant:  
$
|A| = (3)(4) - (2)(1) = 12 - 2 = 10
$

So the inverse is:  
$
A^{-1} = \frac{1}{10} \begin{bmatrix} 4 & -1 \\ -2 & 3 \end{bmatrix} 
= \begin{bmatrix} 0.4 & -0.1 \\ -0.2 & 0.3 \end{bmatrix}
$

For larger matrices, use the **Gauss–Jordan method** to solve  
$
AA^{-1} = I \quad \text{(Generalization of } Ax = b \text{)}
$

- Form augmented matrix  
  $
  \left[ A \,\middle|\, I \right] \quad \text{(}n \times 2n\text{)}
  $

- Perform row operations to bring left side to $I$, so  
  $
  \left[ I \,\middle|\, A^{-1} \right]
  $

- It may be helpful to check $|A| \neq 0$ first, in case $A$ is not invertible.