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

## Matrix Operations
- *Equality*: **A** = **B** if and only if **A** and **B** have the same size and all their corresponding elements are equal. \
  
- *Addition*: **C** = **A** + **B** is defined if **A** and **B** have the same size. \
  
emsp Then, $C_{ij}$ = $A_{ij}$ + $B_{ij}$

\begin{equation} 
\begin{bmatrix} -4 & 6 & 3 \\ 0 & 1 & 2 \end{bmatrix} =

\begin{bmatrix} 5 & -1 & 0 \\ 3 & 1 & 0 \end{bmatrix} +

\begin{bmatrix} 1 & 5 & 3 \\ 3 & 2 & 2 \end{bmatrix}
\end{equation}

- *Scalar Multiplication*: **B** = k**A** multiplies each element of **A** by k.
  
- $B_{ij}$ = k $A_{ij}$

\begin{equation} 
-2 \begin{bmatrix} 1 & 0  \\ 0 & -2  \end{bmatrix} =

\begin{bmatrix} -2 & 0 \\ 0 & 4 \end{bmatrix}
\end{equation}

- *Subtraction*: same as addition of negative **C** = **A** - **B** = **A** + (- **B**) \

Rules of addition and scalar multiplication \

**A** + **B** = **B** + **A**  (commutative) \
( **A** + **B** ) + **C** = **A** + ( **B** + **C** )  (associative) \
c( **A** + **B** ) = c**A** + c**B**  (distributive) \


\begin{equation} For 
\vv{A} = \begin{bmatrix} -1 & 2  \\ 0 & 5  \end{bmatrix}
\end{equation}


\begin{equation} and 
\vv{B} = \begin{bmatrix} 1 & 0  \\ 0 & 1  \end{bmatrix} 
\end{equation}

,compute 2**A** - **B** 

