# Matrices and vectors

Matrices and vectors are convenient tools for representing linear systems with
compact notation that can be processed by a computer.

````{example} Flash distillation
You are analyzing the molar flow rates resulting from a flash distillation
process.

```{image} ./_images/flash.svg
:alt: Flash distillation process
```

The steady-state mole balances for the total process and component A are

\begin{align}
10 &= \dot L + \dot V \\
5 &= 0.3 \dot L + 0.8 \dot V
\end{align}

These equations can equivalently be represented using matrices and vectors as

\begin{equation}
\begin{bmatrix} 10 \\ 5 \end{bmatrix} =
\begin{bmatrix} 1 & 1 \\ 0.3 & 0.8 \end{bmatrix}
\begin{bmatrix} \dot L \\ \dot V \end{bmatrix}
\end{equation}

We will learn why these representations are equivalent shortly. Importantly,
because our mole balances can be written in this way, they are a *system of
linear equations* that can be solved using techniques of linear algebra.
````

## Definition

A *matrix* is a rectangular array of quantities, which we call its *elements*,
that are laid out in horizontal *rows* and vertical *columns*. We will typically
denote a matrix by a bold, capital letter such as **A**.

\begin{equation}
\vv{A} = \begin{bmatrix} 0.3 & 1 & -5 \\ 0 & -0.2 & 16 \end{bmatrix}
\end{equation}

An *m* x *n* matrix has *m* rows and *n* columns. **A** is a 2 x 3 matrix. We
will sometimes refer to elements of a matrix by their row and column

\begin{equation}
\vv{A} = \begin{bmatrix} A_{11} & A_{12} &
A_{13} \\ A_{21} & A_{22} & A_{23} \end{bmatrix}
\end{equation}

For example, $A_{12} = 1$ and $A_{23} = 16$ for **A** given above.

A *vector* is a matrix with either one column (a *column vector*) or one row (a
*row vector*). We will typically denote a vector by a bold, lowercase letter
such as **b**

\begin{equation}
\vv{b} = \begin{bmatrix} 1 \\ 2 \end{bmatrix} \qquad
\vv{c} = \begin{bmatrix} -1 & 0 & 1 \end{bmatrix}
\end{equation}

**b** is a 2-element column vector that is also a 2 x 1 matrix, while **c** is a
3-element row vector that is also a 1 x 3 matrix. When referring to elements of
a vector, it typical to only use one index

\begin{equation}
\vv{b} = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix} \qquad
\vv{c} = \begin{bmatrix} c_1 & c_2 & c_3 \end{bmatrix}
\end{equation}

For **b** and **c** given above, $b_2 = 2$ and $c_2 = 0$. Note that it becomes
ambiguous whether you have a column vector or a row vector if you are refering
to elements in this way.

There are some other types of "special" matrices.

- *Square matrix*: a matrix with equal numbers of rows and columns (an *n* x *n*
  matrix).

  \begin{equation}
  \begin{bmatrix} 1 & 2 \\ 4 & 3 \end{bmatrix}
  \end{equation}

- *Diagonal matrix*: a square matrix with nonzero entries only for the elements
  on the diagonal, $A_{ii}$ for $i = 1, ..., n$.

  \begin{equation}
  \begin{bmatrix} 1 & 0 \\ 0 & 3 \end{bmatrix}
  \end{equation}

- *Upper triangular matrix*: a square matrix with nonzero entries only on the
  diagonal or above, $A_{ij}$ for $i = 1, ..., n$ and $j \ge i$. on the
  diagonal, $A_{ii}$.

  \begin{equation}
  \begin{bmatrix} 1 & 2 \\ 0 & 3 \end{bmatrix}
  \end{equation}

- *Lower triangular matrix*: a square matrix with nonzero entries only on the
  diagonal or below, $A_{ij}$ for $i = 1, ..., n$ and $j \le i$.

  \begin{equation}
  \begin{bmatrix} 1 & 0 \\ 4 & 3 \end{bmatrix}
  \end{equation}

- *Identity matrix*: a diagonal matrix of ones, typically denoted **I**.

  \begin{equation}
  \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
  \end{equation}

There are several other types of special matrices, but we will leave those for a
longer course on linear algebra!

## Addition and scalar multiplication

- *Equality*: $\vv{A} = \vv{B}$ if and only if **A** and **B** have the same
  size and all their corresponding elements are equal.

- *Addition*: $\vv{C} = \vv{A} + \vv{B}$ is defined if **A** and **B** have the
  samesize. Then, the matrix elements are added element-wise:

  \begin{equation}
  C_{ij} = A_{ij} + B_{ij}
  \end{equation}

  Example:

  \begin{equation}
  \begin{bmatrix} 5 & -1 & 0 \\ 3 & 1 & 0 \end{bmatrix} +
  \begin{bmatrix} 1 & 5 & 3 \\ 3 & 2 & 2 \end{bmatrix} =
  \begin{bmatrix} -4 & 6 & 3 \\ 0 & 1 & 2 \end{bmatrix}
  \end{equation}

- *Scalar multiplication*: $\vv{B} = k\vv{A}$ multiplies each element of **A**
  by *k*:

  \begin{equation}
  B_{ij} = kA_{ij}
  \end{equation}

  Example:

  \begin{equation}
  -2 \begin{bmatrix} 1 & 0  \\ 0 & -2  \end{bmatrix}
  = \begin{bmatrix} -2 \times 1 & -2 \times 0 \\ -2 \times 0 & -2 \times 4 \end{bmatrix}
  = \begin{bmatrix} -2 & 0 \\ 0 & 4 \end{bmatrix}
  \end{equation}

- *Subtraction*: same as addition of negative
  $\vv{C} = \vv{A} - \vv{B} = \vv{A} + (-\vv{B})$ so

  \begin{equation}
  C_{ij} = A_{ij} - B_{ij}
  \end{equation}

```{topic} Rules of addition and scalar multiplication
- *Commutative*: $\vv{A} + \vv{B} = \vv{B} + \vv{A}$

- *Associative*: $(\vv{A} + \vv{B}) + \vv{C} = \vv{A} + (\vv{B} + \vv{C})$

- *Distributive*: $k(\vv{A} + \vv{B}) = k\vv{A} + k\vv{B}$
```

```{example} Matrix addition and scalar multiplication
Given

\begin{equation}
\vv{A} = \begin{bmatrix} -1 & 2  \\ 0 & 5  \end{bmatrix} \qquad
\vv{B} = \begin{bmatrix} 1 & 0  \\ 0 & 1  \end{bmatrix}
\end{equation}

Compute $2\vv{A} - \vv{B}$.

---

\begin{align}
2\vv{A}-\vv{B} &= 2 \begin{bmatrix} -1 & 2  \\ 0 & 5  \end{bmatrix} -
\begin{bmatrix} 1 & 0  \\ 0 & 1  \end{bmatrix} \\
&= \begin{bmatrix} -2 & 4  \\ 0 & 10  \end{bmatrix} -
\begin{bmatrix} 1 & 0  \\ 0 & 1  \end{bmatrix} \\
&= \begin{bmatrix} -3 & 4  \\ 0 & 9  \end{bmatrix}
\end{align}
```

## Matrix multiplication

**C** = **AB** is defined if **A** has the same number of columns as **B** has
rows. If **A** is *m* x *p* and **B** is *p* x *n*, **C** is *m* x *n* and its
elements are

\begin{equation}
C_{ij} = \sum_{k=1}^p A_{ik} B_{kj}
\end{equation}

Example:

\begin{align}
\begin{bmatrix} 3 & 5 \\ 4 & 0 \\ -6 & -3 \end{bmatrix}
\begin{bmatrix} 2 & -2 \\ 5 & 0 \end{bmatrix}
&= \begin{bmatrix} 3\times2 + 5\times5 & 3\times-2 + 5\times0 \\
4\times2 + 0\times5 & 4\times-2 + 0\times0 \\
-6\times2 + -3\times5 &   -6\times-2 + -3\times0 \end{bmatrix} \\
&= \begin{bmatrix} 31 & -6 \\ 8 & -8 \\ -27 & 12 \end{bmatrix}
\end{align}

Multiplying with a vector works the same!

\begin{align}
\begin{bmatrix} 3 & 5 \\ 4 & 0 \\ -6 & -3 \end{bmatrix}
\begin{bmatrix} 1 \\ 2 \end{bmatrix}
&= \begin{bmatrix} 3 \times 1 + 5 \times 2 \\
4 \times 1 + 0 \times 2 \\
-6 \times 1 + -3 \times 2
\end{bmatrix} \\
&= \begin{bmatrix} 8 \\ 4 \\ -12 \end{bmatrix}
\end{align}

```{topic} Rules of matrix multiplication
- *Associative*: $\vv{A}(\vv{B}\vv{C}) = (\vv{A}\vv{B})\vv{C}$

- *Distributive*: $(\vv{A} + \vv{B})\vv{C} = \vv{A}\vv{C} + \vv{B}\vv{C}$

- **Not** generally commutative, i.e., $\vv{A}\vv{B} \ne \vv{B}\vv{A}$ for all
  matrices.
```

## Transpose

$\vv{A}^{\rm T}$ is the transpose of **A**, and its elements are obtained by
"flipping" the rows and columns:

\begin{equation}
A_{ij}^{\rm T} = A_{ji}
\end{equation}

Example:

\begin{equation}
\begin{bmatrix} 1 & 2 \\ 4 & 3 \end{bmatrix}^{\rm T} =
\begin{bmatrix} 1 & 4 \\ 2 & 3 \end{bmatrix}
\end{equation}

A matrix is called *symmetric* if $\vv{A}^{\rm T} = \vv{A}$.

```{topic} Rules for transposition
- $(\vv{A}^{\rm T})^{\rm T} = \vv{A}$

- $(\vv{A} + \vv{B})^{\rm T} = \vv{A}^{\rm T} + \vv{B}^{\rm T}$

- $(\vv{A}\vv{B})^{\rm T} = \vv{B}^{\rm T} + \vv{A}^{\rm T}$

- $(k \vv{A})^{\rm T} = k\vv{A}^{\rm T}$
```

## Skill builder problems

Given the matrices:

$$
\vv{A} = \begin{bmatrix} 0 & 2 \\ 2 & 4 \\ 1 & 3 \\ \end{bmatrix}
\quad
\vv{B} = \begin{bmatrix} 0 & 2 &1 \\ 2 & 4 & 3 \end{bmatrix}
\quad
\vv{C} = \begin{bmatrix} 3 & 0 & 4 \\ -1 & 2 & 2 \\ 6 & 5 & -4 \end{bmatrix}
\quad
\vv{D} = \begin{bmatrix} 0 & -5 & -3 \\ -5 & 2 & 4 \\ -3 & 4 & 0 \end{bmatrix}
$$

and vectors:

$$
\vv{a} = \begin{bmatrix} 1 \\ 3 \end{bmatrix}
\quad
\vv{b} = \begin{bmatrix} 0 & 2 \end{bmatrix}
\quad
\vv{c} = \begin{bmatrix} 2 \\ 0 \\ -1 \end{bmatrix}
$$

Compute the following or explain why it is undefined.

1. $2\vv{A}$

   ```{solution}
   $$
   2\vv{A}
   = \begin{bmatrix}
   2 \cdot 0 & 2 \cdot 2 \\
   2 \cdot 2 & 2 \cdot 4 \\
   2 \cdot 1 & 2 \cdot 3 \end{bmatrix}
   = \begin{bmatrix} 0 & 4 \\ 4 & 8 \\ 2 & 6 \end{bmatrix}
   $$
   ```

2. $\vv{A + B}$

   ```{solution}
   Undefined because the shape of **A** (3×2) is different from the shape of
   **B** (2×3).
   ```

3. $\vv{A}^{\rm T} + \vv{B}$

   ```{solution}
   $$
   \vv{A}^{\rm T} + \vv{B}
   &= \begin{bmatrix} 0 & 2 & 1 \\ 2 & 4 & 3 \end{bmatrix}
   + \begin{bmatrix} 0 & 2 & 1\\ 2 & 4 & 3 \end{bmatrix} \\
   &= \begin{bmatrix} 0+0 & 2+2 & 1+1 \\ 2+2 & 4+4 & 3+3 \end{bmatrix} \\
   &= \begin{bmatrix} 0 & 4 & 2 \\ 4 & 8 & 6 \end{bmatrix}
   $$
   (or, $\vv{A}^{\rm T} = \vv{B}$ so $\vv{A}^{\rm T} + \vv{B} = 2\vv{B}$.)
   ```

4. $\vv{C - D}$

   ```{solution}
   $$
   \vv{C} -\vv{D}
   &= \begin{bmatrix}
   3-0 & 0-(-5) & 4-(-3) \\
   -1-(-5) & 2-2 & 2-4 \\
   6-(-3) & 5-4 & -4-0 \end{bmatrix} \\
   &= \begin{bmatrix} 3 & 5 & 7 \\ 4 & 0 & -2 \\ 9 & 1 & -4 \end{bmatrix}
   $$
   ```

5. $\vv{Aa}$

   ```{solution}
   $$
   \vv{Aa}
   &= \begin{bmatrix}
   0 \cdot 1 + 2 \cdot 3 \\
   2 \cdot 1 + 4 \cdot 3 \\
   1 \cdot 1 + 3 \cdot 3 \end{bmatrix} \\
   &= \begin{bmatrix} 6 \\ 14 \\ 10 \end{bmatrix}
   $$
   ```

6. $\vv{Ab}$

   ```{solution}
   Undefined because **A** has 2 columns but **b** has 1 row.
   ```

7. $\vv{Ac}$

   ```{solution}
   Undefined because **A** has 2 columns but **c** has 3 rows.
   ```

8. $\vv{Bc}$

   ```{solution}
   $$
   \vv{Bc}
   &= \begin{bmatrix}
   0 \cdot 2 + 2 \cdot 0 + 1 \cdot -1 \\
   2 \cdot 2 + 4 \cdot 0 + 3 \cdot -1 \end{bmatrix} \\
   &= \begin{bmatrix} -1 \\ 1 \end{bmatrix}
   $$
   ```

9. $\vv{c}^{\rm T}\vv{A}$

   ```{solution}
   $$
   \vv{c}^{\rm T} \vv{A}
   &= \begin{bmatrix} 0 & 2 & -1\end{bmatrix}
     \begin{bmatrix} 0 & 2 \\ 2 & 4 \\ 1 &3 \end{bmatrix} \\
   &= \begin{bmatrix}
   2 \cdot 0 + 0 \cdot 2 + -1 \cdot 1 &
   2 \cdot 2 + 0 \cdot 4 \cdot -1 \cdot 3 \end{bmatrix} \\
   &= \begin{bmatrix} -1 & 1 \end{bmatrix}
   $$
   ```
