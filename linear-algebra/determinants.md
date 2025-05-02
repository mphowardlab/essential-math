# Determinants
For a square *nxn* matrix *A*, the *determinant* is divided.

$$

\det |A| =|A|=\begin{bmatrix}A_{11}.\ .\ . & B_{1n} \\ .\\.\\A_{n1}.\ .\ . & A_{nn}\end{bmatrix}

$$
For  $n=1$, $|A|= A_{11}$ (the element)

For $n \to 2$, |A| is defined in a sort of recursive way




$$ |A|=\left( \sum_{j=1}^n A_{ij} C_{ij} \right) =  \left( \sum_{j=1}^n (-1)^{i+j} \right) A_{ij} M_{ij} $$
($C_{ij}$ is the *cofactor*) (i=1, ..., or n: any row)

$$ \left( C_{ij} = (-1)^{i+j} M_{ij} \right) $$
($M_{ij}$- "*minor*": is the determinant of the matrix obtained by removing row *i* and column *j*)


$$ -or- =\left( \sum_{i=1}^n A_{ij} C_{ij} \right)= \left( \sum_{i=1}^n \right) (-1)^{i+j} A_{ij} M_{ij} $$
 (j=1,..., or n: any column)


**Ex:** Determinant of a *2 x 2* matrix A
$$ A=\begin{bmatrix}a & b \\ c & d \end{bmatrix}$$



$$ A=\begin{bmatrix}a & b \\ c & d \end{bmatrix}$$
choose i=1 = (-1)^(1+1)1 a* $M_{11}$+ (-1)^(1+2) -1 b * $M_{12}$ = **ad-bc**


$M_{11}$:[a b, c d] goes to |d|=d $M_{12}$: [a b, c d] goes to |c|=c
This is a useful formula to know! *Mneumonic*

[a b, c d] - + =ad-bc


**Ex:** *3x3* matrix , note that i=3 & j=3 
$$ A=\begin{bmatrix}1 & 3 & 0 \\ 2 & 6 & 4 \\ -1 & 0 & 2 \end{bmatrix}$$
$$ A=\begin{bmatrix}+ & - & + \\ - & + & - \\ + & - & + \end{bmatrix}$$
(positive and negative signs form a checker board)

$$ |A|= +(-1)*\begin{bmatrix}2 & 6 \\ -1 & 0 \end{bmatrix} -(0)*\begin{bmatrix}1 & 0 \\ 2 & 4 \end{bmatrix}+(2)*\begin{bmatrix}1 & 3 \\ -2 & 6 \end{bmatrix}$$
|$A$|=$-((3*4)-(0*6))+2*((1*6)-(2*3))=-12$



$$ |A|= +(0)*\begin{bmatrix}2 & 6 \\ -1 & 0 \end{bmatrix} -(4)*\begin{bmatrix}1 & 3 \\ -1 & 0 \end{bmatrix}+(2)*\begin{bmatrix}1 & 3 \\ 2 & 6 \end{bmatrix}$$
|$A$|=$-4*(0+3)+2*(6-6)= -12$


Its usually a good idea to expand along the row or column with the most zeros!
$$ A=\begin{bmatrix}1 & -2 & 0 & 0 \\ 4 & 3 & 5 & 0 \\ 0 &2 & 7 & 5 \\ 0 & 0 & 2 & 0 \end{bmatrix}= (-2)\begin{bmatrix}1 & -2 & 0 \\ 4 & 3 & 0 \\ 0 &2 & 5 \end{bmatrix}=  (-2)(5)\begin{bmatrix}1 & -2 \\ 4 & 3 \end{bmatrix}=-10*(3+8)=-110$$



How does this help us?

$A$ = is invertible (*nonsingular*) if and only if |$A$| not equal 0.

(*This is one of many conditions known as the invertible theorem*)