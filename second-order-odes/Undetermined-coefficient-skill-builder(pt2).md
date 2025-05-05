# Undetermined coefficient skill builders (pt 2)
  Solve the differential equation:
    \being{equation}
    y'' + 3y' + 2y = 30e^{2x}, \quad y(0) = 1, \quad y'(0) = 0
    '''{solution}
    1. Find homogeneous solution $y_{\rm h}$:

      \begin{align}
      y_{\rm h}'' + 3y_{\rm h}' + 2y_{\rm h} &= 0 \\
      \lambda^{2} + 3\lambda + 2 &= 0
      \end{align}

      so (\lambda + 1)(\lambda + 2) &= 0 \rightarrow $\lambda{1} &= -1$ , $\lambda{2} &= -2$ and:

      \begin{equation}
      y_{rm h} = c_1 e^{x} + c_2 e^{-2x}
      \end{equation}

    2. Find particular solution $y_{\rm p}$:

      \begin{align}
      y_p &= ke^{2x} \\
      y_p' &= 2ke^{2x}  \\
      y_p'' &= 4ke^{2x}  
      \end{align}

      Combine:

      \begin{align}
      4ke^{2x}\cancel{e^{2x}} + 6ke^{2x}\cancel{e^{2x}} + 2ke^{2x}\cancel{e^{2x}} = 30e^2x\cancel{e^{2x}} \\
      12k = 30 \rightarrow k = \frac{5}{2} \\
      y_p = \frac{5}{2} e^{2x}
      \end{align}

    3. Combine and apply initial conditions:

      The general solution and its first derivative are

      \begin{align}
      y &= c_1 e^{-x} + c_2 e^-{2x} + \frac{5}{2} e^{2x} \\
      y &= -c_1 e^{-x} - 2c_2 e^{-2x} + 5e^{2x}
      \end{align}

      Plugging in initial conditions

      \begin{align} 
      y(0) &= c_1 + c_2 + \frac{5}{2} = 1 \\ 
      y'(0) &= -c_1 - 2c_2 + 5 = 0
      \end{align}
    
      Finding constants
      \begin{align}
      c_1 + c_2 &= -\frac{3}{2} \\
      c_1 + 2c_2 &= 5 \\ 
      \end{align}

      so $c_2 = \frac{13}{2}$ and $c_1 = -8$

The final solution is:

\begin{equation}
\boxed{y = -8e^{-x} + \frac{13}{2} e^{-2x} = \frac{5}{2} e^{2x}}
\end{equation}
''' 

  Solve the differential equation
  \begin{equation}
  y'' + 4y = 16 \cos 2x , \quad y(0), \quad y'(0) = 0
  \end{equation}
  '''
  1. Find homogeneous solution $y_{\rm h}:

     \begin{align}
     y_{\rm h}'' + 4y_{\rm h} &= 0 \\
     \lambda^{2} + 4 = 0 
     
     so $\lambda_{1,2} = \pm 2i$

     \begin{equation}
     y_{\rm h} = c_1 \cos 2x + c_2 \sin 2x
     \end{equation}
 2. Find the particular solution $y_{\rm p}$:
    
    \begin{align}
    y_p &= x(k_1 \cos 2x + k_2 \sin 2x) \\
    y_p' &= x(-2k_1 \sin 2x + 2k_2 \cos 2x)  + (k_1 \cos 2x + k_2 \sin 2x) \\
    y_p'' &= x(-4k_1 \cos 2x - 4k_2 \sin 2x) + 2(-2k_1 \sin 2x + 2k_2 \cos 2x) 
    \end{align}

    Combine:

    \begin{equation}
    y_p'' + 4y_p = 2(-2k_1 \sin 2x + 2k_2 \cos 2x) = 16\cos 2x
    \end{equation}

    so $k_1 = 0$ and $k_2 = 4$

3. Combine and apply initial conditions:

   The general solution and its first derivative are

   \begin{align}
   y &= c_1 \cos 2x + c_2 \sin 2x + 4x \sin 2x \\
   y' &= -2c_1 \sin 2x + 2c_2 \cos 2x + 4x(2 \cos 2x) + 4 \sin 2x
   \end{align}

   Plugging in the initial conditions

   \begin{align}
   y(0) &= c_1 = 0
   y'(0) &= 2c_2 = 0
   \end{align}

   so $c_1 = 0$ and $c_2 = 0$

The final solution is:

\begin{equation}
\boxed{y = 4x \sin 2x}
\end{equation}
'''


