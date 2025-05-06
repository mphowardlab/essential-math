# Quadratic and cubic polynomials
\begin{document}


Nonlinear equations are those that cannot be written in the form $Ax = b$.
Such equations come up in many places
\begin{itemize}
  \item Equations of state $P(T, V) \rightarrow$ thermodynamics
  \item Navier-Stokes equations $\rightarrow$ fluid mechanics
  \item Second-order reactions $A + B \rightarrow C$ $r_A = -kC_AC_B \rightarrow$ reactions
  \item Optimization/process design of full systems $\rightarrow$ design

\textbf{Ex:} An open-top box will be made from an $8 \frac{1}{2}'' \times 11''$ piece of paper by cutting out a square and folding the flaps. What size square should be cut to make the biggest box?

\begin{figure}
    \centering
    \includegraphics[width=0.5\linewidth]{Image 5-6-25 at 1.43 PM.jpg}
    \label{fig:enter-label}
\end{figure}

$V(x) = (8.5 - 2x)(11-2x)x$

$= (8.5-2x)(11x-2x^2)$

$= 4x^3 - 39x^2 + 93.5x$

At a max./min. $V'(x) = 0$
$V'(x) = 12x^2 - 78x + 93.5$

Solve for $V'(x) = 0$ \ldots how?

\section*{1. Quadratic Polynomials}
\begin{enumerate}[label=\alph*.]
  \item Factor
  \begin{enumerate}[label=\roman*.]
    \item $X^2 + 8x - 9 = 0 \rightarrow (x+9)(x-1) = 0 \rightarrow x = -9 \text{ or } 1$
  \end{enumerate}
  
  \item Complete the square
  \begin{enumerate}[label=\roman*.]
    \item $x^2 + 8x = 9 \rightarrow x^2 + 8x + 16 = 9 + 16 \rightarrow (x+4)^2 = 25 \rightarrow x + 4 = \pm \sqrt{25}$
    $= -4 \pm 5 = -9 \text{ or } 1$
  \end{enumerate}
  
  \item Quadratic formula
  \begin{enumerate}[label=\roman*.]
    \item $ax^2 + bx + c = 0$ $a = 1$ $b = 8$ $c = -9$
    
    $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ $x = \frac{-8 \pm \sqrt{(8)^2 - 4 \cdot 1 \cdot (-9)}}{2}$
    
    $= \frac{-8 \pm \sqrt{100}}{2}$
    
    $= -9 \text{ or } 1$
  \end{enumerate}
\end{enumerate}

\textbf{Back to example:}

$a = 12$ $b = -78$ $c = 93.5$

$x^* = \frac{78 \pm \sqrt{(-78)^2 - 4 \cdot 12 \cdot (-93.5)}}{2 \cdot 12} = 1.59'' \text{ or } 4.91''$

Which is right? $1.59''$ because there is not enough material for $4.91''$! It is unphysical.

\end{document}