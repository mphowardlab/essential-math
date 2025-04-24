# Undetermined coefficients
Solve the following:

(a) \( y'' + 3y' + 2y = 30e^{2x} \)  
(b) \( y(0) = 1 \)  
(c) \( y(0) = 0 \)
Homogeneous problem: \( y'' + 3y' + 2y = 0 \)
\[ \lambda^2 + 3\lambda + 2 = 0 \Rightarrow (\lambda + 1)(\lambda + 2) = 0 \Rightarrow \lambda_1 = -1, \lambda_2 = -2 \]
\[ y_h = c_1 e^{-x} + c_2 e^{-2x} \]
Particular solution: Use undetermined coefficients
\[
\begin{aligned}
y_p &= k e^{2x} \\
y_p' &= 2k e^{2x} \\
y_p'' &= 4k e^{2x}
\end{aligned}
\]
\[ 4(k e^{2x}) + 6(k e^{2x}) + 2(k e^{2x}) = 30e^{2x} \]
\[ 12k = 30 \Rightarrow k = \frac{5}{2} \]
\][y_p=\frac{5}{2}e^{2x}\]

Boundary conditions:
\[
\being{aligned}
y &= c_1 e^{-x} + c_2 e^{-2x} + \frac{5}{2} e^{2x} \\
y' &= -c_1 e^{-x} - 2c_2 e^{-2x} + 5 e^{2x}
\end{aligned}
\]
\[
\begin{aligned}
1 &= y(0) = c_1 + c_2 + \frac{5}{2} \Rightarrow c_1 + c_2 = -\frac{3}{2} \\
0 &= y'(0) = -c_1 - 2c_2 + 5  c_1 + 2c_2 = 5
\end{aligned}
\]
\( c_1 = -8 \), \( c_2 = \frac{13}{2} \).
\[ y = -8e^{-x} + \frac{13}{2} e^{-2x} + \frac{5}{2} e^{2x} \]
(c) \( y'' + 4y = 16 \cos 2x \)  
\( y(0) = y'(0) = 0 \)  
Homogeneous:  
\[ y'' + 4y = 0 \]  
\[ \lambda^2 + 4 = 0 \Rightarrow \lambda_{1,2} = \pm 2i \]  
\[ y_h = c_1 \cos 2x + c_2 \sin 2x \]  
Particular:  
\[ y_p = x (k_1 \cos 2x + k_2 \sin 2x) \]  
\[ y_p' = x (-2k_1 \sin 2x + 2k_2 \cos 2x) + (k_1 \cos 2x + k_2 \sin 2x) \]  
\[ y_p'' = x (-4k_1 \cos 2x - 4k_2 \sin 2x) + 2(-2k_1 \sin 2x + 2k_2 \cos 2x) \]  
\[ y_p'' + 4y_p = 2(-2k_1 \sin 2x +2k_2 \ cos 2x) = 16 \cos 2x \]
\[ \Rightarrow k_1=0  k_2 = 4\] 
Boundary conditions:  
\[ y = c_1 \cos 2x + c_2 \sin 2x + 4x \sin 2x \]  
\[ y' = -2c_1 \sin 2x + 2c_2 \cos 2x + 4x (2 \cos 2x) + 4 \sin 2x
\[ 0 = y(0) = c_1 \Rightarrow c_1 = 0\]
\[ 0 = y'(0) = 2c_2 \Rightarrow c_2 = 0\]
\[ y = 4x \sin 2x \]