# Background

## Definition

We know that an ODE contains one or more derivatives of an unknown function of
one variable.

\begin{align}
y'&= 6y+3
\end{align}

A system of first order ODE incorporates *n* unknown variables and *n*
expressions for those unknowns.

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

As seen above, one ODE can feature multiple unknowns from within the system.
Systems of ODE can incorporate other functions as part of their explicit
definition.

Consider the following first order ODE in explicit form.

\begin{align}
y' &= 6y+3
\end{align}

We know how to solve this by choosing the appropriate method from Chapter 5.
However, a problem occurs when a second ODE uses the unknown variable from the
first, incorporating two unknowns into one ODE:

\begin{align}
y' &= 6y+3\\
g' &= 5y+18g-4
\end{align}

The expression for $g'$ features two unknowns, $y$ and $g$. The ODE for $g'$ can
not be solved with any previous techniques because it features two unknowns.
Because of this, we have to use different techniques to solve this system of
first order ODE. In this module, we will learn how to solve for both $y$ and $g$
simultaneously.

## Linearity

A system of first-oder ODEs is linear if it can be written in the form:

\begin{equation}
\vv{y}' = \vv{A}(t) \vv{y} + \vv{g}(t)
\end{equation}

Linear systems have unique solutions and special properties we will discuss
later. An important special case is the homogeneous linear system with constant
coefficients:

\begin{equation}
\vv{y}' = \vv{A} \vv{y}
\end{equation}

Note that **A** is now constant and $\vv{g} = \vv{0}$. We will focus on solving
these types of problems because they come up a lot in chemical engineering
analysis (e.g., controls).
