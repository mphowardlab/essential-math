# Determinants
For a square nxn matrix A, the determinant is divided.
det A=|A|= [A_11 A_1n, A_n1 A_nn]
For n=1, |A|= A_11 (the element)
For n goes to 2, |A| is definded in a sort of recursive way
|A|= sum n j=1 A_ij C_ij (cofactor)= sum n j=1 (-1)^(i+j) A_ij M_ij (i=1, ..., or n: any row)
C_ij=(-1) M_ij ("minor": determinant of the matrix obtained by removing row i and column j)
-or- |A|= sum n i=1 A_ij C_ij = sum n i=1 A_ij C_ij = sum n i=1 (-1)^(i+j) A_ij M_ij (j=1,..., or n: any column)
Ex: Determinant of a 2X2 matrix A= [a b, c d]
|A|=[a b, c d] choose i=1 = (-1)^(1+1)1 a M_11+(-1)^(1+2)-1 b M_12=ad-bc
M_11:[a b, c d] goes to |d|=d M_12: [a b, c d] goes to |c|=c
This is a useful formula to know! Mneumonic
[a b, c d] - + =ad-bc
Ex: 3x3 matrix A= [ 1 3 0, 2 6 4, -1 0 2] i=3 j=3 [+ - +, - + -, + - +] (signs make a checker board)
|A|=+(-1)*[2 6, -1 0]-(0)*[1 0, 2 4]+ 2*[1 3, 2 6]=-((3*4)-(0*6))+2*((1*6)-(2*3))=-12
|A|=+(0)*[2 6, -1 0]-(4)*[1 3, -1 0] + 2[1 3, 2 6]= -4*(0+3)+2*(6-6)= -12
Its usually a good idea to expand along the row or column with the most zeros!
[1 -2 0 0, 4 3 5 0, 0 2 7 5, 0 0 2 0]i=4 [- + - +]=-2[1 -2 0, 4 3 0, 0 2 5]j=3 [+ - +]= (-2)*(5)*[1 -2, 4 3]= -10*(3+8)=-110
How does this help us ?
A= is invertible (nonsingular) if and only if |A| not equal 0.
(This is one of many conditions known as the invertible theorem )