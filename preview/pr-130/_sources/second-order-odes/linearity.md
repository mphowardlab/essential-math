# Linearity

A linear second-order ODE has the form:

\begin{equation}
y'' + p(x) y' + q(x) y = r(x)
\end{equation}

It is *nonhomogeneous* if $r(x) \ne 0$. The general solution is:

\begin{equation}
y = y_{\rm h} + y_{\rm p}
\end{equation}

where $y_{\rm h}$ is the general solution of the *homogenous* ODE

\begin{equation}
y_{\rm h}'' + p(x) y_{\rm h}'+q(x) y_{\rm h} = 0
\end{equation}

and $y_{\rm p}$ is the particular solution of the *nonhomogeneous* ODE. The
coefficients in $y_{\rm h}$ are used to "correct" the initial/boundary values of
$y_{\rm p}$ to satisfy the initial/boundary value problem. But, how do we find
$y_{\rm p}$?
