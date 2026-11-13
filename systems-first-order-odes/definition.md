# Background

## Definition

We know that an ODE contains one or more derivatives of an unknown function of one variable. 
\begin{align}
y'&= 6y+3
\end{align}
A system of first order ODE incorporates *n* unknown variables and *n* expressions for those unknowns.

The general, explicit form of a system of first-order ODEs is:

\begin{align}
y_1' &= f_1(t, y_1, \cdots, y_n)\\
\vdots \\
y_n' &= f_n(t, y_1, \cdots, y_n)
\end{align}

where *t* is the independent variable, $(y_1, \cdots, y_n)$ are the *n*
dependent variables, and $(f_1, \cdots, f_n)$ are the *n* right-hand side
functions of the *n* ODEs. We will notate this system more compactly using
vectors

\begin{equation}
\vv{y}' = \vv{f}(t, \vv{y})
\end{equation}

where $y$ is the column vector of dependent variables, $f$ is the column
vector of right-hand side functions, and $\vv{y}'$ is a shorthand for the
column vector of first derivatives of all dependent variables.

As seen above, one ODE can feature multiple unknowns from within the system. Systems of ODE can incorporate other functions as part of their explicit definition.

Consider the following first order ODE in explicit form.

\begin{align}
y' &= 6y+3
\end{align}

We know how to solve this by choosing the appropriate method from Chapter 5. However, a problem occurs when a second ODE uses the unknown variable from the first, incorporating two unknowns into one ODE:

\begin{align}
y' &= 6y+3\\
g' &= 5y+18g-4
\end{align}

The expression for $g’$ features two unknowns, $y$ and $g$. The ODE for $g’$ can not be solved with any previous techniques because it features two unknowns. Because of this, we have to use different techniques to solve this system of first order ODE. In this module, we will learn how to solve for both $y$ and $g$ simultaneously.

## Successive Substitution

It is important to note that while multiple unknown variables can describe an explicit ODE, all unknowns are ultimately in terms of the single, independent variable. Consider Equation 5. We know $y$ is a function of $t$. Hence it can be shown that

\begin{align} 
g'(g,y,t) &= g'(g,y(t),t)
\end{align}
so 
\begin{align}
g'(g,y(t),t) &= g'(g,t)
\end{align}

By the relationship above, we know that both $y$ and $g$ are in terms of one independent variable, $t$. If we can find the solution for one ODE, we can substitute it into the expression for the second ODE and evaluate. This is a valuable method of solving systems and is called **successive substitution**.


To illustrate this technique, we can observe a reaction network. Consider the following reaction:

\begin{equation}
{\rm A} \xrightarrow{k_1} {\rm B} \xrightarrow{k_2} {\rm C}
\end{equation}

This network produces the following system of first order ODE. 

\begin{align}
\dd{}{c_{\rm A}}{t} &= -k_1 c_{\rm A} \\
\dd{}{c_{\rm B}}{t} &= k_1 c_{\rm A} - k_2  c_{\rm B} \\
\dd{}{c_{\rm C}}{t} &= k_2  c_{\rm B}
\end{align}

While it may not be obvious, we can solve this system through successive substitution. The derivative of $c_A$ is a normal, separable first order ODE that can be solved using the techniques from unit 5. Once we have the solution to $c_A$, $f(t)$, we can substitute that expression into the ODE for $c_B$. This will eliminate one of our unknowns, giving us one unknow, $c_B$, and one independent variable, t. 

\begin{align}
\dd{}{c_{\rm B}}{t} &= k_1 f(t) - k_2  c_{\rm B}
\end{align}

This one way in which successive substitution is a valuable tool for solving systems of ODE. 