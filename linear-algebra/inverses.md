# Matrix inversion
Example: Use Pump Example
Q_1-Q_2+Q_3=0   (1)
-Q_1+Q_2-Q_3=0
20Q_1+10Q_2=80  (2)
10Q_2+25Q_3=90  (3)
We need a square matrix. We know one equation is redundant since we got a row of zeros before, so choose three equations. 
A= 
\begin{equation}
\begin{bmatrix} 1&-1&1 \\ 20&10&0 \\ 0&10&25\end{bmatrix}
\begin{bmatrix} 0 \\ 80 \\ 90\ end{bmatrix}

|A|= -10* \left|\begin{array}{ccc} 
1&1 \\ 20 & 0\end{array}\right| + 25*\left|\begin{array}{ccc} 
1&-1 \\ 20 & 10\end{array}\right|= 10*(0-20)+25*(10+20)=200+750=950
***
\begin{bmatrix}1&-1&1&1&0&0 \\ 0&10&25&0&1&0 \\ 0&10&25&0&0&1 \end{bmatrix} \to 
\begin{bmatrix}1&-1&1&1&0&0 \\ 0&30&-20&-20&1&0 \\ 0&10&25&0&0&1 \end{bmatrix} \to 
\begin{bmatrix}1&-1&1&1&0&0 \\ 0&10&25&0&0&1 \\ 0&0&-95&-20&1&-3 \end{bmatrix} \to 
\begin{bmatrix}1&-1&1&1&0&0 \\ 0&1&2.5&0&0&0.1 \\ 0&0&1&.211&-.010&.032 \end{bmatrix} \to 
\begin{bmatrix}
1&-1&0&.789&.010&-.032 \\ 0&1&0&-.528&.025&0.020 \\ 0&0&1&.211&-.010&.032 \end{bmatrix} \to 
\begin{bmatrix}
1&0&0&.261&.035&-.012 \\ 0&1&0&-.528&.025&0.020 \\ 0&0&1&.211&-.010&.032 \end{bmatrix}