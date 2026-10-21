# Background

## Definition

An **ordinary differential equation** (ODE) contains one or more derivatives of
an unknown function of one variable.

\begin{align}
&y' = \cos x \\
&y'' + 9y = 0 \\
&x^2 y''' y' + 2e^x y^4 = (x^2 + 2)y^2
\end{align}

The **order** of an ODE is its highest derivative. The examples above are
first order, second order, and third order ODEs, respectively, because their
highest-order derivatives are $y'$, $y''$, and $y'''$. This chapter is focused
only on first-order ODEs, but we will learn about
[second-order ODEs](../second-order-odes/index.md) later.

First-order ODEs can be written most generally in **implicit form**:

\begin{equation}
F(x, y, y') = 0
\end{equation}

where $F$ is an arbitrary function of the independent variable $x$, the
dependent variable (unknown function) $y$, and its derivative $y'$.
First-order ODEs can sometimes also be written in **explicit form**:

\begin{equation}
y' = f(x, y)
\end{equation}

where $f$ is an arbitrary function of only $y$ and $y'$. Not all first-order
ODEs can be written in explicit form: you have to be able to isolate $y'$ from
$x$ and $y$.

## General and particular solutions

The **general solution** to a first-order ODE will contain a constant $c$, so
first-order ODEs have a family of solutions. For example, the first-order ODE

\begin{equation}
y' = xy
\label{eq:first-order-odes:background:ode}
\end{equation}

has the general solution:

\begin{equation}
y = c e^{x^2 / 2}
\label{eq:first-order-odes:background:general}
\end{equation}

````{trythis}

Verify the given general solution to
Eq. {eq}`eq:first-order-odes:background:general`.

---

First, evaluate the derivative $y'$:

```{dropdown} Check your work

\begin{equation}
y' = c x e^{x^2/2}
\end{equation}
```

Then, substitute $y$ and $y'$ in the ODE and check if it holds for all $x$:

```{dropdown} Check your work
\begin{align}
y' &= xy \\
c x e^{x^2 / 2} &= x (c e^{x^2 / 2})
\end{align}

Both sides are equal to each other, so the solution is correct!
```
````

Different functions, all satisfying the ODE, can be created by choosing a value
of $c$. We call each of these solutions a **particular solution**.

## Initial value problems

Which particular solution is the "right" one? If we know the value
of the function at a point, we can substitute this point into a
general solution and solve for $c$. For example, let's say we know that
$y = 0$ when $x = 0$. Substituting into the general
solution [Eq. {eq}`eq:first-order-odes:background:general`] gives:

\begin{equation}
1 = c e^0 = c
\end{equation}

so the particular solution is:

\begin{equation}
y = e^{x^2/2}
\end{equation}

We call a point $(x_0, y_0)$ where we know the value of the function an
**initial condition**. It is often a starting point if the independent variable
is time, but it does not have to be: the particular solution is only required to
pass through this point. In this sense, you can think of the initial condition
as being a piece of information you know about the function.

A first-order ODE paired with an initial condition is called an
**initial value problem**. Initial value problems are important for
chemical engineering because they show how a dependent quantity evolves from a
known point in time or space.

## Direction field

Graphically, an explicit first-order ODE can be represented by a **direction
field** (or slope field) showing the tangent to a particular solution
at a point $(x,y)$ because $y'$ represents the local rate of change.
Starting from a point in the direction field and tracing a curve through it
gives a particular solution, which corresponds to a certain value of
$c$.

````{trythis}
The plot below shows the {span .text-mpl-blue}`direction field` for
Eq. {eq}`eq:first-order-odes:background:ode` with a
{span .text-mpl-red}`particular solution` traced out (line) starting
from an initial condition $y(x_0) = y_0$ (point). You can change the initial
condition using the sliders or by clicking a point on the direction field.

1. Predict what you think will happen to the particular solution if you increase
   $x_0$ with $y_0$ held constant or increase $x_0$ with $y_0$ held constant.
   Move the initial condition to a few different points to test your prediction.

2. Find two initial conditions that have the *same* particular solution. (Hint:
   What must be true about $c$ for the particular solutions to be the same?)

```{anywidget} ./_widgets/direction-field.mjs
:css: /_styles/widget.css
```

After you are done, answer the following questions:

1. Solve for the unknown constant $c$ when the initial condition is $y(1) = 1$.

   ```{dropdown} Check your work

   \begin{equation}
   1 = y(1) = c e^{1^2/2} \to c = e^{-1/2} = 0.607
   \end{equation}

   You can also use the sliders to confirm!
   ```

2. Explain why the particular solution is a horizontal line when $y(0) = 0$.

   ```{dropdown} Check your work

   The solution is a horizontal line because all slopes are zero when $y = 0$.
   The curve traced through these slopes must stay horizontal.
   ```

````
