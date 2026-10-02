---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Background

```{interactive-directions}
```

```{code-cell}
:tags: [skip-execution]
%pip install ipympl ipywidgets
```

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

Verify the general solution by evaluating $y'$, then substituting $y$ and $y'$
in the ODE to check if it holds for all $x$.

```{dropdown} Check your work

The derivative is:

\begin{equation}
y' = c x e^{x^2/2}
\end{equation}

so

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

The plot below shows the {span .text-mpl-blue}`direction field` for
Eq. {eq}`eq:first-order-odes:background:ode` with a
{span .text-mpl-red}`particular solution` traced out (line) starting
from an initial condition $(x_0,y_0)$ (point).

```{trythis}
Vary the initial condition using the sliders to see how the particular solution
changes. All the solutions you trace are members of the family of solutions to
this ODE! Note that $c$ changes with the initial condition too.
```

```{code-cell}
:tags: [hide-input]

%matplotlib widget
import ipywidgets
import numpy
import matplotlib.pyplot

fig, ax = matplotlib.pyplot.subplots()
fig.canvas.header_visible = False

# direction field, evaluated on a regular 2d grid
x = numpy.linspace(-2, 2, 17)
y = numpy.linspace(-2, 2, 17)
X, Y = numpy.meshgrid(x, y)

dx = numpy.ones_like(X)
dy = X * Y
norm = numpy.sqrt(dx**2 + dy**2)
U = dx / norm
V = dy / norm

ax.quiver(
    X, Y, U, V, pivot="mid", angles="xy",
    headwidth=0, headlength=0, headaxislength=0, color="#377eb8"
)

# analytical solution to IVP
def analytical_solution(x, x0, y0):
    """Analytical solution of ODE."""
    return (y0 / numpy.exp(x0**2 / 2)) * numpy.exp(x**2 / 2)

# start plot from initial condition (0, 1)
line = ax.plot(x, analytical_solution(x, 0.0, 1.0), color="#e41a1c")
pt = ax.plot(0, 1, marker="o", ls="none", color="#e41a1c")
c = ax.text(0.5, 1.05, "$c = 1$", ha="center", va="bottom", transform=ax.transAxes)

# vary the initial condition
@ipywidgets.interact(
    x0=ipywidgets.FloatSlider(value=0, min=x[0], max=x[-1], step=0.1, description=r"$x_0$"),
    y0=ipywidgets.FloatSlider(value=1, min=y[0], max=y[-1], step=0.1, description=r"$y_0$"),
)
def update(x0, y0):
    x_ = numpy.linspace(x[0], x[-1])
    c_ = y0 / numpy.exp(x0**2 / 2)
    line[0].set_data(x_, analytical_solution(x_, x0, y0))
    pt[0].set_data([x0], [y0])
    c.set_text(f"$c = {c_:.2f}$")

# plot styling
ax.axhline(0, x[0], x[-1], color="black", zorder=0)
ax.axvline(0, y[0], y[-1], color="black", zorder=0)
ax.set_xlabel("$x$")
ax.set_xlim((x[0], x[-1]))
ax.set_ylabel("$y$")
ax.set_ylim((y[0], y[-1]));
```
