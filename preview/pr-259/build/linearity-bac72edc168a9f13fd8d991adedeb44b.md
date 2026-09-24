# Linearity

A linear second-order ODE has the form:

\begin{equation}
y'' + p(x) y' + q(x) y = r(x)
\end{equation}

It is *nonhomogeneous* if $r(x) \ne 0$ and *homogeneous* if $r(x) = 0$.
A second-order ODE requires two additional pieces of information to fully
specify the problem.

If $y(x_0)$ and $y'(x_0)$ are prescribed at the same point $x_0$, we have an
*initial value problem* (IVP). This IVP is analogous to the one we had for
first-order ODEs, and often occurs when the independent variable is time. Note
that if $p(x)$ and $q(x)$ are continuous, the IVP has a unique solution!

However, we may also have information about the function at two different points
$x_0$ and $x_1$, which we call a *boundary value problem* (BVP). For example,
$y(x_0)$ and $y(x_1)$, their derivatives, or combinations of the two may be
prescribed at different points. BVPs are often associated with problems where
the independent variable represents a spatial coordinate. Note that, unlike an
IVP, a unique solution is not guaranteed for a BVP.

## Homogenous linear second-order ODEs

```{topic} Homogenous linear second-order ODEs
If a linear second-order ODE is homogeneous, $y'' + p(x) y' + q(x) y = 0$, its
general solution is:

\begin{equation}
y = c_1 y_1 + c_2 y_2
\end{equation}

$y_1$ and $y_2$ form a *basis* of solutions, and $c_1$ and $c_2$ are coefficients
that will be chosen to satisfy the IVP or BVP.
```

This is an application of the principle of superposition. Importantly, this form
of solution contains **all** general solutions for the homogeneous ODE. For
example, to solve

\begin{equation}
y' + y = 0 \quad y(0) = 3, \quad y'(0) = -1/2
\end{equation}

You can guess and verify that $y_1 = \cos x$ and $y_2 = \sin x$ are both
solutions since $y_1'' = -\cos x$ and $y_2'' = -\sin x$. So, the general
solution is

\begin{equation}
y = c_1 \cos x + c_2 \sin x
\end{equation}

To apply the initial condition, we will also need its first derivative

\begin{equation}
y' = -c_1 \sin x + c_2 \cos x
\end{equation}

Using the initial conditions gives:

\begin{align}
y(0) = c_1 = 3 \\
y'(0) = c_2 = -\frac{1}{2}
\end{align}

so

\begin{equation}
y = 3\cos x - \frac{1}{2} \sin x
\end{equation}

We will learn techniques for finding the basis of solution next.

```{warning}
Superposition does **not** work for nonhomogeneous ODES!
Consider the modification:

\begin{equation}
y'' + y = 1
\end{equation}

This ODE is solved by $y_1 = 1 + \cos x$ and $y_2 = 1 + \sin x$. However, a
multiple like $2y_1$ or a combination like $y_1 + y_2$ do not solve the ODE.
```

## Nonhomogeneous linear second-order ODEs

```{topic} Nonhomogeneous linear second-order ODEs
If a linear second-order ODE is nonhomogeneous, $y'' + p(x) y' + q(x) y = r(x)$,
its general solution is:

\begin{equation}
y = y_{\rm h} + y_{\rm p}
\end{equation}

where $y_{\rm h}$ is the general solution of the *homogenous* ODE

\begin{equation}
y_{\rm h}'' + p(x) y_{\rm h}'+q(x) y_{\rm h} = 0
\end{equation}

and $y_{\rm p}$ is the particular solution of the *nonhomogeneous* ODE.
```

The coefficients in $y_{\rm h}$ are used to "correct" the initial/boundary
values of $y_{\rm p}$ to satisfy the initial/boundary value problem. We will
learn how to find particular solutions later.
